__d(
  "WAWebWindowsHybridBridgeJsonEvents",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, r) {
      var a = u(n),
        i = a == null ? null : r(a);
      return (
        i == null &&
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[hybrid-bridge] dropped a malformed ",
                " payload",
              ])),
            t,
          ),
        i
      );
    }
    function u(e) {
      var t = typeof e == "string" || e instanceof String ? String(e) : null;
      if (t == null) return null;
      var n;
      try {
        n = JSON.parse(t);
      } catch (e) {
        return null;
      }
      return typeof n == "object" && n != null && !Array.isArray(n) ? n : null;
    }
    l.parseHybridBridgeJsonEvent = s;
  },
  98,
);
