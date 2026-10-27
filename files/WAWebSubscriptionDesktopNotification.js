__d(
  "WAWebSubscriptionDesktopNotification",
  [
    "fbt",
    "Promise",
    "WAWebActiveSubscriptionProductTypes",
    "WAWebBaseNotification",
    "WAWebBizAiMetaOneDialogRequestStore",
    "WAWebEligibleSubscriptionProductTypes",
    "WAWebNotificationController",
    "WAWebNotificationIconUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = "meta-one-subscription",
      c = "management",
      d = "MP4B",
      m = (function (t) {
        function a(e) {
          var n;
          return (
            (n = t.call(this) || this),
            (n.$WASubscriptionDesktopNotification$p_2 = r(
              "WAWebPonyfillsCryptoRandomUUID",
            )()),
            (n.$WASubscriptionDesktopNotification$p_1 = e),
            n
          );
        }
        babelHelpers.inheritsLoose(a, t);
        var i = a.prototype;
        return (
          (i.buildKey = function () {
            return (
              "meta-one-subscription:" +
              this.$WASubscriptionDesktopNotification$p_1.stanzaId
            );
          }),
          (i.getChatKind = function () {
            return null;
          }),
          (i.getIcon = function () {
            return (e || (e = n("Promise"))).resolve(
              o("WAWebNotificationIconUtils").WHATSAPP_BUSINESS_DEFAULT_ICON,
            );
          }),
          (i.shouldPlaySound = function () {
            return (
              this.shouldShowBanner() && t.prototype.shouldPlaySound.call(this)
            );
          }),
          (i.getBannerOptions = function () {
            var e = this,
              t = this.$WASubscriptionDesktopNotification$p_1,
              n = t.link,
              r = t.text,
              a = t.title,
              i = _(n),
              l = f(n);
            return {
              wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              tag: u,
              title: a != null ? a : s._(/*BTDS*/ "Meta One").toString(),
              body: r,
              doNotOpenChat: !0,
              onClick: function () {
                (y(l, e.$WASubscriptionDesktopNotification$p_2),
                  i != null &&
                    o(
                      "WAWebBizAiMetaOneDialogRequestStore",
                    ).requestMetaOneDialog(
                      i,
                      e.$WASubscriptionDesktopNotification$p_2,
                    ));
              },
            };
          }),
          a
        );
      })(o("WAWebBaseNotification").WABaseNotification);
    function p(e) {
      o(
        "WAWebNotificationController",
      ).WANotificationController.triggerNotification(new m(e));
    }
    function _(e) {
      var t = g(e);
      if (t == null) return null;
      try {
        var n;
        return (n = t.get("meta_one_destination")) != null
          ? n
          : h(t.get("deeplink_params"))
            ? c
            : null;
      } catch (e) {
        return null;
      }
    }
    function f(e) {
      var t;
      return (function (e) {
        if (e === "wa_abandoned_payment_notif")
          return o("WAWebWamEnumWsuaScreen").WSUA_SCREEN
            .BIZ_SUBS_PAYMENT_ABANDONMENT_NOTIF;
        if (e === "wa_churned_user_reminder_notif")
          return o("WAWebWamEnumWsuaScreen").WSUA_SCREEN
            .BIZ_SUBS_CHURNED_USER_REMINDER_NOTIF;
        if (e === "wa_subscription_expiration_reminder")
          return o("WAWebWamEnumWsuaScreen").WSUA_SCREEN
            .BIZ_SUBS_EXPIRATION_REMINDER_NOTIF;
      })((t = g(e)) == null ? void 0 : t.get("entrypoint"));
    }
    function g(e) {
      if (e == null) return null;
      try {
        return new URL(e).searchParams;
      } catch (e) {
        return null;
      }
    }
    function h(e) {
      if (e == null) return !1;
      var t = JSON.parse(e);
      return typeof t == "object" && t != null && t.product_type === d;
    }
    function y(e, t) {
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
        wsuaActionTarget:
          e == null
            ? void 0
            : o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
                .GET_META_ONE_BUSINESS,
        wsuaActiveSubscriptions: o(
          "WAWebActiveSubscriptionProductTypes",
        ).getActiveSubscriptionProductTypes(),
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.NOTIFICATION,
        wsuaScreen: e,
        wsuaSessionId: t,
      }).commit();
    }
    ((l.WASubscriptionDesktopNotification = m),
      (l.showSubscriptionDesktopNotification = p));
  },
  226,
);
