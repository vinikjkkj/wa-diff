__d(
  "WAWebCartDetailDrawerFooter.react",
  [
    "fbt",
    "WAWebABProps",
    "WAWebBizGatingUtils",
    "WAWebButton.react",
    "WAWebCurrencyUtils",
    "WAWebDirectConnectionGatingUtils",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebText.react",
    "WAWebUISpacing",
    "WAWebVelocityTransitionGroup",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        footerBorder: {
          borderTopColor: "xx42vgk",
          borderTopStyle: "x13fuv20",
          borderTopWidth: "x178xt8z",
          $$css: !0,
        },
        footerPrice: { width: "xh8yej3", $$css: !0 },
      };
    function d() {
      return u.jsxs(u.Fragment, {
        children: [
          s._(
            /*BTDS*/ "By continuing, you agree to share your cart and phone number with the business so it can confirm your order and total price, including any tax, fees and discounts.",
          ),
          " ",
          u.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getJioMartPostcodeChangeLearnMoreLink(),
            children: s._(/*BTDS*/ "Learn more"),
          }),
        ],
      });
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m() {
      return s._(
        /*BTDS*/ "By continuing, you agree to share your cart, profile name and phone number with the business so it can confirm your order and total price, including any tax, fees and discounts",
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.isDirectConnection,
        n =
          t &&
          o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() &&
          o("WAWebABProps").getABPropConfigValue(
            "share_phone_number_on_cart_send_to_direct_connection_biz_enabled",
          );
      return n ? u.jsx(d, {}) : u.jsx(m, {});
    }
    p.displayName = p.name + " [from " + i.id + "]";
    function _(e) {
      var t = e.currency,
        n = e.savings;
      return u.jsxs(o("WAWebFlex.react").FlexRow, {
        align: "baseline",
        justify: "all",
        xstyle: [o("WAWebUISpacing").uiMargin.bottom8, c.footerPrice],
        children: [
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            color: "secondary",
            children: s._(/*BTDS*/ "You save"),
          }),
          u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            color: "teal",
            children: s._(/*BTDS*/ "{cart-savings}", [
              s._param(
                "cart-savings",
                o("WAWebCurrencyUtils").formatAmount1000(t, n),
              ),
            ]),
          }),
        ],
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    function f(e) {
      var t = e.currency,
        n = e.savings,
        r = e.total;
      return u.jsxs(u.Fragment, {
        children: [
          n > 0 ? u.jsx(_, { currency: t, savings: n }) : null,
          u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "baseline",
            justify: "all",
            xstyle: [o("WAWebUISpacing").uiMargin.bottom8, c.footerPrice],
            children: [
              u.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                weight: "medium",
                children: s._(/*BTDS*/ "Estimated total"),
              }),
              u.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                children: s._(/*BTDS*/ "{cart-total-price}", [
                  s._param(
                    "cart-total-price",
                    o("WAWebCurrencyUtils").formatAmount1000(t, r),
                  ),
                ]),
              }),
            ],
          }),
        ],
      });
    }
    f.displayName = f.name + " [from " + i.id + "]";
    function g() {
      return u.jsx(o("WAWebText.react").WAWebTextTitle, {
        as: "span",
        weight: "medium",
        children: s._(/*BTDS*/ "Business will provide total price"),
      });
    }
    g.displayName = g.name + " [from " + i.id + "]";
    function h(e) {
      var t = e.currency,
        n = e.savings,
        r = e.total;
      return r != null && t != null
        ? u.jsx(f, { currency: t, savings: n, total: r })
        : u.jsx(g, {});
    }
    h.displayName = h.name + " [from " + i.id + "]";
    function y(e) {
      var t = e.cart,
        n = e.isDirectConnection,
        a = e.onSend,
        i = e.savings;
      return u.jsxs(o("WAWebFlex.react").FlexColumn, {
        xstyle: [c.footerBorder, o("WAWebUISpacing").uiPadding.all16],
        children: [
          u.jsx(h, { total: t.total, currency: t.currency, savings: i }),
          u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondaryLighter",
            xstyle: o("WAWebUISpacing").uiMargin.bottom15,
            children: u.jsx(p, { isDirectConnection: n }),
          }),
          u.jsx(r("WAWebVelocityTransitionGroup"), {
            appear: !0,
            transitionName: "btn",
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "primary",
              onClick: a,
              children: o(
                "WAWebBizGatingUtils",
              ).isBuyerOrderRequestVariantEnabled()
                ? s._(/*BTDS*/ "Send order request")
                : s._(/*BTDS*/ "Send to business"),
            }),
          }),
        ],
      });
    }
    ((y.displayName = y.name + " [from " + i.id + "]"), (l.default = y));
  },
  226,
);
