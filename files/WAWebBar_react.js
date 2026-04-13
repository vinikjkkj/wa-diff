__d(
  "WAWebBar.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        barContainer: {
          width: "xh8yej3",
          height: "xdk7pt",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        bar: {
          height: "x5yr21d",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          transitionProperty: "xx99ppg",
          transitionDuration: "x1d8287x",
          $$css: !0,
        },
        marginTop4: { marginTop: "xav9cv8", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(13),
        a = t.barXStyle,
        i = t.containerXStyle,
        l = t.percentage,
        s = t.ref,
        d = l * 100 + "%",
        m;
      n[0] !== i
        ? ((m = (e || (e = r("stylex"))).props(
            c.barContainer,
            c.marginTop4,
            i,
          )),
          (n[0] = i),
          (n[1] = m))
        : (m = n[1]);
      var p;
      n[2] !== a
        ? ((p = (e || (e = r("stylex")))(c.bar, a)), (n[2] = a), (n[3] = p))
        : (p = n[3]);
      var _;
      n[4] !== d ? ((_ = { width: d }), (n[4] = d), (n[5] = _)) : (_ = n[5]);
      var f;
      n[6] !== p || n[7] !== _
        ? ((f = u.jsx("div", { className: p, style: _ })),
          (n[6] = p),
          (n[7] = _),
          (n[8] = f))
        : (f = n[8]);
      var g;
      return (
        n[9] !== s || n[10] !== m || n[11] !== f
          ? ((g = u.jsx(
              "div",
              babelHelpers.extends({ ref: s }, m, { children: f }),
            )),
            (n[9] = s),
            (n[10] = m),
            (n[11] = f),
            (n[12] = g))
          : (g = n[12]),
        g
      );
    }
    l.default = d;
  },
  98,
);
