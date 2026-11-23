__d(
  "AdsPlayableHeatmapODSLogger",
  ["ODS"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 68,
      u = "ads.playable_heatmap",
      c = "click.play_pause",
      d = "click.settings_toggle",
      m = "click.show_all",
      p = "click.timeline_scrub",
      _ = "empty_state",
      f = "rendered";
    function g(t) {
      (e || (e = o("ODS"))).bumpEntityKey(s, u, t);
    }
    var h = function (t) {
        (g(f), t && g(_));
      },
      y = function () {
        g(c);
      },
      C = function () {
        g(m);
      },
      b = function () {
        g(p);
      },
      v = function () {
        g(d);
      };
    ((l.logHeatmapDisplayToODS = h),
      (l.logHeatmapPlayPauseToODS = y),
      (l.logHeatmapShowAllToODS = C),
      (l.logHeatmapScrubToODS = b),
      (l.logHeatmapSettingsToggleToODS = v));
  },
  98,
);
