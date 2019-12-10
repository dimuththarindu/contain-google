function onOptionsPageSave(e)
{
	e.preventDefault();

	// Save settings
	browser.storage.sync.set({
		"ignore_youtube": document.querySelector("#ignore_youtube").checked,
		"ignore_searchpages": document.querySelector("#ignore_searchpages").checked,
		"ignore_maps": document.querySelector("#ignore_maps").checked,
		"ignore_flights": document.querySelector("#ignore_flights").checked
	});

	browser.runtime.reload();
}

function onOptionsPageLoaded()
{
	// Load saved settings or use defaults when nothing was saved yet
	var storageItem = browser.storage.sync.get();
	storageItem.then((res) =>
	{
		document.querySelector("#ignore_youtube").checked = res.ignore_youtube || false;
		document.querySelector("#ignore_searchpages").checked = res.ignore_searchpages || false;
		document.querySelector("#ignore_maps").checked = res.ignore_maps || false;
		document.querySelector("#ignore_flights").checked = res.ignore_flights || false;
	});
}

document.addEventListener("DOMContentLoaded", onOptionsPageLoaded);
document.querySelector("form").addEventListener("submit", onOptionsPageSave);

// ----------------------------------------------------------------------------------------------------

/* This fun has not enabled yet
// Set values
document.getElementById('elbtn').addEventListener('click', function(){
	//alert(document.getElementById('elinput').value)
	//browser.storage.local.set({elinput: sd})
	browser.storage.local.set({
	  exlist:  document.getElementById('elinput').value
	})
})


// Get and display values
let gettingItem = browser.storage.local.get("exlist");
gettingItem.then(onGot, onError);

function onGot(item) {
  //console.log(item.exlist);  
  if(item.exlist) {
	  document.getElementById("elinput").value = item.exlist;
  }   
}

function onError(error) {
  console.log(`Error: ${error}`);
} */