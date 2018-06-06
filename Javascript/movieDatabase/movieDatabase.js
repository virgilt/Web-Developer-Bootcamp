var movies = [
  {
    title: "Star Wars",
    rating: 4.5,
    hasWatched: true
  },
  {
    title: "Harry Potter",
    rating: 5,
    hasWatched: true
  },
  {
    title: "Black Panther",
    rating: 4.5,
    hasWatched: false
  },
];

for (var i = 0; i < movies.length; i++) {
  var result = "You have ";
  if (movies[i].hasWatched) {
    result += "watched ";
  }
  else {
    result += "not seen ";
  }
  result += "\"" + movies[i].title + "\" - ";
  result += movies[i].rating + " stars";
  console.log(result)
}
