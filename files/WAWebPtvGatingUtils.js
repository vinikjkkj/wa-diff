__d(
  "WAWebPtvGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("ptv_autoplay_enabled");
    }
    function s() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds");
    }
    ((l.isPtvAutoplayEnabled = e),
      (l.getPtvAutoplayLoopLimit = s),
      (l.getPtvMaxDurationSeconds = u));
  },
  98,
);
