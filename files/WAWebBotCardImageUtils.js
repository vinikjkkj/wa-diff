__d(
  "WAWebBotCardImageUtils",
  [
    "WAWebMediaDataUtils",
    "asyncToGeneratorRuntime",
    "isStringNotNullAndNotWhitespaceOnly",
    "react",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e) {
      var t = e.height,
        a = e.imageUrl,
        i = e.width,
        l = c(null),
        s = l[0],
        d = l[1],
        m = c(a),
        p = m[0],
        _ = m[1];
      a !== p && (_(a), r("isStringNotNullAndNotWhitespaceOnly")(a) || d(null));
      var f = r("useWAWebUnmountSignal")();
      return (
        u(
          function () {
            if (r("isStringNotNullAndNotWhitespaceOnly")(a)) {
              var e = !1,
                l = (function () {
                  var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                    function* () {
                      var n = [
                          {
                            width: i,
                            height: t,
                            imageFormat: "image/jpeg",
                            imageFormatOptions: 1,
                          },
                        ],
                        r = yield o("WAWebMediaDataUtils").getResizedThumbData(
                          a,
                          n,
                        ),
                        l = r[0];
                      !e && !f.aborted && d(l == null ? void 0 : l.dataUrl);
                    },
                  );
                  return function () {
                    return r.apply(this, arguments);
                  };
                })();
              return (
                l(),
                function () {
                  e = !0;
                }
              );
            }
          },
          [a, i, t, f],
        ),
        s
      );
    }
    function m(e) {
      return "data:image/jpeg;base64," + e;
    }
    ((l.useResizedImage = d), (l.toJpegDataUrl = m));
  },
  98,
);
