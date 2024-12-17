const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : 'swift by apple'
}

// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }


const programming = ["js", "py", "php", "html", "css"]

// for (const key in programming) {
//     console.log(programming[key]);
    
// }


const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United State of America')
map.set('FR', 'France')
map.set('FR', 'France')

// for (const key in map) {
//     console.log(key);
// }

const coding = ["js", "php", "java", "html", "python"]

// coding.forEach( function (item) {
//      console.log(item);
// } )

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item) {
//     console.log(item);
    
// }

// coding.forEach(printMe)

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
    
})

const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "JS"
    },
    {
        languageName : "Java",
        languageFileName : "Java"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageNamen);
    
})