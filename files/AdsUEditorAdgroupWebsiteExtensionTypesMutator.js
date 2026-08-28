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
    "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
    "AdsInstagramBrandedContentUtils",
    "AdsInterfacesLogger",
    "AdsMessengerVisualEditorUtils",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsPageUtils",
    "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "CTXChatBuilderFeatureGating",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
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
    function s(e, t) {
      var n,
        r = e;
      return (
        (r = _(r)),
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
    function u(e, t) {
      var n,
        r = e;
      return (
        (r = _(r)),
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
    function c(e, t, n, r) {
      var a,
        i = e;
      ((i = _(i)),
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
          i = f(i, l, s, r);
        }
        return o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).setMessageExtensionTypeCommon(i, t);
      }
      return o(
        "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
      ).setMessageExtensionTypeCommon(i, "none");
    }
    function d(e, t) {
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
        (a = _(a)),
        (a = o("AdsCallAddonUtils").clearCallExtensionFields(a, t)),
        o(
          "AdsUEditorAdgroupMessageExtensionTypesCommonMutator",
        ).cleanMessageExtensionFieldsCommon(a)
      );
    }
    function m(e, t, n, a) {
      var i,
        l = o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e),
        s = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e),
        u = o("AdsAssetFeedUtils").isRegularDCOAdgroupFromRecord(e),
        c = o("AdsObjectTypeUtils").isTemplateCreative(e),
        d = o(
          "AdsAPIAdgroupRecordUtils",
        ).isFlexibleFormatAdOrCreativeAssetGroup(e);
      if (l || s || u || d || c) return e;
      var m = e,
        p =
          (i = e.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.video_data;
      return (
        p
          ? ((m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link.set(
              t,
              m,
            )),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.get(
              m,
            ) == null &&
              (m = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.set(
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                m,
              )))
          : ((m = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.link.set(t, m)),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.link_data.call_to_action.type.get(m) ==
              null &&
              (m = r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.link_data.call_to_action.type.set(
                r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
                m,
              ))),
        o("AdsAdgroupConnectedSourcesMutators").syncSourceUrlIfUnsetMutator(
          m,
          t,
        )
      );
    }
    function p(e, t, n, a, i, l) {
      r("AdsInterfacesLogger").log({
        eventName: "website_flexible_format_defaulting",
        data: {
          adgroup_id: e.id,
          ad_account_id: e.account_id,
          message: l != null ? l : "null",
        },
      });
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
    function _(e) {
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
    function f(e, t, n, a) {
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
            var i = JSON.stringify(
              o("AdsMessengerVisualEditorUtils").getStandardTemplateDefaultJSON(
                t,
                null,
                null,
                !1,
                n,
                a,
              ),
            );
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setWelcomeMessageForAdgroup(e, i);
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
            var l = JSON.stringify(
              r(
                "AdsGetStandardTemplateDefaultJSONHelperForWhatsAppAutofillMessage",
              )(t),
            );
            return o(
              "AdsUEditorUnifiedCreationAdgroupMutators",
            ).setWelcomeMessageForAdgroup(e, l);
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
            var s = JSON.stringify(
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
            ).setWelcomeMessageForAdgroup(e, s);
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
    ((l.setWhatsAppWebsiteExtensionType = e),
      (l.setMessengerWebsiteExtensionType = s),
      (l.setInstagramDirectWebsiteExtensionType = u),
      (l.setMessagingAppsWebsiteExtensionType = c),
      (l.cleanWebsiteExtensionFields = d),
      (l.setStickyWeblinkPrefill = m),
      (l.setFlexibleFormatFields = p),
      (l.cleanWhatsAppExtensionMultiNumberFields = _),
      (l.setPageWelcomeMessageOnWebsiteExtensionTypeSelection = f));
  },
  98,
);
