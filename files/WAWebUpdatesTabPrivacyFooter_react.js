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
    "react-compiler-runtime",
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
      var e = o("react-compiler-runtime").c(5),
        t,
        n,
        r;
      e[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            surfaceId: o("WAWebMobilePlatforms").isSMB()
              ? o("WAWebCTWAConstants")
                  .QP_SURFACE_BUSINESS_UPDATES_TAB_PRIVACY_FOOTER
              : o("WAWebCTWAConstants").QP_SURFACE_UPDATES_TAB_PRIVACY_FOOTER,
          }),
          (n = { fireImpression: !0, eligibilityCheck: d }),
          (r = []),
          (e[0] = t),
          (e[1] = n),
          (e[2] = r))
        : ((t = e[0]), (n = e[1]), (r = e[2]));
      var a = o(
        "useWAWebBestQuickPromotionForSurface",
      ).useBestQuickPromotionForSurface(t, n, r);
      if (a == null) return null;
      var i;
      return (
        e[3] !== a
          ? ((i = s.jsx(p, { quickPromotion: a })), (e[3] = a), (e[4] = i))
          : (i = e[4]),
        i
      );
    }
    function d() {
      return (
        o("WAWebPDFNGatingUtils").hasAcceptedNewsletterTosBefore(
          o(
            "WAWebQuickPromotionGating",
          ).getUpdatesTabPrivacyNoticeRolloutDate(),
        ) &&
        o("WAWebQuickPromotionGating").updatesTabQuickPromotionBannerEnabled()
      );
    }
    function m(e) {
      var t = new (o("WAWebBannerEventWamEvent").BannerEventWamEvent)({
        bannerId: "2314739352229016",
        bannerType: o("WAWebWamEnumBannerTypes").BANNER_TYPES
          .QP_PRIVACY_FOOTER_UPDATES_TAB,
        bannerOperation: e,
      });
      t.commit();
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(21),
        n = e.quickPromotion;
      r("vulture")("U1PQPUA62SEU0lOF23aL0KiLMnQ=");
      var a = u(!1),
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function () {
            a.current ||
              (m(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.SHOWN),
              (a.current = !0));
          }),
          (t[0] = i))
        : (i = t[0]);
      var l = i,
        c;
      t[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = { onVisible: l }), (t[1] = c))
        : (c = t[1]);
      var d = r("useVisibility")(c),
        p = d[0],
        f = n.image,
        g = n.primaryActionClick,
        h = n.promotion,
        y = n.sanitizedText,
        C;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { className: "x1rg5ohu x1xp8n7a xmix8c7 xxymvpz x1uc92m" }),
          (t[2] = C))
        : (C = t[2]);
      var b;
      t[3] !== f
        ? ((b = s.jsx("span", babelHelpers.extends({}, C, { children: f }))),
          (t[3] = f),
          (t[4] = b))
        : (b = t[4]);
      var v;
      t[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = { className: "xxymvpz" }), (t[5] = v))
        : (v = t[5]);
      var S;
      t[6] !== y
        ? ((S = s.jsxs(
            "span",
            babelHelpers.extends({}, v, { children: [y, " "] }),
          )),
          (t[6] = y),
          (t[7] = S))
        : (S = t[7]);
      var R;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = { className: "xxymvpz" }), (t[8] = R))
        : (R = t[8]);
      var L;
      t[9] !== g
        ? ((L = function () {
            (m(o("WAWebWamEnumBannerOperations").BANNER_OPERATIONS.CLICK), g());
          }),
          (t[9] = g),
          (t[10] = L))
        : (L = t[10]);
      var E;
      t[11] !== h.promotion || t[12] !== L
        ? ((E = s.jsx(
            "span",
            babelHelpers.extends({}, R, {
              children: s.jsx(_, { onClick: L, promotion: h.promotion }),
            }),
          )),
          (t[11] = h.promotion),
          (t[12] = L),
          (t[13] = E))
        : (E = t[13]);
      var k;
      t[14] !== b || t[15] !== S || t[16] !== E
        ? ((k = s.jsxs(s.Fragment, { children: [b, S, E] })),
          (t[14] = b),
          (t[15] = S),
          (t[16] = E),
          (t[17] = k))
        : (k = t[17]);
      var I;
      return (
        t[18] !== k || t[19] !== p
          ? ((I = s.jsx(
              o("WAWebNewsletterFooterWithActionLink.react")
                .NewsletterFooterWithActionLink,
              { ref: p, showBorder: !0, text: k },
            )),
            (t[18] = k),
            (t[19] = p),
            (t[20] = I))
          : (I = t[20]),
        I
      );
    }
    function _(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.onClick,
        a = e.promotion;
      r("vulture")("BvsvodYgp3oeMZpxji5DGz2olKY=");
      var i = a.data.primaryAction;
      if (i == null) return null;
      var l = i.deepLink,
        u = i.text,
        c = i.universalLink,
        d = r("isStringNullOrEmpty")(c) ? l : c;
      if (r("isStringNullOrEmpty")(d)) return null;
      var m;
      return (
        t[0] !== d || t[1] !== n || t[2] !== u
          ? ((m = s.jsx(o("WAWebExternalLink.react").ExternalLink, {
              href: d,
              onClick: n,
              children: u,
            })),
            (t[0] = d),
            (t[1] = n),
            (t[2] = u),
            (t[3] = m))
          : (m = t[3]),
        m
      );
    }
    l.default = c;
  },
  98,
);
