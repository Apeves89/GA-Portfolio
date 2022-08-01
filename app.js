$(() => {
    const $homeMessage = $('<h1>').attr('id','home-message').text('Welcome').appendTo('#home').hide().fadeIn(3000)

    if ($(window).width() > 600){
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
        
    }else{
        let currentImgIndex = 0
        let numOfImages = $('.about-me-images').children().length - 1
        $('.about-me-images').on('click',() => {
            $('.about-me-images').children().eq(currentImgIndex).css('display','none')
            if(currentImgIndex < numOfImages) {
                currentImgIndex ++
            }else {
                currentImgIndex = 0
            }
            $('.about-me-images').children().eq(currentImgIndex).css('display','block')
        })

        //Change about me section to be stacked
        $('<div>').addClass('break').insertAfter('.about-me-text')
        $('#about-me').css('flex-wrap','wrap')
        $('.about-me-text').css('width','60vw')
        $('.about-me-images').css('width','60vw')
        $('span').css('color','white')
        $('<p>').text('(Click empty box to view photos)').appendTo('.about-me-text')
    }

    $('#project-image-container').children().eq(0).css('display','block')
    $('#description').children().eq(0).css('display','block')

    let currentDescriptionIndex = 0
    let numOfDescription = $('#description').children().length - 1
    let currentProjectIndex = 0
    let numOfProjectImages = $('#project-image-container').children().length - 1
    $('.next').on('click',() => {
        $('#project-image-container').children().eq(currentProjectIndex).css('display','none')
        $('#description').children().eq(currentDescriptionIndex).css('display','none')

        if(currentProjectIndex < numOfProjectImages &&
            currentDescriptionIndex < numOfDescription) {
            currentProjectIndex ++
            currentDescriptionIndex++
           } else {
            currentProjectIndex = 0
            currentDescriptionIndex = 0
           }
        $('#project-image-container').children().eq(currentProjectIndex).css('display','block')
        $('#description').children().eq(currentDescriptionIndex).css('display','block')

    })
    $('.previous').on('click',() => {
        $('#project-image-container').children().eq(currentProjectIndex).css('display', 'none')
        $('#description').children().eq(currentDescriptionIndex).css('display','none')
        if(currentProjectIndex > 0 && 
            currentDescriptionIndex > 0) {
            currentProjectIndex --
            currentDescriptionIndex--
          } else {
            currentProjectIndex = numOfProjectImages
            currentDescriptionIndex = numOfDescription
          }
        $('#project-image-container').children().eq(currentProjectIndex).css('display', 'block')
        $('#description').children().eq(currentDescriptionIndex).css('display','block')

    })
    $('#r1').on('click', () => {
        $('.school').show('slow')
    })
    $('#r2').on('click', () => {
        $('.job').show('slow')
    })





}) 