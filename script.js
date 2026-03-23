document.addEventListener("DOMContentLoaded", () => {
    const dataTargetsBtns = document.querySelectorAll("[data-target]");
    const allPages = document.querySelectorAll(".page-animation");

    allPages.forEach(page => {
        if (page.id !== "home-page") {
            page.style.display = "none";
        }
    });

    dataTargetsBtns.forEach(navBtn => {
        navBtn.addEventListener("click", () => {
            const targetIdPage = navBtn.getAttribute("data-target");

            allPages.forEach(btn => {
                btn.style.display = "none";
            });

            dataTargetsBtns.forEach(btn => {
                btn.classList.remove("active-btn");
            });

            const targetPage = document.getElementById(targetIdPage);
            if (targetPage) {
                targetPage.style.display = "flex";
            }

            navBtn.classList.add("active-btn");
        });
    });


});