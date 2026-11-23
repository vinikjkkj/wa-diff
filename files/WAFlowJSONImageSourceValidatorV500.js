__d(
  "WAFlowJSONImageSourceValidatorV500",
  [
    "WAFlowJSONBaseValidator",
    "WAFlowJSONConstants",
    "WAFlowJSONValidationError",
    "WAFlowJSONValidationResultUtil",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this,
            t = [],
            n = [];
          return (
            this.flowJSONData.screenData.forEach(function (t) {
              var a = t.data.id;
              e.flowJSONData
                .getComponentDataByType(
                  a,
                  o("WAFlowJSONConstants").WA_FLOW_JSON_COMPONENT_TYPE.IMAGE,
                )
                .forEach(function (e) {
                  var t = r("unsafeCast")(e.component);
                  !o("WAFlowJSONValidationResultUtil").isDynamicDataBindingV400(
                    t.src,
                  ) &&
                    !s(t.src) &&
                    n.push(e.jsonPointer + "/src");
                });
            }),
            n.length > 0 &&
              t.push(
                this.getError(
                  o(
                    "WAFlowJSONValidationError",
                  ).WA_FLOW_JSON_VALIDATION_ERROR_MESSAGE.getInvalidImageSourceErrorMsg(),
                  n,
                  o("WAFlowJSONValidationError")
                    .WA_FLOW_JSON_VALIDATION_ERROR_CODE.INVALID_PROPERTY_VALUE,
                ),
              ),
            t
          );
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    function s(e) {
      try {
        return (atob(e), !0);
      } catch (e) {
        return !1;
      }
    }
    ((l.WAFlowJSONImageSourceValidatorV500 = e), (l.isValidBase64 = s));
  },
  98,
);
