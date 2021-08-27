
/* Price and price with discount */
let initialPrice = 69.99;
let priceWithDiscount = initialPrice;
let currentCoupon = undefined;

/* Coupons */

const coupons = [
    {name: 'GA20', discount: 20},
    {name: 'UWU50', discount: 50},
    {name: 'FREE100', discount: 100},
];

/* coupons ids */
const $couponCode  = document.getElementById('coupon-code');
const $couponError = document.getElementById('coupon-error');
const $couponName  = document.getElementById('coupon-name');
const $couponBtnApply   = document.getElementById('coupon-btn-apply');
const $couponBtnCancel  = document.getElementById('coupon-btn-cancel');
const $couponAppliedBox = document.getElementById('coupon-applied-box');

/* prices ids */
const $priceReal = document.getElementById('price-real');
const $priceDiscount = document.getElementById('price-discount');
const $discount = document.getElementById('discount');

const fixNumber = (number) => {
    return parseFloat(number).toFixed(2);
};

const showingPricesAndDiscount = () => {
    if (currentCoupon == undefined) {
        $priceDiscount.innerText = `${fixNumber(initialPrice)}$`;
        $discount.innerText = '';
        $priceReal.innerText = '';
    }
    else {
        priceWithDiscount = initialPrice*(100 - currentCoupon.discount)/100.0;
        $priceReal.innerText = `${fixNumber(initialPrice)}$`;
        if(priceWithDiscount <= 0) 
            $priceDiscount.innerText = 'GRATIS';    
        else
            $priceDiscount.innerText = `${fixNumber(priceWithDiscount)}$`
        $discount.innerText = `${fixNumber(currentCoupon.discount)}% off`
    }
}

const applyCoupon = (couponName) => {
    couponName = couponName.toUpperCase();
    const trycoupon = coupons.find(c => c.name == couponName);
    if (trycoupon == undefined){
        $couponError.hidden = false;
        $couponError.innerText = `El cupón: ${couponName} no es válido o ya ha sido aplicado.`;
    }
    else {
        $couponError.hidden = true;
        $couponAppliedBox.hidden = false;
        $couponName.innerText = couponName;

        currentCoupon = trycoupon;
        showingPricesAndDiscount();
    }
};

const removeCoupon = () => {
    $couponAppliedBox.hidden = true;
    $couponName.innerText = '';
    currentCoupon = undefined;
    showingPricesAndDiscount();
}
window.addEventListener('load', (event) => {
    $couponAppliedBox.hidden = true;
    $couponError.hidden = true;
    showingPricesAndDiscount();
});
$couponCode.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        applyCoupon($couponCode.value);
    }
});
$couponBtnApply.addEventListener('click', (event) => {
    applyCoupon($couponCode.value);
});

$couponBtnCancel.addEventListener('click', (event) => {
    removeCoupon();
});

/* copy the codes to clipboard */
$couponCopyList = document.getElementsByClassName('header--coupons-copy');
window.addEventListener('load', () => {
    Array.from($couponCopyList).forEach(element => {
        element.addEventListener('click', () => {
            $couponCode.value = element.innerText;
            $couponBtnApply.click();
        });
    });
});
