__d(
  "createGlimmerSelector",
  [],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      default: {
        backgroundImage: "x1k7hgvv",
        backgroundColor: null,
        $$css: !0,
      },
      input: { backgroundImage: "x598uhx", backgroundColor: null, $$css: !0 },
    };
    function s(t) {
      var n = t.styles,
        r = n.color,
        o = r.glimmerStyles,
        a = r.glimmerVariantsStyles;
      return function (n) {
        var t = n != null ? n : {},
          r = t.index,
          i = r === void 0 ? 0 : r,
          l = t.isLargeArea,
          s = l === void 0 ? !1 : l,
          u = t.variant,
          c = u === void 0 ? "default" : u;
        return [c === "input" ? a.input : o[i], s && e[c]];
      };
    }
    l.createGlimmerSelector = s;
  },
  98,
);
