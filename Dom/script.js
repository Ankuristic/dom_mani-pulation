// //Create you project here from scratch
// const moviesList = [
//     { movieName: "Flash", price: 7 },
//     { movieName: "Spiderman", price: 5 },
//     { movieName: "Batman", price: 4 },
//   ];
// // Use moviesList array for displaing the Name in the dropdown menu
// const selectmovie = document.querySelectorAll('#selectMovie')
// console.log(selectmovie);
// console.log(selectmovie.innerHTML)

// moviesList.forEach(movie => {
//     // Create an option element for each movie
//     const option = document.createElement('option');
//     console.log(option)
    
//     // Set the value attribute to the movie names
//     option.value = movie.movieName;
//     console.log(option.value)

    
//     // Set the inner text to the movie name
//     option.textContent = movie.movieName;
//     console.log(option.textContent)
    
//     // Append the option to the select element
//     selectMovie.appendChild(option);
//     console.log(selectmovie)
// });

// // Add event listener to the select element
// selectMovie.addEventListener('change', function() {
//     // Get the selected movie name
//     const selectedMovieName = this.value;
    
//     // Do something with the selected movie name
//     console.log('Selected movie:', selectedMovieName);
// });


// const seatoccupied = document.querySelectorAll('.seat')
// console.log(seatoccupied);

// function handleRowClick(event) {
//     // Your event handling code here
//     console.log('Row clicked:', event.target);
// }

// // Iterate over each row and attach the event listener
// seatoccupied.forEach(seat => {
//     seat.addEventListener('click', handleRowClick);
// });

// // seatoccupied

// // moviesList.forEach( movie=>{
// //     movie.addEventListener('click', () =>{
// //         console.log('Clicked on a movir:', movieList.textContent);


// //     })

// // })

// //Add eventLister to each unoccupied seat




// //Add eventLsiter to continue Button

// const continuenbtn = document.getElementsByClassName('proceedBtnEl')
// console.log(continuenbtn);
// // continuenbtn.addEventListener('click',continueButton())

// continueButton.addEventListener('click',function() {
//     continueButton();
//     console.log('Continue button clicked');
// })


// function continueButton (){
//     console.log("clicked ");

// }





// //Add eventListerner to Cancel Button

// const cancalButton = document.getElementsByClassName('cancelBtn')
// console.log(cancalButton);



// cancalButton.addEventListener('click',function() {
//     canceldButton();
//     console.log('Continue button clicked');
// })

// function canceldButton  () {
//     console.log("clicked");
// }



const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
// Use moviesList array for displaing the Name in the dropdown menu
const selectmovie = document.querySelectorAll('#selectMovie')
console.log(selectmovie);
console.log(selectmovie.innerHTML)

moviesList.forEach(movie => {
    // Create an option element for each movie
    const option = document.createElement('option');
    console.log(option)
    
    // Set the value attribute to the movie names
    option.value = movie.movieName;
    console.log(option.value)

    
    // Set the inner text to the movie name
    option.textContent = movie.movieName;
    console.log(option.textContent)
    
    // Append the option to the select element
    selectMovie.appendChild(option);
    console.log(selectmovie)
});

// Add event listener to the select element
selectMovie.addEventListener('change', function() {
    // Get the selected movie name
    const selectedMovieName = this.value;
    
    // Do something with the selected movie name
    console.log('Selected movie:', selectedMovieName);
});


const seatoccupied = document.querySelectorAll('.seat')
console.log(seatoccupied);

function handleRowClick(event) {
    // Your event handling code here
    console.log('Row clicked:', event.target);
}

// Iterate over each row and attach the event listener
seatoccupied.forEach(seat => {
    seat.addEventListener('click', handleRowClick);
});

// seatoccupied

// moviesList.forEach( movie=>{
//     movie.addEventListener('click', () =>{
//         console.log('Clicked on a movir:', movieList.textContent);


//     })

// })

//Add eventLister to each unoccupied seat




//Add eventLsiter to continue Button

const continuenbtn = document.getElementsByClassName('proceedBtnEl')
console.log(continuenbtn);
// continuenbtn.addEventListener('click',continueButton())

continueButton.addEventListener('click',function() {
    continueButton();
    console.log('Continue button clicked');
})


function continueButton (){
    console.log("clicked ");

}





//Add eventListerner to Cancel Button

const cancalButton = document.getElementsByClassName('cancelBtn')
console.log(cancalButton);



cancalButton.addEventListener('click',function() {
    canceldButton();
    console.log('Continue button clicked');
})

function canceldButton  () {
    console.log("clicked");
}






const moviesList = [
    { movieName: "Flash", price: 7 },
    { movieName: "Spiderman", price: 5 },
    { movieName: "Batman", price: 4 },
  ];
  const selectMovieEl = document.getElementById("selectMovie");
  
  const allSeatCont = document.querySelectorAll("#seatCont .seat");
  console.log(allSeatCont)
  
  const selectedSeatsHolderEl = document.getElementById("selectedSeatsHolder");
  
  const moviePriceEl = document.getElementById("moviePrice");
  
  const cancelBtnEL = document.getElementById("cancelBtn");
  
  const proceedBtnEl = document.getElementById("proceedBtn");
  
  moviesList.forEach((movie) => {
    const optionEl = document.createElement("option");
    optionEl.innerHTML = `${movie.movieName} $${movie.price}`;
    selectMovieEl.appendChild(optionEl);
  });
  
  let moviePrice = 7;
  let currentMovieName = `Tom and Jerry 2021`;
  
  selectMovieEl.addEventListener("input", (e) => {
    let movieName = e.target.value.split("");
    let dollarIndex = movieName.indexOf("$");
    let movie = movieName.splice(0, dollarIndex - 1).join("");
    currentMovieName = movie;
    moviePrice = JSON.parse(movieName.splice(2, dollarIndex).join(""));
  
    updatMovieName(movie, moviePrice);
    updatePrice(moviePrice, takenSeats.length);
  });
  //
  let initialSeatValue = 0;
  allSeatCont.forEach((seat) => {
    const attr = document.createAttribute("data-seatid");
    attr.value = ++initialSeatValue;
    seat.setAttributeNode(attr);
  });
  
  let seatContEl = document.querySelectorAll("#seatCont .seat:not(.occupied)");
  // console.log(seatContEl);
  let takenSeats = [];
  
  seatContEl.forEach((seat) => {
    seat.addEventListener("click", (e) => {
      let isSelected = seat.classList.contains("selected");
  
      let seatId = JSON.parse(seat.dataset.seatid);
  
      if (!isSelected) {
        seat.classList.add("selected");
        takenSeats.push(seatId);
        takenSeats = [...new Set(takenSeats)];
      } else if (isSelected) {
        seat.classList.remove("selected");
  
        takenSeats = takenSeats.filter((seat) => {
          // console.log(seat,seatId)
          if (seat !== seatId) {
            return seat;
          }
        });
      }
      updateSeats();
      updatePrice(moviePrice, takenSeats.length);
    },{ once: true });
  });
  
  function updateSeats() {
    selectedSeatsHolderEl.innerHTML = ``;
  
    takenSeats.forEach((seat) => {
      const seatHolder = document.createElement("div");
      seatHolder.classList.add("selectedSeat");
      selectedSeatsHolderEl.appendChild(seatHolder);
  
      seatHolder.innerHTML = seat;
    });
  
    if (!takenSeats.length) {
      const spanEl = document.createElement("span");
      spanEl.classList.add("noSelected");
      spanEl.innerHTML = `NO SEAT SELECTED`;
      selectedSeatsHolderEl.appendChild(spanEl);
    }
  
    seatCount();
  }
  
  function seatCount() {
    const numberOfSeatEl = document.getElementById("numberOfSeat");
    numberOfSeatEl.innerHTML = takenSeats.length;
  }
  
  function updatMovieName(movieName, price) {
    const movieNameEl = document.getElementById("movieName");
    const moviePriceEl = document.getElementById("moviePrice");
    movieNameEl.innerHTML = movieName;
    moviePriceEl.innerHTML = `$ ${price}`;
    
  }
  
  function updatePrice(price, seats) {
    const totalPriceEl = document.getElementById("totalPrice");
    let total = seats * price;
    totalPriceEl.innerHTML = `$ ${total}`;
  }
  
  cancelBtn.addEventListener("click", (e) => {
    cancelSeats();
  });
  
  function cancelSeats() {
    takenSeats = [];
    seatContEl.forEach((seat) => {
      seat.classList.remove("selected");
    });
    updatePrice(0, 0);
    updateSeats();
  }
  
  proceedBtnEl.addEventListener("click", (e) => {
    if (takenSeats.length) {
      alert("Yayy! Your Seats has been booked");
      uncancelSeats();
    } else {
      alert("Oops no seat Selected");
    }
  });
  
  function uncancelSeats() {
    takenSeats = [];
    console.log(seatContEl);
    seatContEl.forEach((seat) => {
      if(seat.classList.contains("selected")){
        console.log(seat);
      seat.classList.remove("selected");
        seat.classList.add("seat")
      seat.classList.add("occupied");
      }
    });
    updatePrice(0, 0);
    updateSeats();
  }


