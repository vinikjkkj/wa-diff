__d(
  "WAWebOrderStatus",
  [
    "$InternalEnum",
    "WAWebBizGatingUtils",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatusButton",
  ],
  function (t, n, r, o, a, i, l) {
    var e = -1e3,
      s = [
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS,
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO,
      ],
      u = n("$InternalEnum")({
        Pending: "pending",
        Processing: "processing",
        PartiallyShipped: "partially_shipped",
        Shipped: "shipped",
        Complete: "completed",
        Canceled: "canceled",
        PaymentRequested: "payment_requested",
        PreparingToShip: "preparing_to_ship",
        Delivered: "delivered",
        Confirmed: "confirmed",
        Delayed: "delayed",
        OutForDelivery: "out_for_delivery",
        Failed: "failed",
        Refunded: "refunded",
      });
    function c(e) {
      if (e == null) return null;
      try {
        var t = JSON.parse(e),
          n = t.order,
          r = t.payment,
          a = t.reference_id,
          i = u.cast(n == null ? void 0 : n.status),
          l = null;
        return (
          (l = o("WAWebOrderPaymentStatus").OrderPaymentStatus.cast(
            r == null ? void 0 : r.status,
          )),
          a == null || (i == null && l == null)
            ? null
            : { refId: a, status: i, paymentStatus: l }
        );
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      var t;
      if (!o("WAWebE2EProtoUtils").isOrderNativeFlow(e.nativeFlowName))
        return null;
      if (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        (t = e.interactivePayload) != null &&
        t.buttons
      ) {
        var n = e.interactivePayload.buttons[0].buttonParamsJson;
        return c(n);
      } else if (e.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
        var a,
          i = ((a = e.nativeFlowButtons) != null ? a : [])[0].nativeFlowInfo;
        return c(i == null ? void 0 : i.paramsJson);
      }
    }
    function m(e) {
      return o("WAWebOrderStatusButton").getOrderStatusButton(e) != null;
    }
    function p(e) {
      var t = e.order,
        n = t.status,
        r = t.tracking;
      return (
        r != null && n !== u.Canceled && n !== u.Refunded && n !== u.Failed
      );
    }
    function _(t, n) {
      var r,
        a = t.msgs.getModelsArray().slice(e),
        i =
          (r = a.findLast(function (e) {
            var t;
            return (
              e.nativeFlowName != null &&
              s.includes(e.nativeFlowName) &&
              ((t = o("WAWebOrderDetails").getOrderInfo(e)) == null
                ? void 0
                : t.referenceId) === n
            );
          })) == null
            ? void 0
            : r.safe();
      return i;
    }
    var f = function (n, o) {
        var t,
          a = n.msgs.getModelsArray().slice(e),
          i =
            (t = a.findLast(function (e) {
              var t;
              return (
                (e == null ? void 0 : e.nativeFlowName) ===
                  r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS &&
                ((t = d(e)) == null ? void 0 : t.refId) === o
              );
            })) == null
              ? void 0
              : t.safe();
        return i;
      },
      g = function (n, a) {
        var t,
          i = n.msgs.getModelsArray().slice(e),
          l =
            (t = i.findLast(function (e) {
              var t, n;
              return (
                ((e == null ? void 0 : e.nativeFlowName) ===
                  r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS &&
                  ((t = d(e)) == null ? void 0 : t.refId) === a) ||
                ((e == null ? void 0 : e.nativeFlowName) ===
                  r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS &&
                  ((n = o(
                    "WAWebOrderPaymentStatus",
                  ).getOrderPaymentStatusInfoFromNativeFlow(e)) == null
                    ? void 0
                    : n.refId) === a)
              );
            })) == null
              ? void 0
              : t.safe();
        return l;
      },
      h = function (t) {
        return t == null
          ? null
          : t === u.Complete
            ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured
            : t === u.Canceled || t === u.Failed
              ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed
              : t === u.Pending ||
                  t === u.Processing ||
                  t === u.PartiallyShipped ||
                  t === u.Shipped ||
                  t === u.PaymentRequested ||
                  t === u.PreparingToShip ||
                  t === u.Delivered ||
                  t === u.Confirmed ||
                  t === u.Delayed ||
                  t === u.OutForDelivery ||
                  t === u.Refunded
                ? o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        t,
                    );
                  })();
      };
    function y(e) {
      return e == null ? !1 : e.items.length === 0;
    }
    function C(e, t) {
      return !e.contact.isEnterprise && y(t);
    }
    function b(e, t) {
      return !e.contact.isEnterprise && !y(t);
    }
    function v() {
      return o("WAWebBizGatingUtils").isOrderStatusM1Enabled()
        ? u.PaymentRequested
        : u.Pending;
    }
    function S(e, t) {
      var n,
        r = f(e, t),
        o = r != null ? d(r) : null;
      return (n = o == null ? void 0 : o.status) != null ? n : u.Pending;
    }
    function R(e, t) {
      var n = g(e, t),
        a = null;
      if (
        n &&
        (n == null ? void 0 : n.nativeFlowName) ===
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var i = n != null ? d(n) : null;
        ((a = i == null ? void 0 : i.paymentStatus),
          a == null && (a = h(i == null ? void 0 : i.status)));
      } else if (
        n &&
        (n == null ? void 0 : n.nativeFlowName) ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
      ) {
        var l;
        a =
          (l = o(
            "WAWebOrderPaymentStatus",
          ).getOrderPaymentStatusInfoFromNativeFlow(n)) == null
            ? void 0
            : l.paymentStatus;
      }
      return a;
    }
    var L = function (t, n) {
      var e = t.msgs.reduce(
          function (e, t) {
            var r,
              a = o("WAWebOrderStatusButton").getOrderStatusButton(t),
              i = t.safe();
            return a == null ||
              i.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
              a.reference_id !== n.reference_id
              ? e
              : { first: (r = e.first) != null ? r : i, last: i };
          },
          { first: null, last: null },
        ),
        r = e.first,
        a = e.last,
        i = r && o("WAWebOrderStatusButton").getOrderStatusButton(r),
        l = a && o("WAWebOrderStatusButton").getOrderStatusButton(a),
        s = (i != null ? i : n).order.items;
      return {
        drawerButton: babelHelpers.extends({}, l != null ? l : n, {
          order: babelHelpers.extends({}, (l != null ? l : n).order, {
            items: s,
          }),
        }),
        messageBubbleButton: babelHelpers.extends({}, n, {
          order: babelHelpers.extends({}, n.order, { items: s }),
        }),
        firstMessage: r,
        lastMessage: a,
      };
    };
    ((l.OrderStatus = u),
      (l.paramsJsonToOrderStatusInfo = c),
      (l.getOrderStatusInfo = d),
      (l.hasOrderStatusButton = m),
      (l.shouldShowTrackingInfo = p),
      (l.findOrderDetailsMessage = _),
      (l.isSimplifiedOrder = y),
      (l.isPaymentRequest = C),
      (l.isCharge = b),
      (l.getDefaultOrderStatus = v),
      (l.findOrderStatus = S),
      (l.findOrderPaymentStatus = R),
      (l.getMergedOrderStatus = L));
  },
  98,
);
