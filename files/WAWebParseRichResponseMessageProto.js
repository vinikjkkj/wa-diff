__d(
  "WAWebParseRichResponseMessageProto",
  [
    "WAWebBotBaseGating",
    "WAWebBotUnifiedResponseGating",
    "WAWebBotUnifiedResponseMutationUtils",
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
        var i = u(a.contextInfo);
        if (
          i &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
        )
          return c(n);
        var l = a.messageType,
          m = a.submessages;
        if (l == null)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var p = o(
            "WAWebRichResponseParseUtils",
          ).generateFutureproofRichResponse(l, m),
          _ = o("WAWebRichResponseParseUtils").parseRichResponse(p),
          f = d(a, r.messageContextInfo, n.t)
            ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(
                a.unifiedResponse,
              )
            : null,
          g = o(
            "WAWebBotUnifiedResponseMutationUtils",
          ).parseUnifiedResponseMutationMediaList(r.messageContextInfo),
          h =
            g != null &&
            o(
              "WAWebBotUnifiedResponseGating",
            ).isUnifiedResponseMutationEnabled()
              ? g
              : void 0;
        if (
          i &&
          o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(f) &&
          (h == null ||
            !o(
              "WAWebBotBaseGating",
            ).isRichResponseForwardMediaReceivingEnabled())
        )
          return c(n);
        var y =
          ((t = a.unifiedResponse) == null ? void 0 : t.data) != null
            ? new Uint8Array(a.unifiedResponse.data)
            : null;
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.RichResponse,
            richResponse: _,
            unifiedResponse: f,
            unifiedResponseRawData: y,
            unifiedResponseMutationMediaList: h,
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
      var o = t.contextInfo;
      return u(o);
    }
    function u(e) {
      var t;
      return (
        (e == null ? void 0 : e.isForwarded) === !0 &&
        (e == null || (t = e.forwardedAiBotMessageInfo) == null
          ? void 0
          : t.botJid) != null
      );
    }
    function c(e) {
      return {
        msgData: babelHelpers.extends({}, e, {
          type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
          kind: o("WAWebMsgType").MsgKind.Unknown,
          subtype: void 0,
          futureproofType: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
        }),
        contextInfo: null,
      };
    }
    function d(e, t, n) {
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
