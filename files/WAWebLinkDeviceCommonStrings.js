__d(
  "WAWebLinkDeviceCommonStrings",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c() {
      return s._(/*BTDS*/ "Resend SMS");
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      return s._(/*BTDS*/ "Didn't receive the SMS? {resend_sms}", [
        s._param("resend_sms", e),
      ]);
    }
    ((d.displayName = d.name + " [from " + i.id + "]"),
      (l.getResendSmsLinkLabel = c),
      (l.getDidntReceiveSmsLabel = d));
  },
  226,
);
