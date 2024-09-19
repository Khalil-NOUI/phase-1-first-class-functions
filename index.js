function callback () {
    return 'hello'
}

function receivesAFunction(callback) {
    return callback()
}


function returnsANamedFunction() {
    return function named() {
        console.log('hello')
    }
}

function returnsAnAnonymousFunction() {
    return (
        () => console.log('hello')
    )
}