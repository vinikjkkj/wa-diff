__d(
  "RelayFBNetworkLoggerController",
  ["RelayAPIConfig"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e =
        n("RelayAPIConfig").enableNetworkLogger &&
        console.groupCollapsed != null,
      l = e && n("RelayAPIConfig").enableVerboseNetworkLogger,
      s = [],
      u = [];
    typeof document == "undefined"
      ? typeof window != "undefined" &&
        ((window.RelayFBNetworkLoggerController = this),
        e ||
          c(
            "RelayFBNetworkLoggerController.enableLogging(/*true for verbose*/)",
          ))
      : e ||
        c(
          "require('RelayFBNetworkLoggerController').enableLogging(/*true for verbose*/);",
        );
    function c(e) {
      var n;
      ((n = t) == null || (n = n.process) == null || (n = n.env) == null
        ? void 0
        : n.NODE_ENV) == null && "" + e;
    }
    function d() {
      return e;
    }
    function m(t) {
      (t === void 0 && (t = !1),
        console.groupCollapsed != null && ((e = !0), t && (l = !0)));
    }
    function p() {
      e = !1;
    }
    function _() {
      return u;
    }
    function f() {
      for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      if ((u.push([].concat(s, n)), u.length > 1e3 && u.shift(), e)) {
        var o;
        (o = console).log.apply(o, n);
      }
    }
    function g(t, n, r) {
      r === void 0 && (r = !1);
      var o = r && !l,
        a = e && !o;
      if (a) {
        (s.push(t), console.groupCollapsed(t));
        try {
          n();
        } finally {
          (s.pop(), console.groupEnd());
        }
      }
    }
    a.exports = {
      disableLogging: p,
      dumpLogs: _,
      enableLogging: m,
      isEnabled: d,
      log: f,
      logGroup: g,
    };
  },
  null,
);
