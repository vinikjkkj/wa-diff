__d(
  "WASmaxInMdPasskeyPrologueRequestNotificationRequest",
  [
    "WAResultOrError",
    "WASmaxInMdDbscRegistrationMixin",
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
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
      if (!t.success) return t;
      var n = o("WASmaxInMdDbscRegistrationMixin").parseDbscRegistrationMixin(
        e,
      );
      return (n.success, n);
    }
    function u(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "notification");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "passkey_request_options",
        e,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(
        t,
        "dbsc_registration",
        s,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "type",
        "passkey_prologue_request",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!l.success) return l;
      var u = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(t);
      return u.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: i.value, from: l.value }, u.value, {
              passkeyRequestOptions: r.value,
              dbscRegistration: a.value,
            }),
          )
        : u;
    }
    ((l.parsePasskeyPrologueRequestNotificationRequestPasskeyRequestOptions =
      e),
      (l.parsePasskeyPrologueRequestNotificationRequestDbscRegistration = s),
      (l.parsePasskeyPrologueRequestNotificationRequest = u));
  },
  98,
);
