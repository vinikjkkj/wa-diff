__d(
  "WASmaxInMessageDeliverGroupDeliverSendPayNodeMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup",
    "WASmaxInMessageDeliverBasePayNodeMixin",
    "WASmaxInMessageDeliverLegacyAmountMixin",
    "WASmaxInMessageDeliverMoneyMixin",
    "WASmaxInMessageDeliverTransactionSyncStatusMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "amount");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverMoneyMixin").parseMoneyMixin(e);
      return (n.success, n);
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "pay");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optionalChildWithTag(t, "amount", e);
      if (!r.success) return r;
      var a = o("WASmaxParseJid").attrUserJid(t, "receiver");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrUserJid,
        t,
        "sender",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "transaction-id",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        t,
        "id",
      );
      if (!s.success) return s;
      var u = o("WASmaxParseJid").attrGroupJid(t, "group");
      if (!u.success) return u;
      var c = o("WASmaxInMessageDeliverBasePayNodeMixin").parseBasePayNodeMixin(
        t,
      );
      if (!c.success) return c;
      var d = o(
          "WASmaxInMessageDeliverTransactionSyncStatusMixin",
        ).parseTransactionSyncStatusMixin(t),
        m = o("WASmaxInMessageDeliverLegacyAmountMixin").parseLegacyAmountMixin(
          t,
        ),
        p = o(
          "WASmaxInMessageDeliverBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup",
        ).parseBRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup(t);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends(
          {
            receiver: a.value,
            sender: i.value,
            transactionId: l.value,
            id: s.value,
            group: u.value,
          },
          c.value,
          {
            transactionSyncStatusMixin: d.success ? d.value : null,
            legacyAmountMixin: m.success ? m.value : null,
            bRMessageDeliverSendOrUPIMessageDeliverSendPayNodeMixinGroup:
              p.success ? p.value : null,
            amount: r.value,
          },
        ),
      );
    }
    ((l.parseGroupDeliverSendPayNodeAmount = e),
      (l.parseGroupDeliverSendPayNodeMixin = s));
  },
  98,
);
