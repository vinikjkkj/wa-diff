__d(
  "WAWebVoipVideoFrameSourceRectProbe",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e() {
      try {
        var e = new OffscreenCanvas(4, 2),
          t = e.getContext("2d");
        if (t == null) return !1;
        ((t.fillStyle = "#ff0000"),
          t.fillRect(0, 0, 2, 2),
          (t.fillStyle = "#0000ff"),
          t.fillRect(2, 0, 2, 2));
        var n = new VideoFrame(e, { timestamp: 0 }),
          r = new OffscreenCanvas(2, 2),
          o = r.getContext("2d");
        if (o == null) return (n.close(), !1);
        (o.drawImage(n, 0, 0, 2, 2, 0, 0, 2, 2), n.close());
        var a = o.getImageData(1, 1, 1, 1).data;
        return a[0] > 200 && a[2] < 50;
      } catch (e) {
        return !1;
      }
    }
    i.probeVideoFrameSourceRectSupport = e;
  },
  66,
);
