//Nav scroll 
const header = document.querySelector('.js-header');

window.addEventListener('scroll', () => {
    if(window.scrollY > 0){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
});



//Menu
const nav = document.querySelector('.js-nav'),
openMenu = document.querySelector('.js-menu'),
closeMenu = document.querySelector('.js-closemenu');

openMenu.addEventListener('click', () => {
    nav.classList.add('active')
})
closeMenu.addEventListener('click', () => {
    nav.classList.remove('active')
})

function closeNav(){
    nav.classList.remove('active')
}

//Open Bag
const openBag = document.querySelector('.js-bag'),
closeBag = document.querySelector('.js-closebag'),
viewBag = document.querySelector('.js-viewbag');

openBag.addEventListener('click', () => {
    viewBag.classList.add('active')
})
closeBag.addEventListener('click', () => {
    viewBag.classList.remove('active')
})

//Products

const product = [
    {
        id: 0,
        image:'./images/coffee.png',
        title: 'Caramel Machiatto',
        rating: '4.9'
    },
    {
        id: 1,
        image:'./images/coffee.png',
        title: 'Caramel Ribbon',
        rating: '4.7'
    },
    {
        id: 2,
        image:'./images/coffee.png',
        title: 'Strawberry Funnel',
        rating: '4.5'
    }
    ,
    {
        id: 3,
        image:'./images/coffee.png',
        title: 'Caramel Frapuccino',
        rating: '4.5'
    },
    {
        id: 4,
        image:'./images/coffee.png',
        title: 'Caffe Misto',
        rating: '4.4'
    }
];

const product2 = [
    {
        id: 5,
        image:'./images/coffee.png',
        title: 'Brew Coffee',
        rating: '4.9'
    },
    {
        id: 6,
        image:'./images/coffee.png',
        title: 'Coffee Jelly',
        rating: '4.7'
    },
    {
        id: 7,
        image:'./images/coffee.png',
        title: 'Java Chip',
        rating: '4.5'
    }
    ,
    {
        id: 8,
        image:'./images/coffee.png',
        title: 'Espresso Macchiato',
        rating: '4.5'
    },
    {
        id: 9,
        image:'./images/coffee.png',
        title: 'Iced Cappuccino',
        rating: '4.4'
    }
];

const categories = [...new Set(product.map((item) =>
    {return item}))]
    let i = 0;
document.querySelector('.js-cards').innerHTML = categories.map((item) =>
{
    var {image, title, rating}= item
    return(
        `<div class="menu__wrapper__list__cards__card">
        <div class="menu__wrapper__list__cards__card__image">
            <img src=${image} alt="">
            <div class="menu__wrapper__list__cards__card__image__rating">
                <span>${rating}
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#FDCC0D" d="m12 18.275l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Z"/></svg>
                </span>
            </div>
        </div>
        <div class="menu__wrapper__list__cards__card__text">
            <div class="menu__wrapper__list__cards__card__text__name">
                <p>${title}</p>
            </div>` + "<button onclick= 'addtocart1("+(i++)+")'>Add to bag+</button>"+
        `</div>
    </div>`
    )
}).join('')

const categories2 = [...new Set(product2.map((item) =>
    {return item}))]
    let k = 0;
document.querySelector('.js-cards2').innerHTML = categories2.map((item) =>
{
    var {image, title, rating}= item
    return(
        `<div class="menu__wrapper__list__cards__card">
        <div class="menu__wrapper__list__cards__card__image">
            <img src=${image} alt="">
        </div>
        <div class="menu__wrapper__list__cards__card__text">
            <div class="menu__wrapper__list__cards__card__text__name">
                <p>${title}</p>
            </div>` + "<button onclick= 'addtocart2("+(k++)+")'>Add to bag+</button>"+
        `</div>
    </div>`
    )
}).join('')

var cart = [];

function addtocart1(a){
    cart.push({...categories[a]});
    displaycart();
}

function addtocart2(a){
    cart.push({...categories2[a]});
    displaycart();
}


function deleteEl(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(a){
    let j = 0;

    document.querySelector('.count').innerHTML = cart.length;
    if(cart.length==0){
        document.querySelector('.js-item').innerHTML = "<p class='empty'>Your bag is empty.</p>";
    }else{
        document.querySelector(".js-item").innerHTML = cart.map((items) =>{
            var {image, title} = items;
            return `<div class="header__wrapper__items__container__item">
                    <div class="header__wrapper__items__container__item__image">
                        <img src=${image} alt="">
                    </div>
                    <div class="header__wrapper__items__container__item__content">
                        <p>${title}</p>` +
                        "<div class='header__wrapper__items__container__item__content__delete' onclick='deleteEl("+(j++)+")'><svg xmlns='http://www.w3.org/2000/svg' style='vertical-align: -0.125em;' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'><path fill='currentColor' d='M7 21q-.825 0-1.412-.587Q5 19.825 5 19V6q-.425 0-.713-.287Q4 5.425 4 5t.287-.713Q4.575 4 5 4h4q0-.425.288-.713Q9.575 3 10 3h4q.425 0 .713.287Q15 3.575 15 4h4q.425 0 .712.287Q20 4.575 20 5t-.288.713Q19.425 6 19 6v13q0 .825-.587 1.413Q17.825 21 17 21Zm2-5q0 .425.288.712Q9.575 17 10 17t.713-.288Q11 16.425 11 16V9q0-.425-.287-.713Q10.425 8 10 8t-.712.287Q9 8.575 9 9Zm4 0q0 .425.288.712q.287.288.712.288t.713-.288Q15 16.425 15 16V9q0-.425-.287-.713Q14.425 8 14 8t-.712.287Q13 8.575 13 9Z'/></svg></div>" +
                    `</div>
                    </div>`
        }).join('')
    }
}