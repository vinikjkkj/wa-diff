__d(
  "WASmaxInBizCtwaAdAccountNonceNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInBizCtwaAdAccountServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "wa_ad_account_nonce",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        e,
        "to",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "business",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").contentString(n.value);
      if (!l.success) return l;
      var s = o(
        "WASmaxInBizCtwaAdAccountServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return s.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                to: a.value,
                type: i.value,
                waAdAccountNonceElementValue: l.value,
              },
              s.value,
            ),
          )
        : s;
    }
    l.parseNonceNotificationRequest = e;
  },
  98,
);
