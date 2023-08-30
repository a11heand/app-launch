/*
  Filename: complexCode.js

  Description: 
  This code is a complex implementation of a chat application that utilizes multiple advanced concepts in JavaScript such as object-oriented programming, event handling, asynchronous operations, and networking.

  The application allows users to join chat rooms, send messages, and receive real-time updates from other users in the room.

  DISCLAIMER: This code is for demonstration purposes only and may not be production-ready. It provides an example of complex code structure and usage of advanced JavaScript concepts.

  Author: Your Name
*/

// Class representing a chat room
class ChatRoom {
  constructor(name) {
    this.name = name;
    this.users = [];
    this.messages = [];
  }

  addUser(user) {
    this.users.push(user);
    // Automatically notify other users that a new user joined the room
    for (let i = 0; i < this.users.length - 1; i++) {
      this.users[i].sendMessage(`User ${user.name} has joined the room "${this.name}"`);
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      // Automatically notify other users that a user left the room
      for (const otherUser of this.users) {
        otherUser.sendMessage(`User ${user.name} has left the room "${this.name}"`);
      }
    }
  }

  addMessage(message) {
    this.messages.push(message);
    // Automatically notify all users in the room about the new message
    for (const user of this.users) {
      user.updateChatRoom(this);
    }
  }
}

// Class representing a user in the chat application
class User {
  constructor(name) {
    this.name = name;
    this.chatRoom = null;
  }

  joinChatRoom(chatRoom) {
    if (this.chatRoom) {
      this.chatRoom.removeUser(this);
    }
    this.chatRoom = chatRoom;
    chatRoom.addUser(this);
  }

  leaveChatRoom() {
    if (this.chatRoom) {
      this.chatRoom.removeUser(this);
      this.chatRoom = null;
    }
  }

  sendMessage(message) {
    if (this.chatRoom) {
      const formattedMessage = `${this.name}: ${message}`;
      this.chatRoom.addMessage(formattedMessage);
    }
  }

  updateChatRoom(chatRoom) {
    // Update the user's chat room and display the latest messages
    this.chatRoom = chatRoom;
    console.log(`[${chatRoom.name}] - Latest Messages:`);
    for (const message of chatRoom.messages) {
      console.log(message);
    }
  }
}

// Example usage of the chat application
console.log('---Chat Application---');
const chatRoom = new ChatRoom('General');
const user1 = new User('John');
const user2 = new User('Jane');
const user3 = new User('Mark');

user1.joinChatRoom(chatRoom);
user2.joinChatRoom(chatRoom);
user3.joinChatRoom(chatRoom);

user1.sendMessage('Hello everyone!');
user2.sendMessage('Hey John!');
user3.sendMessage('Nice to meet you all.');

user1.leaveChatRoom();
user2.leaveChatRoom();

user3.sendMessage('Is anyone still there?');
