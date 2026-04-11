__d(
  "WAWebBizCreateBizStateChangeNotificationMsgsAction",
  [
    "Promise",
    "WALogger",
    "WAWebChatCollection",
    "WAWebContactSystemMsg",
    "WAWebHandleSingleMsgFactory",
    "WAWebLid1X1MigrationGating",
    "WAWebLidMigrationUtils",
    "WAWebPrivacyModeSystemMsg",
    "WAWebUserPrefsNotifications",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t, r, a, i) {
      i === void 0 && (i = !0);
      var l = p(r),
        c = p(a),
        _ = o("WAWebLidMigrationUtils").toLid(t),
        f;
      if (
        i &&
        o("WAWebLid1X1MigrationGating").Lid1X1MigrationUtils.isLidMigrated() &&
        _ != null
      ) {
        if (
          ((f = o("WAWebChatCollection").ChatCollection.getChatByAccountLid(_)),
          f == null)
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
        ((f = o("WAWebChatCollection").ChatCollection.get(t)), f == null)
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
      var g = f.id,
        h = [m(g, l, c), d(g, l, c)].filter(Boolean);
      return (
        h.map(function (e) {
          if (e != null)
            return o("WAWebHandleSingleMsgFactory").handleSingleMsg({
              chatId: g,
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
