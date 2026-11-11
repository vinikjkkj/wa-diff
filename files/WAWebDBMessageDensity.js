__d(
  "WAWebDBMessageDensity",
  [
    "Promise",
    "WAWebDBMessageRangeIndex",
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
                  m = (r = o(
                    "WAWebDBMessageRangeIndex",
                  )).craftMessageRangeIndex({
                    chatId: t,
                    isIncoming: !0,
                    isSystemMessage: !1,
                    timestamp: c,
                  }),
                  p = r.craftMessageRangeIndex({
                    chatId: t,
                    isIncoming: !0,
                    isSystemMessage: !1,
                    timestamp: d,
                  }),
                  _ = r.craftMessageRangeIndex({
                    chatId: t,
                    isIncoming: !1,
                    isSystemMessage: !1,
                    timestamp: c,
                  }),
                  f = r.craftMessageRangeIndex({
                    chatId: t,
                    isIncoming: !1,
                    isSystemMessage: !1,
                    timestamp: d,
                  }),
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
