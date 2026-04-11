__d(
  "WAWebParseInteractiveResponseMessageProto",
  [
    "WAWebBizGatingUtils",
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
    "WAWebGalaxyFlowsUtils",
    "WAWebMsgType",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.bizInfo,
        r = e.messageProtobuf,
        a = e.msgContext,
        i = r.interactiveResponseMessage;
      if (i != null) {
        var l =
          o("WAWebE2EProtoUtils").getInteractiveResponseMessageTypeForProto(i);
        if (
          !o(
            "WAWebBizGatingUtils",
          ).interactiveNativeFlowResponseMessagesEnabled() ||
          !l ||
          !o("WAWebE2EProtoUtils").isInteractiveResponseMessageTypeEnabled(l)
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: i.contextInfo,
          };
        if (o("WAWebGalaxyFlowsUtils").isResponseFlowSupported(i))
          return o("WAWebGalaxyFlowsUtils").isFlexibleCheckoutForm(i)
            ? {
                msgData: babelHelpers.extends({}, t, {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: o("WAWebMsgType").MsgKind.Unknown,
                  subtype: "phone_only_feature",
                }),
                contextInfo: i.contextInfo,
              }
            : o(
                "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
              ).getGalaxyMessageInteractiveResponse(t, i);
        try {
          var s, u;
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
              kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
              body:
                (s = o("WAWebE2EProtoUtils").convertToTextWithoutSpecialEmojis(
                  (u = i.body) == null ? void 0 : u.text,
                )) != null
                  ? s
                  : "",
              interactivePayload: o(
                "WAWebE2EProtoUtils",
              ).getInteractiveResponsePayload({
                type: l,
                message: i,
                bizInfo: n,
                msgContext: a,
              }),
            }),
            contextInfo: i.contextInfo,
          };
        } catch (e) {
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: i.contextInfo,
          };
        }
      }
    }
    l.default = e;
  },
  98,
);
