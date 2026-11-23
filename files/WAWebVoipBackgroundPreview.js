__d(
  "WAWebVoipBackgroundPreview",
  ["err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "1",
      s = 320,
      u = 180,
      c = 0.8;
    async function d(e) {
      var t = self.OffscreenCanvas;
      if (typeof t != "function")
        throw r("err")("background preview: no OffscreenCanvas");
      var n = new t(s, u),
        o = n.getContext("2d");
      if (o == null) throw r("err")("background preview: no 2d context");
      var a = e.columns,
        i = e.rows,
        l = await _(e, { resizeWidth: Math.ceil(s / a) });
      try {
        var d = m(a, l[0]);
        i * d.height < u &&
          (f(l),
          (l = []),
          (l = await _(e, { resizeHeight: Math.ceil(u / i) })),
          (d = p(i, l[0])));
        var g = Math.floor((s - a * d.width) / 2),
          h = Math.floor((u - i * d.height) / 2);
        l.forEach(function (e, t) {
          o.drawImage(
            e,
            g + (t % a) * d.width,
            h + Math.floor(t / a) * d.height,
            d.width,
            d.height,
          );
        });
      } finally {
        f(l);
      }
      return n.convertToBlob({ quality: c, type: "image/jpeg" });
    }
    function m(e, t) {
      var n = Math.ceil(s / e);
      return { height: Math.ceil((n * t.height) / t.width), width: n };
    }
    function p(e, t) {
      var n = Math.ceil(u / e);
      return { height: n, width: Math.ceil((n * t.width) / t.height) };
    }
    async function _(e, t) {
      var n = await Promise.allSettled(
          e.tiles.map(function (e) {
            return createImageBitmap(
              e,
              babelHelpers.extends({}, t, { resizeQuality: "high" }),
            );
          }),
        ),
        o = n.flatMap(function (e) {
          return e.status === "fulfilled" ? [e.value] : [];
        });
      for (var a of n)
        if (a.status === "rejected") throw (f(o), r("getErrorSafe")(a.reason));
      return o;
    }
    function f(e) {
      for (var t of e) t.close();
    }
    ((l.BACKGROUND_PREVIEW_VERSION = e), (l.makeBackgroundPreview = d));
  },
  98,
);
