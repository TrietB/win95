
//open and close modal
let OpenDoc = document.getElementById('open-me')
let MyModal = document.getElementById('about-me')
let ModalContent = document.getElementById("about-me-inner")
let closeDoc = document.getElementById('close')

OpenDoc.ondblclick = function(){
    MyModal.style.visibility = "visible"
}
closeDoc.onclick = () => {
    MyModal.style.visibility = 'hidden'
}

//clock
const updateTime = () => {
    let today = new Date()
    let hours24 = today.getHours()
    let hours12
    let minutes = today.getMinutes()
    let suffix = ''


    if(hours24 >= 12){
        suffix = ' PM'
        hours12 = hours24 % 12 
    }else{
        suffix = ' AM'
        hours12 = hours24
    }

    if (minutes % 10 == 0) {
        minutes = minutes + "0";
      } else if (minutes < 10) {
        minutes = "0" + minutes;
      }
      var time = hours12 + ":" + minutes + suffix;

    let timeBox = document.getElementById('time-box')

    timeBox.innerHTML = time
}

setInterval(updateTime, 1000)
