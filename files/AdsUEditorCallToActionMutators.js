__d(
  "AdsUEditorCallToActionMutators",
  [
    "AdCampaignDestination",
    "AdsAPIAdgroupCallToActionValueRecord",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIChildAttachmentPaths",
    "AdsAPIObjectives",
    "AdsAccountStore",
    "AdsAdgroupCreativeAssetGroupsSpecMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedUtils",
    "AdsCallToActionGeoUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsEditorPostEditMode",
    "AdsInteractivePollLinkUtils",
    "AdsInterfacesLogger",
    "AdsLinkTypeUtils",
    "AdsLocalAwarenessUtils",
    "AdsMutators",
    "AdsPACSupportedLinkCTAs",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupChildAttachmentsMutators",
    "AdsUEditorAdgroupDynamicLocalAdsUtils",
    "AdsUEditorAdgroupMultiProductMutators",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAdgroupMutators",
    "AdsUEditorUnifiedCreationAwarenessUtils",
    "AdsUEditorUnifiedCreationUtils",
    "AdsUEditorWebsiteMutators",
    "AdsUnifiedCreativeAPIFields",
    "AdsUssdCodeUtils",
    "AdsWhatsAppDestinationUtils",
    "AdsWhatsAppUtils",
    "ApiAdObjectTypes",
    "adsInteractivePollHasFbFeedVideoPollSpec",
    "immutable",
    "isFalsey",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("immutable").List(),
      s = function (n) {
        var t = n.adgroup,
          a = n.cachedCallToActionLink,
          i = n.callToActionType,
          l = n.campaignGroupPromotedPageID,
          s = n.campaignObjective,
          _ = n.destination,
          y = n.eligibilityInformation,
          b = n.objective,
          v = n.pages,
          S = n.prefillPhoneNumber,
          R = n.promotedObjectType,
          L = n.specPlugin,
          E = t,
          k = r("AdsAccountStore").getSelectedAccount().getValue();
        if (r("isTruthy")(i)) {
          var I,
            T = t,
            D =
              s === r("AdsAPIObjectives").OUTCOME_LEADS ||
              s === r("AdsAPIObjectives").LEAD_GENERATION;
          if (
            ((_ === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
              (_ === r("AdCampaignDestination").ON_AD &&
                (b === r("AdsAPIObjectives").LEAD_GENERATION ||
                  b === r("AdsAPIObjectives").OUTCOME_LEADS))) &&
              ((E = r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action.type.set(i, E)),
              (E = r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action_type.set(i, E))),
            o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(E) &&
              !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(E) &&
              !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                t,
              ))
          ) {
            if (
              ((E = r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.call_to_action_types.index(0)
                .set(i, E)),
              o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
                t,
              ))
            ) {
              var x,
                $ =
                  ((x = t.creative) == null || (x = x.asset_feed_spec) == null
                    ? void 0
                    : x.call_to_actions) || e,
                P = $.setIn(["0", "type"], i);
              E = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.set(P, E);
            }
            if (
              o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(t) ||
              o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(t)
            ) {
              var N,
                w =
                  ((N = t.creative) == null || (N = N.asset_feed_spec) == null
                    ? void 0
                    : N.call_to_actions) || e,
                A = w.setIn(["0", "type"], i);
              E = o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.set(A),
                r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
                  i,
                ),
              )(E);
            }
            var F =
                o(
                  "AdsWhatsAppDestinationUtils",
                ).isEligibleForL1WhatsAppDestination(b, L) &&
                o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(t, L),
              O =
                r("AdsPACSupportedLinkCTAs").includes(i) ||
                r("AdsAdgroupSemanticFields").callToAction.isSupported(L, t) ||
                F;
            if (O) {
              var B,
                W =
                  ((B = t.creative) == null || (B = B.asset_feed_spec) == null
                    ? void 0
                    : B.call_to_actions) || e,
                U = W.setIn(["0", "type"], i);
              ((_ === r("AdCampaignDestination").WHATSAPP || F) &&
                (U = W.setIn(
                  ["0", "value", "app_destination"],
                  "WHATSAPP",
                ).setIn(["0", "type"], i)),
                (E = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.set(U, E)));
            }
          } else
            E = r("AdsAdgroupSemanticFields").callToActionType.isSupported(L, E)
              ? o("AdsMutators").chain(
                  function (e) {
                    return r("AdsAdgroupSemanticFields").callToActionType.set(
                      L,
                      e,
                      i,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setCagCallToActionType(e, i);
                  },
                )(E)
              : E;
          if (
            ((E = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachNonPlaceDataChild(["call_to_action", "type"], i, E)),
            o("AdsAdgroupSpecUtils").isCTALinkCustomizable(E, b, l, null, i) ||
              o("AdsAdgroupSpecUtils").isCTALinkCustomizable(
                T,
                b,
                l,
                null,
                p(T, L),
              ))
          ) {
            var V,
              H =
                (V = E.creative) == null || (V = V.object_story_spec) == null
                  ? void 0
                  : V.page_id,
              G = r("isTruthy")(H) && v && v.has(H) ? v.get(H) : null;
            E = h({
              account: k,
              callToActionType: i,
              cachedCallToActionLink: a,
              adgroup: E,
              page: G,
              objective: b,
              specPlugin: L,
              campaignGroupPromotedPageID: l,
              prefillPhoneNumber: S,
            });
          }
          (m(i, b) &&
            (i === "GET_DIRECTIONS" &&
            (o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(b, l) ||
              o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(
                t,
              ))
              ? (E = C(E, L, "link", "https://fb.com/dynamic_get_directions"))
              : (E = q(E, L))),
            !o("AdsWhatsAppUtils").isWhatsAppCTAType(i) &&
              (!o("AdsWhatsAppUtils").isWhatsAppDestinationAd(E) ||
                R !== r("AdsPromotedObjectTypes").WHATSAPP) &&
              (E = M(E, L)),
            (E = f(E, L, i, b, R)),
            (E = g(E, L, i, b, R, _)));
          var j = d(b, l, i);
          j != null &&
            (E = o("AdsUEditorWebsiteMutators").setLandingViewType({
              landingViewType: j,
              adgroup: E,
              pages: v,
              objective: b,
              promotedObjectType: R,
              specPlugin: L,
              campaignGroupPromotedPageID: l,
            }));
          var K = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).messageTypeStringToAdCampaignDestinationType(
            o(
              "AdsUEditorUnifiedCreationAwarenessUtils",
            ).getSelectedMessagingType(t),
          );
          if (
            (r("isTruthy")(_) || r("isTruthy")(K)) &&
            (o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
              t,
            ) ||
              o("AdsUEditorUnifiedCreationUtils").isMultiDestinationPAC(t))
          ) {
            var Q;
            E = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
              E,
              o("AdsUEditorMessagingDestinationUtils").isMultiDestination(_)
                ? _
                : K,
              i,
              t == null ||
                (Q = t.creative) == null ||
                (Q = Q.object_story_spec) == null
                ? void 0
                : Q.page_id,
            );
          }
          (D &&
            _ === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
            ((I = E.creative) == null ||
            (I = I.object_story_spec) == null ||
            (I = I.video_data) == null
              ? void 0
              : I.call_to_action) != null &&
            (E = o("AdsMutators").chain(
              r(
                "AdsAdgroupRecordAccessors",
              ).creative.object_story_spec.video_data.call_to_action.type.set(
                i,
              ),
              r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
                i,
              ),
              r("AdsAdgroupRecordAccessors").creative.call_to_action_type.set(
                i,
              ),
            )(E)),
            (E = c(E, i, b, R)));
        } else
          ((E = z(E, L)),
            (E = o("AdsUEditorAdgroupMultiProductMutators").deleteInEachChild(
              ["call_to_action"],
              E,
            )));
        return (
          b === r("AdsAPIObjectives").APP_INSTALLS &&
            i != null &&
            y != null &&
            r("adsInteractivePollHasFbFeedVideoPollSpec")(E, y.spec) &&
            (E = o("AdsInteractivePollLinkUtils").setAppInstallDisplayLink(
              E,
              i,
              L,
            )),
          (E = u(E, L, i, _)),
          E
        );
      };
    function u(e, t, n, o) {
      var a = r("AdsAdgroupSemanticFields").callToActionValue.isSupported(t, e);
      return a && o === r("AdCampaignDestination").FACEBOOK
        ? L(e, t, "MARKETPLACE")
        : a && n === "MESSAGE_PAGE"
          ? L(e, t, "MESSENGER")
          : a && n === "WHATSAPP_MESSAGE"
            ? L(e, t, "WHATSAPP")
            : a && n === "INSTAGRAM_MESSAGE"
              ? L(e, t, "INSTAGRAM_DIRECT")
              : (n === "MARKETPLACE" &&
                    o !== r("AdCampaignDestination").FACEBOOK) ||
                  n === "CALL_NOW"
                ? k(e, t)
                : e;
    }
    function c(e, t, n, a) {
      var i,
        l,
        s,
        u =
          n === r("AdsAPIObjectives").APP_INSTALLS ||
          (n === r("AdsAPIObjectives").LINK_CLICKS &&
            a === r("AdsPromotedObjectTypes").MOBILE_APP),
        c =
          ((i = e.creative) == null ? void 0 : i.media_type) ===
            "SCHEDULED_LIVE_VIDEO" &&
          ((l = e.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null
            ? void 0
            : l.call_to_action) != null;
      if (!u || !c) return e;
      var d =
        (s = e.creative) == null ||
        (s = s.object_story_spec) == null ||
        (s = s.video_data) == null
          ? void 0
          : s.call_to_action;
      return d == null
        ? e
        : o("AdsMutators").chain(
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.set(t),
            r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(t),
            r("AdsAdgroupRecordAccessors").creative.call_to_action_type.set(t),
            function (e) {
              var t,
                n,
                o = e;
              return (
                (t = d.value) != null &&
                  t.link &&
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.link.set(d.value.link, o)),
                (n = d.value) != null &&
                  n.app_link &&
                  (o = r(
                    "AdsAdgroupRecordAccessors",
                  ).creative.call_to_action.value.app_link.set(
                    d.value.app_link,
                    o,
                  )),
                o
              );
            },
          )(e);
    }
    function d(e, t, n) {
      if (!o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(e, t))
        return null;
      switch (n) {
        case "LEARN_MORE":
        case "SEE_DETAILS":
        case "ORDER_NOW":
        case "SHOP_NOW":
        case "CALL_NOW":
        case "MESSAGE_PAGE":
          return "EXTERNAL";
        case "GET_DIRECTIONS":
          return "GET_DIRECTIONS";
        default:
          return null;
      }
    }
    function m(e, t) {
      return (
        e === "WHATSAPP_MESSAGE" ||
        ((e === "GET_DIRECTIONS" || e === "CALL_NOW") &&
          t === r("AdsAPIObjectives").STORE_VISITS)
      );
    }
    function p(e, t) {
      return r("AdsAdgroupSemanticFields").callToActionType.isSupported(t, e)
        ? r("AdsAdgroupSemanticFields").callToActionType.get(t, e)
        : null;
    }
    var _ = function (t) {
        var e = t.adgroup,
          n = t.link,
          a = t.specPlugin,
          i = e,
          l = ["call_to_action", "value", "link"];
        o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)
          ? (i = C(e, a, "link", n))
          : (i = r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
              a,
              i,
            )
              ? r("AdsAdgroupSemanticFields").callToActionValue.set(
                  a,
                  i,
                  (
                    r("AdsAdgroupSemanticFields").callToActionValue.get(a, i) ||
                    o(
                      "AdsAPIAdgroupCallToActionValueRecord",
                    ).createEmptyCallToActionValueFromAdgroup(i)
                  ).set("link", n),
                )
              : i);
        var s = o("AdsAdgroupSpecUtils").getCallToActionType(i);
        if (s === "GET_DIRECTIONS" && n != null && n !== "") {
          var u = o("AdsCallToActionGeoUtils").parseGeoLink(n);
          u &&
            ((i = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.ADDRESS_STRING,
              u.get("name"),
              i,
            )),
            (i = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.LATITUDE,
              u.get("coordinates").latitude,
              i,
            )),
            (i = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.LONGITUDE,
              u.get("coordinates").longitude,
              i,
            )));
        }
        return o(
          "AdsUEditorAdgroupMultiProductMutators",
        ).setInEachNonPlaceDataChild(l, n, i);
      },
      f = function (t, n, o, a, i) {
        if (i !== r("AdsPromotedObjectTypes").PRODUCT_SET) return t;
        if (o === "MESSAGE_PAGE") {
          var e = L(t, n, "MESSENGER"),
            l = r("AdsAdgroupSemanticFields").linkURL.get(n, e);
          return l ? C(e, n, "link", l) : e;
        } else return k(t, n);
      },
      g = function (t, n, o, a, i, l) {
        if (l === r("AdCampaignDestination").WHATSAPP) {
          var e = r("AdsAdgroupSemanticFields").callToActionValue.get(n, t),
            s = e && e.get("app_destination");
          return t;
        }
        return i !== r("AdsPromotedObjectTypes").PRODUCT_SET
          ? t
          : o === "WHATSAPP_MESSAGE"
            ? L(t, n, "WHATSAPP")
            : o === "MESSAGE_PAGE"
              ? t
              : k(t, n);
      },
      h = function (t) {
        var e = t.account,
          n = t.adgroup,
          a = t.cachedCallToActionLink,
          i = t.callToActionType,
          l = t.campaignGroupPromotedPageID,
          s = t.objective,
          u = t.page,
          c = t.prefillPhoneNumber,
          d = t.promotedObjectType,
          m = t.specPlugin,
          f = o("AdsAdgroupSpecUtils").isCTALinkCustomizable(
            n,
            s,
            l,
            d,
            p(n, m),
          );
        if (i === "DIAL_CODE" && e != null) {
          var g = o("AdsUssdCodeUtils").getAdAccountDefaultUSSDCodeLink(
            e.account_id,
          );
          return _({
            link: r("isTruthy")(g) ? g : void 0,
            adgroup: n,
            specPlugin: m,
          });
        }
        if (!f && r("isFalsey")(a))
          return _({ link: void 0, adgroup: n, specPlugin: m });
        if (r("isTruthy")(a)) return _({ link: a, adgroup: n, specPlugin: m });
        var h = o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(s, l);
        if (i === "CALL_NOW" && !h) {
          var y;
          if (
            (r("AdsInterfacesLogger").log({
              eventName: "call_ads_phone_number_prefill_eligible",
              data: ((y = {}), (y.objective = s), y),
            }),
            r("isTruthy")(c))
          ) {
            var C;
            return (
              r("AdsInterfacesLogger").log({
                eventName: "call_ads_phone_number_prefill_success",
                data: ((C = {}), (C.objective = s), C),
              }),
              _({ link: c, adgroup: n, specPlugin: m })
            );
          }
        }
        return _({ link: "", adgroup: n, specPlugin: m });
      },
      y = function (t, n) {
        return r("isTruthy")(n)
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.link_format.set(
              n,
              t,
            )
          : t;
      };
    function C(e, t, n, a, i) {
      return (
        i === void 0 && (i = r("AdsPromotedObjectTypes").NONE),
        o("AdsMutators").chain(
          function (e) {
            if (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e)) {
              if (
                r("AdsAdgroupSemanticFields").callToAction.isSupported(t, e)
              ) {
                var i,
                  l =
                    (i = e.creative) == null || (i = i.asset_feed_spec) == null
                      ? void 0
                      : i.call_to_actions;
                if (l instanceof r("immutable").List && l.size === 1) {
                  var s = [].concat(
                    r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC
                      .CALL_TO_ACTIONS,
                    ["0", "value", n],
                  );
                  return e.setIn(s, a);
                }
              }
              return e;
            }
            return r("AdsAdgroupSemanticFields").callToActionValue.set(
              t,
              e,
              (
                r("AdsAdgroupSemanticFields").callToActionValue.get(t, e) ||
                o(
                  "AdsAPIAdgroupCallToActionValueRecord",
                ).createEmptyCallToActionValueFromAdgroup(e)
              ).set(n, a),
            );
          },
          function (e) {
            return o(
              "AdsUEditorAdgroupChildAttachmentsMutators",
            ).mutateChildAttachments(t, e, function (e) {
              return e.setIn(["call_to_action", "value", n], a);
            });
          },
          function (e) {
            if (
              o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
              i === r("AdsPromotedObjectTypes").WEB_AND_APP
            ) {
              var t = r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action.get(e);
              if (t != null && (t == null ? void 0 : t.value) != null) {
                var l = t.value;
                return r(
                  "AdsAdgroupRecordAccessors",
                ).creative.call_to_action.value.set(l.set(n, a), e);
              }
            }
            return e;
          },
        )(e)
      );
    }
    function b(e, t, n) {
      return o("AdsMutators").chain(
        function (e) {
          var a,
            i = o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e);
          if (
            i &&
            r("AdsAdgroupSemanticFields").callToAction.isSupported(t, e)
          ) {
            var l = r("AdsAdgroupSemanticFields").callToAction.get(t, e);
            return l instanceof r("immutable").List
              ? o("AdsAssetFeedMutationUtils").setAssetsArrayInField(
                  e,
                  t,
                  r("AdsUnifiedCreativeAPIFields").callToAction,
                  l
                    .map(function (e) {
                      return e.deleteIn(["value", n]);
                    })
                    .toArray(),
                )
              : e;
          }
          return r("AdsAdgroupSemanticFields").callToActionValue.isSupported(
            t,
            e,
          )
            ? r("AdsAdgroupSemanticFields").callToActionValue.set(
                t,
                e,
                (a = r("AdsAdgroupSemanticFields").callToActionValue.get(
                  t,
                  e,
                )) == null
                  ? void 0
                  : a.delete(n),
              )
            : e;
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, e, function (e) {
            var t = ["call_to_action", "value", n];
            return e.hasIn(t) ? e.deleteIn(t) : e;
          });
        },
      )(e);
    }
    function v(e, t, n) {
      return o("AdsMutators").chain(
        function (e) {
          return r("AdsAdgroupSemanticFields").callToActionType.set(n, e, t);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(n, e, function (e) {
            return e.setIn(["call_to_action", "type"], t);
          });
        },
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecMutators",
          ).setCagCallToActionType(e, t);
        },
      )(e);
    }
    function S(e, t, n) {
      return C(e, n, "lead_gen_form_id", t);
    }
    function R(e, t) {
      return E(e, t) ? b(e, t, "lead_gen_form_id") : e;
    }
    function L(e, t, n) {
      return C(e, t, "app_destination", n);
    }
    function E(e, t) {
      return (
        r("AdsAdgroupSemanticFields").callToActionValue.isSupported(t, e) ||
        (o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e) &&
          r("AdsAdgroupSemanticFields").callToAction.isSupported(t, e))
      );
    }
    function k(e, t) {
      return E(e, t) ? b(e, t, "app_destination") : e;
    }
    function I(e, t) {
      return E(e, t) ? b(e, t, "page") : e;
    }
    function T(e, t, n) {
      return C(e, t, "app_destination_page_id", n);
    }
    function D(e, t) {
      return E(e, t) ? b(e, t, "app_destination_page_id") : e;
    }
    function x(e, t, n) {
      return C(e, t, "app_link", n);
    }
    function $(e, t) {
      return E(e, t) ? b(e, t, "app_link") : e;
    }
    function P(e) {
      var t, n;
      return ((t = e.creative) == null ||
      (t = t.object_story_spec) == null ||
      (t = t.link_data) == null ||
      (t = t.call_to_action) == null ||
      (t = t.value) == null
        ? void 0
        : t.app_link) != null
        ? r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.app_link.delete(
            e,
          )
        : ((n = e.creative) == null ||
            (n = n.object_story_spec) == null ||
            (n = n.video_data) == null ||
            (n = n.call_to_action) == null ||
            (n = n.value) == null
              ? void 0
              : n.app_link) != null
          ? r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.app_link.delete(
              e,
            )
          : e;
    }
    function N(e, t, n) {
      return C(e, t, "whatsapp_number", n);
    }
    function M(e, t) {
      return E(e, t) ? b(e, t, "whatsapp_number") : e;
    }
    function w(e, t, n) {
      return C(e, t, "object_store_urls", n);
    }
    function A(e, t, n) {
      return C(e, t, "android_url", n);
    }
    function F(e, t, n) {
      return C(e, t, "ios_url", n);
    }
    function O(e, t) {
      return E(e, t) ? b(e, t, "object_store_urls") : e;
    }
    function B(e, t, n) {
      return C(e, t, "application", n);
    }
    function W(e, t) {
      return E(e, t) ? b(e, t, "application") : e;
    }
    function q(e, t) {
      return E(e, t) ? b(e, t, "link") : e;
    }
    function U(e, t) {
      return E(e, t) ? b(e, t, "page") : e;
    }
    function V(e, t) {
      return E(e, t) ? b(e, t, "link_caption") : e;
    }
    function H(e, t, n) {
      return C(e, n, "instagram_profile_cta_destination", t);
    }
    function G(e, t, n) {
      var o = e;
      return (
        E(o, t) && (o = b(o, t, "instagram_profile_cta_destination")),
        (n === r("AdsEditorPostEditMode").EXISTING ||
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.instagram_profile_cta_destination.get(
            o,
          ) != null) &&
          (o = r(
            "AdsAdgroupRecordAccessors",
          ).creative.call_to_action.value.instagram_profile_cta_destination.delete(
            o,
          )),
        o
      );
    }
    function z(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          var n = e;
          if (
            r("AdsAdgroupSemanticFields").callToActionType.isSupported(t, n)
          ) {
            n = r("AdsAdgroupSemanticFields").callToActionType.delete(t, n);
            var a = r(
                "AdsUnifiedCreativeAPIFields",
              ).callToActionType.getPathOrThrow(n, t),
              i = a.slice(0, -1),
              l = i[i.length - 1] === "call_to_action";
            (l && (n = n.deleteIn(i)),
              o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).isUnifiedCreativePhotoDataSupported(n) &&
                (n = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.delete(n)));
          }
          return (
            (n = r("AdsAdgroupSemanticFields").callToActionValue.delete(t, n)),
            n
          );
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, e, function (e) {
            return e.deleteIn(["call_to_action"]);
          });
        },
      )(e);
    }
    function j(e, t) {
      return o("AdsMutators").chain(
        function (e) {
          var n =
              r("AdsAdgroupSemanticFields").callToActionValue.get(t, e) ||
              o(
                "AdsAPIAdgroupCallToActionValueRecord",
              ).createEmptyCallToActionValueFromAdgroup(e),
            a = o("AdsAPIAdgroupRecordUtils").getObjectType(e);
          if (a === r("ApiAdObjectTypes").VIDEO) {
            var i,
              l,
              s =
                (i = r("AdsAdgroupSemanticFields").callToActionValue.get(
                  t,
                  e,
                )) == null
                  ? void 0
                  : i.get("link_description"),
              u =
                (l = r("AdsAdgroupSemanticFields").callToActionValue.get(
                  t,
                  e,
                )) == null
                  ? void 0
                  : l.get("link_title");
            n = n.clear().set("link_description", s).set("link_title", u);
          } else n = n.clear();
          return r("AdsAdgroupSemanticFields").callToActionValue.set(t, e, n);
        },
        function (e) {
          return o(
            "AdsUEditorAdgroupChildAttachmentsMutators",
          ).mutateChildAttachments(t, e, function (e) {
            var t = e,
              n = ["call_to_action", "value"];
            t.getIn(n) ||
              (t = t.setIn(["call_to_action", "value", "link"], ""));
            var r = t.getIn(n);
            return t.setIn(n, r.clear());
          });
        },
      )(e);
    }
    ((l.setCallToAction = s),
      (l.setCallToActionLink = _),
      (l.setCachedOrDefaultCallToActionLink = h),
      (l.setCallToActionLinkFormat = y),
      (l.setCallToActionValueField = C),
      (l.setCallToActionType = v),
      (l.setCallToActionValueLeadGenFormID = S),
      (l.deleteCallToActionValueLeadGenFormID = R),
      (l.setCallToActionValueAppDestination = L),
      (l.deleteCallToActionValueAppDestination = k),
      (l.deletePageLikesCallToActionValuePage = I),
      (l.setCallToActionValueAppDestinationPageID = T),
      (l.deleteCallToActionValueAppDestinationPageID = D),
      (l.setCallToActionValueAppLink = x),
      (l.deleteCallToActionValueAppLink = $),
      (l.deleteCallToActionAppLinkField = P),
      (l.setCallToActionValueWhatsAppNumber = N),
      (l.deleteCallToActionValueWhatsAppNumber = M),
      (l.setCallToActionValueObjectStoreURLs = w),
      (l.setCallToActionValueAndroidURL = A),
      (l.setCallToActionValueIOSURL = F),
      (l.deleteCallToActionValueObjectStoreURLs = O),
      (l.setCallToActionValueApplication = B),
      (l.deleteCallToActionValueApplication = W),
      (l.deleteCallToActionValueLink = q),
      (l.deleteCallToActionValuePage = U),
      (l.deleteCallToActionValueCaption = V),
      (l.setCallToActionValueInstagramProfileDestination = H),
      (l.deleteCallToActionValueInstagramProfileDestination = G),
      (l.deleteCallToAction = z),
      (l.resetCallToActionValue = j));
  },
  98,
);
