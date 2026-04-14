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
      var n = t.product;
      if (
        n.isSanctioned === !0 &&
        o("WAWebBizGatingUtils").isCountryOfOriginEnabled()
      )
        return m;
      function a() {
        o("WAWebModalManager").ModalManager.open(
          c.jsx(o("WAWebDrawerContext").DrawerContext.Consumer, {
            children: function (t) {
              return c.jsx(r("WAWebBizAppealProductPopup.react"), {
                product: n,
                sessionId: o(
                  "WAWebProductCatalogContext",
                ).getProductCatalogSessionId(t),
              });
            },
          }),
        );
      }
      var i = c.jsx(r("WAWebClickableLink.react"), {
        href: r("WAWebConstantsDeprecated").WA_COMMERCE_POLICY_URL,
        onClick: _,
        children: s._(/*BTDS*/ "Learn more"),
      });
      if (
        n.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.APPROVED
      )
        return n.isHidden
          ? c.jsxs(o("WAWebFlex.react").FlexRow, {
              className: (e || (e = r("stylex")))([
                d.root,
                o("WAWebUISpacing").uiPadding.vert18,
                o("WAWebUISpacing").uiPadding.horiz30,
                o("WAWebUISpacing").uiMargin.bottom0,
              ]),
              children: [
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  className: "x78zum5 x3psx0u x6s0dn4",
                  children: c.jsx(r("WDSIconIcVisibilityOff.react"), {}),
                }),
                c.jsx(o("WAWebFlex.react").FlexItem, {
                  className: e(o("WAWebUISpacing").uiMargin.start30),
                  children: c.jsx(o("WAWebText_DONOTUSE.react").TextDiv, {
                    children: s._(
                      /*BTDS*/ "You hid this item. Your customers can't see it in your catalog",
                    ),
                  }),
                }),
              ],
            })
          : null;
      if (
        n.reviewStatus ===
        o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.REJECTED
      ) {
        if (n.canAppeal === !0) {
          var l = s._(
              /*BTDS*/ "This item wasn't approved because it doesn't follow our product or service guidelines. {learn_more_link}.",
              [s._param("learn_more_link", i)],
            ),
            u = c.jsx(r("WAWebClickableLink.react"), {
              onClick: a,
              testid: void 0,
              children: s._(/*BTDS*/ "request another review"),
            }),
            p = c.jsx(
              "span",
              babelHelpers.extends(
                {},
                (e || (e = r("stylex"))).props([
                  d.appealText,
                  o("WAWebUISpacing").uiMargin.top14,
                ]),
                {
                  tabIndex: 0,
                  children: s._(
                    /*BTDS*/ "If you feel this is not correct, you can {request_review_link}.",
                    [s._param("request_review_link", u)],
                  ),
                },
              ),
            );
          return c.jsxs("div", {
            className: "x1fc57z9 x16w0wmm",
            "data-testid": void 0,
            children: [
              c.jsx("div", {
                className: "x78zum5 x3psx0u x6s0dn4",
                children: c.jsx(r("WDSIconIcInfo.react"), {}),
              }),
              c.jsxs(
                "div",
                babelHelpers.extends(
                  {},
                  e.props(o("WAWebUISpacing").uiMargin.start30),
                  { children: [l, p] },
                ),
              ),
            ],
          });
        }
        var f = s._(
          /*BTDS*/ "We reviewed this item again and found it didn't follow product or service guidelines. {learn_more_link}.",
          [s._param("learn_more_link", i)],
        );
        return c.jsx("div", {
          className: "x1fc57z9 x16w0wmm",
          "data-testid": void 0,
          children: f,
        });
      } else if (
        n.reviewStatus ===
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.NO_REVIEW ||
        n.reviewStatus ===
          o("WAWebProductCollection").PRODUCT_REVIEW_STATUS.OUTDATED
      ) {
        var g = n.isHidden
          ? s._(
              /*BTDS*/ "This item is being reviewed. You hid it, so customers won't see it in your catalog when it's approved. {learn_more_link}.",
              [s._param("learn_more_link", i)],
            )
          : s._(
              /*BTDS*/ "This item is being reviewed. If it's been approved, your customers will be able to see it on your profile. {learn_more_link}.",
              [s._param("learn_more_link", i)],
            );
        return c.jsx("div", {
          className: "x1fc57z9 x16w0wmm",
          "data-testid": void 0,
          children: g,
        });
      } else if (n.canAppeal === !1) {
        var h = s._(
          /*BTDS*/ "Your appeal was submitted. If it's approved, your item will be added to your catalog. If it's not approved, you'll be notified.",
        );
        return c.jsx("div", {
          className: "x1fc57z9 x16w0wmm",
          "data-testid": void 0,
          children: h,
        });
      }
      return null;
    }
    p.displayName = p.name + " [from " + i.id + "]";
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
