__d(
  "WAWebFeatureDetectionSwSupport",
  [
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA",
  ],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
        function t() {
          var t;
          ((t = e.call(this) || this),
            (t.supported = "serviceWorker" in navigator),
            (t._checkAlive = function () {
              var e,
                t =
                  (e = navigator.serviceWorker) == null ? void 0 : e.controller;
              return !!t;
            }),
            (t._checkStreamingSupport = function () {
              var e;
              if (!t.supported || !t.alive || o("WAWebUA").UA.isSafari) {
                t._streamingSupported = !1;
                return;
              }
              if (t._streamingSupportedPromise) return t._streamingSupported;
              var n =
                (e = navigator.serviceWorker) == null ? void 0 : e.controller;
              n &&
                (t._streamingSupportedPromise = o("WAPromiseTimeout")
                  .promiseTimeout(
                    r("WAWebSWBus").request(
                      n,
                      r("WAWebSWBusActions").STREAMING_SUPPORTED,
                    ),
                    100,
                  )
                  .catch(o("WAWebBoolFunc").returnFalse)
                  .then(function (e) {
                    return (
                      delete t._streamingSupportedPromise,
                      (t.streamingSupported = e),
                      e
                    );
                  }));
            }));
          var n = t;
          return (
            Object.defineProperty(t, "streamingSupported", {
              get: function () {
                return (n._checkStreamingSupport(), n._streamingSupported);
              },
              set: function (t) {
                (t !== n._streamingSupported &&
                  n.trigger("change:streamingSupported", t),
                  (n._streamingSupported = t));
              },
            }),
            Object.defineProperty(t, "alive", {
              get: function () {
                return n._checkAlive();
              },
            }),
            t
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter")),
      s = new e();
    l.default = s;
  },
  98,
);
