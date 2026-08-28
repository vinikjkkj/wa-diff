__d(
  "mcdsSelectTextWeight",
  ["getMerResponsiveCascadingStyle", "mcdsSelectStylesForEveryDevice"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { fontWeight: "xo9d16g", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "xg7x8ev",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "x1sm9tiz",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "xxvj1tm",
          $$css: !0,
        },
      },
      s = {
        every: { fontWeight: "x15vymit", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "xv4wxz2",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "x1iovl42",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "x1xjdsz3",
          $$css: !0,
        },
      },
      u = {
        every: { fontWeight: "xl52lva", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "x17l39dc",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "xj49vbo",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "x1ewztk4",
          $$css: !0,
        },
      },
      c = {
        every: { fontWeight: "x1twfotg", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "xwohrl7",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "x12xxjuk",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "xdau234",
          $$css: !0,
        },
      },
      d = {
        every: { fontWeight: "x1kuy7fn", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "x141zgqw",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "xp1e2ba",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "xfkjazr",
          $$css: !0,
        },
      },
      m = {
        every: { fontWeight: "xg2d51n", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "x1puwg6",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "x12ac0yu",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "x15wrwp3",
          $$css: !0,
        },
      },
      p = {
        every: { fontWeight: "x1pd3egz", $$css: !0 },
        mobile: {
          "@media (max-width: 767px)_fontWeight": "x1kd9vzk",
          $$css: !0,
        },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_fontWeight":
            "x1kjlbv1",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_fontWeight": "x15kdql9",
          $$css: !0,
        },
      };
    function _(t) {
      switch (t) {
        case "extra_light":
          return e;
        case "light":
          return s;
        case "normal":
          return u;
        case "medium":
          return c;
        case "bold":
          return d;
        case "extra_bold":
          return m;
        case "inherit":
          return p;
      }
    }
    function f(e) {
      var t;
      return typeof e == "object"
        ? r("mcdsSelectStylesForEveryDevice")(
            _,
            r("getMerResponsiveCascadingStyle")(e),
          )
        : (t = _(e)) == null
          ? void 0
          : t.every;
    }
    l.default = f;
  },
  98,
);
