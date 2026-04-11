__d(
  "ALReactUtils",
  ["FBLogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t) {
        return !0;
      },
      s = function (t) {
        var e = Object.keys(t).find(function (e) {
          return e.startsWith("__reactFiber$");
        });
        return e != null ? t[e] : null;
      },
      u = function (t) {
        var e,
          n,
          r = (e = t.displayName) != null ? e : t.name;
        if (r == null) return null;
        var o = r.match(/.*\[from (.*)\.react\]/);
        return (n = o == null ? void 0 : o[1]) != null ? n : r;
      };
    function c(t, n) {
      if (t == null)
        return (
          r("FBLogger")("ads_manager_auto_logging").warn(
            "[AL] Null element passed to getReactComponentName_THIS_CAN_BREAK.",
          ),
          null
        );
      var o = n || e,
        a = t;
      try {
        for (var i = s(a); i; ) {
          var l = i.type;
          if (l == null || typeof l == "string") {
            i = i.return;
            continue;
          }
          var c = u(l);
          if (
            (c == null && l.render != null && (c = u(l.render)),
            c != null && c !== "" && o(c))
          )
            return c;
          i = i.return;
        }
      } catch (e) {
        var d = r("getErrorSafe")(e);
        return (
          r("FBLogger")("ads_manager_auto_logging")
            .catching(d)
            .warn(
              "[AL] Caught exception in getReactComponentName_THIS_CAN_BREAK.",
            ),
          null
        );
      }
    }
    l.getReactComponentName_THIS_CAN_BREAK = c;
  },
  98,
);
