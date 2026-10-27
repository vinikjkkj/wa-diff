__d(
  "WAWebMetaOneEntryPointLogger",
  [
    "WAWebEligibleSubscriptionProductTypes",
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
      "business-tools": {
        actionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .META_ONE_BUSINESS_ENTRY_POINT,
        referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.BUSINESS_TOOLS,
        screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.BUSINESS_TOOLS,
        screenElement: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
          .LIST_ITEM,
      },
      mba: {
        actionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .GET_META_ONE_BUSINESS,
        referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.BIZ_AI_HOME,
        screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.BIZ_AI_HOME,
        screenElement: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
          .BIZ_AI_META_ONE_ENTRYPOINT,
      },
      settings: {
        actionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .SUBSCRIPTIONS_ENTRY_POINT,
        referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.SETTINGS,
        screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.SETTINGS,
        screenElement: o("WAWebWamEnumWsuaScreenElement").WSUA_SCREEN_ELEMENT
          .LIST_ITEM,
      },
    };
    function s(e, t, n) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, e, t, n);
    }
    function u(e, t, n) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK, e, t, n);
    }
    function c(t, n, r, a) {
      var i = e[n],
        l = i.actionTarget,
        s = i.referral,
        u = i.screen,
        c = i.screenElement;
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: t,
        wsuaActionTarget: l,
        wsuaActiveSubscriptions: a,
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: s,
        wsuaScreen: u,
        wsuaScreenElement: c,
        wsuaSessionId: r,
      }).commit();
    }
    ((l.logMetaOneEntryPointView = s), (l.logMetaOneEntryPointClick = u));
  },
  98,
);
