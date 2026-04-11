__d(
  "WAWebBizFormatInteractiveMsg",
  [
    "fbt",
    "WAWebBizOrderDetailsParams",
    "WAWebBrazilPixKeyFormattingUtils",
    "WAWebCurrencyUtils",
    "WAWebGetInteractiveFooterText",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebOrderDetails",
    "WAWebOrderPaymentStatus",
    "WAWebOrderStatus",
    "WAWebOrderStatusButton",
    "WAWebUserPrefsTypes",
  ],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t) {
      var n,
        o,
        a = t === void 0 ? {} : t,
        i = a.formatAsSearchResult,
        l = i === void 0 ? !1 : i;
      if (
        e.interactiveType === r("WAWebInteractiveMessageType").SHOPS_STOREFRONT
      ) {
        var s;
        return (
          e.caption ||
          ((s = e.interactiveHeader) == null ? void 0 : s.title) ||
          ""
        );
      }
      if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      ) {
        var u = p(e);
        if (u != null) return u;
      }
      if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS
      ) {
        var d = m(e);
        if (d != null) return d;
      }
      if (
        e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").ORDER_STATUS
      ) {
        var _ = c(e);
        if (_ != null) return _;
      }
      return [
        (n = e.interactiveHeader) == null ? void 0 : n.title,
        l ? ((o = e.interactiveHeader) == null ? void 0 : o.subtitle) : null,
        e.caption,
        e.footer,
      ]
        .filter(Boolean)
        .join("\n");
    }
    function u(e) {
      switch (e) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
          return s._(/*BTDS*/ "Order pending");
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          return s._(/*BTDS*/ "Order canceled");
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          return s._(/*BTDS*/ "Order partially shipped");
        case o("WAWebOrderStatus").OrderStatus.Complete:
          return s._(/*BTDS*/ "Order completed \ud83c\udf89");
        case o("WAWebOrderStatus").OrderStatus.Shipped:
          return s._(/*BTDS*/ "Order shipped");
        case o("WAWebOrderStatus").OrderStatus.Processing:
          return s._(/*BTDS*/ "Order processing");
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          return s._(/*BTDS*/ "Payment requested");
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          return s._(/*BTDS*/ "Order preparing to ship");
        case o("WAWebOrderStatus").OrderStatus.Delivered:
          return s._(/*BTDS*/ "Order delivered \ud83c\udf89");
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
          return s._(/*BTDS*/ "Order confirmed");
        case o("WAWebOrderStatus").OrderStatus.Delayed:
          return s._(/*BTDS*/ "Order delayed");
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          return s._(/*BTDS*/ "Order out for delivery");
        case o("WAWebOrderStatus").OrderStatus.Failed:
          return s._(/*BTDS*/ "Order failed");
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          return s._(/*BTDS*/ "Order refunded");
      }
    }
    function c(e) {
      var t = o("WAWebOrderStatus").getOrderStatusInfo(e);
      if (t == null) return null;
      var n = t.status;
      if (n == null) return null;
      var r = o("WAWebOrderStatusButton").getOrderStatusButton(e);
      if (r != null) {
        var a = u(n).toString(),
          i = e.caption,
          l = o("WAWebGetInteractiveFooterText").getInteractiveFooterText(e),
          c = s._(/*BTDS*/ "Order #{order-id}", [
            s._param("order-id", r.reference_id),
          ]);
        return [a, c, i, l].filter(Boolean).join("\n");
      }
      return d(e);
    }
    function d(e) {
      var t = o("WAWebOrderStatus").getOrderStatusInfo(e);
      if (t == null) return null;
      var n = t.status;
      if (n == null) return null;
      if (o("WAWebOrderStatus").hasOrderStatusButton(e)) {
        var r = u(n).toString(),
          a = e.caption;
        return ["*" + r + "*", a].filter(Boolean).join("\n");
      }
      return g(e.caption, n);
    }
    function m(e) {
      var t = o("WAWebOrderDetails").getOrderInfo(e);
      if (t == null) return null;
      var n = t.currency,
        r = t.items,
        a = t.totalAmount,
        i = o("WAWebCurrencyUtils").formatAmount(n, a);
      return r.length !== 0 ? r[0].name + " \xB7 " + i : i;
    }
    function p(e) {
      var t,
        n,
        r,
        a = o("WAWebOrderDetails").getOrderInfo(e);
      if (a == null) return null;
      var i = a.paymentSettings,
        l = s._(/*BTDS*/ "Pix"),
        u =
          i == null || (t = i.at(0)) == null
            ? void 0
            : t[
                o("WAWebBizOrderDetailsParams").PaymentSettingType
                  .PIX_STATIC_CODE
              ],
        c = (n = u == null ? void 0 : u.merchant_name) != null ? n : "",
        d = (r = u == null ? void 0 : u.key) != null ? r : "",
        m = o("WAWebUserPrefsTypes").PixKeyType.cast(
          u == null ? void 0 : u.key_type,
        );
      return (
        c +
        " \xB7 " +
        l.toString() +
        ": " +
        o("WAWebBrazilPixKeyFormattingUtils").getFormattedPixKey(d, m)
      );
    }
    function _(e) {
      var t = o(
        "WAWebOrderPaymentStatus",
      ).getOrderPaymentStatusInfoFromNativeFlow(e);
      return t == null
        ? null
        : h(e.caption, t == null ? void 0 : t.paymentStatus).toString();
    }
    function f(e) {
      var t = o(
        "WAWebOrderPaymentStatus",
      ).getOrderPaymentStatusInfoFromNativeFlow(e);
      return t == null ? null : y(t == null ? void 0 : t.paymentMethod);
    }
    function g(e, t) {
      var n = "";
      switch (t) {
        case o("WAWebOrderStatus").OrderStatus.Pending:
          n = s._(/*BTDS*/ "Status: Pending");
          break;
        case o("WAWebOrderStatus").OrderStatus.Canceled:
          n = s._(/*BTDS*/ "Status: Canceled");
          break;
        case o("WAWebOrderStatus").OrderStatus.PartiallyShipped:
          n = s._(/*BTDS*/ "Status: Partially shipped");
          break;
        case o("WAWebOrderStatus").OrderStatus.Complete:
          n = s._(/*BTDS*/ "Status: Complete");
          break;
        case o("WAWebOrderStatus").OrderStatus.Shipped:
          n = s._(/*BTDS*/ "Status: shipped");
          break;
        case o("WAWebOrderStatus").OrderStatus.Processing:
          n = s._(/*BTDS*/ "Status: Processing");
          break;
        case o("WAWebOrderStatus").OrderStatus.PaymentRequested:
          n = s._(/*BTDS*/ "Status: Payment requested");
          break;
        case o("WAWebOrderStatus").OrderStatus.PreparingToShip:
          n = s._(/*BTDS*/ "Status: Preparing to ship");
          break;
        case o("WAWebOrderStatus").OrderStatus.Delivered:
          n = s._(/*BTDS*/ "Status: Delivered");
          break;
        case o("WAWebOrderStatus").OrderStatus.Confirmed:
          n = s._(/*BTDS*/ "Status: Confirmed");
          break;
        case o("WAWebOrderStatus").OrderStatus.Delayed:
          n = s._(/*BTDS*/ "Status: Delayed");
          break;
        case o("WAWebOrderStatus").OrderStatus.OutForDelivery:
          n = s._(/*BTDS*/ "Status: Out for delivery");
          break;
        case o("WAWebOrderStatus").OrderStatus.Failed:
          n = s._(/*BTDS*/ "Status: Failed");
          break;
        case o("WAWebOrderStatus").OrderStatus.Refunded:
          n = s._(/*BTDS*/ "Status: Refunded");
          break;
      }
      return e != null && e.toLowerCase().includes(n.toString().toLowerCase())
        ? e || ""
        : (n.toString() + "\n" + (e || "")).trim();
    }
    function h(e, t) {
      var n = "";
      switch (t) {
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Captured:
          n = s._(/*BTDS*/ "Payment: Paid");
          break;
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Pending:
          n = s._(/*BTDS*/ "Payment: Pending");
          break;
        case o("WAWebOrderPaymentStatus").OrderPaymentStatus.Failed:
          n = s._(/*BTDS*/ "Payment: Failed");
          break;
      }
      return (n.toString() + "\n" + (e != null ? e : "")).trim();
    }
    function y(e) {
      var t = "";
      switch (e) {
        case o("WAWebOrderPaymentStatus").OrderPaymentMethod.PaymentInstruction:
          t = s._(/*BTDS*/ "Paying outside WhatsApp");
          break;
        case o("WAWebOrderPaymentStatus").OrderPaymentMethod.Confirm:
          t = s._(/*BTDS*/ "Order confirmed");
          break;
      }
      return t.toString();
    }
    ((l.formatInteractive = e),
      (l.getOrderStatusButtonBodyTitle = u),
      (l.formatOrderStatusMessagePreview = c),
      (l.formatOrderStatusMessageBody = d),
      (l.formatOrderDetailsMessagePreview = m),
      (l.formatPaymentInfoMessagePreview = p),
      (l.formatOrderPaymentStatusMessage = _),
      (l.formatOrderPaymentMethodMessage = f),
      (l.appendPrefilledMsg = g),
      (l.appendPrefilledOrderPaymentMsg = h));
  },
  226,
);
