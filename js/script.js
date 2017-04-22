function myFunction() {
  var x = document.getElementById("snackbar")
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}
$(document).ready(function() {
  $('div.col-sm-4').children('div').each(function() {
    $(this).css({
      'background-color': $(this).text().slice(0, 7)
    });
  });
  $('div.col-sm-4').click(function(e) {
    let element = document.createElement('INPUT');
    element.style.visiblity = 'hidden';
    element.setAttribute('value', $(e.target).text().slice(0, 7));
    document.body.append(element);
    element.select();
    document.execCommand('copy');
    document.body.removeChild(element);
    document.getElementById('snackbar').innerHTML = 'Color value ' + $(e.target).text().slice(0, 7) + ' has been copied to your clipboard';
    myFunction();
  })
});
