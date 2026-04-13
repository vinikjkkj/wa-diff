__d(
  "WAWebMediaHubViewMore.react",
  [
    "fbt",
    "WAWebButton.react",
    "WAWebFlex.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.onClick,
        r = e.searchType,
        a = r === "caption" ? 8 : 0,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(/*BTDS*/ "View more results")), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== n
        ? ((l = u.jsx(o("WAWebButton.react").WAWebButtonSecondary, {
            onClick: n,
            children: i,
          })),
          (t[1] = n),
          (t[2] = l))
        : (l = t[2]);
      var c;
      return (
        t[3] !== a || t[4] !== l
          ? ((c = u.jsx(o("WAWebFlex.react").FlexRow, {
              paddingTop: 4,
              marginTop: 2,
              justify: "end",
              marginEnd: 24,
              paddingEnd: 4,
              marginBottom: a,
              children: l,
            })),
            (t[3] = a),
            (t[4] = l),
            (t[5] = c))
          : (c = t[5]),
        c
      );
    }
    l.default = c;
  },
  226,
);
