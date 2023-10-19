let All_set = [
  [
      {
              
          question: 'What is the result of 2 + 2?',
          option: ['3', '4', '5', '6'],
          correctAnswer: '4'
      },
      {
          question: 'Which keyword is used to declare a variable in JavaScript?',
          option: ['var', 'let', 'const', 'variable'],
          correctAnswer: 'var'
      },
      {
          question: 'What is the correct way to write a comment in JavaScript?',
          option: ['/* This is a comment */', '// This is a comment', '# This is a comment', '\' This is a comment'],
          correctAnswer: '// This is a comment'
      },
      {
          question: 'What is the output of typeof null?',
          option: ['object', 'null', 'undefined', 'number'],
          correctAnswer: 'object'
      },
      {
          question: 'Which method is used to add an element to the end of an array in JavaScript?',
          option: ['append', 'push', 'addToEnd', 'insert'],
          correctAnswer: 'push'
      },
      {
          question: 'What will the following code output: console.log(1 + "1" - 1)?',
          option: ['11', '10', '2', 'error'],
          correctAnswer: '10'
      },
      {
          question: 'Which function is used to parse a JSON string in JavaScript?',
          option: ['parseJSON', 'JSON.parse', 'fromJSON', 'evalJSON'],
          correctAnswer: 'JSON.parse'
      },
      {
          question: 'What is the purpose of the `return` statement in a JavaScript function?',
          option: ['To define a function', 'To exit a function and specify a return value', 'To break a loop', 'To throw an error'],
          correctAnswer: 'To exit a function and specify a return value'
      },
      {
          question: 'What will the expression 5 == "5" return?',
          option: ['true', 'false', 'undefined', 'error'],
          correctAnswer: 'true'
      },
      {
          question: 'What is the output of 3 + 2 + "7"?',
          option: ['57', '12', '32', '52'],
          correctAnswer: '57'
      },
      

  ],
  [
      {
          question: 'Which statement is used to stop the execution of a loop in JavaScript?',
          option: ['exit', 'stop', 'break', 'return'],
          correctAnswer: 'break'
      },
      {
          question: 'What is the result of the expression "5" + 2?',
          option: ['7', '52', 'error', 'undefined'],
          correctAnswer: '52'
      },
      {
          question: 'Which built-in method reverses the order of the elements in an array?',
          option: ['reverse()', 'sort()', 'join()', 'map()'],
          correctAnswer: 'reverse()'
      },
      {
          question: 'In JavaScript, what is the keyword used to declare a function?',
          option: ['function', 'func', 'method', 'declare'],
          correctAnswer: 'function'
      },
      {
          question: 'What is the result of Math.max(10, 20, 5, 30)?',
          option: ['10', '30', '5', '20'],
          correctAnswer: '30'
      },
      {
          question: 'What does the acronym DOM stand for?',
          option: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Model'],
          correctAnswer: 'Document Object Model'
      },
      {
          question: 'Which method is used to remove the last element from an array in JavaScript?',
          option: ['pop()', 'removeLast()', 'delete()', 'splice()'],
          correctAnswer: 'pop()'
      },
      {
          question: 'What is the output of "hello".length?',
          option: ['5', '6', 'undefined', 'error'],
          correctAnswer: '5'
      },
      {
          question: 'Which operator is used to check for equality in both value and type in JavaScript?',
          option: ['==', '===', '!=', '!=='],
          correctAnswer: '==='
      },
      {
          question: 'What is the result of 10 / "5" in JavaScript?',
          option: ['2', '3', '10', 'error'],
          correctAnswer: '2'
      },
  
  ],
  [
      {
          question: 'Which event is triggered when a user clicks on an HTML element?',
          option: ['onclick', 'onchange', 'onmouseclick', 'onmouseover'],
          correctAnswer: 'onclick'
      },
      {
          question: 'In JavaScript, what is the purpose of the `break` statement?',
          option: ['To exit a loop prematurely', 'To create a line break', 'To stop the execution of a function', 'To stop event propagation'],
          correctAnswer: 'To exit a loop prematurely'
      },
      {
          question: 'What is the output of 2 + "2" in JavaScript?',
          option: ['4', '22', 'error', 'undefined'],
          correctAnswer: '22'
      },
      {
          question: 'Which method is used to concatenate two or more arrays in JavaScript?',
          option: ['concat()', 'merge()', 'combine()', 'append()'],
          correctAnswer: 'concat()'
      },
      {
          question: 'What will the expression 0 == false return?',
          option: ['true', 'false', 'undefined', 'error'],
          correctAnswer: 'true'
      },
      {
          question: 'Which function is used to format a number with a specific number of decimal places in JavaScript?',
          option: ['toFixed()', 'toPrecision()', 'toFixedDecimal()', 'format()'],
          correctAnswer: 'toFixed()'
      },
      {
          question: 'What is the purpose of the `Array.isArray()` method in JavaScript?',
          option: ['To check if a variable is an array', 'To add an element to an array', 'To remove an element from an array', 'To sort an array'],
          correctAnswer: 'To check if a variable is an array'
      },
      {
          question: 'Which statement is used to throw a custom error in JavaScript?',
          option: ['throw', 'error', 'catch', 'try'],
          correctAnswer: 'throw'
      },
      {
          question: 'What is the result of typeof undefined?',
          option: ['object', 'undefined', 'null', 'number'],
          correctAnswer: 'undefined'
      },
      {
          question: 'In JavaScript, what is the purpose of the `continue` statement?',
          option: ['To skip the rest of the loop and start the next iteration', 'To exit the loop', 'To jump to a specific label', 'To pause the execution of the script'],
          correctAnswer: 'To skip the rest of the loop and start the next iteration'
      },
  
  ]

]

var arrow_btn = document.querySelector(".arrow_btn");
var user_page =  document.querySelector(".user");;
var set_page =  document.querySelector(".set_selection")
var setElement = document.querySelectorAll(".set_selection>div");
let questionElement = document.querySelector(".questions")
let question = document.querySelector(".ques>h2")
let option_element =  document.querySelector(".option");
let option =  document.querySelectorAll(".opt")
let next_btn =  document.querySelector(".next-btn")
let previous_btn = document.querySelector("#previous-btn");
let navigate_btn = document.querySelectorAll(".navigate_ques")
let submit_btn =  document.querySelector(".submit_btn")
let review_btn =  document.querySelector("#review-btn")
var progress =  document.querySelector(".progress")
var progress_sts = document.querySelector(".ques_no")
var progress_bar = document.querySelector(".progressBar")
let bottom_element =  document.querySelector(".bottom")
let selectedSet;
let currentobject;
let CurrentIndex = 0;
let reveiw_result;
let ReviewQuestion = [];
let ShuffledQuestion =[];
let score =0;
let wrongAnswer = 0;
let unattempt = 0;
let count =  0;


function shuffledArray(length){
let random = [];
while(random.length < length){
  const random_number =  Math.floor(Math.random() * length);
  if(random.includes(random_number)){
  continue;
  }
  else{
    random.push(random_number);
  }

}
return random;
}
// generate a random number array for question
let randomQuestion =  shuffledArray(10);

// generate a random number for option
let randomOption =  shuffledArray(4);

arrow_btn.addEventListener("click",function(){
  user_page.style.display = "none";
  set_page.style.display= "inline-block";
})

// iterate over set element 
setElement.forEach(Element =>{
 Element.addEventListener("click", function(){

// In the selected array  
  selectedSet = All_set[Element.className-1]
   questionElement.style.display ="inline-block";
   set_page.style.display ="none"

   loadQuestion(CurrentIndex);
   loadOption()
  
})
})
// function to load an question
function loadQuestion(currentIndex){

    // current object is the object that have question object of selected set and take indexing from random question 
  currentobject = selectedSet[randomQuestion[currentIndex]];
  ShuffledQuestion.push(currentobject);


  question.textContent =  currentobject.question;

}
// function to load an option
function loadOption(){
    // variable for indexing our option variable 
  let temp = 0;

  option.forEach((Element) =>{
       Element.textContent = currentobject.option[temp]
       temp++;

       // Event listner for option element
       Element.addEventListener("click", ()=>{
    
// if it is selected then store user Answer in current object 
        currentobject["userAnswer"] = Element.textContent
        if (option_element) {
      
            option.forEach(child => {
                // remove the selected class for styling 
              child.classList.remove("active")
            });
        }
        Element.classList.add("active")
    
      })
       })
    
 
  
}

next_btn.addEventListener("click", nextQue);

function nextQue() {
        previous_btn.style.display = "inline-block";
        // increasing its current index
        CurrentIndex++;

        // increase width of progress bar
        progress_sts.textContent = CurrentIndex + "/10";
        progress_bar.style.width = `${(CurrentIndex / 10) * 100}` + "%"
        
        // load question on click of next button
        loadQuestion(CurrentIndex);

        // load option on click of next button
        loadOption();
      
        // remove selected answer
        option.forEach(ele =>{
          ele.classList.remove("active")
        })

        // call the selected method for adding class that check if user Answer exist then add class
        selected();  
        if(CurrentIndex >= 9){
          next_btn.style.display = "none";
          
        }  
        
        // add styling on navigate button if user Answer exist change it on green
       if(ShuffledQuestion[CurrentIndex-1].hasOwnProperty("userAnswer")){
      navigate_btn[CurrentIndex-1].style.backgroundColor = "green"
       }
       // add styling on navigate button if Review exist it change into orange
        if(ShuffledQuestion[CurrentIndex-1].hasOwnProperty("Review")){
navigate_btn[CurrentIndex-1].style.backgroundColor ="orange";


       }
}

// function for previous question
function previousQue() {

    // Decrease its indexing
    CurrentIndex--;

    // Decrease its width of progress bar
    progress_sts.textContent = CurrentIndex + "/10";
    progress_bar.style.width = `${(CurrentIndex / 10) * 100}` + "%"

    // load question of current index
    loadQuestion(CurrentIndex)

    // load option
    loadOption();

    // if otpion have any class then remove its
    option.forEach(ele =>{
      ele.classList.remove("active")
    })

    // and this method check it has user Answer then add that class
    selected();

  

  if(CurrentIndex < 10){
    next_btn.style.display ="inline-block"
  }
    if(CurrentIndex == 0){
    //   previous_btn.style.display = "none";
      next.style.display ="inline-block"
      return;
    }

}

// Add Event listner for previous button
previous_btn.addEventListener("click", previousQue)

// for navigation it take index which we pass in our html page 
function navigate(Index

    // Now our current index will be button index -1
  CurrentIndex= Index-1;


// load question of current index
  loadQuestion(CurrentIndex)

  // load option for current index
  loadOption();


// remove class
  option.forEach(ele =>{
    ele.classList.remove("active")
  })
  
  // add class if current object has user Answer then styling it
  selected()
  
  // increase or decrease its width according current index
  progress_sts.textContent = CurrentIndex + "/10";
  progress_bar.style.width = `${(CurrentIndex / 10) * 100}` + "%"

  if(CurrentIndex > 0){
    previous_btn.style.display = "inline-block"
  }

  
  if(CurrentIndex == 9){
    next_btn.style.display = "none"

  }else if(CurrentIndex < 9){
    next_btn.style.display ="inline-block"

  }
}

function selected(){
    option.forEach((Element)=>{

          if(currentobject.userAnswer == Element.textContent ){
            Element.classList.add("active");
          }
    })
    
}


function isReview(){
    currentobject.Review = true;
    ReviewQuestion.push(currentobject);
  next_btn.click();


}

function reviewNextQue() {
counter++;
//    if(currentobject.hasOwnProperty("Review")){
//     CurrentIndex++;
//    }
  
    if(counter >= ReviewQuestion.length){
        // next_btn.style.display = "none";
        
    }
    else{
        ReviewQue();
    }

    if(counter > ReviewQuestion.length){
        ReviewQuestion = [];
    }

}
function reviewpreviousQue() {
    counter--;
   ReviewQue();
}


let counter =0;
function iReviewQue(){
    console.log(counter)
    question.textContent = ReviewQuestion[counter].question;

    

    let temp = 0;
    next_btn.style.display ="inline-block";
    progress_sts.style.display ="none";
    next_btn.setAttribute("onclick","reviewNextQue()")
    next_btn.removeEventListener("click",nextQue);
    previous_btn.setAttribute("onclick","reviewpreviousQue()")
    previous_btn.removeEventListener("click",previousQue);
    review_btn.style.display ="none"
    // bottom_element.style.display ="none"
   
    navigate_btn.forEach(Element=>{
        if(Element.style.backgroundColor == "orange"){
            Element.style.display = "inline-block"
        }
        else{
            Element.style.display ="none";
        }
    })
    console.log(counter);
    console.log(ReviewQuestion[counter].option);
    
  

    option.forEach((Element) =>{
         Element.textContent = ReviewQuestion[counter].option[temp]
         temp++;

         Element.addEventListener("click", ()=>{
            console.log(Element.textContent)
    
            ReviewQuestion[counter]["userAnswer"] = Element.textContent
            if (option_element) {
          
                option.forEach(child => {
                  child.classList.remove("active")
                });
            }
            Element.classList.add("active")
        
          })
          
        
    })
    option.forEach(ele =>{
        console.log(ele.textContent)
            ele.classList.remove("active")
               console.log(ReviewQuestion[counter].userAnswer)
             
            if(ReviewQuestion[counter].userAnswer == ele.textContent){
                          
                      ele.classList.add("active")
            }
          })

          progress.style.display = "none";


   
}

function reviewNavigate(Index){
    console.log(Index);
   counter =  Index;
   ReviewQue();
}

function submit(){

    if(ReviewQuestion.length > 0){
        let result = confirm("Do you want to review",)
        if(result){
           ReviewQue();
           navigate_btn.forEach(Element=>{
            if(Element.style.backgroundColor == "orange"){
                Element.setAttribute("onclick",`reviewNavigate(${count})`)
                count++
            }
        })
           submit_btn.setAttribute("onclick", "reviewSubmit()")
        }
        else{
            displayResult()
        }
    }else{
      displayResult()
    }
}

function reviewSubmit(){
    displayResult();
}

function displayResult() {

   
    var showElmenet = document.querySelector(".result");
    showElmenet.style.display = "inline-block"
  

    for(let key of selectedSet){
        if(key.hasOwnProperty("userAnswer")){
            (key.userAnswer == key.correctAnswer) ? score++ : wrongAnswer++;
        }
        else{
            unattempt++
        }
    }
    
    var scoreElement = showElmenet.querySelector(".score")
    scoreElement.innerHTML = `Your score is ${score  * 10}`;

    var wrongAns =  showElmenet.querySelector(".Wrong_answer")
    wrongAns.innerHTML = `Wrong Answer is ${wrongAnswer}`

    var unAttempt =  showElmenet.querySelector(".UnattemptedQuestion")
    unAttempt.innerHTML = `Unattempted Question  is ${unattempt}`


    var resultBody = showElmenet.querySelector('.resultedBody')
    var scoreElem =  document.querySelector(".score")
   var correctAns =  document.createElement('p')

 scoreElem.appendChild(correctAns);
 scoreElem.innerHTML = score;
console.log(correctAns);
    selectedSet.forEach(Que=>{
        
        resultBody.innerHTML += `<p>${Que['question']}</p>`;
    
        Que?.option.forEach((option) => {
            
        
            let bg_color = option == Que.correctAnswer?'green': option == Que.userAnswer ? 'red':'white';
            resultBody.innerHTML += `<p style="background-color:${bg_color} ; padding:10px">${option}</p>`;
     
        });;
        
    })
}

function tryAgain(){
    location.reload();
}