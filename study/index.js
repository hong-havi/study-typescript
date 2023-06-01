/**
 * 변수 :타입 지정관리
 * string, number, boolean, null, undefined, bigint, [], {} 등등
 **/
var Name = 'kim';
var Arr = ['kim', 'hong']; // array이지만 string 만 가능
var Obj = { name: 'king' }; //Object , ? : Optional
var Or = 'kim'; // string or number 유니온 타입
var MyName = "호호"; // 임의 타입으로 지정하여 사용가능
// 함수 타입지정
function func(val) {
    return val * 2;
}
var John = [123, true];
var Hong = { name: "Ho" };
