__d(
  "WAWebDBTableUsage",
  ["WAWebDBStats", "WAWebWebDbTableUsageWamEvent"],
  function (t, n, r, o, a, i, l) {
    var e = new Map(),
      s = 50,
      u = new Map();
    function c(t) {
      var n = t.offlineSessionId,
        r = t.tablesToLog,
        a = t.webScenario,
        i = new Map(),
        l = new Map();
      for (var c of r) {
        var d = o("WAWebDBStats").dbStats.getStats(c) || {
            readCount: 0,
            writeCount: 0,
          },
          m = new (o("WAWebWebDbTableUsageWamEvent").WebDbTableUsageWamEvent)({
            webScenario: a,
            webTableReadCount: 0,
            webTableWriteCount: 0,
            webTable: c,
          });
        (i.set(c, m),
          l.set(c, {
            startReadCount: d.readCount,
            startWriteCount: d.writeCount,
          }));
      }
      function p() {
        var t = u.get(p);
        if (n != null) for (var r of i.values()) r.offlineSessionId = n;
        for (var a of i.entries()) {
          var l = a[0],
            c = a[1];
          {
            var d = o("WAWebDBStats").dbStats.getStats(l) || {
                readCount: 0,
                writeCount: 0,
              },
              m = (t == null ? void 0 : t.get(l)) || {
                startReadCount: 0,
                startWriteCount: 0,
              },
              _ = d.readCount - m.startReadCount,
              f = d.writeCount - m.startWriteCount;
            ((c.webTableReadCount = _),
              (c.webTableWriteCount = f),
              (_ > s || f > s || c.webTable === "message") && c.commit());
          }
        }
        return (e.delete(p), u.delete(p), e.size);
      }
      return (e.set(p, i), u.set(p, l), p);
    }
    function d(t, n) {
      for (var r of e) {
        var a = r[1],
          i = a.get(t);
        if (i != null) {
          var l = o("WAWebDBStats").dbStats.getStats(t);
          l &&
            (n === "read"
              ? (i.webTableReadCount = l.readCount)
              : (i.webTableWriteCount = l.writeCount));
        }
      }
    }
    ((l.beginDBTableUsage = c), (l.recordTableUsageStat = d));
  },
  98,
);
