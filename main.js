FoodArray = [];

var FoodInfo = function(pFood, pCalories) {
    this.foodName = pFood;
    this.calories = parseInt(pCalories);
}

document.addEventListener("DOMContentLoaded", function (event){

    document.getElementById("addToArray").addEventListener("click", function (){
        let xfoodName = document.getElementById("foodName").value;
        let xCalories = document.getElementById("calories").value;
        let totalCalories = 0;
        FoodArray.push(new FoodInfo(xfoodName, xCalories));
        console.log(FoodArray);

        for (let index = 0; index < FoodArray.length; index++) {
            const element = FoodArray[index];
            totalCalories += element.calories;
        }

            document.getElementById("totalCalories").value = totalCalories;
    });
     
});

