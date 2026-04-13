__d(
  "WAWebAdList.react",
  [
    "WAWebAdListEmpty.react",
    "WAWebAdRow.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.ads;
      if (n.length === 0) {
        var a;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = s.jsx(r("WAWebAdListEmpty.react"), {})), (t[0] = a))
            : (a = t[0]),
          a
        );
      }
      var i;
      if (t[1] !== n) {
        var l;
        (t[3] !== n.length
          ? ((l = function (t, o) {
              return s.jsx(
                r("WAWebAdRow.react"),
                { ad: t, isLast: o === n.length - 1 },
                t.ad.adId,
              );
            }),
            (t[3] = n.length),
            (t[4] = l))
          : (l = t[4]),
          (i = n.map(l)),
          (t[1] = n),
          (t[2] = i));
      } else i = t[2];
      var u;
      return (
        t[5] !== i
          ? ((u = s.jsx(s.Fragment, { children: i })), (t[5] = i), (t[6] = u))
          : (u = t[6]),
        u
      );
    }
    l.default = u;
  },
  98,
);
