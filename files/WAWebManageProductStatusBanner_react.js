__d(
  "WAWebManageProductStatusBanner.react",
  [
    "fbt",
    "WAWebBizAppealProductPopup.react",
    "WAWebBizGatingUtils",
    "WAWebClickableLink.react",
    "WAWebConstantsDeprecated",
    "WAWebDrawerContext",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebProductCatalogContext",
    "WAWebProductCollection",
    "WAWebText_DONOTUSE.react",
    "WAWebUISpacing",
    "WDSIconIcInfo.react",
    "WDSIconIcVisibilityOff.react",
    "fbs",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        root: {
          lineHeight: "x1fc57z9",
          backgroundColor: "x16w0wmm",
          $$css: !0,
        },
        appealText: { display: "x1rg5ohu", fontSize: "x1f6kntn", $$css: !0 },
      },
      m = c.jsxs(o("WAWebFlex.react").FlexRow, {
        className: (e || (e = r("stylex")))([
          d.root,
          o("WAWebUISpacing").uiPadding.vert18,
          o("WAWebUISpacing").uiPadding.horiz30,
          o("WAWebUISpacing").uiMargin.bottom0,
        ]),
        children: [
          c.jsx(o("WAWebFlex.react").FlexItem, {
            className: "x78zum5 x3psx0u x6s0dn4",
            children: c.jsx(r("WDSIconIcInfo.react"), {}),
          }),
          c.jsx(o("WAWebFlex.react").FlexItem, {
            className: e(o("WAWebUISpacing").uiMargin.start30),
            children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
              testid: void 0,
              children: s._(
                /*BTDS*/ "This item isn\u2019t visible to others because the product doesn\u2019t meet WhatsApp\u2019s {commerce_policy_link}.",
                [
                  s._param(
                    "commerce_policy_link",
                    c.jsx(r("WAWebClickableLink.react"), {
                      href: o(
                        "WAWebFaqUrl",
                      ).getWhatsappBusinessCommercePolicyUrl(),
                      onClick: f,
                      children: r("fbs")._(/*BTDS*/ "Commerce Policy"),
                    }),
                  ),
                ],
              ),
            }),
          }),
        ],
      });
    function p(t) {
      var n = o("react-compiler-runtime").c(33),
        a = t.product;
      if (
        a.isSanctioned === !0 &&
        o("WAWebBizGatingUtils").isCountryOfOriginEnabled()
      )
        return m;
      var i;
      n[0] !== a
        ? ((i = function () {
            o("WAWebModalManager").ModalManager.open(
              c.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
                children: function (t) {
                  return c.jsx(r("WAWebBizAppealProductPopup.react"), {
                    product: a,
                    sessionId: o(
                      "WAWebProductCatalogContext",
                    ).getProductCatalogSessionId(t),
                  });
                },
              }),
            );
          }),
          (n[0] = a),
          (n[1] = i))
        : (i = n[1]);
      var l = i,
        u;
      n[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = c.jsx(r("WAWebClickableLink.react"), {
            href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
            onClick: _,
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (n[2] = u))
        : (u = n[2]);
      var p = u;
      if (
        a.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
      ) {
        if (a.isHidden) {
          var f;
          n[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = (e || (e = r("stylex")))([
                d.root,
                o("WAWebUISpacing").uiPadding.vert18,
                o("WAWebUISpacing").uiPadding.horiz30,
                o("WAWebUISpacing").uiMargin.bottom0,
              ])),
              (n[3] = f))
            : (f = n[3]);
          var g;
          n[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = c.jsx(o("WAWebFlex.react").FlexItem, {
                className: "x78zum5 x3psx0u x6s0dn4",
                children: c.jsx(r("WDSIconIcVisibilityOff.react"), {}),
              })),
              (n[4] = g))
            : (g = n[4]);
          var h;
          n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (e || (e = r("stylex")))(
                o("WAWebUISpacing").uiMargin.start30,
              )),
              (n[5] = h))
            : (h = n[5]);
          var y;
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = c.jsx(o("WAWebFlex.react").FlexItem, {
                className: h,
                children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                  children: s._(
                    /*BTDS*/ "You hid this item. Your customers can't see it in your catalog",
                  ),
                }),
              })),
              (n[6] = y))
            : (y = n[6]);
          var C;
          return (
            n[7] !== f
              ? ((C = c.jsxs(o("WAWebFlex.react").FlexRow, {
                  className: f,
                  children: [g, y],
                })),
                (n[7] = f),
                (n[8] = C))
              : (C = n[8]),
            C
          );
        }
        return null;
      }
      if (
        a.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
      ) {
        if (a.canAppeal === !0) {
          var b;
          n[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = s._(
                /*BTDS*/ "This item wasn't approved because it doesn't follow our product or service guidelines. {learn_more_link}.",
                [s._param("learn_more_link", p)],
              )),
              (n[9] = b))
            : (b = n[9]);
          var v = b,
            S;
          n[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((S = s._(/*BTDS*/ "request another review")), (n[10] = S))
            : (S = n[10]);
          var R;
          n[11] !== l
            ? ((R = c.jsx(r("WAWebClickableLink.react"), {
                onClick: l,
                testid: void 0,
                children: S,
              })),
              (n[11] = l),
              (n[12] = R))
            : (R = n[12]);
          var L = R,
            E;
          n[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((E = (e || (e = r("stylex"))).props([
                d.appealText,
                o("WAWebUISpacing").uiMargin.top14,
              ])),
              (n[13] = E))
            : (E = n[13]);
          var k;
          n[14] !== L
            ? ((k = s._(
                /*BTDS*/ "If you feel this is not correct, you can {request_review_link}.",
                [s._param("request_review_link", L)],
              )),
              (n[14] = L),
              (n[15] = k))
            : (k = n[15]);
          var I;
          n[16] !== E || n[17] !== k
            ? ((I = c.jsx(
                "span",
                babelHelpers.extends({}, E, { tabIndex: 0, children: k }),
              )),
              (n[16] = E),
              (n[17] = k),
              (n[18] = I))
            : (I = n[18]);
          var T = I,
            D;
          n[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = { className: "x1fc57z9 x16w0wmm" }), (n[19] = D))
            : (D = n[19]);
          var x, $;
          n[20] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = c.jsx("div", {
                className: "x78zum5 x3psx0u x6s0dn4",
                children: c.jsx(r("WDSIconIcInfo.react"), {}),
              })),
              (x = (e || (e = r("stylex"))).props(
                o("WAWebUISpacing").uiMargin.start30,
              )),
              (n[20] = x),
              (n[21] = $))
            : ((x = n[20]), ($ = n[21]));
          var P;
          return (
            n[22] !== T
              ? ((P = c.jsxs(
                  "div",
                  babelHelpers.extends({}, D, {
                    "data-testid": void 0,
                    children: [
                      $,
                      c.jsxs(
                        "div",
                        babelHelpers.extends({}, x, { children: [v, T] }),
                      ),
                    ],
                  }),
                )),
                (n[22] = T),
                (n[23] = P))
              : (P = n[23]),
            P
          );
        }
        var N;
        n[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = s._(
              /*BTDS*/ "We reviewed this item again and found it didn't follow product or service guidelines. {learn_more_link}.",
              [s._param("learn_more_link", p)],
            )),
            (n[24] = N))
          : (N = n[24]);
        var M = N,
          w;
        return (
          n[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = c.jsx("div", {
                className: "x1fc57z9 x16w0wmm",
                "data-testid": void 0,
                children: M,
              })),
              (n[25] = w))
            : (w = n[25]),
          w
        );
      } else if (
        a.reviewStatus ===
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW ||
        a.reviewStatus ===
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED
      ) {
        var A;
        n[26] !== a.isHidden
          ? ((A = a.isHidden
              ? s._(
                  /*BTDS*/ "This item is being reviewed. You hid it, so customers won't see it in your catalog when it's approved. {learn_more_link}.",
                  [s._param("learn_more_link", p)],
                )
              : s._(
                  /*BTDS*/ "This item is being reviewed. If it's been approved, your customers will be able to see it on your profile. {learn_more_link}.",
                  [s._param("learn_more_link", p)],
                )),
            (n[26] = a.isHidden),
            (n[27] = A))
          : (A = n[27]);
        var F = A,
          O;
        n[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = { className: "x1fc57z9 x16w0wmm" }), (n[28] = O))
          : (O = n[28]);
        var B;
        return (
          n[29] !== F
            ? ((B = c.jsx(
                "div",
                babelHelpers.extends({}, O, {
                  "data-testid": void 0,
                  children: F,
                }),
              )),
              (n[29] = F),
              (n[30] = B))
            : (B = n[30]),
          B
        );
      } else if (a.canAppeal === !1) {
        var W;
        n[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = s._(
              /*BTDS*/ "Your appeal was submitted. If it's approved, your item will be added to your catalog. If it's not approved, you'll be notified.",
            )),
            (n[31] = W))
          : (W = n[31]);
        var q = W,
          U;
        return (
          n[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = c.jsx("div", {
                className: "x1fc57z9 x16w0wmm",
                "data-testid": void 0,
                children: q,
              })),
              (n[32] = U))
            : (U = n[32]),
          U
        );
      }
      return null;
    }
    function _(e) {
      (e.preventDefault(),
        o("WAWebExternalLink.react").openExternalLink(
          r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
        ));
    }
    function f(e) {
      (e.preventDefault(),
        o("WAWebExternalLink.react").openExternalLink(
          o("WAWebFaqUrl").getWhatsappBusinessCommercePolicyUrl(),
        ));
    }
    l.default = p;
  },
  226,
);
