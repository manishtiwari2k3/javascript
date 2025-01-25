// we will study here the destructuring of the objects

// destructing of arrays is also possible but we will learn it later now we will learn the destructuring of objects

const course = {
    courseName : "js in hindi",
    fees : "free" ,
    courseInstructor : "hitesh"
}

// const c = course.courseInstructor

// console.log(c)

// this is also the correct method but we can also use a new method to do this

const {courseInstructor} = course
// console.log(courseInstructor)

// we can also destruct it

const {courseInstructor : instr} = course
console.log(instr)

// in this way the destructuring of objects take place

// toh jab hum react padhenge toh at that time keep in mind ki jaha bhi curly braces given hai vha destructuring ki jari hai


// apis***********************************

// apna kaam kisi dusre ke sar daal dena yahi api hai
// like ordering things from menu inspite of looking in the preparation

// pehle sari values xml ke form mai aati thi -> difficult to understand -> complex

// now it comes in the form of json

// json******************

// {
//     courseName : "js in hindi",
//     price :"free",
//     instructor : "hitesh"
// }

// // ye sahi syntax nahi hai json ka

// // json mai key aur values dono hi string format mai hoti hai

// {
//     "courseName" : "js in hindi",
//     "price" : "free",
//     "instructor" :  "hitesh"
// }


// some time apis comes in object also in arrays

[
    {},
    {},
    {}
]


// random user me api*********************
{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Jennie",
          "last": "Nichols"
        },
        "location": {
          "street": {
            "number": 8929,
            "name": "Valwood Pkwy",
          },
          "city": "Billings",
          "state": "Michigan",
          "country": "United States",
          "postcode": "63104",
          "coordinates": {
            "latitude": "-69.8246",
            "longitude": "134.8719"
          },
          "timezone": {
            "offset": "+9:30",
            "description": "Adelaide, Darwin"
          }
        },
        "email": "jennie.nichols@example.com",
        "login": {
          "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
          "username": "yellowpeacock117",
          "password": "addison",
          "salt": "sld1yGtd",
          "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
          "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
          "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
        },
        "dob": {
          "date": "1992-03-08T15:13:16.688Z",
          "age": 30
        },
        "registered": {
          "date": "2007-07-09T05:51:59.390Z",
          "age": 14
        },
        "phone": "(272) 790-0888",
        "cell": "(489) 330-2385",
        "id": {
          "name": "SSN",
          "value": "405-88-3636"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/men/75.jpg",
          "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        "nat": "US"
      }
    ],
    "info": {
      "seed": "56d27f4a53bd5441",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
  }


//   we have to take time to understand them and also there are various tools present around the web to understand them

// example

// json formatter *****************


// api can be in the form of array , objects etc.

// apis in the form of your json