__d(
  "WAFlowJSONConditionalRenderingValidatorV600",
  [
    "WAFlowJSONConditionalRenderingValidatorV500",
    "WAFlowsDynamicDataUtils",
    "WAFlowsTypeGuards",
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
        (n.shouldValidateCondition = function (t, n) {
          return (
            (o("WAFlowsTypeGuards").isString(t) && n < 600) ||
            (n >= 600 &&
              !o("WAFlowsDynamicDataUtils").isNestedExpressionValue(t))
          );
        }),
        t
      );
    })(
      o("WAFlowJSONConditionalRenderingValidatorV500")
        .WAFlowJSONConditionalRenderingValidatorV500,
    );
    l.WAFlowJSONConditionalRenderingValidatorV600 = e;
  },
  98,
);
