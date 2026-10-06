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
      },
      settings: {
        actionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .SUBSCRIPTIONS_ENTRY_POINT,
        referral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL.SETTINGS,
        screen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.SETTINGS,
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
        s = a.screen;
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: t,
        wsuaActionTarget: i,
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: l,
        wsuaScreen: s,
        wsuaScreenElement: o("WAWebWamEnumWsuaScreenElement")
          .WSUA_SCREEN_ELEMENT.LIST_ITEM,
        wsuaSessionId: r,
      }).commit();
    }
    ((l.logMetaOneEntryPointView = s), (l.logMetaOneEntryPointClick = u));
  },
  98,
);
