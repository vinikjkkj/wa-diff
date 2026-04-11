__d(
  "WAWebWebpToAnimationFramesWorker",
  ["CurrentWebWorker", "WAWeb-webp"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-webp").cwrap("WebpToAnimationFrames", "number", [
      "array",
      "number",
    ]);
    r("CurrentWebWorker").setMessageHandler(function (t) {
      for (
        var n,
          o = t.webpBuffer,
          a = new Uint8Array(o),
          i = e(a, a.length) >> 2,
          l = (n = r("WAWeb-webp")).HEAP32[i],
          s = n.HEAP32[i + 1],
          u = n.HEAP32[i + 2],
          c = n.HEAP32[i + 3] >> 2,
          d = [],
          m = 0;
        m < l;
        m++
      ) {
        var p = r("WAWeb-webp").HEAP32[c + m * 2],
          _ = r("WAWeb-webp").HEAP32[c + m * 2 + 1],
          f = r("WAWeb-webp").HEAPU8.slice(_, _ + u * s * 4).buffer;
        d.push({ duration: p, rgbaBuffer: f });
      }
      var g = { width: s, height: u, frames: d };
      globalThis.postMessage(
        g,
        d.map(function (e) {
          return e.rgbaBuffer;
        }),
      );
    });
    function s() {}
    l.default = s;
  },
  98,
);
