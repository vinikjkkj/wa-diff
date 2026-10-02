__d(
  "WAWebDexieObservability",
  ["gkx"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n;
      if (r("gkx")("27164")) {
        var o =
            (t = (n = e._middlewares) == null ? void 0 : n.dbcore) != null
              ? t
              : [],
          a = o.filter(function (e) {
            return e.level === 0 && e.name == null;
          });
        a.length === 1 && e.unuse({ stack: "dbcore", create: a[0].create });
      }
    }
    l.dropDexieObservability = e;
  },
  98,
);
