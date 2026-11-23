__d(
  "WAWebPttMessageSeekBar",
  ["fbt", "WAWebClock", "WAWebMessageSmoothRangeInput", "react"],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t =
        o("WAWebClock").Clock.durationStr(e.currentTime) +
        " / " +
        o("WAWebClock").Clock.durationStr(e.duration);
      return u.jsx(o("WAWebMessageSmoothRangeInput").SmoothRangeInput, {
        ariaLabel: s._(/*BTDS*/ ""),
        value: e.currentTime,
        valueText: t,
        min: 0,
        max: e.duration,
        smallSkip: 1,
        largeSkip: 10,
        onChange: e.onSeek,
        onCommit: e.onCommit,
        disabled: e.disabled,
        theme: d(e),
      });
    }
    c.displayName = c.name + " [from " + i.id + "]";
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
