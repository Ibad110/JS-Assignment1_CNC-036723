

    var a = 2, b = 1;

    document.write("a = "+ a +"<br><br>");
    document.write("b = "+ b + "<br><br>");

    var c = --a - --b + ++b + b--;
    /* 
    Here are variables after decrement and increment 
              --a = 1,
              --b = 0,
              ++b = 2,
              b-- = 0,
        So,
                 Result is 1 - 0 + 2 + 0 = 3 
    */
    document.write('Given Equation: "--a  -  --b  +  ++b  +  b--" <br>')
    document.write('The Result for given equation is  = '+c);