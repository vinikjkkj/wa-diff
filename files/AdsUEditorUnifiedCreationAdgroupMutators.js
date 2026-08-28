__d(
  "AdsUEditorUnifiedCreationAdgroupMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupTypeUtils",
    "AdsAssetFeedFieldUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsAutomaticFlowUtils",
    "AdsBrandAwarenessUtils",
    "AdsChildAttachmentsUtils",
    "AdsDLOLanguageMutators",
    "AdsDynamicAdCustomizationLanguageMutators",
    "AdsDynamicAdsUtils",
    "AdsGetStandardTemplateDefaultJSONWithDestination",
    "AdsInstagramBrandedContentUtils",
    "AdsInstagramConstants",
    "AdsMessengerConstants",
    "AdsMutators",
    "AdsPageStore",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorInstagramUtils",
    "AdsUEditorMessagingAppsAdgroupMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUEditorUnifiedCreationUtils",
    "AdsUnifiedCreativeAPIFields",
    "AdsWebsiteExtensionTypeUtils",
    "AdsWhatsAppConstants",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "CallPromptFeatureGating",
    "ClickToMessageCTDFeatureGating",
    "ClickToMessageCTMAdoptionFeatureGating",
    "ClickToMessagingStrings",
    "adsAssetFeedGetCallToActionValue",
    "immutable",
    "isFalsey",
    "isStringNullOrEmpty",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      return t
        ? e
        : r("AdsAdgroupRecordAccessors").creative.page_welcome_message.delete(
            e,
          );
    }
    var s = "MESSENGER",
      u = "WHATSAPP",
      c = "INSTAGRAM_DIRECT",
      d = "MESSAGE_PAGE",
      m = "WHATSAPP_MESSAGE",
      p = "INSTAGRAM_MESSAGE",
      _ = function (t) {
        var e = t.adgroup,
          n = t.campaignGroupPromotedPageID,
          a = t.destinationType,
          i = t.isExistingPostAd,
          l = t.isL1MultiDestination,
          c = t.objective,
          p = t.page,
          _ = t.promotedObjectType,
          g = t.specPlugin,
          h = t.welcomeMessage,
          C =
            a !==
            r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
          b = C ? d : m;
        o("CallPromptFeatureGating").eligibleForCallPromptUpdateCTA(
          b,
          p,
          c,
          h,
          "AdsUEditorUnifiedCreationAdgroupMutators.setMultiDestinationCTAFields",
        ) && (b = "CONTACT_US");
        var v = C ? s : u,
          S = o("AdsMutators").chain(
            function (e) {
              return i
                ? e
                : o("AdsUEditorCallToActionMutators").setCallToAction({
                    callToActionType: b,
                    pages: null,
                    cachedCallToActionLink: null,
                    adgroup: e,
                    campaignGroupPromotedPageID: n,
                    objective: c,
                    promotedObjectType: _,
                    specPlugin: g,
                  });
            },
            function (e) {
              return i
                ? e
                : o(
                    "AdsUEditorCallToActionMutators",
                  ).setCallToActionValueAppDestination(e, g, v);
            },
            function (e) {
              return !i && C
                ? o("AdsUEditorCallToActionMutators").setCallToActionLink({
                    link: o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
                    adgroup: e,
                    specPlugin: g,
                  })
                : e;
            },
            function (e) {
              return !i &&
                !o("AdsUEditorUnifiedCreationUtils").isMultiDestinationPAC(e)
                ? r("AdsAdgroupSemanticFields").linkURL.set(
                    g,
                    e,
                    C
                      ? o("AdsMessengerConstants").EMPTY_MESSENGER_LINK
                      : o("AdsWhatsAppConstants").WHATSAPP_API_LINK,
                  )
                : e;
            },
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.additional_data.is_click_to_message.set(
              !0,
            ),
            function (e) {
              return r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.optimization_type.set(
                o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                  ? r("ApiDynamicCreativeOptimizationTypes").PLACEMENT
                  : r("ApiDynamicCreativeOptimizationTypes")
                      .DOF_MESSAGING_DESTINATION,
                e,
              );
            },
            function (e) {
              return x(e, g);
            },
            function (e) {
              return $(e, c, g);
            },
            function (e) {
              return y(e, a, null, n);
            },
            function (e) {
              return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
                ? o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).removeMissingAdlabelsFromCustomizationRules(e)
                : e;
            },
            function (e) {
              return l
                ? w(
                    e,
                    o(
                      "AdsUEditorUnifiedCreationAwarenessUtils",
                    ).getLinkFromMessageType(a),
                  )
                : e;
            },
            function (e) {
              return l && o("AdsAutomaticFlowUtils").isIGExistingPostAd(e)
                ? f(e, a)
                : e;
            },
          );
        return S(e);
      };
    function f(e, t) {
      var n = e;
      return (
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.app_destination.set(
          o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getToplineMessageTypeForMD(t),
          n,
        )),
        (n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.call_to_action.value.link.set(
          o("AdsUEditorUnifiedCreationAwarenessUtils").getLinkFromMessageType(
            t,
          ),
          n,
        )),
        r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
          o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).getCallToActionTypeFromMessageType(t),
          n,
        )
      );
    }
    function g(e) {
      switch (e) {
        case r("AdCampaignDestination").MESSAGING_MESSENGER_WHATSAPP:
          return [!0, !0, !1];
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_MESSENGER:
          return [!0, !1, !0];
        case r("AdCampaignDestination").MESSAGING_INSTAGRAM_DIRECT_WHATSAPP:
          return [!1, !0, !0];
        case r("AdCampaignDestination")
          .MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP:
          return [!0, !0, !0];
        case r("AdCampaignDestination").MESSENGER:
          return [!0, !1, !1];
        case r("AdCampaignDestination").INSTAGRAM_DIRECT:
          return [!1, !1, !0];
        case r("AdCampaignDestination").WHATSAPP:
          return [!1, !0, !1];
        default:
          return [!0, !0, !1];
      }
    }
    function h(e, t, n) {
      var r = 0,
        o = 0,
        a = e ? 1 : 0;
      return (t && ((r = a), a++), n && (o = a), [r, o]);
    }
    function y(e, t, n, r) {
      var o = g(t),
        a = o[0],
        i = o[1],
        l = o[2];
      return R(e, a, i, l, n, r);
    }
    function C(e, t, n) {
      return e
        .setIn([t, "type"], n)
        .setIn([t, "value", "app_destination"], s)
        .setIn(
          [t, "value", "link"],
          o("AdsMessengerConstants").EMPTY_MESSENGER_LINK,
        );
    }
    function b(e, t, n) {
      return e
        .setIn([t, "type"], n)
        .setIn([t, "value", "app_destination"], u)
        .setIn([t, "value", "link"], o("AdsWhatsAppUtils").getDefaultCTALink())
        .deleteIn([t, "value", "app_link"]);
    }
    function v(e, t, n, a, i) {
      var l = e
          .setIn([t, "type"], n)
          .setIn([t, "value", "app_destination"], c)
          .setIn([t, "value", "link"], "https://www.instagram.com"),
        s = i;
      if (s == null) {
        var u;
        s =
          (u = a.creative) == null || (u = u.object_story_spec) == null
            ? void 0
            : u.page_id;
      }
      if (s != null) {
        var d,
          m,
          p = r("AdsPageStore").getLoadObject(s).getValue(),
          _ =
            (d =
              p == null || (m = p.connected_instagram_account) == null
                ? void 0
                : m.user_igid) != null
              ? d
              : "",
          f = o("AdsUEditorInstagramUtils").getAppLinkForInstagramDirect(_);
        l = l.setIn([t, "value", "app_link"], f);
      }
      return l;
    }
    function S(e, t, n, r, o, a, i) {
      var l = o === d || o === m,
        s = e;
      if ((t && (s = s.setIn([0, "type"], o)), n)) {
        var u = l ? m : o;
        s = s.setIn([a, "type"], u);
      }
      if (r) {
        var c = l ? p : o;
        s = s.setIn([i, "type"], c);
      }
      return s;
    }
    function R(e, t, n, a, i, l) {
      var s,
        u = r("immutable").List(),
        c = r("immutable").List(
          (s = e.creative) == null || (s = s.asset_feed_spec) == null
            ? void 0
            : s.call_to_actions,
        ),
        _ =
          r("isFalsey")(i) ||
          o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) ||
          c.size === 0,
        f = O(e, i, c.size),
        g = _ ? u : c,
        y = h(t, n, a),
        R = y[0],
        L = y[1];
      if (_) {
        if (t) {
          var E = f ? i : d;
          g = C(g, u.size, E);
        }
        if (n) {
          var k = f ? i : m,
            I = u.size + R;
          g = b(g, I, k);
        }
        if (a) {
          var T = f ? i : p;
          g = v(g, u.size + L, T, e, l);
        }
      } else g = S(g, t, n, a, i, R, L);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.call_to_actions.set(g, e);
    }
    function L(e, t, n) {
      var a,
        i = r("immutable").List(
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.call_to_actions,
        );
      if (i.isEmpty()) return e;
      var l = i.findIndex(function (e) {
        var t = e.get("value");
        return (
          t instanceof r("immutable").Map &&
          t.get("app_destination") === "INSTAGRAM_DIRECT"
        );
      });
      if (l < 0) return e;
      var s;
      return (
        r("isStringNullOrEmpty")(n)
          ? (s =
              i == null
                ? void 0
                : i
                    .deleteIn([l, "value", "app_link"])
                    .deleteIn([l, "value", "whatsapp_number"]))
          : (s =
              i == null
                ? void 0
                : i
                    .setIn(
                      [l, "value", "app_link"],
                      o(
                        "AdsUEditorInstagramUtils",
                      ).getAppLinkForInstagramDirect(n),
                    )
                    .deleteIn([l, "value", "whatsapp_number"])),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(s, e)
      );
    }
    function E(e) {
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(e);
    }
    function k(e) {
      return o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
        ? o("ClickToMessagingStrings").DEFAULT_HEADLINE.toString()
        : e === r("AdCampaignDestination").WHATSAPP
          ? o("AdsWhatsAppConstants").DEFAULT_HEADLINE.toString()
          : e === r("AdCampaignDestination").INSTAGRAM_DIRECT &&
              o("ClickToMessageCTDFeatureGating").shouldShowCTDCustomHeadline()
            ? o("AdsInstagramConstants").DEFAULT_HEADLINE.toString()
            : o("AdsMessengerConstants").DEFAULT_HEADLINE.toString();
    }
    function I(e, t, n) {
      var r = k(t);
      return T(e, n, r);
    }
    function T(e, t, n) {
      if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return e;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").headline,
          0,
          "text",
          n,
        );
      var a = e;
      if (o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(e)) {
        var i = { text: n, text_type: "headline" };
        a = o(
          "AdsAdgroupCreativeAssetGroupsSpecMutators",
        ).setTextSpecWithTypeAtIndex(e, 0, i, 0, "headline", t);
      }
      return r("AdsAdgroupSemanticFields").headline.set(t, a, n);
    }
    function D(e, t) {
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        return o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
          e,
          t,
          r("AdsUnifiedCreativeAPIFields").headline,
          0,
          "text",
          "",
        );
      var n = e;
      if (o("AdsAPIAdgroupRecordUtils").isCreativeAssetGroupingsAd(n)) {
        var a,
          i,
          l =
            (a =
              (i = n.creative_asset_groups_spec) == null ||
              (i = i.toJS()) == null
                ? void 0
                : i.groups) != null
              ? a
              : [];
        l.forEach(function (e, t) {
          var r = e.texts;
          r != null &&
            ((r = r.filter(function (e) {
              return e.text_type !== "headline";
            })),
            (n = o(
              "AdsAdgroupCreativeAssetGroupsSpecMutators",
            ).setSpecsInCagGroup(n, t, r, "texts")));
        });
      }
      return r("AdsAdgroupSemanticFields").headline.delete(t, n);
    }
    function x(e, t) {
      var n;
      return (n = o("AdsUEditorInstagramUtils").getApplink(e)) != null &&
        n.startsWith("instagram://direct")
        ? o("AdsUEditorCallToActionMutators").deleteCallToActionValueAppLink(
            e,
            t,
          )
        : e;
    }
    function $(e, t, n) {
      var a,
        i =
          (a = e.creative) == null ||
          (a = a.object_story_spec) == null ||
          (a = a.link_data) == null ||
          (a = a.call_to_action) == null ||
          (a = a.value) == null
            ? void 0
            : a.app_destination_page_id;
      return t === r("AdsAPIObjectives").MESSAGES && i
        ? o(
            "AdsUEditorCallToActionMutators",
          ).deleteCallToActionValueAppDestinationPageID(e, n)
        : e;
    }
    function P(e, t, n, a) {
      return (
        (n === r("AdsAPIObjectives").MESSAGES || a === !0) &&
        !r("isStringNullOrEmpty")(t) &&
        !o("AdsChildAttachmentsUtils").isCarouselAd(e) &&
        !o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
        !o("AdsAdgroupTypeUtils").isVideoAd(e)
      );
    }
    function N(e, t, n, o, a) {
      return P(e, t, n, a)
        ? r("AdsAdgroupSemanticFields").imageHash.set(o, e, t)
        : e;
    }
    function M(e, t, n, o, a) {
      return P(e, t, n, a)
        ? r("AdsAdgroupSemanticFields").message.set(o, e, t)
        : e;
    }
    function w(e, t) {
      var n,
        a =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.link_urls;
      if (a != null) {
        r("immutable").List.isList(a) || (a = r("immutable").fromJS(a));
        var i = o("AdsAssetFeedFieldUtils").getDefaultAssetIndex(
          e,
          "link_urls",
        );
        return (
          (a = a.update(i, function (e) {
            return e.update("website_url", function (e) {
              return t;
            });
          })),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls.set(
            a,
            e,
          )
        );
      }
      return e;
    }
    function A(e, t) {
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) {
        var n,
          a = o(
            "AdsUEditorMessagingDestinationUtils",
          ).getAppDestinationsFromCampaignDestination(t);
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.call_to_actions.get(e)) == null
            ? void 0
            : n.filter(function (t, n) {
                var o = r("adsAssetFeedGetCallToActionValue")(
                  e,
                  n,
                  "app_destination",
                );
                return o != null && a.includes(o);
              }),
          e,
        );
      }
      return e;
    }
    function F(e) {
      return e !== d && e !== m && e !== p;
    }
    function O(e, t, n) {
      return (
        r("isTruthy")(t) &&
        F(t) &&
        (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e) || n === 0)
      );
    }
    function B(e) {
      var t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.get(e),
        n =
          t == null
            ? void 0
            : t.findIndex(function (n, r) {
                var o;
                return (
                  t.getIn([r, "type"]) ===
                  ((o = e.creative) == null ||
                  (o = o.asset_feed_spec) == null ||
                  (o = o.call_to_action_types) == null
                    ? void 0
                    : o.first())
                );
              });
      if (n != null) {
        var o = r("adsAssetFeedGetCallToActionValue")(e, n, "link");
        if (o != null) return w(e, o);
      }
      return e;
    }
    function W(e, t) {
      var n = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.get(e),
        o =
          n == null
            ? void 0
            : n.map(function (e, t) {
                return n.getIn([t, "type"]);
              }),
        a = null;
      return (
        o != null &&
        o.find(function (e) {
          return e === d;
        })
          ? (a = d)
          : o != null &&
              o.find(function (e) {
                return e === m;
              })
            ? (a = m)
            : o != null &&
              o.find(function (e) {
                return e === p;
              }) &&
              (a = p),
        a != null
          ? babelHelpers.extends({}, t, { call_to_action_types: [a] })
          : t
      );
    }
    function q(e, t, n, a) {
      t === void 0 && (t = !1);
      var i = e;
      return (
        o("AdsUEditorMessagingDestinationUtils").isClickToMessageAdDestination(
          a,
        ) &&
          t &&
          n != null &&
          ((i = r("AdsAdgroupSemanticFields").pageWelcomeMessage.delete(n, i)),
          (i = r("AdsAdgroupSemanticFields").callToActionValue.delete(n, i)),
          (i = r("AdsAdgroupSemanticFields").headline.delete(n, i))),
        o(
          "AdsUEditorUnifiedCreationUtils",
        ).isMultiDestinationMessagingFromAdSpec(e) &&
          (i = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .additional_data.delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .call_to_actions.delete,
            r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
              .optimization_type.delete,
          )(i)),
        (i = o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
          ? o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).removeMissingAdlabelsFromCustomizationRules(i)
          : i),
        i
      );
    }
    function U(e) {
      if (e == null)
        return { enableAIGenIcebreakers: !1, existingAIGenIcebreakers: null };
      try {
        var t = JSON.parse(e),
          n = t == null ? void 0 : t.ai_generated_icebreaker_toggle_enabled;
        if (n === !0) {
          var r;
          return {
            enableAIGenIcebreakers: !0,
            existingAIGenIcebreakers: {
              icebreakers:
                t == null ||
                (r = t.text_format) == null ||
                (r = r.message) == null
                  ? void 0
                  : r.ice_breakers,
              modelVersion:
                t == null ? void 0 : t.ai_gen_conversation_model_version,
            },
          };
        }
      } catch (e) {
        return { enableAIGenIcebreakers: !1, existingAIGenIcebreakers: null };
      }
      return { enableAIGenIcebreakers: !1, existingAIGenIcebreakers: null };
    }
    function V(e, t) {
      var n = e;
      return (
        (n = o(
          "AdsUEditorAdgroupChildAttachmentsMutators",
        ).mutateChildAttachments(t, n, function (e) {
          return e
            .deleteIn(["link"])
            .deleteIn(["call_to_action", "value"])
            .deleteIn(["call_to_action", "type"])
            .deleteIn(["name"]);
        })),
        n
      );
    }
    function H(e, t) {
      var n = e;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(n))
        return (
          (n = o(
            "AdsUEditorMessagingAppsAdgroupMutators",
          ).clearAFSMessagingAppsCallToActionsFields(n)),
          n
        );
      var a = r("AdsAdgroupSemanticFields").callToActionValue.get(t, n);
      if (a != null && a instanceof r("immutable").Map) {
        var i = a.delete("app_destination").delete("app_link").delete("link");
        n = r("AdsAdgroupSemanticFields").callToActionValue.set(t, n, i);
      }
      return n;
    }
    function G(e, t) {
      var n = e;
      return o("AdsAssetFeedUtils").isPACAdgroupFromRecord(n)
        ? ((n = o(
            "AdsUEditorMessagingAppsAdgroupMutators",
          ).clearAFSMessagingAppsCallToActionsFields(n)),
          n)
        : ((n = r("AdsAdgroupSemanticFields").callToActionType.delete(t, n)),
          n);
    }
    function z(e, t, n, a, i, l, s, u) {
      var c;
      if (
        !(
          (o("AdsBrandAwarenessUtils").isBrandObjective(i) && a) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementVideoViews(s, i) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementPostEngagement(u, i)
        )
      )
        return e;
      var d = e;
      return (
        o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(d) &&
          (d = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
            d,
          )),
        (d = H(d, t)),
        (d = G(d, t)),
        n && (d = V(d, t)),
        (d = Y(d)),
        (d = D(d, t)),
        l !== !1 &&
          (d = d.withMutations(function (e) {
            return e.deleteIn(
              r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
            );
          })),
        ((c = d.creative) == null || (c = c.branded_content) == null
          ? void 0
          : c.promoted_page_id) != null &&
          (d = r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content.promoted_page_id.delete(d)),
        (d = o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
          ? o(
              "AdsUEditorAdgroupAssetFeedMutators",
            ).removeMissingAdlabelsFromCustomizationRules(d)
          : d),
        d
      );
    }
    function j(e, t, n, a, i) {
      var l = e,
        s = o(
          "AdsUEditorUnifiedCreationAwarenessUtils",
        ).messageTypeStringToAdCampaignDestinationType(n);
      if (o("AdsAutomaticFlowUtils").isIGExistingPostAd(e) && s != null)
        return f(l, s);
      var u =
        r("AdsAdgroupSemanticFields").callToActionValue.get(t, l) ||
        o(
          "AdsAPIAdgroupCallToActionValueRecord",
        ).createEmptyCallToActionValueFromAdgroup(l);
      return (
        (u = u.set("app_destination", n)),
        n !== "INSTAGRAM_DIRECT" && (u = u.set("link", a)),
        (l = r("AdsAdgroupSemanticFields").callToActionValue.set(t, l, u)),
        r("AdsAdgroupSemanticFields").callToActionType.set(t, l, i)
      );
    }
    function K(e, t) {
      var n, a, i;
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) return Q(e, t);
      var l = e,
        s =
          (n = l.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.video_data,
        u =
          (a = l.creative) == null || (a = a.object_story_spec) == null
            ? void 0
            : a.link_data,
        c =
          (i = l.creative) == null || (i = i.object_story_spec) == null
            ? void 0
            : i.photo_data;
      if (
        o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(e) ||
        o("AdsWebsiteExtensionTypeUtils").isMessengerExtensionTypeSelected(e) ||
        o("AdsWebsiteExtensionTypeUtils").isInstagramExtensionTypeSelected(e)
      ) {
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
          return (
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.page_welcome_message.set(t, l)),
            l
          );
        if (o("AdsDynamicAdsUtils").isDynamicAd(e))
          return (
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.page_welcome_message.set(
              t,
              l,
            )),
            l
          );
      }
      return (
        s &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.page_welcome_message.set(
            t,
            l,
          )),
        u &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.page_welcome_message.set(
            t,
            l,
          )),
        c &&
          (l = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.photo_data.page_welcome_message.set(
            t,
            l,
          )),
        l
      );
    }
    function Q(e, t) {
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.additional_data.page_welcome_message.set(t, e);
    }
    function X(e, t, n, a, i) {
      var l = o("AdsWebsiteExtensionTypeUtils").getSelectedMessageExtensiontype(
          e,
        ),
        s = o("AdsAPIAdgroupRecordUtils").getPageID(e, n),
        u = JSON.stringify(
          r("AdsGetStandardTemplateDefaultJSONWithDestination")(
            s,
            t,
            i,
            null,
            null,
            l,
          ),
        );
      return a === !0 ? Q(e, u) : K(e, u);
    }
    function Y(e) {
      if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e))
        return r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.additional_data.page_welcome_message.delete(
          e,
        );
      var t = e;
      if (
        o("AdsWebsiteExtensionTypeUtils").isWhatsAppExtensionTypeSelected(e) ||
        o("AdsWebsiteExtensionTypeUtils").isMessengerExtensionTypeSelected(e) ||
        o("AdsWebsiteExtensionTypeUtils").isInstagramExtensionTypeSelected(e)
      ) {
        if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e))
          return (
            (t = r(
              "AdsAdgroupRecordAccessors",
            ).creative.page_welcome_message.delete(t)),
            t
          );
        if (o("AdsDynamicAdsUtils").isDynamicAd(e))
          return (
            (t = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.template_data.page_welcome_message.delete(
              t,
            )),
            t
          );
      }
      return (
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.page_welcome_message.delete(t)),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.page_welcome_message.delete(t)),
        (t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.photo_data.page_welcome_message.delete(t)),
        t
      );
    }
    function J(e, t) {
      var n,
        o = e,
        a =
          (n = o.creative) == null || (n = n.object_story_spec) == null
            ? void 0
            : n.video_data;
      return (
        a ||
          (o = o.setIn(
            r("AdsAPIAdgroupPaths").CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
            t,
          )),
        o
      );
    }
    function Z(e, t, n) {
      if (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e)) return e;
      var a = e;
      return ((a = r("AdsAdgroupSemanticFields").headline.set(n, a, t)), a);
    }
    function ee(e, t, n, r, a, i, l) {
      var s = o(
        "AdsUEditorAdgroupChildAttachmentsMutators",
      ).mutateChildAttachments(t, e, function (e) {
        return e
          .setIn(["link"], i)
          .setIn(["call_to_action", "type"], a)
          .setIn(["call_to_action", "value", "app_destination"], n)
          .setIn(["name"], l);
      });
      return (
        n !== "INSTAGRAM_DIRECT" &&
          (s = o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, s, function (e) {
            return e.setIn(["call_to_action", "value", "link"], r);
          })),
        s
      );
    }
    function te(e, t) {
      var n = e;
      return (
        o("AdsAPIAdgroupRecordUtils").isTemplateCreative(e)
          ? (n = o(
              "AdsDynamicAdCustomizationLanguageMutators",
            ).removeCustomizationRuleSpec(n))
          : (n = o("AdsDLOLanguageMutators").removeAdgroupTranslations(n, t)),
        n
      );
    }
    function ne(e, t, n, a, i, l, s, u, c, d, m, p) {
      var _, f, g;
      if (
        !(
          (o("AdsBrandAwarenessUtils").isBrandObjective(a) && n) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementVideoViews(m, a) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXL1EngagementPostEngagement(p, a) ||
          ((_ = e.creative) == null ? void 0 : _.source_instagram_media_id) !=
            null
        )
      )
        return e;
      var h = e;
      return (
        (h = te(h, t)),
        o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
          ? ((h = T(h, t, d)),
            o(
              "AdsUEditorMessagingAppsAdgroupMutators",
            ).placementCustomizationAdToMessagingAppsLink(h, t, l, s, u, c))
          : (o("AdsAPIAdgroupRecordUtils").isExistingPostAd(h) || (h = J(h, c)),
            !i &&
              !o("AdsAssetFeedUtils").isTextOnlyDofAdgroupFromSpec(h) &&
              (h = Z(h, d, t)),
            (h = j(h, t, l, s, u)),
            i && (h = ee(h, t, l, s, u, c, d)),
            (l === "INSTAGRAM_DIRECT" || l === "MESSENGER") &&
              (h = X(
                h,
                l === "INSTAGRAM_DIRECT"
                  ? r("AdCampaignDestination").INSTAGRAM_DIRECT
                  : r("AdCampaignDestination").MESSENGER,
                t,
              )),
            ((f = h.creative) == null ? void 0 : f.branded_content) != null &&
              ((g = h.creative) == null || (g = g.branded_content) == null
                ? void 0
                : g.promoted_page_id) == null &&
              (h = o(
                "AdsInstagramBrandedContentUtils",
              ).setPromotedPageIDforL1Ads(h)),
            h)
      );
    }
    function re(e, t, n, a, i, l, s) {
      var u,
        c = (u = o(
          "AdsUEditorUnifiedCreationAwarenessUtils",
        )).getToplineMessageTypeForMD(i),
        d = r("AdsAdgroupRecordAccessors").creative.object_type.set(
          r("ApiAdObjectTypes").SHARE,
          e,
        );
      return ne(
        d,
        t,
        n,
        a,
        !1,
        u.adCampaignDestinationTypeToString(c),
        u.getValueLinkFromMessageType(c, null),
        u.getCallToActionTypeFromMessageType(c),
        u.getLinkFromMessageType(c),
        u.getHeadlineFromMessageType(i),
        l,
        s,
      );
    }
    function oe(e) {
      var t,
        n =
          (t = e.creative) == null ||
          (t = t.media_sourcing_spec) == null ||
          (t = t.images) == null ||
          (t = t.first()) == null
            ? void 0
            : t.get("hash");
      return typeof n == "string" && r("isTruthy")(n) ? n : null;
    }
    function ae(e, t) {
      var n = oe(e);
      return n == null ||
        !r("AdsAdgroupSemanticFields").imageHash.isSupported(t, e)
        ? e
        : r("AdsAdgroupSemanticFields").imageHash.set(t, e, n);
    }
    ((l.maybeDeletePageWelcomeMessage = e),
      (l.setMultiDestinationCTAFields = _),
      (l.setCTAValues = y),
      (l.setInstagramValues = L),
      (l.deleteAssetFeedSpec = E),
      (l.updateDefaultHeadline = I),
      (l.deleteHeadline = D),
      (l.deleteAppLink = x),
      (l.deleteAppDestinationPageID = $),
      (l.preserveImageHash = N),
      (l.preserveMessage = M),
      (l.updateAssetFeedSpecLinkURL = w),
      (l.filterPacAfsCtaByAppDestination = A),
      (l.isCustomizedCTA = F),
      (l.initializeAFSLinkURLFromMultiDestCTAs = B),
      (l.initializeAFSCTATypeFromMultiDestCTAs = W),
      (l.cleanUpMessagingRelatedSpecForAwareness = q),
      (l.parseAIGenIcebreakersFromWelcomeMessage = U),
      (l.clearMessagingAppsFields = z),
      (l.setWelcomeMessageForAdgroup = K),
      (l.setDefaultPageWelcomeMessage = X),
      (l.clearPageWelcomeMessage = Y),
      (l.setMessagingAppFields = ne),
      (l.setToplineMessagingLinkDataForMultiDest = re),
      (l.getPrimaryMultiDestImageHash = oe),
      (l.setToplineMessagingImageForMultiDest = ae));
  },
  98,
);
