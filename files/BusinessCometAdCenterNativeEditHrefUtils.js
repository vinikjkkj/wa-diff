__d(
  "BusinessCometAdCenterNativeEditHrefUtils",
  [
    "BusinessCometAdCenterNativeEditContextUtils",
    "BusinessCometAdCenterNativeEditRequest.entrypointutils",
    "XBizWebCometAdCenterAllAdsControllerRouteBuilder",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var a, i;
      if (
        (n != null &&
          !o(
            "BusinessCometAdCenterNativeEditRequest.entrypointutils",
          ).isNativeEditFocus(n)) ||
        !o(
          "BusinessCometAdCenterNativeEditContextUtils",
        ).isNativeEditContextEnabled() ||
        e.pageID !== t ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.boostID) ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.pageID) ||
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.legacyAccountID)
      )
        return null;
      var l = { native_edit_dialog: !0 };
      return (a =
        (i = r(
          "XBizWebCometAdCenterAllAdsControllerRouteBuilder",
        ).buildUriNullable(
          babelHelpers.extends(
            { asset_id: e.pageID },
            l,
            {
              native_boost_id: e.boostID,
              source_ad_account_id: e.legacyAccountID,
            },
            n != null ? { native_edit_focus: n } : {},
          ),
        )) == null ||
        (i = i.setDomain("business.facebook.com")) == null ||
        (i = i.setProtocol("https")) == null
          ? void 0
          : i.toString()) != null
        ? a
        : null;
    }
    l.getNativeEditHref = e;
  },
  98,
);
