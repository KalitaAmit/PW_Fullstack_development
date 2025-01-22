// if we are not initializing the functon with first keyword name as " function " is call function expression

function fun() {  //  functon declaration because first keyword is function
    //  some impl
}

let f = function gun() {  //  this is called named function expression because first thing is "let" here not function. name of the function is gun()
        //  some impl
}

let a = function() {  //  this is called anonymus function expression because first thing is "let" here not function
    //  okk some more impl
}

    (function x() {  //  this is called anonymus function expression because first thing is " ( "
    //  can you stop it?
})

    (function () {  //  this is called anonymus function expression because first thing is " ( "
    //  i am done
})

let y = () => {  //  this is call function expression because first thing is "let" here not function

}