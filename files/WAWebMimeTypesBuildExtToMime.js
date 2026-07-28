__d(
  "WAWebMimeTypesBuildExtToMime",
  ["WATypeUtils", "WAWebMimeToExt"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        var t = e != null && e !== "" ? JSON.parse(e) : r("WAWebMimeToExt"),
          n = {};
        return (s(t, n, "", ""), n);
      } catch (e) {
        return null;
      }
    }
    function s(e, t, n, r) {
      var a = e;
      if (Array.isArray(a) || o("WATypeUtils").isString(a)) {
        o("WATypeUtils").isString(a) && (a = [a]);
        for (var i = 0; i < a.length; i++) {
          var l = a[i];
          o("WATypeUtils").isString(l) && (t[l] = r + n);
        }
        return;
      }
      if (typeof a == "object") for (var u in a) s(a[u], t, u, r + n);
    }
    l.default = e;
  },
  98,
);
