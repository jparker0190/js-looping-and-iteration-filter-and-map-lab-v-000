// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  var arry = driver.filter(function(num){
    return num.revenue > revenue
  })
  return arry
}
function driverNamesWithRevenueOver(driver, revenue){
  var arry = driversWithRevenueOver(driver, revenue)
  var art = arry.map(function(num){
    return num.name
  })
  return art
}
function exactMatch(driver, object){
  return driver.filter(function(num){
    console.log(object)
  })
}
