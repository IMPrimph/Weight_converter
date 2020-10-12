document.getElementById('output').style.visibility = 'hidden'

document.getElementById('lbsInput').addEventListener('input', function(e){
    document.getElementById('output').style.visibility = 'visible'
    let lbs = e.target.value;
    document.getElementById('gramsOutput').innerHTML = (lbs/0.0022046).toFixed(2)
    document.getElementById('kilo_gramsOutput').innerHTML = (lbs/2.2046).toFixed(2)
    document.getElementById('ouncesOutput').innerHTML = (lbs * 16).toFixed(2)
})