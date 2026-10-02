__d(
  "WASmaxInMessageDeliverCoExV2ProactiveMetaMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrJidEnum(
        e,
        "target_chat_jid",
        o("WASmaxInMessageDeliverEnums").GROUPJID_USERJID,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrLidUserJid(e, "from");
      return r.success
        ? o("WAResultOrError").makeResult({
            targetChatJid: n.value,
            from: r.value,
          })
        : r;
    }
    l.parseCoExV2ProactiveMetaMixin = e;
  },
  98,
);
