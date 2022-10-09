import data from './data.js'

const delay = ms => {
	return new Promise(r => setTimeout(() => r(), ms))
}
let textName = document.getElementById('textName')
let textExample = document.getElementById('example')
let rightArrow = document.getElementById('rightArrow')
let leftArrow = document.getElementById('leftArrow')
let countClick = -1
//console.log(data[0].name)
//const arrayMethods = document.getElementById ('array')
//2 массива: массив ключей и массив значений + функция одновременного вывода ключа+значение с заданной задержкой + функция одновременного вывода ключа+значение по клику
    
//создание таблицы со строкой и добавление в html
/*const newTable = document.createElement('table')
const currentElement = document.getElementById ('array')
document.body.insertBefore (newTable, currentElement)
const newRow = document.createElement('tr')
newTable.appendChild(newRow)*/
//------------------------------------------


function outputElementByClick (data) {
    const newCell = document.createElement('td')

    let example =(exampleFromData) =>{
        return Array.from(exampleFromData)
    }
       // console.log(arrayFromData)
       let updData = ''
      let updExmpl = (data)=>{
            
            for(let el of data){
                if(el==='\n'){
                    el += '<br>'
                }
                updData +=el
            }
            //console.log(updData)
            return updData

      }
      
       // return updExmpl
    
    //example(data[countClick].example)

   // console.log(typeof example(data[countClick].example))
    textName.textContent = data[countClick].name
    textText.textContent = data[countClick].description
    textExample.innerHTML = updExmpl(example(data[countClick].example))
    
    //countClick++
    
}
function test (){console.log('test')}
rightArrow.onclick = () => {
    countClick++
    outputElementByClick (data)
    console.log(countClick)
    
    console.log(countClick, 'after ++')
}
leftArrow.onclick = () => {
    countClick--
    outputElementByClick (data)
    console.log(countClick)
}
//bodyElement.onclick(outputElementByClick)

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1)
// copy to index 0 the element at index 3
console.log(array1.copyWithin(1,4));
// expected output: Array ["d", "b", "c", "d", "e"]



