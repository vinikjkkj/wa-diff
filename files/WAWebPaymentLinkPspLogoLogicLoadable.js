__d(
  "WAWebPaymentLinkPspLogoLogicLoadable",
  ["JSResourceForInteraction", "WAWebLazyLoadedRetriable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = r("WAWebLazyLoadedRetriable")(async function () {
        var t = await Promise.all([
            r("JSResourceForInteraction")("WAWebPaymentLinkPspMatcher")
              .__setRef("WAWebPaymentLinkPspLogoLogicLoadable")
              .load(),
            r("JSResourceForInteraction")("WAWebPaymentLinkPspLogoPlan")
              .__setRef("WAWebPaymentLinkPspLogoLogicLoadable")
              .load(),
          ]),
          n = t[0],
          o = t[1];
        return (
          (e = {
            getPaymentLinkPspFromUrl: n.getPaymentLinkPspFromUrl,
            getPaymentLinkPspLogoPlan: o.getPaymentLinkPspLogoPlan,
          }),
          e
        );
      }, "PaymentLinkPspLogoLogic");
    function u() {
      return s();
    }
    function c() {
      return e;
    }
    ((l.loadPaymentLinkPspLogoLogic = u),
      (l.getLoadedPaymentLinkPspLogoLogic = c));
  },
  98,
);
