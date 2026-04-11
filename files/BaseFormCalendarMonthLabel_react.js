__d(
  "BaseFormCalendarMonthLabel.react",
  ["BaseTextV2.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = r("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.date,
        a = e.fontMetrics,
        i = e.textColorVariant,
        l = e.textTypeVariant,
        u;
      t[0] !== n ? ((u = n.format("F Y")), (t[0] = n), (t[1] = u)) : (u = t[1]);
      var c;
      return (
        t[2] !== a || t[3] !== u || t[4] !== i || t[5] !== l
          ? ((c = s.jsx(r("BaseTextV2.react"), {
              colorVariant: i,
              fontMetrics: a,
              isSemanticHeading: !0,
              maxLines: 1,
              typeVariant: l,
              children: u,
            })),
            (t[2] = a),
            (t[3] = u),
            (t[4] = i),
            (t[5] = l),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    var c = s.memo(u);
    l.default = c;
  },
  98,
);
