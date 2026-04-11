__d(
  "WAWebPaymentNotificationParser",
  [
    "WADeprecatedWapParser",
    "WALogger",
    "WAWebHandlePaymentAmountUtils",
    "WAWebJidToWid",
    "WAWebMsgKey",
    "WAWebPaymentStatusUtils",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return e && e.hasAttr("service")
        ? e.attrString("service").toUpperCase() === "NOVI"
        : !1;
    }
    var u = new (r("WADeprecatedWapParser"))(
      "paymentNotificationParser",
      function (e) {
        return (
          e.assertTag("notification"),
          e.assertAttr("type", "pay"),
          {
            stanzaId: e.attrString("id"),
            from: e.attrWapJid("from"),
            transaction: e.hasChild("transaction")
              ? c(e.child("transaction"))
              : null,
            invite: d(e),
          }
        );
      },
    );
    function c(t) {
      if (s(t))
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Payment notification from Novi not supported.",
              ])),
          ),
          null
        );
      var n = void 0,
        a = void 0,
        i = o("WAWebJidToWid").jidWithTypeToWid(t.attrJidWithType("sender")),
        l = o("WAWebJidToWid").jidWithTypeToWid(t.attrJidWithType("receiver")),
        u = o("WAWebUserPrefsMeUser").isMeAccount(i);
      t.hasAttr("group")
        ? ((n = o("WAWebJidToWid").jidWithTypeToWid(
            t.attrJidWithType("group"),
          )),
          (a = o("WAWebJidToWid").jidWithTypeToWid(
            t.attrJidWithType("sender"),
          )))
        : u
          ? (n = l)
          : (n = i);
      var c = new (r("WAWebMsgKey"))({
          id: t.attrString("message-id"),
          fromMe: u,
          remote: n,
          participant: a,
        }),
        d = o("WAWebPaymentStatusUtils").getPaymentTransactionType(
          t.attrString("transaction-type"),
          c.fromMe,
        ),
        m = o("WAWebHandlePaymentAmountUtils").getAmount1000AndCurrency(t),
        p = m.amount1000,
        _ = m.currency;
      return {
        receiver: l,
        currency: _,
        amount1000: p,
        status: o("WAWebPaymentStatusUtils").getNotificationTransactionStatus(
          d,
          t.attrString("status"),
        ),
        ts: t.attrInt("ts"),
        type: d,
        msgKey: c,
      };
    }
    function d(e) {
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
    ((l.isNoviTransaction = s),
      (l.paymentNotificationParser = u),
      (l.parseTransactionNode = c));
  },
  98,
);
