__d(
  "MawMpsCop",
  [
    "MAWBridge",
    "MAWWarmInMemoryParticipantStore",
    "MawMpsCopProtocolQueueProcessor",
    "MpsErrors",
    "MpsMediaPostProcessor",
    "MpsToUIPostProcessor",
    "TaskSchedulerPriority",
    "WAPriorityQueue",
    "WAPubSub",
    "WAWaitForUserUnblocked",
    "WebMpsScheduler",
    "WmiErrorReport",
    "WmiReportIfFails",
    "getSafeQplErrorMessage",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 10,
      u = r("justknobx")._("4688");
    function c() {
      return e;
    }
    var d = (function () {
        function e() {
          ((this.$1 = o("WAPubSub").simplePubSub()),
            (this.$3 = new Map()),
            (this.$2 = new (o(
              "MawMpsCopProtocolQueueProcessor",
            ).ProtocolQueueProcessor)()));
        }
        var t = e.prototype;
        return (
          (t.subscribe = function (t) {
            return this.$1.subscribe(t);
          }),
          (t.$4 = async function (t, n) {
            var e = this;
            if (this.$3.size === 0) return { exhausted: !0 };
            var r = [];
            return (
              this.$3.forEach(function (o, a) {
                if (!(n != null && r.length >= n)) {
                  for (var i = 1; i <= t; i++) {
                    var l = o.pull();
                    l != null && r.push(l);
                  }
                  o.size() === 0 && e.$3.delete(a);
                }
              }),
              await this.$5({ payloadList: r }),
              { exhausted: this.$3.size === 0 }
            );
          }),
          (t.$6 = function (t) {
            var e = this;
            t.payloadList.forEach(function (t) {
              var n,
                o = t.message.threadId,
                a =
                  (n = e.$3.get(o)) != null
                    ? n
                    : new (r("WAPriorityQueue"))(function (e) {
                        return -e.message.timestampMs;
                      });
              (a.push(t), e.$3.set(o, a));
            });
          }),
          (t.$5 = async function (t) {
            var e = t.ctx,
              n = t.payloadList;
            o("MpsMediaPostProcessor").postProcessPayloads(n);
            var r = new Map(),
              a = [];
            (await Promise.all(
              n.map(async function (t) {
                try {
                  var n = await o(
                    "MpsToUIPostProcessor",
                  ).mpsToUIEventPostProcessPayload(t);
                  (n.forEach(function (n) {
                    n.tag === "NewMsg" &&
                      n.value.unsupportedType != null &&
                      (e == null ||
                        e.messageToQpl.addPoint(
                          t.message.messageId,
                          "unsupported_type",
                          { string: { unsupported: n.value.unsupportedType } },
                        ));
                  }),
                    a.push.apply(a, n));
                } catch (e) {
                  r.set(
                    t.message.messageId,
                    o("MpsErrors").MpsErrors.classify(
                      e,
                      "mps_to_ui",
                      "ui_update_failed",
                    ),
                  );
                }
              }),
            ),
              o("MAWBridge")
                .getBridge()
                .fireAndForget("event", "uiUpdate", { events: a }),
              n.forEach(function (t) {
                var n,
                  a = t.message.messageId,
                  i = r.get(a);
                i != null &&
                  (o("WmiErrorReport").reportWmiError(i, { loggerSubject: a }),
                  e == null ||
                    e.messageToQpl.addPoint(a, "ui-fail", {
                      string: {
                        error_code: o("MpsErrors").MpsErrors.codeOf(i),
                        error_source:
                          (n = o("MpsErrors").MpsErrors.sourceOf(i)) != null
                            ? n
                            : "unclassified",
                        errorDescription: o(
                          "getSafeQplErrorMessage",
                        ).getSafeQPLErrorMessage(i),
                      },
                    }));
              }));
          }),
          (t.postProcessMessages = async function (t) {
            if (t.payloadList.length !== 0) {
              if (
                o("WAWaitForUserUnblocked").isStillWaitingForUserUnblocked()
              ) {
                this.$6({ ctx: t.ctx, payloadList: t.payloadList });
                return;
              }
              await this.$5({ ctx: t.ctx, payloadList: t.payloadList });
            }
          }),
          (t.subscribeToOfflineQueue = function (t) {
            var e = this;
            t.subscribe(function (t) {
              switch (t.type) {
                case "offline-start": {
                  o("WAWaitForUserUnblocked").maybeResetWaitForUserUnblocked();
                  break;
                }
                case "offline-end": {
                  (e.$1.publish({ type: "maw-infra-start" }),
                    o("WmiReportIfFails").wmiReportIfFails(
                      function () {
                        return o(
                          "MAWWarmInMemoryParticipantStore",
                        ).warmInMemoryParticipantStoreFromRecentThreads();
                      },
                      function (e, t) {
                        return o("MpsErrors").MpsErrors.classify(e, t, "infra");
                      },
                      "warm_participant_store",
                    ),
                    e
                      .$4(c())
                      .catch(function (e) {
                        o("WmiErrorReport").reportWmiError(
                          o("MpsErrors").MpsErrors.classify(
                            e,
                            "cop_offline_end",
                            "ui_update_failed",
                          ),
                        );
                      })
                      .finally(function () {
                        e.$7(function () {
                          return e.$4(s, u);
                        }, o("TaskSchedulerPriority").NORMAL_PRIORITY);
                      }),
                    e.$2.startProcessing(),
                    e.$1.publish({ success: !0, type: "maw-infra-end" }),
                    o("WAWaitForUserUnblocked").unblockUser());
                  break;
                }
                default: {
                  t.type;
                  break;
                }
              }
            });
          }),
          (t.$7 = function (t, n) {
            var e = this;
            if (this.$8 == null) {
              var r = o("WebMpsScheduler")
                .mpsScheduler()
                .run(t, { name: "mps-cop-iterator", priority: n });
              ((this.$8 = r),
                r.promise
                  .then(function (r) {
                    ((e.$8 = null), r.exhausted === !1 && e.$7(t, n));
                  })
                  .catch(function (r) {
                    (o("WmiErrorReport").reportWmiError(
                      o("MpsErrors").MpsErrors.classify(
                        r,
                        "cop_iterator",
                        "ui_update_failed",
                      ),
                      { loggerProject: "cop" },
                    ),
                      (e.$8 = null),
                      e.$7(t, n));
                  }));
            }
          }),
          e
        );
      })(),
      m;
    function p() {
      return m || ((m = new d()), m);
    }
    l.mpsCop = p;
  },
  98,
);
