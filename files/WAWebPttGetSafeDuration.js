__d(
  "WAWebPttGetSafeDuration",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      var t = e.duration;
      return Number.isFinite(t) ? t : null;
    }
    i.getSafeDuration = e;
  },
  66,
);
