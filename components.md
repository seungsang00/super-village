# Components Structure
# Map (App)
## props
 null
## state
 - myUser : `Object`
 ```json
  {
    "id": 1,
    "name": "myName",
    "position": {
      "x": "int px", // Position from the Left in the parent component (px)
      "y": "int px" // Position from the Top in the parent component (px)
    }, 
    "closeObj": "Object||other name"
  }
 ```
 - others : `Array<other>`
   other: `Object`
 ```json
  [{
    "id": 2,
    "name": "String",
    "position":{
      "x": "int px", // Position from the Left in the parent component (px)
      "y": "int px" // Position from the Top in the parent component (px)
    },
    // ...
  }]
 ```
 - objects : `Array<object>`
   object: `Object`
 ```json
  [
    {
      "name": "todolist", // object's name
      "position": {
        "x": "int px", // Position from the Left in the parent component (px)
        "y": "int px" // Position from the Top in the parent component (px)
      },
      "component":"React.Component"
    },
    // ...  
  ]
 ```
 - messages : `Array<message>`
   message : `Object`
 ```json
  [{
    "id": 1,
    "name": "userName",
    "message": "String"
  },
  // ...
  ]
 ```
 ## socket
  `message`, `other`, `user`

# User
 ## props
  User: `Object`
  ```json
  { 
    "id": 1,
    "name": "String",
    "position": {
      "x": "int px", // Position from the Left in the parent component (px)
      "y": "int px" // Position from the Top in the parent component (px)
    },
  }
  ```
# ChatBox
 ## props
  - chatList: `messages`

# ChatToolTip 
 ## props
  - position : `Object`
  ```json
   "position": {
      "x": "int px", // Position from the Left in the parent component (px)
      "y": "int px" // Position from the Top in the parent component (px)
    },
  ```
  - message : `String`
# object
 ## props
 - component: `React.Component`
  When each User interact with that object, it renders props component.

 - position: `Object`
 ```json
  "position": {
    "x": "int px", // Position from the Left in the parent component (px)
    "y": "int px" // Position from the Top in the parent component (px)
  }
 ```
# Modal
 ## props
   - component: `React.Component`
  When each User interact with that object, it renders props component.

 - position: `Object`
 ```json
  "position": {
    "x": "int px", // Position from the Left in the parent component (px)
    "y": "int px" // Position from the Top in the parent component (px)
  }
 ```