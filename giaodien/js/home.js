var playBtn = document.getElementById('play_btn')
var playBtn1 =document.getElementById('btn_play_song')

playBtn1.addEventListener('click',()=>{
    if(playBtn.classList.contains('fa-play')){
        playBtn.classList.remove('fa-play')
        playBtn.classList.add('fa-pause')
    }else{
        playBtn.classList.remove('fa-pause')
        playBtn.classList.add('fa-play')
    }
})