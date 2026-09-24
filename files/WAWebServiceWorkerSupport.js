__d(
  "WAWebServiceWorkerSupport",
  [
    "Promise",
    "WAPromiseTimeout",
    "WAWebBoolFunc",
    "WAWebEventEmitter",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebUA",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = (function (e) {
        function t(t, n) {
          var r;
          (t === void 0 && (t = u()),
            n === void 0 && (n = "serviceWorker" in navigator),
            (r = e.call(this) || this),
            (r._streamingSupported = !1),
            (r._publishedSupported = !1),
            (r._probeGeneration = 0),
            (r._watchingControllerChanges = !1),
            (r.getStreamingSupported = function () {
              return r._streamingSupported && r._environment.hasController();
            }),
            (r.refreshStreamingSupport = function () {
              if (!r.supported || o("WAWebUA").UA.isSafari) {
                r._setStreamingSupported(!1);
                return;
              }
              if (
                (r._watchControllerChanges(), !r._environment.hasController())
              ) {
                r._setStreamingSupported(!1);
                return;
              }
              if (!r._streamingSupportedPromise) {
                var e = r._probeGeneration;
                r._streamingSupportedPromise = o("WAPromiseTimeout")
                  .promiseTimeout(
                    r._environment.requestStreamingSupported(),
                    100,
                  )
                  .catch(o("WAWebBoolFunc").returnFalse)
                  .then(function (t) {
                    if (e !== r._probeGeneration) return !1;
                    delete r._streamingSupportedPromise;
                    var n = !!t && r._environment.hasController();
                    return (r._setStreamingSupported(n), n);
                  });
              }
            }),
            (r._watchControllerChanges = function () {
              r._watchingControllerChanges ||
                ((r._watchingControllerChanges = !0),
                r._environment.onControllerChange(function () {
                  (r._probeGeneration++,
                    delete r._streamingSupportedPromise,
                    r._announce(),
                    r.refreshStreamingSupport());
                }));
            }),
            (r.subscribe = function (e) {
              return (
                r.on("change:streamingSupported", e),
                function () {
                  r.off("change:streamingSupported", e);
                }
              );
            }),
            (r._setStreamingSupported = function (e) {
              ((r._streamingSupported = e), r._publish());
            }),
            (r._publish = function () {
              r.getStreamingSupported() !== r._publishedSupported &&
                r._announce();
            }),
            (r._announce = function () {
              var e = r.getStreamingSupported();
              ((r._publishedSupported = e),
                r.trigger("change:streamingSupported", e));
            }),
            (r._checkAlive = function () {
              return r._environment.hasController();
            }),
            (r._environment = t),
            (r.supported = n));
          var a = r;
          return (
            Object.defineProperty(r, "alive", {
              get: function () {
                return a._checkAlive();
              },
            }),
            r
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(r("WAWebEventEmitter"));
    function u() {
      return {
        hasController: function () {
          var e;
          return (
            ((e = navigator.serviceWorker) == null ? void 0 : e.controller) !=
            null
          );
        },
        requestStreamingSupported: function () {
          var t,
            o = (t = navigator.serviceWorker) == null ? void 0 : t.controller;
          return o == null
            ? (e || (e = n("Promise"))).resolve(!1)
            : r("WAWebSWBus").request(
                o,
                r("WAWebSWBusActions").STREAMING_SUPPORTED,
              );
        },
        onControllerChange: function (t) {
          var e;
          (e = navigator.serviceWorker) == null ||
            e.addEventListener("controllerchange", t);
        },
      };
    }
    l.ServiceWorkerSupport = s;
  },
  98,
);
