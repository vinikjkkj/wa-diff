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
    "gkx",
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
          var n = p(e, t);
          if (n.length !== 0) {
            var a = yield r("WAWebLidAwareContactsDB").bulkGet(
              n.map(function (e) {
                var t,
                  n,
                  r = e.msg;
                return (t = (n = r.from) == null ? void 0 : n.toJid()) != null
                  ? t
                  : "";
              }),
            );
            (o("WAWebABProps").getABPropConfigValue(
              "inapp_signup_m1_logging_enabled",
            ) &&
              (yield o(
                "WAWebInAppSignupInfoStore",
              ).ensureInAppSignupInfoHydrated()),
              n.forEach(function (e, t) {
                var n = e.chat,
                  r = e.msg;
                f(r, n, a[t]);
              }));
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      var n = e.map(function (e, n) {
          return { msg: e, chat: t[n] };
        }),
        o = n.filter(function (e) {
          var t = e.msg;
          return _(t);
        });
      return o.length === n.length || !r("gkx")("21649") ? n : o;
    }
    function _(e) {
      var t = e.from;
      return (
        !o("WAWebMsgGetters").getIsSentByMe(e) &&
        t != null &&
        !t.isGroup() &&
        !t.isStatus()
      );
    }
    function f(e, t, n) {
      var r, a;
      if (!(!_(e) || n == null)) {
        var i = n.isBusiness,
          l = n.isEnterprise;
        if (!(!i && !l)) {
          var s = l
              ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
              : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
            d =
              (t == null ? void 0 : t.archive) === !0
                ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
                : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
            m = c(e);
          new (o("WAWebQbmIncomingMessageWamEvent").QbmIncomingMessageWamEvent)(
            babelHelpers.extends(
              {
                contactType: s,
                chatsFolderType: d,
                isMuted:
                  (t == null ? void 0 : t.muteExpiration) != null &&
                  t.muteExpiration > 0,
                qbmFlag: m,
                qbmFlagStr: u[m],
                hsmTagStr:
                  (r = o("WAWebMsgGetters").getHsmTag(e)) != null ? r : "",
                messageTypeStr: e.type,
                notificationEnabled: o(
                  "WAWebUserPrefsNotifications",
                ).getGlobalNotifications(),
                isBizIntent: i,
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
    l.logQbmIncomingMessages = d;
  },
  98,
);
