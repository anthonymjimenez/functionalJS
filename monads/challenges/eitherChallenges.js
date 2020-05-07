 // Definitions
// ====================
const Right = x =>
({
 chain: f => f(x),
 map: f => Right(f(x)),
 fold: (f, g) => g(x),
 toString: () => `Right(${x})`
})

const Left = x =>
({
 chain: f => Left(x),
 map: f => Left(x),
 fold: (f, g) => f(x),
 toString: () => `Left(${x})`
})

const fromNullable = x =>
 x != null ? Right(x) : Left(null)

const tryCatch = f => {
 try {
   return Right(f())
 } catch(e) {
   return Left(e)
 }
}

const logIt = x => {
 console.log(x)
 return x
}

const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================


// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street = user => 
    fromNullable(user.address)
    .map(address => address.street)
    .fold(() => 'no street', x => x)
 


// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const streetName = user => 
 fromNullable(user.address)
    .map(address => address.street)
    .map(street => street.name)
    .fold(() => 'no street', x => x)


// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
const parseDbUrl = cfg => {
 try {
   const c = JSON.parse(cfg) // throws if it can't parse
   return c.url.match(DB_REGEX)
 } catch(e) {
    return null
 }
}



// Ex3: Using Either and the func  tions above, refactor startApp
// =========================
const startApp = cfg => {
 const parsed = parseDbUrl(cfg)

 if(parsed) {
   const [_, user, password, db] = parsed
   return `starting ${db}, ${user}, ${password}`
 } else {
   return "can't get config"
 }
}




QUnit.test("Ex3: startApp", assert => {
 const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
 assert.equal(String(startApp(config)), "starting mydb, sally, muppets")
 assert.equal(String(startApp()), "can't get config")
})