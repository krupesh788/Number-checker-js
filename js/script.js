function check(){

    let num = parseInt(document.getElementById("num").value);


        if(num > 0){

            p1 = `The number ${num} is positive`;


        }
        else if(num  == 0){

            p1 = `The number ${num} is zero`;


        }
        else{

            p1 = `The number ${num} is negative`;

        }

        
        document.getElementById("p1").innerHTML = p1; 
    }

