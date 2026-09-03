__d(
  "WAWebPaymentNotificationParser",
  [
    "WADeprecatedWapParser",
    "WAWebHandlePaymentAmountUtils",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebPaymentStatusUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = new (r("WADeprecatedWapParser"))(
      "paymentNotificationParser",
      function (e) {
        (e.assertTag("notification"), e.assertAttr("type", "pay"));
        var t = e.hasChild("transaction") ? e.child("transaction") : null;
        return {
          stanzaId: e.attrString("id"),
          from: e.attrWapJid("from"),
          transaction: t ? s(t) : null,
          dehydratedTransaction:
            t != null &&
            o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(t),
          invite: u(e),
        };
      },
    );
    function s(e) {
      if (o("WAWebHandlePaymentAmountUtils").isDehydratedPaymentNode(e))
        return null;
      var t = void 0,
        n = void 0,
        a = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("sender")),
        i = o("WAWebJidToWid").jidWithTypeToWid(e.attrJidWithType("receiver")),
        l = o("WAWebUserPrefsMeUser").isMeAccount(a);
      e.hasAttr("group")
        ? ((t = o("WAWebJidToWid").jidWithTypeToWid(
            e.attrJidWithType("group"),
          )),
          (n = o("WAWebJidToWid").jidWithTypeToWid(
            e.attrJidWithType("sender"),
          )))
        : l
          ? (t = i)
          : (t = a);
      var s = new (r("WAWebMsgKey"))({
          id: e.attrString("message-id"),
          fromMe: l,
          remote: t,
          participant: n,
        }),
        u = o("WAWebPaymentStatusUtils").getPaymentTransactionType(
          e.attrString("transaction-type"),
          s.fromMe,
        ),
        c = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(e),
        d = c.amount1000,
        m = c.currency;
      return {
        receiver: i,
        currency: m,
        amount1000: d,
        status: o("WAWebPaymentStatusUtils").getNotificationTransactionStatus(
          u,
          e.attrString("status"),
        ),
        ts: e.attrInt("ts"),
        type: u,
        msgKey: s,
      };
    }
    function u(e) {
      if (!e.hasChild("invite")) return null;
      var t = e.child("invite");
      return {
        type: t.maybeAttrString("type"),
        service: t.maybeAttrString("service"),
        inviteUsed: t.hasAttr("invite-used")
          ? t.attrString("invite-used") === "1"
          : null,
        from: o("WAWebJidToWid").chatJidToChatWid(e.attrChatJid("from")),
        timestamp: e.attrTime("t"),
      };
    }
    ((l.paymentNotificationParser = e), (l.parseTransactionNode = s));
  },
  98,
);
