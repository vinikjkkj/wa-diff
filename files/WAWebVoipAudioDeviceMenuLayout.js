__d(
  "WAWebVoipAudioDeviceMenuLayout",
  ["WAWebVoipMicrophoneLevelMeterLayout"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 10,
      s = 32,
      u = 40,
      c = e + s + u;
    function d(e, t, n) {
      var r =
        e -
        o("WAWebVoipMicrophoneLevelMeterLayout")
          .MICROPHONE_LEVEL_METER_LAYOUT_PX.cardGap;
      if (r < 2 * c) return { kind: "combined", maxHeight: e };
      var a = m(t),
        i = m(n),
        l = a + i;
      if (l <= r) {
        var s = a + Math.floor((r - l) / 2);
        return {
          kind: "split",
          microphoneMaxHeight: s,
          speakerMaxHeight: r - s,
        };
      }
      var u = Math.floor(r / 2);
      if (a <= i) {
        var d = Math.min(a, u);
        return {
          kind: "split",
          microphoneMaxHeight: d,
          speakerMaxHeight: r - d,
        };
      }
      var p = Math.min(i, u);
      return { kind: "split", microphoneMaxHeight: r - p, speakerMaxHeight: p };
    }
    function m(t) {
      return e + s + u * Math.max(1, t);
    }
    l.getAudioDeviceMenuHeights = d;
  },
  98,
);
