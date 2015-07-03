chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
    isFreeAgent();
    // isXeroPartner();
	}
	}, 10);
});

var colors = {
  freeagent: "#7cc04a",
  xero_partner: "#FFA500"
};

function isFreeAgent(){
  var allText = document.body.innerText;
  if(allText.indexOf("PLATFORM") > 0 && allText.indexOf("freeagent") > 0)
    {
      console.log('user is FREEAGENT setting background color', colors)
      var container = document.querySelectorAll(".main-container")[0]
      container.style.backgroundColor = "";
      container.style.backgroundColor = colors.freeagent;
      // use this to color the entire background
      // document.querySelectorAll(".page")[0].style.backgroundColor = colors.freeagent; 
    }
    else{isXeroPartner()}
  }

function isXeroPartner(){
  var allText = document.body.innerText;
  if(
      allText.indexOf("ADDED-A-PARTNER-COMPANY") > 0 || 
      allText.indexOf("ADDED-PARTNER-BILLING-DETAILS") > 0 || 
      allText.indexOf("US Partners") > 0 ||
      allText.indexOf("billable partners") > 0 ||
      allText.indexOf("cancelled partners") > 0 ||
      allText.indexOf("Partners with clients") > 0 ||
      allText.indexOf("Partner Case Study") > 0 ||
      allText.indexOf("Potential Partners") > 0 
    )
    { 
      console.log('user is PARTNER setting background color')
      var container = document.querySelectorAll(".main-container")[0]
      container.style.backgroundColor = "";
      container.style.backgroundColor = colors.xero_partner;
      // use this to color the entire background
      // document.querySelectorAll(".page")[0].style.backgroundColor = colors.xero_partner; 
    }
    // else{
    //   document.querySelectorAll(".main-container")[0].style.backgroundColor = "";
    // }
  }

