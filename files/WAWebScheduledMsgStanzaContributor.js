__d(
  "WAWebScheduledMsgStanzaContributor",
  ["WAWap", "WAWebScheduledMsgConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t =
          e.kind === "schedule"
            ? o("WAWap").CUSTOM_STRING(String(e.scheduledTimestampS))
            : o("WAWap").DROP_ATTR,
        n =
          e.kind === "schedule"
            ? o("WAWap").wap(
                "key",
                { rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId) },
                e.revealKey,
              )
            : o("WAWap").wap("key", {
                rkid: o("WAWap").CUSTOM_STRING(e.revealKeyId),
              });
      return o("WAWap").wap(
        "meta",
        {
          type: o("WAWap").CUSTOM_STRING(
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE,
          ),
          st: t,
        },
        n,
      );
    }
    l.genScheduledMsgMetaNode = e;
  },
  98,
);
