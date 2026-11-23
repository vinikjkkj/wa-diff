__d(
  "WAWebBotCardImageUtils",
  [
    "WAWebMediaDataUtils",
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
        n = e.imageUrl,
        a = e.width,
        i = c(null),
        l = i[0],
        s = i[1],
        d = c(n),
        m = d[0],
        p = d[1];
      n !== m && (p(n), r("isStringNotNullAndNotWhitespaceOnly")(n) || s(null));
      var _ = r("useWAWebUnmountSignal")();
      return (
        u(
          function () {
            if (r("isStringNotNullAndNotWhitespaceOnly")(n)) {
              var e = !1,
                i = async function () {
                  var r = [
                      {
                        width: a,
                        height: t,
                        imageFormat: "image/jpeg",
                        imageFormatOptions: 1,
                      },
                    ],
                    i = await o("WAWebMediaDataUtils").getResizedThumbData(
                      n,
                      r,
                    ),
                    l = i[0];
                  !e && !_.aborted && s(l == null ? void 0 : l.dataUrl);
                };
              return (
                i(),
                function () {
                  e = !0;
                }
              );
            }
          },
          [n, a, t, _],
        ),
        l
      );
    }
    function m(e) {
      return "data:image/jpeg;base64," + e;
    }
    ((l.useResizedImage = d), (l.toJpegDataUrl = m));
  },
  98,
);
