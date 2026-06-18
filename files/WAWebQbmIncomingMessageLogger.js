__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "WAWebABProps",
    "WAWebInAppSignupInfoStore",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebQBMLoggerBuilder",
    "WAWebQbmIncomingMessageWamEvent",
    "WAWebUserPrefsNotifications",
    "WAWebWamEnumChatsFolderType",
    "WAWebWamEnumContactType",
    "WAWebWamEnumQbmFlag",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u =
        ((e = {}),
        (e[(s = o("WAWebWamEnumQbmFlag")).QBM_FLAG.OTHER] = "OTHER"),
        (e[s.QBM_FLAG.TRANSACTIONAL] = "TRANSACTIONAL"),
        (e[s.QBM_FLAG.PROMOTIONAL] = "NON_TRANSACTIONAL"),
        (e[s.QBM_FLAG.OTP] = "OTP"),
        (e[s.QBM_FLAG.MARKETING_MESSAGE_SMB] = "MARKETING_MESSAGE_SMB"),
        e);
    function c(e) {
      var t = o("WAWebMsgGetters").getBizSource(e);
      return o("WAWebMsgGetters").isBizSourceFromMarketingMessage(t)
        ? o("WAWebWamEnumQbmFlag").QBM_FLAG.MARKETING_MESSAGE_SMB
        : (function (e) {
            return e === "UTILITY"
              ? o("WAWebWamEnumQbmFlag").QBM_FLAG.TRANSACTIONAL
              : e === "MARKETING"
                ? o("WAWebWamEnumQbmFlag").QBM_FLAG.PROMOTIONAL
                : e === "AUTHENTICATION"
                  ? o("WAWebWamEnumQbmFlag").QBM_FLAG.OTP
                  : o("WAWebWamEnumQbmFlag").QBM_FLAG.OTHER;
          })(o("WAWebMsgGetters").getHsmTag(e));
    }
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (
            !(
              e.length === 0 ||
              !o("WAWebABProps").getABPropConfigValue(
                "enable_logging_qbm_incoming_message",
              )
            )
          ) {
            var n = e.map(function (e) {
                return e.from != null ? e.from.toJid() : "";
              }),
              a = yield r("WAWebLidAwareContactsDB").bulkGet(n);
            o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated());
            for (var i = 0; i < e.length; i++) p(e[i], t[i], a[i]);
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      var r, a;
      if (!o("WAWebMsgGetters").getIsSentByMe(e)) {
        var i = e.from;
        if (!(i == null || i.isGroup() || i.isStatus() || n == null)) {
          var l = n.isBusiness,
            s = n.isEnterprise;
          if (!(!l && !s)) {
            var d = s
                ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
                : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
              m =
                (t == null ? void 0 : t.archive) === !0
                  ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                  : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
              p = c(e);
            new (o(
              "WAWebQbmIncomingMessageWamEvent",
            ).QbmIncomingMessageWamEvent)(
              babelHelpers.extends(
                {
                  contactType: d,
                  chatsFolderType: m,
                  isMuted:
                    (t == null ? void 0 : t.muteExpiration) != null &&
                    t.muteExpiration > 0,
                  qbmFlag: p,
                  qbmFlagStr: u[p],
                  hsmTagStr:
                    (r = o("WAWebMsgGetters").getHsmTag(e)) != null ? r : "",
                  messageTypeStr: e.type,
                  notificationEnabled: o(
                    "WAWebUserPrefsNotifications",
                  ).getGlobalNotifications(),
                  isBizIntent: l,
                  isInsubContact: n.isAddressBookContact === 1,
                },
                o("WAWebQBMLoggerBuilder").getIasQbmFields(
                  (a = t == null ? void 0 : t.id) != null ? a : null,
                ),
              ),
            ).commit();
          }
        }
      }
    }
    l.logQbmIncomingMessages = d;
  },
  98,
);
