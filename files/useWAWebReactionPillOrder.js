__d(
  "useWAWebReactionPillOrder",
  ["react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e || (e = o("react"))).useState;
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n;
      t[0] !== e
        ? ((n = function () {
            return e.map(c);
          }),
          (t[0] = e),
          (t[1] = n))
        : (n = t[1]);
      var r = s(n),
        a = r[0],
        i = r[1],
        l;
      t[2] !== a
        ? ((l = function (t) {
            var e = new Map();
            for (var n of t) e.set(n.emoji, n);
            var r = [],
              o = [];
            for (var l of a) {
              var s = e.get(l);
              s != null
                ? (r.push(s), e.delete(l))
                : r.push({ emoji: l, count: 0, hasMyReaction: !1 });
            }
            for (var u of e.values()) (r.push(u), o.push(u.emoji));
            return (
              o.length > 0 &&
                i(function (e) {
                  return [].concat(e, o);
                }),
              r
            );
          }),
          (t[2] = a),
          (t[3] = l))
        : (l = t[3]);
      var u = l;
      return u;
    }
    function c(e) {
      return e.emoji;
    }
    l.default = u;
  },
  98,
);
