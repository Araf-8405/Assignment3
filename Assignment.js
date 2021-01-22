function kilometerToMeter(kilometer) {

    var meter = kilometer * 1000;
    return meter;
}
var result = kilometerToMeter(20);
console.log(result + " meter");



function budgetCalculator(clock, mobile, laptop) {

    var priceOfClock = clock * 50;
    var priceOfMobile = mobile * 100;
    var priceOfLaptop = laptop * 500;
    var sum = priceOfClock + priceOfMobile + priceOfLaptop;
    return sum;
    
}
var total = budgetCalculator(4, 3, 1);
console.log('Total =',total,'tk');


function hotelCost(day) {

    if (day <= 10){
         totalCost = day * 100;
    
         
    }
    else if (day <= 20){
        var firstPart = 10*100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        totalCost = firstPart + secondPart;
       
    } 
    else {
        var firstPart = 10*100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdpart = remaining * 50;
        totalCost = firstPart + secondPart + thirdpart ;
 
    }
    return totalCost;
    

}
var cost = hotelCost(15);
console.log('Total Cost=',cost, 'tk');


function megaFriend(str_ara) {
        var max = str_ara[0].length;
        str_ara.map(v => max = Math.max(max, v.length));
        result = str_ara.filter(v => v.length == max);
        return result;
      }
      var longest_string=megaFriend(['abdullah', 'aaraf', 'nijam','rifat','kofiluddin'])
      console.log(longest_string)
