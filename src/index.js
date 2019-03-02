// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change

    var dollars={
        H:50,
        Q:25,
        D:10,
        N:5,
        P:1
    }; 
   var s=0;
   let count={}; 
   if(currency>10000) {return {error: "You are rich, my friend! We don't have so much coins for exchange"};}; 
   if (currency<1) {return count; };
    for(var key in dollars){
       s=currency/dollars[key]|0;
       if(s!=0){
           count[key]=s;
       }
      currency=currency-s*dollars[key];
    }
   return count;
   
}