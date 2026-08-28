__d(
  "mcdsFlexDisplayStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { display: "x78zum5", $$css: !0 },
        mobile: { "@media (max-width: 767px)_display": "x1dn74xm", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_display":
            "x4a20bl",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_display": "xtatjob", $$css: !0 },
      },
      s = {
        every: { display: "x3nfvp2", $$css: !0 },
        mobile: { "@media (max-width: 767px)_display": "x49nhbw", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_display":
            "x172f49c",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_display": "x1oxjex6",
          $$css: !0,
        },
      };
    function u(t) {
      switch (t) {
        case "flex":
          return e;
        case "inline-flex":
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
