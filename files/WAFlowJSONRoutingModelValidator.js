__d(
  "WAFlowJSONRoutingModelValidator",
  ["invariant", "WAFlowJSONBaseValidator", "WAFlowJSONVersionUtils"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.validate = function () {
          var e = this.flowJSONData.flowJson,
            t = o("WAFlowJSONVersionUtils").getFlowJSONVersionInternal(
              e.version,
            );
          return (
            t != null || s(0, 79298),
            e.routing_model
              ? this.validateDataChannel()
              : this.validateDataChannelLess()
          );
        }),
        (n.validateDataChannel = function () {
          s(0, 79641);
        }),
        (n.validateDataChannelLess = function () {
          return [];
        }),
        (n.getEntryScreenIds = function () {
          return [];
        }),
        t
      );
    })(o("WAFlowJSONBaseValidator").WAFlowJSONBaseValidator);
    l.WAFlowJSONRoutingModelValidator = e;
  },
  98,
);
