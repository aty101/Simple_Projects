const handleActivityClick = (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList[1] === "fa-trash") {
    const listItem = target.parentElement.parentElement;
    listItem.remove();
  }
  if (clickedElement.tagName.toLowerCase() === "span") {
    const title = clickedElement.innerHTML;
    console.log(title);
  }
};

document.addEventListener("click", handleActivityClick);
