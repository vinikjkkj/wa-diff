__d(
  "MAWDeanonLSMetadataCache",
  ["I64", "MAWMessagesCompare", "WAJids", "justknobx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("justknobx")._("3763"),
      u = new Map();
    function c(t, n) {
      if (n.length !== 0) {
        for (
          var r = []
              .concat(n)
              .sort(
                o("MAWMessagesCompare").getSortComparisonFunctionForDirection(
                  "desc",
                ),
              ),
            a = 0,
            i = r.length - 1;
          a < i && r[a].sortOrderMs === r[a + 1].sortOrderMs;
        )
          a++;
        if (a !== i) {
          var l = (e || (e = o("I64"))).of_float(r[i].sortOrderMs);
          u.set(e.to_string(t), {
            insertTime: Date.now(),
            minTimestampMs: l,
            msgsMetadata: r.slice(a),
          });
        }
      }
    }
    function d(e, t) {
      if (t === "desc") {
        var n = Date.now(),
          r = u.get(o("WAJids").threadIdForChatJid(e));
        if (!(r != null && n - r.insertTime > s)) return r;
      }
    }
    function m(e) {
      u.delete(e);
    }
    ((l.initDeanonCacheDescForThread = c),
      (l.getLsCache = d),
      (l.deleteLsCache = m));
  },
  98,
);
