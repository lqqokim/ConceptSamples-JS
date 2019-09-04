## 자바스크립트 ES5에서 Class생성과 상속


### __기본구조__
```js
var global = global || {};

(function () {
    var DatePickerBase = function () {
        console.log('DatePickerBase Constructor');
    };

    DatePickerBase.prototype.parentFunction = function() {
        console.log('DatePickerBase parentfunction');
    }

    $.extend(true, global, {
        ui: {
            DatePickerBase: DatePickerBase
        }
    });
})();

(function () {
    var Datepicker = function () {
        DatePickerBase.call(this);

        console.log('Datepicker Constructor');
    };

    var DatePickerBase = global.ui.DatePickerBase;

    Datepicker.prototype = Object.create(DatePickerBase);
    Datepicker.prototype.constructor = Datepicker;

    Datepicker.prototype.parentFunction = function() {

        // ...

        DatePickerBase.prototype.parentFunction.call(this);
    }

    var test = new Datepicker();
    test.parentFunction();

    $.extend(true, global, {
        ui: {
            Datepicker: function() {

                // ...

                return new Datepicker();
            }
        }
    })
})();

```
- 즉시실행으로 분리되어 독룁된 스코프를 가진 DatePickerBase 클래스를 DatePicker 클래스가 상속하여 상위 함수에 접근 또는 확장하려고 한다.
- 전역변수인 global을 통하여 DatePickerBase 클래스 객체에 접근가능.
- `Datepicker.prototype = Object.create(DatePickerBase);` 통해 Datepicker 객체는 DatePickerBase 객체를 프로토타입으로 생성하여 부모 클라스(DatePickerBase)의 함수를 모두 가져올 수 있다.

### __클래스 생성__
```js
    var DatePickerBase = function () {
        console.log('DatePickerBase Constructor');
    };

    DatePickerBase.prototype.parentFunction = function() {
        console.log('DatePickerBase parentfunction');
    }

    var instance = new DatePickerBase();
    instance.parentFunction(); //log: DatePickerBase parentfunction
```

- 먼저 생성자를 만든 후 함수를 선언하게 되는데, 이때 클래스가 가지는 모든 함수들은 prototype에 선언되어야 한다.
- 클래스로 인스턴스는 생성하기 위해서는 `new`를 사용한다.

### __클래스 상속__
```js
    var Datepicker = function () {
        DatePickerBase.call(this);

        console.log('Datepicker Constructor');
    };

    var DatePickerBase = global.ui.DatePickerBase;

    Datepicker.prototype = Object.create(DatePickerBase);
    Datepicker.prototype.constructor = Datepicker;

    Datepicker.prototype.parentFunction = function() {

        // ...

        DatePickerBase.prototype.parentFunction.call(this);
    }

    var test = new Datepicker();
    test.parentFunction();
```
- `DatePickerBase.prototype.parentFunction.call(this);` 통해 클래스의 함수를 호출하여 확장할 수 있다.

### __참조__
- https://mygumi.tistory.com/322
- https://www.a-mean-blog.com/ko/blog/토막글/_/자바스크립트-ES5에서-Class의-생성과-상속