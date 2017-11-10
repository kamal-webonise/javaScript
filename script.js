// Sets List Item

function set(obj)
{
     var Key=document.getElementById("key").value;
     var Value=document.getElementById("value").value;	
     
     if(Key.length==0 || Value.length==0)
    	 alert("Missing Field");
     else
     {
	obj.setItem(Key,Value);
	alert("Set Item in Storage");	
     }
}

// show List Items

function getItems(obj)
{
	var i=obj.length;
    	alert(i);
    	while(i--)
	{

        var Key=obj.key(i);
        console.log(obj.key(i));
	//alert("key :"+obj.key(i));
	console.log(obj.getItem(Key));
	//alert("key :"+obj.getItem(Key));
	}  

}

// Delete List Items

function deleteItems(obj)
{
	
	var records=obj.length;
	while(records--)
	{
		var Key=obj.key(records);
		obj.removeItem(Key);
		//alert("deleted "+records+"th");
	}
  
}


// Delete one Item

function deleteO(obj)
{
	var records=obj.length;
	while(records--)
	{
		var Key=obj.key(records);
			
		var userinput=document.getElementById("key1").value;
		
		if(userinput==Key)
		obj.removeItem(Key);

	}
}

// Set Function 

var localButton=document.getElementById("setLocal");

localButton.addEventListener("click",function()
{
    set(localStorage);   
    
});


var sessionButton=document.getElementById("setSession");

sessionButton.addEventListener("click",function()
{
    set(sessionStorage);   
    
});


//To show the listItems

var getLSitems=document.getElementById("getLocal");

getLSitems.addEventListener("click",function()
{
	getItems(localStorage);
});


var getSSlist=document.getElementById("getSession");

getSSlist.addEventListener("click",function()
{
	getItems(sessionStorage);
});






// Delete List items Fuction


var delLSitems=document.getElementById("deleteLocal");

delLSitems.addEventListener("click",function()
{
	
	deleteItems(localStorage);
});

var delSSitems=document.getElementById("deleteSession");

delSSitems.addEventListener("click",function()
{
	
	deleteItems(sessionStorage);
});


// Delete a Key Value Pair

var del=document.getElementById("deleteLoc");

del.addEventListener("click",function()
{
	deleteO(localStorage);
});

var del=document.getElementById("deleteses");

del.addEventListener("click",function()
{
	deleteO(sessionStorage);
});
