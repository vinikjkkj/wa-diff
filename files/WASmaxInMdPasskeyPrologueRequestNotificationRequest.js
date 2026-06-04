__d(
  "WASmaxInMdPasskeyPrologueRequestNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "passkey_request_options");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMdPasskeyRequestOptionsMixin",
      ).parsePasskeyRequestOptionsMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "passkey_request_options",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "passkey_prologue_request",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(t);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: a.value, from: i.value }, l.value, {
              passkeyRequestOptions: r.value,
            }),
          )
        : l;
    }
    ((l.parsePasskeyPrologueRequestNotificationRequestPasskeyRequestOptions =
      e),
      (l.parsePasskeyPrologueRequestNotificationRequest = s));
  },
  98,
);
