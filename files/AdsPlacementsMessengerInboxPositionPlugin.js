__d(
  "AdsPlacementsMessengerInboxPositionPlugin",
  [
    "fbt",
    "ix",
    "AdCampaignDestination",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountUtils",
    "AdsAppUrlUtils",
    "AdsBwIPlacementUtils",
    "AdsCampaignMessengerInboxPositionValidator",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsClickToCallAdsUtils",
    "AdsInstagramLeadGenPlacementUtils",
    "AdsInstagramPlacementUtils",
    "AdsManagerIGLoginUtils",
    "AdsMessengerPlacementUtils",
    "AdsMutators",
    "AdsODAXUtils",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecReaderUtilsShared",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementCopy",
    "AdsPlacementEligibilityInfoUtils",
    "AdsPlacementIneligibilityReason",
    "AdsPlacementOmnichannelUtils",
    "AdsPromotedObjectTypes",
    "AdsReachFrequencyPlacementUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsUnifiedProfileVisitUtils",
    "AdsWhatsAppPlacementUtils",
    "IOS14Utils",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c = r("immutable").Set([
        (e = r("AdsAPIObjectives")).LINK_CLICKS,
        e.CONVERSIONS,
        e.MESSAGES,
        e.APP_INSTALLS,
        e.WILDCARD_INTERNAL_ONLY,
      ]),
      d = {
        type: "placements/position",
        key: "messenger/inbox",
        name: s._(/*BTDS*/ "Inbox"),
        nameWithPlatform: s._(/*BTDS*/ "Messenger inbox"),
        mediaRecommendation: {
          copy: r("AdsPlacementCopy").POSITION_MEDIA_RECOMMENDATION
            .MESSENGER_INBOX,
          imageCrop: r("AdImageSpecCropKeys")["100x100"],
          videoCrop: "1:1",
        },
        apiPosition: "messenger_home",
        placementImage: u("556725"),
        placementPreviewImage: u("556726"),
        platformKey: "messenger",
        getPlacementSpecificPreviewInfo: function (t) {
          return o(
            "AdsMessengerPlacementUtils",
          ).getPlacementSpecificPreviewInfo();
        },
        isEnabled: function (t) {
          return !r("gkx")("12433");
        },
        isInactiveByDefault: function (t) {
          return !1;
        },
        getIneligibilityReason: function (t) {
          var e,
            n = o("AdsBwIPlacementUtils").getIneligibilityReason(t);
          if (n) return n;
          var a = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(d, t);
          if (a != null) return a;
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var i = o("AdsODAXUtils").maybeTranslateObjective(
            t.objective,
            t.promotedObjectType,
            t.optimizationGoal,
          );
          if (
            t.spec &&
            o("AdsPlacementAPISpecReaderUtils").isOnlyActiveDevicePlatform(
              t.spec,
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            )
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(
              r("AdsAPIDevicePlatform").CONNECTED_TV,
            );
          var l = r("IOS14Utils").isIOS14AdAccount(t.account);
          if (l)
            return o("AdsPlacementIneligibilityReason").createIOS14Reason();
          if (
            !c.includes(i) &&
            (i !== r("AdsAPIObjectives").LEAD_GENERATION ||
              t.promotedObjectType !== r("AdsPromotedObjectTypes").MESSENGER)
          )
            if (i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES) {
              var u = r("AdsAccountUtils").hasCapabilityFromList(
                t.capabilities,
                "MESSENGER_INBOX_ADS_PRODUCT_CATALOG_SALES",
              );
              if (!u)
                return o(
                  "AdsPlacementIneligibilityReason",
                ).createObjectiveReason(t.objective);
            } else
              return (
                i === r("AdsAPIObjectives").REACH ||
                  i === r("AdsAPIObjectives").BRAND_AWARENESS,
                o("AdsPlacementIneligibilityReason").createObjectiveReason(
                  t.objective,
                )
              );
          if (
            i === r("AdsAPIObjectives").APP_INSTALLS &&
            t.promotedObjectType === r("AdsPromotedObjectTypes").CANVAS_APP
          )
            return o("AdsPlacementIneligibilityReason").createCanvasAppReason();
          if (t.containsOffer === !0)
            return o("AdsPlacementIneligibilityReason").createOfferOptionReason(
              t.objective,
            );
          if (
            o(
              "AdsPlacementEligibilityInfoUtils",
            ).isIneligibleWithMobileOnlyObjectives(
              babelHelpers.extends({}, t, { objective: i }),
            ) ||
            (t.spec.device_platforms &&
              !t.spec.device_platforms.includes(
                r("AdsAPIDevicePlatform").MOBILE,
              ))
          )
            return o(
              "AdsPlacementIneligibilityReason",
            ).createDevicePlatformReason(r("AdsAPIDevicePlatform").DESKTOP);
          if (r("AdsAppUrlUtils").isWindowsURL(t.objectStoreURL))
            return o(
              "AdsPlacementIneligibilityReason",
            ).createWindowsAppReason();
          var m = o(
            "AdsReachFrequencyPlacementUtils",
          ).getReachFrequencyDisabledReason(
            "messenger/inbox",
            babelHelpers.extends({}, t, { objective: i }),
          );
          return m !== null
            ? m
            : (i === r("AdsAPIObjectives").PRODUCT_CATALOG_SALES &&
                  (t.optimizationGoal ===
                    r("AdsAPIOptimizationGoals").REPLIES ||
                    t.optimizationGoal ===
                      r("AdsAPIOptimizationGoals").CONVERSATIONS)) ||
                (t.optimizationGoal ===
                  r("AdsAPIOptimizationGoals")
                    .INCREMENTAL_OFFSITE_CONVERSIONS &&
                  i !== r("AdsAPIObjectives").CONVERSIONS)
              ? o(
                  "AdsPlacementIneligibilityReason",
                ).createOptimizationGoalReason()
              : o("AdsWhatsAppPlacementUtils").isIneligibleForMessengerInbox(
                    babelHelpers.extends({}, t),
                  )
                ? o("AdsPlacementIneligibilityReason").createWhatsAppReason(
                    t.objective,
                  )
                : o("AdsManagerIGLoginUtils").getIsIGLogin(t.account)
                  ? o("AdsPlacementIneligibilityReason").createIGLoginReason()
                  : o(
                        "AdsUnifiedProfileVisitUtils",
                      ).getIsPositionAlwaysDisabledForProfileVisits(
                        i,
                        t.promotedObjectType,
                      )
                    ? o(
                        "AdsUnifiedProfileVisitUtils",
                      ).getUnifiedProfileVisitsAdsPlacementIneligibilityReason(
                        t.destinationType,
                      )
                    : o(
                          "AdsInstagramPlacementUtils",
                        ).isInstagramDestinationEnabledAndSelected(
                          babelHelpers.extends({}, t, { objective: i }),
                        )
                      ? o(
                          "AdsPlacementIneligibilityReason",
                        ).createInstagramDirectReason(t.objective)
                      : o(
                            "AdsInstagramLeadGenPlacementUtils",
                          ).isInstagramLeadGenDestinationSelected(
                            babelHelpers.extends({}, t, { objective: i }),
                          )
                        ? o(
                            "AdsPlacementIneligibilityReason",
                          ).createInstagramLeadGenReason(t.objective)
                        : o(
                              "AdsPlacementOmnichannelUtils",
                            ).isIneligibleForOmnichannelAd(
                              babelHelpers.extends({}, t, { objective: i }),
                            )
                          ? o(
                              "AdsPlacementIneligibilityReason",
                            ).createOmnichannelReason()
                          : t.directInstallDevices === !0
                            ? o(
                                "AdsPlacementIneligibilityReason",
                              ).createDirectInstallReason()
                            : t.promotedObjectType ===
                                r("AdsPromotedObjectTypes").DONATION
                              ? o(
                                  "AdsPlacementIneligibilityReason",
                                ).createDonationReason()
                              : t.promotedObjectType ===
                                  r("AdsPromotedObjectTypes").GROUP
                                ? o(
                                    "AdsPlacementIneligibilityReason",
                                  ).createGroupPromotionReason()
                                : t.promotedObjectType ===
                                    r("AdsPromotedObjectTypes").IMAGINATION
                                  ? o(
                                      "AdsPlacementIneligibilityReason",
                                    ).createImaginationReason()
                                  : t.promotedObjectType ===
                                      r("AdsPromotedObjectTypes").REMINDER
                                    ? o(
                                        "AdsPlacementIneligibilityReason",
                                      ).createReminderPromotionReason()
                                    : t.destinationType ===
                                        r("AdCampaignDestination")
                                          .INSTAGRAM_LIVE
                                      ? o(
                                          "AdsPlacementIneligibilityReason",
                                        ).createInstagramLiveReason()
                                      : t.destinationType ===
                                          r("AdCampaignDestination")
                                            .FACEBOOK_LIVE
                                        ? o(
                                            "AdsPlacementIneligibilityReason",
                                          ).createFacebookLiveReason()
                                        : (e = t.isClickToMPAds) != null && e
                                          ? o(
                                              "AdsPlacementIneligibilityReason",
                                            ).createGenericReason()
                                          : o(
                                                "AdsClickToCallAdsUtils",
                                              ).getIsCallAdsNewOptimizationUnderTrafficObjective(
                                                babelHelpers.extends({}, t, {
                                                  objective: i,
                                                }),
                                              )
                                            ? o(
                                                "AdsPlacementIneligibilityReason",
                                              ).createPhoneCallTrafficReason()
                                            : o(
                                                  "AdsClickToCallAdsUtils",
                                                ).getIsClickToCallAdsUnderLeadGenObjective(
                                                  babelHelpers.extends({}, t, {
                                                    objective: i,
                                                  }),
                                                )
                                              ? o(
                                                  "AdsPlacementIneligibilityReason",
                                                ).createPhoneCallLeadReason()
                                              : o(
                                                    "AdsClickToCallAdsUtils",
                                                  ).getIsClickToCallAdsUnderConversionsOrSalesObjective(
                                                    babelHelpers.extends(
                                                      {},
                                                      t,
                                                      { objective: i },
                                                    ),
                                                  )
                                                ? o(
                                                    "AdsPlacementIneligibilityReason",
                                                  ).createPhoneCallConversionsOrSalesReason()
                                                : o(
                                                      "AdsMessengerPlacementUtils",
                                                    ).isOnlyTargetingRolledBackCountries(
                                                      babelHelpers.extends(
                                                        {},
                                                        t,
                                                        { objective: i },
                                                      ),
                                                    )
                                                  ? o(
                                                      "AdsPlacementIneligibilityReason",
                                                    ).createCustomReason(
                                                      s._(
                                                        /*BTDS*/ "This placement isn't available for one or more of the countries you selected.",
                                                      ),
                                                    )
                                                  : null;
        },
        isActive: function (t) {
          return o(
            "AdsPlacementAPISpecReaderUtilsShared",
          ).isActiveMessengerPosition(t, "messenger_home");
        },
        adsetValidators: [r("AdsCampaignMessengerInboxPositionValidator")],
        getPreviews: function (t) {
          return r("immutable").OrderedSet([
            "previews/messenger_mobile_inbox_media",
          ]);
        },
        getDefaultPreview: function () {
          return "previews/messenger_mobile_inbox_media";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (!d.isEnabled(e.eligibilityInformation.capabilities)) return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              return e.removeGroups.includes("messenger/inbox")
                ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                    return o("AdsPlacementAPISpecWriterUtils").removeGroup(
                      t,
                      "messenger/inbox",
                      e.eligibilityInformation,
                      r("AdsAPITargetFields").MESSENGER_POSITIONS,
                      "messenger",
                    );
                  })
                : e.addGroups.includes("messenger/inbox")
                  ? o("AdsMutators").mutateEach(t, e.campaignIDs, function (t) {
                      return o("AdsPlacementAPISpecWriterUtils").addGroup(
                        t,
                        "messenger/inbox",
                        e.eligibilityInformation,
                        r("AdsAPITargetFields").MESSENGER_POSITIONS,
                        "messenger",
                      );
                    })
                  : t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType:
              return o("AdsMutators").mutateEach(t, e.ids, function (t) {
                var n = t;
                return (
                  (n = o(
                    "AdsPlacementAPISpecWriterUtils",
                  ).removeMessengerThreadPlacement(
                    n,
                    e.eligibilityInformation,
                  )),
                  (n = o("AdsPlacementAPISpecWriterUtils").addGroup(
                    n,
                    e.pluginKey,
                    e.eligibilityInformation,
                    r("AdsAPITargetFields").MESSENGER_POSITIONS,
                    "messenger",
                  )),
                  n
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
                    r("AdsAPITargetFields").MESSENGER_POSITIONS,
                    "messenger",
                  );
                },
              );
          }
          return t;
        },
        parentPlacements: r("immutable").OrderedSet(["facebook/feed"]),
        childPlacements: r("immutable").OrderedSet([]),
      },
      m = d;
    l.default = m;
  },
  226,
);
