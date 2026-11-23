__d(
  "WAFlowJSONValidatorChainV502",
  [
    "WAFlowJSONCartScreenValidatorV502",
    "WAFlowJSONRoutingModelShoppingScreensPathValidatorV502",
    "WAFlowJSONValidatorChain",
    "WAFlowJSONValidatorChainV501",
    "WAShoppingFlowJSONScreenExternalDataValidatorV502",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n, r) {
        var a,
          i,
          l = new (o(
            "WAFlowJSONValidatorChainV501",
          ).WAFlowJSONValidatorChainV501)(t, n, r);
        i = e.call(this, t, n, r) || this;
        var s = new (o(
            "WAShoppingFlowJSONScreenExternalDataValidatorV502",
          ).WAShoppingFlowJSONScreenExternalDataValidatorV502)(t, n, r),
          u = new (o(
            "WAFlowJSONRoutingModelShoppingScreensPathValidatorV502",
          ).WAFlowJSONRoutingModelShoppingScreensPathValidatorV502)(t),
          c = new (o(
            "WAFlowJSONCartScreenValidatorV502",
          ).WAFlowJSONCartScreenValidatorV502)(t);
        return (
          (a = i.validators).push.apply(a, l.validators.concat([s, u, c])),
          i
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAFlowJSONValidatorChain").WAFlowJSONValidatorChain);
    l.WAFlowJSONValidatorChainV502 = e;
  },
  98,
);
