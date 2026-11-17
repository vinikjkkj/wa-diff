__d(
  "WAWebSavedPromotionsAutoSave",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebAddPromotionToPaymentsAction",
    "WAWebBrokerGlobalAppState",
    "WAWebLazyLoadedRetriable",
    "WAWebPaymentsGatingUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = r("JSResourceForInteraction")("WAWebSavedPromotionsStore").__setRef(
        "WAWebSavedPromotionsAutoSave",
      ),
      c = r("WAWebLazyLoadedRetriable")(function () {
        return u.load();
      }, "WAWebSavedPromotionsStore");
    function d(t) {
      var n = t.id,
        a = t.t;
      if (
        !(
          n.fromMe ||
          !n.remote.isUser() ||
          a == null ||
          !o("WAWebAddPromotionToPaymentsAction").isLiveOffer(
            {
              caption: null,
              fromMe: n.fromMe,
              interactivePayload: t.interactivePayload,
              interactiveType: t.interactiveType,
              isCarouselCard: t.isCarouselCard,
              isFromTemplate: t.isFromTemplate,
              nativeFlowName: t.nativeFlowName,
              type: t.type,
            },
            a,
          ) ||
          !o("WAWebPaymentsGatingUtils").consumerPromotionsEnabled() ||
          !o("WAWebPaymentsGatingUtils").isPromotionsAutoSaveVariant()
        )
      ) {
        var i = n.toString();
        c()
          .then(function (e) {
            return e.savePromotion(i);
          })
          .then(function (e) {
            !e && !r("WAWebBrokerGlobalAppState").isLogoutInProgress && m();
          })
          .catch(function (t) {
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[SAVED_PROMOTIONS] auto-save threw",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("saved-promotions-auto-save-threw");
          });
      }
    }
    function m() {
      o("WALogger")
        .WARN(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[SAVED_PROMOTIONS] offer not saved on receipt",
            ])),
        )
        .sendLogs("saved-promotions-auto-save-failed");
    }
    l.autoSavePromotionOnReceipt = d;
  },
  98,
);
