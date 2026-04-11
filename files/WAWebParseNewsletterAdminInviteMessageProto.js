__d(
  "WAWebParseNewsletterAdminInviteMessageProto",
  [
    "WATimeUtils",
    "WAWebDecodeJid",
    "WAWebMsgType",
    "WAWebNewsletterAdminInviteMessageValidationError",
    "WAWebNewsletterGatingUtils",
    "WAWebWamEnumE2eFailureReason",
    "WAWebWidFactory",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.baseMessage,
        n = e.messageProtobuf,
        r = n.newsletterAdminInviteMessage;
      if (r != null) {
        if (!o("WAWebNewsletterGatingUtils").isNewsletterCreationEnabled())
          return {
            msgData: babelHelpers.extends({}, t, {
              type: o("WAWebMsgType").MSG_TYPE.UNKNOWN,
              kind: o("WAWebMsgType").MsgKind.Unknown,
              futureproofType:
                o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE,
            }),
            contextInfo: r.contextInfo,
          };
        var a = r.caption,
          i = r.contextInfo,
          l = r.inviteExpiration,
          s = r.newsletterJid,
          u = r.newsletterName;
        if (s == null)
          throw new (o(
            "WAWebNewsletterAdminInviteMessageValidationError",
          ).NewsletterAdminInviteMessageValidationError)(
            o("WAWebNewsletterAdminInviteMessageValidationError")
              .NewsletterAdminInviteMessageValidationErrorCode
              .MISSING_NEWSLETTER_JID,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (u == null)
          throw new (o(
            "WAWebNewsletterAdminInviteMessageValidationError",
          ).NewsletterAdminInviteMessageValidationError)(
            o("WAWebNewsletterAdminInviteMessageValidationError")
              .NewsletterAdminInviteMessageValidationErrorCode
              .MISSING_NEWSLETTER_NAME,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        if (l == null)
          throw new (o(
            "WAWebNewsletterAdminInviteMessageValidationError",
          ).NewsletterAdminInviteMessageValidationError)(
            o("WAWebNewsletterAdminInviteMessageValidationError")
              .NewsletterAdminInviteMessageValidationErrorCode
              .MISSING_NEWSLETTER_JID,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        var c = o("WAWebDecodeJid").strictDecodeJid(s);
        if (c == null)
          throw new (o(
            "WAWebNewsletterAdminInviteMessageValidationError",
          ).NewsletterAdminInviteMessageValidationError)(
            o("WAWebNewsletterAdminInviteMessageValidationError")
              .NewsletterAdminInviteMessageValidationErrorCode
              .INVALID_NEWSLETTER_JID,
            o("WAWebWamEnumE2eFailureReason").E2E_FAILURE_REASON
              .INVALID_MESSAGE,
          );
        return {
          msgData: babelHelpers.extends({}, t, {
            type: o("WAWebMsgType").MSG_TYPE.NEWSLETTER_ADMIN_INVITE,
            kind: o("WAWebMsgType").MsgKind.NewsletterAdminInvite,
            newsletterAdminInviteInfo: {
              newsletterId: o("WAWebWidFactory").asNewsletterWidOrThrow(c),
              newsletterName: u,
              inviteExpiration: o("WATimeUtils").castLongIntToUnixTime(l),
              inviteMessage: a != null ? a : "",
              pictureThumbnail: null,
            },
          }),
          contextInfo: i,
        };
      }
    }
    l.default = e;
  },
  98,
);
