```javascript
function myfunction()
{
    alert("welcome");
}

window.onload = myfunction;


function showYear()
{
    let year = new Date().getFullYear();
    document.getElementById("year").innerHTML = year;
}


function checkAvailability(button)
{
    let availability = button.nextElementSibling;

    if (availability.style.display === "none")
    {
        availability.style.display = "block";
    }
    else
    {
        availability.style.display = "none";
    }
}


function handleUserMessage()
{
    let input = document.getElementById("userInput").value;

    if (input.trim() === "")
    {
        return;
    }

    let chatLog = document.getElementById("chatLog");

    chatLog.innerHTML += "<p><b>You:</b> " + input + "</p>";
    chatLog.innerHTML += "<p><b>Chatbot:</b> You said " + input + "</p>";

    document.getElementById("userInput").value = "";
}
```

