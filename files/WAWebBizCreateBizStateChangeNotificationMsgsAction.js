__d(
  "WAWebBizCreateBizStateChangeNotificationMsgsAction",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgWorkerCompatible",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebPrivacyModeSystemMsg",
    "WAWebUserPrefsNotifications",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      var r = t.currentState,
        a = t.previousState,
        i = t.shouldRunMATonWid,
        l = i === void 0 ? !0 : i,
        c = t.wid,
        _ = p(a),
        f = p(r),
        g = o("WAWebLidMigrationUtils").toLid(c),
        h;
      if (
        l &&
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        g != null
      ) {
        if (
          ((h = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(g)),
          h == null)
        )
          return (
            o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[createBizStateChangeNotificationMsgs] no chat for lid",
                ])),
            ),
            (u || (u = n("Promise"))).resolve()
          );
      } else if (
        ((h = o("WAWebChatCollection").ChatCollection.get(c)), h == null)
      )
        return (
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[createBizStateChangeNotificationMsgs] Cannot find chat",
              ])),
          ),
          (u || (u = n("Promise"))).resolve()
        );
      var y = h.id,
        C = [m(y, _, f), d(y, _, f)].filter(Boolean);
      return (
        C.map(function (e) {
          if (e != null)
            return o("WAWebHandleSingleMsgWorkerCompatible").handleSingleMsg({
              chatId: y,
              newMsg: e,
              handleSingleMsgOrigin: "bizStateChangeNotification",
            });
        }),
        (u || (u = n("Promise"))).resolve()
      );
    }
    function d(e, t, n) {
      if (
        o("WAWebUserPrefsNotifications").getGlobalSecurityNotifications() ===
          !0 &&
        t === o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE &&
        n !== o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE
      )
        return o("WAWebContactSystemMsg").genEncryptNotificationMsg(
          e,
          "e2e_identity_unavailable",
        );
    }
    function m(e, t, n) {
      if (t !== n)
        switch (n) {
          case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.E2EE:
            return o("WAWebContactSystemMsg").genEncryptNotificationMsg(
              e,
              "encrypt_now",
            );
          case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.BSP:
            return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              "biz_privacy_mode_to_bsp",
            );
          case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.FB:
            return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              "biz_privacy_mode_to_fb",
            );
          case o("WAWebPrivacyModeSystemMsg").ReducedPrivacyMode.HOSTED_GROUP:
            return o("WAWebContactSystemMsg").genNonE2ENotificationMsg(
              e,
              "is_capi_hosted_group",
            );
        }
    }
    function p(e) {
      return o("WAWebPrivacyModeSystemMsg").getReducedPrivacyMode(
        e.isBusiness ? e.privacyMode : null,
      );
    }
    l.createBizStateChangeNotificationMsgs = c;
  },
  98,
);
