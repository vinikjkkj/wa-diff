__d(
  "WAWebShapeContainer.react",
  ["WAWebFlexBox.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["align", "justify", "size", "transparent", "xstyle"],
      s,
      u = s || (s = o("react")),
      c = {
        shape: {
          width: "xh8yej3",
          height: "x5yr21d",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        transparent: { backgroundColor: "xjbqb8w", $$css: !0 },
      };
    function d(t) {
      var n = t.align,
        r = n === void 0 ? "center" : n,
        a = t.justify,
        i = a === void 0 ? "center" : a,
        l = t.size,
        s = t.transparent,
        d = t.xstyle,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e);
      return u.jsx(
        o("WAWebFlexBox.react").FlexRow,
        babelHelpers.extends(
          {
            justify: i,
            align: r,
            xstyle: [c.shape, d, s === !0 && c.transparent],
            style: { width: l, height: l },
          },
          m,
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
