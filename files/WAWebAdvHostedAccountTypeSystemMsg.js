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
    function e(e, t, n, a) {
      if ((a === void 0 && (a = !1), !e.isUser())) return null;
      var i = o("WAWebUserPrefsMeUser").getMeLidUserOrThrow(),
        l = new (r("WAWebMsgKey"))({
          fromMe: o("WAWebUserPrefsMeUser").isMeAccount(t),
          remote: e,
          id: r("WAWebMsgKey").newId_DEPRECATED(),
        });
      return n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.E2EE
        ? {
            id: l,
            t: o("WATimeUtils").unixTime(),
            type: "e2e_notification",
            kind: o("WAWebMsgType").MsgKind.E2eNotification,
            viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
            subtype: a ? "encrypt_now" : "encrypt",
            from: e,
            to: i,
          }
        : n === o("WAWebProtobufsAdv.pb").ADVEncryptionType.HOSTED
          ? {
              id: l,
              t: o("WATimeUtils").unixTime(),
              type: "notification_template",
              kind: o("WAWebMsgType").MsgKind.NotificationTemplate,
              viewMode: o("WAWebViewMode.flow").ViewModeType.VISIBLE,
              subtype: "biz_account_type_changed_to_hosted",
              from: e,
              to: i,
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
