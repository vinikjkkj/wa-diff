__d(
  "mcdsFlexJustifyContentStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { justifyContent: "xl56j7k", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "xif99yt",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "x1k4mf2b",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "x1nql0br",
          $$css: !0,
        },
      },
      s = {
        every: { justifyContent: "x13a6bvl", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "x13atguj",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "xkbxojp",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "x1i0mha5",
          $$css: !0,
        },
      },
      u = {
        every: { justifyContent: "x1nhvcw1", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "x1658oxj",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "x1wyrfho",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "x1een3gp",
          $$css: !0,
        },
      },
      c = {
        every: { justifyContent: "x1l1ennw", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "x1kpr9t5",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "x1cbc14y",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "xxcqn7d",
          $$css: !0,
        },
      },
      d = {
        every: { justifyContent: "x1qughib", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "x17mjmcm",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "x1dig2fh",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "xlkrqb5",
          $$css: !0,
        },
      },
      m = {
        every: { justifyContent: "xaw8158", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_justifyContent": "x1429aar",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_justifyContent":
            "x1n9a3x6",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_justifyContent": "xo6o8yr",
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
        case "space-evenly":
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
