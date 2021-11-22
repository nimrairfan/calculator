function removeval() {
    var input = document.getElementById("input")
    input.value = input.value.slice(0,-1)

}
function result(){
    var input = document.getElementById("input")
    var result = eval(input.value)
    input.value = result
}