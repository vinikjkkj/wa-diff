__d(
  "WAWebScheduledMsgStanzaContributor",
  ["WAWap", "WAWebScheduledMsgConstants"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.revealKey,
        r = e.revealKeyId,
        a = e.scheduledTimestampS;
      return (t = o("WAWap")).wap(
        "meta",
        {
          type: t.CUSTOM_STRING(
            o("WAWebScheduledMsgConstants").SCHEDULED_MSG_META_TYPE,
          ),
          st: t.CUSTOM_STRING(String(a)),
        },
        t.wap("key", { rkid: t.CUSTOM_STRING(r) }, n),
      );
    }
    l.genScheduledMsgMetaNode = e;
  },
  98,
);
