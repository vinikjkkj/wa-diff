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
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
            var t = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
              ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
              otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
                .CHAT_CTA,
              otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE.CLICK,
            });
            (yield f(t, e), t.commit());
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
            (r != null && (n.waDeviceId = r), yield f(n, e), n.commit());
          }
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = o("WAWebDBMessageSerialization").messageFromDbRow(e);
          if (o("WAWebMsgGetters").getIsAuthenticationMessage(t)) {
            var n = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
              ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
              otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
                .OTP_MESSAGE,
              otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE
                .MESSAGE_READ,
            });
            (yield f(n, t), n.commit());
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (o("WAWebMsgGetters").getIsAuthenticationMessage(e)) {
            var t = new (o("WAWebOtpRetrieverWamEvent").OtpRetrieverWamEvent)({
              ctaType: o("WAWebWamEnumCtaType").CTA_TYPE.COPY_CODE,
              otpEventSource: o("WAWebWamEnumOtpEventSource").OTP_EVENT_SOURCE
                .OTP_MESSAGE,
              otpEventType: o("WAWebWamEnumOtpEventType").OTP_EVENT_TYPE
                .MESSAGE_DELETED,
            });
            (yield f(t, e), t.commit());
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          ((e.otpSessionId = yield b(t)),
            (e.receiverCountryCode = String(
              o(
                "WAWebLinkDevicePhoneNumberEntryInputFormatUtils",
              ).getCountryCodeIso(
                o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE().user,
              ),
            )),
            h(e, t));
          var n = t.templateId;
          n != null && (e.templateId = n);
          var r = v(t);
          (r != null && (e.otpProductType = r), y(e), C(e, t));
        })),
        g.apply(this, arguments)
      );
    }
    function h(e, t) {
      var n = t.from.user,
        r = o("WAWebABProps").getABPropConfigValue("otp_lid_migration_enabled");
      if (r && n != null) {
        var a = o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated(),
          i = a ? o("WAWebLidMigrationUtils").toLid(t.from) : t.from;
        e.businessLidOrJid = i ? i.toString() : n;
        return;
      }
      n != null && (e.businessPhoneNumber = Number(n));
    }
    function y(e) {
      ((e.isKeepChatsArchivedEnabled = o(
        "WAWebSettingsGetters",
      ).getShowArchiveV2(r("WAWebSettingsModel"))),
        (e.isNotificationEnabled = o(
          "WAWebUserPrefsNotifications",
        ).getGlobalNotifications()));
    }
    function C(e, t) {
      var n = o("WAWebFrontendMsgGetters").getMaybeChat(t);
      n != null &&
        ((e.chatsFolderType = n.archive
          ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
          : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX),
        (e.isMessageNotificationEnabled = !o("WAWebMuteGetters").getIsMuted(
          n.mute,
        )));
    }
    function b(e) {
      return o("WACryptoSha256").sha256Str(e.id.id);
    }
    function v(e) {
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
      (l.logOTPMessageReceived = u),
      (l.logOTPMessageRead = d),
      (l.logOTPMessageDeleted = p));
  },
  98,
);
