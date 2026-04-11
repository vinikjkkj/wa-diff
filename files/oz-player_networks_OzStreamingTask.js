__d(
  "oz-player/networks/OzStreamingTask",
  [
    "oz-player/loggings/OzLoggingUtils",
    "oz-player/shims/OzDeferred",
    "oz-player/shims/OzMaybeNativePromise",
    "oz-player/shims/OzPerformance",
    "oz-player/utils/OzErrorUtils",
    "oz-player/utils/OzNetworkRequestLoggingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = (function () {
      function e(e, t, n) {
        ((this.$3 = new (r("oz-player/shims/OzDeferred"))(
          r("oz-player/shims/OzMaybeNativePromise"),
        )),
          (this.$5 = !1),
          (this.$9 = null),
          (this.$1 = this.$2 =
            new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            )),
          (this.$6 = r("oz-player/shims/OzPerformance").now()),
          (this.$7 = t),
          (this.$8 = e),
          (this.$9 = n));
      }
      var t = e.prototype;
      return (
        (t.run = function () {
          var e = this.$3.getPromise(),
            t = this.$7;
          if (t) {
            var n = r("oz-player/shims/OzPerformance").now() - this.$6;
            o(
              "oz-player/loggings/OzLoggingUtils",
            ).monitorPromiseAndLogOperation(
              e,
              t,
              "streaming_task",
              function () {},
              function (e) {
                e.setTimeToRequestSent(Math.floor(n));
              },
            );
          }
          return (this.$2.resolve(), e);
        }),
        (t.getPromise = function () {
          return this.$3.getPromise();
        }),
        (t.cancel = function () {
          (this.$3.getPromise().catch(function () {}),
            this.$3.reject(
              o("oz-player/utils/OzErrorUtils").createOzError({
                type: "OZ_STREAMING_TASK",
                description: "task cancelled",
                extra: { code: "OZ_ST-1" },
              }),
            ),
            (this.$5 = !0));
        }),
        (t.finish = function () {
          this.$3.resolve();
        }),
        (t.isCancelled = function () {
          return this.$5;
        }),
        (t.addStreamDeferred = function (t, n) {
          var e = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            ),
            o = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            );
          this.$10({
            createStreamResult: t,
            changeStatusDeferred: e,
            createStreamDeferred: o,
            loggerProviderWithStreamContext: n,
          });
          var a = function () {
            return o.getPromise();
          };
          return {
            genStream: a,
            cancel: function () {
              if (t) {
                var e = t.pausableStream;
                return e.pauseStream();
              }
            },
            getStatusChangePromise: function () {
              return e.getPromise();
            },
          };
        }),
        (t.$10 = function (t) {
          var e = this,
            n = t.changeStatusDeferred,
            a = t.createStreamDeferred,
            i = t.createStreamResult,
            l = t.loggerProviderWithStreamContext,
            s = t.loggingPayloads,
            u = this.$1.getPromise(),
            c = r("oz-player/shims/OzPerformance").now(),
            d = (this.$1 = new (r("oz-player/shims/OzDeferred"))(
              r("oz-player/shims/OzMaybeNativePromise"),
            ));
          (d.getPromise().catch(function () {}),
            u
              .then(function () {
                if (i) {
                  var t = i.pausableStream;
                  (i.loggingPayloads && (s = i.loggingPayloads),
                    a.resolve(t.getStream()),
                    (e.$4 = t));
                  var n = r("oz-player/shims/OzPerformance").now(),
                    u = e.$11(t.startStream());
                  if (l) {
                    var d = function (a) {
                      var r = s;
                      if (r) {
                        o(
                          "oz-player/utils/OzNetworkRequestLoggingUtils",
                        ).setFetchStreamLoggingAttributes(
                          a,
                          r.getRequestUrl(),
                          r.segments,
                          n - c,
                          t.getBytesStreamed(),
                          r.getResponse(),
                        );
                        var i = e.$9;
                        i && i(a, r.getRequestUrl(), r.getResponse());
                      }
                    };
                    o(
                      "oz-player/loggings/OzLoggingUtils",
                    ).monitorPromiseAndLogOperation(u, l, "fetch_stream", d, d);
                  }
                  return u;
                }
                return null;
              })
              .then(function (t) {
                ((e.$4 = null), d.resolve(), n.resolve(t || "cancelled"));
              })
              .catch(function (t) {
                ((e.$4 = null), e.$3.reject(t), d.reject(t), n.reject(t));
              }));
        }),
        (t.$11 = function (t) {
          return t.then(function (e) {
            var t = e.statusPromise;
            return t.then(function (e) {
              return e === "stream_done" ? "done" : "error";
            });
          });
        }),
        e
      );
    })();
    l.default = e;
  },
  98,
);
