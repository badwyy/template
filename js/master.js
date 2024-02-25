//check if there local storrage element
let maincolors=localStorage.getItem("color-option");

if(maincolors!==null){
    document.documentElement.style.setProperty("--main-color",maincolors);

//remove active from all colors li
    document.querySelectorAll(".colors-list li").forEach(element=>{

        element.classList.remove("active");


//add active 
        if(element.dataset.color===maincolors){
            element.classList.add("active");
        }
    });



}




//click
document.querySelector(".setting-box .toggle-setting .fa-gear").onclick=function(){
    //toggle fa spin for rotation
    this.classList.toggle("fa-spin");


    //toggle class open on main setting box
    document.querySelector(".setting-box").classList.toggle("open");
}

//swith colors
const colorsli =document.querySelectorAll(".colors-list li");

//loop on all list items
colorsli.forEach(li=>{


    li.addEventListener("click",function(e){
        //set color on root
        document.documentElement.style.setProperty("--main-color",e.target.dataset.color);

        //set color ton local storage
        localStorage.setItem("color-option",e.target.dataset.color);
        
        // //remove active class from all li
        // e.target.parentElement.querySelectorAll(".active").forEach(element=>{
        //     element.classList.remove("active");
        // });

        // // add active to target li
        // e.target.classList.add("active");
        handleactive(e);    //function
    });


});

//random background option
let background_option= true;

//varible to control the interval
let background_interval;

//check if there local storrage background 
let background_localitem = localStorage.getItem("background_option");

if (background_localitem !== null){
    // console.log(background_localitem);   byrg3 string
    if(background_localitem === "true"){
        background_option = true ;
    }else{
        background_option=false;
    }
    // console.log(background_localitem);
//remove active class from all spans
document.querySelectorAll(".random-background span").forEach(element=>{
    element.classList.remove("active");
});

if(background_localitem ==="true"){
    document.querySelector(".random-background .yes").classList.add("active");
}else{
    document.querySelector(".random-background .no").classList.add("active");

}

}
//swith background
const randombackgrounds =document.querySelectorAll(".random-background span");

//loop on all spans
randombackgrounds.forEach(span=>{

//click 
    span.addEventListener("click",function(e){
        
        
        // //remove active class from all span
        // e.target.parentElement.querySelectorAll(".active").forEach(s=>{
        //     s.classList.remove("active");
        // });

        // // add active to target span
        // e.target.classList.add("active");

        handleactive(e);

        if (e.target.dataset.background === "yes"){
            background_option= true;

            randomize_imges();

            localStorage.setItem("background_option",true);

        } else {
            background_option= false;

            clearInterval(background_interval);

            localStorage.setItem("background_option",false);

        }
    });


});









//select landing page element 
let landingpage= document.querySelector(".landing_page");

//get array of images

let imgs_array=["6.jpg","7.jpg","8.jpg","9.jpg","10.jpg"];




//function to randomize imges
function randomize_imges (){
if (background_option === true){
    background_interval=  setInterval(() => {
        // get random number
        let ranadomnumber=Math.floor(Math.random() *imgs_array.length);
        
        // change background image url
        // landingpage.style.backgroundImage='url("images/313064.jpg")';
        landingpage.style.backgroundImage='url("images/'+imgs_array[ranadomnumber]+'")';
        //  or       landingpage.style.backgroundImage=`url(images/${imgs_array[ranadomnumber]})`;
        
        },1000);
        // console.log("images/'+imgs_array[ranadomnumber]+'")

}

}



//select skills selector

let ourskills=document.querySelector(".skills");

window.onscroll=function(){
//skills offset top   //el goze ally 2bl skills
let skillsOFFsettop=ourskills.offsetTop;
//skills outer height
let skillsOUterHeight=ourskills.offsetHeight;
//window height
let windowHeight=this.innerHeight;
//window scroll top
let windowScrolltop=this.pageYOffset;   //algoz2 ally 3mltlo scroll
// console.log(windowScrolltop);
if( windowScrolltop > (skillsOFFsettop+skillsOUterHeight-windowHeight)){
    this.console.log("skills section reached");
    let allskills=document.querySelectorAll(".skill-box .skill-progress span");
    allskills.forEach(skill=>{
        skill.style.width=skill.dataset.progress;
    });
};



};

//create pop up with the images
let ourGallery=document.querySelectorAll(".gallery img");
ourGallery.forEach(img=>{

    img.addEventListener("click",(e)=>{
        //create overlay elemnt
        let overlay=document.createElement("div");
        //add class to overlay
        overlay.className="popup-overlay";
        //apend overlay to the body
        document.body.appendChild(overlay);

        //create popup box
        let popupBox=document.createElement("div");
        //add class 
        popupBox.className="popup-box";
        //add alt text
        if(img.alt !== null){
            //create heading
            let imgheading=document.createElement("h3");
            //create text for heading
            let imgtext=document.createTextNode(img.alt);
            //append the text to the heading
            imgheading.appendChild(imgtext);
            //append heading to the popup box
            popupBox.appendChild(imgheading);
        }
        //create the image
        let popupimage=document.createElement("img");
        //set image source
        popupimage.src=img.src;
        //add image to popup box
        popupBox.appendChild(popupimage);
        //append the popup box to the body
        document.body.appendChild(popupBox);

        //create close span
        let closespan=document.createElement("span");
        //close button text
        let closebtntext=document.createTextNode("x");
        //add text to span
        closespan.appendChild(closebtntext);
        //add class to close btn
        closespan.classList.add("close-btn");
        // closespan.className="close-btn";
        //add close btn to popup box
        popupBox.appendChild(closespan);
        
    });
});

//close pop
document.addEventListener("click",function(e){
if(e.target.className==="close-btn"){
    //remove the current popup
    // e.target.parentNode.remove();   or
    e.target.parentElement.remove();
    //remove popup  overlay
    document.querySelector(".popup-overlay").remove();
}
});


//select all bullets
const allbullets=document.querySelectorAll(".nav-bullets .bullet");

// allbullets.forEach(bullet=>{
//     bullet.addEventListener('click', (e)=>{
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     });

// });


// //kda bkrr functionalty
// //select all links
const alllinks=document.querySelectorAll(".links a");

// alllinks.forEach(link=>{
    
//     link.addEventListener('click', (e)=>{
//         e.preventDefault(); //34an hwa almfrod byft7 link
//         document.querySelector(e.target.dataset.section).scrollIntoView({
//             behavior: "smooth"
//         })
//     });

// });


function scrolltosomewhere(elements){


elements.forEach(ele=>{
    
    ele.addEventListener('click', (e)=>{
        e.preventDefault(); //34an hwa almfrod byft7 link
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth"
        })
    });

});
}

scrolltosomewhere(allbullets);
scrolltosomewhere(alllinks);


//fun for handle active state
function handleactive(ev){
    //remove active class from all span
    ev.target.parentElement.querySelectorAll(".active").forEach(ele=>{
        ele.classList.remove("active");
    });

    // add active to target span
    ev.target.classList.add("active");

}



let bulletsSpan=document.querySelectorAll(".bullets-option span");

let bulletscontainer =document.querySelector(".nav-bullets");

let bulletlocalItem=localStorage.getItem("bullets_option");
if(bulletlocalItem!== null){
    
    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if(bulletlocalItem === "block"){

        bulletscontainer.style.display='block';

        document.querySelector(".bullets-option .yes").classList.add("active");
    }else{
        bulletscontainer.style.display='none';
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}


bulletsSpan.forEach((span)=> {
    span.addEventListener("click",(e)=>{
        if(span.dataset.display==="show"){
            bulletscontainer.style.display='block';
            localStorage.setItem("bullets_option",'block');
        }else{
            bulletscontainer.style.display='none';
            localStorage.setItem("bullets_option",'none');
        }
        handleactive(e);
    });
    
});

//reset button
document.querySelector(".reset-options").onclick=function(){
    // localStorage.clear(); btms7 kolo
    localStorage.removeItem("bullets_option");
    localStorage.removeItem("color-option");
    localStorage.removeItem("background_option");
    //reload window
    window.location.reload();
}

//toggle menu
let toggleBtn=document.querySelector(".toggle-menu");
let tLinks=document.querySelector(".links");

toggleBtn.onclick=function(e){
    //stop propagation   34an lma adws 3l span bta3ha m4 htft7
    e.stopPropagation();
    
    //add
    this.classList.toggle("menu-active");   //elshm yzhr lma yb2a class active
    tLinks.classList.toggle("open");
};

//click anywere outsiden menu and toggle btn
document.addEventListener("click",(e)=>{
    if(e.target!== toggleBtn && e.target!== tLinks){
        //check if menu is open 
        // console.log("open");
        if(tLinks.classList.contains("open")){
            // console.log("open");

            //remove
            toggleBtn.classList.toggle("menu-active");   
            tLinks.classList.toggle("open");

        }
    }
});
// stop propagation llinks
tLinks.onclick=(e)=>{
    e.stopPropagation();
}