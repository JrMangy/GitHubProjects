const slideshow = {
    photoList : ['New York','Los Angeles','Tokyo','Paris','Rio'],
    currentPhotoIndex : 2,
    nextPhoto : function(){
        if(this.currentPhotoIndex<this.photoList.length - 1){
            this.currentPhotoIndex ++;            
            console.log(this.photoList[this.currentPhotoIndex]);
        }else{
            console.log('End of SlideShow');
        }
    },
    prevPhoto : function(){
        if(this.currentPhotoIndex>=0){
            this.currentPhotoIndex--
            console.log(this.photoList[this.currentPhotoIndex]);
        }else{
            console.log("Beginning of SlideShow");
        }
    },
    getCurrentPhoto : function(){
        console.log(this.photoList[this.currentPhotoIndex]);
    },
}
slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.getCurrentPhoto();
slideshow.nextPhoto(3);
slideshow.prevPhoto();
slideshow.prevPhoto();
/*
function(){
    if (FIGURETHISPARTOUT<currentPhotoList.length){
        console.log(slideshow)
    }
}
*/