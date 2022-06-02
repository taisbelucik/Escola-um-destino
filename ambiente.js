function ver(){
var img = document.getElementById('imagem')
var res = document.getElementById('res')
var esc = document.getElementsByName('radp')
var dest = ''
 
if(esc[0].checked){
img.src = 'praia.jpg'  
document.body.style.background = 'rgb(59, 223, 223)'  
dest = 'Ilhas Maldivas'
}else if( esc[1].checked){
img.src = 'montanhas.jpg'
document.body.style.background = 'rgb(217, 241, 63)'
dest = 'Montanhas na Suíça'
}else{
img.src = 'cidade.jpg'
document.body.style.background= 'rgb(70, 73, 242)'
dest = 'Cidade de Osasco - SP'
}

 res.innerHTML = `${dest} é um ótimo destino. Boa viagem`

}
