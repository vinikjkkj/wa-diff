__d(
  "mcdsFlexBasisStyles",
  ["getMerResponsiveCascadingStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { flexBasis: "x1r8uery", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexBasis": "x17gkyaf",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexBasis":
            "xdtospb",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexBasis": "x40gx40",
          $$css: !0,
        },
      },
      s = {
        every: { flexBasis: "xdl72j9", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexBasis": "x1tu0tqs",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexBasis":
            "x14cwxrw",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexBasis": "xh1efcx",
          $$css: !0,
        },
      },
      u = {
        every: { flexBasis: "xcklp1c", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexBasis": "x1l5m18u",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexBasis":
            "x1buhe1s",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexBasis": "x1yyhp02",
          $$css: !0,
        },
      };
    function c(t) {
      switch (t) {
        case "auto":
          return s;
        case "content":
          return u;
        case "zero":
          return e;
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
