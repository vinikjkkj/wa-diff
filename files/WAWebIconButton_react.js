__d(
  "WAWebIconButton.react",
  ["WAWebClickable.react", "WAWebUISpacing", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["icon", "ref"],
      s,
      u = s || (s = o("react")),
      c = {
        button: {
          borderStartStartRadius: "xr4gsrn",
          borderStartEndRadius: "xa83c8o",
          borderEndEndRadius: "x3oym20",
          borderEndStartRadius: "x1i84rja",
          height: "x1vqgdyp",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          flex: "x1okw0bk",
          cursor: "x1ypdohk",
          ":hover_backgroundColor": "x17gydlx",
          $$css: !0,
        },
        buttonNotClickable: { cursor: "x1h6gzvc", $$css: !0 },
        row: {
          display: "x78zum5",
          flexDirection: "x1q0g3np",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          $$css: !0,
        },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(14),
        r,
        a,
        i;
      n[0] !== t
        ? ((r = t.icon),
          (i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i))
        : ((r = n[1]), (a = n[2]), (i = n[3]));
      var l = r != null && o("WAWebUISpacing").uiPadding.start10,
        s = r != null && o("WAWebUISpacing").uiPadding.end2,
        d = a.onClick == null && c.buttonNotClickable,
        m;
      n[4] !== a.xstyle || n[5] !== l || n[6] !== s || n[7] !== d
        ? ((m = [c.button, c.row, l, s, a.xstyle, d]),
          (n[4] = a.xstyle),
          (n[5] = l),
          (n[6] = s),
          (n[7] = d),
          (n[8] = m))
        : (m = n[8]);
      var p;
      return (
        n[9] !== r || n[10] !== a || n[11] !== i || n[12] !== m
          ? ((p = u.jsxs(
              o("WAWebClickable.react").Clickable,
              babelHelpers.extends({}, a, {
                xstyle: m,
                ref: i,
                children: [r, a.children],
              }),
            )),
            (n[9] = r),
            (n[10] = a),
            (n[11] = i),
            (n[12] = m),
            (n[13] = p))
          : (p = n[13]),
        p
      );
    }
    l.default = d;
  },
  98,
);
