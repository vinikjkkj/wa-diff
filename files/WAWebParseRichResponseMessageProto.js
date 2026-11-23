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
        var c = a === "quoted" || a === "history_quoted",
          _ = c ? u(i, l) : s(n, l);
        if (!_)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.INVALID_SENDER,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var f = d(l.contextInfo);
        if (
          f &&
          !o("WAWebBotBaseGating").isRichResponseForwardReceivingEnabled()
        )
          return m(n);
        var g = l.messageType,
          h = l.submessages;
        if (g == null)
          throw new (o(
            "WAWebRichResponseValidationError",
          ).RichResponseValidationError)(
            o("WAWebRichResponseValidationError")
              .RichResponseValidationErrorCode.MISSING_MESSAGE_TYPE,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var y = o(
            "WAWebRichResponseParseUtils",
          ).generateFutureproofRichResponse(g, h),
          C = o("WAWebRichResponseParseUtils").parseRichResponse(y),
          b = p(l, r.messageContextInfo, n.t, c)
            ? o("WAWebRichResponseParseUtils").parseUnifiedResponse(
                l.unifiedResponse,
              )
            : null,
          v = o(
            "WAWebBotUnifiedResponseMutationUtils",
          ).parseUnifiedResponseMutationMediaList(r.messageContextInfo),
          S =
            v != null &&
            o(
              "WAWebBotUnifiedResponseGating",
            ).isUnifiedResponseMutationEnabled()
              ? v
              : void 0;
        if (
          !c &&
          f &&
          o("WAWebUnifiedResponseUtils").unifiedResponseHasMediaContent(b) &&
          (S == null ||
            !o(
              "WAWebBotBaseGating",
            ).isRichResponseForwardMediaReceivingEnabled())
        )
          return m(n);
        var R =
          ((t = l.unifiedResponse) == null ? void 0 : t.data) != null
            ? new Uint8Array(l.unifiedResponse.data)
            : null;
        return {
          msgData: babelHelpers.extends({}, n, {
            type: o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE,
            kind: o("WAWebMsgType").MsgKind.RichResponse,
            richResponse: C,
            unifiedResponse: b,
            unifiedResponseRawData: R,
            unifiedResponseMutationMediaList: S,
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
    function p(e, t, n, r) {
      var a;
      return e.unifiedResponse == null
        ? !1
        : r
          ? o(
              "WAWebBotUnifiedResponseGating",
            ).isUnifiedResponseImagineReceiverEnabled()
          : ((t == null ||
            (a = t.botMetadata) == null ||
            (a = a.imagineMetadata) == null
              ? void 0
              : a.imagineType) != null &&
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
