function makeSlideshow(slidesID) {
            const slides = document.getElementById(slidesID)
            const slideWrapper = slides.querySelector('.slide_wrapper')
            const images = slideWrapper.querySelectorAll('.slide')

            const prevButton = slides.querySelector('.gallery_nav_prev')
            const nextButton = slides.querySelector('.gallery_nav_next')

            if (nextButton !== null) {
                nextButton.addEventListener('click', function(e) {
                    e.preventDefault()
                    nextSlide()
                })
            }

            if (prevButton !== null) {
                prevButton.addEventListener('click', function(e) {
                    e.preventDefault()
                    prevSlide()
                })
            }


            let index = 0

            function nextSlide() {
                index += 1
                if (index === images.length) {
                    index = 0
                }
                showSlide()
            }

            function prevSlide() {
                index -= 1
                if (index < 0) {
                    index = images.length - 1
                }
                showSlide()
            }


            function showSlide() {
                slideWrapper.style.transform = `translate3d(${index * -100}%, 0, 0)`
            }  

        }

makeSlideshow('gallery-1')
makeSlideshow('gallery-2')