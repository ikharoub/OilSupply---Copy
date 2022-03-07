// const filters = document.querySelectorAll('.product-filter-item');
// const gallery = document.querySelector('.products-gallery-list');
// const galleryNav = document.querySelector('.products__Nav');
// const galleryPrev = document.querySelector('.products__button--prev');
// const galleryNext = document.querySelector('.products__button--next');

const hamburgerMenu = document.querySelector('.mobile-hamburger');
const mobileMenu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.mobile-Menu .nav-item');

const navLinks = document.querySelectorAll('.layout-header .nav-item');
const sections = document.querySelectorAll('section');

const model = document.querySelector('.certificate-Model');
const certificateBtn = document.querySelectorAll('.certificate_item');

const productSelected = document.querySelector('.nav-item[data-id="Products"] .overlay-navItem');

const types = {
    stanilessSteel : 'stanilessSteel',
    // carbonSteel : 'carbonSteel',
    flanges : 'flanges',
    elbows : 'elbows',
    hammerUnions : 'hammerUnions',
    fittings : 'fittings',
    pipes : 'pipes',
    lubricants  : 'lubricants',
}

const certificatesList = {
    'ISO-9001-215' : {
        name: 'ISO 9001 215',
        image: './assets/QHSE/ISO-9001-215.jpg'
    },
    'ISO-14001-215' : {
        name: 'ISO 14001 215',
        image: './assets/QHSE/ISO-14001-215.jpg'
    },
    'ISO-45001-2018' : {
        name: 'ISO 45001 2018',
        image: './assets/QHSE/ISO-45001-2018.jpg'
    },
}
const buildModel = (certificate) => {
    return  `
    <div class="certificate-container">
        <div class="certificate-header">
        <div class="certificate-title">${certificate.name}</div>
        <div class="model-close">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"/></svg>								
        </div>
        </div>
        <div class="certificate-Info">
            <img class="certificate-image" src=${certificate.image}>
        </div>
    </div>
    `
}
certificateBtn.forEach((certBtn)=>{
    certBtn.addEventListener('click', (btn)=>{
       let modelContent = buildModel(certificatesList[btn.target.id]);
       model.innerHTML = modelContent;
       model.classList.add('show');
        const modelClose = document.querySelector('.model-close');
        modelClose.addEventListener('click', (e)=>{
            model.classList.remove('show');
            model.innerHTML = "";
        })
    })
})

model.addEventListener('click', (e)=>{
    model.classList.remove('show');
    model.innerHTML = "";
})



// const productsList = [
//     {
//         id: 1,
//         name: 'Bosster System',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Bosster-System.jpg'
//     },
//     {
//         id: 2,
//         name: 'Process products',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Process-products.jpg'
//     },
//     {
//         id: 3,
//         name: 'Sampling system',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Sampling-system.jpg'
//     },
//     {
//         id: 4,
//         name: 'SS Insturment process products',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/SSInsturment-process-products.jpg'
//     },
//     {
//         id: 5,
//         name: 'Ultra high pressure',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Ultra-high-pressure.jpg'
//     },
//     {
//         id: 6,
//         name: 'Ultrahigh purity products',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Ultrahigh-purity-products.jpg'
//     },
//     {
//         id: 7,
//         name: 'Vacum Products',
//         type: types.stanilessSteel,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/Staniless/Vacum-Products.jpg'
//     },
//     {
//         id: 8,
//         name: '180 Degree Elbow',
//         type: types.elbows,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/elbows/180DegreeElbow.jpg',
//     },
//     {
//         id: 9,
//         name: 'Long Radius Elbows',
//         type: types.elbows,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/elbows/longRadiusElbows.jpg',
//     },
//     {
//         id: 10,
//         name: 'Short Radius Elbows',
//         type: types.elbows,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/elbows/shortRadiusElbows.jpg',
//     },
//     {
//         id: 11,
//         name: 'Blind Flanges',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/blindFlanges.jpg',
//     },
//     {
//         id: 12,
//         name: 'Flat Flanges',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/flatFlanges.jpg',
//     },
//     {
//         id: 13,
//         name: 'Orifice Flanges',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/orificeFlanges.jpg',
//     },
//     {
//         id: 14,
//         name: 'Ring Type Joint',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/ringTypeJoint.jpg',
//     },
//     {
//         id: 15,
//         name: 'Slip On Flange',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/slipOnFlange.jpg',
//     },
//     {
//         id: 16,
//         name: 'Socket Weld',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/socketWeld.jpg',
//     },
//     {
//         id: 17,
//         name: 'Square Flanges',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/squareFlanges.jpg',
//     },
//     {
//         id: 18,
//         name: 'Threaded Flanges',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/threadedFlanges.jpg',
//     },
//     {
//         id: 19,
//         name: 'Weld Neck Flange',
//         type: types.flanges,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/flanges/weldNeckFlange.jpg',
//     },
//     {
//         id: 20,
//         name: 'Butt Weld Hammer Union',
//         type: types.hammerUnions,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/hammerUnioins/buttWeldHammerUnion.jpg',
//     },
//     {
//         id: 21,
//         name: 'Threaded Hammer Union',
//         type: types.hammerUnions,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/hammerUnioins/threadedHammerUnion.jpg',
//     },
//     {
//         id: 22,
//         name: 'GB Lubricants',
//         type: types.lubricants,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/lubricants/GBLubricants.jpg',
//     },
//     {
//         id: 23,
//         name: 'Connentric Reducer',
//         type: types.fittings,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/otherFittings/connentricReducer.jpg',
//     },
//     {
//         id: 24,
//         name: 'Eccentric Reducer',
//         type: types.fittings,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/otherFittings/eccentricReducer.jpg',
//     },
//     {
//         id: 25,
//         name: 'End Cap',
//         type: types.fittings,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/otherFittings/endCap.jpg',
//     },
//     {
//         id: 26,
//         name: 'Equal Tee',
//         type: types.fittings,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/otherFittings/equalTee.jpg',
//     },
//     {
//         id: 27,
//         name: 'Reducing Tees',
//         type: types.fittings,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/otherFittings/reducingTees.jpg',
//     },
//     {
//         id: 28,
//         name: 'Pipes',
//         type: types.pipes,
//         description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         img: './assets/products/pipes/Pipes.jpg',
//     },
// ]

// var filtertype = 'all'
// var newList;

// const buildPreview = (product) => {
//     return `  <div class="product-preview">
//         <div class="product-base"></div>
//         <div class="product-img">
//             <img src= ${product.img} alt=${product.name}>
//         </div>
//         <div class="product-border">
//         <div class="product-header-info">
//           <div class="product-outterName">${product.name}</div>
//         </div>
//         </div>
//     </div>`
// }

// {
// return `  <div class="product-preview">
// <div class="product-base"></div>
// <div class="product-img">
//     <img src= ${product.img} alt=${product.name}>
// </div>
// <div class="product-overlay">
//     <div class="product-name">${product.name}</div>
//     <div class="product-description">
//         ${product.description}
//     </div>
// </div>
// <div class="product-border">
// <div class="product-outterName">${product.name}</div>
// </div>
// </div>`
// }


// const buildIndicator = (num) => {
//     return `<li id="set-${num}" class="nav__indicator"></li>`
// }

// const setActiveIndicator = (number) => {
//     const indicators = document.querySelectorAll('.nav__indicator');
//     indicators.forEach((ind, indx)=>{
//         indx === number ? 
//         ind.classList.add('active') 
//         : ind.classList.remove('active');
//     })
// }

// let productWidth;

// var totalProducts = 6;
// var screenLimit = 6;
// var current = 0;
// var counterGallery = 0;

// const moveGallery = ( nexElemLeft, current ,move= true) => {

//     if(move){
//         gallery.style.transform = `translateX(-${  nexElemLeft }px )`;
//     }
//     var activeIndicator = current >= totalProducts-screenLimit ?
//     Math.ceil(current/screenLimit) 
//     :Math.floor(current/screenLimit);
//     setActiveIndicator(activeIndicator);
// }

// const automatedGallery = () => {
//     var move = false;
//     if(current < totalProducts - screenLimit + 2){
//         current += 1 
//     }else{
//         current =  0;
//     }
//     if(current >= totalProducts-screenLimit) move = false;
//         var nexElemLeft = gallery.children[current].offsetLeft;
//         moveGallery(nexElemLeft, current, move);

// }

// const productsAnimation = setInterval(automatedGallery,2500);

// const moveNext= () => {
//     current = (current + screenLimit > totalProducts ? 0 : current + screenLimit)
//     var targetElemLeft = gallery.children[current].offsetLeft;
//     moveGallery(targetElemLeft, current);
// }

// galleryNext.addEventListener('click', moveNext );

// const movePrev= () => {
//     current = (current - screenLimit < 0 ? totalProducts - screenLimit : current - screenLimit);
//     var targetElemLeft = gallery.children[current].offsetLeft;
//     moveGallery(targetElemLeft, current);
// }

// const setIndicatorListeners = () => {
//     const indicators = document.querySelectorAll('.nav__indicator');
//     indicators.forEach((indc) => {
//         indc.addEventListener('click', (indc) => {
//             var indcNum = indc.target.id.split(/[A-Za-z\\(\-)]/gi).join("");
//             current = indcNum * screenLimit > totalProducts-screenLimit ?
//                         totalProducts - screenLimit
//                         : indcNum * screenLimit
//             var nexElemLeft = gallery.children[current].offsetLeft;
//             moveGallery(nexElemLeft, current);
//         })
//     })
// }

// const drawProductIndicator = (totalNum) => {
//     var indicatorList = [];
//     var indicatorNumber = Math.ceil(totalNum/screenLimit);
//     for (let i = 0; i < indicatorNumber; i++) {
//         indicatorList.push(buildIndicator(i));
//     }

//     var newIndicator =  indicatorList.join(' ');
//     galleryNav.innerHTML = newIndicator;
//     setActiveIndicator(0);
//     setIndicatorListeners();
// }

// show filtered products 
// const changeGallery = (newtype) => {
//     productsGalleryDim();

//     gallery.innerHTML = '';
//     galleryNav.innerHTML = '';

//     moveGallery(0);
//     if(newtype === "all"){
//         newList = [...productsList];
//     }else {
//         newList = productsList.filter((product)=>{
//             return product.type === newtype
//         })
//     }
   
//     ////draw product gallery
//     var previewList = [];
//     newList.forEach((product, indx)=>{
//         previewList.push(buildPreview (product));
//     })
       
//     var newChild = previewList.join(' ');
//     gallery.innerHTML = newChild;

//     ////draw product indicator
//     drawProductIndicator(newList.length);

//     //set grid repeate property
//     const n = previewList.length;
//     gallery.style.setProperty('--total', n);
//     totalProducts = n;
// }

// const productsGalleryDim = ()=>{
//     rootFS = Number( rootFS.split(/[A-Za-z\\(\-)]/gi).join(""))
//     var galleryCW = gallery.getBoundingClientRect().width;
//     ///To make it responsive to screen size 
//     ///3(gutter)*(nOfGutter)*(rootSize) 
//     if( galleryCW >= 900){
//         productWidth = (galleryCW - 3*5*10)/6 
//         screenLimit = 6;
//     }else if(galleryCW >= 700){
//         productWidth = (galleryCW - 3*3*10)/4 
//         screenLimit = 4;
//     }else if(galleryCW >= 500){
//         productWidth = (galleryCW - 3*2*10)/3 
//         screenLimit = 3;
//     }else if(galleryCW >= 300){
//         productWidth = (galleryCW - 3*1*10)/2 
//         screenLimit = 2;
//     }else if(galleryCW < 300){
//         productWidth = (galleryCW - 3*0*10)/1
//         screenLimit = 1;
//     }
//     gallery.style.setProperty('--width', `${productWidth }px` );
// }

// //shows active filter
// const changeActiveFilter = (e) => {
//     if(e.target.hasAttribute("data-type")){
//         filtertype = e.target.getAttribute("data-type");
//         filters.forEach(
//             (filter) => {
//                 if(filter === e.target){
//                     filter.setAttribute("data-state", "active")
//                 }else{
//                     filter.setAttribute("data-state", "")
//                 }
//             }
//         )
    
//         changeGallery(filtertype);
//     }
// }
productSelected.addEventListener('click',()=>{
    document.querySelector(`#Products`).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
})
// productCategoryMenu.forEach((ctgry)=>{
//     ctgry.addEventListener('click',(e)=>{
//         document.querySelector(`#Products`).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//         if(e.target.hasAttribute("data-type")){
//             filtertype = e.target.getAttribute("data-type");
//             filters.forEach(
//                 (filter) => {
//                     if(filter.dataset.type === e.target.dataset.type){
//                         filter.setAttribute("data-state", "active")
//                     }else{
//                         filter.setAttribute("data-state", "")
//                     }
//                 }
//             )
        
//             changeGallery(filtertype);
//         }
//     })
// })

// const resizeProductSection = () => {
//     productsGalleryDim()
//     drawProductIndicator(totalProducts);
// }

// const setDefaultSelection = () => {
//     productsGalleryDim();
//     document.querySelector('.product-filter-item[data-type="all"]').click();
// }

// //Initialize products data on load
// window.addEventListener('load', () => {
//     Promise.resolve().then(setDefaultSelection);
// });

// //Listen on screen Resize to adjust gallery width
// window.addEventListener("resize", resizeProductSection);

// //Active Filter
// filters.forEach( (filter) => {
//     filter.addEventListener('click', (e)=>changeActiveFilter(e))
//     }
// )

////Hamburger Menu
const closeMenu = () => {
    mobileMenu.classList.remove('openMenu');
    hamburgerMenu.classList.remove('close');
    hamburgerMenu.addEventListener('click',()=> openMenu())
}

const openMenu = () => {
    mobileMenu.classList.add('openMenu');
    hamburgerMenu.classList.add('close');
    listenToClose();
}


hamburgerMenu.addEventListener('click',()=> openMenu())

const listenToClose=()=>{
    hamburgerMenu.removeEventListener("click", ()=> openMenu());
    const menuCloseBtn = document.querySelector('.close');
    menuCloseBtn.addEventListener('click', ()=> closeMenu())
}
menuLinks.forEach(
    (elem) => elem.addEventListener('click', ()=>closeMenu())
)



/////Active Link while scrolling

window.addEventListener("scroll", event => {
    let fromTop = Math.round(window.scrollY);
  
    sections.forEach(section => {
      if (fromTop >= section.offsetTop -200 &&
        fromTop < section.offsetTop + section.getBoundingClientRect().height
      ) {
          navLinks.forEach((nav)=>{
             var navTarget = nav.getAttribute('data-id')
              if(navTarget === section.id ){
                nav.classList.add("current");
              }else{
                nav.classList.remove("current");
              }
          })
      } 
    });
  });

//   const smoothScroll = (link) =>{
//     console.log(link.id)
//     document.querySelector(`#${link.getAttribute('data-id')}`).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//   }

//   links.forEach((link)=>{
//       link.addEventListener('click', (link)=>smoothScroll(link.path[1]))
//   })



/////////////////
// const automatedGallery = ()=>{
//     if (gallery.scrollLeft + gallery.getBoundingClientRect().width  < gallery.scrollWidth){
//         gallery.scrollTo({ top: 0,
//             left: 270,
//             behavior: 'smooth',
//             duration: 300
//     });
//         // console.log(gallery.scrollLeft + 180,  Math.round(gallery.getBoundingClientRect().width + gallery.scrollLeft))
//     }else{
//         gallery.scrollBy( {top: 0,
//             left: 0,
//             behavior: 'easeInOutQuint' });
//     }
// }
// // gallery.scrollLeft + 180 +30
// const startScroll = setInterval(automatedGallery,3500);

// const stopScroll = () => {
//     console.log("clear")
//     clearInterval(startScroll);
//     setTimeout(reSetScroll ,3500)
// }

// const reSetScroll = () => setInterval(automatedGallery,3500);

// const setHoverListeners = () =>{
//     const previewElements = document.querySelectorAll('.product-preview')
//     previewElements.forEach((elem) => {
//         elem.addEventListener(
//             ('mouseover'),()=>stopScroll());
      
//     })
// }

