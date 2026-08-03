__d(
  "WAWebAdvHostedAccountTypeSystemMsg",
  [
    "WATimeUtils",
    "WAWebBizCoexGatingUtils",
    "WAWebMsgKey",
    "WAWebMsgType",
    "WAWebProtobufsAdv.pb",
    "WAWebUserPrefsMeUser",
    "WAWebViewMode.flow",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.accountTypeChangedUser,
        n = e.chatId,
        a = e.newAdvAccountType,
        i = e.useEncryptNowSubtype,
        l = i === void 0 ? !1 : i;
      if (!n.isUser()) return null;
      var s = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        u = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
          remote: n,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return a === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
        ? {
            id: u,
            t: o("WATimeUtils").unixTime(),
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: l ? "encrypt_now" : "encrypt",
            from: n,
            to: s,
          }
        : a === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
          ? {
              id: u,
              t: o("WATimeUtils").unixTime(),
              type: "notification_template",
              kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: "biz_account_type_changed_to_hosted",
              from: n,
              to: s,
            }
          : null;
    }
    function s(e, t) {
      if (!e.isUser()) return null;
      var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        a = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
          remote: e,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return {
        id: a,
        t: o("WATimeUtils").unixTime(),
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: "biz_me_account_type_is_hosted",
        from: e,
        to: n,
      };
    }
    function u(e, t) {
      if (!e.isUser()) return null;
      var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        a = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
          remote: e,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return {
        id: a,
        t: o("WATimeUtils").unixTime(),
        type: "notification_template",
        kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
        viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
        subtype: "biz_account_type_is_hosted",
        from: e,
        to: n,
      };
    }
    function c(e, t) {
      if (
        o(
          "WAWebBizCoexGatingUtils",
        ).smbHostedLazySystemMsgInsertInHistorySyncEnabled() &&
        e.isUser()
      ) {
        var n = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
          a = new (r("WAWebMsgKey"))({
            fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
            remote: e,
            id: r("WAWebMsgKey").newId_DEPRECATED(),
          });
        return {
          id: a,
          t: o("WATimeUtils").unixTime(),
          type: "notification_template",
          kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
          viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
          subtype: "biz_me_account_type_is_hosted_transition",
          from: e,
          to: n,
        };
      }
      return null;
    }
    ((l.genAdvAccountTypeChangeNotificationMsg = e),
      (l.genAdvMeAccountIsHostedNotificationMsg = s),
      (l.genAdvAccountTypeInitialSysMsg = u),
      (l.genAdvAccountTypeSelfTransitionToCoexNotificationMsg = c));
  },
  98,
);
