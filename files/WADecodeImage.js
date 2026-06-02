__d(
  "WADecodeImage",
  ["WABlobToImage", "WACalculateBoundOutputSize", "WATagsLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = o("WATagsLogger").TAGS(["decodeImage"]),
      c =
        typeof self.createImageBitmap == "function" &&
        typeof self.OffscreenCanvas == "function",
      d = c ? m : p;
    async function m(t, n) {
      u.DEV(
        e ||
          (e = babelHelpers.taggedTemplateLiteralLoose([
            "start decoding image without DOM: ",
            "",
          ])),
        t.name,
      );
      var r = await self.createImageBitmap(t),
        a = r.height,
        i = r.width,
        l = o("WACalculateBoundOutputSize").calculateBoundOutputSize(
          { width: i, height: a },
          n,
        ),
        s = l.outputHeight,
        c = l.outputWidth,
        d = new self.OffscreenCanvas(c, s),
        m = _({
          canvas: d,
          inputWidth: i,
          inputHeight: a,
          outputWidth: c,
          outputHeight: s,
          image: r,
        });
      return m;
    }
    async function p(e, t) {
      u.DEV(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
            "start decoding image with DOM: ",
            "",
          ])),
        e.name,
      );
      var n = await o("WABlobToImage").blobToImage(e),
        r = n.image,
        a = n.releaseImageMemory,
        i = r.height,
        l = r.width,
        c = o("WACalculateBoundOutputSize").calculateBoundOutputSize(
          { width: l, height: i },
          t,
        ),
        d = c.outputHeight,
        m = c.outputWidth,
        p = document.createElement("canvas"),
        f = _({
          canvas: p,
          inputWidth: l,
          inputHeight: i,
          outputWidth: m,
          outputHeight: d,
          image: r,
        });
      return (a(), f);
    }
    function _(e) {
      var t = e.canvas,
        n = e.image,
        r = e.inputHeight,
        o = e.inputWidth,
        a = e.outputHeight,
        i = e.outputWidth;
      ((t.width = i), (t.height = a));
      var l = t.getContext("2d");
      ((l.fillStyle = "rgb(255,255,255)"),
        l.fillRect(0, 0, t.width, t.height),
        l.drawImage(n, 0, 0, o, r, 0, 0, i, a));
      var s = l.getImageData(0, 0, i, a);
      return s;
    }
    ((l.canDecodeWithoutDOM = c),
      (l.decodeImage = d),
      (l.decodeImageWithoutDOM = m),
      (l.decodeImageWithDOM = p));
  },
  98,
);
