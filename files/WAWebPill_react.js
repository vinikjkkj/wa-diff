__d(
  "WAWebPill.react",
  ["WAWebFlex.react", "WAWebUISpacing", "react", "stylex"],
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
      var t = e.children,
        n = e.color,
        a = n === void 0 ? "gray" : n,
        i = e.inline;
      return c.jsx(o("WAWebFlex.react").FlexRow, {
        align: "center",
        className: (s || (s = r("stylex")))([
          d.pill,
          a ? d[a] : null,
          o("WAWebUISpacing").uiPadding.vert4,
          o("WAWebUISpacing").uiPadding.horiz8,
          o("WAWebUISpacing").uiMargin.vertAuto,
          i === !0 ? o("WAWebUISpacing").uiMargin.start8 : null,
        ]),
        children: t,
      });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(t) {
      var n = t.children,
        r = t.pillText,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return c.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "center",
        children: [
          n,
          c.jsx(
            m,
            babelHelpers.extends({}, a, {
              inline: n != null || a.inline,
              children: r,
            }),
          ),
        ],
      });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.Pill = m),
      (l.LabelPill = p));
  },
  98,
);
