document.addEventListener("DOMContentLoaded", () => {
    let myForm = document.querySelector("#js-register")
    let inputBoxes = document.querySelectorAll(".input-group")
    myForm.addEventListener("submit", (event) => {
        event.preventDefault();
        // remove all error boxes
        inputBoxes.forEach(inputBox => {
            inputBox.classList.remove("errorBox")
            inputBox.previousElementSibling.classList.remove("showError")
        })
        let username = myForm.elements[0].value
        let fullname = myForm.elements[1].value
        let age = myForm.elements[2].value
        let sex = myForm.elements[3].checked
        let email = myForm.elements[5].value
        let level = myForm.elements[6].value

        if (!testUsername(username)) {
            inputBoxes[0].classList.add("errorBox")
            inputBoxes[0].previousElementSibling.classList.add("showError")
            return false
        }
        if (!testName(fullname)) {
            inputBoxes[1].classList.add("errorBox")
            return false
        }
        if (!testAge(age)) {
            inputBoxes[2].classList.add("errorBox")
            return false
        }
        if (!testEmail(email)) {
            inputBoxes[3].classList.add("errorBox")
            return false
        }
        if (!testUserLevel(level)) {
            inputBoxes[4].classList.add("errorBox")
            return false
        }
        if (!testUserLevel(level)) {
            inputBoxes[5].classList.add("errorBox")
            return false
        }
        if (!testUserLevel(level)) {
            inputBoxes[6].classList.add("errorBox")
            return false
        }
        addNewUser({
            username: username.trim(),
            fullname: fullname.trim(),
            age: age,
            email: email.trim(),
            sex: sex,
            level: level
        })
    })
})

let testUsername = (username) => {
    if (username.length == 6)
        return true
    return false
}

let testName = (fullname) => {
    fullname = fullname.trim()
    if (fullname.split(" ").length < 2)
        return false
    let charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ "
    for (letter of fullname) {
        if (!charList.includes(letter))
            return false
    }
    return true
}

let testAge = (age) => {
    age = parseInt(age)
    if (!isNaN(age))
        return true
    return false
}

let testEmail = (email) => {
    email = email.trim().split("@")
    if (email.length == 2)
        return email[1].includes(".")
    return false
}

let testUserLevel = (level) => {
    if (parseInt(level) >= 1 && parseInt(level) <= 3)
        return true
    return false
}

let addNewUser = (formData) => {
    formData.fullname = formData.fullname.split(" ")
    let firstname = formData.fullname[0]
    let lastname = formData.fullname[formData.fullname.length - 1]
    
    if (formData.sex == true)
        formData.sex = "Male"
    else
        formData.sex = "Female"
    
    let charList = "thequickbrownfoxjumpedoverthelazydogs"
    let passwd = ""
    while (passwd.length < 5) {
        passwd += charList[Math.floor(Math.random() * charList.length)]
    }
    console.warn(passwd)
    myData = {
        "username": formData.username,
        "firstname": firstname,
        "lastname": lastname,
        "age": formData.age,
        "sex": formData.sex,
        "email": formData.email,
        "userLevel": formData.level,
        "password": passwd
        // complete the remaining values for the JSON object
    }
    localStorage.setItem(formData.username, JSON.stringify(myData))
    sessionStorage.setItem("newUser",formData.username)
    location.assign("password.html")
}