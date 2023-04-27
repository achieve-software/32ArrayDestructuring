//*  DESTRUCTURING (ARRAY)

const names = ["Ahmet", "Mehmet", "İsmet", "Saffet"];

//*Classical
const mehmet = names[1]; //* indexing

//Destructuring
const [p1, p2, , p4] = names;
console.log(p1, p2, p4);
