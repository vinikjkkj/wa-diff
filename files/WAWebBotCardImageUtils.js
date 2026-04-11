__d(
  "WAWebBotCardImageUtils",
  [
    "WAWebMediaDataUtils",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "react-compiler-runtime",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = o("react-compiler-runtime").c(6),
        a = e.height,
        i = e.imageUrl,
        l = e.width,
        s = c(null),
        d = s[0],
        m = s[1],
        p = c(i),
        _ = p[0],
        f = p[1];
      i !== _ && (f(i), r("isStringNotNullAndNotWhitespaceOnly")(i) || m(null));
      var g = r("useWAWebUnmountSignal")(),
        h,
        y;
      return (
        t[0] !== a || t[1] !== i || t[2] !== g || t[3] !== l
          ? ((h = function () {
              if (r("isStringNotNullAndNotWhitespaceOnly")(i)) {
                var e = !1,
                  t = (function () {
                    var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                      function* () {
                        var t = [
                            {
                              width: l,
                              height: a,
                              imageFormat: "image/jpeg",
                              imageFormatOptions: 1,
                            },
                          ],
                          n = yield o(
                            "WAWebMediaDataUtils",
                          ).getResizedThumbData(i, t),
                          r = n[0];
                        !e && !g.aborted && m(r == null ? void 0 : r.dataUrl);
                      },
                    );
                    return function () {
                      return t.apply(this, arguments);
                    };
                  })();
                return (
                  t(),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (y = [i, l, a, g]),
            (t[0] = a),
            (t[1] = i),
            (t[2] = g),
            (t[3] = l),
            (t[4] = h),
            (t[5] = y))
          : ((h = t[4]), (y = t[5])),
        u(h, y),
        d
      );
    }
    function m(e) {
      return "data:image/jpeg;base64," + e;
    }
    ((l.useResizedImage = d), (l.toJpegDataUrl = m));
  },
  98,
);
