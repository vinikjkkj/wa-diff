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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(2),
        t;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = s._(
            /*BTDS*/ "By continuing, you agree to share your cart and phone number with the business so it can confirm your order and total price, including any tax, fees and discounts.",
          )),
          (e[0] = t))
        : (t = e[0]);
      var n;
      return (
        e[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = u.jsxs(u.Fragment, {
              children: [
                t,
                " ",
                u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                  href: o(
                    "WAWebFaqUrl",
                  ).getJioMartPostcodeChangeLearnMoreLink(),
                  children: s._(/*BTDS*/ "Learn more"),
                }),
              ],
            })),
            (e[1] = n))
          : (n = e[1]),
        n
      );
    }
    function m() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = s._(
              /*BTDS*/ "By continuing, you agree to share your cart, profile name and phone number with the business so it can confirm your order and total price, including any tax, fees and discounts",
            )),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.isDirectConnection,
        r;
      t[0] !== n
        ? ((r =
            n &&
            o("WAWebDirectConnectionGatingUtils").supportsDirectConnection() &&
            o("WAWebABProps").getABPropConfigValue(
              "share_phone_number_on_cart_send_to_direct_connection_biz_enabled",
            )),
          (t[0] = n),
          (t[1] = r))
        : (r = t[1]);
      var a = r,
        i;
      return (
        t[2] !== a
          ? ((i = a ? u.jsx(d, {}) : u.jsx(m, {})), (t[2] = a), (t[3] = i))
          : (i = t[3]),
        i
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.currency,
        r = e.savings,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [o("WAWebUISpacing").uiMargin.bottom8, c.footerPrice]),
          (t[0] = a))
        : (a = t[0]);
      var i;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            color: "secondary",
            children: s._(/*BTDS*/ "You save"),
          })),
          (t[1] = i))
        : (i = t[1]);
      var l;
      return (
        t[2] !== n || t[3] !== r
          ? ((l = u.jsxs(o("WAWebFlex.react").FlexRow, {
              align: "baseline",
              justify: "all",
              xstyle: a,
              children: [
                i,
                u.jsx(o("WAWebText.react").WAWebTextTitle, {
                  as: "span",
                  color: "teal",
                  children: s._(/*BTDS*/ "{cart-savings}", [
                    s._param(
                      "cart-savings",
                      o("WAWebCurrencyUtils").formatAmount1000(n, r),
                    ),
                  ]),
                }),
              ],
            })),
            (t[2] = n),
            (t[3] = r),
            (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(11),
        n = e.currency,
        r = e.savings,
        a = e.total,
        i;
      t[0] !== n || t[1] !== r
        ? ((i = r > 0 ? u.jsx(_, { currency: n, savings: r }) : null),
          (t[0] = n),
          (t[1] = r),
          (t[2] = i))
        : (i = t[2]);
      var l;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = [o("WAWebUISpacing").uiMargin.bottom8, c.footerPrice]),
          (t[3] = l))
        : (l = t[3]);
      var d;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = u.jsx(o("WAWebText.react").WAWebTextTitle, {
            as: "span",
            weight: "medium",
            children: s._(/*BTDS*/ "Estimated total"),
          })),
          (t[4] = d))
        : (d = t[4]);
      var m;
      t[5] !== n || t[6] !== a
        ? ((m = u.jsxs(o("WAWebFlex.react").FlexRow, {
            align: "baseline",
            justify: "all",
            xstyle: l,
            children: [
              d,
              u.jsx(o("WAWebText.react").WAWebTextTitle, {
                as: "span",
                children: s._(/*BTDS*/ "{cart-total-price}", [
                  s._param(
                    "cart-total-price",
                    o("WAWebCurrencyUtils").formatAmount1000(n, a),
                  ),
                ]),
              }),
            ],
          })),
          (t[5] = n),
          (t[6] = a),
          (t[7] = m))
        : (m = t[7]);
      var p;
      return (
        t[8] !== i || t[9] !== m
          ? ((p = u.jsxs(u.Fragment, { children: [i, m] })),
            (t[8] = i),
            (t[9] = m),
            (t[10] = p))
          : (p = t[10]),
        p
      );
    }
    function g() {
      var e = o("react-compiler-runtime").c(1),
        t;
      return (
        e[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = u.jsx(o("WAWebText.react").WAWebTextTitle, {
              as: "span",
              weight: "medium",
              children: s._(/*BTDS*/ "Business will provide total price"),
            })),
            (e[0] = t))
          : (t = e[0]),
        t
      );
    }
    function h(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.currency,
        r = e.savings,
        a = e.total;
      if (a != null && n != null) {
        var i;
        return (
          t[0] !== n || t[1] !== r || t[2] !== a
            ? ((i = u.jsx(f, { currency: n, savings: r, total: a })),
              (t[0] = n),
              (t[1] = r),
              (t[2] = a),
              (t[3] = i))
            : (i = t[3]),
          i
        );
      }
      var l;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = u.jsx(g, {})), (t[4] = l))
          : (l = t[4]),
        l
      );
    }
    function y(e) {
      var t = o("react-compiler-runtime").c(14),
        n = e.cart,
        a = e.isDirectConnection,
        i = e.onSend,
        l = e.savings,
        d;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = [c.footerBorder, o("WAWebUISpacing").uiPadding.all16]),
          (t[0] = d))
        : (d = t[0]);
      var m;
      t[1] !== n.currency || t[2] !== n.total || t[3] !== l
        ? ((m = u.jsx(h, { total: n.total, currency: n.currency, savings: l })),
          (t[1] = n.currency),
          (t[2] = n.total),
          (t[3] = l),
          (t[4] = m))
        : (m = t[4]);
      var _;
      t[5] !== a
        ? ((_ = u.jsx(o("WAWebText.react").WAWebTextMuted, {
            color: "secondaryLighter",
            xstyle: o("WAWebUISpacing").uiMargin.bottom15,
            children: u.jsx(p, { isDirectConnection: a }),
          })),
          (t[5] = a),
          (t[6] = _))
        : (_ = t[6]);
      var f;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((f = o("WAWebBizGatingUtils").isBuyerOrderRequestVariantEnabled()
            ? s._(/*BTDS*/ "Send order request")
            : s._(/*BTDS*/ "Send to business")),
          (t[7] = f))
        : (f = t[7]);
      var g;
      t[8] !== i
        ? ((g = u.jsx(r("WAWebVelocityTransitionGroup"), {
            appear: !0,
            transitionName: "btn",
            children: u.jsx(o("WAWebButton.react").Button, {
              testid: void 0,
              type: "primary",
              onClick: i,
              children: f,
            }),
          })),
          (t[8] = i),
          (t[9] = g))
        : (g = t[9]);
      var y;
      return (
        t[10] !== m || t[11] !== _ || t[12] !== g
          ? ((y = u.jsxs(o("WAWebFlex.react").FlexColumn, {
              xstyle: d,
              children: [m, _, g],
            })),
            (t[10] = m),
            (t[11] = _),
            (t[12] = g),
            (t[13] = y))
          : (y = t[13]),
        y
      );
    }
    l.default = y;
  },
  226,
);
