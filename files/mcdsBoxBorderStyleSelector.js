__d(
  "mcdsBoxBorderStyleSelector",
  [
    "getMerResponsiveCascadingStyle",
    "isTruthy",
    "mcdsBorderColorStyleSelector",
    "mcdsSelectStylesForEveryDevice",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        common: {
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x972fbf",
          borderInlineEndWidth: "x10w94by",
          borderBottomWidth: "x1qhh985",
          borderInlineStartWidth: "x14e42zd",
          $$css: !0,
        },
      },
      s = {
        desktop: {
          "@media (min-width: 1025px)_borderTopWidth": "xskiz5k",
          $$css: !0,
        },
        every: { borderTopWidth: "x178xt8z", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_borderTopWidth": "x1278334",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_borderTopWidth":
            "xktna5t",
          $$css: !0,
        },
      },
      u = {
        desktop: {
          "@media (min-width: 1025px)_borderBottomWidth": "xfbkj3e",
          $$css: !0,
        },
        every: { borderBottomWidth: "xso031l", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_borderBottomWidth": "x1dg0hrn",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_borderBottomWidth":
            "x1oj6949",
          $$css: !0,
        },
      },
      c = {
        desktop: {
          "@media (min-width: 1025px)_borderInlineStartWidth": "xvuncd5",
          $$css: !0,
        },
        every: { borderInlineStartWidth: "xpilrb4", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_borderInlineStartWidth": "x2ndikc",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_borderInlineStartWidth":
            "x1fieixt",
          $$css: !0,
        },
      },
      d = {
        desktop: {
          "@media (min-width: 1025px)_borderInlineEndWidth": "xr6bsnu",
          $$css: !0,
        },
        every: { borderInlineEndWidth: "x1lun4ml", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_borderInlineEndWidth": "xe58uab",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_borderInlineEndWidth":
            "x1yh2gxt",
          $$css: !0,
        },
      },
      m = {
        desktop: {
          "@media (min-width: 1025px)_borderTopWidth": "xskiz5k",
          "@media (min-width: 1025px)_borderInlineEndWidth": "xr6bsnu",
          "@media (min-width: 1025px)_borderBottomWidth": "xfbkj3e",
          "@media (min-width: 1025px)_borderInlineStartWidth": "xvuncd5",
          $$css: !0,
        },
        every: {
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          $$css: !0,
        },
        mobile: {
          "@media (max-width: 767px)_borderTopWidth": "x1278334",
          "@media (max-width: 767px)_borderInlineEndWidth": "xe58uab",
          "@media (max-width: 767px)_borderBottomWidth": "x1dg0hrn",
          "@media (max-width: 767px)_borderInlineStartWidth": "x2ndikc",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_borderTopWidth":
            "xktna5t",
          "@media (min-width: 768px) and (max-width: 1024px)_borderInlineEndWidth":
            "x1yh2gxt",
          "@media (min-width: 768px) and (max-width: 1024px)_borderBottomWidth":
            "x1oj6949",
          "@media (min-width: 768px) and (max-width: 1024px)_borderInlineStartWidth":
            "x1fieixt",
          $$css: !0,
        },
      };
    function p(e) {
      return r("isTruthy")(e) ? s : null;
    }
    function _(e) {
      return r("isTruthy")(e) ? u : null;
    }
    function f(e) {
      return r("isTruthy")(e) ? c : null;
    }
    function g(e) {
      return r("isTruthy")(e) ? d : null;
    }
    function h(e) {
      return r("isTruthy")(e) ? m : null;
    }
    function y(t, n, o) {
      var a,
        i,
        l,
        s,
        u,
        c = o.all,
        d = c === void 0 ? !1 : c,
        m = o.bottom,
        y = m === void 0 ? !1 : m,
        C = o.end,
        b = C === void 0 ? !1 : C,
        v = o.start,
        S = v === void 0 ? !1 : v,
        R = o.top,
        L = R === void 0 ? !1 : R;
      return [
        r("mcdsBorderColorStyleSelector")(t, n),
        e.common,
        typeof d == "object"
          ? r("mcdsSelectStylesForEveryDevice")(
              h,
              r("getMerResponsiveCascadingStyle")(d),
            )
          : (a = h(d)) == null
            ? void 0
            : a.every,
        typeof L == "object"
          ? r("mcdsSelectStylesForEveryDevice")(
              p,
              r("getMerResponsiveCascadingStyle")(L),
            )
          : (i = p(L)) == null
            ? void 0
            : i.every,
        typeof y == "object"
          ? r("mcdsSelectStylesForEveryDevice")(
              _,
              r("getMerResponsiveCascadingStyle")(y),
            )
          : (l = _(y)) == null
            ? void 0
            : l.every,
        typeof S == "object"
          ? r("mcdsSelectStylesForEveryDevice")(
              f,
              r("getMerResponsiveCascadingStyle")(S),
            )
          : (s = f(S)) == null
            ? void 0
            : s.every,
        typeof b == "object"
          ? r("mcdsSelectStylesForEveryDevice")(
              g,
              r("getMerResponsiveCascadingStyle")(b),
            )
          : (u = g(b)) == null
            ? void 0
            : u.every,
      ];
    }
    l.default = y;
  },
  98,
);
