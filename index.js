const callback = (err, data) => {
  if (err) {
    console.log(`call back`, err);
  }
  if (data) {
    console.log(`call back`, data);
  }
};

function getTodo() {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (this.readyState === 4 && this.status == 200) {
      // Typical action to be performed when the document is ready:
      //   console.log(`>>> check rest `, request);
      const data = request.responseText;
      callback(undefined, data);
    }
    if (this.readyState === 4 && request.status !== 200) {
      callback("error", undefined);
    }
  };
  request.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  request.send();
}

getTodo();
