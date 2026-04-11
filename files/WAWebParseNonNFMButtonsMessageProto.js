__d(
  "WAWebParseNonNFMButtonsMessageProto",
  [
    "WAWebButtonsMessageProtoUtils",
    "WAWebE2EProtoUtils",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgType",
    "WAWebProtobufsE2E.pb",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.bizInfo,
        a = e.messageProtobuf,
        i = e.msgContext,
        l = a.buttonsMessage;
      if (l != null) {
        var s = l.buttons,
          u = s === void 0 ? [] : s,
          c = l.headerType,
          d = r("WAWebInteractiveMessagesNativeFlowName").cast(
            o("WAWebE2EProtoUtils").getBizNativeFlowName({ buttonsMessage: l }),
          );
        if (!(d != null || (n == null ? void 0 : n.nativeFlowName) != null)) {
          if (o("WAWebE2EProtoUtils").hasUnsupportedButtons(u))
            return {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                subtype: "phone_only_feature",
              }),
              contextInfo: l.contextInfo,
            };
          if (
            c ===
              o("WAWebProtobufsE2E.pb").Message$ButtonsMessage$HeaderType
                .UNKNOWN ||
            !new Set(
              o(
                "WAWebProtobufsE2E.pb",
              ).Message$ButtonsMessage$HeaderType.members(),
            ).has(c)
          )
            return {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
              }),
              contextInfo: l.contextInfo,
            };
          var m = o("WAWebButtonsMessageProtoUtils").parseButtonsMessageProto({
            buttonsMessage: l,
            baseMessage: t,
            msgContext: i,
          });
          return u.length
            ? {
                msgData: babelHelpers.extends({}, m, {
                  isDynamicReplyButtonsMsg: !0,
                  dynamicReplyButtons: u,
                }),
                contextInfo: l.contextInfo,
              }
            : { msgData: m, contextInfo: l.contextInfo };
        }
      }
    }
    l.default = e;
  },
  98,
);
