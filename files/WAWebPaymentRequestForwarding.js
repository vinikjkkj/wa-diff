__d(
  "WAWebPaymentRequestForwarding",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebPaymentRequestForwardingParams",
  ],
  function (t, n, r, o, a, i, l) {
    var e = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    function s(t) {
      var n = p(t);
      if (n.length !== 0) {
        var r = n[0].payment_message_trace_id;
        if (!(typeof r != "string" || !e.test(r)))
          return n.every(function (e) {
            return e.payment_message_trace_id === r;
          })
            ? r
            : void 0;
      }
    }
    function u(e) {
      var t, n;
      return e.type !== o("WAWebMsgType").MSG_TYPE.INTERACTIVE ||
        e.interactiveType !== r("WAWebInteractiveMessageType").NATIVE_FLOW
        ? !1
        : c(e) && e.isForwarded === !0
          ? !0
          : ((t = (n = e.interactivePayload) == null ? void 0 : n.buttons) !=
            null
              ? t
              : []
            ).some(function (t) {
              var n;
              return t.name !==
                r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
                ? !1
                : e.isForwarded === !0 ||
                    (t.buttonParamsJson != null &&
                      ((n = _(t.buttonParamsJson)) == null
                        ? void 0
                        : n.is_forwarded) === !0);
            });
    }
    function c(e) {
      return (
        e.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE &&
        e.interactiveType === r("WAWebInteractiveMessageType").NATIVE_FLOW &&
        e.nativeFlowName ===
          r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST
      );
    }
    function d(e) {
      var t,
        n,
        a = (t = e.interactivePayload) == null ? void 0 : t.buttons;
      if ((a == null ? void 0 : a.length) !== 1 || !c(e)) return null;
      var i = s(e),
        l = p(e)[0],
        u = (n = e.interactivePayload) == null ? void 0 : n.messageVersion;
      if (i == null || l == null || u == null) return null;
      var d = o("WAWebPaymentRequestForwardingParams").getForwardablePixParams(
        l,
      );
      return d == null
        ? null
        : {
            messageVersion: u,
            buttons: [
              {
                name: r("WAWebInteractiveMessagesNativeFlowName")
                  .PAYMENT_REQUEST,
                buttonParamsJson: JSON.stringify(
                  babelHelpers.extends({}, d, {
                    payment_message_trace_id: i,
                    is_forwarded: !0,
                  }),
                ),
              },
            ],
          };
    }
    function m(e) {
      return u(e) && d(e) != null;
    }
    function p(e) {
      if (!c(e)) return [];
      var t = [];
      for (var n of (o =
        (a = e.interactivePayload) == null ? void 0 : a.buttons) != null
        ? o
        : []) {
        var o, a;
        if (
          !(
            n.name !==
              r("WAWebInteractiveMessagesNativeFlowName").PAYMENT_REQUEST ||
            n.buttonParamsJson == null
          )
        ) {
          var i = _(n.buttonParamsJson);
          if (i == null) return [];
          t.push(i);
        }
      }
      return t;
    }
    function _(e) {
      try {
        var t = JSON.parse(e);
        return t != null && typeof t == "object" && !Array.isArray(t)
          ? t
          : null;
      } catch (e) {
        return null;
      }
    }
    ((l.getPaymentRequestTraceId = s),
      (l.isForwardedPaymentRequest = u),
      (l.isPaymentRequestForForwarding = c),
      (l.getForwardedPixPaymentRequestPayload = d),
      (l.isForwardedPixPaymentRequest = m));
  },
  98,
);
