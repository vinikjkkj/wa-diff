__d(
  "WAWebSharableEventInviteParseEventInviteMessageProto",
  [
    "WALongInt",
    "WAWebMsgType",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebSharableEventInviteValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        a = n.eventInviteMessage;
      if (a == null) return null;
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).shouldRenderSharableEventInviteBubble()
      ) {
        var i,
          l = (i = a.contextInfo) != null ? i : null;
        return o(
          "WAWebSharableEventGatingUtils",
        ).isSharableEventInviteReceiveEnabled()
          ? {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType:
                  o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
              }),
              contextInfo: l,
            }
          : {
              msgData: babelHelpers.extends({}, t, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
              }),
              contextInfo: l,
            };
      }
      var s = a.callLink,
        u = a.caption,
        c = a.contextInfo,
        d = a.endTime,
        m = a.eventId,
        p = a.eventTitle,
        _ = a.isCanceled,
        f = a.jpegThumbnail,
        g = a.startTime;
      if (m == null || m === "")
        throw new (o(
          "WAWebSharableEventInviteValidationError",
        ).SharableEventInviteValidationError)(
          o("WAWebSharableEventInviteValidationError")
            .SharableEventInviteValidationErrorCode
            .SHARABLE_EVENT_INVITE_MISSING_EVENT_ID,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (p == null || p === "")
        throw new (o(
          "WAWebSharableEventInviteValidationError",
        ).SharableEventInviteValidationError)(
          o("WAWebSharableEventInviteValidationError")
            .SharableEventInviteValidationErrorCode
            .SHARABLE_EVENT_INVITE_MISSING_EVENT_TITLE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var h = o("WALongInt").maybeNumberOrThrowIfTooLarge(g);
      if (h == null)
        throw new (o(
          "WAWebSharableEventInviteValidationError",
        ).SharableEventInviteValidationError)(
          o("WAWebSharableEventInviteValidationError")
            .SharableEventInviteValidationErrorCode
            .SHARABLE_EVENT_INVITE_MISSING_START_TIME,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var y = r("WAWebSharableEventInviteCoerceTimestampSeconds")(h),
        C = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          o("WALongInt").maybeNumberOrThrowIfTooLarge(d),
        ),
        b = babelHelpers.extends({}, t, {
          type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
          kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
          sharableEventInviteId: m,
          sharableEventInviteTitle: p,
          sharableEventInviteStartTime: y != null ? y : void 0,
          sharableEventInviteEndTime: C != null ? C : void 0,
          sharableEventInviteCaption: u != null ? u : void 0,
          sharableEventInviteIsCanceled: _ != null ? _ : void 0,
          sharableEventInviteJpegThumbnail: f != null ? f : void 0,
          sharableEventInviteCallLink: s != null ? s : void 0,
        });
      return { msgData: b, contextInfo: c };
    }
    l.default = e;
  },
  98,
);
