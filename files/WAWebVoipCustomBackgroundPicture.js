__d(
  "WAWebVoipCustomBackgroundPicture",
  ["WALogger", "asyncToGeneratorRuntime", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["image/jpeg", "image/png", "image/webp"],
      u = 26214400,
      c = 1280,
      d = 4096,
      m = 0.9;
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!s.includes(t.type)) return { status: "not_a_picture" };
          if (t.size > u) return { status: "too_large" };
          var n = self.OffscreenCanvas;
          if (typeof n != "function")
            throw r("err")("custom background: no OffscreenCanvas");
          var a;
          try {
            a = yield f(t);
          } catch (t) {
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "voip: [effects] could not decode a custom background: ",
                    "",
                  ])),
                r("getErrorSafe")(t).message,
              ),
              { status: "unreadable" }
            );
          }
          try {
            var i = a,
              l = i.height,
              c = i.width,
              d = new n(c, l),
              p = d.getContext("2d");
            if (p == null) throw r("err")("custom background: no 2d context");
            ((p.fillStyle = "white"),
              p.fillRect(0, 0, c, l),
              p.drawImage(a, 0, 0));
            var _ = yield d.convertToBlob({ quality: m, type: "image/jpeg" });
            return { picture: _, status: "made" };
          } finally {
            a.close();
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield createImageBitmap(e),
            n = t.height,
            r = t.width,
            o = Math.min(1, c / Math.min(r, n), d / Math.max(r, n));
          if (o === 1) return t;
          t.close();
          var a = Math.max(1, Math.round(r * o)),
            i = Math.max(1, Math.round(n * o)),
            l = yield h(e, a, i),
            s = a !== i && l.width === i && l.height === a;
          return s ? (l.close(), h(e, i, a)) : l;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t, n) {
      return createImageBitmap(e, {
        resizeHeight: n,
        resizeQuality: "high",
        resizeWidth: t,
      });
    }
    ((l.CUSTOM_BACKGROUND_PICTURE_TYPES = s),
      (l.makeCustomBackgroundPicture = p));
  },
  98,
);
