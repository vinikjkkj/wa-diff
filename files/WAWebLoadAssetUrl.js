__d(
  "WAWebLoadAssetUrl",
  [
    "WACustomError",
    "WANullthrows",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebHttpExtendedFetch",
    "WAWebNetworkStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { DEFAULT: "default", WEBP: "webp" },
      s = (function (e) {
        function t(t, n, r) {
          var o;
          return (
            (o =
              e.call(
                this,
                "Failed to load url. StatusCode: " +
                  n +
                  ". Duration: " +
                  r +
                  " ms",
              ) || this),
            (o.name = "LoadUrlError"),
            (o.url = t),
            (o.statusCode = n),
            o
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WACustomError").CustomError);
    async function u(t) {
      var n = await o(
          "WAWebFeatureDetectionDetectWebpSupport",
        ).detectWebpSupport(),
        a = t.asset,
        i = t.resolution,
        l = n && a[i][e.WEBP] ? e.WEBP : e.DEFAULT;
      return r("WANullthrows")(a[i][l]);
    }
    function c(e) {
      var t = new AbortController(),
        n = u(e).then(async function (n) {
          await r("WAWebNetworkStatus").waitIfOffline();
          var a = Date.now(),
            i = await o("WAWebHttpExtendedFetch").extendedFetch(n, {
              signal: t.signal,
            }),
            l = e.getConsumerPromiseResolve();
          if (i.ok && l) l(n);
          else throw new s(n, i.status, Date.now() - a);
        });
      return (e.setLoadUrlPromise(n, t), n);
    }
    ((l.LoadUrlError = s), (l.getSupportedImageFormatUrl = u), (l.loadUrl = c));
  },
  98,
);
