__d(
  "CometAdPrefsWAIST26ContentAdvertiser",
  [
    "fbt",
    "CometAdPrefsWAIST26ContentUtils",
    "CometAdPrefsWAISTTargetWithClickLogger.react",
    "FDSLink.react",
    "FDSText.react",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        return s._(/*BTDS*/ "", [s._param("page name", t)]);
      },
      d = function (t) {
        return s._(/*BTDS*/ "", [s._param("audience name", t)]);
      },
      m = function (t) {
        return s._(/*BTDS*/ "", [s._param("audience name", t)]);
      },
      p = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              t === 14 ? "learn_more_bct" : "learn_more_actionable_insights",
              "body4",
            ),
          ),
        ]);
      },
      _ = function (t, n) {
        var e = o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(
          t,
        );
        return s._(/*BTDS*/ "", [
          s._param("advertiser name", e),
          s._param("merchant name", n),
        ]);
      },
      f = function (t, n) {
        var e = o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(
          t,
        );
        return s._(/*BTDS*/ "", [
          s._param("merchant name", n),
          s._param("advertiser name", e),
        ]);
      },
      g = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      };
    function h(e, t, n) {
      return u.jsx(r("CometAdPrefsWAISTTargetWithClickLogger.react"), {
        entity: "open_business_facebook_page_link",
        entityID: e || "",
        parentEntity: "detail_page",
        targetingType: 3,
        url: t,
        children: u.jsx(r("FDSText.react"), {
          color: "primary",
          type: "bodyLink4",
          children: n,
        }),
      });
    }
    h.displayName = h.name + " [from " + i.id + "]";
    var y = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      C = function (t) {
        var e = o(
          "CometAdPrefsWAIST26ContentUtils",
        ).getLearnHowWeUseTheseListsInFbt("learn_more_dfca");
        return s._(/*BTDS*/ "", [
          s._param("advertiser name", t),
          s._param("learn more link for hashed list", e),
        ]);
      },
      b = function (t, n, a, i) {
        var e = o(
            "CometAdPrefsWAIST26ContentUtils",
          ).HASHED_LIST_HELP_CENTER_PATH,
          l = i != null ? h(t, i, a) : a;
        return n
          ? s._(/*BTDS*/ "", [s._param("custom audience owner name", l)])
          : s._(/*BTDS*/ "", [
              s._param("custom audience owner name", l),
              s._implicitParam(
                "=m2",
                u.jsx(r("FDSLink.react"), {
                  href: e,
                  target: "_blank",
                  children: s._(/*BTDS*/ "", [
                    s._implicitParam(
                      "=m1",
                      u.jsx(r("FDSText.react"), {
                        color: "primary",
                        type: "bodyLink4",
                        children: s._(/*BTDS*/ ""),
                      }),
                    ),
                  ]),
                }),
              ),
            ]);
      },
      v = function (t, n) {
        var e = o("CometAdPrefsWAIST26ContentUtils").getAdvertiserPageLink(
          t,
          n,
          3,
        );
        return s._(/*BTDS*/ "", [s._param("advertiser name", e)]);
      },
      S = function (t) {
        return s._(/*BTDS*/ "", [s._param("business name", t)]);
      },
      R = function (t) {
        return s._(/*BTDS*/ "", [s._param("business name", t)]);
      },
      L = function (t) {
        return s._(/*BTDS*/ "", [s._param("business name", t)]);
      },
      E = function (t) {
        return s._(/*BTDS*/ "", [s._param("business name", t)]);
      },
      k = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      I = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      T = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_dpa",
            ),
          ),
        ]);
      },
      D = function () {
        return s._(/*BTDS*/ "");
      },
      x = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      $ = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_lookalike",
            ),
          ),
        ]);
      },
      P = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      N = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      M = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_maca",
            ),
          ),
        ]);
      },
      w = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      A = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      F = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_offline_conversion",
            ),
          ),
        ]);
      },
      O = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      B = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      W = function () {
        return s._(/*BTDS*/ "");
      },
      q = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      U = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      V = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      H = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      G = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_wca",
            ),
          ),
        ]);
      },
      z = function (t) {
        return s._(/*BTDS*/ "", [
          s._param(
            "advertiser name",
            o("CometAdPrefsWAIST26ContentUtils").getTruncatedAdvertiserName(t),
          ),
        ]);
      },
      j = function () {
        return s._(/*BTDS*/ "", [
          s._param(
            "learn more link",
            o("CometAdPrefsWAIST26ContentUtils").getLearnMoreLinkInFbt(
              "learn_more_wca",
            ),
          ),
        ]);
      };
    ((l.getLandingPageBrandedContentWithPageTitle = c),
      (l.getLandingPageBCTTitle = d),
      (l.getDetailPageBCTParagraph = m),
      (l.getDetailPageBCTSubParagraph = p),
      (l.getLandingPageCollaborativeAdTitle = _),
      (l.getLandingPageCollaborativeAdsCategoryTargetingTitle = f),
      (l.getLandingPageDFCATitle = g),
      (l.getDetailPageDFCATitle = y),
      (l.getDetailPageDFCAExplainParagraph = C),
      (l.getDetailPageDFCAUploadParagraph = b),
      (l.getDetailPageDFCAShareParagraph = v),
      (l.getAllowAdvertisingFromListTitle = S),
      (l.getAllowAdvertisingFromListSubtitle = R),
      (l.getDisallowAdvertisingFromListTitle = L),
      (l.getDisallowAdvertisingFromListSubtitle = E),
      (l.getLandingPageDPATitle = k),
      (l.getDetailPageDPATitle = I),
      (l.getDetailPageDPAExplainParagraph = T),
      (l.getLandingPageLookalikeTitle = D),
      (l.getDetailPageLookalikeTitle = x),
      (l.getDetailPageLookalikeParagraph = $),
      (l.getLandingPageMACATitle = P),
      (l.getDetailPageMACATitle = N),
      (l.getDetailPageMACAExplainParagraph = M),
      (l.getLandingPageOfflineConversionTitle = w),
      (l.getDetailPageOfflineConversionTitle = A),
      (l.getOfflineConversionDetails = F),
      (l.getLandingPageQRCodeCATitle = O),
      (l.getDetailPageQRCodeCATitle = B),
      (l.getLandingPageSearchAdTitle = W),
      (l.getLandingPageStoreVisitOrSalesTitle = q),
      (l.getLandingPageUnresolvedCATitle = U),
      (l.getLandingPageWCATitle = V),
      (l.getDetailPageWCATitle = H),
      (l.getDetailPageWCAExplainParagraph = G),
      (l.getDetailPageWCATitleUpdated = z),
      (l.getDetailPageWCAExplainParagraphUpdated = j));
  },
  226,
);
