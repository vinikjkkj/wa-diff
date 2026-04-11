__d(
  "WAWebPttCalculateAudioProgress",
  [
    "WAWebPttGetDurationFromMediaOrProtobuf",
    "WAWebPttGetSafeDuration",
    "clamp",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.currentTime,
        a = t
          ? o(
              "WAWebPttGetDurationFromMediaOrProtobuf",
            ).getDurationFromMediaOrProtobuf(e, t)
          : o("WAWebPttGetSafeDuration").getSafeDuration(e);
      return a == null || a === 0 ? 0 : r("clamp")(n / a, 0, 1);
    }
    l.calculateAudioProgress = e;
  },
  98,
);
