__d(
  "WAWebRgbaToWebpWorker",
  ["CurrentWebWorker", "WAWeb-webp"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {}
    var u = (e = r("WAWeb-webp")).cwrap("createBuffer", "number", [
        "number",
        "number",
      ]),
      c = e.cwrap("destroyBuffer", "", ["number"]),
      d = e.cwrap("encode", "number", ["number", "number", "number", "number"]),
      m = e.cwrap("freeOutput", "", ["number"]);
    (r("CurrentWebWorker").setMessageHandler(function (e) {
      var t = e.ensureExtendedFormat,
        n = e.height,
        o = e.quality,
        a = e.rgbaData,
        i = e.width;
      t && (a[3] = Math.min(254, a[3]));
      var l = u(i, n);
      r("WAWeb-webp").HEAPU8.set(a, l);
      var s = d(l, i, n, o),
        p = r("WAWeb-webp").HEAP32[(s + 0) >> 2],
        _ = r("WAWeb-webp").HEAP32[(s + 4) >> 2],
        f = new Uint8Array(r("WAWeb-webp").HEAPU8.buffer, p, _);
      (m(p), c(l));
      var g = new Blob([f], { type: "image/webp" });
      globalThis.postMessage({ blob: g });
    }),
      (l.default = s));
  },
  98,
);
