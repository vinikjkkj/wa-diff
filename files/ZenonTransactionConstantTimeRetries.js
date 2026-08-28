__d(
  "ZenonTransactionConstantTimeRetries",
  [
    "$InternalEnum",
    "DateConsts",
    "FBLogger",
    "Promise",
    "QuickLogActionType",
    "QuickPerformanceLogger",
    "ZenonScreensharingQPLLogger",
    "asyncToGeneratorRuntime",
    "clearInterval",
    "getErrorSafe",
    "promiseDone",
    "qpl",
    "setInterval",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = n("$InternalEnum").Mirrored([
        "WaitingSendOrReceiveMessageState",
        "RequestProcessingState",
        "ResponseProcessingState",
        "Terminated",
      ]),
      c = 3 * o("DateConsts").MS_PER_SEC,
      d = 60 * o("DateConsts").MS_PER_SEC,
      m = (function () {
        function t(e, t, o, a, i) {
          ((this.$8 = 0),
            (this.$2 = e),
            (this.$3 = t),
            (this.$1 = u.WaitingSendOrReceiveMessageState),
            (this.$9 = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* (e) {
                  try {
                    (yield o(e), i(e.getHeader().messageID));
                  } catch (e) {
                    var t = r("getErrorSafe")(e);
                    r("FBLogger")("rpweb")
                      .catching(t)
                      .warn("Send message failed");
                  }
                },
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })()),
            (this.$10 = a));
        }
        var o = t.prototype;
        return (
          (o.$11 = function () {
            var e = this;
            if (this.$1 !== u.RequestProcessingState) {
              r("FBLogger")("rtc_www").mustfix(
                "Should never startRetryTimer in non-REQUEST_PROCESSING state: %s",
                this.$1,
              );
              return;
            }
            (this.$12(),
              (this.$6 = r("setInterval")(function () {
                e.$13();
              }, c)));
          }),
          (o.$14 = function () {
            var e = this;
            if (this.$1 !== u.RequestProcessingState) {
              r("FBLogger")("rtc_www").mustfix(
                "Should never startTerminateTimer in non-REQUEST_PROCESSING state: %s",
                this.$1,
              );
              return;
            }
            (this.$15(),
              (this.$7 = r("setInterval")(function () {
                (e.$16(), r("QuickLogActionType") && e.$17(3));
              }, d)));
          }),
          (o.$13 = function () {
            if (this.$1 === u.Terminated) {
              r("FBLogger")("rtc_www").mustfix(
                "Should never call onRetryTimer with transaction terminated.",
              );
              return;
            }
            if (this.$1 !== u.RequestProcessingState) {
              r("FBLogger")("rtc_www").mustfix(
                "Should never call onRetryTimer in non-REQUEST_PROCESSING state: %s for messageId: %s",
                this.$1,
                this.$2,
              );
              return;
            }
            if (this.$4 == null) {
              r("FBLogger")("rtc_www").mustfix(
                "Request should not be null or undefined when calling onRetryTimer",
              );
              return;
            }
            (this.$8++,
              this.$4.setRetryCount(this.$8),
              this.$4 != null && r("promiseDone")(this.$9(this.$4)),
              this.$11());
          }),
          (o.$12 = function () {
            r("clearInterval")(this.$6);
          }),
          (o.$15 = function () {
            r("clearInterval")(this.$7);
          }),
          (o.$16 = function () {
            (this.$12(), this.$15(), (this.$1 = u.Terminated));
          }),
          (o.$18 = function (t) {
            return isNaN(+t) ? 0 : +t;
          }),
          (o.$19 = function () {
            (s || (s = r("QuickPerformanceLogger"))) &&
              (s || (s = r("QuickPerformanceLogger"))).markerStart(
                r("qpl")._(64246910, "1453"),
                this.$18(this.$2),
              );
          }),
          (o.$17 = function (t) {
            (s || (s = r("QuickPerformanceLogger"))) &&
              (s || (s = r("QuickPerformanceLogger"))).markerEnd(
                r("qpl")._(64246910, "1453"),
                t,
                this.$18(this.$2),
              );
          }),
          (o.$20 = function (t, n) {
            if ((s || (s = r("QuickPerformanceLogger"))) && t) {
              var e,
                o = this.$3.getSignalingID(),
                a = (e = this.$3.getRemoteSignalingID()) != null ? e : "",
                i = this.$3.getUserInfo().userID,
                l = this.$3.getRoomInfo().name,
                u = this.$3.getProtocol();
              (s || (s = r("QuickPerformanceLogger"))).markerPoint(
                r("qpl")._(64246910, "1453"),
                t,
                {
                  data: {
                    int: { retryCount: n },
                    string: {
                      protocol: u,
                      remoteSignalingID: a,
                      roomName: l,
                      signalingID: o,
                      userID: i,
                    },
                  },
                  instanceKey: this.$18(this.$2),
                },
              );
            }
          }),
          (o.sendMessage = function (o) {
            var t,
              a = o.getHeader(),
              i = a.messageID,
              l = a.retryCount;
            switch (this.$1) {
              case u.WaitingSendOrReceiveMessageState:
                return (
                  this.$19(),
                  (this.$4 = o),
                  (this.$1 = u.RequestProcessingState),
                  this.$11(),
                  this.$14(),
                  r(
                    "ZenonScreensharingQPLLogger",
                  ).onMaybeScreenShareUpdateRequest(o),
                  this.$9(o)
                );
              case u.RequestProcessingState:
                return (
                  r("FBLogger")("rtc_www").mustfix(
                    "Zenon should not generate an outgoing request more than once. MessageID: %s",
                    i,
                  ),
                  (e || (e = n("Promise"))).resolve()
                );
              case u.ResponseProcessingState:
                return (
                  this.$20(
                    (t = o.getEvents()[0]) == null ? void 0 : t.eventName,
                    l,
                  ),
                  this.$5 == null
                    ? ((this.$5 = o), this.$9(this.$5))
                    : (r("FBLogger")("rtc_www").mustfix(
                        "Zenon should not generate a response to an incoming request more than once. MessageID: %s",
                        i,
                      ),
                      (e || (e = n("Promise"))).resolve())
                );
              case u.Terminated:
                return (
                  r("QuickLogActionType") && this.$17(2),
                  (e || (e = n("Promise"))).resolve()
                );
            }
          }),
          (o.receiveMessage = function (t) {
            var e,
              n,
              o = t.getHeader().retryCount;
            switch (this.$1) {
              case u.WaitingSendOrReceiveMessageState:
                (this.$19(),
                  (this.$4 = t),
                  (this.$1 = u.ResponseProcessingState),
                  this.$10(t));
                break;
              case u.RequestProcessingState:
                (this.$20(
                  (e = t.getEvents()[0]) == null ? void 0 : e.eventName,
                  o,
                ),
                  this.$16(),
                  this.$10(t));
                break;
              case u.ResponseProcessingState:
                (this.$20(
                  (n = t.getEvents()[0]) == null ? void 0 : n.eventName,
                  o,
                ),
                  this.$5 != null &&
                    (r("promiseDone")(this.$9(this.$5)),
                    this.$20("send_back_same_response", o)));
                break;
              case u.Terminated:
                (r("ZenonScreensharingQPLLogger").onMaybeMediaUpdateResponse(t),
                  r("QuickLogActionType") && this.$17(2));
                break;
            }
          }),
          t
        );
      })();
    l.default = m;
  },
  98,
);
