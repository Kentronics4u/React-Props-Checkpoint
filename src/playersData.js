/* This is the players' data. It is an array of each player's object*/ 

const players = [
  {
    name: "Austin JJ Okocha",
    team: "Paris Saint-Germain",
    nationality: "Nigerian",
    jerseyNumber: "10",
    age: 50,
    image:
      "https://news.bbc.co.uk/media/images/38065000/jpg/_38065006_okocha94150.jpg",
  },

  {
    name: "Rashidi Yekini",
    team: "FC Zürich",
    nationality: "Nigerian",
    jerseyNumber: "10",
    age: 48,
    image:
      "https://media.gettyimages.com/id/649995876/photo/rashidi-yekini-nigeria.jpg?s=612x612&w=gi&k=20&c=SDP_EMloQs-6IEOjeb8bH-3KRFzT45rHZ6sjQ5SEW9Y=",
  },

  {
    name: "Mercy Akide",
    team: "Garden City Queens",
    nationality: "Nigerian",
    jerseyNumber: "10",
    age: 48,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm-3qpoVKZSCifnP2qou0ncXz3bqlh3VMs-ZMHDluWRSk7CddaS1opi3Jq9DG4xq_nSG0&usqp=CAU",
  },

  {
    name: "Perpetua Nkwocha",
    team: "Garden City Queens",
    nationality: "Nigerian",
    jerseyNumber: "4",
    age: 47,
    image:
      "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQD5IMZa3ZZ2CD-ojfw1L7jW0vIVan4jsnvSxFKEhvC7c1zh254reGqLVH00qgeDaz0dzELMlIpp-VdWgg",
  },

  {
    name: "Cristiano Ronaldo",
    team: "Al Nassr FC",
    nationality: "Portugese",
    jerseyNumber: "7",
    age: 38,
    image:
      "https://i.pinimg.com/736x/0b/11/81/0b11814a2a85126c755ce96d88593e1c.jpg",
  },
];

/* Thhis line is meant to convert the players' data to a JSON file */
export const playersJSON = JSON.stringify(players);
