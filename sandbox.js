var arrowFunction = () => {
  console.log('I was called')
}

var regularFunction = function(){
  console.log('I was called too!')
}

arrowFunction //I was called
regularFunction //I was called too!

[1,2,3,4].map(n => n * n).reduce((sum, n) => (sum + n), 0) //30