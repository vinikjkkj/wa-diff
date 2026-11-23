__d(
  "WAWebAddPromotionToPaymentsTap",
  [
    "fbt",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAdaptiveLayoutGatingUtils",
    "WAWebAddPromotionToPaymentsAction",
    "WAWebDrawerManager",
    "WAWebPaymentsGatingUtils",
    "WAWebPromotionInteractionLogger",
    "WAWebPromotionOffer",
    "WAWebSavedPromotions",
    "WAWebSavedPromotionsStore",
    "WAWebSettingsConst",
    "WAWebSettingsFlowLoadable",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWidFactory",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c,
      d,
      m,
      p,
      _ = p || (p = o("react")),
      f = "promotion-saved-to-payments-toast",
      g = "promotion-save-failed-toast";
    async function h(t, n, r) {
      if (!o("WAWebAddPromotionToPaymentsAction").isLiveOffer(n, r)) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[SAVED_PROMOTIONS] tap ignored: the offer ended",
            ])),
        );
        return;
      }
      if (!o("WAWebPaymentsGatingUtils").consumerPromotionsEnabled()) {
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[SAVED_PROMOTIONS] tap ignored: the gate is off",
            ])),
        );
        return;
      }
      if (
        (C(t, n, !1),
        !(await o("WAWebSavedPromotionsStore").savePromotion(t.toString())))
      ) {
        (o("WALogger")
          .WARN(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[SAVED_PROMOTIONS] offer not saved from its message",
              ])),
          )
          .sendLogs("saved-promotions-save-from-message-failed"),
          o("WAWebToastManager").ToastManager.open(
            _.jsx(o("WAWebToast.react").Toast, {
              id: g,
              msg: s._(/*BTDS*/ ""),
            }),
          ));
        return;
      }
      o("WAWebToastManager").ToastManager.open(
        _.jsx(o("WAWebToast.react").Toast, {
          id: f,
          action: {
            actionText: s._(/*BTDS*/ ""),
            onAction: function () {
              R("save_coupon_cta");
            },
          },
          msg: s._(/*BTDS*/ ""),
        }),
      );
    }
    function y(e, t, n) {
      (o("WAWebPaymentsGatingUtils").consumerPromotionsEnabled() &&
        o("WAWebAddPromotionToPaymentsAction").isLiveOffer(t, n) &&
        C(e, t, !0),
        R("view_coupon_cta"));
    }
    function C(e, t, n) {
      var r,
        a =
          (r = o("WAWebPromotionOffer").getPromotionOfferFor(t)) == null
            ? void 0
            : r.kind;
      a == null ||
        !e.remote.isUser() ||
        o("WAWebPromotionInteractionLogger").logPromotionChatButtonTap(
          e,
          o("WAWebWidFactory").asUserWidOrThrow(e.remote),
          a,
          n,
        );
    }
    var b = !1,
      v = 1e3,
      S = "timed_out";
    async function R(e) {
      if (!(!o("WAWebPaymentsGatingUtils").consumerPromotionsEnabled() || b)) {
        b = !0;
        var t = 0;
        try {
          t = await L();
        } finally {
          b = !1;
        }
        var n = t >= o("WAWebSavedPromotions").PROMOTIONS_SEE_ALL_MIN_COUNT,
          r = n
            ? [
                o("WAWebSettingsConst").SettingsSteps.PaymentsHome,
                o("WAWebSettingsConst").SettingsSteps.PaymentsPromotions,
              ]
            : [o("WAWebSettingsConst").SettingsSteps.PaymentsHome],
          a = n ? e : void 0;
        o("WAWebDrawerManager").DrawerManager.openDrawerLeft(
          o("WAWebAdaptiveLayoutGatingUtils").shouldUseDrawerDescriptor()
            ? {
                descriptorType: "settings",
                initialStack: r,
                initialStep: o("WAWebSettingsConst").SettingsSteps.PaymentsHome,
                paymentsHomeEntryScreen: "chat",
                promotionsChatEntryPoint: a,
                scrollToPromotions: !0,
              }
            : _.jsx(o("WAWebSettingsFlowLoadable").SettingsFlowLoadable, {
                onEnd: o("WAWebDrawerManager").closeDrawerLeft,
                initialStack: r,
                initialStep: o("WAWebSettingsConst").SettingsSteps.PaymentsHome,
                paymentsHomeEntryScreen: "chat",
                promotionsChatEntryPoint: a,
                scrollToPromotions: !0,
              }),
        );
      }
    }
    async function L() {
      var e;
      try {
        e = await o("WAPromiseDelays").withTimeout(
          o("WAWebSavedPromotions").loadLiveSavedPromotions(),
          v,
          function () {
            return S;
          },
        );
      } catch (t) {
        e = null;
      }
      return e === S
        ? (o("WALogger")
            .WARN(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] offers read too slowly for the chat's tap",
                ])),
            )
            .sendLogs("saved-promotions-chat-tap-read-timed-out"),
          0)
        : e == null
          ? (o("WALogger")
              .WARN(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] offers not read for the chat's tap",
                  ])),
              )
              .sendLogs("saved-promotions-chat-tap-read-failed"),
            0)
          : e.length;
    }
    ((l.addToPayments = h),
      (l.viewInPayments = y),
      (l.openPromotionsIfEnabled = R));
  },
  226,
);
