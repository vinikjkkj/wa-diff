__d(
  "WAWebBotCardImageUtils",
  [
    "WAWebMediaDataUtils",
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
        n = e.height,
        a = e.imageUrl,
        i = e.width,
        l = c(null),
        s = l[0],
        d = l[1],
        m = c(a),
        p = m[0],
        _ = m[1];
      a !== p && (_(a), r("isStringNotNullAndNotWhitespaceOnly")(a) || d(null));
      var f = r("useWAWebUnmountSignal")(),
        g,
        h;
      return (
        t[0] !== n || t[1] !== a || t[2] !== f || t[3] !== i
          ? ((g = function () {
              if (r("isStringNotNullAndNotWhitespaceOnly")(a)) {
                var e = !1,
                  t = async function () {
                    var t = [
                        {
                          width: i,
                          height: n,
                          imageFormat: "image/jpeg",
                          imageFormatOptions: 1,
                        },
                      ],
                      r = await o("WAWebMediaDataUtils").getResizedThumbData(
                        a,
                        t,
                      ),
                      l = r[0];
                    !e && !f.aborted && d(l == null ? void 0 : l.dataUrl);
                  };
                return (
                  t(),
                  function () {
                    e = !0;
                  }
                );
              }
            }),
            (h = [a, i, n, f]),
            (t[0] = n),
            (t[1] = a),
            (t[2] = f),
            (t[3] = i),
            (t[4] = g),
            (t[5] = h))
          : ((g = t[4]), (h = t[5])),
        u(g, h),
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
