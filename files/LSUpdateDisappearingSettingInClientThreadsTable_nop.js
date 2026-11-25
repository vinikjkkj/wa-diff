__d(
  "LSUpdateDisappearingSettingInClientThreadsTable.nop",
  [
    "I64",
    "LSMessagingThreadAttributionType",
    "MAWBridgeFireAndForget",
    "MAWBridgeSendAndReceive",
    "MAWCurrentUser",
    "MAWEphemeralMsgAutoResetSystemId",
    "MAWJids",
    "MAWMessageSendReporter",
    "MAWMiActOnActThreadReady",
    "ReQL",
    "WATimeUtils",
    "promiseDone",
    "qpl",
    "sendToSentQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = async function (n, a, i) {
        var t = await o("ReQL").firstAsync(
          o("ReQL").fromTableAscending(n.threads).getKeyRange(i),
        );
        if (t != null)
          return o("MAWMiActOnActThreadReady").onActThreadReady(
            n,
            i,
            "LSUpdateDisappearingSettingInClientThreadsTable.nop",
            function (n, a) {
              var i,
                l,
                s = {
                  ephemeralExpirationInSec: (e || (e = o("I64"))).to_int32(
                    (i = t.disappearingSettingTtl) != null
                      ? i
                      : (e || (e = o("I64"))).zero,
                  ),
                  ephemeralLastUpdatedOrSetTimestamp: o(
                    "WATimeUtils",
                  ).castMilliSecondsToUnixTime(
                    e.to_float(
                      (l = t.disappearingSettingUpdatedTs) != null
                        ? l
                        : (e || (e = o("I64"))).zero,
                    ),
                  ),
                };
              if (
                (o("MAWBridgeFireAndForget").fireAndForget(
                  "backend",
                  "setEphemeralSettingCache",
                  { jid: a, settings: s },
                ),
                t.disappearingSettingUpdatedBy != null)
              ) {
                var u = (e || (e = o("I64"))).to_string(
                    t.disappearingSettingUpdatedBy,
                  ),
                  c = u === r("MAWEphemeralMsgAutoResetSystemId");
                if (u === o("MAWCurrentUser").getID() || c) {
                  var d = function (t) {
                      return o("MAWBridgeSendAndReceive").sendAndReceive(
                        "backend",
                        "setEphemeralSettingsFromFrontend",
                        {
                          chatJid: a,
                          ephemeralExpirationInSec: s.ephemeralExpirationInSec,
                          ephemeralLastUpdatedOrSetTimestamp:
                            s.ephemeralLastUpdatedOrSetTimestamp,
                          isEphemeralSettingReset: c,
                          s2sInstanceKey: t,
                        },
                      );
                    },
                    m = o(
                      "sendToSentQPLLogger",
                    ).markSendToSentStartWithAnnotation(
                      t,
                      { isEphemeralSetting: !0 },
                      r("LSMessagingThreadAttributionType").UNKNOWN,
                    );
                  r("promiseDone")(
                    o("MAWMessageSendReporter").MAWMessageSendReporter(
                      null,
                      d(m),
                      {
                        qplEventType: r("qpl")._(25313175, "1551"),
                        qplInstanceKey: m,
                      },
                    ),
                  );
                } else
                  o("MAWBridgeFireAndForget").fireAndForget(
                    "backend",
                    "setEphemeralSettingsFromMI",
                    {
                      author: o("MAWJids").toUserJid(u),
                      chatJid: a,
                      ephemeralExpirationInSec: s.ephemeralExpirationInSec,
                      ephemeralLastUpdatedOrSetTimestamp:
                        s.ephemeralLastUpdatedOrSetTimestamp,
                      fromWAI: !1,
                      isEphemeralSettingReset: !1,
                      serverTs: s.ephemeralLastUpdatedOrSetTimestamp,
                    },
                  );
              }
              return Promise.resolve();
            },
          );
      };
    ((s.__nop_name__ = "LSInsertAdminMessageInClientMessages"),
      (l.default = s));
  },
  98,
);
