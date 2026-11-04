__d(
  "WAWebMusicWheelDelta",
  [],
  function (t, n, r, o, a, i) {
    function e(e, t, n, r) {
      return t === WheelEvent.DOM_DELTA_LINE
        ? e * n
        : t === WheelEvent.DOM_DELTA_PAGE
          ? e * r
          : e;
    }
    i.toDeltaPx = e;
  },
  66,
);
