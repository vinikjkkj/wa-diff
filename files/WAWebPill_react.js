__d(
  "WAWebPill.react",
  [
    "WAWebFlex.react",
    "WAWebUISpacing",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["children", "pillText"],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        pill: {
          display: "x3nfvp2",
          boxSizing: "x9f619",
          height: "x17rw0jw",
          fontSize: "x190qgfh",
          fontWeight: "x1xlr1w8",
          borderStartStartRadius: "x1g83kfv",
          borderStartEndRadius: "x3qq2k7",
          borderEndEndRadius: "x2x8art",
          borderEndStartRadius: "x1qor8vf",
          $$css: !0,
        },
        gray: { color: "x1pse0pq", backgroundColor: "x1518k6t", $$css: !0 },
        green: { color: "x1pse0pq", backgroundColor: "xfn3atn", $$css: !0 },
        yellow: { color: "x1pse0pq", backgroundColor: "x18um00n", $$css: !0 },
        blue: { color: "x1pse0pq", backgroundColor: "x4e28k3", $$css: !0 },
      };
    function m(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.color,
        i = e.inline,
        l = a === void 0 ? "gray" : a,
        u;
      t[0] !== l || t[1] !== i
        ? ((u = (s || (s = r("stylex")))([
            d.pill,
            l ? d[l] : null,
            o("WAWebUISpacing").uiPadding.vert4,
            o("WAWebUISpacing").uiPadding.horiz8,
            o("WAWebUISpacing").uiMargin.vertAuto,
            i === !0 ? o("WAWebUISpacing").uiMargin.start8 : null,
          ])),
          (t[0] = l),
          (t[1] = i),
          (t[2] = u))
        : (u = t[2]);
      var m;
      return (
        t[3] !== n || t[4] !== u
          ? ((m = c.jsx(o("WAWebFlex.react").FlexRow, {
              align: "center",
              className: u,
              children: n,
            })),
            (t[3] = n),
            (t[4] = u),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function p(t) {
      var n = o("react-compiler-runtime").c(11),
        r,
        a,
        i;
      n[0] !== t
        ? ((r = t.children),
          (i = t.pillText),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = r),
          (n[2] = a),
          (n[3] = i))
        : ((r = n[1]), (a = n[2]), (i = n[3]));
      var l = r != null || a.inline,
        s;
      n[4] !== a || n[5] !== i || n[6] !== l
        ? ((s = c.jsx(
            m,
            babelHelpers.extends({}, a, { inline: l, children: i }),
          )),
          (n[4] = a),
          (n[5] = i),
          (n[6] = l),
          (n[7] = s))
        : (s = n[7]);
      var u;
      return (
        n[8] !== r || n[9] !== s
          ? ((u = c.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "center",
              children: [r, s],
            })),
            (n[8] = r),
            (n[9] = s),
            (n[10] = u))
          : (u = n[10]),
        u
      );
    }
    ((l.Pill = m), (l.LabelPill = p));
  },
  98,
);
