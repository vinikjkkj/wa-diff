__d(
  "WAWebScheduledMsgStanzaContributor",
  ["WAWap"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
        e.kind === "schedule"
          ? o("WAWap").wap(
              "key",
              { rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId) },
              e.revealKey,
            )
          : o("WAWap").wap("key", {
              rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId),
            });
      return {
        keyNode: t,
        scheduledTimestampS:
          e.kind === "schedule" ? e.scheduledTimestampS : null,
      };
    }
    l.genScheduledMsgMetaContribution = e;
  },
  98,
);
