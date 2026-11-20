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
        a = e.msgContext,
        i = e.quotedMsgSender,
        l = r.richResponseMessage;
      if (l != null) {
        var c = a === "quoted" || a === "history_quoted" ? u(i, l) : s(n, l);
        if (!c)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.INVALID_SENDER,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var _ = d(l.contextInfo);
        if (
          _ &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
        )
          return m(n);
        var f = l.messageType,
          g = l.submessages;
        if (f == null)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var h = o(
            "WAWebRichResponseParseUtils",
          ).generateFutureproofRichResponse(f, g),
          y = o("WAWebRichResponseParseUtils").parseRichResponse(h),
          C = p(l, r.messageContextInfo, n.t)
            ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(
                l.unifiedResponse,
              )
            : null,
          b = o(
            "WAWebBotUnifiedResponseMutationUtils",
          ).parseUnifiedResponseMutationMediaList(r.messageContextInfo),
          v =
            b != null &&
            o(
              "WAWebBotUnifiedResponseGating",
            ).isUnifiedResponseMutationEnabled()
              ? b
              : void 0;
        if (
          _ &&
          o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(C) &&
          (v == null ||
            !o(
              "WAWebBotBaseGating",
            ).isRichResponseForwardMediaReceivingEnabled())
        )
          return m(n);
        var S =
          ((t = l.unifiedResponse) == null ? void 0 : t.data) != null
            ? new Uint8Array(l.unifiedResponse.data)
            : null;
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.RichResponse,
            richResponse: y,
            unifiedResponse: C,
            unifiedResponseRawData: S,
            unifiedResponseMutationMediaList: v,
          }),
          contextInfo: o(
            "WAWebBotBaseGating",
          ).isRichResponseForwardReceivingEnabled()
            ? l.contextInfo
            : void 0,
        };
      }
    }
    function s(e, t) {
      return c({
        botCandidates: [e.from, e.id.participant, e.author],
        aiHubCandidate: e.from,
        contextInfo: t.contextInfo,
      });
    }
    function u(e, t) {
      return c({
        botCandidates: [e],
        aiHubCandidate: e,
        contextInfo: t.contextInfo,
      });
    }
    function c(e) {
      var t = e.aiHubCandidate,
        n = e.botCandidates,
        r = e.contextInfo;
      return (
        n.some(function (e) {
          return (e == null ? void 0 : e.isBot()) === !0;
        }) ||
        (t == null ? void 0 : t.isAiHub()) === !0 ||
        d(r)
      );
    }
    function d(e) {
      var t;
      return (
        (e == null ? void 0 : e.isForwarded) === !0 &&
        (e == null || (t = e.forwardedAiBotMessageInfo) == null
          ? void 0
          : t.botJid) != null
      );
    }
    function m(e) {
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
    function p(e, t, n) {
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
