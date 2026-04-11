__d(
  "WAWebOrderFetcher",
  [
    "$InternalEnum",
    "Promise",
    "WAWebChatLoadMessages",
    "WAWebClock",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebUserPrefsMeUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = n("$InternalEnum")({
        CHARGES_HOME: "charges_home",
        PAYMENTS_HOME: "payments_home",
      });
    function u(t, o) {
      return {
        fetcher: (e || (e = n("Promise"))).resolve(g(t, o)),
        unsubscribe: r("WAWebNoop"),
      };
    }
    function c(t, r) {
      var a = 200,
        i,
        l,
        s = function () {
          (l(), self.clearInterval(i));
        },
        u = new (e || (e = n("Promise")))(function (e) {
          ((i = self.setInterval(function () {
            o("WAWebChatLoadMessages").loadEarlierMsgs({
              chat: t,
              msgCollection: t.msgs,
            });
          }, a)),
            (l = t.msgs.onMsgLoadStateChange(function () {
              t.msgs.msgLoadState.noEarlierMsgs && (e(g(t, r)), s());
            })));
        });
      return { fetcher: u, unsubscribe: s };
    }
    function d(e, t) {
      var n = babelHelpers.extends({}, e);
      return (
        t.forEach(function (e) {
          delete n[e.orderInfo.referenceId];
        }),
        n
      );
    }
    function m(e, t) {
      return babelHelpers.extends(
        {},
        e,
        t.reduce(function (e, t) {
          return ((e[t.orderInfo.referenceId] = t), e);
        }, {}),
      );
    }
    function p(e, t, n) {
      var r = e.ordersStatusInfo,
        o = t.ordersStatusInfo,
        a = o[0].refId,
        i = n.orderStatusInfoMap;
      return (delete i[a], _(i, r));
    }
    function _(e, t) {
      return babelHelpers.extends(
        {},
        e,
        t.reduce(function (e, t) {
          return ((e[t.refId] = t), e);
        }, {}),
      );
    }
    var f = function (t, n, r) {
      var e = o("WAWebClock")
          .Clock.relativeDateStr(t[n[r]].timestamp)
          .toString(),
        a =
          r > 0
            ? o("WAWebClock")
                .Clock.relativeDateStr(t[n[r - 1]].timestamp)
                .toString()
            : "";
      return e === a ? "" : e;
    };
    function g(e, t) {
      var n = e.contact,
        r = e.msgs;
      return h(r.toArray(), n, t);
    }
    function h(e, t, n) {
      return e.reduce(
        function (e, a) {
          var i,
            l,
            u,
            c =
              (i = a.interactivePayload) != null &&
              i.buttons &&
              (l = a.interactivePayload) != null &&
              l.buttons.length
                ? (u = a.interactivePayload) == null
                  ? void 0
                  : u.buttons
                : [{}],
            d = c[0],
            m = d.buttonParamsJson,
            p = d.name;
          return (
            (n === s.PAYMENTS_HOME ||
              a.from.equals(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
              )) &&
              (a.nativeFlowName ===
              r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
                ? y(e, a, t, p, m)
                : a.nativeFlowName ===
                    r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
                  ? b(e, m)
                  : o("WAWebE2EProtoUtils").isOrderNativeFlow(
                      a.nativeFlowName,
                    ) && C(e, m)),
            e
          );
        },
        { contactsAndOrdersInfo: [], ordersStatusInfo: [] },
      );
    }
    function y(e, t, n, r, a) {
      var i = t.t,
        l = o("WAWebOrderDetails").paramsJsonToOrderInfo(r, a);
      l &&
        e.contactsAndOrdersInfo.push({
          contact: n,
          orderInfo: l,
          timestamp: i,
          interactiveMsg: v(t),
        });
    }
    function C(e, t) {
      var n = o("WAWebOrderStatus").paramsJsonToOrderStatusInfo(t);
      n && e.ordersStatusInfo.push(n);
    }
    function b(e, t) {
      if (t != null) {
        var n = o("WAWebOrderPaymentStatus").paramsJsonToOrderPaymentInfo(t),
          r = o("WAWebOrderPaymentStatus").paramsJsonToOrderStatus(t);
        if (!(n == null || r == null)) {
          var a = { refId: n.refId, paymentStatus: n.paymentStatus, status: r };
          e.ordersStatusInfo.push(a);
        }
      }
    }
    function v(e) {
      var t = e.safe();
      return t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE ? t : null;
    }
    ((l.OrderManagementViewType = s),
      (l.getCachedOrdersInfoFromChat = u),
      (l.getNotCachedOrdersInfoFromChat = c),
      (l.removeContactAndOrdersInfoFromMap = d),
      (l.getMergedContactAndOrderInfoMap = m),
      (l.removeOrderStatusInfoFromMap = p),
      (l.getMergedOrderStatusInfoMap = _),
      (l.getOrderDisplayDate = f),
      (l.getOrdersInfoFromMsgs = h));
  },
  98,
);
