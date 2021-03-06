var React = require('react');

var SCROLL_ZONE = 50;

var MessageList = React.createClass({  
    componentDidMount : function () {
        listRef = React.findDOMNode(this.refs.messageList);
        listRef.scrollTop = listRef.scrollHeight;
    },
    
    componentDidUpdate : function () {
        listRef = React.findDOMNode(this.refs.messageList);
        
        if (listRef.scrollHeight - (listRef.scrollTop + listRef.clientHeight) > SCROLL_ZONE) {
            listRef.scrollTop = listRef.scrollHeight;
        }
    },
    
    render : function () {
        return (
            <div className="message-list-wrapper member-sidebar-offset" >
                <div className="message-list" ref="messageList">
                    {this.props.messages}
                </div>
            </div>
        );
    }
});

module.exports = MessageList;