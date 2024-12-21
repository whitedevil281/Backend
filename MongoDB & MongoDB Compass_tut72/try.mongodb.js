use('newSigmaDB');

// Insert a few documents into the sales collection.
db.getCollection('data').insertMany([
    {
        id: 1,
        name: "Alice Johnson",
        age: 28,
        occupation: "Software Developer",
        email: "alice.j@example.com",
        hobbies: ["Reading", "Hiking", "Gaming"]
      },
      {
        id: 2,
        name: "Bob Smith",
        age: 35,
        occupation: "Project Manager",
        email: "bob.smith@example.com",
        hobbies: ["Cycling", "Photography", "Cooking"]
      },
      {
        id: 3,
        name: "Charlie Davis",
        age: 22,
        occupation: "Student",
        email: "charlie.d@example.edu",
        hobbies: ["Drawing", "Basketball", "Coding"]
      },
      {
        id: 4,
        name: "Diana Evans",
        age: 40,
        occupation: "Marketing Director",
        email: "diana.evans@example.com",
        hobbies: ["Writing", "Traveling", "Yoga"]
      },
      {
        id: 5,
        name: "Ethan Wilson",
        age: 29,
        occupation: "Data Scientist",
        email: "ethan.w@example.com",
        hobbies: ["Running", "Music", "Chess"]
      },
      {
        id: 6,
        name: "Fiona Brown",
        age: 31,
        occupation: "Graphic Designer",
        email: "fiona.brown@example.com",
        hobbies: ["Painting", "Photography", "Reading"]
      },
      {
        id: 7,
        name: "George Harris",
        age: 45,
        occupation: "Accountant",
        email: "george.harris@example.com",
        hobbies: ["Golf", "Cooking", "Fishing"]
      },
      {
        id: 8,
        name: "Helen Clark",
        age: 26,
        occupation: "Nurse",
        email: "helen.clark@example.com",
        hobbies: ["Gardening", "Swimming", "Volunteering"]
      },
      {
        id: 9,
        name: "Ian Lewis",
        age: 50,
        occupation: "Engineer",
        email: "ian.lewis@example.com",
        hobbies: ["Woodworking", "Cycling", "Home Brewing"]
      },
      {
        id: 10,
        name: "Jenny Roberts",
        age: 33,
        occupation: "Teacher",
        email: "jenny.r@example.com",
        hobbies: ["Blogging", "Dancing", "Traveling"]
      }
]);



// Print a message to the output window.
console.log(`new items added to newsigma db`);