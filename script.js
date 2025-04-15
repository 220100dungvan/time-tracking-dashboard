document.addEventListener("DOMContentLoaded", () => {
    fetch("./data.json")
        .then((response) => response.json())
        .then((data) => {
            const timeframeButtons = document.querySelectorAll(".sidebar__option");
            const widgetItems = document.querySelectorAll(".widgets__item");

            timeframeButtons.forEach((button) => {
                button.addEventListener("click", () => {
                    const timeframe = button.textContent.toLowerCase();

                    timeframeButtons.forEach((btn) => btn.classList.remove("sidebar__option--active"));
                    button.classList.add("sidebar__option--active");

                    widgetItems.forEach((item, index) => {
                        const currentData = data[index].timeframes[timeframe];
                        item.querySelector(".widgets__timeframes-current").textContent = `${currentData.current}hrs`;
                        item.querySelector(".widgets__timeframes-previous").textContent = `Last week - ${currentData.previous}hrs`;
                    });
                });
            });

            document.querySelector(".sidebar__option--active").click();
        })
        .catch((error) => console.error("Error loading data:", error));
});