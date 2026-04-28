__d(
  "GHLDetectionUtilsPreludeSafe",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    var s = null,
      u = null,
      c = null,
      d = null;
    function m() {
      if (!(s != null && u != null)) {
        var e = document.body || document.documentElement;
        if (e != null) {
          var t = document.createElement("iframe");
          t.style.display = "none";
          try {
            (e.appendChild(t),
              (s = t.contentWindow.String),
              (u = t.contentWindow.Function.prototype.call),
              (c = t.contentWindow.JSON.parse),
              (d = t.contentWindow.Function.prototype.toString));
          } catch (e) {
            r("FBLogger")("ad_blocker_defense_ghost_owl").warn(
              "Failed to create iframe for builtin restoration",
            );
          } finally {
            try {
              e.removeChild(t);
            } catch (e) {}
          }
        }
      }
    }
    function p() {
      (m(), s != null && (window.String = s));
    }
    function _() {
      (m(), u != null && (Function.prototype.call = u));
    }
    function f() {
      m();
      var t = c,
        n = d;
      if (t != null && n != null)
        try {
          return n.call(JSON.parse) !== n.call(t);
        } catch (e) {}
      return (
        typeof JSON.parse == "function" &&
        !(
          JSON.parse.toString === JSON.parse.toString.toString &&
          e(JSON.parse.toString()) === "function parse() { [native code] }" &&
          e(JSON.parse.toString.toString()) ===
            "function toString() { [native code] }"
        )
      );
    }
    ((l.normalize = e),
      (l.restoreNativeString = p),
      (l.restoreNativeCall = _),
      (l.isJSONParseShimmed = f));
  },
  98,
);
