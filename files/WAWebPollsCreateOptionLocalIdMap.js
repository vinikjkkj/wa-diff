__d(
  "WAWebPollsCreateOptionLocalIdMap",
  ["WAHex", "WANullthrows", "WAWebPollOptionHashUtils"],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await Promise.all(
          e.map(async function (e) {
            var t = await s(e),
              n = o("WAHex").toHex(new Uint8Array(t));
            return { hash: t, hexHash: n, localId: e.localId };
          }),
        ),
        n = new Map(),
        a = new Map();
      for (var i of t) {
        var l = i.hash,
          u = i.hexHash,
          c = i.localId;
        (n.set(u, c), a.set(c, l));
      }
      return {
        getLocalIdForHexHash: function (t) {
          return r("WANullthrows")(n.get(t));
        },
        getLocalIdForHash: function (t) {
          return r("WANullthrows")(n.get(o("WAHex").toHex(new Uint8Array(t))));
        },
        getHashForLocalId: function (t) {
          return r("WANullthrows")(a.get(t));
        },
        includesHashes: function (t) {
          return t.every(function (e) {
            return n.has(o("WAHex").toHex(new Uint8Array(e)));
          });
        },
      };
    }
    function s(e) {
      return o("WAWebPollOptionHashUtils").getHashBufferForString(e.name);
    }
    l.createOptionLocalIdMap = e;
  },
  98,
);
