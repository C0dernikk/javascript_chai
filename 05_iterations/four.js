const myObj = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple',
    py: 'python'
}

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`);
}

const lang = ['js', 'java', 'ruby', 'cpp']

for (const key in lang) {
  console.log(`${key} => ${lang[key]}`);
}

const map = new Map()
map.set('IN', "India")
map.set('US', "United states of America")
map.set('AU', "Australia")

for (const key in map) {
  console.log(key);
}// Map cannot be broken with keys and hence not possible

