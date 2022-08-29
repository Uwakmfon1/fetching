fetch("https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/all/08/10")
.then(response =>response.json())
.then(data => {
    const {births}=data;
    const filtered = [...births].slice(0,10)
    console.log(filtered)
// births.forEach((item)=>
// return filtered.items
// console.log(item[filtered]))
 })