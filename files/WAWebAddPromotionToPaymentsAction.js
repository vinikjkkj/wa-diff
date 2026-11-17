__d(
  "WAWebAddPromotionToPaymentsAction",
  [
    "fbt",
    "JSResourceForInteraction",
    "WALogger",
    "WATimeUtils",
    "WAWebPaymentsGatingUtils",
    "WAWebPromotionOffer",
    "WAWebSavedPromotionsChanges",
    "WDSIconIcVisibility.react",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = 2592e3,
      c = r("JSResourceForInteraction")(
        "WAWebAddPromotionToPaymentsTap",
      ).__setRef("WAWebAddPromotionToPaymentsAction");
    function d(e, t, n, a, i) {
      if (!p(e, t, n)) return null;
      var l = o("WAWebPromotionOffer").getInThreadButtonsLimit(
        t.interactivePayload,
      );
      return l != null && i >= l
        ? null
        : (o("WAWebSavedPromotionsChanges").watchSavedPromotions(),
          a
            ? {
                label: s._(/*BTDS*/ "View coupon"),
                onClick: function () {
                  g(function (r) {
                    return r.viewInPayments(e, t, n);
                  });
                },
                Icon: r("WDSIconIcVisibility.react"),
                testid: "view_promotion_in_payments",
              }
            : {
                label: s._(/*BTDS*/ "Save coupon"),
                onClick: function () {
                  g(function (r) {
                    return r.addToPayments(e, t, n);
                  });
                },
                testid: "add_promotion_to_payments",
              });
    }
    function m(e, t, n, r) {
      return d(
        e,
        t,
        n,
        o("WAWebSavedPromotionsChanges").isPromotionSavedNow(e.toString()),
        r,
      );
    }
    function p(e, t, n) {
      return e.remote.isUser() && f(t, n) && _();
    }
    function _() {
      return (
        o("WAWebPaymentsGatingUtils").consumerPromotionsEnabled() &&
        !o("WAWebPaymentsGatingUtils").isPromotionsAutoSaveVariant()
      );
    }
    function f(e, t) {
      var n = o("WAWebPromotionOffer").getPromotionOfferFor(e);
      return n == null
        ? !1
        : n.expiryMs != null || o("WATimeUtils").unixTime() - t < u;
    }
    function g(t) {
      c.load()
        .then(t)
        .catch(function (t) {
          o("WALogger")
            .WARN(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[SAVED_PROMOTIONS] tap not handled",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("saved-promotions-tap-failed");
        });
    }
    ((l.getAddPromotionToPaymentsAction = d),
      (l.getCurrentAddPromotionToPaymentsAction = m),
      (l.canAddPromotionToPayments = p),
      (l.isLiveOffer = f));
  },
  226,
);
