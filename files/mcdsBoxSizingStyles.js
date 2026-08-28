__d(
  "mcdsBoxSizingStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { boxSizing: "x9f619", $$css: !0 },
        mobile: { "@media (max-width: 767px)_boxSizing": "xrs1zhw", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_boxSizing":
            "xunqylw",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_boxSizing": "x1lf6g7z",
          $$css: !0,
        },
      },
      s = {
        every: { boxSizing: "x1afcbsf", $$css: !0 },
        mobile: { "@media (max-width: 767px)_boxSizing": "xprj77l", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_boxSizing":
            "xhm1816",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_boxSizing": "x1pj7c0q",
          $$css: !0,
        },
      };
    function u(t) {
      switch (t) {
        case "border-box":
          return e;
        case "content-box":
          return s;
      }
    }
    function c(e) {
      return typeof e == "object"
        ? r("mcdsSelectStylesForEveryDevice")(
            u,
            r("getMerResponsiveCascadingStyle")(e),
          )
        : u(e).every;
    }
    l.default = c;
  },
  98,
);
