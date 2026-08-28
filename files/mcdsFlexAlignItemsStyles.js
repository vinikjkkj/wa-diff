__d(
  "mcdsFlexAlignItemsStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { alignItems: "x1pha0wt", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignItems": "x1lgtu52",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignItems":
            "x6fl4vi",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignItems": "x1xdqnba",
          $$css: !0,
        },
      },
      s = {
        every: { alignItems: "x6s0dn4", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignItems": "xl49iz1",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignItems":
            "xx9i6jc",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignItems": "xl0nj6t",
          $$css: !0,
        },
      },
      u = {
        every: { alignItems: "xuk3077", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignItems": "x1t7fgp",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignItems":
            "x1vr45p6",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignItems": "x1lq94bc",
          $$css: !0,
        },
      },
      c = {
        every: { alignItems: "x1cy8zhl", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignItems": "x1uttgrm",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignItems":
            "x1dces20",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignItems": "xb4t8oj",
          $$css: !0,
        },
      },
      d = {
        every: { alignItems: "x1qjc9v5", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_alignItems": "x1vkgohp",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_alignItems":
            "x4jzun5",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_alignItems": "x8bf7w",
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
      return typeof e == "object"
        ? r("mcdsSelectStylesForEveryDevice")(
            m,
            r("getMerResponsiveCascadingStyle")(e),
          )
        : m(e).every;
    }
    l.default = p;
  },
  98,
);
