/**
 * 변수 :타입 지정관리
 * string, number, boolean, null, undefined, bigint, [], {} 등등
 **/ 
let Name :string = 'kim'

let Arr :string[] = ['kim','hong'] // array이지만 string 만 가능

let Obj :{ name? : string } = { name: 'king' } //Object , ? : Optional

let Or :string | number = 'kim' // string or number 유니온 타입

type Mytype = string | number // 타입 선 지정

let MyName :Mytype = "호호" // 임의 타입으로 지정하여 사용가능


// 함수 타입지정
function func( val :number ) :number 
{
    return val * 2;
}


type Member = [number, boolean]; //tuple타입 첫번째는 무조건 number, 둘째는 boolean
let John :Member = [123, true];


type User = {
    [key : string] : string, //모든 속성을 string 으로 지정한다
    name : string
}

let Hong :User = { name :"Ho" }


class Users{
    Name :string; //미리 변수 선언
    constructor(Name :string){
        this.Name = Name;
    }
}