__d(
  "WAWebLoadAssetUrl",
  [
    "WACustomError",
    "WANullthrows",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebHttpExtendedFetch",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
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
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o(
              "WAWebFeatureDetectionDetectWebpSupport",
            ).detectWebpSupport(),
            a = t.asset,
            i = t.resolution,
            l = n && a[i][e.WEBP] ? e.WEBP : e.DEFAULT;
          return r("WANullthrows")(a[i][l]);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = new AbortController(),
        a = u(e).then(
          (function () {
            var a = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (n) {
                yield r("WAWebNetworkStatus").waitIfOffline();
                var a = Date.now(),
                  i = yield o("WAWebHttpExtendedFetch").extendedFetch(n, {
                    signal: t.signal,
                  }),
                  l = e.getConsumerPromiseResolve();
                if (i.ok && l) l(n);
                else throw new s(n, i.status, Date.now() - a);
              },
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })(),
        );
      return (e.setLoadUrlPromise(a, t), a);
    }
    ((l.LoadUrlError = s), (l.getSupportedImageFormatUrl = u), (l.loadUrl = d));
  },
  98,
);
