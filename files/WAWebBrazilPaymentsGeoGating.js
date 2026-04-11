__d(
  "WAWebBrazilPaymentsGeoGating",
  ["WAWebABProps", "WAWebBizGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebBizGatingUtils").isBrazilToBrazilOrder(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "p2m_external_payments_link_enabled",
        )
      );
    }
    function s(e) {
      return (
        o("WAWebBizGatingUtils").isBrazilToBrazilOrder(e) &&
        o("WAWebABProps").getABPropConfigValue("payments_br_p2m_boleto_enabled")
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "br_enable_payment_logos_on_bubble",
      );
    }
    ((l.isPaymentLinkEnabled = e),
      (l.isBoletoEnabled = s),
      (l.isPaymentLogoEnabled = u));
  },
  98,
);
