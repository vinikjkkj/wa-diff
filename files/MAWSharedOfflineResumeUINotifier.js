__d(
  "MAWSharedOfflineResumeUINotifier",
  [
    "MAWBridge",
    "MAWQplProxy",
    "MAWSharedProtocolQueueConst",
    "MWFBLogger",
    "WAOfflineUtils",
    "WAThrottle",
    "promiseDone",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = 333.3333333333333,
      m = o("MWFBLogger").MWLogger().tags(["ProtocolQueue", "MAWConsumer"]),
      p = (function () {
        function t() {
          var e = this;
          ((this.$1 = {}),
            (this.$2 = 0),
            (this.$3 = "wa"),
            (this.$4 = !1),
            (this.$5 = 0),
            (this.$6 = 0),
            (this.$7 = 0),
            (this.$8 = 0),
            (this.$9 = null),
            (this.$15 = o("WAThrottle").throttle(function () {
              e.$4 ||
                e.$14(
                  o("MAWSharedProtocolQueueConst").OfflineConsumerStatus
                    .Processing,
                );
            }, d)),
            (this.$11 = o("WAThrottle").throttle(function () {
              e.$3 === "wa" &&
                e.$4 === !1 &&
                e.$10(
                  o("WAOfflineUtils").WAClientInfraOfflineProgress.Processing,
                );
            }, d)));
        }
        var n = t.prototype;
        return (
          (n.subscribeToWAEvents = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "offline-start": {
                  ((e.$9 = o("MAWQplProxy").performanceAbsoluteNow()),
                    (e.$5 = t.offlineStats.count),
                    (e.$7 = t.offlineStats.message),
                    e.$10(
                      o("WAOfflineUtils").WAClientInfraOfflineProgress
                        .Initializing,
                      e.$9,
                    ),
                    (e.$4 = !1),
                    (e.$3 = "wa"));
                  break;
                }
                case "offline-processed":
                  break;
                case "offline-entity": {
                  (e.$6++, e.$11());
                  break;
                }
                case "offline-end": {
                  (e.$10(
                    o("WAOfflineUtils").WAClientInfraOfflineProgress.Complete,
                  ),
                    (e.$3 = "maw"));
                  break;
                }
                case "connection-lost": {
                  e.$10(
                    o("WAOfflineUtils").WAClientInfraOfflineProgress.Failed,
                  );
                  break;
                }
                default:
              }
            });
          }),
          (n.subscribeToMawEvents = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "maw-infra-start": {
                  (e.$9 == null &&
                    (e.$9 = o("MAWQplProxy").performanceAbsoluteNow()),
                    e.$12());
                  break;
                }
                case "maw-infra-end": {
                  (t.success ? e.notifyUICurrentProcessingSucceeded() : e.$13(),
                    (e.$9 = null));
                  break;
                }
              }
            });
          }),
          (n.subscribeToMessageEvents = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "new-message": {
                  if (t.commonMessageBase.offline == null) return;
                  e.addWAMessage();
                  break;
                }
              }
            });
          }),
          (n.addWAMessage = function () {
            (this.$8++, this.$11());
          }),
          (n.$12 = function () {
            ((this.$2 = 0),
              (this.$4 = !1),
              this.$14(
                o("MAWSharedProtocolQueueConst").OfflineConsumerStatus
                  .Initializing,
              ));
          }),
          (n.setThreadMetadata = function (n) {
            var t = n.reduce(function (e, t) {
              var n = t.from;
              return (
                (e[n] = {
                  chatStatus: o("MAWSharedProtocolQueueConst")
                    .OfflineConsumerStatus.Processing,
                  snippetStatus: o("MAWSharedProtocolQueueConst")
                    .OfflineConsumerStatus.Processing,
                }),
                e
              );
            }, {});
            (m.DEBUG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "Set thread metadata: ",
                  "",
                ])),
              JSON.stringify(t),
            ),
              (this.$1 = t));
          }),
          (n.notifyUIChatReady = function (t) {
            ((this.$1[t] = {
              chatStatus: o("MAWSharedProtocolQueueConst").OfflineConsumerStatus
                .Complete,
              snippetStatus: o("MAWSharedProtocolQueueConst")
                .OfflineConsumerStatus.Complete,
            }),
              this.$14(
                o("MAWSharedProtocolQueueConst").OfflineConsumerStatus
                  .Processing,
              ));
          }),
          (n.notifyUICurrentProcessingSucceeded = function () {
            var e = this;
            (Object.keys(this.$1).forEach(function (t) {
              e.$1[t] = {
                chatStatus: o("MAWSharedProtocolQueueConst")
                  .OfflineConsumerStatus.Complete,
                snippetStatus: o("MAWSharedProtocolQueueConst")
                  .OfflineConsumerStatus.Complete,
              };
            }),
              (this.$4 = !0),
              this.$14(
                o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete,
              ),
              (this.$1 = {}));
          }),
          (n.$13 = function () {
            var e = this;
            (Object.keys(this.$1).forEach(function (t) {
              e.$1[t] = {
                chatStatus: o("MAWSharedProtocolQueueConst")
                  .OfflineConsumerStatus.Complete,
                snippetStatus: o("MAWSharedProtocolQueueConst")
                  .OfflineConsumerStatus.Complete,
              };
            }),
              this.$14(
                o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Failed,
              ),
              (this.$1 = {}));
          }),
          (n.maybeNotifyUI = function () {
            this.$15();
          }),
          (n.$10 = function (t, n) {
            o("MAWBridge")
              .getBridge()
              .fireAndForget("event", "offlineSnapshot", {
                downloaded: { count: this.$6, message: this.$8 },
                expected: { count: this.$5, message: this.$7 },
                status: t,
                timestamp:
                  n != null ? n : o("MAWQplProxy").performanceAbsoluteNow(),
              });
          }),
          (n.$14 = function (t) {
            var e = o("MAWQplProxy").performanceAbsoluteNow(),
              n = {
                chatJidStatus: this.$1,
                startTime: this.$9 != null ? this.$9 : null,
                status: t,
                timestamp: e,
                totalExpectedCount: this.$5,
                totalProcessedCount: this.$2,
              };
            (m.DEBUG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose(["MAW UI: ", ""])),
              JSON.stringify(n),
            ),
              t ===
              o("MAWSharedProtocolQueueConst").OfflineConsumerStatus.Complete
                ? r("promiseDone")(
                    o("MAWBridge")
                      .getBridge()
                      .sendAndReceive("event", "offlineConsumerProgress", n),
                    function () {
                      m.DEBUG(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            ' -> "Offline Complete" bridge event sent',
                          ])),
                      );
                    },
                    function (e) {
                      m.MUSTFIX(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            ' -> Unable to send "Offline Complete" event ',
                            "",
                          ])),
                        e,
                      );
                    },
                  )
                : o("MAWBridge")
                    .getBridge()
                    .fireAndForget("event", "offlineConsumerProgress", n));
          }),
          t
        );
      })(),
      _ = new p();
    l.offlineResumeUINotifier = _;
  },
  98,
);
