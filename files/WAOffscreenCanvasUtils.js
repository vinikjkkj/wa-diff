__d(
  "WAOffscreenCanvasUtils",
  ["asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i) {
    var e = 40960;
    function l(e, t, n, r, o, a) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, o, a, i) {
            r === void 0 && (r = !1);
            var l = o == null ? void 0 : o / 100,
              s = yield t.convertToBlob({ quality: l, type: n }),
              u = a != null ? a : e,
              c = i != null ? i / 100 : e / s.size;
            return (
              r &&
                s.size >= u &&
                (s = yield t.convertToBlob({ quality: c, type: n })),
              s
            );
          },
        )),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      var t = e.getContext("2d");
      ((t.fillStyle = "rgb(247,247,247)"), t.fillRect(0, 0, e.width, e.height));
    }
    ((i.offscreenCanvasToBlob = l),
      (i.fillOffscreenCanvasBackgroundWithGray = u));
  },
  66,
);
