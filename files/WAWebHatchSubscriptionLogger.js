__d(
  "WAWebHatchSubscriptionLogger",
  [
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebSubscriptionUserActionWamEvent",
    "WAWebWamEnumWsuaAction",
    "WAWebWamEnumWsuaActionTarget",
    "WAWebWamEnumWsuaProductType",
    "WAWebWamEnumWsuaReferral",
    "WAWebWamEnumWsuaScreen",
    "WAWebWamEnumWsuaScreenElement",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .SUBSCRIPTIONS_ENTRY_POINT,
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .HATCH,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
          .MUSE_CHAT_INFO,
        wsuaScreen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.MUSE_CHAT_INFO,
        wsuaScreenElement: o("WAWebWamEnumWsuaScreenElement")
          .WSUA_SCREEN_ELEMENT.LIST_ITEM,
      },
      s = null;
    function u() {
      s = null;
    }
    function c() {
      p(function () {
        var t = r("WAWebPonyfillsCryptoRandomUUID")();
        ((s = t),
          new (o(
            "WAWebSubscriptionUserActionWamEvent",
          ).SubscriptionUserActionWamEvent)(
            babelHelpers.extends({}, e, {
              wsuaAction: o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW,
              wsuaSessionId: t,
            }),
          ).commit());
      });
    }
    function d() {
      p(function () {
        var t = s;
        t != null &&
          new (o(
            "WAWebSubscriptionUserActionWamEvent",
          ).SubscriptionUserActionWamEvent)(
            babelHelpers.extends({}, e, {
              wsuaAction: o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
              wsuaSessionId: t,
            }),
          ).commit();
      });
    }
    function m() {
      p(function () {
        var e = s;
        e != null &&
          new (o(
            "WAWebSubscriptionUserActionWamEvent",
          ).SubscriptionUserActionWamEvent)({
            wsuaAction: o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW,
            wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
              .HATCH,
            wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
              .MUSE_CHAT_INFO,
            wsuaScreen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN
              .MUSE_MANAGE_SUBSCRIPTION,
            wsuaSessionId: e,
          }).commit();
      });
    }
    function p(e) {
      try {
        e();
      } catch (e) {}
    }
    ((l.startHatchSubscriptionVisit = u),
      (l.logHatchSubscriptionRowView = c),
      (l.logHatchSubscriptionRowClick = d),
      (l.logHatchSubscriptionScreenView = m));
  },
  98,
);
