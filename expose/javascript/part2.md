1. The console prints 3 because i is a var and there are 3 prices in the prices array
2. The console prints 150 since .5 of the last price in prices(300) is 150.
3. The console prints 150 since 100*discountedPrice(150)/100 = 150
4. Returns [50, 100, 150] since this is 50% off of the input array prices
5. Error because i is initialized with let in the for loop but line 12 is outside of the for loop so i is undefined
6. Error because discountedPrice is initialized with let in the for loop but line 13 is outside of the for loop so discountedPrice is undefined
7. Console prints 150 since finalPrices scope is within the function so the for loop properly reassigns the value of finalPrice
8. Returns [50, 100, 150] since discounted is within the function scope and explanation for 4 still applies
9. Error, same reason as 5 but for line 11
10. Console prints 3 since input array prices has length 3
11. Returns [50, 100, 150] since discounted is an array and dicountedPrice is pushed so discounted is never rewritten and explanation for 4 still applies
12. * student.name
    * student["Grad Year"]
    * student.greeting()
    * student["Favorite Teacher"].name
    * student.courseLoad[0]
13. * '32', 2 was converting to a string and added to '3'
    * 1, 3 was converted to a number, 3-2=1
    * 3, null was converted to a zero, 3+0=3
    * '3null' null was converted to a string and added to '3'
    * 4, true was converted to a 1, 1+3=4
    * 0, false and null were both converted to 0, 0+0=0
    * '3undefined', undefined was converted to a string and added to '3'
    * NaN, undefined couldn't be converted to a number
14. * true, 2 is converted to a number
    * false, '2' is compared to the string '12' and char by char comparison leads to '2' < '1' = false
    * true, '2' is converted to a number
    * false, '2' is not the same type as 2
    * false, true is converted to 1, 1 == 2 is false
    * true, Boolean(2) evaluates to true, true === true = true
15. == checks for equality after type conversion, === does not perform the conversion
17. The function will return the array [2, 4, 6]. We look at the modifyArray function. In the for loop for each value in input array, we run callback on each index of input array. Since callback is the function doSomething which mutiplies the input by 2, we simply multiply each element in the input array by 2 and return the result being [2, 4, 6].
18. The function prints 1 4 3 2 in order