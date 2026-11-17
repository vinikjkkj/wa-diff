__d(
  "WAWebConsumerPromotionsLogger",
  [
    "WAWebPixWamLogger",
    "WAWebPromotionInteractionLogger",
    "WAWebWamEnumPaymentActionTargets",
    "WAWebWamEnumPaymentActionTypes",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = "P2M";
    function s(t, n) {
      o("WAWebPixWamLogger").logPixSessionEvent({
        eventTsMs: Date.now(),
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        queryParams: {
          flow_type: e,
          num_promotions: t,
          referral: n === "settings" ? "home_settings_menu" : n,
        },
        screen: "payment_home",
      });
    }
    function u(t) {
      o("WAWebPixWamLogger").logPixSessionEvent({
        eventTsMs: Date.now(),
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.PROMOTIONS_SEE_ALL,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        queryParams: {
          flow_type: e,
          num_promotions: t,
          referral: "payment_home",
        },
        screen: "payment_home",
      });
    }
    function c(t, n, r) {
      o("WAWebPixWamLogger").logPixSessionEvent({
        eventTsMs: Date.now(),
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.VIEW,
        queryParams: { entry_point: r, flow_type: e, num_promotions: t },
        referral: n,
        screen: "promotions_full_screen",
      });
    }
    function d(t, n) {
      o("WAWebPixWamLogger").logPixSessionEvent({
        eventTsMs: Date.now(),
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.VIEW_IN_CHAT,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        queryParams: {
          flow_type: e,
          offer_type: o("WAWebPromotionInteractionLogger").offerTypeForLogging(
            n,
          ),
        },
        screen: t,
      });
    }
    function m(t, n, r) {
      o("WAWebPixWamLogger").logPixSessionEvent({
        eventTsMs: Date.now(),
        actionTarget: o("WAWebWamEnumPaymentActionTargets")
          .PAYMENT_ACTION_TARGETS.REMOVE_COUPON,
        paymentActionType: o("WAWebWamEnumPaymentActionTypes")
          .PAYMENT_ACTION_TYPES.CLICK,
        queryParams: {
          flow_type: e,
          offer_type: o("WAWebPromotionInteractionLogger").offerTypeForLogging(
            r,
          ),
          position: n,
        },
        screen: t,
      });
    }
    ((l.logPromotionsSectionView = s),
      (l.logPromotionsSeeAllClick = u),
      (l.logPromotionsFullScreenView = c),
      (l.logPromotionViewInChatClick = d),
      (l.logPromotionRemoveClick = m));
  },
  98,
);
