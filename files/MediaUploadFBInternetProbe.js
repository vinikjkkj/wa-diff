__d(
  "MediaUploadFBInternetProbe",
  [
    "AsyncRequest",
    "MediaUploadCancelablePromise",
    "MediaUploadNetworkStatus",
    "Promise",
    "asyncToGeneratorRuntime",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "https://rupload.facebook.com/fb_video/ping-",
      u = (function () {
        function t(e, t) {
          ((this.$2 = e), (this.$1 = t), (this.$3 = ["" + s + r("uuidv4")()]));
        }
        var o = t.prototype;
        return (
          (o.$4 = function (t) {
            return new (r("MediaUploadCancelablePromise"))(function (e) {
              var n = new (r("AsyncRequest"))()
                .setAllowCrossOrigin(!0)
                .setAllowCredentials(!0)
                .setMethod("GET")
                .setURI(t)
                .setReadOnly(!0)
                .setOption("suppressEvaluation", !0)
                .setHandler(function (t) {
                  var n,
                    o =
                      t == null || (n = t.payload) == null ? void 0 : n.status;
                  e(
                    o === 200
                      ? r("MediaUploadNetworkStatus").CONNECTED
                      : r("MediaUploadNetworkStatus").DISCONNECTED,
                  );
                })
                .setTransportErrorHandler(function () {
                  e(r("MediaUploadNetworkStatus").DISCONNECTED);
                })
                .setErrorHandler(function () {
                  e(r("MediaUploadNetworkStatus").DISCONNECTED);
                });
              return (
                n.send() || e(r("MediaUploadNetworkStatus").DISCONNECTED),
                {
                  cancel: function () {
                    n.abort();
                  },
                }
              );
            });
          }),
          (o.$5 = function () {
            var t = this;
            return new (e || (e = n("Promise")))(function (e) {
              t.$1.delayedExecutor(t.$2.timeout, function () {
                return e(r("MediaUploadNetworkStatus").TIMEOUT);
              });
            });
          }),
          (o.probe = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = this,
                r = this.$3.map(function (e) {
                  return t.$4(e);
                }),
                o = (e || (e = n("Promise"))).race(
                  [this.$5()].concat(
                    r.map(function (e) {
                      return e.promise;
                    }),
                  ),
                ),
                a = yield o;
              return (
                r.forEach(function (e) {
                  return e.cancel();
                }),
                a
              );
            });
            function r() {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          t
        );
      })();
    l.default = u;
  },
  98,
);
