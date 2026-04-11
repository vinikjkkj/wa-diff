__d(
  "oz-player/networks/OzStreamingTaskStateManager",
  [
    "Promise",
    "oz-player/networks/OzStreamingTask",
    "oz-player/networks/OzStreamingTaskQueueProvider",
    "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
    "oz-player/shims/OzSubscriptionsHandler",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function () {
        function t(e) {
          var t = this;
          ((this.$3 = new (r("oz-player/shims/OzSubscriptionsHandler"))()),
            (this.$4 = 0),
            (this.$9 = !1),
            (this.$10 = null));
          var n = e.bandwidthEstimator,
            a = e.config,
            i = e.loggerProvider,
            l = e.mimeType,
            s = e.priorityCalculator,
            u = e.setCustomFetchStreamLoggingAttributes;
          ((this.$5 = l),
            (this.$1 = s),
            (this.$6 = o(
              "oz-player/networks/OzStreamingTaskQueueProvider",
            ).getQueue(this.$5)),
            (this.$7 = i),
            (this.$8 = a),
            (this.$11 = n != null ? n : null),
            (this.$10 = u),
            this.$3.addSubscriptions(
              this.$1.addListener("state_changed", function (e, n) {
                (t.$12(e, n), t.$2 && t.$6.updatePriority(t.$2, t.$4));
              }),
            ));
        }
        var a = t.prototype;
        return (
          (a.$13 = function () {
            var e = [];
            return (
              e.push(
                r(
                  "oz-player/networks/getOzBandwidthEstimatorPipeThroughReporter",
                )(this.$5, this.$11),
              ),
              e
            );
          }),
          (a.startStreamDeferred = function (t) {
            var e = t.dataAppendedCallback,
              n = t.dataAppendedErrorCallback,
              r = t.debugName,
              o = t.mediaStreamType,
              a = t.networkManager,
              i = t.segments,
              l = t.segmentsLoggerProvider,
              s = this.$14(l),
              u = this.$13(),
              c;
            (i.length > 0
              ? (c = a.createPausableStream({
                  debugName: r,
                  segments: i,
                  pipeThroughRangeStreamProviders: u,
                  loggerProvider: l,
                  mediaStreamType: o,
                  dataAppendedCallback: e,
                  dataAppendedErrorCallback: n,
                }))
              : (c = null),
              (this.$9 = !0));
            var d = s.addStreamDeferred(c, l);
            return {
              genStream: d.genStream,
              cancel: d.cancel,
              getStatusChangePromise: this.$15(d.getStatusChangePromise),
            };
          }),
          (a.$14 = function (t) {
            var e = this.$2;
            return (
              this.$12(this.$1.compute(), "start_stream"),
              !e || e.isCancelled()
                ? ((e = this.$2 =
                    new (r("oz-player/networks/OzStreamingTask"))(
                      this.$8,
                      t,
                      this.$10,
                    )),
                  this.$6.enqueue(e, this.$4))
                : this.$6.updatePriority(e, this.$4),
              e
            );
          }),
          (a.$15 = function (r) {
            var t = this;
            return function () {
              return r()
                .then(function (e) {
                  return (t.$16(), e);
                })
                .catch(function (r) {
                  return (t.$16(), (e || (e = n("Promise"))).reject(r));
                });
            };
          }),
          (a.finishTaskIfNoOngoingStream = function () {
            this.$9 || this.$17();
          }),
          (a.destroy = function () {
            this.$3.release();
            var e = this.$2;
            ((this.$2 = null), e && this.$6.remove(e));
          }),
          (a.$16 = function () {
            ((this.$9 = !1),
              this.$12(this.$1.compute(), "end_stream"),
              this.$4 <
                o("oz-player/networks/OzStreamingTaskQueueProvider")
                  .OZ_QUEUE_MAX_PRIORITY && this.$17());
          }),
          (a.$17 = function () {
            this.$2 && (this.$2.finish(), (this.$2 = null));
          }),
          (a.$12 = function (t, n) {
            t !== this.$4 &&
              ((this.$4 = t),
              this.$7 &&
                this.$7
                  .getOperationLogger("priority_changed")
                  .setPriorityFloat(this.$4)
                  .setInitiator(n)
                  .log());
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
