__d(
  "WAWebPaymentRequestForwardFields",
  [
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebPaymentRequestForwardPolicy",
    "WAWebPaymentRequestForwarding",
    "WAWebPaymentRequestForwardingDestination",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = o(
          "WAWebPaymentRequestForwarding",
        ).getForwardedPixPaymentRequestPayload(
          o("WAWebPaymentRequestForwardPolicy").getPaymentRequestSource(e),
        );
      if (
        n == null ||
        !o(
          "WAWebPaymentRequestForwardingDestination",
        ).isSupportedPaymentRequestForwardHeader(e.interactiveHeader)
      )
        return null;
      var a = e.interactiveHeader;
      return {
        type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE,
        kind: o("WAWebMsgType").MsgKind.Interactive,
        body: (t = e.body) != null ? t : "",
        interactiveType: r("WAWebInteractiveMessageType").NATIVE_FLOW,
        nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName")
          .PAYMENT_REQUEST,
        nativeFlowInteractiveMsg: !0,
        interactivePayload: n,
        interactiveHeader:
          a == null
            ? void 0
            : {
                title: a.title,
                subtitle: a.subtitle,
                thumbnail: a.thumbnail,
                mediaType: a.mediaType,
                hasMediaAttachment: a.hasMediaAttachment,
              },
        caption: e.caption,
        footer: e.footer,
        isForwarded: !0,
      };
    }
    function s(e, t, n) {
      return o("WAWebPaymentRequestForwardPolicy").isPaymentRequestMsgModel(e)
        ? new (r("WAWebMsgKey"))({ fromMe: !0, remote: t, id: n.id })
        : n;
    }
    function u(e) {
      return o("WAWebPaymentRequestForwardPolicy").isPaymentRequestMsgModel(e)
        ? { isForwarded: !0, forwardingScore: void 0 }
        : {};
    }
    ((l.getPaymentRequestForwardFields = e),
      (l.getPaymentRequestForwardKey = s),
      (l.getPaymentRequestForwardingOverrides = u));
  },
  98,
);
