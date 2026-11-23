__d(
  "AdsPreviewsAudienceNetworkInstreamVideoPlugin",
  ["fbt", "ix", "AdsAudienceDirectConfig", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/audience_network_instream_video",
        apiFormat: "AUDIENCE_NETWORK_INSTREAM_VIDEO",
        customizationGroup: "AUDIENCE_NETWORK_INSTREAM_VIDEO",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: r("AdsAudienceDirectConfig").isDirectDealsUser
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        positionName: r("AdsAudienceDirectConfig").isDirectDealsUser
          ? s._(/*BTDS*/ "")
          : s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("22168"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
