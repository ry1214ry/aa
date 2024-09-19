document.addEventListener("DOMContentLoaded", function () {
    // Select all the color items
    const colorItems = document.querySelectorAll(".color-item");

    // Add click event listener to each color item
    colorItems.forEach(function (item) {
      item.addEventListener("click", function () {
        // Copy the color code to the clipboard
        const colorCode = item.innerText;
        copyToClipboard(colorCode);

        // Add the highlight effect
        item.classList.add("highlight");

        // Remove the highlight effect after 200ms
        setTimeout(function () {
          item.classList.remove("highlight");
        }, 200);
      });
    });

    // Function to copy text to the clipboard
    function copyToClipboard(text) {
      const textarea = document.createElement("textarea");
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    }
  });