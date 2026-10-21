__d(
  "WAWebPollPendingOptionHashes",
  ["WAHex"],
  function (t, n, r, o, a, i, l) {
    var e = 32;
    function s(t) {
      var n = new Uint8Array(t.length * e);
      return (
        t.forEach(function (t, r) {
          n.set(new Uint8Array(t), r * e);
        }),
        n.buffer
      );
    }
    function u(t) {
      if (t == null) return [];
      for (var n = [], r = 0; r + e <= t.byteLength; r += e)
        n.push(t.slice(r, r + e));
      return n;
    }
    function c(e) {
      return o("WAHex").toHex(new Uint8Array(e));
    }
    ((l.packOptionHashes = s),
      (l.unpackOptionHashes = u),
      (l.optionHashDependencyId = c));
  },
  98,
);
