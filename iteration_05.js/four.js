const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    py: 'python'
}
// forin loop
for (const key in myObject) {
        console.log(myObject[key]);
    }


const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming){
    console.log(programming[key]);
}

const map = new Map()
