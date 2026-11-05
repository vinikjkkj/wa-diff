__d(
  "WASmaxMdRefreshCodeNotifyCompanionRPC",
  [
    "WAResultOrError",
    "WASmaxInMdEnums",
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
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "RefreshCodeNotifyCompanion",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeRefreshCodeNotifyCompanionResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(
        e,
        "link_code_companion_reg",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "link_code_pairing_ref",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "link_code_companion_reg",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        n.value,
        "stage",
        "refresh_code",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        n.value,
        "force_manual_refresh",
        o("WASmaxInMdEnums").ENUM_FALSE_TRUE,
      );
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentBytes(r.value);
      if (!u.success) return u;
      var c = o(
        "WASmaxInMdServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                type: a.value,
                from: i.value,
                linkCodeCompanionRegStage: l.value,
                linkCodeCompanionRegForceManualRefresh: s.value,
                linkCodeCompanionRegLinkCodePairingRefElementValue: u.value,
              },
              c.value,
            ),
          )
        : c;
    }
    function u(e) {
      var t = o(
        "WASmaxOutMdNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    ((l.receiveRefreshCodeNotifyCompanionRPC = e),
      (l.parseRefreshCodeNotifyCompanionRequest = s),
      (l.makeRefreshCodeNotifyCompanionResponseAck = u));
  },
  98,
);
