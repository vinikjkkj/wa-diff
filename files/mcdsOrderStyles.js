__d(
  "mcdsOrderStyles",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { order: "x1g77sc7", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "x9rl0ip", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "x1mu1jf0",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "xwv1er1", $$css: !0 },
      },
      s = {
        every: { order: "x9ek82g", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "x3hbfqo", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "x17gl47v",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "xrci00h", $$css: !0 },
      },
      u = {
        every: { order: "x14yy4lh", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "x1hkdgjx", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "x7hyaor",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "xdykpd7", $$css: !0 },
      },
      c = {
        every: { order: "xo1ph6p", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "x1m1q7df", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "x970dqq",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "x1cb9j55", $$css: !0 },
      },
      d = {
        every: { order: "x182iqb8", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "xfaysoc", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "xiidk4x",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "xznt844", $$css: !0 },
      },
      m = {
        every: { order: "x1h3rv7z", $$css: !0 },
        mobile: { "@media (max-width: 767px)_order": "x1nqgi9i", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_order": "x1lo0eyo",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_order": "x1fvnbyj", $$css: !0 },
      };
    function p(t) {
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
        case 5:
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
