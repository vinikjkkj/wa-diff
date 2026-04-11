__d(
  "WAWebMessageListDayOfMsg",
  ["WAWeb-moment", "WAWebClock"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.startOfDaySkew;
      return t !== void 0 &&
        t > o("WAWebClock").Clock.skew - 30 &&
        t < o("WAWebClock").Clock.skew + 30
        ? e.startOfDay
        : ((e.startOfDaySkew = o("WAWebClock").Clock.skew),
          (e.startOfDay = r("WAWeb-moment")
            .unix(e.t + o("WAWebClock").Clock.skew)
            .startOf("day")
            .unix()));
    }
    l.default = e;
  },
  98,
);
