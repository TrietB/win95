//open and close modal
let OpenDoc = document.getElementById("open-me");
let aboutMeModal = document.getElementById("about-me");
let ModalContent = document.getElementById("about-me-inner");
let closeDoc = document.getElementById("close-about-me");
let expandDoc = document.getElementById("expand-about-me");
let startMenu = document.querySelector(".start-menu");
let startButton = document.querySelector(".start-btn");
let desktop = document.querySelector(".desktop");
let mini = document.getElementsByClassName("minimize");
let trees = document.querySelector("#trees");
let modalCV = document.querySelector("#CV");
let miniFolder = document.querySelector("#folder");
let miniPlayer = document.querySelector("#disc-player");


OpenDoc.ondblclick = function () {
  aboutMeModal.style.visibility = "visible";
  aboutMeModal.style.zIndex = 1
};
closeDoc.onclick = () => {
  aboutMeModal.style.visibility = "hidden";

};

trees.ondblclick = function () {
  modalCV.style.visibility = "visible";
  modalCV.style.zIndex = 1
};

// startButton.onclick = () => {
//   startMenu.style.visibilty = "visible"
// }
startButton.addEventListener("click", () => {
  startMenu.style.visibility = "visible";
});

document.addEventListener('click', (e)=>{
  // if(e.target.closest('.start-menu')){
  //   startMenu.style.visibility = "hidden"
  // }
  // console.log(e.target)
  if(e.target.classList.contains('desktop')){
    startMenu.style.visibility = 'hidden'
  } else {
    console.log('false')
  }
})

// console.log(mini[0], mini[1]);


// mini[0].addEventListener("click", () => {
//   if(tabs.includes('About me')){
//     return
//   } else{
//     console.log("mini about me");
//     tabs.push('About me')
//     aboutMeModal.style.visibility = 'hidden'
//     minimizedFunc(tabs)  
//     tabs.shift()  
//   }
// });
// mini[1].addEventListener('click', ()=> {
//   if(tabs.includes('Trees')){
//     modalCV.style.visibility = 'hidden'
//     return
//   } else{
//     console.log("mini trees");
//     tabs.push('Trees')
//     modalCV.style.visibility = 'hidden'
//     minimizedFunc(tabs)
//     tabs.shift()    
//   }
// })

// const resizeObserver = new ResizeObserver((entries) => {
//   entries.forEach((entry) => {
//     let position = entry.contentRect;
//     console.log(position.height, position.width);
//     // eminipandModal(position.width, position.height)
//   });
// });
// resizeObserver.observe(aboutMeModal);

// const eminipandModal = (expandDoc.onclick = (width, height) => {
//   if (aboutMeModal.classList.contains("full-screen")) {
//     aboutMeModal.classList.remove("full-screen");
//     aboutMeModal.style.width = width;
//     aboutMeModal.style.height = height;
//   } else {
//     aboutMeModal.style.top = null;
//     aboutMeModal.style.left = null;
//     aboutMeModal.classList.add("full-screen");
//   }
// });

//clock
const updateTime = () => {
  let today = new Date();
  let hours24 = today.getHours();
  let hours12;
  let minutes = today.getMinutes();
  let suffimini = "";

  if (hours24 >= 12) {
    suffimini = " PM";
    hours12 = hours24 % 12;
  } else {
    suffimini = " AM";
    hours12 = hours24;
  }

  if (minutes % 10 == 0) {
    minutes = minutes + "0";
  } else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  var time = hours12 + ":" + minutes + suffimini;

  let timeBox = document.getElementById("time-box");

  timeBox.innerHTML = time;
};
setInterval(updateTime, 1000);

// draggable modal

const dragHeader = document.querySelectorAll(".window-header");
console.log(dragHeader)

console.log(window.outerWidth, window.innerWidth)

function dragElement(element, draggable) {

  if(window.innerWidth < 768){
    console.log(window.innerWidth)
    return
  } else {

  //   console.log(element);
  let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;

  const dragMouseDown = (e) => {
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;

    // console.log(pos3, pos4, element.style);
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  };

  if (draggable) {
    draggable.onmousedown = dragMouseDown
  } else {
    // element.onmousedown = dragMouseDown
  }

  const elementDrag = (e) => {
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    element.style.top = element.offsetTop - pos2 + "px";
    element.style.left = element.offsetLeft - pos1 + "px";
  };

  const closeDragElement = () => {
    document.onmouseup = null;
    document.onmousemove = null;
  };
  }
}

  // dragElement(aboutMeModal, element)
  window.addEventListener('resize', ()=>{
    dragHeader.forEach(element=>{
  dragElement(aboutMeModal, element)
    })
  } )


dragHeader.forEach((element) => {
  // dragElement(aboutMeModal, element)

  // dragElement(modalCV, element);
})
// dragElement(aboutMeModal);

const menuItems = document.querySelectorAll(".menu-item");

//minimized bar

//check if modal is active
// assign id to to each modal?
const minimizeBtn = document.querySelectorAll(".minimize");

const minimizedFunc = (elements) => {
  const minimizedBar = document.querySelector(".minimized-bar");
  console.log(minimizedBar.querySelectorAll('.minimized-item'))
  let items
  if(elements) {
    console.log(elements)
    items = elements
    items.forEach((item,i) => {
      // if(minimizedBar.querySelectorAll('.minimized-item').includes(item)){
      //   console.log('matched')
      // }
      console.log(item);

      const minimizedTab = document.createElement("button");
      minimizedTab.id = `${item}-minimized`
      minimizedTab.className = "minimized-item";
      minimizedTab.innerHTML = item;
      minimizedBar.appendChild(minimizedTab);
    });
  }
  
};

// minimizedFunc(tabs)
// console.log(tabs)

window.onbeforeunload = function()
    {
        localStorage.removeItem('minimize');
    };

const saveLocalStorage = () => {
  let savedTabs = []

  // console.log(localStorage.getItem('minimize'))
  minimizeBtn.forEach((btn, i) => {
    console.log(btn.value, i)
    btn.addEventListener('click', () =>  {
      for(let i=0; i<=savedTabs.length; i++){
        if(savedTabs.includes(btn.value)){
          return
        }else{
          savedTabs.push(btn.value)
          let stringTabs = JSON.stringify(savedTabs)
          localStorage.setItem('minimize', stringTabs)
          let tabs = JSON.parse(localStorage.getItem('minimize'))
          console.log(tabs)
          minimizedFunc(tabs)
        }
      }
    })
  })


}
saveLocalStorage()
// minimizedFunc(tabs);

let mutationsObserver = new MutationObserver((mutations)=> {
  mutations.forEach((mutation)=>{
    console.log(mutation)
  })
})
// mutationsObserver.observe(aboutMeModal,{
//   attributes: true,
//   characterData: true,
//   childList: true,
//   subtree: true,
//   attributeOldValue: true,
//   characterDataOldValue: true
// })

// minimize app to taskbar

// access app in taskbar

// change focus when switch app



