__d(
  "WASmaxMdSetPrimaryEphemeralIdentityNotificationRPC",
  [
    "WAResultOrError",
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
            "SetPrimaryEphemeralIdentityNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeSetPrimaryEphemeralIdentityNotificationResponseAck: function () {
          return u(e);
        },
      };
    }
    function s(e) {
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
    function u(e) {
      var t = o(
        "WASmaxOutMdNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    ((l.receiveSetPrimaryEphemeralIdentityNotificationRPC = e),
      (l.parseSetPrimaryEphemeralIdentityNotificationRequest = s),
      (l.makeSetPrimaryEphemeralIdentityNotificationResponseAck = u));
  },
  98,
);
