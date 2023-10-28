// sample Text
var smapleText = "hello, Bangladesh.I'm here for you";

//sampleNumber
var sampleNumber = 100;

// কোনো স্ট্রিং কে সম্পূর্ণভাবে uppercase বা lowercase করতে :-
    var NameLowercase = "text";
    NameLowercase.toLocaleLowerCase
    console.log(NameLowercase)

    var NameUppercase = "Abdul Mazid Al Farabi";
    NameUppercase.toUpperCase
    console.log(NameUppercase)

// পজিশন বের করতে :-
    var myName = "Abdul Mazid Al Farabi";
    var desired = myName.indexOf("M")
    console.log(desired)

    var myName2 = "Mazid Al Farabi";
    var desired2 = myName2.indexOf("M")
    console.log(desired2)

    var myName3 = "Mazid Al Farabi";
    var desired3 = myName3.indexOf("Al")
    console.log(desired3)

    // 6 0 6

// স্ট্রিং কে split বা ভাগ করতে (white space দিয়েও ভাগ করা যায়। ) :-
    var resultSplit = smapleText.split('.')
    console.log(resultSplit);
    
// string number parseFloat দিয়ে কনভার্ট করা যায়:-
    var stringNumber = '15'
    var stringNumberResult = parseFloat.stringNumber;
    console.log(stringNumberResult);

    //-------------------------------------Undone-----------------------------------------------------

// কোনো ফলাফল প্রাপ্ত দশমিক সংখ্যাদের ফিক্সড করে দিতে পারি :-
    var decimalNumber = 12.22156152;
    var decimalNumberResult = decimalNumber.toFixed(2);
    console.log(decimalNumberResult)

// Information: ++ মানে এক মান বাড়ায় দেয়া।

// negative number কে পসিটিভ করে দেয় abs. function:-
    var negativeNumber = -85;
    var negativeNumberResult = Math.abs(negativeNumber)
    console.log(negativeNumberResult)

// নাম্বার থেকে দশমিক সংখ্যা ফেলে যায় (তবে ৫০ কম বা বেশি দেখাবে। ) :-
    var dososmikShongkha = 21.50646;
    var dososmikShongkhaResult = Math.round(dososmikShongkha);
    console.log(dososmikShongkhaResult)

// 