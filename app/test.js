const form = document.getElementById("chat-form");
const responseDiv = document.getElementById("response");
const chatsWrapper = document.querySelector(".chats-wrapper");
const welcomeMessage = document.querySelector(".welcome-message");
const suggestedInputs = document.querySelectorAll(".suggested-btn");
const _userImage = "../assets/images/user.jpg";
const _botImage = "../assets/images/bot.png";

// Handle suggested input clicks
suggestedInputs.forEach((suggestedInput) => {
  suggestedInput.addEventListener("click", () => {
    const suggestedText = suggestedInput.textContent;
    form.elements.message.value = suggestedText;
    // submit form
    form.dispatchEvent(new Event("submit"));
  });
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userInput = event.target.elements.message.value;

  // create message container
  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message-container");
  const messageImage = document.createElement("img");
  messageImage.src = _userImage;
  messageImage.classList.add("message-image");

  // create message element
  const messageElement = document.createElement("div");
  messageElement.classList.add("message-sent", "message");
  messageElement.textContent = userInput;
  messageContainer.appendChild(messageElement);
  messageContainer.appendChild(messageImage);

  // hide welcome message
  welcomeMessage.style.display = "none";
  chatsWrapper.appendChild(messageContainer);
  event.target.elements.message.value = "";

  // const response = await fetch("/chat", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({ message: userInput }),
  // });

  // const responseData = await response.json();

  // console.log(responseData);

  // if (responseData && responseData.urls && responseData.urls.stream) {
  //   const source = new EventSource(responseData.urls.stream, {
  //     withCredentials: true,
  //   });

  //   source.addEventListener("output", (e) => {
  //     responseDiv.innerHTML += e.data + "\t";
  //     // console.log("output", e.data);
  //   });

  //   source.addEventListener("error", (e) => {
  //     console.error("error", JSON.parse(e.data));
  //   });

  //   source.addEventListener("done", (e) => {
  //     source.close();
  //     console.log("done", JSON.parse(e.data));
  //   });
  // }

  // responseDiv.innerHTML += responseData.text + "\t";
});
