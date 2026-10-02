__d(
  "WASmaxInMessageFallbackDeliverRequest",
  [
    "WAResultOrError",
    "WASmaxInMessageFallbackDeliverEncMixin",
    "WASmaxInMessageFallbackEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrJidEnum(
        e,
        "from",
        o("WASmaxInMessageFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrJidEnum,
        e,
        "participant",
        o("WASmaxInMessageFallbackEnums")
          .BROADCASTJID_CALLJID_DEVICEJID_DOMAINJID_GROUPJID_STATUSJID_USERJID,
      );
      if (!i.success) return i;
      var l = o("WASmaxInMessageFallbackDeliverEncMixin").parseDeliverEncMixin(
        e,
      );
      return o("WAResultOrError").makeResult({
        id: n.value,
        from: r.value,
        type: a.value,
        participant: i.value,
        deliverEncMixin: l.success ? l.value : null,
      });
    }
    l.parseDeliverRequest = e;
  },
  98,
);
