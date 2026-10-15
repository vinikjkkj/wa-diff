__d(
  "WAWebOrderDetails",
  [
    "WALogger",
    "WAWebBizOrderDetailsParams",
    "WAWebBrPaymentMethodKey",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "filterNulls",
    "sumBy",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      var t,
        n = e == null ? void 0 : e.value;
      if (n != null) {
        var r = (t = e == null ? void 0 : e.offset) != null ? t : 1;
        return parseFloat(n != null ? n : 0) / parseInt(r, 10);
      }
    }
    function c(e) {
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
    var d = "custom-item";
    function m(e, t) {
      var n, a;
      if ((e !== "review_and_pay" && e !== "payment_info") || t == null)
        return null;
      var i = o("WAWebBizOrderDetailsParams").parse(t),
        l = i.currency,
        s = i.external_payment_configurations,
        m = i.order,
        _ = i.payment_configuration,
        f = i.payment_settings,
        g = i.reference_id,
        h = u(i.total_amount),
        y = (n = m == null ? void 0 : m.items) != null ? n : [],
        C = y.map(function (e) {
          var t, n, r, o, a, i, l, s;
          return {
            id:
              (t =
                (n = e == null ? void 0 : e.product_id) != null
                  ? n
                  : e == null
                    ? void 0
                    : e.retailer_id) != null
                ? t
                : "",
            name: (r = e == null ? void 0 : e.name) != null ? r : "",
            amount: u(e == null ? void 0 : e.amount),
            quantity: parseInt(
              (o = e == null ? void 0 : e.quantity) != null ? o : 0,
              10,
            ),
            isCustomItem:
              (a = e == null ? void 0 : e.isCustomItem) != null
                ? a
                : (e == null || (i = e.retailer_id) == null
                    ? void 0
                    : i.indexOf(d)) === 0,
            isQuantitySet:
              (l = e == null ? void 0 : e.isQuantitySet) != null ? l : !0,
            properties:
              e == null || (s = e.variant_info_list) == null
                ? void 0
                : s.map(function (e) {
                    var t = e.name,
                      n = e.value;
                    return [t, n];
                  }),
          };
        }),
        b = r("sumBy")(C, function (e) {
          return e.quantity;
        }),
        v = (a = y[0]) == null ? void 0 : a.name;
      if (
        e === "payment_info" &&
        (f == null ? void 0 : f.length) === 1 &&
        f[0].type ===
          o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
      ) {
        var S =
          f[0][
            o("WAWebBizOrderDetailsParams").PaymentSettingType.PIX_STATIC_CODE
          ];
        v = S.merchant_name;
      }
      if (g == null || l == null || h == null) return null;
      var R = u(m == null ? void 0 : m.shipping),
        L = u(m == null ? void 0 : m.tax),
        E = u(m == null ? void 0 : m.discount),
        k = u(m == null ? void 0 : m.subtotal),
        I = c(s);
      return babelHelpers.extends(
        {
          title: v,
          referenceId: g,
          currency: l,
          quantity: b,
          shipping: R,
          tax: L,
          discount: E,
          subtotal: k,
          totalAmount: h,
          isOrderNodeOmitted: m == null,
          items: C,
          payment_configuration: _,
          type: i.type,
        },
        I != null ? { externalPaymentConfigurations: I } : {},
        { paymentSettings: f, buttonName: e },
        p(i.ordered_methods, i.rank_source),
      );
    }
    function p(e, t) {
      var n = _(e),
        r = n.hasUnusableServerOrdering,
        o = n.methods,
        a = {};
      return (
        o.length > 0 &&
          ((a.orderedPaymentMethods = o),
          typeof t == "string" && (a.paymentMethodRankSource = t)),
        r && (a.hasUnusableServerPaymentMethodOrdering = !0),
        a
      );
    }
    function _(t) {
      if (t == null) return { methods: [], hasUnusableServerOrdering: !1 };
      if (!Array.isArray(t))
        return (
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "ordered_methods was not an array",
                ])),
            )
            .sendLogs("br-ordered-methods-unusable", { sampling: 0.01 }),
          { methods: [], hasUnusableServerOrdering: !0 }
        );
      var n = [];
      for (var r of t) {
        var a = f(r, n.length);
        a != null && n.push(a);
      }
      return (
        t.length !== n.length &&
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "ordered_methods dropped ",
                  " unusable entries; ",
                  " survived",
                ])),
              t.length - n.length,
              n.length,
            )
            .sendLogs("br-ordered-methods-unusable", { sampling: 0.01 }),
        {
          methods: n,
          hasUnusableServerOrdering: t.length > 0 && n.length === 0,
        }
      );
    }
    function f(e, t) {
      if (e == null || typeof e != "object" || Array.isArray(e)) return null;
      var n = e.method_key;
      if (typeof n != "string" || n === "") return null;
      var r = e.rank;
      return {
        methodKey: o("WAWebBrPaymentMethodKey").normalizeServerMethodKey(n),
        rank: typeof r == "number" && Number.isInteger(r) ? r : t,
        isDefault: e.is_default === !0,
      };
    }
    function g(e) {
      return e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE
        ? h({
            interactivePayload: e.interactivePayload,
            interactiveType: e.interactiveType,
            nativeFlowButtons: null,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          })
        : h({
            interactivePayload: null,
            interactiveType: null,
            nativeFlowButtons: e.nativeFlowButtons,
            nativeFlowName: e.nativeFlowName,
            type: e.type,
          });
    }
    function h(e) {
      var t = e.interactivePayload,
        n = e.interactiveType,
        a = e.nativeFlowButtons,
        i = e.nativeFlowName,
        l = e.type;
      if (
        i !== r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS &&
        i !== r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_INFO
      )
        return null;
      if (
        l === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        n === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        t != null &&
        t.buttons
      ) {
        var s = t.buttons[0],
          u = s.buttonParamsJson,
          c = s.name;
        return m(c, u);
      } else if (l === o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW) {
        var d,
          p = a == null || (d = a[0]) == null ? void 0 : d.nativeFlowInfo;
        return m(
          p == null ? void 0 : p.name,
          p == null ? void 0 : p.paramsJson,
        );
      }
    }
    ((l.CUSTOM_ITEM_ID_PREFIX = d),
      (l.paramsJsonToOrderInfo = m),
      (l.getOrderInfo = g),
      (l.getOrderInfoFor = h));
  },
  98,
);
