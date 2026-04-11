__d(
  "WAWebPttGetDurationFromMediaOrProtobuf",
  ["WAWebPttGetSafeDuration"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      return (n = o("WAWebPttGetSafeDuration").getSafeDuration(e)) != null
        ? n
        : s(t);
    }
    function s(e) {
      var t = parseFloat(e.duration);
      return Number.isFinite(t) ? t : 0;
    }
    ((l.getDurationFromMediaOrProtobuf = e), (l.getDurationFromProto = s));
  },
  98,
);
