__d(
  "WAWebCanvasUtils",
  [
    "Promise",
    "WAWebABProps",
    "WAWebDataUrlToBlob",
    "WAWebEncodeRgbaToWebp",
    "WAWebImageGeometry",
    "WAWebMediaOpaqueData",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = r("nullthrows")(e.getContext("2d")),
        n = t.getImageData(0, 0, e.width, e.height);
      return r("WAWebEncodeRgbaToWebp")({
        height: e.height,
        opts: { ensureExtendedFormat: !0 },
        rgbaData: n.data,
        width: e.width,
      });
    }
    function u(t, a) {
      if (
        (a === void 0 && (a = "image/jpeg"),
        Object.hasOwn(HTMLCanvasElement.prototype, "toBlob"))
      ) {
        var i =
          a === "image/jpeg"
            ? o("WAWebABProps").getABPropConfigValue("web_jpeg_quality") / 100
            : void 0;
        return new (e || (e = n("Promise")))(function (e, n) {
          t.toBlob(
            function (t) {
              t == null
                ? n(r("err")("canvas.toBlob produced no " + a + " blob"))
                : e(t);
            },
            a,
            i,
          );
        });
      }
      return (e || (e = n("Promise"))).resolve(
        o("WAWebDataUrlToBlob").dataURLtoBlob(t.toDataURL(a)),
      );
    }
    function c(e, t, n) {
      t === void 0 && (t = "image/jpeg");
      var r = e.toDataURL(t),
        a = o("WAWebDataUrlToBlob").dataURLtoBlob(r);
      if (a.size <= n) return e.toDataURL(t);
      for (var i = 0.9; i >= 0.1; i -= 0.1) {
        var l = e.toDataURL(t, i),
          s = o("WAWebDataUrlToBlob").dataURLtoBlob(l);
        if (s.size <= n) return l;
      }
      return null;
    }
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          for (
            var o,
              a,
              i = n || {},
              l = (o = i.mimetype) != null ? o : "image/jpeg",
              s = (a = i.maxAttempts) != null ? a : 10,
              c = 0.5,
              d = e,
              m = yield u(d, l),
              p = 0;
            p < s && !(m.size <= t);
            p++
          ) {
            var _ = Math.floor(e.width * c),
              f = Math.floor(e.height * c);
            d = g(_, f);
            var h = r("nullthrows")(d.getContext("2d"));
            (h.drawImage(e, 0, 0, _, f), (m = yield u(d, l)), (c *= 0.5));
          }
          return {
            opaqueData: yield r("WAWebMediaOpaqueData").createFromData(m, l),
            width: d.width,
            height: d.height,
            dataUrl: d.toDataURL("image/jpeg"),
          };
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      var t = r("nullthrows")(e.getContext("2d")),
        n = e.width,
        o = e.height,
        a = t.getImageData(0, 0, n, o),
        i = Math.max(n, o);
      ((e.width = i), (e.height = i));
      var l = (i - n) / 2,
        s = (i - o) / 2;
      (t.clearRect(0, 0, n, o), t.putImageData(a, l, s, 0, 0, n, o));
    }
    function _(e, t) {
      var n = r("nullthrows")(e.getContext("2d")),
        a = h(e),
        i = o("WAWebImageGeometry").aspectRatioScaled(e.width / e.height, t),
        l = i.height,
        s = i.width;
      ((e.width = s), (e.height = l), n.drawImage(a, 0, 0, s, l));
    }
    function f(e) {
      var t = r("nullthrows")(e.getContext("2d"));
      ((t.fillStyle = "rgb(247,247,247)"), t.fillRect(0, 0, e.width, e.height));
    }
    function g(e, t) {
      var n = document.createElement("canvas");
      return ((n.width = e), (n.height = t), n);
    }
    function h(e) {
      var t = g(e.width, e.height),
        n = r("nullthrows")(t.getContext("2d"));
      return (n.drawImage(e, 0, 0), t);
    }
    function y(e) {
      var t = r("nullthrows")(e.getContext("2d")),
        n = t.getImageData(0, 0, e.width, e.height),
        o = n.data.length / 4,
        a;
      for (a = 0; a < o; a++) {
        var i = n.data[4 * a + 3];
        if (i !== 0) return !1;
      }
      return !0;
    }
    function C(e) {
      var t = r("nullthrows")(e.getContext("2d")),
        n = t.getImageData(0, 0, e.width, e.height),
        o = n.data.length / 4,
        a = 1 / 0,
        i = 1 / 0,
        l = 0,
        s = 0,
        u;
      for (u = 0; u < o; u++) {
        var c = n.data[4 * u + 3];
        if (c !== 0) {
          var d = u % e.width,
            m = Math.floor(u / e.width);
          (d < a && (a = d),
            d > l && (l = d),
            m < i && (i = m),
            m > s && (s = m));
        }
      }
      return { left: a, top: i, right: l, bottom: s };
    }
    function b(e) {
      if (!y(e)) {
        var t = C(e),
          n = t.bottom,
          o = t.left,
          a = t.right,
          i = t.top,
          l = n - i,
          s = a - o,
          u = r("nullthrows")(e.getContext("2d")),
          c = u.getImageData(o, i, s, l),
          d = g(s, l),
          m = r("nullthrows")(d.getContext("2d"));
        return (m.putImageData(c, 0, 0), d);
      }
    }
    function v(e, t, n) {
      n === void 0 && (n = "white");
      var o = document.createElement("canvas"),
        a = r("nullthrows")(o.getContext("2d")),
        i = document.createElement("canvas"),
        l = r("nullthrows")(i.getContext("2d")),
        s = t * 2;
      ((o.width = i.width = e.width + s * 2),
        (o.height = i.height = e.height + s * 2),
        a.drawImage(e, s, s),
        (l.shadowColor = n),
        (l.shadowBlur = 1));
      for (var u = 0; u < s; u++) (l.drawImage(o, 0, 0), a.drawImage(i, 0, 0));
      return ((l.shadowColor = "rgba(0,0,0,0)"), l.drawImage(e, s, s), i);
    }
    ((l.canvasToWebp = s),
      (l.canvasToBlob = u),
      (l.getResizedDataUrl = c),
      (l.generateMicroThumb = d),
      (l.square = p),
      (l.scale = _),
      (l.fillBackgroundWithGray = f),
      (l.createCanvas = g),
      (l.trim = b),
      (l.addBorder = v));
  },
  98,
);
