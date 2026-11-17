__d(
  "WAWebVoipBackgroundPreview",
  ["Promise", "asyncToGeneratorRuntime", "err", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "1",
      u = 320,
      c = 180,
      d = 0.8;
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = self.OffscreenCanvas;
          if (typeof t != "function")
            throw r("err")("background preview: no OffscreenCanvas");
          var n = new t(u, c),
            o = n.getContext("2d");
          if (o == null) throw r("err")("background preview: no 2d context");
          var a = e.columns,
            i = e.rows,
            l = yield g(e, { resizeWidth: Math.ceil(u / a) });
          try {
            var s = _(a, l[0]);
            i * s.height < c &&
              (y(l),
              (l = []),
              (l = yield g(e, { resizeHeight: Math.ceil(c / i) })),
              (s = f(i, l[0])));
            var m = Math.floor((u - a * s.width) / 2),
              p = Math.floor((c - i * s.height) / 2);
            l.forEach(function (e, t) {
              o.drawImage(
                e,
                m + (t % a) * s.width,
                p + Math.floor(t / a) * s.height,
                s.width,
                s.height,
              );
            });
          } finally {
            y(l);
          }
          return n.convertToBlob({ quality: d, type: "image/jpeg" });
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      var n = Math.ceil(u / e);
      return { height: Math.ceil((n * t.height) / t.width), width: n };
    }
    function f(e, t) {
      var n = Math.ceil(c / e);
      return { height: n, width: Math.ceil((n * t.width) / t.height) };
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, o) {
          var a = yield (e || (e = n("Promise"))).allSettled(
              t.tiles.map(function (e) {
                return createImageBitmap(
                  e,
                  babelHelpers.extends({}, o, { resizeQuality: "high" }),
                );
              }),
            ),
            i = a.flatMap(function (e) {
              return e.status === "fulfilled" ? [e.value] : [];
            });
          for (var l of a)
            if (l.status === "rejected")
              throw (y(i), r("getErrorSafe")(l.reason));
          return i;
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      for (var t of e) t.close();
    }
    ((l.BACKGROUND_PREVIEW_VERSION = s), (l.makeBackgroundPreview = m));
  },
  98,
);
