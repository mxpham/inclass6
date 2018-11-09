// ADD NEW ITEM TO END OF LIST
var ul = document.getElementsByTagName("ul")[0];
var node = document.createElement("li");                 // Create a <li> node
var textnode = document.createTextNode("cream");         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
ul.appendChild(node);

// ADD NEW ITEM START OF LIST
var node2 = document.createElement("li");                 // Create a <li> node
var textnode2 = document.createTextNode("kale");         // Create a text node
node2.appendChild(textnode2);                              // Append the text to <li>
ul.insertBefore(node2, ul.childNodes[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var listItems = document.querySelectorAll('li');
var n = listItems.length;
for(var i = 0; i < n; i++) {
  listItems[i].className = 'cool';
}
// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.querySelector('h2');
var newHeading = heading.firstChild.nodeValue + '<span>'  + n + '</span>';
heading.innerHTML = newHeading;
