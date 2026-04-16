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
      u = null;
    function c() {
      if (!(s != null && u != null)) {
        var e = document.body || document.documentElement;
        if (e != null) {
          var t = document.createElement("iframe");
          t.style.display = "none";
          try {
            (e.appendChild(t),
              (s = t.contentWindow.String),
              (u = t.contentWindow.Function.prototype.call));
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
    function d() {
      (c(), s != null && (window.String = s));
    }
    function m() {
      (c(), u != null && (Function.prototype.call = u));
    }
    ((l.normalize = e), (l.restoreNativeString = d), (l.restoreNativeCall = m));
  },
  98,
);
