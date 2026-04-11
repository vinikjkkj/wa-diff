__d(
  "WAWebCouponCodeHelper",
  [
    "fbt",
    "WAWebABProps",
    "WAWebCopyToClipboard",
    "WAWebTemplateButtonSubtype",
    "WAWebToast.react",
    "WAWebToastManager",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react"));
    function c(e) {
      var t = String(e.url || "");
      return (
        e.subtype ===
          o("WAWebTemplateButtonSubtype").TEMPLATE_BUTTON_SUBTYPE.URL &&
        t.startsWith(
          o("WAWebABProps").getABPropConfigValue("coupon_copy_button_url"),
        ) &&
        p(t) != null
      );
    }
    function d(e) {
      var t = String(e.url || ""),
        n = p(t);
      m(n);
    }
    function m(e) {
      e != null &&
        (o("WAWebCopyToClipboard").copyTextToClipboard(e),
        o("WAWebToastManager").ToastManager.open(
          u.jsx(o("WAWebToast.react").Toast, {
            msg: s._(/*BTDS*/ "Code copied"),
          }),
        ));
    }
    function p(e) {
      var t = e.substring(
        o("WAWebABProps").getABPropConfigValue("coupon_copy_button_url").length,
      );
      return t.length > 0 ? t : null;
    }
    ((l.isCouponCodeButton = c),
      (l.copyCouponCode = d),
      (l.copyCouponCodeGivenCode = m));
  },
  226,
);
