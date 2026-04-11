__d(
  "useWAWebSearchModel",
  ["asyncToGeneratorRuntime", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = s.useCallback,
      c = s.useMemo,
      d = s.useState;
    function m(e) {
      var t = c(e, []),
        r = d(),
        o = r[0],
        a = r[1],
        i = u(
          (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, n) {
                var r = yield t.query(e, n);
                return (a(r), r);
              },
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })(),
          [t],
        ),
        l = u(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if (
              (o == null || (e = o.pagination) == null ? void 0 : e.next) !=
              null
            ) {
              var t = yield o.pagination.next();
              return (a(t), t);
            }
          }),
          [o],
        ),
        s = u(
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e;
            if (
              (o == null || (e = o.pagination) == null ? void 0 : e.previous) !=
              null
            ) {
              var t = yield o.pagination.previous();
              return (a(t), t);
            }
          }),
          [o],
        );
      return { results: o, query: i, searchInstance: t, next: l, previous: s };
    }
    l.useSearchModel = m;
  },
  98,
);
