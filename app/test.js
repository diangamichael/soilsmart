const form = document.getElementById("chat-form");
const responseDiv = document.getElementById("response");
const chatsWrapper = document.querySelector(".chats-wrapper");
const welcomeMessage = document.querySelector(".welcome-message");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const userInput = event.target.elements.message.value;
  const messageElement = document.createElement("div");
  messageElement.classList.add("message-sent", "message");
  messageElement.textContent = userInput;
  // hide welcome message
  welcomeMessage.style.display = "none";
  chatsWrapper.appendChild(messageElement);
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
