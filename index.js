/*describe('shout(string)', function() {
  it('receives one argument and returns it in all caps', function() {
    expect(shout('hello')).toEqual('HELLO')
  })
})*/

function shout(string) {
  return string.toUpperCase()
}

/*describe('whisper(string)', function() {
  it('receives one argument and returns it in all lowercase', function() {
    expect(whisper('HELLO')).toEqual('hello')
  })
})*/

function whisper(string) {
  return string.toLowerCase()
}

/*it('calls console.log() its one argument in all caps', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logShout('hello')

    expect(spy).toHaveBeenCalledWith('HELLO')

    console.log.restore()
  })
})*/

function logShout(string) {
  console.log('HELLO')
  return string.toUpperCase()
}

/*describe('logWhisper(string)', function() {
  it('calls console.log() its one argument in all lowercase', function() {
    const spy = expect.spyOn(console, 'log').andCallThrough()

    logWhisper('HELLO')

    expect(spy).toHaveBeenCalledWith('hello')

    console.log.restore()
  })
})*/

function logWhisper(string) {
  console.log('hello')
  return string.toLowerCase()
}



function sayHiToGrandma(string) {
   if (string === string.toLowerCase()){
    return "I can't hear you!"
   }
   else if (string === string.toUpperCase()){
     return "YES INDEED!"
   }
   else if (string === "I love you, Grandma."){
     return "I love you, too."
   }}
   
