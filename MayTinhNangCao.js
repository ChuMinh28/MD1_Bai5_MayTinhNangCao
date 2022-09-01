function number(a){
    document.getElementById('hienthi').value+=a
}
function reset() {
    document.getElementById('hienthi').value=''
}
function ketQua() {
    let input =document.getElementById('hienthi').value;
    let ketQua = eval(input)
    document.getElementById('hienthi').value =ketQua
}
function canBac2() {
    let sqrt=Math.sqrt(+document.getElementById('hienthi').value);
    document.getElementById('hienthi').value=sqrt
}
function binhPhuong(){
    let a = document.getElementById('hienthi').value;
    let bphuong=Math.pow(a,2)
    document.getElementById('hienthi').value=bphuong
}
function lapPhuong(){
    let b = document.getElementById('hienthi').value;
    let lphuong = Math.pow(b,3)
    document.getElementById('hienthi').value=lphuong
}
function sinCos(){
    let c = document.getElementById('hienthi').value;
    let sin = Math.sin(c*Math.PI/180)
    document.getElementById('hienthi').value=sin
}