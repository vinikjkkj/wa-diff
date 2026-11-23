__d(
  "WAFlowJSONValidatorChainV700",
  [
    "WAFlowJSONComponentTypePerScreenValidatorV500",
    "WAFlowJSONComponentTypePerScreenValidatorV700",
    "WAFlowJSONFormComponentAttributesValidatorV700",
    "WAFlowJSONValidatorChainV603",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var a;
        ((a = e.call(this, t, n, r) || this),
          (a.validators = a.getValidatorChainV700Updates(a.validators)));
        var i = new (o(
          "WAFlowJSONFormComponentAttributesValidatorV700",
        ).WAFlowJSONFormComponentAttributesValidatorV700)(t);
        a.validators.push(i);
        var l = new (o(
          "WAFlowJSONComponentTypePerScreenValidatorV700",
        ).WAFlowJSONComponentTypePerScreenValidatorV700)(t);
        return (a.validators.push(l), a);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getValidatorChainV700Updates = function (t) {
          return t.filter(function (e) {
            return !(
              e instanceof
              o("WAFlowJSONComponentTypePerScreenValidatorV500")
                .WAFlowJSONComponentTypePerScreenValidatorV500
            );
          });
        }),
        t
      );
    })(o("WAFlowJSONValidatorChainV603").WAFlowJSONValidatorChainV603);
    l.WAFlowJSONValidatorChainV700 = e;
  },
  98,
);
