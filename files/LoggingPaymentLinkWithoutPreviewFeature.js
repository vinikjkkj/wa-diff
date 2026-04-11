__d(
  "LoggingPaymentLinkWithoutPreviewFeature",
  ["PaymentLink"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("PaymentLink").shouldDetectInComposer();
    }
    function s(t, n, r) {
      if (!e()) return n;
      var a = t == null ? void 0 : t.psp;
      if (a == null && t == null) {
        var i = r[0];
        a = i != null ? o("PaymentLink").getPSP(i.url) : null;
      }
      return a == null
        ? n
        : babelHelpers.extends({}, n, {
            provider: { paramsJson: JSON.stringify({ name: a }) },
          });
    }
    l.getMetadata = s;
  },
  98,
);
