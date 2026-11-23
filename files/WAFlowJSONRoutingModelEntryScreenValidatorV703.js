__d(
  "WAFlowJSONRoutingModelEntryScreenValidatorV703",
  ["WAFlowJSONRoutingModelEntryScreenValidatorV602"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getEntryScreenIds = function () {
          return this.flowJSONData.getEntryScreenIdsWithNaviagteActionIncluded();
        }),
        t
      );
    })(
      o("WAFlowJSONRoutingModelEntryScreenValidatorV602")
        .WAFlowJSONRoutingModelEntryScreenValidatorV602,
    );
    l.WAFlowJSONRoutingModelEntryScreenValidatorV703 = e;
  },
  98,
);
