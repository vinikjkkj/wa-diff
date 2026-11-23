__d(
  "WAFlowJSONDatePickerValidatorV500",
  [
    "WAFlowJSONConstants",
    "WAFlowJSONDateValidatorV500",
    "WAFlowJSONValidationError",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.getComponentBodyErrors = function (e, n) {
            var r = [],
              a = t.getDateFieldValue(e, "init-value");
            if (a != null) {
              var i = n.jsonPointer + "/init-value";
              if (!t.isValidDateFormat(a))
                r.push(
                  t.getError(
                    o(
                      "WAFlowJSONValidationError",
                    ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidDateFormatErrorMsg(
                      t.DATE_FORMAT_WEB,
                    ),
                    i,
                    o("WAFlowJSONValidationError")
                      .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DATE_RANGE,
                  ),
                );
              else {
                var l = t.getMinDateObj(e),
                  s = t.getMaxDateObj(e),
                  u = t.getDateTime(a);
                u != null &&
                  (u < l.value || u > s.value) &&
                  r.push(
                    t.getError(
                      o(
                        "WAFlowJSONValidationError",
                      ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getDateNotInRangeErrorMsg(
                        n.component.type,
                        o("WAFlowJSONDateValidatorV500").DATE_PROPS.INIT_VALUE,
                        l.str,
                        s.str,
                      ),
                      i,
                      o("WAFlowJSONValidationError")
                        .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_DATE_RANGE,
                    ),
                  );
              }
            }
            return r;
          }),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          return e.prototype.validate.call(
            this,
            o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.DATE_PICKER,
            this.getComponentBodyErrors,
          );
        }),
        t
      );
    })(o("WAFlowJSONDateValidatorV500").WAFlowJSONDateValidatorV500);
    l.WAFlowJSONDatePickerValidatorV500 = e;
  },
  98,
);
