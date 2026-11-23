__d(
  "WAWebNewsletterStatusCardVoiceLayout",
  ["WAWebNewsletterStatusCardTypography"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (e = o("WAWebNewsletterStatusCardTypography")).fromAndroidDp(48),
      u = e.fromAndroidDp(12),
      c = e.fromAndroidDp(18),
      d = e.fromAndroidDp(74),
      m = e.fromAndroidDp(32),
      p = e.fromAndroidDp(12),
      _ = e.fromAndroidDp(12),
      f = 0.6,
      g = e.fromAndroidDp(2),
      h = s;
    function y(e) {
      var t = e.bubble,
        n = e.font,
        r = e.measure,
        o = e.voice,
        a = t.y + t.height / 2,
        i = { x: t.x + u, y: a - s / 2, width: s, height: s },
        l = t.x + t.width - p,
        f = t.x + d,
        g = {
          x: f,
          y: a - m / 2,
          width: Math.max(0, l - r(o.durationText, n) - _ - f),
          height: m,
        };
      return {
        avatar: i,
        mic: { x: i.x + s - c, y: i.y + s - c, width: c, height: c },
        bars: C(g, o.waveform),
        duration: {
          text: o.durationText,
          x: l,
          y: a,
          font: n,
          align: "right",
          isRtl: !1,
        },
      };
    }
    function C(e, t) {
      var n = t.length > 0 ? e.width / t.length : 0,
        r = n * f;
      return t.map(function (t, o) {
        var a = Math.max(g, e.height * Math.min(1, Math.max(0, t)));
        return {
          x: e.x + o * n + (n - r) / 2,
          y: e.y + (e.height - a) / 2,
          width: r,
          height: a,
        };
      });
    }
    ((l.CARD_VOICE_ROW_HEIGHT = h), (l.layoutCardVoice = y));
  },
  98,
);
