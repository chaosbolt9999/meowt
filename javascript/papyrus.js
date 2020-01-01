var updatePoll = function() {
	console.log("YAY I GOT CALLED\n");
	var i;
	var isSensible=true;
	var arr=[Number(63), Number(17), Number(9), Number(4), Number(0)];
	var stressors=["Academics", "Family issues", "Social issues", "Overall well-being", "Others"];
	for(i=1; i<=5; i++) {
		if(document.getElementById(i.toString()).checked == true) {
			arr[i-1]++;
			break;
		}
		if(i==5) {
			window.alert("Pick one! Why aren't you picking one??");
			isSensible=false;
		}
	}
	if(isSensible) {
		let sum=0;
		for(i=0; i<5; i++) sum+=arr[i];
		for(i=1; i<=5; i++) {
			var elem = (i*11).toString();
			document.getElementById(elem).innerHTML = changePercent(arr[i-1], sum)
		}
		var boxes = document.getElementsByClassName("box")
		for(i=0; i<5; i++) {
			boxes[i].className += " bestfriend";
		}
		var winners = winner(arr);
		document.getElementById("total").innerHTML = sum;
		for(i=1; i<winners.length; i++) {
			document.getElementById("winner").innerHTML += stressors[winners[i]];
		}
		document.getElementById("boop").className += "beetlejuice";
		document.getElementById("beep").className += "bestfriend";
	}
};
var changePercent = function(num, tot) {
	return Math.round((num*10000)/(tot))/100; // rounds off to 2 decimal places
};
var winner = function(arr) {
	//console.log("Winner called!\n");
	let newArr = [], brandNewArr = [];
	for(let i=0; i<arr.length; i++) {
		newArr.push([Number(arr[i]), Number(i)]);
	}
	//console.log("Going to sort!\n");
	newArr.sort(function(x, y){return x-y;});
	//console.log("Sorted! Biggest element is " + newArr[newArr.length-1][0] + "\n");
	while(newArr[0][0]!=newArr[newArr.length-1][0]) {
		newArr.shift();
	}
	brandNewArr.push(newArr[0][0]);
	for(let i=0; i<newArr.length; i++) {
		//console.log("Biggest is number " + newArr[i][1] + "\n");
		brandNewArr.push(newArr[i][1]);
		document.getElementById((newArr[i][1]*111).toString()).className += " winning";
	}
	return brandNewArr;
};
