$(() => {

    if ($(document).width() > 500){
        $('#1').on('mouseover',() => {
            $('.images').css('display','none')
            $('.images').eq(0).css('display','block')
            
        })
        $('#2').on('mouseover',() => {
            $('.images').css('display','none')
            $('.images').eq(1).css('display','block')
            
        })
        $('#3').on('mouseover',() => {
            $('.images').css('display','none')
            $('.images').eq(2).css('display','block')
            
        })
        $('#4').on('mouseover',() => {
            $('.images').css('display','none')
            $('.images').eq(3).css('display','block')
            
        })
        $('#5').on('mouseover',() => {
            $('.images').css('display','none')
            $('.images').eq(4).css('display','block')
            
        })
    }else{
        let currentImgIndex = 0
        let numOfImages = $('#about-me-images').children().length - 1
        $('#about-me-images').on('click',() => {
            $('#about-me-images').children().eq(currentImgIndex).css('display','none')
            if(currentImgIndex < numOfImages) {
                currentImgIndex ++
            }else {
                currentImgIndex = 0
            }
            $('#about-me-images').children().eq(currentImgIndex).css('display','block')
        })
    }




































        
        
        
})
    
    