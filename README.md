# Using Object Module

## Objectives

1. Write a Node module with module.exports = {}
1. Import your module from another file

## Introduction

We have some customer data for testing our application before we implement the real database or REST API. It's a bad idea to store this data in the code, so your task is to organize the data as a separate file. This way it will be easier to switch from this customer data to some other source later.

In this lab, you'll master how to create, export and import an object module, i.e., a static module.

## Instructions

1. Create a file `module.js` with `module.exports = {}`
2. Change `customers.txt` to `module.js` and export the data
3. Create a file `main.js`
4. Import your object in `main.js` with `require()`
5. Print an email of the second customer from `main.js`
6. Run `npm test` to verify

A sample of `customers.txt`:

```js
[
  {
    "_id": "56b0022da502f03e8d01baa9",
    "index": 0,
    "guid": "212c3f5d-84ed-4777-832f-75145cfe0d4b",
    "isActive": true,
    "balance": "$3,551.23",
    "picture": "http://placehold.it/32x32",
    "age": 26,
    "eyeColor": "blue",
    "name": {
      "first": "Myrtle",
      "last": "Wallace"
    },
    "company": "AQUAFIRE",
    "email": "myrtle.wallace@aquafire.name",
    "phone": "+1 (908) 454-3198",
    "address": "429 Elizabeth Place, Temperanceville, Oregon, 6687",
    "about": "Reprehenderit elit reprehenderit eu irure adipisicing proident sunt anim elit sunt officia irure. Consequat eiusmod pariatur ad voluptate. Ut fugiat ut reprehenderit ad mollit et occaecat incididunt consequat officia tempor ullamco eiusmod occaecat. Esse qui adipisicing et eu consequat voluptate mollit esse aliqua pariatur aute sint velit. Sit amet cillum deserunt sunt ad est excepteur aliquip mollit. Ut ex exercitation commodo non consequat officia adipisicing laborum cillum ad voluptate dolore exercitation. Aliqua minim magna anim deserunt quis dolor aliqua.",
    "registered": "Thursday, June 26, 2014 11:38 AM",
    "latitude": "-35.374473",
    "longitude": "52.251407",
    "tags": [
      7,
      "irure"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      3,
      {
        "id": 1,
        "name": "Rachelle Decker"
      }
    ],
    "greeting": "Hello, Myrtle! You have 8 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {...},
  {...},
  {...},
  {...}
]
```

### Extra Info

The data is an array. In JavaScript/Node, arrays are objects with extra properties so the pattern `module.exports = {}` will work the same for arrays: `module.exports = []`.

