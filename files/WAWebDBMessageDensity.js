__d(
  "WAWebDBMessageDensity",
  [
    "Promise",
    "WAWebDBMessageUtils",
    "WAWebSchemaMessage",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e, t, n) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r, a) {
          for (
            var i = new Map(),
              l = o("WAWebSchemaMessage").getMessageTable(),
              s = [],
              u = new Date(r.getFullYear(), r.getMonth(), r.getDate()),
              c = new Date(a.getFullYear(), a.getMonth(), a.getDate()),
              d = function* () {
                var r,
                  a = u.getDate(),
                  c = Math.floor(u.getTime() / 1e3),
                  d = c + 86400 - 1,
                  m = (r = o("WAWebDBMessageUtils")).craftMessageRangeIndex(
                    t,
                    !0,
                    !1,
                    c,
                  ),
                  p = r.craftMessageRangeIndex(t, !0, !1, d),
                  _ = r.craftMessageRangeIndex(t, !1, !1, c),
                  f = r.craftMessageRangeIndex(t, !1, !1, d),
                  g = a;
                (s.push(
                  (e || (e = n("Promise")))
                    .all([
                      l.betweenCount(["messageRangeIndex"], m, p, {
                        lowerInclusive: !0,
                        upperInclusive: !0,
                      }),
                      l.betweenCount(["messageRangeIndex"], _, f, {
                        lowerInclusive: !0,
                        upperInclusive: !0,
                      }),
                    ])
                    .then(function (e) {
                      var t = e[0],
                        n = e[1],
                        r = t + n;
                      r > 0 && i.set(g, r);
                    }),
                ),
                  u.setDate(u.getDate() + 1));
              };
            u <= c;
          )
            yield* d();
          return (yield (e || (e = n("Promise"))).all(s), i);
        })),
        u.apply(this, arguments)
      );
    }
    l.getMessageCountsForDateRange = s;
  },
  98,
);
