__d(
  "MaintainedRouteConfigInternal",
  ["MetaConfig"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("MetaConfig")._("3") ? 6e4 : 2e4,
      s = 1e11,
      u = 4 * 1e3,
      c = {
        about_meta_coummnity_voices: {
          maintained: !0,
          maintainRouteForMs: 1200 * 1e3,
        },
        "airwave.home": { maintained: !0, maintainRouteForMs: u },
        "airwave.profile.self": { maintained: !0, maintainRouteForMs: u },
        "airwave.saved": { maintained: !0, maintainRouteForMs: u },
        "airwave.search": { maintained: !0, maintainRouteForMs: u },
        "airwave.settings": { maintained: !0, maintainRouteForMs: u },
        barcelona_feed: {
          maintained: !0,
          maintainRouteForMs: 1200 * 1e3,
          maintainRouteWhenJSHeapBelow: s,
        },
        barcelona_home: {
          maintained: !0,
          maintainRouteForMs: 1200 * 1e3,
          maintainRouteWhenJSHeapBelow: s,
        },
        comet_test_maintained_one: {
          maintained: !0,
          maintainRouteForMs: 300 * 1e3,
        },
        global_serp: {
          maintained: !0,
          maintainRouteForMs: 120 * 1e3,
          maintainRouteWhenJSHeapBelow: s,
        },
        home: {
          maintained: e > 0,
          maintainRouteForMs: e,
          maintainRouteWhenJSHeapBelow: s,
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
