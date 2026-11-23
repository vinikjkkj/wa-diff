__d(
  "WASmaxMultiwaydMultiwayNotificationRPC",
  [
    "WAResultOrError",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("MultiwayNotification", {
            Request: t,
          }),
        );
      return {
        parsedRequest: t.value,
        makeMultiwayNotificationResponseAck: function () {
          return c(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "notification");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "multiway");
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
        "fb:multiway",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        n.value,
        "transaction_id",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrInt(n.value, "binary_version");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(n.value, 1, void 0);
      if (!s.success) return s;
      var c = u(e);
      return c.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: r.value,
                type: a.value,
                multiwayTransactionId: i.value,
                multiwayBinaryVersion: l.value,
                multiwayElementValue: s.value,
              },
              c.value,
            ),
          )
        : c;
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
    function c(e) {
      var t = m(o("WASmaxJsx").smax("ack", null), e);
      return t;
    }
    function d(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseJid").attrDomainJid,
        e,
        ["from"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrString,
        e,
        ["type"],
      );
      if (!r.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(r.error);
      var a = o("WASmaxJsx").smax("ack", {
        id: o("WAWap").STANZA_ID(t.value),
        to: o("WAWap").DOMAIN_JID(n.value),
        class: "notification",
        type: o("WAWap").CUSTOM_STRING(r.value),
      });
      return a;
    }
    function m(e, t) {
      var n = d(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveMultiwayNotificationRPC = e),
      (l.parseMultiwayNotificationRequest = s),
      (l.makeMultiwayNotificationResponseAck = c));
  },
  98,
);
