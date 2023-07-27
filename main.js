 data=[{
    id:1,
    imageurl:"image/image1.jpg",
    name:"Rose",
    details:"Their stems are usually prickly and their glossy green leaves.Roses Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals.are considered timeless gifts of love that grows rivers"
},

{
    id:2,
    imageurl:"image/image2.jpg",
    name:"Daisy",
    details:"Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petalsDistinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals."
},

{
    id:3,
    imageurl:"image/image3.jpg",
    name:"Lilly",
    details:"The flowers consist of six petal-like segments, which may form the shape of a trumpet, with a more or less tube.Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals."
},

{
    id:4,
    imageurl:"image/image4.jpg",
    name:"Flax Flower",
    details:"The seeds have been used for food, food supplements and oil.The fibers of this plant have been used to make rope and paper.Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals."

},
{
    id:5,
    imageurl:"image/image5.jpg",
    name:"Lotus",
    details:"Lotus is a plant that grows rivers. The flowers, seeds, leaves, and parts of the  stem used for medicine.Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals.flowers that grows rivers"

},
{
    id:6,
    imageurl:"image/image6.jpg",
    name:"Morning Glory",
    details:"These blooms are not only pleasing to the eye, but they also attract butterflies.They're fantastic in pots with trellises.Distinguishing characteristics of the flowers called daisy include a central, flowers by a ring of raylike petals."

}
    ];

//section

var cardSection=document.getElementById("card-section");

var container=document.createElement("div");
container.classList.add("container");
cardSection.appendChild(container);

//row section

var row=document.createElement("div");
row.classList.add("card-row");
container.appendChild(row);

//col section

data.forEach(function(e){

var col=document.createElement("div");
col.classList.add("card-col");
row.appendChild(col);

//card section 

var card=document.createElement("div");
card.classList.add("card-card");
col.appendChild(card);

var image=document.createElement("img");
card.appendChild(image);
image.setAttribute("src",e.imageurl);

var title=document.createElement("h1")
card.appendChild(title);
title.innerHTML=e.name;

var para=document.createElement("p");
card.appendChild(para);
para.innerHTML=e.details;


})

