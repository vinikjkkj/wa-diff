__d(
  "mcdsFlexShrinkStyles",
  ["getMerResponsiveCascadingStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { flexShrink: "x2lah0s", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexShrink": "x9oh63r",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexShrink":
            "xr1gs63",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexShrink": "xsqumhk",
          $$css: !0,
        },
      },
      s = {
        every: { flexShrink: "xs83m0k", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexShrink": "xrdxatf",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexShrink":
            "x1yepq5q",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexShrink": "xca3z26",
          $$css: !0,
        },
      },
      u = {
        every: { flexShrink: "x5wqa0o", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexShrink": "x1asd1xh",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexShrink":
            "x1ty9wn8",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexShrink": "x1wz7xtb",
          $$css: !0,
        },
      },
      c = {
        every: { flexShrink: "xo4cfa7", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexShrink": "x1evqr0a",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexShrink":
            "x146uw19",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexShrink": "x1kiv6rb",
          $$css: !0,
        },
      },
      d = {
        every: { flexShrink: "x1bcm92b", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexShrink": "x3hjnib",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexShrink":
            "x1x9kn6l",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexShrink": "xfmadq5",
          $$css: !0,
        },
      };
    function m(t) {
      switch (t) {
        case 0:
          return e;
        case 1:
          return s;
        case 2:
          return u;
        case 3:
          return c;
        case 4:
          return d;
      }
    }
    function p(e) {
      var t,
        n,
        r,
        o = e.desktop,
        a = e.mobile,
        i = e.tablet;
      return [
        a != null && ((t = m(a)) == null ? void 0 : t.mobile),
        i != null && ((n = m(i)) == null ? void 0 : n.tablet),
        o != null && ((r = m(o)) == null ? void 0 : r.desktop),
      ];
    }
    function _(e) {
      return typeof e == "object"
        ? p(r("getMerResponsiveCascadingStyle")(e))
        : m(e).every;
    }
    l.default = _;
  },
  98,
);
