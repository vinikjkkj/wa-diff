__d(
  "WAWebPtvGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("ptv_receiving_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("ptv_autoplay_enabled");
    }
    function u() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds");
    }
    ((l.isPtvReceivingEnabled = e),
      (l.isPtvAutoplayEnabled = s),
      (l.getPtvAutoplayLoopLimit = u),
      (l.getPtvMaxDurationSeconds = c));
  },
  98,
);
