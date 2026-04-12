__d(
  "WAWebAdList.react",
  ["WAWebAdListEmpty.react", "WAWebAdRow.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.ads;
      return t.length === 0
        ? s.jsx(r("WAWebAdListEmpty.react"), {})
        : s.jsx(s.Fragment, {
            children: t.map(function (e, n) {
              return s.jsx(
                r("WAWebAdRow.react"),
                { ad: e, isLast: n === t.length - 1 },
                e.ad.adId,
              );
            }),
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
