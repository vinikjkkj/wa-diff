__d(
  "ReStoreIndexedDbClosedEvent",
  ["ReStoreEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(t, n) {
        var r;
        return ((r = e.call(this) || this), (r.idb = t), (r.error = n), r);
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.getError = function () {
          return this.error;
        }),
        t
      );
    })(r("ReStoreEvent"));
    l.default = e;
  },
  98,
);
