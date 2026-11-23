__d(
  "WAFlowJSONComponentTypePerScreenValidatorV700",
  ["WAFlowJSONComponentTypePerScreenValidatorV500", "WAFlowJSONConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getMaxAllowedComponentCountPerScreen = function () {
          return o("WAFlowJSONConstants").SCREEN_COMPONENT_MAX_COUNT_V700;
        }),
        t
      );
    })(
      o("WAFlowJSONComponentTypePerScreenValidatorV500")
        .WAFlowJSONComponentTypePerScreenValidatorV500,
    );
    l.WAFlowJSONComponentTypePerScreenValidatorV700 = e;
  },
  98,
);
