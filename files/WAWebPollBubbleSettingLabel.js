__d(
  "WAWebPollBubbleSettingLabel",
  ["WAWebFlex.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = {
        container: {
          flex: "x3psx0u",
          paddingTop: "x1iorvi4",
          paddingBottom: "xjkvuk6",
          $$css: !0,
        },
      };
    function c(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.icon,
        r = e.isEmphasized,
        a = e.label,
        i = e.testid,
        l = e.trailingSeparator,
        c = r === void 0 ? !1 : r,
        d;
      t[0] !== c
        ? ((d = {
            0: { className: "x1pg5gke x1d3mw78 x1bvqhpb xaso8d8" },
            1: { className: "x1pg5gke x1d3mw78 x30a034 xaso8d8" },
          }[!!c << 0]),
          (t[0] = c),
          (t[1] = d))
        : (d = t[1]);
      var m;
      t[2] !== l
        ? ((m = l
            ? s.jsx("span", {
                className: "x135b78x x11lfxj5",
                children: "\xB7",
              })
            : null),
          (t[2] = l),
          (t[3] = m))
        : (m = t[3]);
      var p;
      t[4] !== a || t[5] !== d || t[6] !== m
        ? ((p = s.jsxs(
            "span",
            babelHelpers.extends({}, d, { children: [a, m] }),
          )),
          (t[4] = a),
          (t[5] = d),
          (t[6] = m),
          (t[7] = p))
        : (p = t[7]);
      var _;
      return (
        t[8] !== n || t[9] !== p || t[10] !== i
          ? ((_ = s.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              xstyle: u.container,
              testid: i,
              children: [n, p],
            })),
            (t[8] = n),
            (t[9] = p),
            (t[10] = i),
            (t[11] = _))
          : (_ = t[11]),
        _
      );
    }
    l.default = c;
  },
  98,
);
