__d(
  "useWAWebReactionPillOrder",
  ["react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = s(function () {
          return e.map(function (e) {
            return e.emoji;
          });
        }),
        n = t[0],
        r = t[1],
        o = function (t) {
          var e = new Map();
          for (var o of t) e.set(o.emoji, o);
          var a = [],
            i = [];
          for (var l of n) {
            var s = e.get(l);
            s != null
              ? (a.push(s), e.delete(l))
              : a.push({ emoji: l, count: 0, hasMyReaction: !1 });
          }
          for (var u of e.values()) (a.push(u), i.push(u.emoji));
          return (
            i.length > 0 &&
              r(function (e) {
                return [].concat(e, i);
              }),
            a
          );
        };
      return o;
    }
    l.default = u;
  },
  98,
);
