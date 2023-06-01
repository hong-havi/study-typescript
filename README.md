# study-typescript
study-typescript

### typescript 적역 적용
```bash
$ npm i -g typescript
```

### tsconfig.json 추가
``` json
{
    "compilerOptions": {
        "target" : "es5", // javascript 언제적 버전으로 변환할지 ex) esnext 최신버전
        "module" : "CommonJS" // 언제적 문법으로 변환할지
    }
}
```

### js 파일 컴파일
- tsconfig.json 을 참고하여 컴파일함
```bash
$ tsc -w
```