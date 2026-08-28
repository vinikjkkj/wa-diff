__d(
  "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
  [
    "fbt",
    "ix",
    "AdImageSpecCropKeys",
    "AdsAPIDevicePlatform",
    "AdsAPIOptimizationGoals",
    "AdsAPITargetFields",
    "AdsAccountStore",
    "AdsCampaignPlacementAddDataActionFlux",
    "AdsDataAtom",
    "AdsMessageMarketingCompatibleSettingsPluginType",
    "AdsMutators",
    "AdsPlacementAPISpecReaderUtils",
    "AdsPlacementAPISpecWriterUtils",
    "AdsPlacementIneligibilityReason",
    "AdsTargetingAccountControlInfoProvider",
    "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
    "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
    "AdsUEditorCampaignPlacementRemoveActionFlux",
    "AdsUEditorCampaignPlacementSetActionFlux",
    "AdsValidationConsts",
    "JSResource",
    "Promise",
    "WAMOStatusAdsManagerUtils",
    "areUpstreamSettingsMessageMarketingCompatible",
    "convertSoftOptOutPlacementsToPositionKeys",
    "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
    "getMarketingMessagesActivationIneligibilityMessage",
    "getMessageMarketingTopIncompatibleSettingData",
    "getUpstreamSettingsFromEligibilityInformation",
    "gkx",
    "immutable",
    "isAccountEligibleForMessengerMarketingMessages",
    "isMarketingMessagesBlockedByTrafficLpvTrust",
    "isMarketingMessagesIneligibleDueToActivationStatus",
    "isRegulatedCategoriesEmpty",
    "logTrafficLpvEligibilityOutcome",
    "promiseDone",
    "setUserAgeUnknownMutator",
  ],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e,
      c,
      d = r("JSResource")("setMessageMarketingSubscriberPoolAudience").__setRef(
        "AdsPlacementsWhatsAppMarketingMessagePositionPlugin",
      ),
      m = r("JSResource")(
        "messageMarketingSubscriberPoolGroupListItem",
      ).__setRef("AdsPlacementsWhatsAppMarketingMessagePositionPlugin");
    function p(e) {
      var t, n, a;
      if (
        !o(
          "WAMOStatusAdsManagerUtils",
        ).isAdAccountEligibleForWAMMUnknownAge() ||
        !o(
          "WAMOStatusAdsManagerUtils",
        ).isOnlyMarketingMessagesSelectedFromCampaign(e)
      )
        return !1;
      var i = r("AdsAccountStore").getSelectedAccount().getValue(),
        l = r("AdsTargetingAccountControlInfoProvider")
          .toFluxStore()
          .getState()
          .get((t = i == null ? void 0 : i.account_id) != null ? t : ""),
        s =
          (n =
            l == null ||
            (a = l.getValue()) == null ||
            (a = a.audience_controls) == null
              ? void 0
              : a.age_min) != null
            ? n
            : r("AdsValidationConsts").minWAMOStatusAge;
      return s !== r("AdsValidationConsts").minWAMOStatusAge
        ? !1
        : e.targeting.user_age_unknown == null;
    }
    function _(e, t, n) {
      return o("AdsMutators").mutateEach(e, t, function (e) {
        return o("AdsPlacementAPISpecWriterUtils").addGroup(
          e,
          "whatsapp/marketing_messages",
          n,
          r("AdsAPITargetFields").WHATSAPP_POSITIONS,
          "whatsapp",
        );
      });
    }
    (d.preload(), m.preload());
    function f(t, a, i, l) {
      return (
        (c || (c = r("AdsDataAtom"))).addPostDispatchCallback(function () {
          var t = (e || (e = n("Promise"))).all([d.load(), m.load()]);
          r("promiseDone")(
            t.then(function (e) {
              var t = e[0],
                n = e[1];
              return t(a, l, n, !1);
            }),
          );
        }),
        o("AdsMutators").mutateEach(t, a, function (e) {
          return o("AdsPlacementAPISpecWriterUtils").removeGroup(
            e,
            "whatsapp/marketing_messages",
            i,
            r("AdsAPITargetFields").WHATSAPP_POSITIONS,
            "whatsapp",
          );
        })
      );
    }
    var g = {
        type: "placements/position",
        key: "whatsapp/marketing_messages",
        name: s._(/*BTDS*/ "Marketing messages"),
        nameWithPlatform: s._(/*BTDS*/ "Marketing messages on WhatsApp"),
        mediaRecommendation: {
          imageCrop: r("AdImageSpecCropKeys")["191x100"],
          videoCrop: "16:9",
        },
        apiPosition: "marketing_messages",
        placementPreviewImage: u("840517"),
        platformKey: "whatsapp",
        isEnabled: function () {
          return o(
            "AdsUEditorAdgroupMessageMarketingLiquidityUtils",
          ).isAdAccountEligibleForMessageMarketingLiquidity();
        },
        getIneligibilityReason: function (t) {
          var e = o(
            "getFilteredPositionsWithParentEligibleParentPlacementAndSoftOptOut",
          ).getSOOBundleParentIneligibilityReason(g, t);
          if (e != null) return e;
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
          if (t.isReelsTrendingAds === !0)
            return o(
              "AdsPlacementIneligibilityReason",
            ).createReelsTrendingAdsReason();
          var n = o(
              "getUpstreamSettingsFromEligibilityInformation",
            ).getUpstreamSettingsFromEligibilityInformation(t),
            a = r("isMarketingMessagesIneligibleDueToActivationStatus")(t);
          if (a) {
            var i;
            return {
              type: "MM_ACTIVATION_INELIGIBLE",
              message: o(
                "getMarketingMessagesActivationIneligibilityMessage",
              ).getMarketingMessagesActivationIneligibilityMessage(
                "placement_info_section",
                t.campaignID,
                (i = r("AdsAccountStore").getSelectedAccount().getValue()) ==
                  null
                  ? void 0
                  : i.account_id,
              ),
            };
          }
          if (
            o(
              "isMarketingMessagesBlockedByTrafficLpvTrust",
            ).isMarketingMessagesBlockedByTrafficLpvTrust(
              t.optimizationGoal,
              t.isBusinessHighTrustForMM,
            )
          )
            return (
              o(
                "logTrafficLpvEligibilityOutcome",
              ).logTrafficLpvEligibilityOutcome({
                campaignID: t.campaignID,
                isEligible: !1,
                optimizationGoal: "landing_page_views",
                reasonCode:
                  t.isBusinessHighTrustForMM == null
                    ? "high_trust_unknown"
                    : "not_high_trust",
              }),
              o("AdsPlacementIneligibilityReason").createMMNotHighTrustReason()
            );
          var l = o(
              "areUpstreamSettingsMessageMarketingCompatible",
            ).areUpstreamSettingsPartiallyCompatibleWithMessageMarketing(
              n,
              o("AdsMessageMarketingCompatibleSettingsPluginType")
                .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            ),
            s = o(
              "getMessageMarketingTopIncompatibleSettingData",
            ).getMessageMarketingTopIncompatibleSettingData(
              n,
              o("AdsMessageMarketingCompatibleSettingsPluginType")
                .AdsMessageMarketingCompatibleSettingsChannelType.WHATSAPP,
            );
          if (
            (n == null ? void 0 : n.optimizationGoal) ===
            r("AdsAPIOptimizationGoals").LANDING_PAGE_VIEWS
          ) {
            var u;
            o(
              "logTrafficLpvEligibilityOutcome",
            ).logTrafficLpvEligibilityOutcome({
              campaignID: t.campaignID,
              isEligible: s == null,
              optimizationGoal: "landing_page_views",
              reasonCode: (u = s == null ? void 0 : s.field) != null ? u : null,
            });
          }
          var c =
            !o("isRegulatedCategoriesEmpty").isRegulatedCategoriesEmpty(
              t.specialAdCategories,
            ) &&
            t.isWhatsAppMarketingMessagesActiveByDefault === !1 &&
            l === !0;
          if (c) return o("AdsPlacementIneligibilityReason").createSACReason();
          if (
            r("gkx")("13496") &&
            s != null &&
            s.field !== "specialAdCategories"
          )
            return { type: "CUSTOM", message: s.message };
          if (t.isWhatsAppMarketingMessagesActiveByDefault === !1)
            return o("AdsPlacementIneligibilityReason").createGenericReason();
          var d = r("convertSoftOptOutPlacementsToPositionKeys")(
            t.softOptOutSpec,
          ).has(g.key);
          return t.isWhatsAppMarketingMessageEnabled === !1 &&
            t.isWhatsAppMarketingMessageTOSAccepted === !1 &&
            !d
            ? o("AdsPlacementIneligibilityReason").createGenericReason()
            : null;
        },
        getPlacementSpecificPreviewInfo: function (t) {
          return null;
        },
        isActive: function (t) {
          return o("AdsPlacementAPISpecReaderUtils").isActivePosition(
            t,
            "whatsapp",
            "marketing_messages",
          );
        },
        isInactiveByDefault: function (t) {
          return r("gkx")("6453")
            ? !0
            : !t.isWhatsAppMarketingMessagesActiveByDefault;
        },
        isHiddenInPlacementUI:
          !o(
            "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
          ).isAdAccountEligibleForMarketingMessagesMessageOnly() ||
          o(
            "isAccountEligibleForMessengerMarketingMessages",
          ).isAccountEligibleForMessengerMarketingMessages(),
        isMessageMarketing: !0,
        adsetValidators: [],
        getPreviews: function (t) {
          return r("immutable").OrderedSet([
            "previews/whatsapp_marketing_message",
          ]);
        },
        getDefaultPreview: function () {
          return "previews/whatsapp_marketing_message";
        },
        adsetReducer: function (t, n) {
          var e = n.action;
          if (
            !o(
              "AdsUEditorAdgroupMarketingMessagesMessageOnlyUtils",
            ).isAdAccountEligibleForMarketingMessagesMessageOnly()
          )
            return t;
          switch (e.type) {
            case o("AdsUEditorCampaignPlacementSetActionFlux").actionType:
              if (e.removeGroups.includes("whatsapp/marketing_messages")) {
                var a = f(t, e.campaignIDs, e.eligibilityInformation, e.hostID);
                return o(
                  "WAMOStatusAdsManagerUtils",
                ).isAdAccountEligibleForWAMMUnknownAge()
                  ? o("AdsMutators").mutateEach(a, e.campaignIDs, function (e) {
                      return o(
                        "WAMOStatusAdsManagerUtils",
                      ).isWAMOStatusSelectedFromCampaign(e)
                        ? e
                        : r("setUserAgeUnknownMutator")(e, null);
                    })
                  : a;
              } else if (e.addGroups.includes("whatsapp/marketing_messages")) {
                var i = _(t, e.campaignIDs, e.eligibilityInformation);
                return o("AdsMutators").mutateEach(
                  i,
                  e.campaignIDs,
                  function (e) {
                    return p(e) ? r("setUserAgeUnknownMutator")(e, !0) : e;
                  },
                );
              }
              return t;
            case o("AdsCampaignPlacementAddDataActionFlux").actionType: {
              var l = _(t, e.ids, e.eligibilityInformation);
              return o("AdsMutators").mutateEach(l, e.ids, function (e) {
                return p(e) ? r("setUserAgeUnknownMutator")(e, !0) : e;
              });
            }
            case o("AdsUEditorCampaignPlacementRemoveActionFlux").actionType: {
              var s = f(t, e.campaignIDs, e.eligibilityInformation, e.hostID);
              return o(
                "WAMOStatusAdsManagerUtils",
              ).isAdAccountEligibleForWAMMUnknownAge()
                ? o("AdsMutators").mutateEach(s, e.campaignIDs, function (e) {
                    return o(
                      "WAMOStatusAdsManagerUtils",
                    ).isWAMOStatusSelectedFromCampaign(e)
                      ? e
                      : r("setUserAgeUnknownMutator")(e, null);
                  })
                : s;
            }
          }
          return t;
        },
      },
      h = g;
    l.default = h;
  },
  226,
);
