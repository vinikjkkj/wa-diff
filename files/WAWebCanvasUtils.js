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
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t = e.getContext("2d"),
        n = t.getImageData(0, 0, e.width, e.height);
      return r("WAWebEncodeRgbaToWebp")(n.data, e.width, e.height, {
        ensureExtendedFormat: !0,
      });
    }
    function u(t, r) {
      if (
        (r === void 0 && (r = "image/jpeg"),
        Object.prototype.hasOwnProperty.call(
          HTMLCanvasElement.prototype,
          "toBlob",
        ))
      ) {
        var a =
          r === "image/jpeg"
            ? o("WAWebABProps").getABPropConfigValue("web_jpeg_quality") / 100
            : void 0;
        return new (e || (e = n("Promise")))(function (e) {
          t.toBlob(e, r, a);
        });
      }
      return (e || (e = n("Promise"))).resolve(
        o("WAWebDataUrlToBlob").dataURLtoBlob(t.toDataURL(r)),
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
            d = C(_, f);
            var g = d.getContext("2d");
            (g.drawImage(e, 0, 0, _, f), (m = yield u(d, l)), (c *= 0.5));
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
    function p(e, t) {
      var n = t.x || 0,
        r = t.y || 0;
      (t.degrees && (t.radians = t.degrees * (Math.PI / 180)),
        e.translate(n, r),
        t.radians != null && e.rotate(t.radians),
        e.translate(-n, -r));
    }
    function _(e, t, n) {
      var r = e.getContext("2d"),
        o = r.getImageData(0, 0, t, n);
      ((e.width = t), (e.height = n), r.putImageData(o, 0, 0));
    }
    function f(e) {
      var t = e.getContext("2d"),
        n = e.width,
        r = e.height,
        o = t.getImageData(0, 0, n, r),
        a = Math.max(n, r);
      ((e.width = a), (e.height = a));
      var i = (a - n) / 2,
        l = (a - r) / 2;
      (t.clearRect(0, 0, n, r), t.putImageData(o, i, l, 0, 0, n, r));
    }
    function g(e, t) {
      var n = e.getContext("2d"),
        r = b(e),
        a = o("WAWebImageGeometry").aspectRatioScaled(e.width / e.height, t),
        i = a.height,
        l = a.width;
      ((e.width = l), (e.height = i), n.drawImage(r, 0, 0, l, i));
    }
    function h(e) {
      var t = e.getContext("2d");
      ((t.fillStyle = "rgb(247,247,247)"), t.fillRect(0, 0, e.width, e.height));
    }
    function y(e, t) {
      var n = o("WAWebImageGeometry").boundHeightWidth(e.height, e.width, t),
        r = n.height,
        a = n.width;
      if (a > e.width && r > e.height) return e;
      var i = document.createElement("canvas"),
        l = i.getContext("2d");
      return ((i.width = a), (i.height = r), l.drawImage(e, 0, 0, a, r), i);
    }
    function C(e, t) {
      var n = document.createElement("canvas");
      return ((n.width = e), (n.height = t), n);
    }
    function b(e) {
      var t = C(e.width, e.height),
        n = t.getContext("2d");
      return (n.drawImage(e, 0, 0), t);
    }
    function v(e) {
      var t = e.getContext("2d"),
        n = t.getImageData(0, 0, e.width, e.height),
        r = n.data.length / 4,
        o;
      for (o = 0; o < r; o++) {
        var a = n.data[4 * o + 3];
        if (a !== 0) return !1;
      }
      return !0;
    }
    function S(e) {
      var t = e.getContext("2d"),
        n = t.getImageData(0, 0, e.width, e.height),
        r = n.data.length / 4,
        o = 1 / 0,
        a = 1 / 0,
        i = 0,
        l = 0,
        s;
      for (s = 0; s < r; s++) {
        var u = n.data[4 * s + 3];
        if (u !== 0) {
          var c = s % e.width,
            d = Math.floor(s / e.width);
          (c < o && (o = c),
            c > i && (i = c),
            d < a && (a = d),
            d > l && (l = d));
        }
      }
      return { left: o, top: a, right: i, bottom: l };
    }
    function R(e) {
      if (!v(e)) {
        var t = S(e),
          n = t.bottom,
          r = t.left,
          o = t.right,
          a = t.top,
          i = n - a,
          l = o - r,
          s = e.getContext("2d"),
          u = s.getImageData(r, a, l, i),
          c = C(l, i),
          d = c.getContext("2d");
        return (d.putImageData(u, 0, 0), c);
      }
    }
    function L(e, t, n) {
      n === void 0 && (n = "white");
      var r = document.createElement("canvas"),
        o = r.getContext("2d"),
        a = document.createElement("canvas"),
        i = a.getContext("2d"),
        l = t * 2;
      ((r.width = a.width = e.width + l * 2),
        (r.height = a.height = e.height + l * 2),
        o.drawImage(e, l, l),
        (i.shadowColor = n),
        (i.shadowBlur = 1));
      for (var s = 0; s < l; s++) (i.drawImage(r, 0, 0), o.drawImage(a, 0, 0));
      return ((i.shadowColor = "rgba(0,0,0,0)"), i.drawImage(e, l, l), a);
    }
    ((l.canvasToWebp = s),
      (l.canvasToBlob = u),
      (l.getResizedDataUrl = c),
      (l.generateMicroThumb = d),
      (l.rotate = p),
      (l.resize = _),
      (l.square = f),
      (l.scale = g),
      (l.fillBackgroundWithGray = h),
      (l.contain = y),
      (l.createCanvas = C),
      (l.trim = R),
      (l.addBorder = L));
  },
  98,
);
