//your code here
function allowDrop(ev) {
  ev.preventDefault();

let dragindex = 0;
let dropindex = 0;
let clone = "";

const images = document.querySelectorAll(".image");

function drag(e) {
  e.dataTransfer.setData("text", e.target.id);
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
function allowDrop(e) {
  e.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
function drop(e) {
  clone = e.target.cloneNode(true);
  let data = e.dataTransfer.getData("text");
  let nodelist = document.getElementById("parent").childNodes;
  console.log(data, e.target.id);
  for (let i = 1; i <= nodelist.length; i++) 
  {
    if (nodelist[i].id == data) 
	{
      dragindex = 1;
    }
  }

  dragdrop(clone);

  document.getElementById("parent").replaceChild(document.getElementById(data), e.target);

  document.getElementById("parent").insertBefore(clone,
      document.getElementById("parent").childNodes[dragindex]
    );
}

const dragdrop = (image) => {
  image.ondragstart = drag;
  image.ondragover = allowDrop;
  image.ondrop = drop;
};

images.forEach(dragdrop);