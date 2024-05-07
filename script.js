// logic to fill the table

  function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
      () =>{
        alert("Text copied to clipboard: " + txt);
        
      },
      () =>{
        alert("clipboard copying faild")
      },

    );
    
    
  }




const deletePassword = (website) =>{
    let data = localStorage.getItem("passwords");
    let arr = JSON.parse(data);
    arrUpdated = arr.filter((e)=>{
        return e.website != website
    })
    localStorage.setItem("passwords", JSON.stringify(arrUpdated))
    alert(`Conform to delete ${website}'s password`)

}




const showPassword = () => {
  let tb = document.querySelector("table");
  let data = localStorage.getItem("passwords");
  if (data == null) {
    tb.innerHTML = "No Data to show";
  } else {
    tb.innerHTML =  `<tr>
    <th>Website</th>
    <th>Username</th>
    <th>Password</th>
    <th>Delete</th>
  </tr>`
    let arr = JSON.parse(data);
    let str = "";
    for (let index = 0; index < arr.length; index++) {
      const element = arr[index];

      str += `<tr>
    <td>${element.website} <img src="copy.svg" alt="Copy Icon" onclick="copyText(${element.website})" style="cursor: pointer;" height=18px >
    </td>
    <td>${element.username} <img src="copy.svg" alt="Copy Icon" onclick="copyText(${element.username})" style="cursor: pointer;" height=18px>
    </td>
    <td>${element.password} <img src="copy.svg" alt="Copy Icon" onclick="copyText(${element.password})" style="cursor: pointer;" height=18px>
    </td>
    <td><button class="btn" onclick="deletePassword('${element.website}')">Delete</button></td>
        </tr>`
    }
    tb.innerHTML = tb.innerHTML + str;
  }
  website.value = ""
  username.value = ""
  password.value = ""


};

console.log("start");
showPassword()
document.querySelector(".btn").addEventListener("click", (e) => {
  e.preventDefault();

  console.log("clicked.....");
  console.log(username.value, password.value);
  let passwords = localStorage.getItem("passwords");
  console.log(passwords);
  if (passwords == null) {
    let json = [];
    json.push({website:website.value, username: username.value, password: password.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  } else {
    let json = JSON.parse(localStorage.getItem("passwords"));
    json.push({website:website.value, username: username.value, password: password.value });
    alert("Password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
  }
  showPassword()
});
