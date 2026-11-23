__d(
  "WAWebChartUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n) {
      return ((e - t[0]) * (n[1] - n[0])) / (t[1] - t[0]) + n[0];
    }
    function l(e) {
      var t = [];
      for (var n of e) {
        var r = n[0],
          o = n[1];
        (t.push(r), t.push(o));
      }
      return t;
    }
    var s = {
      light: ["#007BFC", "#1DAA61", "#B80531"],
      dark: ["#53BDEB", "#21C063", "#FA99A4"],
    };
    function u(e) {
      return c(s[e]);
    }
    function c(e) {
      return function (t) {
        return e[t % e.length];
      };
    }
    var d = 300,
      m = 10;
    ((i.scale = e),
      (i.flatten = l),
      (i.makeGetChartColorFromTheme = u),
      (i.makeGetChartColor = c),
      (i.ANIMATION_DURATION_MS = d),
      (i.ANIMATION_REFRESH_INTERVAL_MS = m));
  },
  66,
);
