__d(
  "WAWebMusicLyricsWindow",
  [],
  function (t, n, r, o, a, i) {
    var e = "\u22EF";
    function l(e, t, n) {
      return e + Math.min(Math.max(n, 0), t);
    }
    function s(e, t) {
      return Math.max(
        e.findLastIndex(function (e) {
          return e.startTimeMs <= t;
        }),
        0,
      );
    }
    function u(t, n, r) {
      var o = n + r;
      return t.some(function (t) {
        return (
          t.endTimeMs > n &&
          t.startTimeMs < o &&
          t.text.trim() !== "" &&
          t.text.trim() !== e
        );
      });
    }
    function c(e, t) {
      var n = t - e.startTimeMs;
      return e.wordOffsets.reduce(function (e, t) {
        return t.startOffsetMs <= n ? t.endIndex : e;
      }, 0);
    }
    ((i.EMPTY_LINE_FILLER = e),
      (i.getSongPositionMs = l),
      (i.getCurrentLineIndex = s),
      (i.hasLyricsInClip = u),
      (i.getSungLength = c));
  },
  66,
);
