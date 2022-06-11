
function copyContract() {
	var Contract = document.getElementById("contractAdress");
	Contract.select();
    Contract.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(Contract.value);
	// document.execCommand("copy");
	document.getElementById("btnCopy").innerText = "Copied";
	setTimeout(function(){document.getElementById("btnCopy").innerText = "Copy Contract";}, 3000);
    // alert("qsdf");
}