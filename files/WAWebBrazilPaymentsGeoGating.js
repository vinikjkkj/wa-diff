__d(
  "WAWebBrazilPaymentsGeoGating",
  ["WAWebABProps", "WAWebPaymentsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return (
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "p2m_external_payments_link_enabled",
        )
      );
    }
    function s(e) {
      return (
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrder(e) &&
        o("WAWebABProps").getABPropConfigValue("payments_br_p2m_boleto_enabled")
      );
    }
    ((l.isPaymentLinkEnabled = e), (l.isBoletoEnabled = s));
  },
  98,
);
