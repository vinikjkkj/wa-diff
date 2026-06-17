__d(
  "WAWebPttMessageSeekBar",
  [
    "fbt",
    "WAWebClock",
    "WAWebMessageSmoothRangeInput",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = o("react-compiler-runtime").c(11),
        n =
          o("WAWebClock").Clock.durationStr(e.currentTime) +
          " / " +
          o("WAWebClock").Clock.durationStr(e.duration),
        r;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = s._(/*BTDS*/ "Audio playback")), (t[0] = r))
        : (r = t[0]);
      var a = e.currentTime,
        i = e.duration,
        l = e.onSeek,
        c = e.onCommit,
        m = e.disabled,
        p;
      t[1] !== e ? ((p = d(e)), (t[1] = e), (t[2] = p)) : (p = t[2]);
      var _;
      return (
        t[3] !== e.currentTime ||
        t[4] !== e.disabled ||
        t[5] !== e.duration ||
        t[6] !== e.onCommit ||
        t[7] !== e.onSeek ||
        t[8] !== p ||
        t[9] !== n
          ? ((_ = u.jsx(o("WAWebMessageSmoothRangeInput").SmoothRangeInput, {
              ariaLabel: r,
              value: a,
              valueText: n,
              min: 0,
              max: i,
              smallSkip: 1,
              largeSkip: 10,
              onChange: l,
              onCommit: c,
              disabled: m,
              theme: p,
            })),
            (t[3] = e.currentTime),
            (t[4] = e.disabled),
            (t[5] = e.duration),
            (t[6] = e.onCommit),
            (t[7] = e.onSeek),
            (t[8] = p),
            (t[9] = n),
            (t[10] = _))
          : (_ = t[10]),
        _
      );
    }
    function d(e) {
      var t = e.outgoing,
        n = e.played;
      return t
        ? n
          ? o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme
              .AUDIO_OUTGOING_PLAYED
          : o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme
              .AUDIO_OUTGOING_UNPLAYED
        : n
          ? o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme
              .AUDIO_INCOMING_PLAYED
          : o("WAWebMessageSmoothRangeInput").SmoothRangeInputTheme
              .AUDIO_INCOMING_UNPLAYED;
    }
    l.default = c;
  },
  226,
);
