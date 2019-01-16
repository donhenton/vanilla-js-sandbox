
const baseUrl = "https://donhenton-spring-boot.herokuapp.com";
const findAppUrl = `${baseUrl}/sec/applications/findOne` ;
const idBox = document.querySelector('#fetch_param');
const textArea = document.querySelector('#text_report');

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


function displayToTextBox(json) {

        // With great power, comes great responsibility

      //  console.log(json);
      textArea.innerHTML = JSON.stringify(json," ",2)

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