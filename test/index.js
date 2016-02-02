var test = require('tape'),
  cp = require('child_process')

test('node version', function (t) {
  t.plan(2)
  child = cp.exec('node main',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout)
    console.log('stderr: ' + stderr)
    t.equal(stderr, '')
    if (error !== null) {
      console.log('exec error: ' + error)
    }
    stdout = stdout.replace('\n','')
    t.equal(stdout, 'scott.wilkerson@hopeli.me')
  })
})
