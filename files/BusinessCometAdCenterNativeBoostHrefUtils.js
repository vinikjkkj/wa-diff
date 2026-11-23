__d(
  "BusinessCometAdCenterNativeBoostHrefUtils",
  [
    "BusinessCometAdCenterNativeEditContextUtils",
    "BusinessCometAdCenterNativeEditRequest.entrypointutils",
    "ConstUriUtils",
    "getBizWebCometURI",
    "openLWIBizWebBoostedItemPicker",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        (n = o("ConstUriUtils").getUri(e)) == null ||
        (n = n.setDomain("business.facebook.com")) == null ||
        (n = n.setProtocol("https")) == null
          ? void 0
          : n.toString()) != null
        ? t
        : null;
    }
    function s(e, t) {
      return (
        o(
          "BusinessCometAdCenterNativeEditContextUtils",
        ).isNativeEditContextEnabled() &&
        e.pageID === t &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.pageID) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.legacyAccountID)
      );
    }
    function u(t, n, a) {
      return !s(t, n) ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(a)
        ? null
        : e(
            String(
              r("getBizWebCometURI")({
                assetID: t.pageID,
                entrypoint: "bizweb_ad_center_overview",
                legacyAccountID: t.legacyAccountID,
                product: "BOOSTED_POST",
                redirectURI: null,
                shouldLogEnterMBSAdsFlow: !1,
                targetID: a,
              }),
            ),
          );
    }
    function c(t, n) {
      return s(t, n)
        ? e(
            o(
              "openLWIBizWebBoostedItemPicker",
            ).buildLWIBizWebBoostedItemPickerURI(
              t.pageID,
              "boosted_post_picker",
              "bizweb_ad_center_overview",
            ),
          )
        : null;
    }
    function d(t, n, a, i) {
      return !s(t, n) ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(t.boostID) ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(a)
        ? null
        : e(
            String(
              r("getBizWebCometURI")({
                assetID: t.pageID,
                boostID: i == null ? t.boostID : void 0,
                clientSpecOverride: i != null ? i : void 0,
                entrypoint: "bizweb_ad_center_overview",
                legacyAccountID: t.legacyAccountID,
                product: "BOOSTED_POST",
                redirectURI: null,
                shouldLogEnterMBSAdsFlow: !1,
                targetID: a,
              }),
            ),
          );
    }
    function m(e, t, n, r) {
      return r === "BOOSTED_POST" ? d(e, t, n, null) : null;
    }
    function p(e, t, n, r) {
      return d(e, t, n, r);
    }
    ((l.getNativeNewBoostPostHref = u),
      (l.getNativeBoostPostPickerHref = c),
      (l.getNativeBoostPostHref = m),
      (l.getNativeBoostPostWithSettingsHref = p));
  },
  98,
);
