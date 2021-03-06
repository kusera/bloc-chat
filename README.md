#Bloc-Chat
>A chat app for [Bloc](https://www.bloc.io) made with React/Flux

##Design
###Basic Features
    1. User
        a. Change Username
            - [ ] Usernames unique across all rooms
            - [x] Default username on new session
        b. Saved Session
            - [x] Remember chosen username
            - [x] Remember active room
    2. Room
        a. List
            - [x] Join any room by clicking on it
        b. Create
            - [x] Create a new room on the server with a modal form
            - [ ] Room creator assumes ownership of the room
            - [ ] Ownership passes to other users at the end of a user's session
        d. Members
            - [x] Display active users in a room as well as the owner
    3. Message 
        a. List
            - [x] Every message is associated with a name and timestamp
            - [x] Every message for a room persists on the server
            - [ ] Show joining and leaving of users
        b. Send
            - [x] Send new message to the room associated with current username
            - [ ] Messages support Markdown
###Advanced Features
    1. User
        a. Register
            - [ ] Creates a persistent user account with associated an email and password
            - [ ] Access to additional featureset
        b. Change Username
            - [ ] Changed names propagate to all messages associated with registered user
            - [ ] Registered users have hidden, unique numeric identifiers so they may use any name
        c. Change Icon
            - [ ] Changed icons propagate to all messages associated with registered user
    2. Room
        a. Subscription
            - [ ] List of rooms "watched" by a registered user
            - [ ] Can unsubscribe at any time
            - [ ] Rooms remember subscribed users and will not "empty" unless all users unsubscribe
        b. Members
            - [ ] Display active users and whether they're an Owner, a Registered User, or a Temporary User
        c. Create
            - [ ] Ownership persists for registered users
            - [ ] Ownership passes along subscribed users first
        d. Delete
            - [ ] Inactive rooms will self-delete
            - [ ] Owners can delete their own room
        e. Log
            - [ ] Generate plaintext of room's history
        f. Scramble
            - [ ] Owners can force all active registered users to assume unique, randomly generated display names
        g. Topic
            - [ ] Owners can set a topic that's viewable in the header
    3. Message 
        a. Edit
            - [ ] Messages of registered users can be edited
        b. Delete
            - [ ] Messages of registered users can be deleted
    4. Media Query
        a. Smartphone
            - [ ] Support compact layout for small vertical screens

##Gulp Tasks
#####gulp
    * Runs `development` first and copies/bundles everything from `src` to `dev`
    * Watches for changes to `index.html` or `src` and then copies changed files to `dev`.
    * Includes `live-reload` for browsers with the [extension](http://livereload.com/extensions/).
    
#####gulp dev
    * Builds `src/js` files into `dev/js` as `bundle.js`.
    * Builds `src/styles` files into `dev/styles` as `style.css`.
    * Copies `src/images` into `dev/images`.
    * Copies `index.html` into `dev` and injects `build.js` and 'style.css'.

#####gulp production
    * Builds and Uglifies `src/js` files into `prod/js` as `build.min.js`.
    * Builds `src/styles` files into `prod/styles` as `style.css`.
    * Copies `src/images` into `prod/images`.
    * Copies `index.html` into `prod` and injects `bundle.min.js` and 'style.css'.

