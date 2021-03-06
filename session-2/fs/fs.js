const fs = require('fs')

// fs.unlink('test/file1.txt', (err) => {
//   if (err) throw err
//   console.log('successfully deleted ./test/file1.txt')
// })

// fs.rename('/tmp/hello', '/tmp/world', (err) => {
//   if (err) throw err
//   console.log('renamed complete')
// })

// fs.stat('/tmp/world', (err, stats) => {
//   if (err) throw err
//   console.log(`stats: ${JSON.stringify(stats)}`)
// })

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err
//   console.log('Saved!')
// })

// fs.open('mynewfile2.txt', 'w', function (err, file) {
//   if (err) throw err
//   console.log('Saved!')
// })

// fs.readFile('demofile1.html', function (err, data) {
//   if (err) {
//     throw Error('What?!')
//   }
//   console.log(data)
// })

const http = require('http')
http.createServer(function (req, res) {
  fs.readFile('test/main.html', function (err, data) {
    if (err) {
      throw Error('Really?!')
    }
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
}).listen(5000)
