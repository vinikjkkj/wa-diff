__d(
  "WAWebParseRichResponseMessageProto",
  [
    "WAWebBotBaseGating",
    "WAWebBotUnifiedResponseGating",
    "WAWebMsgType",
    "WAWebRichResponseParseUtils",
    "WAWebRichResponseValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = e.baseMessage,
        r = e.messageProtobuf,
        a = r.richResponseMessage;
      if (a != null) {
        if (!s(n, a))
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.INVALID_SENDER,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var i = a.messageType,
          l = a.submessages;
        if (i == null)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var c = o(
            "WAWebRichResponseParseUtils",
          ).generateFutureproofRichResponse(i, l),
          d = o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled()
            ? o("WAWebRichResponseParseUtils").parseRichResponse(c)
            : c,
          m = u(a, r.messageContextInfo, n.t)
            ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(
                a.unifiedResponse,
              )
            : null,
          p =
            ((t = a.unifiedResponse) == null ? void 0 : t.data) != null
              ? new Uint8Array(a.unifiedResponse.data)
              : null;
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.RichResponse,
            richResponse: d,
            unifiedResponse: m,
            unifiedResponseRawData: p,
          }),
          contextInfo: o(
            "WAWebBotBaseGating",
          ).isRichResponseForwardReceivingEnabled()
            ? a.contextInfo
            : void 0,
        };
      }
    }
    function s(e, t) {
      var n, r;
      if (
        e.from.isBot() ||
        ((n = e.id.participant) == null ? void 0 : n.isBot()) === !0 ||
        ((r = e.author) == null ? void 0 : r.isBot()) === !0
      )
        return !0;
      var a = t.contextInfo;
      return (
        (a == null ? void 0 : a.isForwarded) === !0 &&
        o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
      );
    }
    function u(e, t, n) {
      var r;
      return e.unifiedResponse == null
        ? !1
        : ((t == null ||
          (r = t.botMetadata) == null ||
          (r = r.imagineMetadata) == null
            ? void 0
            : r.imagineType) != null &&
            o(
              "WAWebBotUnifiedResponseGating",
            ).isUnifiedResponseImagineReceiverEnabled()) ||
            o("WAWebBotUnifiedResponseGating").isUnifiedResponseReceiverEnabled(
              n,
            );
    }
    l.default = e;
  },
  98,
);
