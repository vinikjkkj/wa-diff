__d(
  "WAWebParseNativeFlowButtonsMessageProto",
  [
    "WAWebButtonsMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebNativeFlowValidation",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.bizInfo,
        a = e.bizSource,
        i = e.messageProtobuf,
        l = e.msgContext,
        s = i.buttonsMessage;
      if (s != null) {
        var u = s.buttons,
          c = u === void 0 ? [] : u,
          d = s.headerType,
          m = r("WAWebInteractiveMessagesNativeFlowName").cast(
            o("WAWebE2EProtoUtils").getBizNativeFlowName({ buttonsMessage: s }),
          );
        if (
          !(
            l === "relay" &&
            (m == null ||
              m !==
                r("WAWebInteractiveMessagesNativeFlowName").cast(
                  n == null ? void 0 : n.nativeFlowName,
                ))
          )
        ) {
          if (
            !o("WAWebE2EProtoUtils").shouldParseNFM({
              name: m,
              bizInfo: n,
              msgContext: l,
            }) ||
            o("WAWebE2EProtoUtils").hasUnsupportedButtons(c)
          )
            return {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature",
              }),
              contextInfo: s.contextInfo,
            };
          if (
            d ===
              o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType
                .UNKNOWN ||
            !new Set(
              o(
                "WAWebProtobufsE2E.pb",
              ).Message$ButtonsMessage$HeaderType.members(),
            ).has(d)
          )
            return {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: void 0,
              }),
              contextInfo: s.contextInfo,
            };
          var p = o("WAWebButtonsMessageProtoUtils").parseButtonsMessageProto({
            buttonsMessage: s,
            baseMessage: t,
            msgContext: l,
          });
          if (m != null) {
            var _ = babelHelpers.extends({}, p, {
              type: o("WAWebMsgType").MSG_TYPE.NATIVE_FLOW,
              kind: o("WAWebMsgType").MsgKind.NativeFlow,
              nativeFlowName: r("WAWebInteractiveMessagesNativeFlowName").cast(
                m,
              ),
              nativeFlowButtons: c,
            });
            return !_.nativeFlowName ||
              !o("WAWebNativeFlowValidation").isValidNativeFlowMessage(_, a)
              ? {
                  msgData: babelHelpers.extends({}, t, {
                    type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                    kind: o("WAWebMsgType").MsgKind.Unknown,
                    subtype: "phone_only_feature",
                  }),
                  contextInfo: s.contextInfo,
                }
              : { msgData: _, contextInfo: s.contextInfo };
          }
        }
      }
    }
    l.default = e;
  },
  98,
);
