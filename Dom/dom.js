const headiing = document.querySelector('.second');
const para = document.querySelector('#para');
console.log(heading);
console.log(para);
console.log(document.getElementById("para"));
console.log(
    document.getElementsByClassName('first')
);

console.log(document.getElementsByTagName('h2'));

heading.style.color= 'red';
para.style.backgroundColor='grey';


{/* <div style =  "background-color : yellow;">
    <div style = "background-color: yellowgreen;" id ="innerDiv">
        <h3 style = "background-color: green;"> Inner Heading </h3>


    </div> */}
// </div>


document
.querySelector('h3')
.addEventListener('h3')
.addEventListener('click',() =>{
    console.log('Heading 3 clicked')
});


document 
.getElementById('innerDiv')
.addEventListener('click', () =>{
    console.log("inner div clicked")
});