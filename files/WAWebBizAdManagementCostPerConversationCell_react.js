__d(
  "WAWebBizAdManagementCostPerConversationCell.react",
  ["WDSText.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.conversations,
        a = e.formattedSpent,
        i;
      if (t[0] !== a) {
        if (
          ((i = a.replace(/[^0-9.,]/g, "")),
          i.includes(",") && !i.includes("."))
        )
          i = i.replace(",", ".");
        else if (i.includes(",") && i.includes(".")) {
          var l;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = /,/g), (t[2] = l))
            : (l = t[2]),
            (i = i.replace(l, "")));
        }
        ((t[0] = a), (t[1] = i));
      } else i = t[1];
      var u = parseFloat(i) || 0,
        c = "\u2014";
      if (n > 0 && u > 0) {
        var d = u / n,
          m;
        t[3] !== a
          ? ((m = a.replace(/[0-9.,\s]/g, "").trim() || "$"),
            (t[3] = a),
            (t[4] = m))
          : (m = t[4]);
        var p = m,
          _;
        (t[5] !== d ? ((_ = d.toFixed(2)), (t[5] = d), (t[6] = _)) : (_ = t[6]),
          (c = "" + p + _));
      }
      var f;
      return (
        t[7] !== c
          ? ((f = s.jsx(r("WDSText.react"), {
              type: "Body1",
              colorName: "contentDefault",
              maxLines: 1,
              children: c,
            })),
            (t[7] = c),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    l.default = u;
  },
  98,
);
