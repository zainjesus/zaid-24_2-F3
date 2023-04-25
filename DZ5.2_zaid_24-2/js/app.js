const tabs = document.querySelectorAll(".tabheader__item");
const tabsParent = document.querySelector(".tabheader__items");
const tabsContect = document.querySelectorAll(".tabcontent");


const handleHideTabsContect = () => {
    tabsContect.forEach((item) => {
        item.style.display = "none"
    });
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
};

const handleShowTabsContect = (i = 0) => {
    tabsContect[i].style.display = "block";
    tabs[i].classList.add("tabheader__item_active");
};

handleHideTabsContect();
handleShowTabsContect();


tabsParent.addEventListener("click", (e) => {
    const target = e.target;

    if(target.classList.contains("tabheader__item")){
        console.log(target)
        tabs.forEach((item, i) => {
            if(item === target){
                console.log(i);
                handleHideTabsContect();
                handleShowTabsContect(i)
            }
        })
    }
});

const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");
const modalOpenBtn = document.querySelector(".btn_white");

const openModal = () => {
    modal.classList.add("show");
    modal.classList.remove("hide");
    document.body.style.overflow = "hidden";
};

const closeModal = () => {
    modal.classList.add("hide");
    modal.classList.remove("show");
    document.body.style.overflow = "";
};

modalOpenBtn.addEventListener("click", openModal);
modalCloseBtn.addEventListener("click", closeModal);

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

const right = document.querySelector(".offer__slider-next");
const left = document.querySelector(".offer__slider-prev");
const current = document.querySelector("#current");
const images = document.querySelectorAll(".offer__slide");

let currentIndex = 0;

const handleHideOfferContent = () => {
    images.forEach((item) => {
        item.classList.remove("offer__slide--zoom");
        item.style.display = "none";
    });
};

const handleShowOfferContent = (i = 0) => {
    images[i].classList.add("offer__slide--zoom");
    images[i].style.display = "block";
};

const updateCurrentIndex = () => {
    current.textContent = String(currentIndex + 1).padStart(2, '0');
};

const handleNextButtonClick = () => {
    handleHideOfferContent();
    currentIndex++;
    if (currentIndex >= images.length) {
        currentIndex = 0;
    }
    handleShowOfferContent(currentIndex);
    updateCurrentIndex();
};

const handlePrevButtonClick = () => {
    handleHideOfferContent();
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }
    handleShowOfferContent(currentIndex);
    updateCurrentIndex();
};

right.addEventListener("click", () => {
    handleNextButtonClick();
    timeOutInterval();
});

left.addEventListener("click", () => {
    handlePrevButtonClick();
    timeOutInterval();
});

const timeOutInterval = () => {
    clearInterval(intervalId);
    intervalId = setTimeout(() => {
        intervalId = setInterval(handleNextButtonClick, 3000);
    }, 7000);
}

let intervalId = setInterval(handleNextButtonClick, 3000);

handleHideOfferContent();
handleShowOfferContent();
updateCurrentIndex();

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (scrolled === scrollable) {
        openModal();
    }
});

const forms = document.querySelectorAll("form");
const modalContect = document.querySelector(".modal__content")

const postData = (form) => {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        const obj = {}

        formData.forEach((value, key) => {
            obj[key] = value

        })
        const json = JSON.stringify(obj);

        const request = new XMLHttpRequest();
        request.open("POST", "server.php");
        request.setRequestHeader("Contect-Type", "application/json");
        request.send(json);
        request.onload = () => {
            if (request.status >= 200 && request.status <= 299) {
                showModal(`Status (${request.status})`, "Мы вам перезвоним!");
            } else if (request.status >= 400 && request.status <= 499) {
                showModal(`Status (${request.status})`, "Некорректный запрос");
            } else if (request.status >= 500 && request.status <= 599) {
                showModal(`Status (${request.status})`, "Ошибка на сервере");
            }
        };
    })
}

forms.forEach((item) => {
    postData(item);
})

const showModal = (title, message) => {
    const modalContent = document.querySelector(".modal__content");
    modalContent.innerHTML = `
        <h2 class="modal__title">${title}</h2>
        <p class="modal__message" style="text-align:center">${message}</p>
    `;
    setTimeout(closeModalSpecial, 3000);
};

const closeModalSpecial = () => {
    closeModal()
    location.reload();
}




