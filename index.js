const todoUl = document.getElementById("todo");
const inputText = document.getElementById("inputText");

function add(){
    if (inputText.value.trim() !== ""){
        const todoLi = document.createElement("li"),
        todoText = document.createTextNode(inputText.value);

        todoLi.appendChild(todoText);
        const todoItem = todoUl.appendChild(todoLi);

        const closeBtn = document.createElement("span");
        closeBtn.classList= "close-btn";
        todoItem.appendChild(closeBtn);
    } else{
        inputText.classList.add("error");
    } 
    inputText.value = "";
};

inputText.addEventListener("keyup", function(e){
    if (e.key === "Enter"){
        add()
    } 
});

todoUl.addEventListener("click", function(e){
    if(e.target.className === "close-btn"){
        e.target.closest("li").remove();
    }
    if (e.target.tagName === "LI"){
        if(e.target.style.textDecoration !== "line-through"){
            e.target.style.textDecoration = "line-through"
        } else{
            e.target.style.textDecoration = ""
        }
    }
});

