__d(
  "WAWebDBMessageDensity",
  ["WAWebDBMessageRangeIndex", "WAWebSchemaMessage"],
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
              c = (t = o("WAWebDBMessageRangeIndex")).craftMessageRangeIndex({
                chatId: e,
                isIncoming: !0,
                isSystemMessage: !1,
                timestamp: s,
              }),
              d = t.craftMessageRangeIndex({
                chatId: e,
                isIncoming: !0,
                isSystemMessage: !1,
                timestamp: u,
              }),
              m = t.craftMessageRangeIndex({
                chatId: e,
                isIncoming: !1,
                isSystemMessage: !1,
                timestamp: s,
              }),
              p = t.craftMessageRangeIndex({
                chatId: e,
                isIncoming: !1,
                isSystemMessage: !1,
                timestamp: u,
              }),
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
