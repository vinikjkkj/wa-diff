__d(
  "WAWebBrazilPaymentReceiptAddedNoticeMsg",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBrazilPaymentStateUpdatePayload",
    "WAWebCommonMsgSubtypeTypes",
    "WAWebContactSystemMsg",
    "WAWebLidMigrationUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebViewMode.flow",
    "justknobx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = /^[A-Za-z0-9-]{1,64}$/,
      u = 64,
      c = new Set();
    function d(e, t) {
      return new (r("WAWebMsgKey"))({
        fromMe: !1,
        remote: e,
        id: "BRRECEIPTADDED" + t,
      });
    }
    function m(e) {
      var t = e.chatId,
        n = e.paymentMsgKey,
        r = e.receiptMsgId,
        a = e.t;
      return o("WAWebContactSystemMsg").genNotificationMsg(t, {
        id: d(t, r),
        type: o("WAWebMsgType").MSG_TYPE.NOTIFICATION,
        kind: o("WAWebMsgType").MsgKind.Notification,
        subtype: o("WAWebCommonMsgSubtypeTypes").MsgSubtype
          .BrazilPaymentReceiptAdded,
        templateParams: [n.toString()],
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        t: a,
      });
    }
    function p(e) {
      var t = h(e);
      if (t != null) {
        c.add(e.id.toString());
        for (var n of c) {
          if (c.size <= u) break;
          c.delete(n);
        }
      }
      return t;
    }
    function _(e) {
      return g(e).some(function (e) {
        return c.has(e);
      });
    }
    function f(e) {
      g(e).forEach(function (e) {
        return c.delete(e);
      });
    }
    function g(e) {
      var t = o("WAWebLidMigrationUtils").getAlternateMsgKey(e.id);
      return t == null ? [e.id.toString()] : [e.id.toString(), t.toString()];
    }
    function h(e) {
      var t,
        n = o(
          "WAWebBrazilPaymentStateUpdatePayload",
        ).getBrazilPaymentStateUpdate(e),
        a = n == null ? void 0 : n.receiptMsgId;
      if (n == null || a == null || e.id.fromMe || !y(a)) return null;
      var i = e.id.remote;
      return babelHelpers.extends(
        {},
        m({
          chatId: i,
          paymentMsgKey: new (r("WAWebMsgKey"))({
            fromMe: !0,
            remote: i,
            id: n.paymentMsgId,
          }),
          receiptMsgId: a,
          t: (t = e.t) != null ? t : o("WATimeUtils").unixTime(),
        }),
        { viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN },
      );
    }
    function y(e) {
      return C(e) && r("justknobx")._("6447");
    }
    function C(t) {
      return s.test(t)
        ? !0
        : (o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[br-payment-state] no receipt notice for an unexpected receipt id",
                ])),
            )
            .sendLogs("br-payment-state-receipt-notice-bad-id"),
          !1);
    }
    ((l.getReceiptAddedNoticeKey = d),
      (l.genReceiptAddedNotice = m),
      (l.awaitHistorySyncReceiptAddedNotice = p),
      (l.isAwaitingHistorySyncReceiptNotice = _),
      (l.stopAwaitingHistorySyncReceiptNotice = f),
      (l.isAnnouncedReceipt = y));
  },
  98,
);
