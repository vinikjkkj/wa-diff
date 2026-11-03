__d(
  "WAWebBrazilPaymentsGeoGating",
  ["WAWebABProps", "WAWebPaymentsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s(e.contact.id);
    }
    function s(e) {
      return (
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrderFor(e) &&
        o("WAWebABProps").getABPropConfigValue(
          "p2m_external_payments_link_enabled",
        )
      );
    }
    function u(e) {
      return c(e.contact.id);
    }
    function c(e) {
      return (
        o("WAWebPaymentsGatingUtils").isBrazilToBrazilOrderFor(e) &&
        o("WAWebABProps").getABPropConfigValue("payments_br_p2m_boleto_enabled")
      );
    }
    ((l.isPaymentLinkEnabled = e),
      (l.isPaymentLinkEnabledFor = s),
      (l.isBoletoEnabled = u),
      (l.isBoletoEnabledFor = c));
  },
  98,
);
