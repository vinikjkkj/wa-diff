__d(
  "WAWebEphemeralSyncResponseWAM",
  [
    "WAWebABProps",
    "WAWebChatThreadLogging",
    "WAWebEphemeralSyncResponseReceiveWamEvent",
    "WAWebEphemeralSyncResponseSendWamEvent",
    "WAWebEphemeralityWAMUtils",
    "WAWebWamEnumEsrSendResultType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("dm_reliability_logging");
    }
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.attempts,
            r = t.changes,
            a = t.incomingMsgSettings,
            i = t.localChatSettings,
            l = t.to;
          if (e()) {
            var s = new (o(
              "WAWebEphemeralSyncResponseSendWamEvent",
            ).EphemeralSyncResponseSendWamEvent)({
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                l.toJid(),
              ),
              esrSendResult: o("WAWebWamEnumEsrSendResultType")
                .ESR_SEND_RESULT_TYPE.SUCCESS,
              isAGroup: !1,
              esrDisappearingModeInitiator: o(
                "WAWebEphemeralityWAMUtils",
              ).getWamDisappearingModeInitiator(r.initiator),
              esrEphemeralityDuration: r.duration,
              esrEphemeralityInitiator: o(
                "WAWebEphemeralityWAMUtils",
              ).getWamDisappearingModeInitiatedByMe(r.initiatedByMe),
              esrEphemeralitySettingTimestamp: r.settingTimestamp,
              esrEphemeralityTriggerAction: o(
                "WAWebEphemeralityWAMUtils",
              ).getWamDisappearingModeTrigger(r.disappearingModeTrigger),
            });
            (i != null &&
              (i.initiator != null &&
                s.set({
                  clientDisappearingModeInitiator: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeInitiator(i.initiator),
                }),
              i.disappearingModeTrigger != null &&
                s.set({
                  clientEphemeralityTriggerAction: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeTrigger(i.disappearingModeTrigger),
                }),
              s.set({
                clientEphemeralityDuration: i.duration,
                clientEphemeralityInitiator: o(
                  "WAWebEphemeralityWAMUtils",
                ).getWamDisappearingModeInitiatedByMe(i.initiatedByMe),
                clientEphemeralitySettingTimestamp: i.settingTimestamp,
              })),
              a != null &&
                (a.initiator != null &&
                  s.set({
                    messageDisappearingModeInitiator: o(
                      "WAWebEphemeralityWAMUtils",
                    ).getWamDisappearingModeInitiator(a.initiator),
                  }),
                a.disappearingModeTrigger != null &&
                  s.set({
                    messageEphemeralityTriggerAction: o(
                      "WAWebEphemeralityWAMUtils",
                    ).getWamDisappearingModeTrigger(a.disappearingModeTrigger),
                  }),
                s.set({
                  messageEphemeralityDuration: a.duration,
                  messageEphemeralityInitiator: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeInitiatedByMe(a.initiatedByMe),
                  messageEphemeralitySettingTimestamp: a.settingTimestamp,
                })),
              n != null && s.set({ esrSendAttempt: n }),
              s.commit());
          }
        })),
        u.apply(this, arguments)
      );
    }
    function c(e) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.attempts,
            r = t.error,
            a = t.to;
          if (e()) {
            var i = new (o(
              "WAWebEphemeralSyncResponseSendWamEvent",
            ).EphemeralSyncResponseSendWamEvent)({
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                a.toJid(),
              ),
              esrFailureReason: r,
              esrSendResult: o("WAWebWamEnumEsrSendResultType")
                .ESR_SEND_RESULT_TYPE.ERROR,
            });
            (n != null && i.set({ esrSendAttempt: n }), i.commit());
          }
        })),
        d.apply(this, arguments)
      );
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            r = t.failureReason,
            a = t.incomingESRSettings,
            i = t.localChatSettings;
          if (e()) {
            var l = new (o(
              "WAWebEphemeralSyncResponseReceiveWamEvent",
            ).EphemeralSyncResponseReceiveWamEvent)({
              threadId: yield o("WAWebChatThreadLogging").getChatThreadID(
                n.id.toJid(),
              ),
              isAGroup: !1,
            });
            (a != null &&
              (a.initiator != null &&
                l.set({
                  esrDisappearingModeInitiator: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeInitiator(a.initiator),
                }),
              a.disappearingModeTrigger != null &&
                l.set({
                  esrEphemeralityTriggerAction: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeTrigger(a.disappearingModeTrigger),
                }),
              l.set({
                esrEphemeralityDuration: a.duration,
                esrEphemeralityInitiator: o(
                  "WAWebEphemeralityWAMUtils",
                ).getWamDisappearingModeInitiatedByMe(a.initiatedByMe),
                esrEphemeralitySettingTimestamp: a.settingTimestamp,
              })),
              i != null &&
                (i.initiator != null &&
                  l.set({
                    clientDisappearingModeInitiator: o(
                      "WAWebEphemeralityWAMUtils",
                    ).getWamDisappearingModeInitiator(i.initiator),
                  }),
                i.disappearingModeTrigger != null &&
                  l.set({
                    clientEphemeralityTriggerAction: o(
                      "WAWebEphemeralityWAMUtils",
                    ).getWamDisappearingModeTrigger(i.disappearingModeTrigger),
                  }),
                l.set({
                  clientEphemeralityDuration: i.duration,
                  clientEphemeralityInitiator: o(
                    "WAWebEphemeralityWAMUtils",
                  ).getWamDisappearingModeInitiatedByMe(i.initiatedByMe),
                  clientEphemeralitySettingTimestamp: i.settingTimestamp,
                })),
              r != null
                ? l.set({
                    esrResolveResult: o("WAWebWamEnumEsrSendResultType")
                      .ESR_SEND_RESULT_TYPE.ERROR,
                    esrFailureReason: r,
                  })
                : l.set({
                    esrResolveResult: o("WAWebWamEnumEsrSendResultType")
                      .ESR_SEND_RESULT_TYPE.SUCCESS,
                  }),
              l.commit());
          }
        })),
        p.apply(this, arguments)
      );
    }
    ((l.sendEphemeralSyncResponseSendWamEvent = s),
      (l.sendEphemeralSyncResponseSendErrorWamEvent = c),
      (l.sendEphemeralSyncResponseReceiveWamEvent = m));
  },
  98,
);
