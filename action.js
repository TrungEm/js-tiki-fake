const modal = document.querySelector(".js-modal");
const modalContent = document.querySelector(".js-modal-content");
const modalUser = document.querySelector(".js-user-style__item");
const imgClose = document.querySelector(".js-img-close");
const arrowRight = document.querySelector(".arrow-right");
const arrowLeft = document.querySelector(".arrow-left");
const sliderProduct = document.querySelector(".slider");
const bannerListImg = document.querySelector(".banner__list-img");
const webimgSize = document.querySelector(".webimg__size1:first-child");
const iconRightSlider = document.querySelector(".icon-right");
const iconLeftSlider = document.querySelector(".icon-left");
const quantityList = document.querySelectorAll(".quantity-item");
const eventFlash = document.querySelector(".style__Flash");
const getHours = document.querySelector("#hours");
const getMinute = document.querySelector("#minute");
const getSecond = document.querySelector("#second");
const getListProduct = document.querySelector(".container2__product-list");
const productWrap = document.querySelector(".container2__index");
const arrowLeftWrap = document.querySelector(".icon2__bgr-left");
const arrowRighttWrap = document.querySelector(".icon2__bgr-right");
const sliderProduct2 = document.querySelector(".webimg__right2-list");
const sliderImgViItem = document.querySelector(".webimg__right2");
const quantityList2 = document.querySelectorAll(".quantity-item2");
const sliderList3 = document.querySelector(".slider-img-wrap");
const sliderItem3 = document.querySelector(".slider-img-item:first-child");
const arrowRight3 = document.querySelector(".icon-right3");
const arrowLeft3 = document.querySelector(".icon-left3");
const quantityItem3 = document.querySelectorAll(".quantity-item3");
const arrowRight4 = document.querySelector(".icon3-bgr-right");
const arrowLeft4 = document.querySelector(".icon3-bgr-left");
const sliderProduct3Wrap = document.querySelector(".slider-product3-wrap");
const sliderProduct3List = document.querySelector(".slider-product3");
const viewMore = document.querySelector(".view-more");
const compact = document.querySelector(".compact");
const productListBeetwen = document.querySelector(".product-list-beetwen");
const btnSignIn = document.querySelector(".btn-sign-in");
const messageError = document.querySelector(".message-error");
const inputSignIn = document.querySelector(".input-sign-in");

let setTime = 0;
let bannerListWidth = bannerListImg.clientWidth;
let webimgWidth = webimgSize.clientWidth;
let quantityMax = quantityList.length;
let quantityIndex = 0;
let hours = 12;
let minute = 10;
let second = 5;
let lengthListProduct = getListProduct.clientWidth;
let lengthProductCur = productWrap.clientWidth;
let lengthSubtract = 0;
let sliderProduct2Width = sliderProduct2.clientWidth;
let sliderImgViItemWidth = sliderImgViItem.clientWidth;
let setTime2 = 0;
let quantityIndex2 = 0;
let quantityLength = quantityList2.length;
let setTime3 = 0;
let sliderList3Width = sliderList3.clientWidth;
let sliderItem3Width = sliderItem3.clientWidth;
let quantityItem3Length = quantityItem3.length;
let countQuantity3 = 0;
let sliderProduct3ListLength = sliderProduct3List.clientWidth;
let sliderProduct3WrapLength = sliderProduct3Wrap.clientWidth;
let setTime4 = 0;

// ===== Header =====
function showModalUser() {
    modal.classList.remove("hide");
}
function hideModalUser() {
    modal.classList.add("hide");
}

modalUser.addEventListener("click", showModalUser);
imgClose.addEventListener("click", hideModalUser);
modal.addEventListener("click", hideModalUser);
modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
});
// ===== Main =====
function showSliderRight() {
    sliderProduct.style.transform = "translateX(-1130px)";
    arrowLeft.classList.remove("disabled");
    arrowRight.classList.add("disabled");
}
function showSliderLeft() {
    sliderProduct.style.transform = "translateX(0px)";
    arrowLeft.classList.add("disabled");
    arrowRight.classList.remove("disabled");
}
function sliderRun() {
    // bannerListImg.style.transform = 'translateX('+setTime+'px)'
    setTime <= -(bannerListWidth - webimgWidth)
        ? (setTime = 0)
        : (setTime -= webimgWidth);
    bannerListImg.style = `transform: translateX(${setTime}px)`;
}
function quantityRight(index) {
    quantityList[index - 1].classList.remove("color-white");
    if (index === quantityMax) quantityIndex = 0;
    quantityList[quantityIndex].classList.add("color-white");
}
function quantityLeft(index) {
    quantityList[index + 1].classList.remove("color-white");
    if (index < 0) quantityIndex = quantityMax - 1;
    quantityList[quantityIndex].classList.add("color-white");
}
function nextSlider() {
    sliderRun();
    quantityIndex++;
    quantityRight(quantityIndex);
}
function prevSlider() {
    setTime === 0
        ? (setTime = -(bannerListWidth - webimgWidth))
        : (setTime += webimgWidth);
    bannerListImg.style = `transform: translateX(${setTime}px)`;
    quantityIndex--;
    quantityLeft(quantityIndex);
}
setInterval(() => {
    sliderRun();
    quantityIndex++;
    quantityRight(quantityIndex);
}, 4000);
setInterval(() => {
    eventFlash.classList.toggle("event__Flash");
}, 500);
function autoCountDown() {
    second--;
    if (second == -1) {
        minute--;
        second = 59;
    }
    if (minute == -1) {
        hours--;
        minute = 59;
        second = 59;
    }
    if (hours == -1) {
        hours = 12;
        minute = 9;
        second = 59;
    }
    if (hours < 10) {
        hours *= 1;
        hours = "0" + hours;
    }
    if (minute < 10) {
        minute *= 1;
        minute = "0" + minute;
    }
    if (second < 10) {
        second *= 1;
        second = "0" + second;
    }
    getHours.innerHTML = hours;
    getMinute.innerHTML = minute;
    getSecond.innerHTML = second;
}
function convert(lengthCurrent) {
    if (lengthCurrent != 0) {
        arrowLeftWrap.classList.remove("hide");
        let arrowRightHide = arrowRighttWrap.classList.contains("hide");
        if (arrowRightHide) {
            arrowRighttWrap.classList.remove("hide");
        }
    }
    if (lengthCurrent == 0) {
        arrowLeftWrap.classList.add("hide");
    }
    if (lengthCurrent > lengthListProduct - lengthProductCur * 2) {
        arrowRighttWrap.classList.add("hide");
    }
    getListProduct.style = `margin-left: ${-lengthCurrent}px`;
}
function sliderRun2(widthCurrent) {
    if (widthCurrent > sliderImgViItemWidth) {
        widthCurrent = 0;
        setTime2 = 0;
    }
    sliderProduct2.style = `transform: translateX(${-widthCurrent}px)`;
}
function quantityRight2(index) {
    quantityList2[index - 1].classList.remove("color-white");
    if (index === quantityLength) quantityIndex2 = 0;
    quantityList2[quantityIndex2].classList.add("color-white");
}
setInterval(() => {
    setTime2 += sliderImgViItemWidth;
    quantityIndex2++;
    sliderRun2(setTime2);
    quantityRight2(quantityIndex2);
}, 3000);
function sliderRun3(widthCurrent) {
    if (
        widthCurrent >
        sliderList3Width - (sliderItem3Width + sliderItem3Width + 24)
    ) {
        widthCurrent = 0;
        setTime3 = 0;
    }
    if (widthCurrent < 0) {
        widthCurrent =
            sliderList3Width - (sliderItem3Width + sliderItem3Width + 24);
        setTime3 =
            sliderList3Width - (sliderItem3Width + sliderItem3Width + 24);
    }
    sliderList3.style = `transform: translateX(${-widthCurrent}px)`;
}
setInterval(() => {
    setTime3 += sliderItem3Width + sliderItem3Width + 24;
    sliderRun3(setTime3);
    countQuantity3++;
    nextQuantity3(countQuantity3);
}, 4000);
function nextSlider3() {
    setTime3 += sliderItem3Width + sliderItem3Width + 24;
    sliderRun3(setTime3);
    countQuantity3++;
    nextQuantity3(countQuantity3);
}
function prevSlider3() {
    console.log(setTime3);
    setTime3 -= sliderItem3Width + sliderItem3Width + 24;
    sliderRun3(setTime3);
    countQuantity3--;
    prevQuantity3(countQuantity3);
}
function nextQuantity3(index) {
    quantityItem3[index - 1].classList.remove("active-color");
    if (index === quantityItem3Length) countQuantity3 = 0;
    quantityItem3[countQuantity3].classList.add("active-color");
}
function prevQuantity3(index) {
    quantityItem3[index + 1].classList.remove("active-color");
    if (index < 0) countQuantity3 = quantityItem3Length - 1;
    quantityItem3[countQuantity3].classList.add("active-color");
}
function sliderRun4(widthCurrent) {
    if (widthCurrent >= sliderProduct3ListLength - sliderProduct3WrapLength) {
        arrowRight4.classList.add("hide");
        arrowLeft4.classList.remove("hide");
    }
    if (widthCurrent === 0) {
        arrowLeft4.classList.add("hide");
        arrowRight4.classList.remove("hide");
    }
    sliderProduct3List.style = `transform: translateX(${-widthCurrent}px)`;
}
function nextSlider4() {
    setTime4 += sliderProduct3WrapLength;
    sliderRun4(setTime4);
}
function prevSlider4() {
    setTime4 -= sliderProduct3WrapLength;
    sliderRun4(setTime4);
}
function showViewMore() {
    productListBeetwen.classList.add("change");
    viewMore.classList.add("hide");
    compact.classList.remove("hide");
}
function hineListProduct() {
    productListBeetwen.classList.remove("change");
    viewMore.classList.remove("hide");
    compact.classList.add("hide");
}
function checkSdt(e) {
    e.preventDefault();
    const value = inputSignIn.value.trim();
    if (value != "") {
        messageError.innerText = "";
    } else {
        messageError.innerText = "Vui lòng nhập số điện thoại!";
    }
}

arrowRight.addEventListener("click", showSliderRight);
arrowLeft.addEventListener("click", showSliderLeft);
iconRightSlider.addEventListener("click", nextSlider);
iconLeftSlider.addEventListener("click", prevSlider);
setInterval(autoCountDown, 1000);
arrowRighttWrap.addEventListener("click", () => {
    lengthSubtract += lengthProductCur;
    convert(lengthSubtract);
});
arrowLeftWrap.addEventListener("click", () => {
    lengthSubtract -= lengthProductCur;
    convert(lengthSubtract);
});
arrowRight3.addEventListener("click", nextSlider3);
arrowLeft3.addEventListener("click", prevSlider3);
arrowRight4.addEventListener("click", nextSlider4);
arrowLeft4.addEventListener("click", prevSlider4);
viewMore.addEventListener("click", showViewMore);
compact.addEventListener("click", hineListProduct);
btnSignIn.addEventListener("click", checkSdt);
