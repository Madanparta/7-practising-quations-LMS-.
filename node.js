// JS SEVEN PRACTISING QUATIONS.

let a = process.argv[2]; //Inputs taken the users.

// 1. PRINT ODD NUMBERS.
// answer
// for(let i = 1; i<=a; i++){
//     if(i%2 !== 0 ){
//         console.log(i);
//     }
// }

// USING WHILE LOOP.
// let i = 1;
// while(i<=a){
//     if(i%2 !== 0){
//         console.log(i);
//     }
//     i++;
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//2.SUM OF ALL THE EVEN NUMBER IN RANGES BETWEEN A AND B.
// ANSWER.
// let b = process.argv[3];
// let sum = 0;
// for(let i = a; i<=b; i++){
//     if(i%2==0){
//         sum = sum+i;
//     }
// }
// console.log(sum);

// USING WHILE LOOP.
// let sum = 0;
// let i = a;
// while(i<=b){
//     if(i%2==0){
//         sum=sum+i;
//     }
//     i++;
// }
// console.log(sum);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//3.print first and last digits numbers.
// answer.
// let x = 0;
// let y = 0;
// let zz = 0;
// for(let i = a; i>0; i++){
//   let x = Math.floor(i%10);
//   let y = Math.floor(i/100);
//   let zz = (y+""+x);
//   console.log(zz);
//   break
// }
  
// USING WHILE LOOP.
// let x = 0;
// let y = 0;
// let zz = 0;
// let i = a;
// while(i>0){
//     let x = Math.floor(i%10);
//     let y = Math.floor(i/100);
//     let zz = (y+""+x);
//     console.log(zz);
//     i++;
//     break
    
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//4. ARMSTRONG NUMBERS.
// ANSWER.

// >>using array..
// let num1 = 0;
// let num2 = 0;
// let num3 = 0;
// let result = 0;
// let x;
// for(let i = a; i<=999; i++){
//     x = i + "";
//     arr = x.split("");
//     num1 = arr[0];
//     num2 = arr[1];
//     num3 = arr[2];
//     result = Math.pow(num1 , 3) + Math.pow(num2 ,3) + Math.floor(num3 ,3) ;
//     if(result === i){
//         console.log(result);
//     }
// }

// >>using math.floor
// let arm = a;
// let sum = 0;
// while(arm>0){
//     let remainder = arm % 10;
//     sum = sum + remainder * remainder* remainder;
//     arm = Math.floor(arm/10);
// }
// if(sum == a){
//     console.log("armstring number.");
// }else{
//     console.log("not armstring number.");
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//5. CONSDITIONS QUATIONS. 
// ANSWER.
// let b = process.argv[3];
// let product = 1;
// for(let i = a; i <= b; i++){
//     let checking = Math.floor(i/10);
//     if(i%2==0 && checking%10 == 4){
//         product=product*i;
//     }
// }
// if(product == 1){
//     console.log(0);
// }else{
//     console.log(product);
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//6.ALL EVEN DIGIT NUMBERS.
// let r=0;
// while(a>0){
//     r=(r*10)+(a%10);
//     a=Math.floor(a/10);
//  }
//  let i=r;
//  while(i>0){
//      r = i % 10;
//      if (r % 2 == 0) {
//        console.log(r);
 
//  }
//  i = Math.floor(i / 10);
//  }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//7.REVERSE NUMBERS.

let rem, temp, res = 0;
		temp = a;
		while(a>0)
		{
			rem = a%10;
			a = Math.floor(a/10);
			res = res*10+rem;

		}
        
if(res==temp)
{
	console.log("equal to its reverse number");
}
else
{
	console.log("not equal to its reverse numbere");
}


