__d(
  "AdsPlacementsWhatsAppChannelPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdsAPIDevicePlatform",
    "AdsAPITargetFields",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementPositionLabelConstant",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "GeoBaseText.react",
    "PromoChannelAdsManagerUtils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "immutable",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = e || (e = o("react"));
    function d(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.children,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = { className: "x1jstp8q x14vqqas x2b8uid" }), (t[0] = a))
        : (a = t[0]);
      var i;
      return (
        t[1] !== n
          ? ((i = c.jsx(
              "div",
              babelHelpers.extends({}, a, {
                children: c.jsx(r("GeoBaseText.react"), {
                  color: "placeholder",
                  size: "value",
                  children: n,
                }),
              }),
            )),
            (t[1] = n),
            (t[2] = i))
          : (i = t[2]),
        i
      );
    }
    var m = {
        type: "placements/position",
        key: "whatsapp/channel",
        name: r("AdsPlacementPositionLabelConstant").channel,
        nameWithPlatform: s._(/*BTDS*/ "WhatsApp Channel"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .WHATSAPP_CHANNEL,
        },
        apiPosition: "channel",
        placementPreviewImage: u("836512"),
        platformKey: "whatsapp",
        isEnabled: function () {
          return o(
            "PromoChannelAdsManagerUtils",
          ).isAdAccountEligibleForPromoChannel();
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(m, t);
          return e != null
            ? e
            : t.spec &&
                o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
                  t.spec,
                  r("AdsAPIDevicePlatform").CONNECTED_TV,
                )
              ? o("AdsPlacementIneligibilityReason").createDevicePlatformReason(
                  r("AdsAPIDevicePlatform").CONNECTED_TV,
                )
              : t.destinationType !==
                  r("AdCampaignDestination").WHATSAPP_CHANNEL
                ? o(
                    "AdsPlacementIneligibilityReason",
                  ).createPromoChannelDestinationReason()
                : t.isReelsTrendingAds === !0
                  ? o(
                      "AdsPlacementIneligibilityReason",
                    ).createReelsTrendingAdsReason()
                  : null;
        },
        getPlacementSpecificPreviewInfo: function (t) {
          var e = c.jsx(d, {
            children: s._(/*BTDS*/ "Branded channel in WhatsApp."),
          });
          return { description: e };
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "whatsapp",
            "channel",
          );
        },
        isInactiveByDefault: function (t) {
          return !0;
        },
        adsetValidators: [],
        getPreviews: function (t) {
          return r("immutable").OrderedSet(["previews/whatsapp_channel"]);
        },
        getDefaultPreview: function () {
          return "previews/whatsapp_channel";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("whatsapp/channel")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "whatsapp/channel",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                      "whatsapp",
                    );
                  })
                : e.addGroups.includes("whatsapp/channel")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "whatsapp/channel",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                        "whatsapp",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                return o("AdsPlacementAPISpecWriterUtils").addGroup(
                  t,
                  e.pluginKey,
                  e.eligibilityInformation,
                  r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                  "whatsapp",
                );
              });
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType:
              return o("AdsMutators").mutateEach(
                t,
                e.campaignIDs,
                function (t) {
                  return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                    t,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").WHATSAPP_POSITIONS,
                    "whatsapp",
                  );
                },
              );
          }
          return t;
        },
      },
      p = m;
    l.default = p;
  },
  226,
);
