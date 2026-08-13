__d(
  "WAWebConsumerTransactionsFromMessages",
  [
    "Promise",
    "WAWebChatLoadMessages",
    "WAWebFrontendContactGetters",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1e3,
      u = 200,
      c = 30 * 1e3,
      d = { ordersByRef: {}, statusByRef: {} };
    function m(e, t) {
      var n = [],
        r = [];
      for (var a of t) {
        var i = p(e, a);
        i != null && n.push(i);
        var l = o(
          "WAWebOrderPaymentStatus",
        ).getOrderPaymentStatusInfoFromNativeFlow(a);
        l != null &&
          l.paymentStatus != null &&
          r.push({ refId: l.refId, paymentStatus: l.paymentStatus });
      }
      return { orders: n, statuses: r };
    }
    function p(e, t) {
      var n,
        a,
        i = t.nativeFlowName;
      if (
        i !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
        i !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      )
        return null;
      var l = _(t);
      if (l == null) return null;
      var u = o("WAWebOrderDetails").getOrderInfo(l),
        c = u == null ? void 0 : u.totalAmount,
        d = e.id.isGroup();
      return {
        refId:
          (n = u == null ? void 0 : u.referenceId) != null
            ? n
            : t.id.toString(),
        amountValue: c != null && c > 0 ? c : null,
        currency: (a = u == null ? void 0 : u.currency) != null ? a : "BRL",
        fromMe: t.id.fromMe,
        counterpartyName: d
          ? e.title()
          : o("WAWebFrontendContactGetters").getDisplayName(e.contact),
        counterpartyId: d ? e.id : e.contact.id,
        timestampMs: t.t * s,
      };
    }
    function _(e) {
      var t = e.safe();
      return t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? t : null;
    }
    function f(e) {
      return m(e, e.msgs.toArray());
    }
    function g(t) {
      return {
        fetcher: (e || (e = n("Promise"))).resolve(f(t)),
        unsubscribe: r("WAWebNoop"),
      };
    }
    function h(t) {
      var a,
        i,
        l = r("WAWebNoop"),
        s = function () {
          (l(), self.clearInterval(a), self.clearTimeout(i));
        },
        d = new (e || (e = n("Promise")))(function (e) {
          ((a = self.setInterval(function () {
            o("WAWebChatLoadMessages")
              .loadEarlierMsgs({ chat: t, msgCollection: t.msgs })
              .then(r("WAWebNoop"), r("WAWebNoop"));
          }, u)),
            (i = self.setTimeout(function () {
              (e(f(t)), s());
            }, c)),
            (l = t.msgs.onMsgLoadStateChange(function () {
              t.msgs.msgLoadState.noEarlierMsgs && (e(f(t)), s());
            })));
        });
      return { fetcher: d, unsubscribe: s };
    }
    function y(e, t) {
      if (t.orders.length === 0 && t.statuses.length === 0) return e;
      var n = babelHelpers.extends({}, e.ordersByRef);
      for (var r of t.orders) n[r.refId] = r;
      var o = babelHelpers.extends({}, e.statusByRef);
      for (var a of t.statuses) o[a.refId] = a.paymentStatus;
      return { ordersByRef: n, statusByRef: o };
    }
    function C(e, t) {
      if (t.orders.length === 0 && t.statuses.length === 0) return e;
      var n = babelHelpers.extends({}, e.ordersByRef),
        r = babelHelpers.extends({}, e.statusByRef);
      for (var o of t.orders) (delete n[o.refId], delete r[o.refId]);
      for (var a of t.statuses) delete r[a.refId];
      return { ordersByRef: n, statusByRef: r };
    }
    function b(e) {
      var t = e.ordersByRef,
        n = e.statusByRef,
        r = Object.keys(t).map(function (e) {
          var r = t[e],
            o = r.amountValue,
            a = r.counterpartyId,
            i = r.counterpartyName,
            l = r.currency,
            s = r.fromMe,
            u = r.timestampMs;
          return {
            id: e,
            counterpartyId: a,
            counterpartyName: i,
            amountValue: o,
            currency: l,
            timestampMs: u,
            status: v(n[e]),
            direction: s ? "incoming" : "outgoing",
          };
        });
      return (
        r.sort(function (e, t) {
          return t.timestampMs - e.timestampMs;
        }),
        r
      );
    }
    function v(e) {
      return e === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
        ? "success"
        : e === o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed
          ? "failure"
          : "requested";
    }
    ((l.EMPTY_CONSUMER_ORDER_STATE = d),
      (l.getConsumerOrderInfoFromMsgs = m),
      (l.getCachedConsumerOrderInfo = g),
      (l.getNotCachedConsumerOrderInfo = h),
      (l.mergeConsumerOrderInfo = y),
      (l.removeConsumerOrderInfo = C),
      (l.mapConsumerOrdersToTransactions = b));
  },
  98,
);
