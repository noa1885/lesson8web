const p3 = new Object()
p3.name='peach'
p3.numk=40
p3.price=2.5
p3.print=function(){ 
    return this.name+this.numk+this.price
}

const fruits=[
    {name:'banana',
    numk: 20,
    price: 1,
    print:function(){ 
        return `${this.name} ${this.numk} ${this.price}`
    }
    },

    {name:'orange',
    numk: 10,
    price: 1.6,
    print:function() { 
        return `${this.name} ${this.numk} ${this.price}`
    }
    }
]
fruits.push(p3)

for (let index = 0; index < 3; index++) {
  
     console.log(fruits[index].print())
}
fruits[0].color="yellow"

for (let index = 0; index < 3; index++) {
  if (fruits[index].color != undefined) {
      console.log(fruits[index].color)

  }
}
for (const key in fruits[0]) {
    console.log(key + ": " + fruits[0][key] + "\n")
}
delete(fruits[1].price)
let str="";
for (const key in fruits[1]) {
 str+=(key + ": " + fruits[0][key]+" ,")
}
document.getElementById("show").innerHTML+=str
function change(){
    let f1=document.getElementById("newf").value
    fruits[0].price=f1
   console.log(fruits[0].price)
}
function change2() {
    let f1=document.getElementById("newf2").value;
    let fruits2=fruits.filter((index)=> index.numk < f1);
}

for (let index = 0; index < 3; index++)
{
Object.defineProperty(fruits[index],"price",{
    set(item){
        if (item>10&&item<1000) {
            fruits[index].price=item
        }
    }
})    
}
console.log(fruits[1].print())
fruits[1].check=(1100)
console.log(fruits[1].price)

