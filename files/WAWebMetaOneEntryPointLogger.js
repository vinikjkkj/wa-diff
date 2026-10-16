__d(
  "WAWebMetaOneEntryPointLogger",
  [
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
    function s(e, t) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, e, t);
    }
    function u(e, t) {
      c(o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK, e, t);
    }
    function c(t, n, r) {
      var a = e[n],
        i = a.actionTarget,
        l = a.referral,
        s = a.screen,
        u = a.screenElement;
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: t,
        wsuaActionTarget: i,
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: l,
        wsuaScreen: s,
        wsuaScreenElement: u,
        wsuaSessionId: r,
      }).commit();
    }
    ((l.logMetaOneEntryPointView = s), (l.logMetaOneEntryPointClick = u));
  },
  98,
);
