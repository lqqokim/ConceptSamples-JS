var dews = dews || {};

(function () {
    var DatePickerBase = function () {
        console.log('DatePickerBase Constructor');
    };

    DatePickerBase.prototype.parentFunction = function() {
        console.log('DatePickerBase parentfunction');
    }

    $.extend(true, dews, {
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

    var DatePickerBase = dews.ui.DatePickerBase;

    Datepicker.prototype = Object.create(DatePickerBase.prototype);
    Datepicker.prototype.constructor = Datepicker; //상위로 값을 넘기기 위해

    Datepicker.prototype.parentFunction = function() {
        DatePickerBase.prototype.parentFunction.call(this);
    }

    var test = new Datepicker();
    test.parentFunction();

    $.extend(true, dews, {
        ui: {
            Datepicker: function() {
                console.log(1)
                // ...

                return new Datepicker();
            }
        }
    })
})();
