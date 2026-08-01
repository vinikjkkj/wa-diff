__d(
  "WAWebMimeTypesBuildExtToMime",
  ["WATypeUtils", "WAWebMimeToExt"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      try {
        var t = e != null && e !== "" ? JSON.parse(e) : r("WAWebMimeToExt"),
          n = {};
        return (
          s({ data_: t, extToMime: n, lastMimeType: "", mimeTypeSoFar: "" }),
          n
        );
      } catch (e) {
        return null;
      }
    }
    function s(e) {
      var t = e.data_,
        n = e.extToMime,
        r = e.lastMimeType,
        a = e.mimeTypeSoFar,
        i = t;
      if (Array.isArray(i) || o("WATypeUtils").isString(i)) {
        o("WATypeUtils").isString(i) && (i = [i]);
        for (var l = 0; l < i.length; l++) {
          var u = i[l];
          o("WATypeUtils").isString(u) && (n[u] = a + r);
        }
        return;
      }
      if (typeof i == "object")
        for (var c in i)
          s({
            data_: i[c],
            extToMime: n,
            lastMimeType: c,
            mimeTypeSoFar: a + r,
          });
    }
    l.default = e;
  },
  98,
);
