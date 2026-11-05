__d(
  "WASmaxMdPasskeyPrologueRequestNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInMdPasskeyRequestOptionsMixin",
    "WASmaxInMdServerNotificationMixin",
    "WASmaxJsx",
    "WASmaxOutMdNotificationClientAckMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = c(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "PasskeyPrologueRequestNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makePasskeyPrologueRequestNotificationResponseAck: function () {
          return d(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "passkey_request_options");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMdPasskeyRequestOptionsMixin",
      ).parsePasskeyRequestOptionsMixin(e);
      return (n.success, n);
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
      if (!t.success) return t;
      var n = m(e);
      return (n.success, n);
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "passkey_request_options",
        s,
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(
        e,
        "dbsc_registration",
        u,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "passkey_prologue_request",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: a.value, from: i.value }, l.value, {
              passkeyRequestOptions: n.value,
              dbscRegistration: r.value,
            }),
          )
        : l;
    }
    function d(e) {
      var t = o(
        "WASmaxOutMdNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    ((l.receivePasskeyPrologueRequestNotificationRPC = e),
      (l.parsePasskeyPrologueRequestNotificationRequestPasskeyRequestOptions =
        s),
      (l.parsePasskeyPrologueRequestNotificationRequestDbscRegistration = u),
      (l.parsePasskeyPrologueRequestNotificationRequest = c),
      (l.makePasskeyPrologueRequestNotificationResponseAck = d),
      (l.parseDbscRegistrationMixin = m));
  },
  98,
);
