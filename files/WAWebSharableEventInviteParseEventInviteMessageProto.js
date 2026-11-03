__d(
  "WAWebSharableEventInviteParseEventInviteMessageProto",
  [
    "WALongInt",
    "WAWebMsgType",
    "WAWebSharableEventGatingUtils",
    "WAWebSharableEventInviteCoerceTimestampSeconds",
    "WAWebSharableEventInviteStatus",
    "WAWebSharableEventInviteValidationError",
    "WAWebWamEnumE2eFailureReason",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n,
        a = e.baseMessage,
        i = e.messageProtobuf,
        l = i.eventInviteMessage;
      if (l == null) return null;
      if (
        !o(
          "WAWebSharableEventGatingUtils",
        ).shouldRenderSharableEventInviteBubble()
      ) {
        var s,
          u = (s = l.contextInfo) != null ? s : null;
        return o(
          "WAWebSharableEventGatingUtils",
        ).isSharableEventInviteReceiveEnabled()
          ? {
              msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
                futureproofType:
                  o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
              }),
              contextInfo: u,
            }
          : {
              msgData: babelHelpers.extends({}, a, {
                type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
                kind: o("WAWebMsgType").MsgKind.Unknown,
              }),
              contextInfo: u,
            };
      }
      var c = l.callLink,
        d = l.caption,
        m = l.contextInfo,
        p = l.coverImageHandle,
        _ = l.endTime,
        f = l.eventId,
        g = l.eventTitle,
        h = l.isCanceled,
        y = l.jpegThumbnail,
        C = l.lastUpdatedTsUsec,
        b = l.locationName,
        v = l.startTime,
        S = l.status;
      if (f == null || f === "")
        throw new (o(
          "WAWebSharableEventInviteValidationError",
        ).SharableEventInviteValidationError)(
          o("WAWebSharableEventInviteValidationError")
            .SharableEventInviteValidationErrorCode
            .SHARABLE_EVENT_INVITE_MISSING_EVENT_ID,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      if (g == null || g === "")
        throw new (o(
          "WAWebSharableEventInviteValidationError",
        ).SharableEventInviteValidationError)(
          o("WAWebSharableEventInviteValidationError")
            .SharableEventInviteValidationErrorCode
            .SHARABLE_EVENT_INVITE_MISSING_EVENT_TITLE,
          o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON.INVALID_MESSAGE,
        );
      var R = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          o("WALongInt").maybeNumberOrThrowIfTooLarge(v),
        ),
        L = r("WAWebSharableEventInviteCoerceTimestampSeconds")(
          o("WALongInt").maybeNumberOrThrowIfTooLarge(_),
        ),
        E =
          (t = o("WAWebSharableEventInviteStatus").toSharableEventInviteStatus(
            S,
          )) != null
            ? t
            : h === !0
              ? o("WAWebSharableEventInviteStatus").SharableEventInviteStatus
                  .Canceled
              : null,
        k = babelHelpers.extends({}, a, {
          type: o("WAWebMsgType").MSG_TYPE.SHARABLE_EVENT_INVITE,
          kind: o("WAWebMsgType").MsgKind.SharableEventInvite,
          sharableEventInviteId: f,
          sharableEventInviteTitle: g,
          sharableEventInviteStartTime: R != null ? R : void 0,
          sharableEventInviteEndTime: L != null ? L : void 0,
          sharableEventInviteCaption: d != null ? d : void 0,
          sharableEventInviteIsCanceled: h != null ? h : void 0,
          sharableEventInviteJpegThumbnail: y != null ? y : void 0,
          sharableEventInviteCallLink: c != null ? c : void 0,
          sharableEventInviteStatus: E != null ? E : void 0,
          sharableEventInviteLocationName: b != null ? b : void 0,
          sharableEventInviteCoverImageHandle: p != null ? p : void 0,
          sharableEventInviteLastUpdatedTsUsec:
            (n = o("WALongInt").maybeNumberOrThrowIfTooLarge(C)) != null
              ? n
              : void 0,
        });
      return { msgData: k, contextInfo: m };
    }
    l.default = e;
  },
  98,
);
