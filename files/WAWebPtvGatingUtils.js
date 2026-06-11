__d(
  "WAWebPtvGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o("WAWebABProps").getABPropConfigValue("ptv_autoplay_loop_limit");
      return e === 0 ? 1 / 0 : e;
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue("ptv_max_duration_seconds");
    }
    ((l.getPtvAutoplayLoopLimit = e), (l.getPtvMaxDurationSeconds = s));
  },
  98,
);
