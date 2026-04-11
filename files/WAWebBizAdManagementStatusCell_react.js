__d(
  "WAWebBizAdManagementStatusCell.react",
  [
    "WAWebBizBoostingStatusUtils",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(8),
        n = e.boostingStatus,
        a = e.boostingStatusDisplayText,
        i;
      t[0] !== n || t[1] !== a
        ? ((i = o("WAWebBizBoostingStatusUtils").getBoostingStatusDisplayText(
            n,
            a,
          )),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i))
        : (i = t[2]);
      var l = i;
      if (l == null) return null;
      var u;
      t[3] !== n
        ? ((u = o("WAWebBizBoostingStatusUtils").getBoostingStatusColorName(n)),
          (t[3] = n),
          (t[4] = u))
        : (u = t[4]);
      var c = u,
        d;
      return (
        t[5] !== c || t[6] !== l
          ? ((d = s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: c,
              maxLines: 1,
              children: l,
            })),
            (t[5] = c),
            (t[6] = l),
            (t[7] = d))
          : (d = t[7]),
        d
      );
    }
    l.default = u;
  },
  98,
);
