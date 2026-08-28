__d(
  "ContextualLayerAutoFlipBluetip",
  ["ContextualLayerAutoFlip"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t() {
        return e.apply(this, arguments) || this;
      }
      babelHelpers.inheritsLoose(t, e);
      var n = t.prototype;
      return (
        (n.__setBestPosition = function (t, n, r) {
          t >= 0 ? n.setPosition(r[t]) : n.setPosition(r[0]);
        }),
        t
      );
    })(r("ContextualLayerAutoFlip"));
    l.default = e;
  },
  98,
);
