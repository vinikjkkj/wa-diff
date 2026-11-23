__d(
  "WAWebLabyrinthShadowCarryOver",
  ["WACryptoSha256"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 16;
    async function u(e) {
      return (await o("WACryptoSha256").sha256Str(e)).slice(0, s);
    }
    function c(e, t) {
      return {
        caughtUpInLabyrinth: _(e.onlyLocal, t.inBoth),
        caughtUpLocally: _(e.onlyInLabyrinth, t.inBoth),
        previousOnlyInLabyrinth: e.onlyInLabyrinth.length,
        previousOnlyLocal: e.onlyLocal.length,
        previousTruncated: e.truncated,
        stillOnlyInLabyrinth: _(e.onlyInLabyrinth, t.onlyInLabyrinth),
        stillOnlyLocal: _(e.onlyLocal, t.onlyLocal),
      };
    }
    function d(t) {
      return {
        onlyInLabyrinth: p(t.onlyInLabyrinth),
        onlyLocal: p(t.onlyLocal),
        truncated: t.onlyInLabyrinth.size > e || t.onlyLocal.size > e,
      };
    }
    function m(e) {
      return e == null
        ? null
        : {
            onlyInLabyrinth: e.onlyInLabyrinth,
            onlyLocal: e.onlyLocal,
            truncated: e.truncated === !0,
          };
    }
    function p(t) {
      return Array.from(t).sort().slice(0, e);
    }
    function _(e, t) {
      return e.filter(function (e) {
        return t.has(e);
      }).length;
    }
    ((l.getLabyrinthShadowFingerprint = u),
      (l.getLabyrinthShadowCarryOver = c),
      (l.getLabyrinthShadowUnresolved = d),
      (l.readLabyrinthShadowUnresolved = m));
  },
  98,
);
