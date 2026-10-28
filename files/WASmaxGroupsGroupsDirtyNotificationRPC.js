__d(
  "WASmaxGroupsGroupsDirtyNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxInGroupsServerNotificationMixin",
    "WASmaxJsx",
    "WASmaxOutGroupsNotificationClientAckMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = u(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing(
            "GroupsDirtyNotification",
            { Request: t },
          ),
        );
      return {
        parsedRequest: t.value,
        makeGroupsDirtyNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "group");
      if (!t.success) return t;
      var n = o("WASmaxParseJid").attrGroupJid(e, "jid");
      return n.success ? o("WAResultOrError").makeResult({ jid: n.value }) : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "groups_dirty");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "w:gp2",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "g.us",
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInGroupsServerNotificationMixin",
      ).parseServerNotificationMixin(e);
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").mapChildrenWithTag(
        n.value,
        "group",
        1,
        1e4,
        s,
      );
      return l.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({ type: r.value, from: a.value }, i.value, {
              groupsDirtyGroup: l.value,
            }),
          )
        : l;
    }
    function c(e) {
      var t = o(
        "WASmaxOutGroupsNotificationClientAckMixin",
      ).mergeNotificationClientAckMixin(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    ((l.receiveGroupsDirtyNotificationRPC = e),
      (l.parseGroupsDirtyNotificationRequestGroupsDirtyGroup = s),
      (l.parseGroupsDirtyNotificationRequest = u),
      (l.makeGroupsDirtyNotificationResponseAck = c));
  },
  98,
);
