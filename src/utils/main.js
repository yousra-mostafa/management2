export const setupSidebarToggle = () => {
    const offcanvas = document.getElementById("my-offcanvas");
    const toggleOffcanvasButton = document.getElementById("my-toggleOffcanvas");
    let secoundPart = document.querySelector(".secound-part");

    toggleOffcanvasButton.addEventListener("click", function () {
        offcanvas.classList.toggle("hide");

        if (offcanvas.style.position === "fixed") {
            offcanvas.style.position = "relative";
        } else {
            offcanvas.style.position = "fixed";
        }

        secoundPart.classList.toggle("col-11");
        secoundPart.classList.toggle("custom-width");
        secoundPart.classList.toggle("col-10");
        offcanvas.classList.toggle("padding-toggel");
    });
};

export const setupDropdownToggle = () => {
    const myDropdownTitle = document.querySelectorAll(".myDropdownTitle");

    myDropdownTitle.forEach((header) => {
        header.addEventListener("click", () => {
            const projectDropdown = header.parentNode; // <li class="dropdown-li">
            const projectSubGroup =
                projectDropdown.querySelector(".project-sub-group");
            const myAccordionIcon =
                projectDropdown.querySelector(".my-accordion-icon");

            projectDropdown.querySelectorAll("ul li").forEach((PsubGroup) => {
                PsubGroup.addEventListener("click", () => {
                    projectDropdown.querySelectorAll("ul li").forEach((item) => {
                        item.classList.remove("my-act");
                    });
                    PsubGroup.classList.add("my-act");
                });
            });

            document.querySelectorAll(".dropdown-li").forEach((item) => {
                if (item !== projectDropdown) {
                    const subGroup = item.querySelector(".project-sub-group");
                    subGroup.style.maxHeight = "0";

                    let allPsubGroup = projectDropdown.querySelectorAll("ul li");
                    allPsubGroup.forEach((PsubGroup) => {
                        PsubGroup.classList.remove("my-act");
                    });
                } else {
                    const clickSubGroup = item.querySelector(".project-sub-group");
                    clickSubGroup.style.maxHeight = clickSubGroup.scrollHeight + "px";
                }
            });
        });
    });
};
