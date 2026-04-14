__d(
  "WAWebUpdatesTabPrivacyFooter.react",
  [
    "WAWebBannerEventWamEvent",
    "WAWebCTWAConstants",
    "WAWebExternalLink.react",
    "WAWebMobilePlatforms",
    "WAWebNewsletterFooterWithActionLink.react",
    "WAWebPDFNGatingUtils",
    "WAWebQuickPromotionGating",
    "WAWebWamEnumBannerOperations",
    "WAWebWamEnumBannerTypes",
    "isStringNullOrEmpty",
    "react",
    "useVisibility",
    "useWAWebBestQuickPromotionForSurface",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useRef;
    function c() {
      var e = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(
        {
          surfaceId: o("WAWebMobilePlatforms").isSMB()
            ? o("WAWebCTWAConstants")
                .QP_SURFACE_BUSINESS_UPDATES_TAB_PRIVACY_FOOTER
            : o("WAWebCTWAConstants").QP_SURFACE_UPDATES_TAB_PRIVACY_FOOTER,
        },
        {
          fireImpression: !0,
          eligibilityCheck: function () {
            return (
              o("WAWebPDFNGatingUtils").hasAcceptedNewsletterTosBefore(
                o(
                  "WAWebQuickPromotionGating",
                ).getUpdatesTabPrivacyNoticeRolloutDate(),
              ) &&
              o(
                "WAWebQuickPromotionGating",
              ).updatesTabQuickPromotionBannerEnabled()
            );
          },
        },
        [],
      );
      return e == null ? null : s.jsx(m, { quickPromotion: e });
    }
    c.displayName = c.name + " [from " + i.id + "]";
    function d(e) {
      var t = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
        bannerId: "2314739352229016",
        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
          .QP_PRIVACY_FOOTER_UPDATES_TAB,
        bannerOperation: e,
      });
      t.commit();
    }
    function m(e) {
      var t = e.quickPromotion;
      r("vulture")("U1PQPUA62SEU0lOF23aL0KiLMnQ=");
      var n = u(!1),
        a = function () {
          n.current ||
            (d(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN),
            (n.current = !0));
        },
        i = r("useVisibility")({ onVisible: a }),
        l = i[0],
        c = t.image,
        m = t.primaryActionClick,
        _ = t.promotion,
        f = t.sanitizedText;
      return s.jsx(
        o("WAWebNewsletterFooterWithActionLink.react")
          .NewsletterFooterWithActionLink,
        {
          ref: l,
          showBorder: !0,
          text: s.jsxs(s.Fragment, {
            children: [
              s.jsx("span", {
                className: "x1rg5ohu x1xp8n7a xmix8c7 xxymvpz x1uc92m",
                children: c,
              }),
              s.jsxs("span", { className: "xxymvpz", children: [f, " "] }),
              s.jsx("span", {
                className: "xxymvpz",
                children: s.jsx(p, {
                  onClick: function () {
                    (d(
                      o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK,
                    ),
                      m());
                  },
                  promotion: _.promotion,
                }),
              }),
            ],
          }),
        },
      );
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.onClick,
        n = e.promotion;
      r("vulture")("BvsvodYgp3oeMZpxji5DGz2olKY=");
      var a = n.data.primaryAction;
      if (a == null) return null;
      var i = a.deepLink,
        l = a.text,
        u = a.universalLink,
        c = r("isStringNullOrEmpty")(u) ? i : u;
      return r("isStringNullOrEmpty")(c)
        ? null
        : s.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: c,
            onClick: t,
            children: l,
          });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
