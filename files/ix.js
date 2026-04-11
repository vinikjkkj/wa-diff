__d(
  "ix",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    var e = {},
      u = new Set();
    function c(t) {
      var n = e[t];
      return (n || s(0, 11798, t), n);
    }
    ((c.add = function (t, n) {
      var r = !1;
      for (var o in t)
        (n && n.entry++,
          o in e ? n && n.dup_entry++ : ((t[o].loggingID = o), (e[o] = t[o])));
    }),
      (c.getUsedPaths_ONLY_FOR_REACT_FLIGHT = function () {
        return (
          t.__flight_execution_mode_DO_NOT_USE === "flight" || s(0, 34547),
          Array.from(u)
        );
      }),
      (c.getAllPaths = function () {
        var t = new Set();
        return (
          Object.values(e)
            .map(function (e) {
              if ((e == null ? void 0 : e.sprited) === 0) return e.uri;
              if ((e == null ? void 0 : e.sprited) === 1) return e._spi;
              if ((e == null ? void 0 : e.sprited) === 2) return e.spi;
            })
            .forEach(function (e) {
              return e != null && t.add(e);
            }),
          t
        );
      }),
      (l.default = c));
  },
  98,
);
