__d(
  "FBPayOTPVerificationFormDefaultPTT",
  [
    "AllPaymentTypeFields",
    "FBPayAuthTypes",
    "PlatformTrustTokenUPLLogger",
    "Promise",
    "enumUtils",
    "modularGeneratePTT",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {};
    for (var u of Object.keys(r("AllPaymentTypeFields"))) {
      var c = o("enumUtils").coerceKey(u, r("AllPaymentTypeFields"));
      c != null && (s[r("AllPaymentTypeFields")[c]] = c);
    }
    function d(t, a) {
      var i = a.paymentAccountID,
        l = a.paymentProductId,
        u = a.paymentType,
        c = a.platform,
        d = a.sessionID,
        m = new (r("PlatformTrustTokenUPLLogger"))(
          l != null ? l : void 0,
          d,
          u,
          c,
          i != null ? i : void 0,
        );
      return new (e || (e = n("Promise")))(function (e, n) {
        var a;
        r("modularGeneratePTT")(
          (a = s[u]) != null ? a : "UNKNOWN",
          { provider_otp: o("FBPayAuthTypes").ENCRYPTION_KEY },
          { provider_otp: t },
          "SEND_E2EE_DATA",
          function (t) {
            e(t);
          },
          function (e) {
            n(e);
          },
          { logger: m, sessionID: d },
        );
      });
    }
    l.getDefaultOTPPTT = d;
  },
  98,
);
