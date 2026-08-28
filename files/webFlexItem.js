__d(
  "webFlexItem",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = { reset: { minHeight: "x2lwn1j", minWidth: "xeuugli", $$css: !0 } },
      s = {
        center: { alignSelf: "xamitd3", $$css: !0 },
        end: { alignSelf: "xpvyfi4", $$css: !0 },
        start: { alignSelf: "xqcrz7y", $$css: !0 },
        stretch: { alignSelf: "xkh2ocl", $$css: !0 },
        baseline: { alignSelf: "xoi2r2e", $$css: !0 },
      },
      u = {
        0: { flexBasis: "x1r8uery", $$css: !0 },
        auto: { flexBasis: "xdl72j9", $$css: !0 },
        content: { flexBasis: "xcklp1c", $$css: !0 },
      },
      c = {
        0: { flexGrow: "x1c4vz4f", $$css: !0 },
        1: { flexGrow: "x1iyjqo2", $$css: !0 },
        2: { flexGrow: "xgyuaek", $$css: !0 },
        3: { flexGrow: "x1ikap7u", $$css: !0 },
        4: { flexGrow: "xrnhffl", $$css: !0 },
      },
      d = {
        0: { order: "x1g77sc7", $$css: !0 },
        1: { order: "x9ek82g", $$css: !0 },
        2: { order: "x14yy4lh", $$css: !0 },
        3: { order: "xo1ph6p", $$css: !0 },
        4: { order: "x182iqb8", $$css: !0 },
        5: { order: "x1h3rv7z", $$css: !0 },
      },
      m = {
        0: { flexShrink: "x2lah0s", $$css: !0 },
        1: { flexShrink: "xs83m0k", $$css: !0 },
        2: { flexShrink: "x5wqa0o", $$css: !0 },
        3: { flexShrink: "xo4cfa7", $$css: !0 },
        4: { flexShrink: "x1bcm92b", $$css: !0 },
      };
    function p(t) {
      var n = t.alignSelf,
        r = t.basis,
        o = t.defaultMinSize,
        a = o === void 0 ? 0 : o,
        i = t.grow,
        l = t.order,
        p = t.shrink;
      return [
        a === 0 && e.reset,
        n != null && s[n],
        r != null && u[r],
        i != null && c[i],
        l != null && d[l],
        p != null && m[p],
      ];
    }
    l.default = p;
  },
  98,
);
