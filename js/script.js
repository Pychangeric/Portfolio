var typed = new Typed(".typing",{
    strings:["","Web Disigner","Web Developer","Backend Developer","Full Stack Developer","API buider"],
    typeSpeed:100,
    BackendSpeed:60,
    loop:true,
})

const nav = document.querySelector(".nav"),
     navList = nav.querySelectorAll("li"),
     totalNavist = navList.length
     for(let i=0; i<totalNavist; i++)
     {
        console.log(navList[i])
     }