__d(
  "WAWebPttMessageSeekBar",
  ["WAWebClock", "WAWebMessageSmoothRangeInput", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t =
        o("WAWebClock").Clock.durationStr(e.currentTime) +
        " / " +
        o("WAWebClock").Clock.durationStr(e.duration);
      return s.jsx(o("WAWebMessageSmoothRangeInput").SmoothRangeInput, {
        value: e.currentTime,
        valueText: t,
        min: 0,
        max: e.duration,
        smallSkip: 1,
        largeSkip: 10,
        onChange: e.onSeek,
        onCommit: e.onCommit,
        disabled: e.disabled,
        theme: c(e),
      });
    }
    u.displayName = u.name + " [from " + i.id + "]";
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
