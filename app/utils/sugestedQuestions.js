// Assuming questions.json is in the same directory as your HTML file
fetch("questionSuggestions.json")
  .then((response) => response.json())
  .then((data) => {
    const rightSidebar = document.querySelector(".right-sidebar");

    // Create a container for the questions
    const questionsContainer = document.createElement("div");
    questionsContainer.classList.add("questions-container");

    // Loop through the questions and create elements for each
    for (const [index, question] of data.entries()) {
      const questionDiv = document.createElement("button");
      questionDiv.classList.add("question");
      questionDiv.classList.add("suggested-btn");
      questionDiv.textContent = question.question;

      questionsContainer.appendChild(questionDiv);
    }

    rightSidebar.appendChild(questionsContainer);
  })
  .catch((error) => {
    console.log("Error fetching questions:", error);
  });
