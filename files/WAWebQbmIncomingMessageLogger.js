__d(
  "WAWebQbmIncomingMessageLogger",
  [
    "WAWebABProps",
    "WAWebLidAwareContactsDB",
    "WAWebMsgGetters",
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
          )
            for (
              var n = e.map(function (e) {
                  return e.from != null ? e.from.toJid() : "";
                }),
                a = yield r("WAWebLidAwareContactsDB").bulkGet(n),
                i = 0;
              i < e.length;
              i++
            )
              p(e[i], t[i], a[i]);
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n) {
      var r;
      if (!o("WAWebMsgGetters").getIsSentByMe(e)) {
        var a = e.from;
        if (!(a == null || a.isGroup() || a.isStatus() || n == null)) {
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
            new (o(
              "WAWebQbmIncomingMessageWamEvent",
            ).QbmIncomingMessageWamEvent)({
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
            }).commit();
          }
        }
      }
    }
    l.logQbmIncomingMessages = d;
  },
  98,
);
