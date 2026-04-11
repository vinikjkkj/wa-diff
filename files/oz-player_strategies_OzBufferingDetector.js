__d(
  "oz-player/strategies/OzBufferingDetector",
  [
    "oz-player/shims/OzDOMEventListener",
    "oz-player/shims/OzEventEmitter",
    "oz-player/shims/OzSubscriptionsHandler",
    "oz-player/shims/ozThrottle",
    "oz-player/strategies/OzBufferingDetectorStates",
    "oz-player/strategies/OzBufferingStateThresholdManager",
    "oz-player/utils/OzBufferingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 150,
      s = (function (t) {
        function n(n, a, i) {
          var l;
          return (
            (l = t.call(this) || this),
            (l.$OzBufferingDetector$p_3 = new (r(
              "oz-player/shims/OzSubscriptionsHandler",
            ))()),
            (l.$OzBufferingDetector$p_6 = new Map()),
            (l.$OzBufferingDetector$p_8 = null),
            (l.$OzBufferingDetector$p_9 = function (e) {
              l.$OzBufferingDetector$p_11(e);
            }),
            (l.$OzBufferingDetector$p_2 = n),
            (l.$OzBufferingDetector$p_4 = a),
            (l.$OzBufferingDetector$p_5 = i),
            (l.$OzBufferingDetector$p_7 = new (r(
              "oz-player/strategies/OzBufferingStateThresholdManager",
            ))(a)),
            l.$OzBufferingDetector$p_2.paused
              ? (l.$OzBufferingDetector$p_1 = new (o(
                  "oz-player/strategies/OzBufferingDetectorStates",
                ).OzVideoPausedState)(
                  l.$OzBufferingDetector$p_7,
                  l.$OzBufferingDetector$p_4,
                ))
              : (l.$OzBufferingDetector$p_1 = o(
                  "oz-player/utils/OzBufferingUtils",
                ).hasEnoughBuffer(
                  l.$OzBufferingDetector$p_2,
                  l.$OzBufferingDetector$p_7.getInPlayBufferUnderflowTarget(),
                  l.$OzBufferingDetector$p_5(),
                )
                  ? new (o(
                      "oz-player/strategies/OzBufferingDetectorStates",
                    ).OzVideoPlayingState)(
                      l.$OzBufferingDetector$p_7,
                      l.$OzBufferingDetector$p_4,
                    )
                  : new (o(
                      "oz-player/strategies/OzBufferingDetectorStates",
                    ).OzVideoBufferingState)(
                      l.$OzBufferingDetector$p_7,
                      l.$OzBufferingDetector$p_4,
                      null,
                    )),
            l.$OzBufferingDetector$p_3.addSubscriptions(
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "pause",
                l.$OzBufferingDetector$p_9,
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "play",
                l.$OzBufferingDetector$p_9,
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "progress",
                r("oz-player/shims/ozThrottle")(l.$OzBufferingDetector$p_9, e),
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "timeupdate",
                r("oz-player/shims/ozThrottle")(l.$OzBufferingDetector$p_9, e),
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "seeked",
                l.$OzBufferingDetector$p_9,
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "seeking",
                l.$OzBufferingDetector$p_9,
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "waiting",
                l.$OzBufferingDetector$p_9,
              ),
            ),
            l.$OzBufferingDetector$p_3.addSubscriptions(
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "canplay",
                l.$OzBufferingDetector$p_9,
              ),
              r("oz-player/shims/OzDOMEventListener").listenDOMEvent(
                l.$OzBufferingDetector$p_2,
                "canplaythrough",
                l.$OzBufferingDetector$p_9,
              ),
            ),
            l
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.$OzBufferingDetector$p_10 = function () {
            var e = this,
              t = "unavailable",
              n =
                this.$OzBufferingDetector$p_7.getInPlayBufferUnderflowTarget();
            return (
              this.$OzBufferingDetector$p_6.forEach(function (r, a) {
                var i = e.$OzBufferingDetector$p_2.currentTime;
                o("oz-player/utils/OzBufferingUtils").hasBuffer(i, n, r) ||
                  (t = t === "unavailable" ? a : "audio/video");
              }),
              t
            );
          }),
          (a.setSourceBufferState = function (t, n) {
            this.$OzBufferingDetector$p_6.set(t, n);
          }),
          (a.$OzBufferingDetector$p_11 = function (t) {
            var e = this.$OzBufferingDetector$p_1.handleEvent(
                t,
                this.$OzBufferingDetector$p_2,
                this.$OzBufferingDetector$p_5(),
                this.$OzBufferingDetector$p_6,
              ),
              n = this.$OzBufferingDetector$p_1;
            this.$OzBufferingDetector$p_1 = e;
            var r =
                e instanceof
                o("oz-player/strategies/OzBufferingDetectorStates")
                  .OzVideoBufferingState,
              a =
                n instanceof
                o("oz-player/strategies/OzBufferingDetectorStates")
                  .OzVideoBufferingState;
            if (e === n)
              return (
                r &&
                  this.$OzBufferingDetector$p_8 &&
                  this.$OzBufferingDetector$p_8
                    .cloneContext()
                    .getOperationLogger("buffering_handle_event")
                    .setInitiator(t.type)
                    .log(),
                e
              );
            if (r) {
              var i =
                n instanceof
                o("oz-player/strategies/OzBufferingDetectorStates")
                  .OzVideoPlayingState
                  ? "in_play"
                  : "start/unpause";
              (this.$OzBufferingDetector$p_8 &&
                this.$OzBufferingDetector$p_8
                  .cloneContext()
                  .getOperationLogger("enter_buffering")
                  .setState("buffering")
                  .setType(i)
                  .setReason(this.$OzBufferingDetector$p_10())
                  .setInitiator(t.type)
                  .log(),
                this.emit("enterBuffering", i));
            } else
              a &&
                (this.$OzBufferingDetector$p_8 &&
                  this.$OzBufferingDetector$p_8
                    .cloneContext()
                    .getOperationLogger("leave_buffering")
                    .setInitiator(t.type)
                    .log(),
                this.$OzBufferingDetector$p_7.notifyBufferingEnd(),
                this.emit("leaveBuffering", {
                  domEventPerfTimestamp: t.timeStamp,
                }));
            return e;
          }),
          (a.notifyStreamInterrupted = function () {
            this.$OzBufferingDetector$p_7.notifyStreamInterrupted();
          }),
          (a.notifyStreamResumed = function () {
            this.$OzBufferingDetector$p_7.notifyStreamResumed();
          }),
          (a.attachPerfLoggerProvider = function (t) {
            this.$OzBufferingDetector$p_8 = t;
          }),
          (a.destroy = function () {
            this.$OzBufferingDetector$p_3.release();
          }),
          n
        );
      })(r("oz-player/shims/OzEventEmitter"));
    l.default = s;
  },
  98,
);
