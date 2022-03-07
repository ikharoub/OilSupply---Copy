const filters = document.querySelectorAll('.product-filter-item');
const gallery = document.querySelector('.products-gallery-list');
const galleryNav = document.querySelector('.products__Nav');
const galleryPrev = document.querySelector('.products__button--prev');
const galleryNext = document.querySelector('.products__button--next');

const productCategoryMenu = document.querySelectorAll('.dropDown-menu .product-type');


const hamburgerMenu = document.querySelector('.mobile-hamburger');
const mobileMenu = document.querySelector('.mobile-Menu');
const menuLinks = document.querySelectorAll('.mobile-Menu .nav-item');

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

const productsList = [
    {
        id: 1,
        name: 'Bosster System',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Bosster-System.jpg'
    },
    {
        id: 2,
        name: 'Process products',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Process-products.jpg'
    },
    {
        id: 3,
        name: 'Sampling system',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Sampling-system.jpg'
    },
    {
        id: 4,
        name: 'SS Insturment process products',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/SSInsturment-process-products.jpg'
    },
    {
        id: 5,
        name: 'Ultra high pressure',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Ultra-high-pressure.jpg'
    },
    {
        id: 6,
        name: 'Ultrahigh purity products',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Ultrahigh-purity-products.jpg'
    },
    {
        id: 7,
        name: 'Vacum Products',
        type: types.stanilessSteel,
        category: "Staniless Steel",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/Staniless/Vacum-Products.jpg'
    },
    {
        id: 8,
        name: '180 Degree Elbow',
        type: types.elbows,
        category: "Elbows",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/elbows/180DegreeElbow.jpg',
    },
    {
        id: 9,
        name: 'Long Radius Elbows',
        type: types.elbows,
        category: "Elbows",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/elbows/longRadiusElbows.jpg',
    },
    {
        id: 10,
        name: 'Short Radius Elbows',
        type: types.elbows,
        category: "Elbows",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/elbows/shortRadiusElbows.jpg',
    },
    {
        id: 11,
        name: 'Blind Flanges',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/blindFlanges.jpg',
    },
    {
        id: 12,
        name: 'Flat Flanges',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/flatFlanges.jpg',
    },
    {
        id: 13,
        name: 'Orifice Flanges',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/orificeFlanges.jpg',
    },
    {
        id: 14,
        name: 'Ring Type Joint',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/ringTypeJoint.jpg',
    },
    {
        id: 15,
        name: 'Slip On Flange',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/slipOnFlange.jpg',
    },
    {
        id: 16,
        name: 'Socket Weld',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/socketWeld.jpg',
    },
    {
        id: 17,
        name: 'Square Flanges',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/squareFlanges.jpg',
    },
    {
        id: 18,
        name: 'Threaded Flanges',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/threadedFlanges.jpg',
    },
    {
        id: 19,
        name: 'Weld Neck Flange',
        type: types.flanges,
        category: "Flanges",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/flanges/weldNeckFlange.jpg',
    },
    {
        id: 20,
        name: 'Butt Weld Hammer Union',
        type: types.hammerUnions,
        category: "Hammer Unions",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/hammerUnioins/buttWeldHammerUnion.jpg',
    },
    {
        id: 21,
        name: 'Threaded Hammer Union',
        type: types.hammerUnions,
        category: "Hammer Unions",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/hammerUnioins/threadedHammerUnion.jpg',
    },
    {
        id: 22,
        name: 'GB Lubricants',
        type: types.lubricants,
        category: "Lubricants",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/lubricants/GBLubricants.jpg',
    },
    {
        id: 23,
        name: 'Connentric Reducer',
        type: types.fittings,
        category: "Fittings",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/otherFittings/connentricReducer.jpg',
    },
    {
        id: 24,
        name: 'Eccentric Reducer',
        type: types.fittings,
        category: "Fittings",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/otherFittings/eccentricReducer.jpg',
    },
    {
        id: 25,
        name: 'End Cap',
        type: types.fittings,
        category: "Fittings",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/otherFittings/endCap.jpg',
    },
    {
        id: 26,
        name: 'Equal Tee',
        type: types.fittings,
        category: "Fittings",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/otherFittings/equalTee.jpg',
    },
    {
        id: 27,
        name: 'Reducing Tees',
        type: types.fittings,
        category: "Fittings",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/otherFittings/reducingTees.jpg',
    },
    {
        id: 28,
        name: 'Pipes',
        type: types.pipes,
        category: "Pipes",
        description: 'Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
        img: './assets/products/pipes/Pipes.jpg',
    },
]

var filtertype = 'all'
var newList;

const buildPreview = (product) => {
    return `  <div class="product-preview">
        <div class="product-img">
            <img src= ${product.img} alt=${product.name}>
        </div>
        <div class="product__info">
        <h5 class="product__info-category">
          ${product.category}
        </h5>
        <h3 class="product__info-title">
          ${product.name}
        </h3>
        </div>
    </div>`
}

let productWidth;

var totalProducts = 6;
var screenLimit = 6;
var current = 0;
var counterGallery = 0;


const buildIndicator = (num) => {
    return `<li id="set-${num}" class="nav__indicator"></li>`
}

const setActiveIndicator = (number) => {
    const indicators = document.querySelectorAll('.nav__indicator');
    indicators.forEach((ind, indx)=>{
        indx === number ? 
        ind.classList.add('active') 
        : ind.classList.remove('active');
    })
}

const moveGallery = ( nexElemLeft, current ,move= true) => {

    if(move){
        gallery.style.transform = `translateX(-${  nexElemLeft }px )`;
    }
    var activeIndicator = current >= totalProducts-screenLimit ?
    Math.ceil(current/screenLimit) 
    :Math.floor(current/screenLimit);
    setActiveIndicator(activeIndicator);
}

//shows active filter
const changeActiveFilter = (e) => {
    if(e.target.hasAttribute("data-type")){
        filtertype = e.target.getAttribute("data-type");
        filters.forEach(
            (filter) => {
                if(filter === e.target){
                    filter.setAttribute("data-state", "active")
                }else{
                    filter.setAttribute("data-state", "")
                }
            }
        )
    
        changeGallery(filtertype);
    }
}

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
const moveNext= () => {
    current = (current + screenLimit > totalProducts ? 0 : current + screenLimit)
    var targetElemLeft = gallery.children[current].offsetLeft;
    moveGallery(targetElemLeft, current);
}

galleryNext.addEventListener('click', moveNext );

const movePrev= () => {
    current = (current - screenLimit < 0 ? totalProducts - screenLimit : current - screenLimit);
    var targetElemLeft = gallery.children[current].offsetLeft;
    moveGallery(targetElemLeft, current);
}


const setIndicatorListeners = () => {
    const indicators = document.querySelectorAll('.nav__indicator');
    indicators.forEach((indc) => {
        indc.addEventListener('click', (indc) => {
            var indcNum = indc.target.id.split(/[A-Za-z\\(\-)]/gi).join("");
            current = indcNum * screenLimit > totalProducts-screenLimit ?
                        totalProducts - screenLimit
                        : indcNum * screenLimit
            var nexElemLeft = gallery.children[current].offsetLeft;
            moveGallery(nexElemLeft, current);
        })
    })
}

const drawProductIndicator = (totalNum) => {
    var indicatorList = [];
    var indicatorNumber = Math.ceil(totalNum/screenLimit);
    for (let i = 0; i < indicatorNumber; i++) {
        indicatorList.push(buildIndicator(i));
    }

    var newIndicator =  indicatorList.join(' ');
    galleryNav.innerHTML = newIndicator;
    setActiveIndicator(0);
    setIndicatorListeners();
}


const productsGalleryDim = ()=>{
    // rootFS = Number( rootFS.split(/[A-Za-z\\(\-)]/gi).join(""))
    var galleryCW = gallery.getBoundingClientRect().width;
    ///To make it responsive to screen size 
    ///3(gutter)*(nOfGutter)*(rootSize) 
    if( galleryCW >= 900){
        productWidth = (galleryCW - 3*5*10)/6 
        screenLimit = 6;
    }else if( galleryCW >= 800){
        productWidth = (galleryCW - 3*5*10)/5 
        screenLimit = 5;
    }else if(galleryCW >= 700){
        productWidth = (galleryCW - 3*3*10)/4 
        screenLimit = 4;
    }else if(galleryCW >= 500){
        productWidth = (galleryCW - 3*2*10)/3 
        screenLimit = 3;
    }else if(galleryCW >= 300){
        productWidth = (galleryCW - 3*1*10)/2 
        screenLimit = 2;
    }else if(galleryCW < 300){
        productWidth = (galleryCW - 3*0*10)/1
        screenLimit = 1;
    }
    gallery.style.setProperty('--width', `${productWidth }px` );
}

// show filtered products 
const changeGallery = (newtype) => {
    productsGalleryDim();

    gallery.innerHTML = '';
    galleryNav.innerHTML = '';

    moveGallery(0);
    if(newtype === "all"){
        newList = [...productsList];
    }else {
        newList = productsList.filter((product)=>{
            return product.type === newtype
        })
    }
   
    ////draw product gallery
    var previewList = [];
    newList.forEach((product, indx)=>{
        previewList.push(buildPreview (product));
    })
       
    var newChild = previewList.join(' ');
    gallery.innerHTML = newChild;

    ////draw product indicator
    drawProductIndicator(newList.length);

    //set grid repeate property
    const n = previewList.length;
    gallery.style.setProperty('--total', n);
    totalProducts = n;
}

const resizeProductSection = () => {
    productsGalleryDim()
    drawProductIndicator(totalProducts);
}

const setDefaultSelection = () => {
    productsGalleryDim();
    document.querySelector('.product-filter-item[data-type="all"]').click();
}

//Initialize products data on load
window.addEventListener('load', () => {
    if(window.location.hash){
        productsGalleryDim();
        let urlHashs = window.location.hash.split('#');
        document.querySelector(`.product-filter-item[data-type=${urlHashs[urlHashs.length-1]}]`).click();
    }else{
        Promise.resolve().then(setDefaultSelection);
    }
});

window.addEventListener("hashchange",()=>{
    let urlHashs = window.location.hash.split('#');
    document.querySelector(`.product-filter-item[data-type=${urlHashs[urlHashs.length-1]}]`).click();
}, false);

//Listen on screen Resize to adjust gallery width
window.addEventListener("resize", resizeProductSection);

//Active Filter
filters.forEach( (filter) => {
    filter.addEventListener('click', (e)=>changeActiveFilter(e))
    }
)

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

