__d(
  "WAWebPtvStatusCard",
  ["WAWebCanvasUtils", "WAWebNewsletterStatusCardPalette", "err"],
  function (t, n, r, o, a, i, l) {
    var e = 720,
      s = 1280,
      u = 270,
      c = e / 2,
      d = s / 2,
      m = 7,
      p = "#FFFFFF",
      _ = 32,
      f = "rgba(0, 0, 0, 0.25)",
      g = "#1DAA61",
      h = "#171616",
      y = -Math.PI / 2,
      C = 60,
      b = 0.15,
      v = 2 * Math.PI;
    function S(e, t) {
      var n = t ? h : g;
      return {
        background: L(e),
        area: { x: c - u, y: d - u, width: u * 2, height: u * 2 },
        clip: { kind: "circle" },
        overlay: {
          frameRate: C,
          draw: function (t, r) {
            return E(t, r, n);
          },
        },
      };
    }
    function R(e) {
      var t = Math.floor(Math.min(e.width, e.height) / Math.SQRT2);
      if (t < 1) return null;
      var n = o("WAWebNewsletterStatusCardPalette").getPaletteSampleSize(t, t),
        r = o("WAWebCanvasUtils")
          .createCanvas(n.width, n.height)
          .getContext("2d");
      return r == null
        ? null
        : ((r.imageSmoothingEnabled = !1),
          r.drawImage(
            e.source,
            (e.width - t) / 2,
            (e.height - t) / 2,
            t,
            t,
            0,
            0,
            n.width,
            n.height,
          ),
          o("WAWebNewsletterStatusCardPalette").getDominantColor(
            r.getImageData(0, 0, n.width, n.height).data,
          ));
    }
    function L(t) {
      var n = o("WAWebCanvasUtils").createCanvas(e, s),
        a = n.getContext("2d");
      if (a == null)
        throw r("err")("getPtvStatusCardScene: no 2D canvas context");
      var i = o("WAWebNewsletterStatusCardPalette").getCardBackground(t),
        l = i.bottom,
        g = i.top,
        h = a.createLinearGradient(0, 0, 0, s);
      return (
        h.addColorStop(0, g),
        h.addColorStop(1, l),
        (a.fillStyle = h),
        a.fillRect(0, 0, e, s),
        (a.shadowBlur = _),
        (a.shadowColor = f),
        (a.fillStyle = p),
        a.beginPath(),
        a.arc(c, d, u + m, 0, v),
        a.fill(),
        n
      );
    }
    function E(e, t, n) {
      var r = t.clipDurationSeconds,
        o = t.frameTimeSeconds,
        a = k(o, r);
      a <= 0 ||
        (e.beginPath(),
        e.arc(c, d, u + m / 2, y, y + v * a),
        (e.lineWidth = m),
        (e.strokeStyle = n),
        e.stroke());
    }
    function k(e, t) {
      var n = t - b;
      return n <= 0 ? 1 : Math.min(Math.max(e / n, 0), 1);
    }
    ((l.getPtvStatusCardScene = S), (l.getNoteColor = R));
  },
  98,
);
