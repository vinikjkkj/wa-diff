__d(
  "mcdsFlexWrapStyles",
  ["getMerResponsiveCascadingStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { flexWrap: "xozqiw3", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexWrap": "x1r6nztd", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexWrap":
            "x16d3llo",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexWrap": "x1b9j29z",
          $$css: !0,
        },
      },
      s = {
        every: { flexWrap: "x1a02dak", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexWrap": "xfddjzw", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexWrap":
            "x6fd3r7",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexWrap": "xoob2et",
          $$css: !0,
        },
      },
      u = {
        every: { flexWrap: "x8hhl5t", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexWrap": "xyuz7iw", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexWrap":
            "x5ix0wl",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexWrap": "x1sduvt",
          $$css: !0,
        },
      };
    function c(t) {
      switch (t) {
        case "nowrap":
          return e;
        case "wrap":
          return s;
        case "wrap-reverse":
          return u;
      }
    }
    function d(e) {
      var t,
        n,
        r,
        o = e.desktop,
        a = e.mobile,
        i = e.tablet;
      return [
        a != null && ((t = c(a)) == null ? void 0 : t.mobile),
        i != null && ((n = c(i)) == null ? void 0 : n.tablet),
        o != null && ((r = c(o)) == null ? void 0 : r.desktop),
      ];
    }
    function m(e) {
      return typeof e == "object"
        ? d(r("getMerResponsiveCascadingStyle")(e))
        : c(e).every;
    }
    l.default = m;
  },
  98,
);
