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
    "Promise",
    "ReQL",
    "WATimeUtils",
    "asyncToGeneratorRuntime",
    "promiseDone",
    "qpl",
    "sendToSentQPLLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i) {
            var l = yield o("ReQL").firstAsync(
              o("ReQL").fromTableAscending(t.threads).getKeyRange(i),
            );
            if (l != null)
              return o("MAWMiActOnActThreadReady").onActThreadReady(
                t,
                i,
                "LSUpdateDisappearingSettingInClientThreadsTable.nop",
                function (t, a) {
                  var i,
                    u,
                    c = {
                      ephemeralExpirationInSec: (s || (s = o("I64"))).to_int32(
                        (i = l.disappearingSettingTtl) != null
                          ? i
                          : (s || (s = o("I64"))).zero,
                      ),
                      ephemeralLastUpdatedOrSetTimestamp: o(
                        "WATimeUtils",
                      ).castMilliSecondsToUnixTime(
                        s.to_float(
                          (u = l.disappearingSettingUpdatedTs) != null
                            ? u
                            : (s || (s = o("I64"))).zero,
                        ),
                      ),
                    };
                  if (
                    (o("MAWBridgeFireAndForget").fireAndForget(
                      "backend",
                      "setEphemeralSettingCache",
                      { jid: a, settings: c },
                    ),
                    l.disappearingSettingUpdatedBy != null)
                  ) {
                    var d = (s || (s = o("I64"))).to_string(
                        l.disappearingSettingUpdatedBy,
                      ),
                      m = d === r("MAWEphemeralMsgAutoResetSystemId");
                    if (d === o("MAWCurrentUser").getID() || m) {
                      var p = function (t) {
                          return o("MAWBridgeSendAndReceive").sendAndReceive(
                            "backend",
                            "setEphemeralSettingsFromFrontend",
                            {
                              chatJid: a,
                              ephemeralExpirationInSec:
                                c.ephemeralExpirationInSec,
                              ephemeralLastUpdatedOrSetTimestamp:
                                c.ephemeralLastUpdatedOrSetTimestamp,
                              isEphemeralSettingReset: m,
                              s2sInstanceKey: t,
                            },
                          );
                        },
                        _ = o(
                          "sendToSentQPLLogger",
                        ).markSendToSentStartWithAnnotation(
                          l,
                          { isEphemeralSetting: !0 },
                          r("LSMessagingThreadAttributionType").UNKNOWN,
                        );
                      r("promiseDone")(
                        o("MAWMessageSendReporter").MAWMessageSendReporter(
                          null,
                          p(_),
                          {
                            qplEventType: r("qpl")._(25313175, "1551"),
                            qplInstanceKey: _,
                          },
                        ),
                      );
                    } else
                      o("MAWBridgeFireAndForget").fireAndForget(
                        "backend",
                        "setEphemeralSettingsFromMI",
                        {
                          author: o("MAWJids").toUserJid(d),
                          chatJid: a,
                          ephemeralExpirationInSec: c.ephemeralExpirationInSec,
                          ephemeralLastUpdatedOrSetTimestamp:
                            c.ephemeralLastUpdatedOrSetTimestamp,
                          fromWAI: !1,
                          isEphemeralSettingReset: !1,
                          serverTs: c.ephemeralLastUpdatedOrSetTimestamp,
                        },
                      );
                  }
                  return (e || (e = n("Promise"))).resolve();
                },
              );
          },
        );
        function a(e, n, r) {
          return t.apply(this, arguments);
        }
        return a;
      })();
    ((u.__nop_name__ = "LSInsertAdminMessageInClientMessages"),
      (l.default = u));
  },
  98,
);
