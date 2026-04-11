__d(
  "WAWebPipIsParsableOnlineVideoUrl",
  ["WAWebPipConst", "WAWebProtobufsE2E.pb", "WAWebURLUtils"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = new Set([
        (e = o("WAWebPipConst")).HOSTNAME.INSTAGRAM,
        e.HOSTNAME.STREAMABLE,
        e.HOSTNAME.FACEBOOK,
        e.HOSTNAME.FBWATCH,
        e.HOSTNAME.FBWATCH_ALT,
        e.HOSTNAME.SHARECHAT,
      ]);
    function u(e, t, n) {
      if (t == null || t === "" || n === !0) return !1;
      if (
        e ===
        o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType.VIDEO
      ) {
        var a = r("WAWebURLUtils").withoutWww(r("WAWebURLUtils").hostname(t));
        if (s.has(a)) return !0;
      }
      var i = r("WAWebURLUtils").withoutWww(t);
      return Object.keys(o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL).some(
        function (e) {
          var t,
            n =
              (t = o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL[e]) != null
                ? t
                : [];
          return n.some(function (e) {
            return e.test(i);
          });
        },
      );
    }
    function c(e, t, n) {
      if (
        t == null ||
        t === "" ||
        n === !0 ||
        e !==
          o("WAWebProtobufsE2E.pb").Message$ExtendedTextMessage$PreviewType
            .VIDEO
      )
        return !1;
      var a = o("WAWebPipConst").URL_PATTERNS.ONLINE_VIDEO_URL.YOUTUBE,
        i = r("WAWebURLUtils").withoutWww(t);
      return a.some(function (e) {
        return e.test(i);
      });
    }
    ((l.isParsableOnlineVideoURL = u), (l.isParsableYouTubeVideoUrl = c));
  },
  98,
);
