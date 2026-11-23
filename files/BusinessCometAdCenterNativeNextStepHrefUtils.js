__d(
  "BusinessCometAdCenterNativeNextStepHrefUtils",
  [
    "BusinessCometAdCenterNativeEditContextUtils",
    "BusinessCometAdCenterNativeEditRequest.entrypointutils",
    "ConstUriUtils",
    "XBizWebCometAdCenterAllAdsControllerRouteBuilder",
    "getSpendLimitReachedContent",
    "getUnsettledAdAccountContent",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (t =
        e == null ||
        (n = e.setDomain("business.facebook.com")) == null ||
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
        ).isNativeEditID(e.boostID) &&
        o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(e.pageID)
      );
    }
    function u(t, n) {
      return s(t, n)
        ? e(
            r(
              "XBizWebCometAdCenterAllAdsControllerRouteBuilder",
            ).buildUriNullable({ asset_id: t.pageID, result_id: t.boostID }),
          )
        : null;
    }
    function c(t, n) {
      var r,
        a = t.businessID,
        i = t.legacyAccountID;
      if (
        !o(
          "BusinessCometAdCenterNativeEditRequest.entrypointutils",
        ).isNativeEditID(i) ||
        (a != null &&
          !o(
            "BusinessCometAdCenterNativeEditRequest.entrypointutils",
          ).isNativeEditID(a))
      )
        return null;
      var l = (r = n(a, i)[0]) == null ? void 0 : r.uri;
      return l != null ? e(o("ConstUriUtils").getUri(l)) : null;
    }
    function d(e, t, n) {
      var o = { boostID: e.boostID, pageID: e.pageID };
      return s(o, t)
        ? n === "payment_failed"
          ? c(e, r("getUnsettledAdAccountContent"))
          : n === "spending_limit_reached"
            ? c(e, r("getSpendLimitReachedContent"))
            : n === "ad_rejected" || n === "ad_in_review"
              ? u(o, t)
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      n,
                  );
                })()
        : null;
    }
    ((l.getNativeResultsOverviewHref = u), (l.getNativeDeliveryFixHref = d));
  },
  98,
);
