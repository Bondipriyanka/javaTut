const my_frnds = ["Jaya", "Harshi" ,"Ammu"]
const dc_frnds= ["Harshi" , "Ammu"]

//my_frnds.push(dc_frnds)
//console.log(my_frnds);
//console.log(my_frnds[3][1]);
//const allfrnds = my_frnds.concat(dc_frnds)
//console.log(allfrnds);

//spread operator
const all_new_frnds = [...my_frnds, ...dc_frnds]
//console.log(all_new_frnds);
const another_array = [1 ,2, 3, [4 ,5, 6] , 7 ,[6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("Priya"))
console.log(Array.from("Priya"))
console.log(Array.from({name :"Priya"}))//interesting

let score1 = 100
 let score2 = 200
 let score3 = 300
 console.log(Array.of(score1, score2, score3));

