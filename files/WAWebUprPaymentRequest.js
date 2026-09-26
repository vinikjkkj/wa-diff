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
      var t = e.additional_identifiers;
      return Array.isArray(t)
        ? t.flatMap(function (e) {
            var t = e == null ? void 0 : e.identifier_type,
              n = e == null ? void 0 : e.value;
            return typeof t == "string" &&
              t.trim() !== "" &&
              typeof n == "string" &&
              n.trim() !== ""
              ? [{ identifierType: t, value: n }]
              : [];
          })
        : [];
    }
    function s(t) {
      var n, a, i, l;
      if (
        t.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        t.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW ||
        t.nativeFlowName !==
          r("WAWebInteractiveMessagesNativeFlowName").ORDER_DETAILS ||
        !((n = t.interactivePayload) != null && n.buttons)
      )
        return null;
      var s =
        (a = t.interactivePayload.buttons[0]) == null
          ? void 0
          : a.buttonParamsJson;
      if (s == null) return null;
      var u;
      try {
        u = JSON.parse(s);
      } catch (e) {
        return null;
      }
      if (
        u[o("WAWebUprConstants").UprWireFields.PAYMENT_TYPE] !==
        o("WAWebUprConstants").UPR_PAYMENT_TYPE
      )
        return null;
      var c = u[o("WAWebUprConstants").UprWireFields.PAYMENT_SETTINGS];
      if (!Array.isArray(c) || c.length === 0) return null;
      var d = u[o("WAWebUprConstants").UprWireFields.TOTAL_AMOUNT],
        m =
          (d == null ? void 0 : d.value) != null &&
          (d == null ? void 0 : d.offset) != null
            ? d
            : null,
        p = [];
      for (var _ of c) {
        var f = _[o("WAWebUprConstants").UprWireFields.TYPE];
        if (f === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_LINK) {
          var g,
            h =
              (g = _[o("WAWebUprConstants").UprWireFields.PAYMENT_LINK]) == null
                ? void 0
                : g[o("WAWebUprConstants").UprWireFields.URI];
          h != null && h !== "" && p.push({ kind: "payment_link", uri: h });
        } else if (
          f === o("WAWebUprConstants").UprPaymentSettingType.PAYMENT_ACCOUNT
        ) {
          var y = _[o("WAWebUprConstants").UprWireFields.PAYMENT_ACCOUNT];
          if (
            (y == null
              ? void 0
              : y[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE]) !=
            null
          ) {
            var C, b;
            p.push({
              kind: "payment_account",
              accountType: y[o("WAWebUprConstants").UprWireFields.ACCOUNT_TYPE],
              identifierType:
                y[o("WAWebUprConstants").UprWireFields.IDENTIFIER_TYPE],
              identifierValue:
                y[o("WAWebUprConstants").UprWireFields.IDENTIFIER_VALUE],
              institutionName:
                (C =
                  y[o("WAWebUprConstants").UprWireFields.INSTITUTION_NAME]) !=
                null
                  ? C
                  : "",
              beneficiaryName:
                (b =
                  y[o("WAWebUprConstants").UprWireFields.BENEFICIARY_NAME]) !=
                null
                  ? b
                  : "",
              additionalIdentifiers: e(y),
            });
          }
        }
      }
      if (p.length === 0) return null;
      var v = u[o("WAWebUprConstants").UprWireFields.ORDER],
        S = Array.isArray(
          v == null ? void 0 : v[o("WAWebUprConstants").UprWireFields.ITEMS],
        )
          ? v[o("WAWebUprConstants").UprWireFields.ITEMS].map(function (e) {
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
          (i = u[o("WAWebUprConstants").UprWireFields.REFERENCE_ID]) != null
            ? i
            : "",
        currency:
          (l = u[o("WAWebUprConstants").UprWireFields.CURRENCY]) != null
            ? l
            : "",
        totalAmount: m,
        paymentOptions: p,
        items: S,
      };
    }
    l.parseUprPaymentInfo = s;
  },
  98,
);
