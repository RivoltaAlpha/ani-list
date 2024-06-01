document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#anime-list");
  const forms = document.forms;
  const addform = forms["add-anime"];

  list.addEventListener("click", (e) => {
    if (e.target.className == "delete") {
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  //add anime
  addform.addEventListener("submit", (e) => {
    e.preventDefault();

    //create elements
    const value = addform.querySelector('input[type="text"]').value;
    const li = document.createElement("li");
    const animeName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    //add text content
    animeName.textContent = value;
    deleteBtn.textContent = "delete";

    //add classes
    animeName.classList.add("name");
    deleteBtn.classList.add("delete");

    //append to DOM
    li.appendChild(animeName);
    li.appendChild(deleteBtn);
    list.appendChild(li);

    //clear inputs
    addform.querySelector('input[type="text"]').value = "";

    //change image
    document.getElementById("myImage").src = "landscape.jpg";
  });
});
