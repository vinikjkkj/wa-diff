__d(
  "WAWebParseInteractiveResponseMessageProto",
  [
    "WAWebE2EProtoUtils",
    "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
    "WAWebGalaxyFlowsUtils",
    "WAWebHsmGatingUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.bizInfo,
        a = e.messageProtobuf,
        i = e.msgContext,
        l = a.interactiveResponseMessage;
      if (l != null) {
        var s =
          o("WAWebE2EProtoUtils").getInteractiveResponseMessageTypeForProto(l);
        if (
          !o(
            "WAWebHsmGatingUtils",
          ).interactiveNativeFlowResponseMessagesEnabled() ||
          !s ||
          !o("WAWebE2EProtoUtils").isInteractiveResponseMessageTypeEnabled(s)
        )
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: l.contextInfo,
          };
        if (o("WAWebGalaxyFlowsUtils").isResponseFlowSupported(l))
          return o("WAWebGalaxyFlowsUtils").isFlexibleCheckoutForm(l)
            ? {
                msgData: babelHelpers.extends({}, t, {
                  type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                  kind: o("WAWebMsgType").MsgKind.Unknown,
                  subtype: "phone_only_feature",
                }),
                contextInfo: l.contextInfo,
              }
            : o(
                "WAWebGalaxyFlowMessageInteractiveResponseMessageParser",
              ).getGalaxyMessageInteractiveResponse(t, l);
        try {
          var u,
            c,
            d = o("WAWebE2EProtoUtils").getInteractiveResponsePayload({
              type: s,
              message: l,
              bizInfo: n,
              msgContext: i,
            }),
            m =
              (d == null ? void 0 : d.name) ===
              r("WAWebInteractiveMessagesNativeFlowName")
                .CALL_PERMISSION_REQUEST;
          return {
            msgData: babelHelpers.extends(
              {},
              t,
              {
                type: o("WAWebMsgType").MSG_TYPE.INTERACTIVE_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.InteractiveResponse,
                body:
                  (u = o(
                    "WAWebE2EProtoUtils",
                  ).convertToTextWithoutSpecialEmojis(
                    (c = l.body) == null ? void 0 : c.text,
                  )) != null
                    ? u
                    : "",
                interactivePayload: d,
              },
              m
                ? { viewMode: o("WAWebViewMode.flow").ViewModeType.HIDDEN }
                : null,
            ),
            contextInfo: l.contextInfo,
          };
        } catch (e) {
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              subtype: "phone_only_feature",
            }),
            contextInfo: l.contextInfo,
          };
        }
      }
    }
    l.default = e;
  },
  98,
);
