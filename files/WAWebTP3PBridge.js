__d(
  "WAWebTP3PBridge",
  ["WAWebFile3PSitevarConfig", "WAWebTP3PBridgeBase", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function (e) {
      function t(n, r, o) {
        return (
          r === void 0 && (r = t.getDefaultApp()),
          e.call(this, n, o != null ? o : r.origin, r.topLevelOrigin) || this
        );
      }
      return (
        babelHelpers.inheritsLoose(t, e),
        (t.getDefaultApp = function () {
          var e = r("WAWebFile3PSitevarConfig")["application/pdf"];
          if (e.length === 0) throw r("err")("No allowed PDF apps configured");
          return e[0];
        }),
        t
      );
    })(o("WAWebTP3PBridgeBase").WAWebTP3PBridgeBase);
    l.WAWebTP3PBridge = e;
  },
  98,
);
