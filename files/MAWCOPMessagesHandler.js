__d(
  "MAWCOPMessagesHandler",
  [
    "LSMessagingThreadAttributionType",
    "MAWBridge",
    "MAWCommonScheduler",
    "MAWExternalId",
    "MAWLoggerUtils",
    "MAWQplProxy",
    "MAWSendEphemeralSettingMsg",
    "MAWSharedCOPLogger",
    "MWSharedS2SBaseAnnotations",
    "MpsErrors",
    "TaskSchedulerPriority",
    "WmiErrorReport",
    "WmiMetadataEphemeralSyncResponseBackoffWriter",
    "promiseDone",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, i) {
      (r("MAWSharedCOPLogger")
        .tags([
          o("MAWLoggerUtils").Tag.Ephemeral,
          o("MAWLoggerUtils").Tag.SettingSync,
        ])
        .DEBUG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleMsg: detected out-of-sync ephemeral setting for ",
              ", sending EPHEMERAL_SYNC_RESPONSE",
            ])),
          n,
        ),
        r("promiseDone")(
          o("MAWCommonScheduler")
            .mawCommonScheduler()
            .run(
              async function () {
                var e = o("MAWLoggerUtils").createInstanceKey(),
                  n = o("MAWQplProxy").startQplUserFlow(
                    r("qpl")._(25313175, "1551"),
                    await o(
                      "MWSharedS2SBaseAnnotations",
                    ).getSendToSentBaseAnnotations(
                      o("MWSharedS2SBaseAnnotations").getMessageTypeParams({
                        isEphemeralSetting: !0,
                      }),
                      r("LSMessagingThreadAttributionType").UNKNOWN,
                    ),
                    { providedInstanceKey: e },
                  );
                try {
                  var l = await o(
                    "MAWSendEphemeralSettingMsg",
                  ).sendEphemeralSettingMsg({
                    args: {
                      ephemeralSetting: {
                        ephemeralExpirationInSec: i.ephemeralExpirationInSec,
                        ephemeralLastUpdatedOrSetTimestamp:
                          i.ephemeralLastUpdatedOrSetTimestamp,
                      },
                      isEphemeralSettingReset: !1,
                      isForSyncResponse: !0,
                    },
                    chatJid: t,
                    externalId: o("MAWExternalId").generateExternalId(),
                    qplEventType: r("qpl")._(25313175, "1551"),
                    qplInstanceKey: e,
                  });
                  if (l.success) {
                    if (
                      (n.endSuccess(),
                      o(
                        "WmiMetadataEphemeralSyncResponseBackoffWriter",
                      ).deleteEphemeralSyncResponseBackoffInfo([a]),
                      l.value != null)
                    ) {
                      var s = l.value;
                      o("MAWBridge")
                        .getBridge()
                        .fireAndForget(
                          "event",
                          "handleMessageSendResult",
                          { report: s, success: !0 },
                          !0,
                        );
                    }
                  } else n.endFail(l.error.type);
                } catch (e) {
                  var u;
                  o("WmiErrorReport").reportWmiError(
                    o("MpsErrors").MpsErrors.classify(
                      e,
                      "send_ephemeral_settings",
                      "infra",
                    ),
                  );
                  var c = e instanceof Error ? e : null;
                  n == null ||
                    n.endFail("failed_to_send_empemeral_settings", {
                      string: {
                        errorDescription:
                          (u = c == null ? void 0 : c.message) != null ? u : "",
                      },
                    });
                }
              },
              {
                name: "ephemeral_sync_response",
                priority: o("TaskSchedulerPriority").BACKGROUND_PRIORITY,
              },
            ).promise,
        ));
    }
    l.sendEphemeralSyncResponse = s;
  },
  98,
);
