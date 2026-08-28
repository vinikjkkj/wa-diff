__d(
  "mcdsFlexAlignContentStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { alignContent: "xc26acl", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "x1drydlv",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "x1y2eu07",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "x1wibz0a",
          $$css: !0,
        },
      },
      s = {
        every: { alignContent: "xnwe2h8", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "xezptpj",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "x6kg2x5",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "x1vt57xo",
          $$css: !0,
        },
      },
      u = {
        every: { alignContent: "x8gbvx8", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "xts4yms",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "xk5aybh",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "x197hxyj",
          $$css: !0,
        },
      },
      c = {
        every: { alignContent: "x1jpljmv", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "xh56iqu",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "x1ag4gfh",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "x21n0n7",
          $$css: !0,
        },
      },
      d = {
        every: { alignContent: "xcdzlcm", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "x8x3iix",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "xs6do87",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "xeph5o7",
          $$css: !0,
        },
      },
      m = {
        every: { alignContent: "xqjyukv", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignContent": "xhk6avq",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignContent":
            "x1vbshlo",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignContent": "xfpm56p",
          $$css: !0,
        },
      };
    function p(t) {
      switch (t) {
        case "center":
          return e;
        case "flex-end":
          return s;
        case "flex-start":
          return u;
        case "space-around":
          return c;
        case "space-between":
          return d;
        case "stretch":
          return m;
      }
    }
    function _(e) {
      return typeof e == "object"
        ? r("mcdsSelectStylesForEveryDevice")(
            p,
            r("getMerResponsiveCascadingStyle")(e),
          )
        : p(e).every;
    }
    l.default = _;
  },
  98,
);
