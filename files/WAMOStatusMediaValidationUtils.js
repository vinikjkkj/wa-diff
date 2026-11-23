__d(
  "WAMOStatusMediaValidationUtils",
  ["AdsPlacementAssetUtils", "AdsVideoSpecs", "WAMOStatusAdsManagerUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      if (e == null || e.assets == null || e.assetGroupsByAsset == null)
        return !1;
      var r = e.assetGroupsByAsset,
        a = e.assets,
        i =
          a.size === 1
            ? Array.from(a.keys())[0]
            : (t =
                  (n = Array.from(r.entries()).find(function (e) {
                    var t = e[0],
                      n = e[1];
                    return n.includes("WHATSAPP_STATUS");
                  })) == null
                    ? void 0
                    : n[0]) != null
              ? t
              : o("AdsPlacementAssetUtils").getDefaultOrMaxAssetLabel(r);
      if (i == null) return !1;
      var l = a.get(i);
      if (l == null || l.format !== "video") return !1;
      var u = l.video;
      return s(u) !== !1;
    }
    function s(e, t) {
      t === void 0 && (t = r("AdsVideoSpecs").WHATSAPP_STATUS);
      var n = e.width / e.height;
      if (t.maxWarningAspectRatio != null && n > t.maxWarningAspectRatio + 0.01)
        return !1;
      var a = o(
        "WAMOStatusAdsManagerUtils",
      ).isAdAccountEligibleForLPVExpansion()
        ? 3600
        : t.maxWarningLength;
      return !(a != null && e.length > a);
    }
    l.isSingleVideoValidForStatusFromPlacementAssetSpec = e;
  },
  98,
);
