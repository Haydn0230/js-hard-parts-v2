// CHALLENGE 1
function createFunction() {
    return function myFunc() {console.log('hello')}
    }
    
    // /*** Uncomment these to check your work! ***/
    const function1 = createFunction();
    function1(); // => should console.log('hello');
    
    
    // CHALLENGE 2
    function createFunctionPrinter(input) {
      const i = input
    return function myFunc() {console.log(i)}
    }
    
    // /*** Uncomment these to check your work! ***/
    // const printSample = createFunctionPrinter('sample');
    // printSample(); // => should console.log('sample');
    // const printHello = createFunctionPrinter('hello');
    // printHello(); // => should console.log('hello');
    
    
    // CHALLENGE 3
    function outer() {
      let counter = 0; // this variable is outside incrementCounter's scope
      function incrementCounter () {
        counter ++;
        console.log('counter', counter);
      }
      return incrementCounter;
    }
    
    const willCounter = outer();
    const jasCounter = outer();
    
    // Uncomment each of these lines one by one.
    // Before your do, guess what will be logged from each function call.
    
    // /*** Uncomment these to check your work! ***/
    // willCounter();//1
    // willCounter();//2
    // willCounter();//3
    
    // jasCounter();//1
    // willCounter();//4
    
    
    function addByX(x) {
    let incrmenet = x
    return function addnum(num) {
      num += incrmenet
      console.log(num, x)
      return num
    }
    }
    
    // /*** Uncomment these to check your work! ***/
    const addByTwo = addByX(2);
    // addByTwo(1); // => should return 3
    // addByTwo(2); // => should return 4
    // addByTwo(3); // => should return 5
    
    const addByThree = addByX(3);
    // addByThree(1); // => should return 4
    // addByThree(2); // => should return 5
    
    const addByFour = addByX(4);
    // addByFour(4); // => should return 8
    // addByFour(5); // => should return 9
    
    
    // CHALLENGE 4
    function once(func) {
      const funcToCall = func
      let output = ''
      return function callIt(num){
        console.log(output)
        if (output) {
    
          return output
        }
    
        output = funcToCall(num)
        return output
      }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const onceFunc = once(addByTwo);
    // console.log(onceFunc(4));  // => should log 6
    // console.log(onceFunc(10));  // => should log 6
    // console.log(onceFunc(9001));  // => should log 6
    
    
    // CHALLENGE 5
    function after(count, func) {
      let counter = 0
        const numToCall = count
      const funcToCall = func
      return function checkCalls(){
        if (numToCall === counter) {
          funcToCall()
        }
      }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const called = function() { console.log('hello') };
    const afterCalled = after(3, called);
    // afterCalled(); // => nothing is printed
    // afterCalled(); // => nothing is printed
    // afterCalled(); // => 'hello' is printed
    
    
    // CHALLENGE 6
    function delay(func, wait) {
    return setTimeout(func, wait)
    }
    
    
    // CHALLENGE 7
    function rollCall(names) {
    const namesToCall = names
    let counter = 0
    return function CallNames(){
      if (namesToCall.length <= counter) {
        console.log('Everyones accounted for')
        return
      }
      console.log(namesToCall[counter])
      counter ++
    }
    }
    
    // /*** Uncomment these to check your work! ***/
    const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
    // rollCaller() // => should log 'Victoria'
    // rollCaller() // => should log 'Juan'
    // rollCaller() // => should log 'Ruth'
    // rollCaller() // => should log 'Everyone accounted for'
    
    
    // CHALLENGE 8
    function saveOutput(func, magicWord) {
    const funcToCall = func
    const password = magicWord
    let output = {}
        return function(passwordAttempt) {
        if (password === passwordAttempt) {
          return output
        }
        const answer = funcToCall(passwordAttempt)
        output[passwordAttempt] = answer
        return answer
      }
    }
    
    // /*** Uncomment these to check your work! ***/
    const multiplyBy2 = function(num) { return num * 2; };
    const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
    // console.log(multBy2AndLog(2)); // => should log 4
    // console.log(multBy2AndLog(9)); // => should log 18
    // console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }
    
    
    // CHALLENGE 9
    function cycleIterator(array) {
    const arrayToCycle = array
    let counter = 0
    return function cycleArray(){
      if (arrayToCycle.length <= counter) {
        counter = 0
      }
      let value = arrayToCycle[counter]
      counter ++
      return value
    }
    }
    
    // /*** Uncomment these to check your work! ***/
    const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
    const getDay = cycleIterator(threeDayWeekend);
    // console.log(getDay()); // => should log 'Fri'
    // console.log(getDay()); // => should log 'Sat'
    // console.log(getDay()); // => should log 'Sun'
    // console.log(getDay()); // => should log 'Fri'
    
    
    // CHALLENGE 10
    function defineFirstArg(func, arg) {
    const storedFunc = func
    const storedArg = arg
    
    return function returnFunc(newArg) {
      return storedFunc(storedArg, newArg)
    }
    }
    
    // /*** Uncomment these to check your work! ***/
    const subtract = function(big, small) { return big - small; };
    const subFrom20 = defineFirstArg(subtract, 20);
    console.log(subFrom20(5)); // => should log 15
    
    
    // CHALLENGE 11
    function dateStamp(func) {
      const funcToCall = func
      return function returnedFunc(x) {
        const d = new Date
        return {
          data: d.toISOString(),
          output: funcToCall(x)
        }
      }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const stampedMultBy2 = dateStamp(n => n * 2);
    // console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
    // console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }
    
    
    // CHALLENGE 12
    function censor() {
    const storedStrings = []
    
    return function returnedFunc(stringOne, stringTwo) {
    console.log(storedStrings)
          if (stringTwo) {
          storedStrings.push({stringOne, stringTwo})
            return
        }
          for (let i=0; i<storedStrings.length; i ++){
          stringOne = stringOne.replace(storedStrings[i].stringOne, storedStrings[i].stringTwo)
        }
    
          return stringOne
        }
    }
    
    // /*** Uncomment these to check your work! ***/
    const changeScene = censor();
    // changeScene('dogs', 'cats');
    // changeScene('quick', 'slow');
    // console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'
    
    
    // CHALLENGE 13
    function createSecretHolder(secret) {
        let s = secret
        return {
          getSecret: function getSecret() {return s},
          setSecret: function setSecret(x) {s = x}
        }
    }
    
    // /*** Uncomment these to check your work! ***/
    const obj = createSecretHolder(5)
    // console.log(obj.getSecret()) // => returns 5
    // obj.setSecret(2)
    // console.log(obj.getSecret()) // => returns 2
    
    
    // CHALLENGE 14
    function callTimes() {
    let timesCalled = 0
    
    return function incrementCall(){
      timesCalled ++
      console.log(timesCalled)
    }
    }
    
    // /*** Uncomment these to check your work! ***/
    let myNewFunc1 = callTimes();
    let myNewFunc2 = callTimes();
    // myNewFunc1(); // => 1
    // myNewFunc1(); // => 2
    // myNewFunc2(); // => 1
    // myNewFunc2(); // => 2
    
    
    // CHALLENGE 15
    function russianRoulette(num) {
        let n = num
      let counter = 1
      return function(){
        if (n ===0) {
          return 'reload to play again'
        }
    
    
        if (n ===counter ){
          n = 0
          counter = 0
          return 'bang'
        }
    
    
        counter ++
    
        return 'click'
      }
    
    }
    
    // /*** Uncomment these to check your work! ***/
    const play = russianRoulette(3);
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'click'
    // console.log(play()); // => should log 'bang'
    // console.log(play()); // => should log 'reload to play again'
    // console.log(play()); // => should log 'reload to play again'
    
    
    // CHALLENGE 16
    function average() {
    const numHistory = []
        return function Avg(x) {
        if (numHistory.length === 0 && !x){
          return 0
        }
    
        if (x) {
          numHistory.push(x)
        }
    
        let total = 0
        numHistory.forEach(number => total += number )
    
        return total/numHistory.length
      }
    }
    
    // /*** Uncomment these to check your work! ***/
    const avgSoFar = average();
    // console.log(avgSoFar()); // => should log 0
    // console.log(avgSoFar(4)); // => should log 4
    // console.log(avgSoFar(8)); // => should log 6
    // console.log(avgSoFar()); // => should log 6
    // console.log(avgSoFar(12)); // => should log 8
    // console.log(avgSoFar()); // => should log 8
    
    
    // CHALLENGE 17
    function makeFuncTester(arrOfTests) {
      const testCases= arrOfTests
    
      return function Test(func) {
        let testPassed = true
        testCases.forEach((tc) => {
          const str1 = func(tc[0])
          const str2 = func(tc[1])
          if (str1 !== str2) {
            testPassed = false
          }
        })
    
          return testPassed
      }
    }
    
    // /*** Uncomment these to check your work! ***/
    const capLastTestCases = [];
    capLastTestCases.push(['hello', 'hellO']);
    capLastTestCases.push(['goodbye', 'goodbyE']);
    capLastTestCases.push(['howdy', 'howdY']);
    const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
    const capLastAttempt1 = str => str.toUpperCase();
    const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
    console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
    console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true
    
    
    // CHALLENGE 18
    function makeHistory(limit) {
      const history = []
      const maxActions = limit
        let lastAction = ''
      let counter = 1
      return function modifyHistory(word) {
    
    
        if (word ==='undo' && history.length === 0
            || lastAction === word && maxActions === counter) {
            return 'nothing to undo'
        }
    
            if (lastAction === word) { counter ++}
        lastAction = word
        if (word ==='undo') { return `${history.pop()} undone`}
        history.push(word)
    
        return `${word} done`
      }
    }
    
    // /*** Uncomment these to check your work! ***/
    const myActions = makeHistory(2);
    console.log(myActions('jump')); // => should log 'jump done'
    console.log(myActions('undo')); // => should log 'jump undone'
    console.log(myActions('walk')); // => should log 'walk done'
    console.log(myActions('code')); // => should log 'code done'
    console.log(myActions('pose')); // => should log 'pose done'
    console.log(myActions('undo')); // => should log 'pose undone'
    console.log(myActions('undo')); // => should log 'code undone'
    console.log(myActions('undo')); // => should log 'nothing to undo'
    
    
    // CHALLENGE 19
    function blackjack(array) {
    
    }
    
    // /*** Uncomment these to check your work! ***/
    
    // /*** DEALER ***/
    // const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
    
    // /*** PLAYER 1 ***/
    // const i_like_to_live_dangerously = deal(4, 5);
    // console.log(i_like_to_live_dangerously()); // => should log 9
    // console.log(i_like_to_live_dangerously()); // => should log 11
    // console.log(i_like_to_live_dangerously()); // => should log 17
    // console.log(i_like_to_live_dangerously()); // => should log 18
    // console.log(i_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    // console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
    
    // /*** BELOW LINES ARE FOR THE BONUS ***/
    
    // /*** PLAYER 2 ***/
    // const i_TOO_like_to_live_dangerously = deal(2, 2);
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 4
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 15
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 19
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
    
    // /*** PLAYER 3 ***/
    // const i_ALSO_like_to_live_dangerously = deal(3, 7);
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    // console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
    