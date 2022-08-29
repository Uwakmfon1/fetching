const container = document.getElementById("container")
const date = new Date()
const todayDate = date.toISOString().substr(8,2)
const todayMonth = date.toISOString().substr(5,2)
const todayYear = date.toISOString().substr(0,4)

// const form = document.createElement("form")
// const submit = document.createElement("input")
// submit.setAttribute("type","submit")
// submit.setAttribute("value","submit")
// const inputDay = document.createElement("input")
// const inputMonth = document.createElement("input")
// const headingPath = document.createElement("h2")
// headingPath.innerText="These are the events that happened on this date \n Enter a Date And Month To Check The Events";

// form.appendChild(inputDay);
// form.appendChild(inputMonth);
// form.appendChild(submit);

// inputDay.setAttribute('placeholder',"Enter a date of ")
// inputDay.setAttribute('type',"text")

// inputMonth.setAttribute('placeholder',"Enter month")
// inputMonth.setAttribute('type',"text")

/**
 * get user input 
 * use userInput || date from given data
 * interpolate them in the url
 * 
 */
 
//  function receiveUserInput(){
  let finalUrl=`${todayDate}/${todayMonth}`
  // return finalUrl;
  // let finalUrl;
//  form.addEventListener('submit',(e)=>{
//       e.preventDefault();
//       if(inputDay && inputMonth == ""){
//       return  finalUrl=`${todayDate}/${todayMonth}`
//       }
//       else{
//         return  finalUrl=`${inputDay.value}/${inputMonth.value}`
//       }
      
//     })
  

//   // if(inputDay && inputMonth !== ""){
//   //    return  `${inputDay}/${inputMonth}`  
//   // }
//   // else{
//   //  return `${todayDate}/${todayMonth}`
//   // }
// }


 fetch(`http://127.0.0.1:3000/${finalUrl}`)        //  /${receiveUserInput()} 
  .then(response => response.json())
  .then((data) => {
    const { selected , events } = data;
    
    const form = document.createElement("form")
    const submit = document.createElement("input")
    submit.setAttribute("type","submit")
    submit.setAttribute("value","submit")
    const inputDay = document.createElement("input")

    const inputMonth = document.createElement("input")
    const headingPath = document.createElement("h2")
    headingPath.innerText="These are the events that happened on this date \n Enter a Date And Month To Check The Events";
      
    inputDay.setAttribute('placeholder',"Enter a date of ")
    inputDay.setAttribute('type',"text")

    inputMonth.setAttribute('placeholder',"Enter month")
    inputMonth.setAttribute('type',"text")

    form.appendChild(inputDay);
    form.appendChild(inputMonth);
    form.appendChild(submit);
    console.log(form.children)
   form.addEventListener('submit',(e)=>{
      e.preventDefault();
      console.log("submitted")
      if(inputDay.value && inputMonth.value == ""){
       finalUrl=`${todayDate}/${todayMonth}`
      }
      else{
         finalUrl=`${inputDay}/${inputMonth}`
      }
      
    })

    selected.forEach((item) => {
      const li = document.createElement("li")
      const ul = document.createElement("ul")
      const story = document.createElement("a")


      
      story.classList.add('story')
      
      story.innerText = `${item.text}\n YEAR:${item.year}`
      let page = item.pages.find((page)=> !!page.thumbnail)

      if(page){
        const img = document.createElement("img")
        img.setAttribute("src", page.thumbnail.source)
        story.setAttribute("target","_blank");
        story.setAttribute("href",page.content_urls.desktop.page)

        story.prepend(img);
      }

  li.append(story)   
  ul.appendChild(li)
  container.prepend(form) 
  container.append(ul);
  });
  
})









// fetch('http://127.0.0.1:3000/02/08')
// .then((response)=>response.json())
// .then(data =>console.log(data.selected[1].text))









