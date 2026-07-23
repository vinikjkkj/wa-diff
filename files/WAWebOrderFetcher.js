__d(
  "WAWebOrderFetcher",
  [
    "$InternalEnum",
    "Promise",
    "WAWebABProps",
    "WAWebChatLoadMessages",
    "WAWebClock",
    "WAWebE2EProtoUtils",
    "WAWebInboxOrderInfoBuilder",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebNoop",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
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
    function f(e) {
      var t = e.contactAndOrderInfoMap,
        n = e.index,
        r = e.orderReferenceIds,
        a = o("WAWebClock").Clock.relativeDateStr(t[r[n]].timestamp).toString(),
        i =
          n > 0
            ? o("WAWebClock")
                .Clock.relativeDateStr(t[r[n - 1]].timestamp)
                .toString()
            : "";
      return a === i ? "" : a;
    }
    function g(e, t) {
      var n = e.contact,
        r = e.msgs;
      return h({ contact: n, msgs: r.toArray(), orderViewType: t });
    }
    function h(e) {
      var t = e.contact,
        n = e.msgs,
        a = e.orderViewType;
      return n.reduce(
        function (e, n) {
          var i,
            l,
            u,
            c =
              (i = n.interactivePayload) != null &&
              i.buttons &&
              (l = n.interactivePayload) != null &&
              l.buttons.length
                ? (u = n.interactivePayload) == null
                  ? void 0
                  : u.buttons
                : [{}],
            d = c[0],
            m = d.buttonParamsJson,
            p = d.name,
            _ = C(n);
          return (
            _ != null
              ? b(e, n, t, _, m)
              : (a === s.PAYMENTS_HOME ||
                  o("WAWebUserPrefsMeUser").isMeAccount(n.from)) &&
                (n.nativeFlowName ===
                r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
                  ? y(e, n, t, p, m)
                  : n.nativeFlowName ===
                      r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
                    ? S(e, m)
                    : o("WAWebE2EProtoUtils").isOrderNativeFlow(
                        n.nativeFlowName,
                      ) && v(e, m)),
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
          interactiveMsg: R(t),
        });
    }
    function C(e) {
      var t;
      if (
        !o("WAWebABProps").getABPropConfigValue(
          "utility_order_view_mbs_enabled",
        ) ||
        e.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      )
        return null;
      var n = o("WAWebOrderStatusButton").getOrderStatusButton(e);
      return (n == null || (t = n.order) == null
        ? void 0
        : t.order_creator_surface) === "biz_inbox"
        ? n
        : null;
    }
    function b(e, t, n, r, a) {
      var i = o("WAWebInboxOrderInfoBuilder").orderStatusButtonToOrderInfo(r);
      i != null &&
        (e.contactsAndOrdersInfo.push({
          contact: n,
          orderInfo: i,
          timestamp: t.t,
          interactiveMsg: R(t),
          isInboxOrder: !0,
        }),
        v(e, a));
    }
    function v(e, t) {
      var n = o("WAWebOrderStatus").paramsJsonToOrderStatusInfo(t);
      n && e.ordersStatusInfo.push(n);
    }
    function S(e, t) {
      if (t != null) {
        var n = o("WAWebOrderPaymentStatus").paramsJsonToOrderPaymentInfo(t),
          r = o("WAWebOrderPaymentStatus").paramsJsonToOrderStatus(t);
        if (!(n == null || r == null)) {
          var a = { refId: n.refId, paymentStatus: n.paymentStatus, status: r };
          e.ordersStatusInfo.push(a);
        }
      }
    }
    function R(e) {
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
