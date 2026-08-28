__d(
  "mcdsFlexAlignSelfStyles",
  ["getMerResponsiveCascadingStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { alignSelf: "xoi2r2e", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignSelf": "x1khyo5i",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignSelf":
            "x1bkab0a",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignSelf": "x14siryb",
          $$css: !0,
        },
      },
      s = {
        every: { alignSelf: "xamitd3", $$css: !0 },
        mobile: { "@media (max-width: 767px)_alignSelf": "xstqx8y", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignSelf":
            "xgdd6jy",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignSelf": "xbjgbo8",
          $$css: !0,
        },
      },
      u = {
        every: { alignSelf: "xpvyfi4", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignSelf": "x1ktgrjp",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignSelf":
            "x1v6s7v3",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignSelf": "x1ym0ulo",
          $$css: !0,
        },
      },
      c = {
        every: { alignSelf: "xqcrz7y", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignSelf": "x16myh11",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignSelf":
            "xom0l20",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignSelf": "x3n3m2j",
          $$css: !0,
        },
      },
      d = {
        every: { alignSelf: "xkh2ocl", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignSelf": "x1vkauar",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignSelf":
            "x2qdsqk",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignSelf": "x1ce2247",
          $$css: !0,
        },
      };
    function m(t) {
      switch (t) {
        case "baseline":
          return e;
        case "center":
          return s;
        case "flex-end":
          return u;
        case "flex-start":
          return c;
        case "stretch":
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
