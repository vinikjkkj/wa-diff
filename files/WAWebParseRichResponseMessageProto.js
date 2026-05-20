__d(
  "WAWebParseRichResponseMessageProto",
  [
    "WAWebBotBaseGating",
    "WAWebBotUnifiedResponseGating",
    "WAWebMsgType",
    "WAWebRichResponseParseUtils",
    "WAWebRichResponseValidationError",
    "WAWebUnifiedResponseUtils",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n,
        r = e.baseMessage,
        a = e.messageProtobuf,
        i = a.richResponseMessage;
      if (i != null) {
        if (!s(r, i))
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.INVALID_SENDER,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var l = ((t = i.contextInfo) == null ? void 0 : t.isForwarded) === !0;
        if (
          !(
            l &&
            !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
          )
        ) {
          var c = i.messageType,
            d = i.submessages;
          if (c == null)
            throw new (o(
              "WAWebRichResponseValidationError",
            ).RichResponseValidationError)(
              o("WAWebRichResponseValidationError")
                .RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE,
              o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
                .INVALID_MESSAGE,
            );
          var m = o(
              "WAWebRichResponseParseUtils",
            ).generateFutureproofRichResponse(c, d),
            p = o("WAWebRichResponseParseUtils").parseRichResponse(m),
            _ = u(i, a.messageContextInfo, r.t)
              ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(
                  i.unifiedResponse,
                )
              : null;
          if (
            !(
              l &&
              o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(_)
            )
          ) {
            var f =
              ((n = i.unifiedResponse) == null ? void 0 : n.data) != null
                ? new Uint8Array(i.unifiedResponse.data)
                : null;
            return {
              msgData: babelHelpers.extends({}, r, {
                type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
                kind: o("WAWebMsgType").MsgKind.RichResponse,
                richResponse: p,
                unifiedResponse: _,
                unifiedResponseRawData: f,
              }),
              contextInfo: o(
                "WAWebBotBaseGating",
              ).isRichResponseForwardReceivingEnabled()
                ? i.contextInfo
                : void 0,
            };
          }
        }
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
      var o = t.contextInfo;
      return (o == null ? void 0 : o.isForwarded) === !0;
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
