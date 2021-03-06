var React = require('react/addons');
var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var RoomActions = require('../actions/RoomActions');
var UserStore = require('../stores/UserStore');

var CreateRoomModal = React.createClass({
    getInitialState : function() {
        return({
            mounted : false,
            username : UserStore.getUsername(),
            currentRoom : UserStore.getCurrentRoom()
        });
    },
    
    componentDidMount : function() {
        this.setState({mounted : !this.state.mounted});
    },
    
    _onUserChange : function() {
        this.setState({
            username : UserStore.getUsername(),
            currentRoom : UserStore.getCurrentRoom()
        })
    },
    
    resetInput : function() {
        React.findDOMNode(this.refs.roomNameInput).value = '';
    },
    
    handleToggle : function() {
        this.resetInput();
        /*
            The next line is rather fragile. It'll trigger the component
            removal process (and animation) on the inner form. If the form's animation 
            lasts as long as its parent's animation, then it will throw an error,
            because the child is removed from the DOM before React can call its 
            componentDidUnmount() function, which happens at the end of the 
            transition event. This will cause React to reference 'undefined', 
            since ths child no longer exists.

            Therefore, the form's *-leave animation must be shorter than 
            the modal's *-leave animation. It might sometimes throw
            and error anyway because the timing is unrelibale. A difference of 0.1s
            between animations seems to prevent most errors.
        */  
        this.setState({mounted : !this.state.mounted});
        this.props.toggle();
    },
    
    handleKeyDown : function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            this.handleSubmit(); 
        }
    },
    
    handleSubmit : function() {
        var value = React.findDOMNode(this.refs.roomNameInput).value;
        if (value.length > 0) {
            var newRoom = {
                name : value
            };
            RoomActions.createRoom(newRoom, this.state.currentRoom, this.state.username);
        }
        this.handleToggle();
    },
    
    generateRoomCreateForm : function() {
        return (
            <form className="modal-form">
                <div className="modal-header no-select">
                    Create a New Room
                </div>
                <div className="modal-body">
                    <p>Create a public room on the server every user can see and join.</p>
                    <div className="modal-entry-group">
                        <label className="modal-label no-select">Name</label>
                        <input className="modal-input" ref="roomNameInput" maxLength="20" autoFocus/>
                    </div>
                </div>
                <div className="modal-footer">
                    <div className="modal-button red no-select" onClick={this.handleToggle}>Cancel</div>
                    <div className="modal-button green no-select" onClick={this.handleSubmit}>Submit</div>
                </div>
            </form>
        )
    },
    
    render : function(){
        var roomForm = this.state.mounted ? this.generateRoomCreateForm() : null;
        return (
            <div className="modal-dialog" onKeyDown={this.handleKeyDown}>
                <div onClick={this.handleToggle} className="modal-dim"></div>
                <ReactCSSTransitionGroup transitionName="animate">
                    {roomForm}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
});

module.exports = CreateRoomModal;