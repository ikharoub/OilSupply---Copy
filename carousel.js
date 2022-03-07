const productCarousel = document.querySelector('.product-carousel-container');
const carouselNav = document.querySelector('.carousel-Nav');

let productSlide = document.createElement('div');

const productsSlider = [
    {title:'Slip On Flange', category:'Carbon steel', image:'./assets/products/carouselProducts/slipOnFlange.png',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {title:'Bosster System', category:'Stanless steel', image:'./assets/products/carouselProducts/Bosster-System.png',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {title:'Ultrahigh Purity Products', category:'Carbon steel', image:'./assets/products/carouselProducts/Ultrahigh-purity-products.png',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {title:'Process products', category:'Carbon steel', image:'./assets/products/carouselProducts/Process-products.png',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
    {title:'Equal Tee', category:'Stanless steel', image:'./assets/products/carouselProducts/equalTee.png',desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s'},
]
let counter = 0;

const drawSlide = (slide)=>{
    productCarousel.innerHTML = "";

    const currentSlideNav = document.querySelectorAll('.product-carousel-Nav');

    productSlide.className = 'product-carousel-item';
    productSlide.innerHTML = `<div class="product-carousel-desc" data-aos="zoom-in-down">
        <h4 class="product-item-category">
           ${slide.category}
        </h4>
        <h2 class="product-item-title"  data-aos="zoom-in" >
            ${slide.title}
        </h2>
        <div class="product-item-desc" >
            ${slide.desc}
        </div>
        <a class="explore-products" href="./products.html" >
                    Explore More
                    &#10230;
        </a>
    </div>
    <div class="product-carousel-img" data-aos="fade-left">
        <img src=${slide.image} alt="slipOnFlange" class="product-image">    
    </div>`
    
    productCarousel.appendChild(productSlide);
    currentSlideNav.forEach((elem)=>{
        elem.classList.remove('current')
    });
    currentSlideNav[counter].classList.add('current');
}

const automatedNext = () => {

    if(counter + 1 === productsSlider.length ){
        counter = 0;
    }else{
        counter = counter + 1;
    } 

    drawSlide(productsSlider[counter]);
}



const DrawNav = () =>{
    let Nav = []
    productsSlider.forEach((slide, indx)=>{
        Nav.push(`<div class="product-carousel-Nav" onclick="drawSelectedSlide(${indx})" ></div>`)
    })
    
    carouselNav.innerHTML = Nav.join('');
}

DrawNav();
drawSlide(productsSlider[counter]);

let productsAnimation = setInterval(automatedNext,3500);


function drawSelectedSlide(id){
    counter = Number(id);
    drawSlide(productsSlider[counter]);
    clearInterval(productsAnimation);
    productsAnimation = setInterval(automatedNext,3500);
}
