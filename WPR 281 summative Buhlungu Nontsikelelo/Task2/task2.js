// a) The (ADD) button, upon form submission, must display the marks for each student for the three
//subjects and if the mark is below 50, the text color should be red. [5]

function ADD()
{
    // first student
   let x= parseFloat(document.getElementById("student1Maths").value);
   let y= parseFloat(document.getElementById("student1English").value);
   let z= parseFloat(document.getElementById("student1History").value);
   
   if(x < 50 || y <50 || z <50)
   {
    x.style.Color = "red";
    y.style.Color = "red";
    z.style.Color = "red";
   } 
   
   let divResults= document.getElementById("results").value;

   let label1= document.createElement("label");
   let stud1= document.createTextNode("student1");
   label1.appendChild(stud1);

   let para1=document.createElement("p");
   let mark1= document.createTextNode(x);
   para1.appendChild(mark1);

   let para2=document.createElement("p");
   let mark2= document.createTextNode(y);
   para2.appendChild(mark2);

   let para3=document.createElement("p");
   let mark3= document.createTextNode(z);
   para3.appendChild(mark3);

   let div= document.insertBefore("marksForm,divResults");
   div.appendChild(label1);
   div.appendChild(para1);
   div.appendChild(para2);
   div.appendChild(para3);


   // second student

   let a= parseFloat(document.getElementById("student2Maths").value);
   let b= parseFloat(document.getElementById("student2English").value);
   let c= parseFloat(document.getElementById("student2History").value);
   
   if(a < 50 || b < 50 || c < 50)
   {
    a.style.Color = "red";
    b.style.Color = "red";
    c.style.Color = "red";
   } 
   
   let divResults2= document.getElementById("results").value;

   let label2= document.createElement("label");
   let stud2= document.createTextNode("student2");
   label2.appendChild(stud2);

   let para4=document.createElement("p");
   let mark4= document.createTextNode(a);
   para4.appendChild(mark4);

   let para5=document.createElement("p");
   let mark5= document.createTextNode(b);
   para5.appendChild(mark5);

   let para6=document.createElement("p");
   let mark6= document.createTextNode(c);
   para6.appendChild(mark6);

   let div2= document.insertBefore("marksForm,divResults2");
   div2.appendChild(label2);
   div2.appendChild(para4);
   div2.appendChild(para5);
   div2.appendChild(para6);


   // third student

   let l= parseFloat(document.getElementById("student3Maths").value);
   let m= parseFloat(document.getElementById("student3English").value);
   let n= parseFloat(document.getElementById("student3History").value);
   
   if(l < 50 || m < 50 || n < 50)
   {
    l.style.Color = "red";
    m.style.Color = "red";
    n.style.Color = "red";
   } 
   
   let divResults3= document.getElementById("results").value;

   let label3= document.createElement("label");
   let stud3= document.createTextNode("student3");
   label2.appendChild(stud2);

   let para7=document.createElement("p");
   let mark7= document.createTextNode(l);
   para47.appendChild(mark7);

   let para8=document.createElement("p");
   let mark8= document.createTextNode(m);
   para8.appendChild(mark8);

   let para9=document.createElement("p");
   let mark9= document.createTextNode(n);
   para9.appendChild(mark9);

   let div3= document.insertBefore("marksForm,divResults3");
   div3.appendChild(label3);
   div3.appendChild(para7);
   div3.appendChild(para8);
   div3.appendChild(para9);






}

// The (AVERAGE) button, upon submission must calculate and display the average marks for each
//subject below the form. [5]

function AVERAGE()
{
    let x= parseFloat(document.getElementById("student1Maths").value);
    let y= parseFloat(document.getElementById("student1English").value);
    let z= parseFloat(document.getElementById("student1History").value);
    let w= x+y+z/3;
    

   let label1= document.createElement("label");
   let stud1= document.createTextNode("student1");
   label1.appendChild(stud1);

   let para1=document.createElement("p");
   let std1= document.createTextNode(w);
   para1.appendChild(std1);

   let para2=document.createElement("p");
   let std2= document.createTextNode(w);
   para2.appendChild(std2);

   let para3=document.createElement("p");
   let std3= document.createTextNode(3);
   para3.appendChild(std3);

   let resultsDiv=document.getElementById("results");
   resultsDiv.appendChild(para1);
   resultsDiv.appendChild(para2);
   resultsDiv.appendChild(para3);

}

//c) add a heading above the first form element that says, "Welcome to the Class of
//Dummies."

    let h1= document.createElement("h1");
    let h1Head= document.createTextNode("Welcome to the Class of Dummies");
    h1.appendChild(h1Head);
    
    let div= document.getElementsByClassName("Container");

    div.insertBefore("marksForm","div");

// Change the background color of the page to grey and the ADD and AVERAGE Buttons color to pink using
//the query selectors [5]

document.body.style.backgroundColor = "grey";

let add= document.getElementById("addButton");
let avg= document.getElementById("averageButton");

let form=document.getElementById("marksForm");

add.style.backgroundColor="pink";
avg.style.backgroundColor="pink";


