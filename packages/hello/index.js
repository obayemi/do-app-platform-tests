function main(args) {
  let name = args.name || 'wodl ‽'
  let greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return {"body": greeting}
}
