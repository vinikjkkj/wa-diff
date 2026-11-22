__d(
  "WAWebLabyrinthShadowCompare",
  ["WAWebLabyrinthShadowMessageIdentity"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = s(e),
        r = s(t),
        o = 0,
        a = [];
      for (var i of n) {
        var l = i[0],
          u = i[1];
        r.has(l) ? o++ : a.push(u);
      }
      return {
        inBoth: o,
        onlyInLabyrinth: Array.from(r)
          .filter(function (e) {
            var t = e[0];
            return !n.has(t);
          })
          .map(function (e) {
            var t = e[1];
            return t;
          }),
        onlyLocal: a,
      };
    }
    function s(e) {
      return new Map(
        e.map(function (e) {
          return [
            o(
              "WAWebLabyrinthShadowMessageIdentity",
            ).getLabyrinthShadowIdentityKey(e),
            e,
          ];
        }),
      );
    }
    l.compareLabyrinthShadowIdentities = e;
  },
  98,
);
