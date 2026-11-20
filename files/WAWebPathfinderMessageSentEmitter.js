__d(
  "WAWebPathfinderMessageSentEmitter",
  [
    "WALogger",
    "WAWebMessageAssociation.flow",
    "WAWebMsgType",
    "WAWebPathfinderCustomEvent",
    "WAWebPathfinderTrackingId",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      try {
        if (!f(t)) return;
        o("WAWebPathfinderCustomEvent").recordPathfinderCustomEvent({
          eventName: "CONTENT_CHANGED",
          targetType: "MessageSend",
          targetTrackingId: o("WAWebPathfinderTrackingId")
            .PATHFINDER_TRACKING_ID.MESSAGE_SEND_OUTGOING,
          customEventType: 46,
          customMetadata: d(t),
          capturedAt: t.capturedAt,
        });
      } catch (t) {
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[pathfinder] message_sent not emitted",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("pathfinder-message-sent-record-failed");
      }
    }
    function d(e) {
      var t = String(e.mediaType),
        n = e.sendMethod;
      return n != null ? { media_type: t, send_method: n } : { media_type: t };
    }
    var m = "share_phone_number",
      p = new Set([
        (s = o("WAWebMsgType")).MSG_TYPE.ALBUM,
        s.MSG_TYPE.AUDIO,
        s.MSG_TYPE.BUTTONS_RESPONSE,
        s.MSG_TYPE.CHAT,
        s.MSG_TYPE.COMMENT,
        s.MSG_TYPE.DOCUMENT,
        s.MSG_TYPE.EVENT_CREATION,
        s.MSG_TYPE.GROUPS_V4_INVITE,
        s.MSG_TYPE.IMAGE,
        s.MSG_TYPE.INSTANT_IMAGE,
        s.MSG_TYPE.INTERACTIVE,
        s.MSG_TYPE.INTERACTIVE_RESPONSE,
        s.MSG_TYPE.LIST,
        s.MSG_TYPE.LIST_RESPONSE,
        s.MSG_TYPE.LOCATION,
        s.MSG_TYPE.MULTI_VCARD,
        s.MSG_TYPE.MUSIC,
        s.MSG_TYPE.NEWSLETTER_ADMIN_INVITE,
        s.MSG_TYPE.NEWSLETTER_FOLLOWER_INVITE,
        s.MSG_TYPE.ORDER,
        s.MSG_TYPE.POLL_CREATION,
        s.MSG_TYPE.POLL_RESULT_SNAPSHOT,
        s.MSG_TYPE.PRODUCT,
        s.MSG_TYPE.PTT,
        s.MSG_TYPE.PTV,
        s.MSG_TYPE.REQUEST_PHONE_NUMBER,
        s.MSG_TYPE.RICH_RESPONSE,
        s.MSG_TYPE.SHARABLE_EVENT_INVITE,
        s.MSG_TYPE.STICKER,
        s.MSG_TYPE.STICKER_PACK,
        s.MSG_TYPE.TEMPLATE_BUTTON_REPLY,
        s.MSG_TYPE.VCARD,
        s.MSG_TYPE.VIDEO,
      ]),
      _ = new Set([
        (u = o("WAWebMessageAssociation.flow")).MessageAssociationType
          .HD_VIDEO_DUAL_UPLOAD,
        u.MessageAssociationType.HD_IMAGE_DUAL_UPLOAD,
        u.MessageAssociationType.HEVC_VIDEO_DUAL_UPLOAD,
        u.MessageAssociationType.AV1_VIDEO_DUAL_UPLOAD,
        u.MessageAssociationType.STREAMED_HD_VIDEO_DUAL_UPLOAD,
        u.MessageAssociationType.ORIGINAL_VIDEO_DUAL_UPLOAD,
        u.MessageAssociationType.ORIGINAL_IMAGE_DUAL_UPLOAD,
        u.MessageAssociationType.MEDIA_POLL,
        u.MessageAssociationType.POLL_ADD_OPTION,
      ]);
    function f(e) {
      var t;
      return (
        e.chatKind !== "other" &&
        g(e) &&
        e.subtype !== "message_edit" &&
        ((t = e.pairedMediaType) == null ? void 0 : t.endsWith("_CHILD")) !==
          !0 &&
        (e.associationType == null || !_.has(e.associationType)) &&
        !e.hiddenPayment
      );
    }
    function g(e) {
      return (
        p.has(e.type) ||
        (e.type === o("WAWebMsgType").MSG_TYPE.PROTOCOL && e.subtype === m)
      );
    }
    l.emitPathfinderMessageSent = c;
  },
  98,
);
