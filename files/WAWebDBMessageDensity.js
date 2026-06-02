__d(
  "WAWebDBMessageDensity",
  ["WAWebDBMessageUtils", "WAWebSchemaMessage"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t, n) {
      for (
        var r = new Map(),
          a = o("WAWebSchemaMessage").getMessageTable(),
          i = [],
          l = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
          s = new Date(n.getFullYear(), n.getMonth(), n.getDate()),
          u = async function () {
            var t,
              n = l.getDate(),
              s = Math.floor(l.getTime() / 1e3),
              u = s + 86400 - 1,
              c = (t = o("WAWebDBMessageUtils")).craftMessageRangeIndex(
                e,
                !0,
                !1,
                s,
              ),
              d = t.craftMessageRangeIndex(e, !0, !1, u),
              m = t.craftMessageRangeIndex(e, !1, !1, s),
              p = t.craftMessageRangeIndex(e, !1, !1, u),
              _ = n;
            (i.push(
              Promise.all([
                a.betweenCount(["messageRangeIndex"], c, d, {
                  lowerInclusive: !0,
                  upperInclusive: !0,
                }),
                a.betweenCount(["messageRangeIndex"], m, p, {
                  lowerInclusive: !0,
                  upperInclusive: !0,
                }),
              ]).then(function (e) {
                var t = e[0],
                  n = e[1],
                  o = t + n;
                o > 0 && r.set(_, o);
              }),
            ),
              l.setDate(l.getDate() + 1));
          };
        l <= s;
      )
        await u();
      return (await Promise.all(i), r);
    }
    l.getMessageCountsForDateRange = e;
  },
  98,
);
