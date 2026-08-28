__d(
  "RequestProcessorDefault",
  ["RequestProcessorBase"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.scheduleRequest = function (t, n) {
          this.runRequest(t, n);
        }),
        t
      );
    })(r("RequestProcessorBase"));
    l.default = e;
  },
  98,
);
