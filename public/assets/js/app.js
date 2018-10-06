window.onload = function () {
  var add = document.getElementById('add');
  var burgerList = document.getElementById('burgerList');

  add.addEventListener('click', function create(event) {
    event.preventDefault();
    var newBurger = document.getElementById('newBurger').value;
    let p = document.createElement("p");
    let newBtn = document.createElement('button');
    let text = document.createTextNode(newBurger);
    let btnText = document.createTextNode("Eat!");
    p.appendChild(text);
    p.setAttribute('id', 'burgerListI');
    burgerList.appendChild(p);
    let btn = document.querySelector('#burgerListI:last-child');
    newBtn.appendChild(btnText);
    newBtn.setAttribute('class', 'eat');
    btn.appendChild(newBtn);

    var burger_name = $.trim(newBurger);

    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        burger_name
      }
    }).then(
      function () {
        console.log("created new cat");
        location.reload();
      }
    );
  });

  $(".eat").on("click", function (event) {
    event.preventDefault();
    var id = $(this).data("id");
    var eating = {
      id: id,
      devoured: true
    };
    console.log(eating);
    // Send the PUT request.
    $.ajax("/api/burgers" + id, {
      type: "PUT",
      data: eating
    }).then(
      function () {
        console.log("changed to", eating);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".del").on("click", function (event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted burger", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
};



/*
=================================================
var eat = document.getElementsByClassName('eat');
// var eat = document.querySelectorAll('.eat');
for(var i=0;i<eat.length;i++){
eat[i].addEventListener('click',update,false);

};
function update(event){
  var id = $(this).data("id");
  var eating = {
    id: id,
    devoured: true
  };
  console.log(eating);
  // Send the PUT request.
  $.ajax("/api/burgers" + id, {
    type: "PUT",
    data: eating
  }).then(
    function() {
      console.log("changed sleep to", eating);
      // Reload the page to get the updated list
      location.reload();
    }
  );
};
===================================================
// fetch('/api/burgers',{
    //   method: 'POST',
    //   body: JSON.stringify({
    //     burgers: newBurger
    //   }),
    //   headers: {"Content-Type": "application/json"}
    // })
    // .then(function(response){
    //   return response.json()
    // }).then(function(body){
    //   console.log(body);
    //   alert(self.refs.task.value)
    // })
    // .catch(error => console.error('Error:', error));


document.getElementById('postData').addEventListener('submit', postData);

 function postData(event){
            event.preventDefault();

            let tittle = document.getElementById('tittle').value;
            let body = document.getElementById('body').value;

            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers : new Headers(),
                body:JSON.stringify({tittle:tittle, body:body})
            }).then((res) => res.json())
            .then((data) =>  console.log(data))
            .catch((err)=>console.log(err))
        }
    var p = document.getElementById(parentId);
    var newElement = document.createElement(elementTag);
    newElement.setAttribute('id', elementId);
    newElement.innerHTML = html;
    p.appendChild(newElement);

        // Removes an element from the document
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);

add to html on click for post
*/