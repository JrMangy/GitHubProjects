const slideshow = {
    photoList : ['New York','Los Angeles','Tokyo','Paris','Rio'],
    currentPhotoIndex : 0,
    nextPhoto : function(){
        if(this.currentPhotoIndex<this.photoList.length - 1){
            this.currentPhotoIndex ++;            
            console.log(this.photoList[this.currentPhotoIndex]);
        }else{
            console.log('End of SlideShow');
            this.pause();
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
    playInterval : null,
    play : function(){
        this.getCurrentPhoto();
        this.playInterval = setInterval(this.nextPhoto.bind(this), 2000);
    },
    pause : function(){
        clearInterval(this.playInterval);
    }
}

slideshow.play();
/*function setTimer(){
    if (timer) {
       // stop 
       clearInterval( timer );
       timer=null;
    }
    else {
       timer = setInterval("slide()",1000);
    }
*/
