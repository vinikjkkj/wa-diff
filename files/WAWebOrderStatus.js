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
      }),
      c = function (t) {
        if (t == null) return null;
        try {
          var e = JSON.parse(t),
            n = e.order,
            r = e.payment,
            a = e.reference_id,
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
      },
      d = function (t) {
        var e;
        if (!o("WAWebE2EProtoUtils").isOrderNativeFlow(t.nativeFlowName))
          return null;
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          t.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          (e = t.interactivePayload) != null &&
          e.buttons
        ) {
          var n = t.interactivePayload.buttons[0].buttonParamsJson;
          return c(n);
        } else if (t.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
          var a,
            i = ((a = t.nativeFlowButtons) != null ? a : [])[0].nativeFlowInfo;
          return c(i == null ? void 0 : i.paramsJson);
        }
      },
      m = function (t) {
        return o("WAWebOrderStatusButton").getOrderStatusButton(t) != null;
      },
      p = function (t) {
        var e = t.order,
          n = e.status,
          r = e.tracking;
        return (
          r != null && n !== u.Canceled && n !== u.Refunded && n !== u.Failed
        );
      },
      _ = function (n, r) {
        var t,
          a = n.msgs.getModelsArray().slice(e),
          i =
            (t = a.findLast(function (e) {
              var t;
              return (
                e.nativeFlowName != null &&
                s.includes(e.nativeFlowName) &&
                ((t = o("WAWebOrderDetails").getOrderInfo(e)) == null
                  ? void 0
                  : t.referenceId) === r
              );
            })) == null
              ? void 0
              : t.safe();
        return i;
      },
      f = function (n, o) {
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
      },
      y = function (t) {
        return t == null ? !1 : t.items.length === 0;
      },
      C = function (t, n) {
        return !t.contact.isEnterprise && y(n);
      },
      b = function (t, n) {
        return !t.contact.isEnterprise && !y(n);
      },
      v = function () {
        return o("WAWebBizGatingUtils").isOrderStatusM1Enabled()
          ? u.PaymentRequested
          : u.Pending;
      },
      S = function (t, n) {
        var e,
          r = f(t, n),
          o = r != null ? d(r) : null;
        return (e = o == null ? void 0 : o.status) != null ? e : u.Pending;
      },
      R = function (t, n) {
        var e = g(t, n),
          a = null;
        if (
          e &&
          (e == null ? void 0 : e.nativeFlowName) ===
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
        ) {
          var i = e != null ? d(e) : null;
          ((a = i == null ? void 0 : i.paymentStatus),
            a == null && (a = h(i == null ? void 0 : i.status)));
        } else if (
          e &&
          (e == null ? void 0 : e.nativeFlowName) ===
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_STATUS
        ) {
          var l;
          a =
            (l = o(
              "WAWebOrderPaymentStatus",
            ).getOrderPaymentStatusInfoFromNativeFlow(e)) == null
              ? void 0
              : l.paymentStatus;
        }
        return a;
      },
      L = function (t, n) {
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
