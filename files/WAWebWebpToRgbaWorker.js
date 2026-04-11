__d(
  "WAWebWebpToRgbaWorker",
  ["CurrentWebWorker", "WAWeb-webp", "err"],
  function (t, n, r, o, a, i, l) {
    var e = r("WAWeb-webp").cwrap("WebpToRGBA", "number", ["array", "number"]);
    r("CurrentWebWorker").setMessageHandler(function (t) {
      var n = t.webpBuffer,
        o = new Uint8Array(n),
        a = e(o, o.length),
        i = r("WAWeb-webp").HEAP32[(a + 0) >> 2],
        l = r("WAWeb-webp").HEAP32[(a + 4) >> 2],
        s = r("WAWeb-webp").HEAP32[(a + 8) >> 2];
      if (!s) throw r("err")("unsupported");
      var u = r("WAWeb-webp").HEAPU8.slice(s, s + l * i * 4),
        c = u.buffer;
      globalThis.postMessage({ rgbaBuffer: c, height: l, width: i }, [c]);
    });
    function s() {}
    l.default = s;
  },
  98,
);
