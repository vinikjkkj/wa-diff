__d(
  "WASmaxInMdSetPrimaryEphemeralIdentityNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "primary_ephemeral_identity",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "crsc_continuation",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytes(n.value);
      if (!i.success) return i;
      var l = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: r.value,
                from: a.value,
                primaryEphemeralIdentityElementValue: i.value,
              },
              l.value,
            ),
          )
        : l;
    }
    l.parseSetPrimaryEphemeralIdentityNotificationRequest = e;
  },
  98,
);
