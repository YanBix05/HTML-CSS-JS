function vote(){
    var name = document.getElementById("Name").value;
    var marks = 100 * Math.random();
    var res = document.getElementById("result").value;
    alert ("He has passed with"+ marks.toFixed(2));
    var resultMessage;

    if (marks>=0 && marks<= 35){
        resultMessage = name + "has fail with" +marks + "marks";
    }
    else if(marks>35 && marks<= 60){
        resultMessage = name + "has pass with" +marks + "marks";
    }
    else if(marks>60 && marks<= 80){
        resultMessage = name + "has pass with" +marks + "marks";
    }
    else if(marks>80 && marks<= 100){
        resultMessage = name + "has pass with" +marks + "marks";
    }

    res.innerHTML = resultMessage;
}
