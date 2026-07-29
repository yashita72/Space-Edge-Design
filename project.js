// ================= FILTER =================

const filterButtons = document.querySelectorAll(".filter-btn");
const cards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        cards.forEach(card => {

            if (
                filter === "all" ||
                card.dataset.category === filter
            ) {

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });

    });

});


// ================= MODAL =================

const modal =
document.querySelector(".project-modal");

const modalImage =
document.getElementById("modalImage");

const modalTitle =
document.getElementById("modalTitle");

const modalLocation =
document.getElementById("modalLocation");

const closeBtn =
document.querySelector(".close-modal");


document.querySelectorAll(".project-card").forEach(card=>{

    card.querySelector(".view-btn")
    .addEventListener("click",()=>{

        modal.classList.add("active");

        modalImage.src =
        card.querySelector("img").src;

        modalTitle.innerText =
        card.querySelector("h3").innerText;

        modalLocation.innerText =
        card.querySelector("p").innerText;

    });

});


closeBtn.addEventListener("click",()=>{

    modal.classList.remove("active");

});


window.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("active");

    }

});