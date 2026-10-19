__d(
  "WAWebLoadAssetUrl",
  [
    "WACustomError",
    "WALogger",
    "WAWebFeatureDetectionDetectAvifSupport",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebHttpExtendedFetch",
    "WAWebNetworkStatus",
    "asyncToGeneratorRuntime",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = !1,
      u = (function (e) {
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
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.asset,
            n = e.resolution;
          return r("nullthrows")(yield m(t[n]));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          return e.avif != null &&
            !s &&
            (yield o(
              "WAWebFeatureDetectionDetectAvifSupport",
            ).detectAvifSupport())
            ? e.avif
            : e.webp != null &&
                e.webp !== "" &&
                (yield o(
                  "WAWebFeatureDetectionDetectWebpSupport",
                ).detectWebpSupport())
              ? e.webp
              : e.default;
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      var t = new AbortController(),
        n = f(e, t.signal).then(function (t) {
          var n = t.response,
            r = t.startTime,
            o = t.url,
            a = e.getConsumerPromiseResolve();
          if (n.ok && a) a(o);
          else throw new u(o, n.status, Date.now() - r);
        });
      return (e.setLoadUrlPromise(n, t), n);
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = yield c(t);
          yield r("WAWebNetworkStatus").waitIfOffline();
          var i = Date.now(),
            l = yield o("WAWebHttpExtendedFetch").extendedFetch(a, {
              signal: n,
            });
          return l.ok || a !== t.asset[t.resolution].avif
            ? { response: l, startTime: i, url: a }
            : (o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "AssetLoader: AVIF asset failed with status ",
                    ", using other formats",
                  ])),
                l.status,
              ),
              (s = !0),
              f(t, n));
        })),
        g.apply(this, arguments)
      );
    }
    ((l.LoadUrlError = u),
      (l.getSupportedImageFormatUrl = c),
      (l.getSupportedFormatUrl = m),
      (l.loadUrl = _));
  },
  98,
);
