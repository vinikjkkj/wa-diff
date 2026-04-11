__d(
  "WAWebAddEditPixKeyModalFooter.react",
  [
    "fbt",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebUserPrefsPaymentTos",
    "WDSText.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = {
        row: {
          paddingTop: "xyamay9",
          height: "xsdox4t",
          textAlign: "x2b8uid",
          $$css: !0,
        },
      },
      d = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: "https://faq.whatsapp.com/1201270817206354",
        testid: void 0,
        children: s._(/*BTDS*/ "Learn more"),
      }),
      m = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: "https://fburl.com/5ugqajuy",
        testid: void 0,
        children: s._(/*BTDS*/ "Meta"),
      }),
      p = u.jsx(o("WAWebExternalLink.react").ExternalLink, {
        href: "https://fburl.com/mo0hnzrw",
        testid: void 0,
        children: s._(/*BTDS*/ "WhatsApp Payments"),
      });
    function _() {
      var e,
        t,
        n = o("react-compiler-runtime").c(3),
        a =
          (e =
            (t = o("WAWebUserPrefsPaymentTos").getPaymentTos()) == null
              ? void 0
              : t.accepted) != null
            ? e
            : !1,
        i;
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = s._(
            /*BTDS*/ "By continuing, you acknowledge the privacy policies of {wa-payments-tos-link} and {meta-tos-link} and accept the terms of {wa-payments-tos-link} and {meta-tos-link}. Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
            [
              s._param("wa-payments-tos-link", p),
              s._param("meta-tos-link", m),
              s._param("learn-more-link", d),
            ],
          )),
          (n[0] = i))
        : (i = n[0]);
      var l = i,
        _;
      n[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((_ = s._(
            /*BTDS*/ "Your Pix key and name will be securely stored and encrypted. {learn-more-link}",
            [s._param("learn-more-link", d)],
          )),
          (n[1] = _))
        : (_ = n[1]);
      var f = _,
        g;
      return (
        n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = u.jsx(o("WAWebFlex.react").FlexRow, {
              xstyle: c.row,
              justify: "center",
              children: u.jsx(r("WDSText.react"), {
                type: "Body3",
                colorName: "contentDeemphasized",
                textAlign: "center",
                children: a ? f : l,
              }),
            })),
            (n[2] = g))
          : (g = n[2]),
        g
      );
    }
    l.default = _;
  },
  226,
);
