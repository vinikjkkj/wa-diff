__d(
  "WAWebFeatureDetectionSwSupport",
  [
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebModernizr",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "Modernizr" in window,
      s = o("WAWebModernizr").getModernizr(),
      u = (function (t) {
        function n() {
          var n;
          ((n = t.call(this) || this),
            (n.supported = e ? s.serviceworker : "serviceWorker" in navigator),
            (n._checkAlive = function () {
              var e,
                t =
                  (e = navigator.serviceWorker) == null ? void 0 : e.controller;
              return !!t;
            }),
            (n._checkStreamingSupport = function () {
              var e;
              if (!n.supported || !n.alive || o("WAWebUA").UA.isSafari) {
                n._streamingSupported = !1;
                return;
              }
              if (n._streamingSupportedPromise) return n._streamingSupported;
              var t =
                (e = navigator.serviceWorker) == null ? void 0 : e.controller;
              t &&
                (n._streamingSupportedPromise = o("WAPromiseTimeout")
                  .promiseTimeout(
                    r("WAWebSWBus").request(
                      t,
                      r("WAWebSWBusActions").STREAMING_SUPPORTED,
                    ),
                    100,
                  )
                  .catch(o("WAWebBoolFunc").returnFalse)
                  .then(function (e) {
                    return (
                      delete n._streamingSupportedPromise,
                      (n.streamingSupported = e),
                      e
                    );
                  }));
            }),
            (n._setSupported = function (e) {
              n.supported = e;
            }),
            e && s.on("serviceworker", n._setSupported));
          var a = n;
          return (
            Object.defineProperty(n, "streamingSupported", {
              get: function () {
                return (a._checkStreamingSupport(), a._streamingSupported);
              },
              set: function (t) {
                (t !== a._streamingSupported &&
                  a.trigger("change:streamingSupported", t),
                  (a._streamingSupported = t));
              },
            }),
            Object.defineProperty(n, "alive", {
              get: function () {
                return a._checkAlive();
              },
            }),
            n
          );
        }
        return (babelHelpers.inheritsLoose(n, t), n);
      })(r("WAWebEventEmitter")),
      c = new u();
    l.default = c;
  },
  98,
);
