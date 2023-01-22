function postMessage() {
  //Variables from user from
  var messageinsert = document.getElementById('message').value;
  var nameinsert = document.getElementById('name').value;
  var areainsert = document.getElementById('area').value
  var randnum = Math.floor(Math.random() * 60).toString();

  var $message = $("<div/>", { class: "post-message" }).css({
        "margin-top": "5px"
      }),
      $logo = $("<img/>", { class: "post-author-logo", src: "resources/person.png"}).css({
        "width": "49px",
        "height": "49px",
        "border-radius": "50%",
        "margin-right": "10px",
      }),
      $header = $("<div/>", { class: "post-header" }).css({
        "display": "flex"
      }),
      $author = $("<div/>", { class: "post-author-name", text: nameinsert}).css({
        "font-size": "15px",
        "font-weight": "700",
        "color": "#14171a",
        "margin-right": "5px",
      }),
      $area = $("<div/>", { class: "post-author-area", text: "@"+ areainsert}).css({
        "color": "#5b7083",
        "font-size": "15px"
      }),
      $time = $("<div/>", { class: "post-publish-time", text: randnum + "m ago"}).css({
        "margin-left": "5px",
        "color": "#657786"
      }),
      $content = $("<div/>", { class: "post-content", text: messageinsert}).css({
        "margin-top": "5px",
        "display": "flex",
        "margin-bottom": "2px",
      }),
      $post = $("<div/>", { class: "post"}).css({
        "display": "flex",
        "border-bottom": "1px solid #e6ecf0",
        "margin-bottom": "2px",
        "padding": "10px 15px"
      });

  

  if(nameinsert == "" || messageinsert ==  "" || areainsert == "") {
    Swal.fire({
        icon: 'error',
        title: 'POST UNSUCCESSFUL!',
        text: 'Fill in all Fields!',
        button:"Try again"
    })
  } else {
    $post.append($logo, $message.append($header.append($author, $area, $time), $content)).prependTo('.posts');
    Swal.fire({
        icon: 'success',
        title: 'POST SUCCESSFUL!',
        text: 'You have posted a public message',
        button:"Continue"
    })
  }
}



