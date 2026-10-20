__d(
  "WAWebSubscriptionDesktopNotification",
  [
    "fbt",
    "Promise",
    "WAWebBaseNotification",
    "WAWebBizAiMetaOneDialogRequestStore",
    "WAWebNotificationController",
    "WAWebNotificationIconUtils",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
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
          (i.afterBannerShown = function () {
            g(
              o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW,
              this.$WASubscriptionDesktopNotification$p_2,
            );
          }),
          (i.getBannerOptions = function () {
            var e = this,
              t = this.$WASubscriptionDesktopNotification$p_1,
              n = t.link,
              r = t.text,
              a = t.title,
              i = _(n);
            return {
              wid: o("WAWebUserPrefsMeUser").getMeUserOrThrow(),
              tag: u,
              title: a != null ? a : s._(/*BTDS*/ "Meta One").toString(),
              body: r,
              doNotOpenChat: !0,
              onClick: function () {
                (g(
                  o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
                  e.$WASubscriptionDesktopNotification$p_2,
                ),
                  i != null &&
                    o(
                      "WAWebBizAiMetaOneDialogRequestStore",
                    ).requestMetaOneDialog(i));
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
      if (e == null) return null;
      try {
        var t,
          n = new URL(e).searchParams;
        return (t = n.get("meta_one_destination")) != null
          ? t
          : f(n.get("deeplink_params"))
            ? c
            : null;
      } catch (e) {
        return null;
      }
    }
    function f(e) {
      if (e == null) return !1;
      var t = JSON.parse(e);
      return typeof t == "object" && t != null && t.product_type === d;
    }
    function g(e, t) {
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: e,
        wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .META_ONE_BUSINESS_ENTRY_POINT,
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.NOTIFICATION,
        wsuaSessionId: t,
      }).commit();
    }
    ((l.WASubscriptionDesktopNotification = m),
      (l.showSubscriptionDesktopNotification = p));
  },
  226,
);
