function myfun1()
{
	let x=document.getElementById("name").value;
	let regu=/^[a-z]+$/;
	let y=document.getElementById("div1");
	if(regu.test(x))
	{
		y.innerHTML="ok"
	}
	else
	{
		y.innerHTML="enter valid name"
	}
}

function myfun2()
{
	let a=document.getElementById("gmail").value;
	let regu=/^[a-z]+[@][a-z]+[.][a-z]+$/;
	if(regu.test(a))
	{
		alert("proceed");
	}
	else
	{
		alert("Enter valid email");
	}
}

function myfun3()
{
	let b=document.getElementById("mobile").value;
	let regu=/^[0-9]+$/;
	if(regu.test(b))
	{
		alert("proceed");
	}
	else
	{
		alert("Enter valid mobile no");
	}
}
