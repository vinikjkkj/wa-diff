__d(
  "WAWebOTPLoggingHelper",
  [
    "WACryptoSha256",
    "WAWebABProps",
    "WAWebDBMessageSerialization",
    "WAWebFrontendMsgGetters",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
    "WAWebMsgGetters",
    "WAWebMuteGetters",
    "WAWebOtpRetrieverWamEvent",
    "WAWebSettingsGetters",
    "WAWebSettingsModel",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumCtaType",
    "WAWebWamEnumOtpEventSource",
    "WAWebWamEnumOtpEventType",
    "WAWebWamEnumOtpProductType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
        var t = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
          ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
          otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
            .CHAT_CTA,
          otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.CLICK,
        });
        (await d(t, e), t.commit());
      }
    }
    async function s(e) {
      var t;
      if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
        var n = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
            ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
            otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
              .OTP_MESSAGE,
            otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE
              .MESSAGE_RECEIVED,
          }),
          r =
            (t = o("WAWebUserPrefsMeUser").getMaybeMeDevicePn()) == null
              ? void 0
              : t.getDeviceId();
        (r != null && (n.waDeviceId = r), await d(n, e), n.commit());
      }
    }
    async function u(e) {
      var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
      if (o("WAWebMsgGetters").getIsAuthenticationMessage(t)) {
        var n = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
          ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
          otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
            .OTP_MESSAGE,
          otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE
            .MESSAGE_READ,
        });
        (await d(n, t), n.commit());
      }
    }
    async function c(e) {
      if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
        var t = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
          ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
          otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
            .OTP_MESSAGE,
          otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE
            .MESSAGE_DELETED,
        });
        (await d(t, e), t.commit());
      }
    }
    async function d(e, t) {
      ((e.otpSessionId = await f(t)),
        (e.receiverCountryCode = String(
          o(
            "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
          ).getCountryCodeIso(
            o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
          ),
        )),
        m(e, t));
      var n = t.templateId;
      n != null && (e.templateId = n);
      var r = g(t);
      (r != null && (e.otpProductType = r), p(e), _(e, t));
    }
    function m(e, t) {
      var n = t.from.user;
      if (n != null) {
        var r = o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated(),
          a = r ? o("WAWebLidMigrationUtils").toLid(t.from) : t.from;
        e.businessLidOrJid = a ? a.toString() : n;
      }
    }
    function p(e) {
      ((e.isKeepChatsArchivedEnabled = o(
        "WAWebSettingsGetters",
      ).getShowArchiveV2(r("WAWebSettingsModel"))),
        (e.isNotificationEnabled = o(
          "WAWebUserPrefsNotifications",
        ).getGlobalNotifications()));
    }
    function _(e, t) {
      var n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
      n != null &&
        ((e.chatsFolderType = n.archive
          ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
          : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX),
        (e.isMessageNotificationEnabled = !o("WAWebMuteGetters").getIsMuted(
          n.mute,
        )));
    }
    function f(e) {
      return o("WACryptoSha256").sha256Str(e.id.id);
    }
    function g(e) {
      var t = e.hydratedButtons;
      if (t == null || t.length === 0) return null;
      var n = o("WAWebABProps").getABPropConfigValue(
          "unified_otp_copy_code_url",
        ),
        r = o("WAWebABProps").getABPropConfigValue("unified_otp_retriever_url");
      for (var a of t) {
        var i,
          l = (i = a.urlButton) == null ? void 0 : i.url;
        if (l != null) {
          if (l.startsWith(n))
            return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.COPY_CODE;
          if (l.startsWith(r)) {
            var s,
              u = (s = new URL(l)) == null ? void 0 : s.searchParams,
              c = u.get("otp_type");
            if (c != null)
              switch (c) {
                case "COPY_CODE":
                  return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE
                    .COPY_CODE;
                case "ONE_TAP":
                  return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE
                    .ONE_TAP;
                case "ZERO_TAP":
                  return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE
                    .ZERO_TAP;
                default:
                  continue;
              }
            else
              return o("WAWebWamEnumOtpProductType").OTP_PRODUCT_TYPE.ONE_TAP;
          }
        }
      }
      return null;
    }
    ((l.logOTPButtonClick = e),
      (l.logOTPMessageReceived = s),
      (l.logOTPMessageRead = u),
      (l.logOTPMessageDeleted = c));
  },
  98,
);
