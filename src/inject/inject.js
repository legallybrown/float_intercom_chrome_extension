chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
    checkPlatform();
		// ----------------------------------------------------------
	}
	}, 10);
});


function getAllElementsWithAttribute(attribute){
  var matchingElements = [];
  var allElements = document.getElementsByTagName('*');
  for (var i = 0, n = allElements.length; i < n; i++)
  {
    if (allElements[i].getAttribute(attribute) !== null)
    {
      // Element exists with attribute. Add to array.
      matchingElements.push(allElements[i]);
    }
  }
  console.log('matching elements', matchingElements);
  return matchingElements;
}

function isFreeAgent(){
  var data  = document.querySelectorAll("[data-tooltip-content]");
  var arr = [];
  for (var i = 0, n = data.length; i < n; i++)
  {
    console.log('data is:', data[i])
    if(data[i].dataset.tooltipContent == "platform: freeagent")
      {
        arr.push(data[i])
      }
    }
    console.log('array:', arr);
    if(arr.length > 0){
      document.querySelectorAll(".page")[0].style.backgroundColor = "rgba(88, 243, 88, 0.32)";
      document.querySelectorAll(".page")[0].style.margin = 'none';
  }
