const driver = {}
// this function should take in three arguments: a driver Object, a key and a value. 
// This function should not mutate the driver and should return a new driver that has an updated value for the key passed in.
function updateDriverWithKeyAndValue(driver, key, val) {
  const newObj = Object.assign({}, driver)
  newObj[key] = val
  return newObj
}


// this function should work the same as updateDriverWithKeyAndValue() but it should mutate the driver parameter passed in.
function destructivelyUpdateDriverWithKeyAndValue(driver, key, val) {
  return Object.assign(driver, {[key]: val})
}


// this function should take in a driver Object and a key. 
// It should delete the key/value pair for the key that was passed in from the driver Object. 
// This should all not actually mutate the driver passed in.
function deleteFromDriverByKey(driver, key) {
  let newDriver = Object.assign({}, driver)
  delete newDriver[key]
  return newDriver
}


// this function should work the same as deleteFromDriverByKey() but it should mutate the driver passed in. 
// Be sure and consider whether dot-notation or bracket-notation might affect your solution.
function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}