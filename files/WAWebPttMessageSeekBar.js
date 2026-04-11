__d(
  "WAWebPttMessageSeekBar",
  [
    "WAWebClock",
    "WAWebMessageSmoothRangeInput",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n =
          o("WAWebClock").Clock.durationStr(e.currentTime) +
          " / " +
          o("WAWebClock").Clock.durationStr(e.duration),
        r = e.currentTime,
        a = e.duration,
        i = e.onSeek,
        l = e.onCommit,
        u = e.disabled,
        d;
      t[0] !== e ? ((d = c(e)), (t[0] = e), (t[1] = d)) : (d = t[1]);
      var m;
      return (
        t[2] !== e.currentTime ||
        t[3] !== e.disabled ||
        t[4] !== e.duration ||
        t[5] !== e.onCommit ||
        t[6] !== e.onSeek ||
        t[7] !== d ||
        t[8] !== n
          ? ((m = s.jsx(o("WAWebMessageSmoothRangeInput").SmoothRangeInput, {
              value: r,
              valueText: n,
              min: 0,
              max: a,
              smallSkip: 1,
              largeSkip: 10,
              onChange: i,
              onCommit: l,
              disabled: u,
              theme: d,
            })),
            (t[2] = e.currentTime),
            (t[3] = e.disabled),
            (t[4] = e.duration),
            (t[5] = e.onCommit),
            (t[6] = e.onSeek),
            (t[7] = d),
            (t[8] = n),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    function c(e) {
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
    l.default = u;
  },
  98,
);
