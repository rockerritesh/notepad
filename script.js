var fileName = document.getElementById("txtHeader");
var fileContent = document.getElementById("txtContent");

fileName.value = "";
fileContent.value = "";

function downloadFile(fileType) {
    if (fileName.value === "" || fileContent.value === "") {
        window.alert("Please enter File name and content");
    } else {
        var content = fileContent.value;
        var extension = "";
        var mimeType = "";

        if (fileType === "txt") {
            extension = ".txt";
            mimeType = "text/plain";
        } else if (fileType === "md") {
            extension = ".md";
            mimeType = "text/markdown";
        }

        var link = document.createElement("a");
        link.download = fileName.value + extension;
        var blob = new Blob([content], { type: mimeType });
        link.href = window.URL.createObjectURL(blob);
        link.click();
    }
}

function changeStyle(propertyName) {
    switch (propertyName) {
        case "b":
            if (fileContent.style.fontWeight === "bold")
                fileContent.style.fontWeight = "normal";
            else
                fileContent.style.fontWeight = "bold";
            break;
        case "i":
            if (fileContent.style.fontStyle === "italic")
                fileContent.style.fontStyle = "normal";
            else
                fileContent.style.fontStyle = "italic";
            break;
        case "n":
            fileContent.style.fontWeight = "normal";
            fileContent.style.fontStyle = "normal";
            fileContent.style.textDecoration = "none";
            break;
        case "u":
            if (fileContent.style.textDecoration === "underline")
                fileContent.style.textDecoration = "none";
            else
                fileContent.style.textDecoration = "underline";
            break;
    }
}
