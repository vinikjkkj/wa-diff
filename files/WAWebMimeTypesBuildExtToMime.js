__d(
  "WAWebMimeTypesBuildExtToMime",
  ["WATypeUtils", "WAWebMimeToExt"],
  function (t, n, r, o, a, i, l) {
    function e(t, n, r, a) {
      var i = t;
      if (Array.isArray(i) || o("WATypeUtils").isString(i)) {
        o("WATypeUtils").isString(i) && (i = [i]);
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          o("WATypeUtils").isString(s) && (n[s] = a + r);
        }
        return;
      }
      if (typeof i == "object") for (var u in i) e(i[u], n, u, a + r);
    }
    function s(t) {
      try {
        var n = t != null && t !== "" ? JSON.parse(t) : r("WAWebMimeToExt"),
          o = {};
        return (e(n, o, "", ""), o);
      } catch (e) {
        return null;
      }
    }
    l.default = s;
  },
  98,
);
