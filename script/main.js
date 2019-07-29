var searchBtn = document.getElementById("searchBtn");
var searchBox = document.querySelector("#search");
searchBtn.addEventListener('click', clickSearch)

function clickSearch() {
  console.log("search_clicked")

  var term = encodeURIComponent(searchBox.value).replace(/%20(\D)?/g, "+$1").replace(/'/g, escape("'"));
  console.log(term)
  var url = "https://www.google.com/search?q="+term;

  console.log(url);
  window.open(url,"_blank");
}
