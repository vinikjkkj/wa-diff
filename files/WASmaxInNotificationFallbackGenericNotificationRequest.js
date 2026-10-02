__d(
  "WASmaxInNotificationFallbackGenericNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInNotificationFallbackEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "from",
        o("WASmaxInNotificationFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        o("WASmaxInNotificationFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      return i.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            from: r.value,
            participant: a.value,
            type: i.value,
          })
        : i;
    }
    l.parseGenericNotificationRequest = e;
  },
  98,
);
