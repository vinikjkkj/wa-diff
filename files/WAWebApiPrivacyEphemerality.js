__d(
  "WAWebApiPrivacyEphemerality",
  [
    "WALogger",
    "WAWebABProps",
    "WAWebSchemaChat",
    "WAWebSchemaGroupMetadata",
    "countWhere",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = await o("WAWebSchemaChat")
            .getChatTable()
            .greaterThan(["ephemeralDuration"], 0, { shouldDecrypt: !1 }),
          n = t.length,
          a = r("countWhere")(t, function (e) {
            return e.disappearingModeInitiatedByMe === !0;
          }),
          i = await o("WAWebSchemaGroupMetadata")
            .getGroupMetadataTable()
            .greaterThan(["ephemeralDuration"], 0),
          l = o("WAWebABProps").getABPropConfigValue(
            "dm_initiator_trigger_groups",
          )
            ? r("countWhere")(i, function (e) {
                return e.disappearingModeInitiatedByMe === !0;
              })
            : 0,
          s = a + l;
        return {
          isEphemeralMessagingUser: s > 0,
          countEphemeralThreadsEnabledByMe: s,
          countEphemeralThreads: n,
        };
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[ephemerality] daily log info retrieval failed",
                ])),
            )
            .verbose()
            .sendLogs(
              "ephemerality_daily_logs: retrieving current ephemerality information failed",
            ),
          {
            isEphemeralMessagingUser: null,
            countEphemeralThreadsEnabledByMe: null,
            countEphemeralThreads: null,
          }
        );
      }
    }
    l.queryEphemeralityDailyLogInfo = s;
  },
  98,
);
