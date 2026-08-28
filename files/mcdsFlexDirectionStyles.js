__d(
  "mcdsFlexDirectionStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { flexDirection: "x1q0g3np", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexDirection": "x9iw1id",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexDirection":
            "xx6i8ya",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexDirection": "xie8wau",
          $$css: !0,
        },
      },
      s = {
        every: { flexDirection: "x15zctf7", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexDirection": "xg1d88g",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexDirection":
            "xbv63b3",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexDirection": "x13ncz3h",
          $$css: !0,
        },
      },
      u = {
        every: { flexDirection: "xdt5ytf", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexDirection": "x19xhxss",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexDirection":
            "x6hrlo1",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexDirection": "x1m11752",
          $$css: !0,
        },
      },
      c = {
        every: { flexDirection: "x3ieub6", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_flexDirection": "x11ivnh4",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexDirection":
            "x12v74y6",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexDirection": "x135l814",
          $$css: !0,
        },
      };
    function d(t) {
      switch (t) {
        case "column":
          return u;
        case "column-reverse":
          return c;
        case "row":
          return e;
        case "row-reverse":
          return s;
      }
    }
    function m(e) {
      return typeof e == "object"
        ? r("mcdsSelectStylesForEveryDevice")(
            d,
            r("getMerResponsiveCascadingStyle")(e),
          )
        : d(e).every;
    }
    l.default = m;
  },
  98,
);
