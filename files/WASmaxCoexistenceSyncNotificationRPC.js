__d(
  "WASmaxCoexistenceSyncNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInCoexistenceServerNotificationMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SyncNotification", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "sync");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "hosted",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInCoexistenceServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return i.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ from: r.value, type: a.value }, i.value),
          )
        : i;
    }
    ((l.receiveSyncNotificationRPC = e), (l.parseSyncNotificationRequest = s));
  },
  98,
);
