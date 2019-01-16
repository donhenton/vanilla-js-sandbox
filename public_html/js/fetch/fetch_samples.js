
const baseUrl = "https://donhenton-spring-boot.herokuapp.com";
const findAppUrl = `${baseUrl}/sec/applications/findOne`;
const idBox = document.querySelector('#fetch_param');
const textArea = document.querySelector('#text_report');
const mounteBankUrl = "http://localhost:9000/restaurant"


function fetchApps() {

  textArea.innerHTML = "";
  let param = idBox.value;
  let url = `${findAppUrl}/${param}`;
  console.log(url)
  fetch(url)
        .then(handleResponse)
        .then(displayToTextBox)
        .catch(err => {
          console.log(err)
          displayToTextBox(err)

        })

}

//https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

function fetchCORsPost() {

  let payload = {"name":"martins mania","zipCode":"53217","city":"Bonaroo","state":"WI","version":1};
  fetch(mounteBankUrl, {
    method: "POST",
    mode: "cors",
    headers: {"Content-Type": "application/json"}, // application/x-www-form-urlencoded
    body: JSON.stringify(payload)


  })
        .then(handleResponse)
        .then(displayToTextBox)
        .catch(err => {
          console.log(err)
          displayToTextBox(err)

        })


}



function fetchCORs() {
  let parmBox = document.querySelector('#fetch_cors');
  console.log(parmBox.value)

  let url = `${mounteBankUrl}/${parmBox.value}`;
  console.log(url)
  fetch(url)
        .then(handleResponse)
        .then(displayToTextBox)
        .catch(err => {
          console.log(err)
          displayToTextBox(err)

        })
}


function displayToTextBox(json) {

  // With great power, comes great responsibility

  //  console.log(json);
  textArea.innerHTML = JSON.stringify(json, " ", 2)

  // :-P
}


function handleResponse(response) {
  return response.json()
        .then((json) => {
          if (!response.ok) {
            const error = Object.assign({}, json, {
              status: response.status,
              statusText: response.statusText,
            });

            return Promise.reject(error);
          }
          return json;
        });
}