const handleActivityClick = (event) => {
  const clickedElement = event.target;
  console.log(clickedElement.classList)
  if (clickedElement.classList[1] === "fa-trash") {
    const listItem = clickedElement.parentElement.parentElement;
    
    listItem.remove();
  }
  if (clickedElement.tagName.toLowerCase() === "span") {
    const title = clickedElement.innerHTML;
    clickedElement.innerHTML = `<input class = "edit-task type="text value="${title}"/>`;

    const editInput = clickedElement.querySelector("input")
    editInput.addEventListener("blur",()=>{
      const newVal = editInput.value
      clickedElement.innerHTML = newVal
    })
  }
};

document.addEventListener("click", handleActivityClick);
