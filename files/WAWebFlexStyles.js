__d(
  "WAWebFlexStyles",
  [],
  function (t, n, r, o, a, i, l) {
    var e = {
        displayFlex: { display: "x78zum5", $$css: !0 },
        displayInlineFlex: { display: "x3nfvp2", $$css: !0 },
      },
      s = {
        nowrap: { flexWrap: "xozqiw3", $$css: !0 },
        wrap: { flexWrap: "x1a02dak", $$css: !0 },
        wrapReverse: { flexWrap: "x8hhl5t", $$css: !0 },
      },
      u = {
        auto: { alignSelf: "x1oa3qoh", $$css: !0 },
        start: { alignSelf: "xqcrz7y", $$css: !0 },
        center: { alignSelf: "xamitd3", $$css: !0 },
        end: { alignSelf: "xpvyfi4", $$css: !0 },
        stretch: { alignSelf: "xkh2ocl", $$css: !0 },
        baseline: { alignSelf: "xoi2r2e", $$css: !0 },
      },
      c = {
        auto: { justifySelf: "x12fk4p8", $$css: !0 },
        start: { justifySelf: "xwldb3t", $$css: !0 },
        center: { justifySelf: "x7v7x1q", $$css: !0 },
        end: { justifySelf: "x15bdqvn", $$css: !0 },
        stretch: { justifySelf: "xuy72oy", $$css: !0 },
      },
      d = {
        start: { justifyContent: "x1nhvcw1", $$css: !0 },
        center: { justifyContent: "xl56j7k", $$css: !0 },
        end: { justifyContent: "x13a6bvl", $$css: !0 },
        all: { justifyContent: "x1qughib", $$css: !0 },
        around: { justifyContent: "x1l1ennw", $$css: !0 },
        evenly: { justifyContent: "xaw8158", $$css: !0 },
        stretch: { justifyContent: "x1szn6h9", $$css: !0 },
      },
      m = {
        horizontal: { flexDirection: "x1q0g3np", $$css: !0 },
        vertical: { flexDirection: "xdt5ytf", $$css: !0 },
        horizontalReverse: { flexDirection: "x15zctf7", $$css: !0 },
        verticalReverse: { flexDirection: "x3ieub6", $$css: !0 },
      },
      p = {
        center: { alignItems: "x6s0dn4", $$css: !0 },
        start: { alignItems: "x1cy8zhl", $$css: !0 },
        end: { alignItems: "xuk3077", $$css: !0 },
        stretch: { alignItems: "x1qjc9v5", $$css: !0 },
        baseline: { alignItems: "x1pha0wt", $$css: !0 },
      };
    function _(t) {
      var n = t.basis,
        r = t.grow,
        o = t.order,
        a = t.shrink;
      return {
        xstyle: [
          t.flex === !0 && e.displayFlex,
          t.inline === !0 && e.displayInlineFlex,
          t.wrap != null && s[t.wrap],
          t.alignSelf != null && u[t.alignSelf],
          t.justifySelf != null && c[t.justifySelf],
          t.flex === !0 && [
            t.align != null && p[t.align],
            t.justify != null && d[t.justify],
            t.direction != null && m[t.direction],
          ],
        ],
        inline: {
          flexBasis: typeof n == "string" || n == null ? n : n + "px",
          flexGrow: r,
          flexShrink: a,
          order: o,
        },
      };
    }
    l.getFlexStyles = _;
  },
  98,
);
