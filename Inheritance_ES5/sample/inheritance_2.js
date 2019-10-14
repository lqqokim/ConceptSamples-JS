var dews = dews || {};
var kendo = { // kendo 객체
    ui: {
        DatePicker: {
            fn: {
                min: function () {

                },
                max: function () {

                },
                on: function () {

                },
                off: function () {

                },
                value: function() {

                }
            }
        }
    }
};

(function () {
    var DatePickerBase = function (kendoInstance) {
        this.kendoInstance = kendoInstance;
    };

    DatePickerBase.prototype.value = function(value) {
        return this.kendoInstance.value.call(this.kendoInstance, value);
    }

    DatePickerBase.prototype.min = function(val) {
        return this.kendoInstance.min.call(this.kendoInstance, val);
    }

    $.extend(true, dews, {
        ui: {
            DatePickerBase: DatePickerBase
        }
    });
})();

(function () {
    var DatePickerBase = dews.ui.DatePickerBase;

    var DatePicker = function () {

        // code ...

        var kendo = kendo.ui.DatePicker();
        DatePickerBase.call(this, kendo);
    };

    DatePicker.prototype = Object.create(DatePickerBase.prototype);
    DatePicker.prototype.constructor = DatePicker;

    DatePicker.prototype.value = function(value) {
        
    };

    $.extend(true, dews, {
        ui: {
            DatePicker: function () {

                return new DatePicker();
            }
        }
    });
})();

