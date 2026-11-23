__d(
  "WAWebLoadAssetUrl",
  [
    "WACustomError",
    "WALogger",
    "WAWebFeatureDetectionDetectAvifSupport",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebHttpExtendedFetch",
    "WAWebNetworkStatus",
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
    async function c(e) {
      var t = e.asset,
        n = e.resolution;
      return r("nullthrows")(await d(t[n]));
    }
    async function d(e) {
      return e.avif != null &&
        !s &&
        (await o("WAWebFeatureDetectionDetectAvifSupport").detectAvifSupport())
        ? e.avif
        : e.webp != null &&
            e.webp !== "" &&
            (await o(
              "WAWebFeatureDetectionDetectWebpSupport",
            ).detectWebpSupport())
          ? e.webp
          : e.default;
    }
    function m(e) {
      var t = new AbortController(),
        n = p(e, t.signal).then(function (t) {
          var n = t.response,
            r = t.startTime,
            o = t.url,
            a = e.getConsumerPromiseResolve();
          if (n.ok && a) a(o);
          else throw new u(o, n.status, Date.now() - r);
        });
      return (e.setLoadUrlPromise(n, t), n);
    }
    async function p(t, n) {
      var a = await c(t);
      await r("WAWebNetworkStatus").waitIfOffline();
      var i = Date.now(),
        l = await o("WAWebHttpExtendedFetch").extendedFetch(a, { signal: n });
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
          p(t, n));
    }
    ((l.LoadUrlError = u),
      (l.getSupportedImageFormatUrl = c),
      (l.getSupportedFormatUrl = d),
      (l.loadUrl = m));
  },
  98,
);
