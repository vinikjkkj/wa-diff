__d(
  "WAWebFlex.react",
  ["WAWebFlexItem.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s = [
        "align",
        "alignSelf",
        "className",
        "direction",
        "justify",
        "justifySelf",
        "xstyle",
      ],
      u = ["ref"],
      c = ["ref"],
      d,
      m = d || (d = o("react")),
      p = { flex: { minWidth: "xeuugli", minHeight: "x2lwn1j", $$css: !0 } },
      _ = {
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        all: { justifyContent: "x1qughib", $$css: !0 },
        around: { justifyContent: "x1l1ennw", $$css: !0 },
        evenly: { justifyContent: "xaw8158", $$css: !0 },
        stretch: { justifyContent: "x1szn6h9", $$css: !0 },
      },
      f = {
        horizontal: { flexDirection: "x1q0g3np", $$css: !0 },
        vertical: { flexDirection: "xdt5ytf", $$css: !0 },
        horizontalReverse: { flexDirection: "x15zctf7", $$css: !0 },
        verticalReverse: { flexDirection: "x3ieub6", $$css: !0 },
      },
      g = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        baseline: { alignItems: "x1pha0wt", $$css: !0 },
      };
    function h(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.align,
        i = a === void 0 ? "start" : a,
        l = o.alignSelf,
        u = o.className,
        c = o.direction,
        d = o.justify,
        h = d === void 0 ? "start" : d,
        y = o.justifySelf,
        C = o.xstyle,
        b = babelHelpers.objectWithoutPropertiesLoose(o, s);
      return m.jsx(
        r("WAWebFlexItem.react"),
        babelHelpers.extends(
          {
            className: u,
            xstyle: [p.flex, _[h], f[c], g[i], C],
            align: l,
            justify: y,
            isFlexContainer: !0,
            ref: n,
          },
          b,
        ),
      );
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, u);
      return m.jsx(
        h,
        babelHelpers.extends({}, n, {
          direction: "horizontal",
          ref: t,
          children: n.children,
        }),
      );
    }
    y.displayName = y.name + " [from " + i.id + "]";
    function C(e) {
      var t = e.ref,
        n = babelHelpers.objectWithoutPropertiesLoose(e, c);
      return m.jsx(
        h,
        babelHelpers.extends({}, n, {
          direction: "vertical",
          ref: t,
          children: n.children,
        }),
      );
    }
    ((C.displayName = C.name + " [from " + i.id + "]"),
      (l.FlexItem = r("WAWebFlexItem.react")),
      (l.FlexContainer = h),
      (l.FlexRow = y),
      (l.FlexColumn = C));
  },
  98,
);
