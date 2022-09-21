// Q1) Write a ts program to print all natural numbers from 1 to n. - using while loop. 
var NaturalNumber:number = 0; 
function PrintNatural(n:number){
    while(NaturalNumber<= n){
        console.log(NaturalNumber)
        NaturalNumber++
    }
}
PrintNatural(10);

// Q2) Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop. 
var NaturalNumber1:number = 0; 
function PrintNatural1(n:number){
    while(n >= NaturalNumber1){
        console.log(n)
        n--
    }
}
PrintNatural1(100);

// Q3) Write a ts program to print all alphabets from a to z. - using while loop. 
var startChar = "a";
var endChar = "z";
var c = startChar.charCodeAt(0);
var d =  endChar.charCodeAt(0);
while ( c <= d ) {
  console.log( String.fromCharCode(c));
  c++
}

// Q4) Write a ts program to print all even numbers between 1 to 100. - using while loop.
var startNum:number = 1;
while(startNum <= 100){
    if(startNum % 2 == 0){
        console.log(startNum)
    }
    startNum++
}

// Q5) Write a ts program to print all odd number between 1 to 100.
var startNum1:number = 1;
while(startNum1 <= 100){
    if(startNum1 % 2 !== 0){
        console.log(startNum1)
    }
    startNum1++
}

// Q6) Write a ts program to find sum of all natural numbers between 1 to n.
 var NaturalNumber2:number = 1; 
 var sumOfNaturals:number = 0;
 function PrintNatural2(n:number):number{
    while(NaturalNumber2 <= n){
        sumOfNaturals += NaturalNumber2
        NaturalNumber2++
    }
    return sumOfNaturals
}
var result:number = PrintNatural2(4);
console.log(result);

// Q7) Write a ts program to find sum of all even numbers between 1 to n.
var startNum2:number = 1;
var sumOfEvens:number = 0;
function sumEvens(n:number):number{
    while(startNum2 <= n){
        if(startNum2 % 2 === 0){
            sumOfEvens += startNum2
        }
        startNum2++
    }
        return sumOfEvens
    }
    var result1:number = sumEvens(4);
    console.log(result1);

    // Q8) Write a ts program to find sum of all odd numbers between 1 to n.
    var startNum3:number = 1;
    var sumOfOdds:number = 0;
    function sumOdd(n:number):number{
        while(startNum3 <= n){
            if(startNum3 % 2 !== 0){
                sumOfOdds += startNum3
            }
            startNum3++
        }
            return sumOfOdds
        }
        var result1:number = sumOdd(5);
        console.log(result1);

    // Q9) Write a ts program to print multiplication table of any number.
    for(var i = 1 ; i <= 10 ; i++){
        console.log(`3 * ${i} = ${3*i}`)
    }

      // 10) Write a ts program to count number of digits in a number.
      function countDigits(countDigi:number){
        var counter = countDigi.toString().length;
        console.log(counter)
      }
      countDigits(100);
            
  //  11) Write a ts program to find first and last digit of a number.
    function findFirstLastDigi(findFLDigit:any){
    var firstDigit = findFLDigit.toString()[0];
    var LastDigit = findFLDigit.toString().slice(-1);
    console.log("First Digit ",firstDigit)
    console.log("Last Digit ",LastDigit)
    }
    findFirstLastDigi(97012222); 

    // 12) Write a ts program to find sum of first and last digit of a number.
    function sumFirstLastDigi(sunofFLDigit:any){
    var firstDigit = sunofFLDigit.toString()[0];
    var LastDigit = sunofFLDigit.toString().slice(-1);
    var sumofBoth = Number(firstDigit) + Number(LastDigit)
    console.log("Sum of First and last is: ",sumofBoth)

    }
    sumFirstLastDigi(97012225);

  //  13) Write a ts program to swap first and last digits of a number.
    function swapFirstlast(swapDigits:any){
    var OriginalStr = swapDigits.toString();
    var firstDigit = OriginalStr[0];
    var LastDigit = OriginalStr.slice(-1);
    var join:any ="";
       for(var i = 0; i < OriginalStr.length; i++){
        if(OriginalStr[i] == firstDigit || OriginalStr[i] == LastDigit){
            continue
        }
        var temp = firstDigit 
         firstDigit = LastDigit;
         LastDigit = temp;

        join += OriginalStr[i]
    }  
    console.log(firstDigit + join + LastDigit)
    }
    swapFirstlast(12345);

      // 14) Write a ts program to calculate sum of digits of a number.
      function sumofdigits(sumDigits:number){
        var sumofDig:number = 0;
        for(var i=0; i < sumDigits.toString().length; i++){
            sumofDig += parseInt(sumDigits.toString()[i])
        }
        return sumofDig
      }
      var resultSumDigits: number = sumofdigits(12345);
     console.log( resultSumDigits)


  //  15) Write a ts program to calculate product of digits of a number.
        function productofdigits(productDigits:number){
        var productofDig:number = 1;
        for(var i=0; i < productDigits.toString().length; i++){
            productofDig *= parseInt(productDigits.toString()[i])
        }
        return productofDig
      }
      var resultProductDigits: number = productofdigits(1234);
     console.log( resultProductDigits)

      // 16) Write a ts program to enter a number and print its reverse.
      function printreverse(reverse:number){
        var reverseNumber = reverse.toString()
        for(var i = reverseNumber.length-1; i >= 0 ; i--){
            console.log(reverseNumber[i])
        }
      }
      printreverse(12345)

  //  17) Write a ts program to check whether a number is palindrome or not.
         function checkPalendrom(palendrom:number){
            var palendromeStr = palendrom.toString()
        var palendromNumber = palendrom.toString().length
            for(var i = 0 ; i <= palendromNumber/2 ; i++){
                if(palendromeStr[i] !== palendromeStr[palendromNumber - 1 - i]){
                    console.log("It's not Palendrom")
                } 
            }
            console.log("It's Palendrom")
      }
      checkPalendrom(1234321)


  //  19)  Write a ts program to enter a number and print it in words.
    function makeItWord(numToWord:number){
        var mynum:any = numToWord;
        var ConvertToWord:any = String.fromCharCode(mynum);
        console.log(ConvertToWord)
        }   
     
    makeItWord(30)

    //  20) Write a ts program to print all ASCII character with their values.
     for(var i=32;i<127;++i) console.log(String.fromCharCode(i));

  //  21) Write a ts program to find power of a number using for loop.
    function getpower(n:number, e:number) {
      let num = n;
      for (let i = 1; i < e; i++) {
        num = num * n;
      }
      return num;
    }
    console.log(getpower(5, 3));

    //  22)  Write a ts program to find all factors of a number.
     function findFactor(num:number){
      for(let i = 1; i <= num; i++) {
        if(num % i == 0) {
            console.log(i);
        }
      }
     }
     findFactor(4)

    // 23)  Write a ts program to calculate factorial of a number.
      function getFectorial(fectorialNum:number){
        var makeFactorial:number = 1;
        for(var i = fectorialNum ; i >= 1; i--){
          makeFactorial *= i
        }
        return makeFactorial
      }
      console.log(getFectorial(5))


      // 24)   Write a ts program to find HCF (GCD) of two numbers.
        function findHCF(a:number, b:number){
          for (let i = 1; i <= a && i <= b; i++) {
            var hcf;
            if( a % i == 0 && b % i == 0) {
                hcf = i;
              }
            }
            console.log(hcf)
        }
       console.log(findHCF(32,60))




        //  26) Write a ts program to check whether a number is Prime number or not.
         function test_prime(n){
           if (n===1){
             return false;
           }
           else if(n === 2){
             return true;
           } else {
             for(var x = 2; x < n; x++){
               if(n % x === 0){
                 return false;
               }
             }
             return true;  
           }
         }
         
         console.log(test_prime(3));


        

