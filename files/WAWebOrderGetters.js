__d(
  "WAWebOrderGetters",
  ["WAWebGetters", "WAWebGettersCaches", "sumBy"],
  function (t, n, r, o, a, i, l) {
    var e = o("WAWebGetters").createGetterFactories({
        createCache: o("WAWebGettersCaches").createOrderCache,
      }),
      s = e.clearCacheFor,
      u = e.computed,
      c = e.field,
      d = s,
      m = c("products"),
      p = u(
        function (e) {
          var t = e[0];
          return r("sumBy")(t, function (e) {
            return e.quantity;
          });
        },
        [m],
      );
    ((l.clearOrderGetterCacheFor = d), (l.getTotalItemCount = p));
  },
  98,
);
