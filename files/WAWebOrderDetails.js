__d(
  "WAWebOrderDetails",
  [
    "WAWebBizOrderDetailsParams",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "filterNulls",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e == null ? void 0 : e.value;
      if (n != null) {
        var r = (t = e == null ? void 0 : e.offset) != null ? t : 1;
        return parseFloat(n != null ? n : 0) / parseInt(r, 10);
      }
    }
    function s(e) {
      return e == null
        ? null
        : r("filterNulls")(
            e.map(function (e) {
              return (e == null ? void 0 : e.type) != null
                ? babelHelpers.extends(
                    { type: e.type },
                    e.payment_instruction != null
                      ? { paymentInstruction: e.payment_instruction }
                      : {},
                  )
                : null;
            }),
          );
    }
    var u = function () {
        return "custom-item";
      },
      c = function (n, a) {
        var t, i;
        if ((n !== "review_and_pay" && n !== "payment_info") || a == null)
          return null;
        var l = o("WAWebBizOrderDetailsParams").parse(a),
          c = l.currency,
          d = l.external_payment_configurations,
          m = l.order,
          p = l.payment_configuration,
          _ = l.payment_settings,
          f = l.reference_id,
          g = e(l.total_amount),
          h = (t = m == null ? void 0 : m.items) != null ? t : [],
          y = h.map(function (t) {
            var n, r, o, a, i, l, s, c;
            return {
              id:
                (n =
                  (r = t == null ? void 0 : t.product_id) != null
                    ? r
                    : t == null
                      ? void 0
                      : t.retailer_id) != null
                  ? n
                  : "",
              name: (o = t == null ? void 0 : t.name) != null ? o : "",
              amount: e(t == null ? void 0 : t.amount),
              quantity: parseInt(
                (a = t == null ? void 0 : t.quantity) != null ? a : 0,
                10,
              ),
              isCustomItem:
                (i = t == null ? void 0 : t.isCustomItem) != null
                  ? i
                  : (t == null || (l = t.retailer_id) == null
                      ? void 0
                      : l.indexOf(u())) === 0,
              isQuantitySet:
                (s = t == null ? void 0 : t.isQuantitySet) != null ? s : !0,
              properties:
                t == null || (c = t.variant_info_list) == null
                  ? void 0
                  : c.map(function (e) {
                      var t = e.name,
                        n = e.value;
                      return [t, n];
                    }),
            };
          }),
          C = r("sumBy")(y, function (e) {
            return e.quantity;
          }),
          b = (i = h[0]) == null ? void 0 : i.name;
        if (
          n === "payment_info" &&
          (_ == null ? void 0 : _.length) === 1 &&
          _[0].type ===
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
        ) {
          var v =
            _[0][
              o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
            ];
          b = v.merchant_name;
        }
        if (f == null || c == null || g == null) return null;
        var S = e(m == null ? void 0 : m.shipping),
          R = e(m == null ? void 0 : m.tax),
          L = e(m == null ? void 0 : m.discount),
          E = e(m == null ? void 0 : m.subtotal),
          k = s(d);
        return babelHelpers.extends(
          {
            title: b,
            referenceId: f,
            currency: c,
            quantity: C,
            shipping: S,
            tax: R,
            discount: L,
            subtotal: E,
            totalAmount: g,
            items: y,
            payment_configuration: p,
            type: l.type,
          },
          k != null ? { externalPaymentConfigurations: k } : {},
          { paymentSettings: _, buttonName: n },
        );
      },
      d = function (t) {
        var e;
        if (
          t.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
          t.nativeFlowName !==
            r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
        )
          return null;
        if (
          t.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
          t.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
          (e = t.interactivePayload) != null &&
          e.buttons
        ) {
          var n = t.interactivePayload.buttons[0],
            a = n.buttonParamsJson,
            i = n.name;
          return c(i, a);
        } else if (t.type === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
          var l,
            s = ((l = t.nativeFlowButtons) != null ? l : [])[0].nativeFlowInfo;
          return c(
            s == null ? void 0 : s.name,
            s == null ? void 0 : s.paramsJson,
          );
        }
      };
    ((l.getCustomItemIdPrefix = u),
      (l.paramsJsonToOrderInfo = c),
      (l.getOrderInfo = d));
  },
  98,
);
