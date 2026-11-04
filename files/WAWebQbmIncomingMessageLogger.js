__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "WAWebABProps",
    "WAWebInAppSignupInfoStore",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
    "WAWebP2PPillsThreadOriginStore",
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
              ),
              i = yield o(
                "WAWebP2PPillsThreadOriginStore",
              ).getPillQbmFieldsForThreads(
                n.map(function (e, t) {
                  var n = e.chat;
                  return g(a[t]) ? (n == null ? void 0 : n.accountLid) : null;
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
                f(r, n, a[t], i[t]);
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
    function f(e, t, n, r) {
      var a, i;
      if (!(!_(e) || n == null) && g(n)) {
        var l = n.isBusiness,
          s = n.isEnterprise,
          d = s
            ? o("WAWebWamEnumContactType").CONTACT_TYPE.ENTERPRISE
            : o("WAWebWamEnumContactType").CONTACT_TYPE.SMB,
          m =
            (t == null ? void 0 : t.archive) === !0
              ? o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.ARCHIVED
              : o("WAWebWamEnumChatsFolderType").CHATS_FOLDER_TYPE.INBOX,
          p = c(e);
        new (o("WAWebQbmIncomingMessageWamEvent").QbmIncomingMessageWamEvent)(
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
                (a = o("WAWebMsgGetters").getHsmTag(e)) != null ? a : "",
              messageTypeStr: e.type,
              notificationEnabled: o(
                "WAWebUserPrefsNotifications",
              ).getGlobalNotifications(),
              isBizIntent: l,
              isInsubContact: n.isAddressBookContact === 1,
            },
            o("WAWebQBMLoggerBuilder").getIasQbmFields(
              (i = t == null ? void 0 : t.id) != null ? i : null,
            ),
            r,
          ),
        ).commit();
      }
    }
    function g(e) {
      return e != null && (e.isBusiness || e.isEnterprise);
    }
    l.logQbmIncomingMessages = d;
  },
  98,
);
