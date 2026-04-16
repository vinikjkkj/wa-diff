__d(
  "WAWebWindowsScalingControlEventEmitter",
  ["WAWebTypedEventEmitter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.isHybridAppZoomingEnabled = !0),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        babelHelpers.inheritsLoose(t, e);
        var n = t.prototype;
        return (
          (n.setIsHybridAppZoomingEnabled = function (t) {
            this.isHybridAppZoomingEnabled = t;
          }),
          t
        );
      })(r("WAWebTypedEventEmitter")),
      s = new e(),
      u = s;
    l.default = u;
  },
  98,
);
