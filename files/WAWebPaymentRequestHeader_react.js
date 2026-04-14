__d(
  "WAWebPaymentRequestHeader.react",
  [
    "fbt",
    "WAWebBrPaymentRequest",
    "WAWebMastercardLogoIcon.react",
    "WAWebPaymentBoletoLogoIcon.react",
    "WAWebPaymentLogoPixIcon.react",
    "WAWebPaymentPayWithRow.react",
    "WAWebPaymentVisaLogoIcon.react",
    "WAWebThemeContext",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        payWithRow: {
          alignItems: "x6s0dn4",
          backgroundColor: "x1bu39yj",
          borderStartStartRadius: "xyi3aci",
          borderStartEndRadius: "xwf5gio",
          borderEndEndRadius: "x1p453bz",
          borderEndStartRadius: "x1suzm8a",
          paddingBottom: "x12xbjc7",
          $$css: !0,
        },
        paywithIcon: {
          borderTopColor: "xugmkjn",
          borderInlineEndColor: "x1q71z5y",
          borderBottomColor: "x1d3wcft",
          borderInlineStartColor: "x7oa2jg",
          borderTopStyle: "x13fuv20",
          borderInlineEndStyle: "x18b5jzi",
          borderBottomStyle: "x1q0q8m5",
          borderInlineStartStyle: "x1t7ytsu",
          borderTopWidth: "x178xt8z",
          borderInlineEndWidth: "x1lun4ml",
          borderBottomWidth: "xso031l",
          borderInlineStartWidth: "xpilrb4",
          borderStartStartRadius: "xbrszos",
          borderStartEndRadius: "xea3l6g",
          borderEndEndRadius: "x18isctg",
          borderEndStartRadius: "x2q3nzr",
          verticalAlign: "xxymvpz",
          width: "x1xp8n7a",
          height: "xlup9mm",
          $$css: !0,
        },
        iconDarkBackground: { backgroundColor: "x163g9ad", $$css: !0 },
        marginStart4: { marginInlineStart: "x1wbi8v6", $$css: !0 },
        paddingAll4: {
          paddingTop: "x1tiyuxx",
          paddingInlineEnd: "x1uc92m",
          paddingBottom: "x1nbhmlj",
          paddingInlineStart: "x181vq82",
          $$css: !0,
        },
        payWithLabel: { paddingInlineStart: "x12w63v0", $$css: !0 },
        payWithIcons: { paddingInlineEnd: "x1nzty39", $$css: !0 },
      };
    function d(e) {
      var t = e.msg,
        n = o("WAWebBrPaymentRequest").getPaymentRequestInfo(t);
      if (n == null) return null;
      var a = o("WAWebThemeContext").isDarkTheme(),
        i = [
          c.paywithIcon,
          c.paddingAll4,
          c.marginStart4,
          a && c.iconDarkBackground,
        ],
        l = n.map(function (e) {
          return e.paymentType ===
            o("WAWebBrPaymentRequest").PaymentRequestCtaType.BOLETO
            ? u.jsx(
                o("WAWebPaymentBoletoLogoIcon.react").PaymentBoletoLogoIcon,
                { iconXstyle: i },
              )
            : e.paymentType ===
                o("WAWebBrPaymentRequest").PaymentRequestCtaType
                  .PIX_DYNAMIC_CODE
              ? u.jsx(o("WAWebPaymentLogoPixIcon.react").PaymentLogoPixIcon, {
                  iconXstyle: i,
                })
              : e.paymentType ===
                  o("WAWebBrPaymentRequest").PaymentRequestCtaType.PAYMENT_LINK
                ? u.jsxs(u.Fragment, {
                    children: [
                      u.jsx(
                        o("WAWebPaymentVisaLogoIcon.react").PaymentVisaLogoIcon,
                        { iconXstyle: i },
                      ),
                      u.jsx(
                        o("WAWebMastercardLogoIcon.react").MastercardLogoIcon,
                        { iconXstyle: i },
                      ),
                    ],
                  })
                : (function () {
                    throw Error(
                      "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                        e.paymentType,
                    );
                  })();
        });
      return u.jsx(r("WAWebPaymentPayWithRow.react"), {
        childrenXstyle: c.payWithIcons,
        label: s._(/*BTDS*/ "Pay with"),
        labelXstyle: c.payWithLabel,
        testid: void 0,
        xstyle: c.payWithRow,
        children: l,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  226,
);
