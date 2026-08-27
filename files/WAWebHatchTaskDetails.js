__d(
  "WAWebHatchTaskDetails",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return (
        !o("WAWebHatchJsonReaders").isBlankText(e.richExplanation) ||
        e.detailRows.length > 0
      );
    }
    function s(e) {
      return (
        !o("WAWebHatchJsonReaders").isBlankText(e.cardBrand) ||
        !o("WAWebHatchJsonReaders").isBlankText(e.cardLast4) ||
        !o("WAWebHatchJsonReaders").isBlankText(e.paymentMethodLabel)
      );
    }
    function u(e) {
      if (!o("WAWebHatchJsonReaders").isBlankText(e.merchantName))
        return e.merchantName.trim();
      if (o("WAWebHatchJsonReaders").isBlankText(e.merchantUrl)) return null;
      try {
        return o("WAWebHatchJsonReaders").trimToNull(
          new URL(e.merchantUrl).hostname,
        );
      } catch (e) {
        return null;
      }
    }
    ((l.hasHatchTaskDetails = e),
      (l.hasHatchPaymentMethod = s),
      (l.hatchShopifyMerchantName = u));
  },
  98,
);
