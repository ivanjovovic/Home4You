var images = ['img1.jpg','img2.jpg','img3.jpg','img4.jpg','img5.jpg','img6.jpg'];

var i =0;

function slideShow() {

    document.getElementById("image").src=images[i];



    if(i<images.length-1){

        i++;

    }

    else {

        i=0;

    }

    setTimeout("slideShow()" , 2000);

}

window.onload = slideShow;