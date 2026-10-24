__d(
  "WASmaxBizSettingsSyncPrivacySettingRPC",
  [
    "WAResultOrError",
    "WASmaxInBizSettingsSmbDataSharingSettingMixin",
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
          o("WASmaxRpcUtils").errorMessageRpcParsing("SyncPrivacySetting", {
            Request: t,
          }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "privacy");
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
        "business",
      );
      if (!a.success) return a;
      var i = o(
          "WASmaxInBizSettingsSmbDataSharingSettingMixin",
        ).parseSmbDataSharingSettingMixin(n.value),
        l = u(e);
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                privacySmbDataSharingSettingMixin: i.success ? i.value : null,
              },
              l.value,
            ),
          )
        : l;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "offline",
        0,
        1024,
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            t: n.value,
            id: r.value,
            offline: a.value,
          })
        : a;
    }
    ((l.receiveSyncPrivacySettingRPC = e),
      (l.parseSyncPrivacySettingRequest = s),
      (l.parseServerNotificationMixin = u));
  },
  98,
);
