__d(
  "WADbPrekeyTxns",
  ["WAGetPrekeyIdsInRange", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    async function e(e, t) {
      var n = await e.prekeyGeneration.get(t);
      if (n == null) throw r("err")("Expected a prekey generation row");
      var a = o("WAGetPrekeyIdsInRange").getPrekeyIdsInRange(
          n.startingId,
          n.endingId,
        ),
        i = await e.prekey.bulkGet(a);
      return i.filter(Boolean).map(function (e) {
        return e.encoded;
      });
    }
    l.getPrekeysForGeneration = e;
  },
  98,
);
