"use strict";

const CarTypess = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

const GirlsNamess = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg", "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const MovieGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

//--- Part 1 ----------------------------------------------------------------------------------------------
/* Part 1: Rectangle Calculations (10 points)
Create code in cmbTask1CalculateClick to calculate the perimeter and area of the given rectangle
*/

const cmbTask1Calculate = document.getElementById("cmbTask1Calculate");
cmbTask1Calculate.addEventListener("click", cmbTask1CalculateClick);
function cmbTask1CalculateClick(){
  //hent verdier fra input feltene, prøv å finne ut riktige id-er
  const txtRectWidth = document.getElementById("txtRectWidth");
  const txtRectHeight = document.getElementById("txtRectHeight");

  const height = Number(txtRectHeight.value);
  const width = Number(txtRectWidth.value);
  //beregn omkrets og areal
  const perimeter = (height + width + height + width);
  const area = (height * width);



  console.log("Omkrets: " + perimeter + " Areal: " + area);
  console.log("height: " + height + " | width: " + width);
  console.log("Height er av typen: " + typeof height);
  console.log("Width er av typen: " + typeof height);


  const txtTask1Output = document.getElementById("txtTask1Output");
  txtTask1Output.innerHTML = "Omkrets: " + perimeter + "&nbsp; Areal: " + area;
}


//--- Part 2 ----------------------------------------------------------------------------------------------
/* Part 2: Dynamic Word List (15 points)
Create an event function that is triggered if you press a key while txtTask2Word has keyboard focus.
Every time the user presses "return" or "enter",
add the word to the task2Words array and print how many words and all the words in txtTask2Output.
Clear the input field every time the user presses
"enter" or "return".
  ○ Tip: txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress)
*/

const txtTask2Word = document.getElementById("txtTask2Word");
txtTask2Word.addEventListener("keypress", txtTask2WordKeyPress);

let task2Words = [];
const txtTask2Output = document.getElementById("txtTask2Output");

function txtTask2WordKeyPress(aEvent){
  const key = aEvent.key;
  switch(key){
    case "Enter":
      const words = txtTask2Word.value.split(" ");
      txtTask2Word.value = "";
      task2Words = task2Words.concat(words);
      txtTask2Output.innerHTML = "Number of words: " + task2Words.length + "<br>" + task2Words.join(" ");
      console.log(task2Words);
      break;
  }
}



//--- Part 3 ----------------------------------------------------------------------------------------------
/* Create a click event function to check which of the checkboxes are selected. And print the result in
txtTask3Output
*/

const cmbTask3CheckAnswer = document.getElementById("cmbTask3CheckAnswer");
cmbTask3CheckAnswer.addEventListener("click", cmbTask3CheckAnswerClick);
const txtTask3Output = document.getElementById("txtTask3Output");

let text = "";
function cmbTask3CheckAnswerClick(){
  const chkTask3 = document.getElementsByName("chkTask3");
  for(let i = 0; i < chkTask3.length; i++){
    const checkBox = chkTask3[i];
    if(checkBox.checked){
      const value = checkBox.value;
      if(value === "4"){
        text += "Du har valgt nummer " + value + ". Dette kan du ikke mene!??!<br />";
      }
      text += "Du har valgt nummer " + value + ".<br />";
    }
  }
  txtTask3Output.innerHTML = text;
  text = ""; //tømmer teksten, klargjør til neste klikk!
}


//--- Part 4 ----------------------------------------------------------------------------------------------
/* Use a for-loop to add "radio" buttons to the divTask4Cars element. Get the values from the CarTypes
array. Print the selected car in txtTask4Output.
*/

const divTask4Cars = document.getElementById("divTask4Cars");
const txtTask4Output = document.getElementById("txtTask4Output");

const CarTypes = [
  { value: 1, caption: "Aston Martin" },
  { value: 2, caption: "Bentley" },
  { value: 3, caption: "Alfa Romeo" },
  { value: 4, caption: "Ferrari" },
  { value: 5, caption: "Subaru" },
  { value: 6, caption: "Porsche" },
  { value: 7, caption: "Tesla" },
  { value: 8, caption: "Toyota" },
  { value: 9, caption: "Renault" },
  { value: 10, caption: "Peugeot" },
  { value: 11, caption: "Suzuki" },
  { value: 12, caption: "Mitsubishi" },
  { value: 13, caption: "Nissan" },
];

for(let i = 0; i < CarTypes.length; i++){
  const radioButton = document.createElement("input");
  radioButton.type = "radio";
  radioButton.name = "cars";
  radioButton.value = CarTypes[i].caption;
  radioButton.id = `car${CarTypes[i].value}`;

  const label = document.createElement("label");
  label.htmlFor = radioButton.id;
  label.textContent = CarTypes[i].caption;

  radioButton.addEventListener("change", function(){
    txtTask4Output.textContent = "selected car: " + this.value;
  });

  divTask4Cars.appendChild(radioButton);
  divTask4Cars.appendChild(label);
  divTask4Cars.appendChild(document.createElement("br"));
}


//--- Part 5 ----------------------------------------------------------------------------------------------
/* Create an event function that occurs when the element selectTask5Animals changes value (change),
and print the user's selection in the txtTask5Output element.
*/

const selectTask5Animals = document.getElementById("selectTask5Animals");
selectTask5Animals.addEventListener("change", selectTask5AnimalsChange);
const txtTask5Output = document.getElementById("txtTask5Output");


function selectTask5AnimalsChange(){
  const selectedAnimal = selectTask5Animals.options[selectTask5Animals.selectedIndex].text;  //Henter den valgte tekstverdien
  
  txtTask5Output.textContent = "Selected animal: " + selectedAnimal;  //Oppdaterer tekstutgangen med brukerens valg
  
}


//--- Part 6 ----------------------------------------------------------------------------------------------
/* Take all the names from the GirlsNames array and add them to the selectTask6Girls element.
Create an event function in the same way as in task 5 and print the name the user selects in
txtTask6Output
*/

const GirlsNames = ["Anne", "Inger", "Kari", "Marit", "Ingrid", "Liv", "Eva", "Berit", "Astrid", "Bjørg",
  "Hilde", "Anna", "Solveig", "Marianne", "Randi", "Ida", "Nina", "Maria", "Elisabeth", "Kristin"];

const selectTask6Girls = document.getElementById("selectTask6Girls");
const txtTask6Output = document.getElementById("txtTask6Output");

//Legger til navnene fra GirlsNames-arrayet til selectTask6Girls
for(let i = 0; i < GirlsNames.length; i++){
  const option = document.createElement("option");   //Oppretter en <option>-tag
  option.value = GirlsNames[i];   //Setter verdien til navnet
  option.text = GirlsNames[i];   //Setter tekstinnholdet til navnet
  selectTask6Girls.add(option);
}

selectTask6Girls.addEventListener("change", selectTask6GirlsChange);   //Legger til en event listener for "change"-hendelsen
function selectTask6GirlsChange(){
  const selectedGirlsName = selectTask6Girls.options[selectTask6Girls.selectedIndex].text;
  txtTask6Output.textContent = "Selected name: " + selectedGirlsName;
}



//--- Part 7 ----------------------------------------------------------------------------------------------
/* Use the data from filmtittel (movie title), filmsjanger (movie genre), filmregissør (movie
director), and filmrate (movie rating) and fill in the HTML table every time the user clicks the
"cmbAddMovie" button. Fill in the data from the MovieGenre array in selectMovieGenre
*/
const MovieGenre = [
  "Action",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "History",
  "Horror",
  "Music",
  "Musical",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Superhero",
  "Thriller",
  "War",
  "Western",
];

const txtMovieTitle = document.getElementById("txtMovieTitle");
const txtMovieDirector = document.getElementById("txtMovieDirector");
const txtMovieRate = document.getElementById("txtMovieRate");


const selectMovieGenre = document.getElementById("selectMovieGenre");
//selectMovieGenre.addEventListener("change", selectMovieGenreChange);

//function selectMovieGenreChange() {
  for(let i = 0; i < MovieGenre.length; i++){
    const addMovie = MovieGenre[i];

    const option = document.createElement("option");   //Oppretter en <option>-tag
    option.value = MovieGenre[i];   //Setter verdien til navnet
    option.text = MovieGenre[i];   //Setter tekstinnholdet til navnet
    selectMovieGenre.add(option);

  }
//}

let movieCounter = 1;

//lager en function som håndterer knappklikk for å legge til film
const cmbAddMovie = document.getElementById("cmbAddMovie")
cmbAddMovie.addEventListener("click", cmbAddMovieClick)

function cmbAddMovieClick(){
  //Henter verdier fra inputfeltene
  const title = txtMovieTitle.value.trim();
  const genre = selectMovieGenre.value;
  const director = txtMovieDirector.value.trim();
  const rate = txtMovieRate.value;

  //kommer opp varsel at du må fylle inn boksen for tittel og regissør
  if (title === "" || director === "") {
    alert("Fyll inn både tittel og regissør!");
    return;
  }

  //Oppretter en ny rad
  const newRow = tblMovies.insertRow();

  //Fyller radens celler
  newRow.insertCell(0).textContent = movieCounter++; // Radnummer
  newRow.insertCell(1).textContent = title;         // Filmens tittel
  newRow.insertCell(2).textContent = genre;         // Filmens sjanger
  newRow.insertCell(3).textContent = director;      // Filmens regissør
  newRow.insertCell(4).textContent = rate;          // Filmens vurdering

  //Nullstiller inputfeltene
  txtMovieTitle.value = "";
  txtMovieDirector.value = "";
  txtMovieRate.value = "5";
};




