__d(
  "WAWebUprPaymentRequest",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebUprConstants",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t, n, a, i;
      if (
        e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        e.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        !((t = e.interactivePayload) != null && t.buttons)
      )
        return null;
      var l =
        (n = e.interactivePayload.buttons[0]) == null
          ? void 0
          : n.buttonParamsJson;
      if (l == null) return null;
      var s;
      try {
        s = JSON.parse(l);
      } catch (e) {
        return null;
      }
      if (
        s[o("WAWebUprConstants").UprWireFields.PAYMENT_TYPE] !==
        o("WAWebUprConstants").UPR_PAYMENT_TYPE
      )
        return null;
      var u = s[o("WAWebUprConstants").UprWireFields.PAYMENT_SETTINGS];
      if (!Array.isArray(u) || u.length === 0) return null;
      var c = s[o("WAWebUprConstants").UprWireFields.TOTAL_AMOUNT],
        d =
          (c == null ? void 0 : c.value) != null &&
          (c == null ? void 0 : c.offset) != null
            ? c
            : null,
        m = [];
      for (var p of u) {
        var _ = p[o("WAWebUprConstants").UprWireFields.TYPE];
        if (_ === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_LINK) {
          var f,
            g =
              (f = p[o("WAWebUprConstants").UprWireFields.PAYMENT_LINK]) == null
                ? void 0
                : f[o("WAWebUprConstants").UprWireFields.URI];
          g != null && g !== "" && m.push({ kind: "payment_link", uri: g });
        } else if (
          _ === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_ACCOUNT
        ) {
          var h = p[o("WAWebUprConstants").UprWireFields.PAYMENT_ACCOUNT];
          if (
            (h == null
              ? void 0
              : h[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE]) !=
            null
          ) {
            var y, C;
            m.push({
              kind: "payment_account",
              accountType: h[o("WAWebUprConstants").UprWireFields.ACCOUNT_TYPE],
              identifierType:
                h[o("WAWebUprConstants").UprWireFields.IDENTIFIER_TYPE],
              identifierValue:
                h[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE],
              institutionName:
                (y =
                  h[o("WAWebUprConstants").UprWireFields.INSTITUTION_NAME]) !=
                null
                  ? y
                  : "",
              beneficiaryName:
                (C =
                  h[o("WAWebUprConstants").UprWireFields.BENEFICIARY_NAME]) !=
                null
                  ? C
                  : "",
            });
          }
        }
      }
      if (m.length === 0) return null;
      var b = s[o("WAWebUprConstants").UprWireFields.ORDER],
        v = Array.isArray(
          b == null ? void 0 : b[o("WAWebUprConstants").UprWireFields.ITEMS],
        )
          ? b[o("WAWebUprConstants").UprWireFields.ITEMS].map(function (e) {
              return {
                retailerId: e.retailer_id,
                name: e.name,
                amount: e.amount,
                quantity: e.quantity,
              };
            })
          : null;
      return {
        referenceId:
          (a = s[o("WAWebUprConstants").UprWireFields.REFERENCE_ID]) != null
            ? a
            : "",
        currency:
          (i = s[o("WAWebUprConstants").UprWireFields.CURRENCY]) != null
            ? i
            : "",
        totalAmount: d,
        paymentOptions: m,
        items: v,
      };
    }
    l.parseUprPaymentInfo = e;
  },
  98,
);
