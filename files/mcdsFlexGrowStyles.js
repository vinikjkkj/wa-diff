__d(
  "mcdsFlexGrowStyles",
  ["getMerResponsiveCascadingStyle"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        every: { flexGrow: "x1c4vz4f", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexGrow": "xy70v0n", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexGrow":
            "x1p43u3e",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexGrow": "xhqrkt7",
          $$css: !0,
        },
      },
      s = {
        every: { flexGrow: "x1iyjqo2", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexGrow": "xvhmrvc", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexGrow":
            "x1b89h26",
          $$css: !0,
        },
        desktop: { "@media (min-width: 1025px)_flexGrow": "xbjzb6", $$css: !0 },
      },
      u = {
        every: { flexGrow: "xgyuaek", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexGrow": "xz8jsyo", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexGrow":
            "x15jmrrv",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexGrow": "xfcg0f1",
          $$css: !0,
        },
      },
      c = {
        every: { flexGrow: "x1ikap7u", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexGrow": "xenvc0x", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexGrow":
            "x1veh5qs",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexGrow": "x1t6zt4k",
          $$css: !0,
        },
      },
      d = {
        every: { flexGrow: "xrnhffl", $$css: !0 },
        mobile: { "@media (max-width: 767px)_flexGrow": "xq2rqyo", $$css: !0 },
        tablet: {
          "@media (min-width: 768px) and (max-width: 1024px)_flexGrow":
            "x1uv67d3",
          $$css: !0,
        },
        desktop: {
          "@media (min-width: 1025px)_flexGrow": "x14i1krb",
          $$css: !0,
        },
      };
    function m(t) {
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
