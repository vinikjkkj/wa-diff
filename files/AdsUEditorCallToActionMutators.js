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
    "AdsCampaignLiveVideoAdsUtils",
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
          y = n.destination,
          C = n.eligibilityInformation,
          b = n.objective,
          v = n.pages,
          S = n.prefillPhoneNumber,
          R = n.prefillPhoneNumberSource,
          L = n.promotedObjectType,
          E = n.specPlugin,
          k = t,
          I = r("AdsAccountStore").getSelectedAccount().getValue();
        if (r("isTruthy")(i)) {
          var T,
            D = t,
            x =
              s === r("AdsAPIObjectives").OUTCOME_LEADS ||
              s === r("AdsAPIObjectives").LEAD_GENERATION;
          if (
            ((y === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM ||
              (y === r("AdCampaignDestination").ON_AD &&
                (b === r("AdsAPIObjectives").LEAD_GENERATION ||
                  b === r("AdsAPIObjectives").OUTCOME_LEADS))) &&
              ((k = r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action.type.set(i, k)),
              (k = r(
                "AdsAdgroupRecordAccessors",
              ).creative.call_to_action_type.set(i, k))),
            o("AdsAssetFeedUtils").isAdgroupUsingNonDofAssetFeedSpec(k) &&
              !o("AdsAssetFeedUtils").isFormatAutomationAdgroupFromRecord(k) &&
              !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
                t,
              ))
          ) {
            if (
              ((k = r("AdsAdgroupRecordAccessors")
                .creative.asset_feed_spec.call_to_action_types.index(0)
                .set(i, k)),
              o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
                t,
              ))
            ) {
              var $,
                P =
                  (($ = t.creative) == null || ($ = $.asset_feed_spec) == null
                    ? void 0
                    : $.call_to_actions) || e,
                M = P.setIn(["0", "type"], i);
              k = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.call_to_actions.set(M, k);
            }
            if (
              o("AdsAssetFeedUtils").isMCAAdgroupFromRecord(t) ||
              o("AdsAssetFeedUtils").isPACAndIGAdsFromRecord(t)
            ) {
              var w,
                A =
                  ((w = t.creative) == null || (w = w.asset_feed_spec) == null
                    ? void 0
                    : w.call_to_actions) || e,
                F = A.setIn(["0", "type"], i);
              k = o("AdsMutators").chain(
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.set(F),
                r("AdsAdgroupRecordAccessors").creative.call_to_action.type.set(
                  i,
                ),
              )(k);
            }
            var O =
                o(
                  "AdsWhatsAppDestinationUtils",
                ).isEligibleForL1WhatsAppDestination(b, E) &&
                o("AdsLinkTypeUtils").isWhatsAppLinkTypeSelected(t, E),
              B =
                r("AdsPACSupportedLinkCTAs").includes(i) ||
                r("AdsAdgroupSemanticFields").callToAction.isSupported(E, t) ||
                O;
            if (B) {
              var q,
                U =
                  ((q = t.creative) == null || (q = q.asset_feed_spec) == null
                    ? void 0
                    : q.call_to_actions) || e,
                V = U.setIn(["0", "type"], i);
              ((y === r("AdCampaignDestination").WHATSAPP || O) &&
                (V = U.setIn(
                  ["0", "value", "app_destination"],
                  "WHATSAPP",
                ).setIn(["0", "type"], i)),
                (k = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.call_to_actions.set(V, k)));
            }
          } else
            k = r("AdsAdgroupSemanticFields").callToActionType.isSupported(E, k)
              ? o("AdsMutators").chain(
                  function (e) {
                    return r("AdsAdgroupSemanticFields").callToActionType.set(
                      E,
                      e,
                      i,
                    );
                  },
                  function (e) {
                    return o(
                      "AdsAdgroupCreativeAssetGroupsSpecMutators",
                    ).setCagCallToActionType(e, i);
                  },
                )(k)
              : k;
          if (
            ((k = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachNonPlaceDataChild(["call_to_action", "type"], i, k)),
            o("AdsAdgroupSpecUtils").isCTALinkCustomizable(k, b, l, null, i) ||
              o("AdsAdgroupSpecUtils").isCTALinkCustomizable(
                D,
                b,
                l,
                null,
                p(D, E),
              ))
          ) {
            var G,
              z =
                (G = k.creative) == null || (G = G.object_story_spec) == null
                  ? void 0
                  : G.page_id,
              j = r("isTruthy")(z) && v && v.has(z) ? v.get(z) : null;
            k = h({
              account: I,
              callToActionType: i,
              cachedCallToActionLink: a,
              adgroup: k,
              page: j,
              objective: b,
              specPlugin: E,
              campaignGroupPromotedPageID: l,
              prefillPhoneNumber: S,
              prefillPhoneNumberSource: R,
            });
          }
          (m(i, b) &&
            (i === "GET_DIRECTIONS" &&
            (o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(b, l) ||
              o("AdsUEditorAdgroupDynamicLocalAdsUtils").isDynamicLocalAdgroup(
                t,
              ))
              ? (k = _({
                  adgroup: k,
                  link: "https://fb.com/dynamic_get_directions",
                  specPlugin: E,
                }))
              : (k = W(k, E))),
            !o("AdsWhatsAppUtils").isWhatsAppCTAType(i) &&
              (!o("AdsWhatsAppUtils").isWhatsAppDestinationAd(k) ||
                L !== r("AdsPromotedObjectTypes").WHATSAPP) &&
              (k = N(k, E)),
            (k = f(k, E, i, b, L)),
            (k = g(k, E, i, b, L, y)));
          var K = d(b, l, i);
          K != null &&
            (k = o("AdsUEditorWebsiteMutators").setLandingViewType({
              landingViewType: K,
              adgroup: k,
              pages: v,
              objective: b,
              promotedObjectType: L,
              specPlugin: E,
              campaignGroupPromotedPageID: l,
            }));
          var Q = o(
            "AdsUEditorUnifiedCreationAwarenessUtils",
          ).messageTypeStringToAdCampaignDestinationType(
            o(
              "AdsUEditorUnifiedCreationAwarenessUtils",
            ).getSelectedMessagingType(t),
          );
          if (
            (r("isTruthy")(y) || r("isTruthy")(Q)) &&
            (o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(
              t,
            ) ||
              o("AdsUEditorUnifiedCreationUtils").isMultiDestinationPAC(t))
          ) {
            var X;
            k = o("AdsUEditorUnifiedCreationAdgroupMutators").setCTAValues(
              k,
              o("AdsUEditorMessagingDestinationUtils").isMultiDestination(y)
                ? y
                : Q,
              i,
              t == null ||
                (X = t.creative) == null ||
                (X = X.object_story_spec) == null
                ? void 0
                : X.page_id,
            );
          }
          (x &&
            y === r("AdCampaignDestination").WEBSITE_AND_LEAD_FORM &&
            ((T = k.creative) == null ||
            (T = T.object_story_spec) == null ||
            (T = T.video_data) == null
              ? void 0
              : T.call_to_action) != null &&
            (k = o("AdsMutators").chain(
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
            )(k)),
            (k = c(k, i, b, L)));
        } else
          ((k = H(k, E)),
            (k = o("AdsUEditorAdgroupMultiProductMutators").deleteInEachChild(
              ["call_to_action"],
              k,
            )));
        return (
          b === r("AdsAPIObjectives").APP_INSTALLS &&
            i != null &&
            C != null &&
            r("adsInteractivePollHasFbFeedVideoPollSpec")(k, C.spec) &&
            (k = o("AdsInteractivePollLinkUtils").setAppInstallDisplayLink(
              k,
              i,
              E,
            )),
          (k = u(k, E, i, y)),
          k
        );
      };
    function u(e, t, n, a) {
      var i = r("AdsAdgroupSemanticFields").callToActionValue.isSupported(t, e);
      return i && a === r("AdCampaignDestination").FACEBOOK
        ? L(e, t, "MARKETPLACE")
        : i && n === "MESSAGE_PAGE"
          ? L(e, t, "MESSENGER")
          : i && n === "WHATSAPP_MESSAGE"
            ? o("AdsLinkTypeUtils").isInstagramLiveWhatsappLinkTypeSelected(
                e,
                t,
              )
              ? e
              : L(e, t, "WHATSAPP")
            : i && n === "INSTAGRAM_MESSAGE"
              ? L(e, t, "INSTAGRAM_DIRECT")
              : (n === "MARKETPLACE" &&
                    a !== r("AdCampaignDestination").FACEBOOK) ||
                  n === "CALL_NOW"
                ? k(e, t)
                : e;
    }
    function c(e, t, n, a) {
      var i,
        l,
        s,
        u =
          o(
            "AdsCampaignLiveVideoAdsUtils",
          ).getScheduledLiveVideoAppCallToActionType(n, a) != null,
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
              u.name,
              i,
            )),
            (i = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.LATITUDE,
              u.coordinates.latitude,
              i,
            )),
            (i = o(
              "AdsUEditorAdgroupMultiProductMutators",
            ).setInEachPlaceDataChild(
              r("AdsAPIChildAttachmentPaths").PLACE_DATA.LONGITUDE,
              u.coordinates.longitude,
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
          d = t.prefillPhoneNumberSource,
          m = t.promotedObjectType,
          f = t.specPlugin,
          g = o("AdsAdgroupSpecUtils").isCTALinkCustomizable(
            n,
            s,
            l,
            m,
            p(n, f),
          );
        if (i === "DIAL_CODE" && e != null) {
          var h = o("AdsUssdCodeUtils").getAdAccountDefaultUSSDCodeLink(
            e.account_id,
          );
          return _({
            link: r("isTruthy")(h) ? h : void 0,
            adgroup: n,
            specPlugin: f,
          });
        }
        if (!g && r("isFalsey")(a))
          return _({ link: void 0, adgroup: n, specPlugin: f });
        if (r("isTruthy")(a)) return _({ link: a, adgroup: n, specPlugin: f });
        var y = o("AdsLocalAwarenessUtils").isDynamicLocalAwareness(s, l);
        if (i === "CALL_NOW" && !y) {
          var C;
          if (
            (r("AdsInterfacesLogger").log({
              eventName: "call_ads_phone_number_prefill_eligible",
              data: ((C = {}), (C.objective = s), C),
            }),
            r("isTruthy")(c))
          ) {
            var b, v, S;
            return (
              r("AdsInterfacesLogger").log({
                eventName: "call_ads_phone_number_prefill_success",
                data: babelHelpers.extends(
                  ((v = {}),
                  (v.objective = s),
                  (v.page_id =
                    (b = n.creative) == null ||
                    (b = b.object_story_spec) == null
                      ? void 0
                      : b.page_id),
                  v),
                  d != null ? ((S = {}), (S.source = d), S) : {},
                ),
              }),
              _({ link: c, adgroup: n, specPlugin: f })
            );
          }
        }
        return _({ link: "", adgroup: n, specPlugin: f });
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
    function T(e, t) {
      return E(e, t) ? b(e, t, "app_destination_page_id") : e;
    }
    function D(e, t, n) {
      return C(e, t, "app_link", n);
    }
    function x(e, t) {
      return E(e, t) ? b(e, t, "app_link") : e;
    }
    function $(e) {
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
    function P(e, t) {
      var n = r("AdsAdgroupSemanticFields").callToActionValue.get(t, e);
      if (n == null) return e;
      var o = n.get("app_link"),
        a = n.get("android_url");
      return typeof o != "string" ||
        o === "" ||
        typeof a != "string" ||
        a === "" ||
        a === o ||
        a !== n.get("ios_url")
        ? e
        : r("AdsAdgroupSemanticFields").callToActionValue.set(
            t,
            e,
            n.set("app_link", a),
          );
    }
    function N(e, t) {
      return E(e, t) ? b(e, t, "whatsapp_number") : e;
    }
    function M(e, t, n) {
      return C(e, t, "object_store_urls", n);
    }
    function w(e, t, n) {
      return C(e, t, "android_url", n);
    }
    function A(e, t, n) {
      return C(e, t, "ios_url", n);
    }
    function F(e, t) {
      return E(e, t) ? b(e, t, "object_store_urls") : e;
    }
    function O(e, t, n) {
      return C(e, t, "application", n);
    }
    function B(e, t) {
      return E(e, t) ? b(e, t, "application") : e;
    }
    function W(e, t) {
      return E(e, t) ? b(e, t, "link") : e;
    }
    function q(e, t) {
      return E(e, t) ? b(e, t, "page") : e;
    }
    function U(e, t, n) {
      return C(e, n, "instagram_profile_cta_destination", t);
    }
    function V(e, t, n) {
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
    function H(e, t) {
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
    function G(e, t) {
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
      (l.deleteCallToActionValueAppDestinationPageID = T),
      (l.setCallToActionValueAppLink = D),
      (l.deleteCallToActionValueAppLink = x),
      (l.deleteCallToActionAppLinkField = $),
      (l.syncCallToActionValueAppLinkWithDeepLink = P),
      (l.deleteCallToActionValueWhatsAppNumber = N),
      (l.setCallToActionValueObjectStoreURLs = M),
      (l.setCallToActionValueAndroidURL = w),
      (l.setCallToActionValueIOSURL = A),
      (l.deleteCallToActionValueObjectStoreURLs = F),
      (l.setCallToActionValueApplication = O),
      (l.deleteCallToActionValueApplication = B),
      (l.deleteCallToActionValueLink = W),
      (l.deleteCallToActionValuePage = q),
      (l.setCallToActionValueInstagramProfileDestination = U),
      (l.deleteCallToActionValueInstagramProfileDestination = V),
      (l.deleteCallToAction = H),
      (l.resetCallToActionValue = G));
  },
  98,
);
