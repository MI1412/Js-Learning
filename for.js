let b = '';
for(let i = 10; i > 0; i-- ) {
    for( let j = 0; j < i; j++ ) {
        b += 'helloWorld!';
    }
    b += '\n'
}
console.log(b);