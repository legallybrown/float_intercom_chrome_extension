chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
    isFreeAgent();
	}
	}, 10);
});

var colors = {
  freeagent: "rgba(199, 251, 199, 0.32)"
};

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
  var allText = document.body.innerText;
  if(allText.indexOf("PLATFORM") > 0 && allText.indexOf("freeagent") > 0)
    {
      document.querySelectorAll(".main-container")[0].style.backgroundColor = colors.freeagent;
      document.querySelectorAll(".page")[0].style.backgroundColor = colors.freeagent;
    }
  }
