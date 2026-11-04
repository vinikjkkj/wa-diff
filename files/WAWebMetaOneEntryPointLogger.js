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
    var e,
      s,
      u,
      c,
      d = {
        "ai-handoff-limit": {
          actionTarget: (e = o("WAWebWamEnumWsuaActionTarget"))
            .WSUA_ACTION_TARGET.GET_META_ONE_BUSINESS,
          referral: (s = o("WAWebWamEnumWsuaReferral")).WSUA_REFERRAL
            .BIZ_AI_THREAD,
          screen: (u = o("WAWebWamEnumWsuaScreen")).WSUA_SCREEN.AI_HANDOFF,
          screenElement: (c = o("WAWebWamEnumWsuaScreenElement"))
            .WSUA_SCREEN_ELEMENT.BIZ_AI_LIMIT_REACHED,
        },
        "ai-mode-limit": {
          actionTarget: e.WSUA_ACTION_TARGET.GET_META_ONE_BUSINESS,
          referral: s.WSUA_REFERRAL.BIZ_AI_THREAD,
          screen: u.WSUA_SCREEN.SMART_COMPOSER,
          screenElement: c.WSUA_SCREEN_ELEMENT.BIZ_AI_LIMIT_REACHED,
        },
        "business-tools": {
          actionTarget: e.WSUA_ACTION_TARGET.META_ONE_BUSINESS_ENTRY_POINT,
          referral: s.WSUA_REFERRAL.BUSINESS_TOOLS,
          screen: u.WSUA_SCREEN.BUSINESS_TOOLS,
          screenElement: c.WSUA_SCREEN_ELEMENT.LIST_ITEM,
        },
        mba: {
          actionTarget: e.WSUA_ACTION_TARGET.GET_META_ONE_BUSINESS,
          referral: s.WSUA_REFERRAL.BIZ_AI_HOME,
          screen: u.WSUA_SCREEN.BIZ_AI_HOME,
          screenElement: c.WSUA_SCREEN_ELEMENT.BIZ_AI_META_ONE_ENTRYPOINT,
        },
        settings: {
          actionTarget: e.WSUA_ACTION_TARGET.SUBSCRIPTIONS_ENTRY_POINT,
          referral: s.WSUA_REFERRAL.SETTINGS,
          screen: u.WSUA_SCREEN.SETTINGS,
          screenElement: c.WSUA_SCREEN_ELEMENT.LIST_ITEM,
        },
        "suggested-reply-limit": {
          actionTarget: e.WSUA_ACTION_TARGET.GET_META_ONE_BUSINESS,
          referral: s.WSUA_REFERRAL.BIZ_AI_THREAD,
          screen: u.WSUA_SCREEN.AI_SUGGESTIONS,
          screenElement: c.WSUA_SCREEN_ELEMENT.BIZ_AI_LIMIT_REACHED,
        },
      };
    function m(e, t, n) {
      f(o("WAWebWamEnumWsuaAction").WSUA_ACTION.VIEW, e, t, n);
    }
    function p(e, t, n) {
      f(o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK, e, t, n);
    }
    function _(e, t, n) {
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: o("WAWebWamEnumWsuaAction").WSUA_ACTION.CLICK,
        wsuaActionTarget: o("WAWebWamEnumWsuaActionTarget").WSUA_ACTION_TARGET
          .QUICK_PROMOTION_DEEPLINK,
        wsuaActiveSubscriptions: n,
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaQuickPromotionId: e,
        wsuaReferral: o("WAWebWamEnumWsuaReferral").WSUA_REFERRAL
          .QUICK_PROMOTION,
        wsuaScreen: o("WAWebWamEnumWsuaScreen").WSUA_SCREEN.QUICK_PROMOTION,
        wsuaScreenElement: o("WAWebWamEnumWsuaScreenElement")
          .WSUA_SCREEN_ELEMENT.QP_BANNER,
        wsuaSessionId: t,
      }).commit();
    }
    function f(e, t, n, r) {
      var a = d[t],
        i = a.actionTarget,
        l = a.referral,
        s = a.screen,
        u = a.screenElement;
      new (o(
        "WAWebSubscriptionUserActionWamEvent",
      ).SubscriptionUserActionWamEvent)({
        wsuaAction: e,
        wsuaActionTarget: i,
        wsuaActiveSubscriptions: r,
        wsuaEligibleSubscriptions: o(
          "WAWebEligibleSubscriptionProductTypes",
        ).getEligibleSubscriptionProductTypes(),
        wsuaProductType: o("WAWebWamEnumWsuaProductType").WSUA_PRODUCT_TYPE
          .META_ONE_BUSINESS,
        wsuaReferral: l,
        wsuaScreen: s,
        wsuaScreenElement: u,
        wsuaSessionId: n,
      }).commit();
    }
    ((l.logMetaOneEntryPointView = m),
      (l.logMetaOneEntryPointClick = p),
      (l.logMetaOneQuickPromotionClick = _));
  },
  98,
);
