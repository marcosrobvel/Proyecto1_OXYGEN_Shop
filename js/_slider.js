class Slider {
    constructor(slider) {
      this.sliderElement = document.getElementById(slider);
      this.images = this.sliderElement.getElementsByTagName('img');
      this.currentIndex = 0;
      this.totalImages = this.images.length;
  
      this.initSlider();
    }
  
    initSlider() {
      this.addNavigationButtons();
      this.addDots();
      this.showImage(this.currentIndex);
      this.autoSlide();
    }
  
    addNavigationButtons() {
      const prevButton = document.createElement('button');
      prevButton.addEventListener('click', () => this.prevImage());
  
      const nextButton = document.createElement('button');
      nextButton.addEventListener('click', () => this.nextImage());
  
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('slider-buttons');
      buttonsDiv.appendChild(prevButton);
      buttonsDiv.appendChild(nextButton);
  
      this.sliderElement.appendChild(buttonsDiv);
    }
  
    addDots() {
      const dotsDiv = document.createElement('div');
      dotsDiv.classList.add('slider-dots');
  
      for (let i = 0; i < this.totalImages; i++) {
        const dot = document.createElement('span');
        dot.addEventListener('click', () => this.showImage(i));
        dotsDiv.appendChild(dot);
      }
  
      this.sliderElement.appendChild(dotsDiv);
      this.dots = dotsDiv.getElementsByTagName('span');
    }
  
    showImage(index) {
      for (let i = 0; i < this.totalImages; i++) {
        this.images[i].classList.remove('active');
        this.dots[i].classList.remove('active');
      }
  
      this.images[index].classList.add('active');
      this.dots[index].classList.add('active');
      this.currentIndex = index;
    }
  
    nextImage() {
      const nextIndex = (this.currentIndex + 1) % this.totalImages;
      this.showImage(nextIndex);
    }
  
    prevImage() {
      const prevIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
      this.showImage(prevIndex);
    }
  
    autoSlide() {
      setInterval(() => {
        this.nextImage();
      }, 5000); 
    }
}
  
  document.addEventListener('DOMContentLoaded', () => {
    new Slider('slider');
  });