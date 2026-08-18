__d(
  "WAWebHatchTaskDetails",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        !o("WAWebHatchJsonReaders").isBlankText(e.richExplanation) ||
        e.detailRows.length > 0 ||
        s(e)
      );
    }
    function s(e) {
      var t = e.browserCheckout,
        n = e.payloadType;
      return n === "stripe_link_checkout" && t != null && u(t);
    }
    function u(e) {
      return (
        !o("WAWebHatchJsonReaders").isBlankText(e.cardBrand) ||
        !o("WAWebHatchJsonReaders").isBlankText(e.cardLast4) ||
        !o("WAWebHatchJsonReaders").isBlankText(e.paymentMethodLabel)
      );
    }
    ((l.hasHatchTaskDetails = e),
      (l.hasHatchPayWithLink = s),
      (l.hasHatchPaymentMethod = u));
  },
  98,
);
