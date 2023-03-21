
//  header

let header = document.getElementById('head');

window.onscroll = function()
{
  if(scrollY > 0)
  {
    head.classList.add('fixed');
  } else {
    head.classList.remove('fixed');
  }
};

//  Nav Bar

let Open = document.getElementById("Open");
let Close = document.getElementById("Close");

let bar = document.querySelector(".bar");

Open.onclick = function () {
  bar.classList.add("openBar");
  Close.style.display = "flex";
  Open.style.display = "none";
};

Close.onclick = function () {
  bar.classList.remove("openBar");
  Close.style.display = "none";
  Open.style.display = "flex";
};

//  opinions

let right = document.getElementById("right");
let left = document.getElementById("left");

let opinions1 = document.getElementById("opinions-1");
let opinions2 = document.getElementById("opinions-2");

function rightS() {
  opinions1.style.display = "none";
  opinions2.style.display = "block";
}

function leftS() {
  opinions1.style.display = "block";
  opinions2.style.display = "none";
}

//  Scroll 

let btnScroll = document.getElementById("btnScroll");

window.onscroll = function()
{
  if(scrollY >= 400)
  {
    btnScroll.style.transform = 'translateX(0)';
  } else {
    btnScroll.style.transform = 'translateX(100%)';
  }
};

btnScroll.onclick = function()
{
  scroll({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};



