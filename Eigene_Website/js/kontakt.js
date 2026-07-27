const budgetButtons = document.querySelectorAll(".budget-btn");
const budgetInput = document.getElementById("budget");

budgetButtons.forEach(button => {

    button.addEventListener("click", () => {

        budgetButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        budgetInput.value = button.dataset.budget;

    });

});