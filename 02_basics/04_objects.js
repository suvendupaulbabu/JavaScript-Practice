const tinder = new Object(); // singleton object

/*const tinder = {
    fullName : {
        userFullName : {
            firstName : "Suvendu", 
            lastName : "Paul"
        }
    }
}*/

tinder.fullName = {
    userFullName : {
        firstName : "Suvendu", 
        lastName : "Paul"
    }
}
tinder.email = "some@gmail.com"
tinder.isLoggedIn = false
tinder.address = "kolkata"

//console.log(tinder);

// Object Channing
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {...obj1, ...obj2} // Asign multiple object in one object using "spread" oparetor
const obj3 = Object.assign({}, obj1, obj2) // Using Object.assign() method first curly bracket{} is "target" and object name is source
//console.log(obj3);

// Array of Object
const arrOBJ = [
    {
        id: 1,
        email: "test01@gmail.com", 
        isLoggedIN : false
    }, 
    {
        id: 2,
        email: "test02@gmail.com", 
        isLoggedIN : false
    },
    {
        id: 3,
        email: "test03@gmail.com", 
        isLoggedIN : true
    }
]

const fetchArrObj = arrOBJ.map((item) =>{
    //console.log(item);
    //console.log(Object.keys(item));
    //console.log(Object.values(item));
    //console.log(Object.values(item).length);
    //console.log(Object.entries(item));
})

//console.log(arrOBJ[0]);
//console.log(Object.keys(arrOBJ[0]));
//console.log(Object.values(arrOBJ[0]));
//console.log(Object.hasOwn(arrOBJ[0], 'isLoggedIN'))
//console.log(arrOBJ[0].hasOwnProperty('isLoggedIN'))

// Object Sample
const course = {
    courseName : "Js", 
    courseDuration : 72, 
    courseInstructor : "YouTube"
}
// Object De-structure
const {courseInstructor} = course // Syntax 01
const {courseInstructor: instructor} = course // Syntax 02
console.log(instructor)

// Sample API
/*{
    "results": [
      {
        "gender": "female",
        "name": {
          "title": "Miss",
          "first": "Pilar",
          "last": "Cano"
        },
        "location": {
          "street": {
            "number": 5249,
            "name": "Avenida de Burgos"
          },
          "city": "Cartagena",
          "state": "Cantabria",
          "country": "Spain",
          "postcode": 71285,
          "coordinates": {
            "latitude": "-38.0915",
            "longitude": "5.8548"
          },
          "timezone": {
            "offset": "0:00",
            "description": "Western Europe Time, London, Lisbon, Casablanca"
          }
        },
        "email": "pilar.cano@example.com",
        "login": {
          "uuid": "c1168124-a3fa-4152-9e83-fc51108f323a",
          "username": "brownwolf787",
          "password": "kokoko",
          "salt": "m9Ngviw4",
          "md5": "20dfc7d18bb527a40bc897489bd49dd2",
          "sha1": "1c5728626d05177985ca4edd8af29d7c18377df5",
          "sha256": "8091bc3821c169669d81259113ebdda798088c98a1e6d00e946243c46ba34563"
        },
        "dob": {
          "date": "1964-10-09T19:51:10.370Z",
          "age": 59
        },
        "registered": {
          "date": "2003-09-07T19:35:52.875Z",
          "age": 20
        },
        "phone": "905-921-261",
        "cell": "623-213-925",
        "id": {
          "name": "DNI",
          "value": "40746338-T"
        },
        "picture": {
          "large": "https://randomuser.me/api/portraits/women/7.jpg",
          "medium": "https://randomuser.me/api/portraits/med/women/7.jpg",
          "thumbnail": "https://randomuser.me/api/portraits/thumb/women/7.jpg"
        },
        "nat": "ES"
      }
    ],
    "info": {
      "seed": "b5f0e64a3b6a6dbb",
      "results": 1,
      "page": 1,
      "version": "1.4"
    }
}*/