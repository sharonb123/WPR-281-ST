const pizzaRestaurants = [
    {name: "Pronto Pizza", rating: 4.7, text: ""},

    {name: "Frankies Pizza", rating: 3.5, text: ""},

    {name: "Diamond Slice", rating: 4.2, text: ""},

    {name: "Grand Torino Pizza", rating: 3.7, text: ""},

    {name: "Azzuri Pizza", rating: 4.8, text: ""},

    {name: "St Anna Pizza", rating: 2.7, text: ""}
];

// console.log(pizzaRestaurants);


//a) Transform the array using any array transformation method. If the rating of each restaurant
//is above 4, set text to Highly Rated. If the rating of each restaurant if below 4, 
// set text to Low Rated.

 /*pizzaRestaurants.filter(ratingsPizza(rating))
 {
    for(let i= 0; i<= pizzaRestaurants.length;i++){
    for(let j=0; j<= pizzaRestaurants.length[i];j++){
        if(parseFloat(pizzaRestaurants[j].rating) > 4)
    {
        pizzaRestaurants[j].text= 'Highly Rated';
    }
    else if(parseFloat(pizzaRestaurants[j].rating) < 4)
    {
        pizzaRestaurants[j].text= 'Low Rated';
    }
    }}

    }*/

    let Highlyrated= pizzaRestaurants.filter(pizzaRestaurants=>{
        return pizzaRestaurants.rating>=4;
    })
   console.log(Highlyrated); 


//b) Use a loop of your choice to display the transformed array.

/*pizzaRestaurants.forEach(pizzaRestaurants=>{
    console.log(pizzaRestaurants.name);

})*/

for(let i= 0; i<= pizzaRestaurants.length;i++)
{
    for(let j=0; j<= pizzaRestaurants.length[i];j++)
    {
        console.log(pizzaRestaurants[i][j]);
    }
    
}




//c) Use any array transformation method to go through the transformedArray, and return
//the average rating.

/*for(let i= 0; i<= pizzaRestaurants.length;i++)
{
    for(let j=0; j<= pizzaRestaurants.length;j++)
    {
        let sumOfRating =+ parseFloat(rating);

        let avg= sumOfRating/6;

        console.log(pizzaRestaurants[j].rating+avg);

    }
    
}*/



// d) Use an array transformation method to go through the transformedArray, return a new
// array, which uses a loop to display only the Highly Rated restaurants

/*for(let i= 0; i<= pizzaRestaurants.length;i++)
{
    for(let j=0; j<= pizzaRestaurants.length;j++)
    {
        let sumOfRating =+ parseFloat(rating);

        let avg= sumOfRating/6;

        console.log(pizzaRestaurants[j].rating+avg);

    }
    
}*/


   
