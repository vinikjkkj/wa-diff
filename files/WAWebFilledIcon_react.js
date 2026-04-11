__d(
  "WAWebFilledIcon.react",
  ["WAWebFlex.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        background: {
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          $$css: !0,
        },
        defaultBackgroundColor: { backgroundColor: "xfn3atn", $$css: !0 },
        defaultIconColor: { color: "xk4n5i7", $$css: !0 },
      },
      c = {
        small: { width: "x1useyqa", height: "xsdox4t", $$css: !0 },
        large: { width: "xj35x94", height: "x19swzb4", $$css: !0 },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(12),
        n = e.Icon,
        r = e.backgroundColor,
        a = e.iconColor,
        i = e.size,
        l = i === void 0 ? "small" : i,
        d;
      e: switch (l) {
        case "small": {
          d = 24;
          break e;
        }
        case "large":
          d = 64;
      }
      var m = c[l],
        p;
      t[0] !== r || t[1] !== m
        ? ((p = [u.background, u.defaultBackgroundColor, r, m]),
          (t[0] = r),
          (t[1] = m),
          (t[2] = p))
        : (p = t[2]);
      var _;
      t[3] !== a
        ? ((_ = [u.defaultIconColor, a]), (t[3] = a), (t[4] = _))
        : (_ = t[4]);
      var f;
      t[5] !== n || t[6] !== d || t[7] !== _
        ? ((f = s.jsx(n, { xstyle: _, width: d, height: d })),
          (t[5] = n),
          (t[6] = d),
          (t[7] = _),
          (t[8] = f))
        : (f = t[8]);
      var g;
      return (
        t[9] !== p || t[10] !== f
          ? ((g = s.jsx(o("WAWebFlex.react").FlexColumn, {
              justify: "center",
              align: "center",
              xstyle: p,
              children: f,
            })),
            (t[9] = p),
            (t[10] = f),
            (t[11] = g))
          : (g = t[11]),
        g
      );
    }
    l.default = d;
  },
  98,
);
