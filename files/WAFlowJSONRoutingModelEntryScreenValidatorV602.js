__d(
  "WAFlowJSONRoutingModelEntryScreenValidatorV602",
  ["WAFlowJSONRoutingModelEntryScreenValidatorV500"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validateDataChannelLess = function () {
          var t,
            n =
              ((t = this.flowJSONData.getNavigationListScreens()) == null
                ? void 0
                : t.size) > 0;
          return n ? [] : e.prototype.validateDataChannelLess.call(this);
        }),
        t
      );
    })(
      o("WAFlowJSONRoutingModelEntryScreenValidatorV500")
        .WAFlowJSONRoutingModelEntryScreenValidatorV500,
    );
    l.WAFlowJSONRoutingModelEntryScreenValidatorV602 = e;
  },
  98,
);
