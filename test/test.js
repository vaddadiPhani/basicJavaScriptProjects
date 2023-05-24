// Currying in JavaScript

// Changing abc(a,b,c) into abc(a)(b)(c)

// Currying is nothing but a function with one argument returns one function experting there one more argument

// no .of argument == no .of nested Functions


function abc(a){
    function xyz(b)
    {
        function pqr(c)
        {
            console.log(a,b,c);
        }
        return pqr;
    }
    return xyz;
}

abc(10)(20)(30);


// this is only currying in javascript