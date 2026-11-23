__d(
  "AdsUEditorAdgroupWebsiteExtensionTypesMutator",
  [
    "AdsAPIAdgroupRecordUtils",
    "AdsAdgroupConnectedSourcesMutators",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSpecPathPluginResolver",
    "AdsAssetFeedUtils",
    "AdsAudienceDirectConfig",
    "AdsCallAddonUtils",
    "AdsGetStandardTemplateDefaultJSONForWTM",
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
    "AdsInstagramBrandedContentUtils",
    "AdsInstantBookUtils",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsPageUtils",
    "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsWTWAInstantExperienceGatingUtils",
    "CTXChatBuilderFeatureGating",
    "WAMOStatusAdsManagerUtils",
    "WebToMessengerUtils",
    "WebToXDefaultingUtils",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, a, i, l) {
      var u;
      if (
        o("WAMOStatusAdsManagerUtils").isOnlyWAMOStatusSelectedFromCampaign(t)
      )
        return e;
      var c = r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.message_extensions.get(e);
      return (c != null && c.count() > 0) ||
        o(
          "AdsWTWAInstantExperienceGatingUtils",
        ).getWTWAInstantExperienceArmWithoutExposure() !==
          o("AdsWTWAInstantExperienceGatingUtils").WTWAInstantExperienceArm
            .DEFAULTED ||
        !(
          r("gkx")("2532") ||
          o(
            "WebToXDefaultingUtils",
          ).shouldDefaultToWhatsAppForInstantExperienceAds(
            a,
            n,
            t,
            e,
            i,
            (u = t.toJS()) == null ||
              (u = u.targeting) == null ||
              (u = u.geo_locations) == null
              ? void 0
              : u.countries,
          )
        )
        ? e
        : s(e, l);
    }
    function s(e, t) {
      var n,
        r = e;
      return (
        (r = o("AdsCallAddonUtils").clearCallExtensionFields(r, t)),
        ((n = r.creative) == null ? void 0 : n.branded_content) != null &&
          (r = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(
            r,
          )),
        o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).setMessageExtensionTypeCommon(r, "whatsapp")
      );
    }
    function u(e, t) {
      var n,
        r = e;
      return (
        (r = g(r)),
        (r = o("AdsCallAddonUtils").clearCallExtensionFields(r, t)),
        ((n = r.creative) == null ? void 0 : n.branded_content) != null &&
          (r = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(
            r,
          )),
        o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).setMessageExtensionTypeCommon(r, "messenger")
      );
    }
    function c(e, t) {
      var n,
        r = e;
      return (
        (r = g(r)),
        (r = o("AdsCallAddonUtils").clearCallExtensionFields(r, t)),
        ((n = r.creative) == null ? void 0 : n.branded_content) != null &&
          (r = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(
            r,
          )),
        o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).setMessageExtensionTypeCommon(r, "instagram_message")
      );
    }
    function d(e, t, n, r) {
      var a,
        i = e;
      ((i = g(i)),
        (i = o("AdsCallAddonUtils").clearCallExtensionFields(i, n)),
        ((a = i.creative) == null ? void 0 : a.branded_content) != null &&
          (i = o("AdsInstagramBrandedContentUtils").setPromotedPageIDforL1Ads(
            i,
          )));
      var l = o("AdsPageUtils").getPageID(e);
      if (t != null && t.length > 0) {
        if (t.length > 1)
          i = o(
            "AdsUEditorUnifiedCreationAdgroupMutators",
          ).clearPageWelcomeMessage(i);
        else {
          var s =
            t[0] === "messenger"
              ? "messenger"
              : t[0] === "instagram_message"
                ? "instagram_direct"
                : t[0] === "whatsapp"
                  ? "whatsapp"
                  : null;
          i = h(i, l, s, r);
        }
        return o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).setMessageExtensionTypeCommon(i, t);
      }
      return o(
        "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
      ).setMessageExtensionTypeCommon(i, "none");
    }
    function m(e, t) {
      var n = p(e, t);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.instant_book_configuration.is_enabled.set(
        !0,
        n,
      );
    }
    function p(e, t) {
      var n,
        a = e;
      if (((n = a.creative) == null ? void 0 : n.branded_content) != null) {
        var i;
        a =
          (i = r("AdsAdgroupRecordAccessors").creative) == null ||
          (i = i.branded_content) == null
            ? void 0
            : i.promoted_page_id.delete(a);
      }
      return (
        (a = g(a)),
        (a = o("AdsCallAddonUtils").clearCallExtensionFields(a, t)),
        o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).cleanMessageExtensionFieldsCommon(a)
      );
    }
    function _(e, t, n, a, i) {
      var l,
        s = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e),
        u = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e),
        c = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e),
        d = o("AdsObjectTypeUtils").isTemplateCreative(e),
        m = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(e);
      if (s || u || c || m || d) return e;
      var p = e,
        _ =
          (l = e.creative) == null || (l = l.object_story_spec) == null
            ? void 0
            : l.video_data;
      return (
        _
          ? ((p = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.set(
              t,
              p,
            )),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.get(
              p,
            ) == null &&
              (p = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.set(
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                p,
              )))
          : ((p = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(t, p)),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.type.get(p) ==
              null &&
              (p = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.type.set(
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                p,
              ))),
        o("AdsAdgroupConnectedSourcesMutators").syncSourceUrlIfUnsetMutator(
          p,
          t,
          i,
        )
      );
    }
    function f(e, t, n, a, i, l) {
      var s = r("AdsAdgroupSpecPathPluginResolver").resolve({
          accountType: r("AdsAudienceDirectConfig").accountType,
          objective: a,
          promotedObjectType: i,
        }),
        u = {},
        c = {};
      return (
        (c.type = r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE"),
        o("AdsMutators").chain(
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
            ).setOrigins(e, ["creative_asset_groups"]);
          },
          r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
            r("immutable").List([r("immutable").Map(u)]),
          ),
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).setSpecsInCagGroup(e, 0, c, "call_to_action");
          },
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).setDOFToggleSpecForCag(e, !0, !0);
          },
          function (e) {
            return o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).setDefaultCreativeSettingForASCAndBAU(
              n,
              t,
              e,
              r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              null,
              s,
              !0,
            );
          },
        )(e)
      );
    }
    function g(e) {
      var t,
        n = e;
      if (
        ((t = n.creative) == null ||
        (t = t.asset_feed_spec) == null ||
        (t = t.additional_data) == null
          ? void 0
          : t.page_whatsapp_number_id) != null
      ) {
        var o;
        n =
          (o = r("AdsAdgroupRecordAccessors").creative) == null ||
          (o = o.asset_feed_spec) == null ||
          (o = o.additional_data) == null
            ? void 0
            : o.page_whatsapp_number_id.delete(n);
      }
      return n;
    }
    function h(e, t, n, a, i) {
      if (o("WebToMessengerUtils").isWebsiteAndMessagesCampaign(i)) return e;
      switch (n) {
        case "messaging_apps":
          return e;
        case "messenger":
          if (
            o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
              n,
              null,
              !1,
              a,
            )
          ) {
            var l = JSON.stringify(
              r("AdsGetStandardTemplateDefaultJSONForWTM")(t, a),
            );
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setWelcomeMessageForAdgroup(e, l);
          }
          break;
        case "whatsapp":
          if (
            o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(
              "whatsapp",
              null,
              !1,
              a,
            )
          ) {
            var s = JSON.stringify(
              r(
                "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
              )(t),
            );
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setWelcomeMessageForAdgroup(e, s);
          }
          break;
        case "instagram_direct":
          if (
            o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTD(
              "instagram_message",
              null,
              !1,
              a,
            )
          ) {
            var u = JSON.stringify(
              o("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(
                t,
                null,
                null,
                !1,
                "instagram_message",
                a,
              ),
            );
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setWelcomeMessageForAdgroup(e, u);
          }
          break;
        default:
          break;
      }
      return o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTM(
        "messenger",
        null,
        !1,
        a,
      ) ||
        o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTWA(
          "whatsapp",
          null,
          !1,
          a,
        ) ||
        o("CTXChatBuilderFeatureGating").enableMessageTemplateForWTD(
          "instagram_message",
          null,
          !1,
          a,
        )
        ? o("AdsUEditorUnifiedCreationAdgroupMutators").clearPageWelcomeMessage(
            e,
          )
        : e;
    }
    function y(e) {
      var t;
      return (
        ((t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.message_extensions) != null ||
        o("AdsCallAddonUtils").isCallAddonSelected(e) ||
        o("AdsInstantBookUtils").isInstantBookSelected(e)
      );
    }
    function C(e, t) {
      if (!y(e)) return t;
      var n = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec,
        o = t,
        a = n.message_extensions.get(e);
      a != null && (o = n.message_extensions.set(a, o));
      var i = n.additional_data.page_whatsapp_number_id.get(e);
      i != null && (o = n.additional_data.page_whatsapp_number_id.set(i, o));
      var l = n.call_ads_configuration.get(e);
      l != null && (o = n.call_ads_configuration.set(l, o));
      var s = n.instant_book_configuration.get(e);
      return (s != null && (o = n.instant_book_configuration.set(s, o)), o);
    }
    ((l.maybeDefaultWhatsAppAddOnForWTWAIX = e),
      (l.setWhatsAppWebsiteExtensionType = s),
      (l.setMessengerWebsiteExtensionType = u),
      (l.setInstagramDirectWebsiteExtensionType = c),
      (l.setMessagingAppsWebsiteExtensionType = d),
      (l.setInstantBookWebsiteExtensionType = m),
      (l.cleanWebsiteExtensionFields = p),
      (l.setStickyWeblinkPrefill = _),
      (l.setFlexibleFormatFields = f),
      (l.cleanWhatsAppExtensionMultiNumberFields = g),
      (l.setPageWelcomeMessageOnWebsiteExtensionTypeSelection = h),
      (l.hasBrowserAddOn = y),
      (l.restoreBrowserAddOn = C));
  },
  98,
);
