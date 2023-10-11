import MarkdownIt from "markdown-it";

class FormatMessage {
  constructor(message) {
    this.message = message;
  }

  // method to format message
  format() {
    const md = new MarkdownIt();
    return md.render(this.message);
  }
}

export default FormatMessage;
