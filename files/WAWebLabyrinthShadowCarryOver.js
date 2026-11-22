__d(
  "WAWebLabyrinthShadowCarryOver",
  ["WACryptoSha256", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3,
      s = 16;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return (yield o("WACryptoSha256").sha256Str(e)).slice(0, s);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e, t) {
      return {
        caughtUpInLabyrinth: f(e.onlyLocal, t.inBoth),
        caughtUpLocally: f(e.onlyInLabyrinth, t.inBoth),
        previousOnlyInLabyrinth: e.onlyInLabyrinth.length,
        previousOnlyLocal: e.onlyLocal.length,
        previousTruncated: e.truncated,
        stillOnlyInLabyrinth: f(e.onlyInLabyrinth, t.onlyInLabyrinth),
        stillOnlyLocal: f(e.onlyLocal, t.onlyLocal),
      };
    }
    function m(t) {
      return {
        onlyInLabyrinth: _(t.onlyInLabyrinth),
        onlyLocal: _(t.onlyLocal),
        truncated: t.onlyInLabyrinth.size > e || t.onlyLocal.size > e,
      };
    }
    function p(e) {
      return e == null
        ? null
        : {
            onlyInLabyrinth: e.onlyInLabyrinth,
            onlyLocal: e.onlyLocal,
            truncated: e.truncated === !0,
          };
    }
    function _(t) {
      return Array.from(t).sort().slice(0, e);
    }
    function f(e, t) {
      return e.filter(function (e) {
        return t.has(e);
      }).length;
    }
    ((l.getLabyrinthShadowFingerprint = u),
      (l.getLabyrinthShadowCarryOver = d),
      (l.getLabyrinthShadowUnresolved = m),
      (l.readLabyrinthShadowUnresolved = p));
  },
  98,
);
