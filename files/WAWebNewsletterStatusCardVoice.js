__d(
  "WAWebNewsletterStatusCardVoice",
  ["WAWebCanvasUtils", "WAWebClockDurationFormatters", "WAWebMsgType", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 100,
      s = 64,
      u = 0.2,
      c = 5,
      d = 0.15,
      m = "#B3BEC4",
      p = "#53BDEB",
      _ = Array.from({ length: s }, function (e, t) {
        return u + (t % c) * d;
      }),
      f = p;
    function g(t) {
      var n, r, a;
      if (t.type !== o("WAWebMsgType").MSG_TYPE.PTT) return null;
      var i = (n = t.mediaData) == null ? void 0 : n.waveform;
      return {
        durationText: o("WAWebClockDurationFormatters").durationStr(
          (r = (a = t.mediaData) == null ? void 0 : a.duration) != null ? r : 0,
        ),
        waveform:
          i != null && i.length > 0
            ? Array.from(i, function (t) {
                return t / e;
              })
            : _,
      };
    }
    function h(e, t, n) {
      var r = Math.round(t.length * n);
      t.forEach(function (t, n) {
        ((e.fillStyle = n < r ? p : m),
          e.fillRect(t.x, t.y, t.width, t.height));
      });
    }
    function y(e) {
      var t,
        n = e.canvas,
        a = e.layout,
        i = e.scale,
        l = (t = a.voice) == null ? void 0 : t.bars;
      if (l == null) return null;
      var s = o("WAWebCanvasUtils").createCanvas(n.width, n.height),
        u = s.getContext("2d");
      if (u == null) throw r("err")("getCardVoiceScene: no 2D canvas context");
      return {
        width: n.width,
        height: n.height,
        drawFrame: function (t) {
          return (
            u.drawImage(n, 0, 0),
            u.save(),
            u.scale(i, i),
            h(u, l, t),
            u.restore(),
            s
          );
        },
      };
    }
    ((l.CARD_VOICE_PLAYED_COLOR = f),
      (l.getCardVoiceContent = g),
      (l.paintCardVoiceBars = h),
      (l.getCardVoiceScene = y));
  },
  98,
);
