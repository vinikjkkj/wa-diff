__d(
  "AdsUEditorAdgroupAssetFeedMutators",
  [
    "invariant",
    "AdsAPIAdgroupPaths",
    "AdsAPIAdgroupRecordUtils",
    "AdsAPIObjectives",
    "AdsAdgroupPostTypeMutatorsUtils",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsAppUrlUtils",
    "AdsAssetFeedFieldConversionUtils",
    "AdsAssetFeedFieldToRuleLabelMapping",
    "AdsAssetFeedMutationUtils",
    "AdsAssetFeedSimpleFieldCheckUtils",
    "AdsAssetFeedUtils",
    "AdsChildAttachmentsUtils",
    "AdsDCODegreesOfFreedomUtils",
    "AdsLinkTypeUtils",
    "AdsMutators",
    "AdsPlacementAssetTargetingRuleUtils",
    "AdsUEditorAdgroupAppProductPageIdsMutators",
    "AdsUEditorAdgroupDegreesOfFreedomMutators",
    "AdsUEditorAdgroupHeadlineMutators",
    "AdsUEditorAdgroupUrlMutators",
    "AdsUEditorWebsiteUtils",
    "AdsWhatsAppConstants",
    "ApiAdObjectTypes",
    "ApiDynamicCreativeOptimizationTypes",
    "FBLogger",
    "adsAssetFeedGetCallToActionValue",
    "adsConvertAssetCustomizationRuleToPlacementList",
    "adsPlacementAssetMutationAddCarouselFromAssetFeedSpec",
    "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
    "gkx",
    "immutable",
    "isTruthy",
    "justknobx",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e, t, n, a) {
      var i,
        l,
        s =
          t == null ||
          (i = t.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.link_data) == null
            ? void 0
            : i.product_discount_id,
        c =
          t == null ||
          (l = t.creative) == null ||
          (l = l.object_story_spec) == null
            ? void 0
            : l.product_data,
        d =
          a === r("ApiDynamicCreativeOptimizationTypes").MULTI_CREATOR
            ? o("AdsAdgroupPostTypeMutatorsUtils").mcaFromConversionConfig
            : o("AdsAdgroupPostTypeMutatorsUtils").findTheConfig(
                t,
                r("nullthrows")(e),
                n,
              ),
        m = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          d,
          o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).getConversionConfigForAdgroupAndObjective(t, n, a),
          t,
          null,
          r("immutable").List([d.dataPath]),
          o("AdsAssetFeedFieldConversionUtils").convertFieldToAssetFeedFormat,
          o("AdsAssetFeedFieldConversionUtils").getDependentFields,
          null,
        );
      return (
        r("isTruthy")(s) &&
          (m = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.product_discount_id.set(s, m)),
        r("isTruthy")(c) &&
          r("gkx")("12583") &&
          (m = r("AdsAdgroupRecordAccessors").creative.product_data.set(c, m)),
        u(m)
      );
    }
    function u(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images;
      if (n == null) return e;
      var o = n.map(function (e) {
        var t = e.get("hash");
        return t != null
          ? e.filter(function (e, t) {
              return t != "url";
            })
          : e;
      });
      return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images.set(
        o,
        e,
      );
    }
    function c(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        c = u;
      u != null &&
        (c = u.map(function (e) {
          return e.filter(function (e, t) {
            return t != "adlabels";
          });
        }));
      var d =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.videos,
        m = d;
      d != null &&
        (m = d.map(function (e) {
          return e.filter(function (e, t) {
            return t != "adlabels";
          });
        }));
      var p =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.link_urls,
        _ = p;
      p != null &&
        (_ = p.map(function (e) {
          return e.filter(function (e, t) {
            return t != "adlabels";
          });
        }));
      var f =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.bodies,
        g = f;
      f != null &&
        (g = f.map(function (e) {
          return e.filter(function (e, t) {
            return t != "adlabels" && t != "translation_confidence";
          });
        }));
      var h =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.descriptions,
        y = h;
      h != null &&
        (y = h.map(function (e) {
          return e.filter(function (e, t) {
            return t != "adlabels" && t != "translation_confidence";
          });
        }));
      var C =
          (s = e.creative) == null || (s = s.asset_feed_spec) == null
            ? void 0
            : s.titles,
        b = C;
      return (
        C != null &&
          (b = C.map(function (e) {
            return e.filter(function (e, t) {
              return t != "adlabels" && t != "translation_confidence";
            });
          })),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images.set(c),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos.set(m),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls.set(
            _,
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(g),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.descriptions.set(y),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(b),
        )(e)
      );
    }
    function d(e) {
      var t,
        n,
        a,
        i,
        l,
        s,
        u =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.images,
        c = u;
      u != null && (c = m(u));
      var d =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.videos,
        g = d;
      d != null && (g = p(d));
      var h =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.link_urls,
        y = h;
      h != null && (y = _(h));
      var C =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.bodies,
        b = C;
      C != null && (b = f(C));
      var v =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.descriptions,
        S = v;
      v != null && (S = f(v));
      var R =
          (s = e.creative) == null || (s = s.asset_feed_spec) == null
            ? void 0
            : s.titles,
        L = R;
      return (
        R != null && (L = f(R)),
        o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images.set(c),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos.set(g),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls.set(
            y,
          ),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(b),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.descriptions.set(S),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(L),
          r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.autotranslate
            .delete,
        )(e)
      );
    }
    function m(e) {
      var t = new Set(),
        n = [];
      return (
        e.forEach(function (e) {
          var r = e.get("hash");
          t.has(r) || (n.push(e), t.add(r));
        }),
        r("immutable").List(n)
      );
    }
    function p(e) {
      var t = new Set(),
        n = [];
      return (
        e.forEach(function (e) {
          var r = e.get("video_id");
          t.has(r) || (n.push(e), t.add(r));
        }),
        r("immutable").List(n)
      );
    }
    function _(e) {
      var t = new Set(),
        n = [];
      return (
        e.forEach(function (e) {
          var r = e.get("website_url");
          t.has(r) || (n.push(e), t.add(r));
        }),
        r("immutable").List(n)
      );
    }
    function f(e) {
      var t = new Set(),
        n = [];
      return (
        e.forEach(function (e) {
          var r = e.get("text");
          t.has(r) || (n.push(e), t.add(r));
        }),
        r("immutable").List(n)
      );
    }
    function g(e, t) {
      var n = o("AdsAPIAdgroupRecordUtils").getObjectType(e),
        a = o("AdsAdgroupPostTypeMutatorsUtils").findTheConfig(e, n),
        i = o("AdsAdgroupPostTypeMutatorsUtils").findDOFConfig(e, n, t);
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.optimization_type.set(
        t
          ? r("ApiDynamicCreativeOptimizationTypes").DOF_WITH_IMAGE_CROP
          : r("ApiDynamicCreativeOptimizationTypes").DEGREES_OF_FREEDOM,
        o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          a,
          i,
          e,
          null,
          null,
          o("AdsAssetFeedFieldConversionUtils").convertFieldToAssetFeedFormat,
          o("AdsAssetFeedFieldConversionUtils").getDependentFields,
          null,
        ),
      );
    }
    function h(e, t, n, a, i, l) {
      var s = e;
      if (((s = g(s, l)), a != null)) {
        var u = a.map(function (e) {
          return e.filter(function (e, t) {
            return o(
              "AdsAssetFeedMutationUtils",
            ).PAC_DOF_TO_DOF_ALLOWED_BODY_ASSET_FIELDS.has(t);
          });
        });
        s = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies.set(
          u,
          s,
        );
      }
      if (i != null) {
        var c = i.map(function (e) {
          return e.filter(function (e, t) {
            return o(
              "AdsAssetFeedMutationUtils",
            ).PAC_DOF_TO_DOF_ALLOWED_TITLE_ASSET_FIELDS.has(t);
          });
        });
        s = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles.set(
          c,
          s,
        );
      }
      return s;
    }
    function y(e, t) {
      var n,
        a,
        i,
        l,
        s,
        u,
        c,
        d,
        m = o("AdsAPIAdgroupRecordUtils").getObjectType(e),
        p = o("AdsAdgroupPostTypeMutatorsUtils").findTheConfig(e, m),
        _ = o("AdsAdgroupPostTypeMutatorsUtils").findDOFConfig(e, m, t),
        f =
          (n = e.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.app_product_page_id,
        g =
          (a = e.creative) == null ||
          (a = a.asset_feed_spec) == null ||
          (a = a.web_destination_spec) == null
            ? void 0
            : a.url,
        h =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.upcoming_events,
        y =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.upcoming_event_metadata,
        C =
          (s = e.creative) == null ||
          (s = s.asset_feed_spec) == null ||
          (s = s.lead_gen_configuration) == null
            ? void 0
            : s.verification_type,
        b =
          (u = e.creative) == null ||
          (u = u.asset_feed_spec) == null ||
          (u = u.lead_gen_configuration) == null
            ? void 0
            : u.offsite_verification_type,
        v =
          (c = e.creative) == null ||
          (c = c.asset_feed_spec) == null ||
          (c = c.lead_gen_configuration) == null
            ? void 0
            : c.is_work_email_enforcement_enabled,
        S =
          (d = e.creative) == null ||
          (d = d.asset_feed_spec) == null ||
          (d = d.lead_gen_configuration) == null
            ? void 0
            : d.is_form_qa_enabled,
        R = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          _,
          p,
          e,
          null,
          null,
          o("AdsAssetFeedFieldConversionUtils")
            .convertFieldToObjectStorySpecFormat,
          o("AdsAssetFeedFieldConversionUtils").getDependentFields,
        );
      return (
        o("AdsAssetFeedUtils").isClickToMultiDestAds(e) &&
        o("AdsAssetFeedUtils").isDofAdgroupFromSpec(e) &&
        !o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)
          ? (R = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.optimization_type.set(
              r("ApiDynamicCreativeOptimizationTypes")
                .DOF_MESSAGING_DESTINATION,
              R,
            ))
          : (R = r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.delete(
              R,
            )),
        (R = o(
          "AdsUEditorAdgroupAppProductPageIdsMutators",
        ).updateAppProductPageIdSpecField(R, f)),
        h != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.upcoming_events.set(h, R)),
        y != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.upcoming_event_metadata.set(y, R)),
        g != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.web_destination_spec.url.set(g, R)),
        C &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_gen_configuration.verification_type.set(
            C,
            R,
          )),
        b &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_gen_configuration.offsite_verification_type.set(
            b,
            R,
          )),
        typeof v == "boolean" &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_gen_configuration.is_work_email_enforcement_enabled.set(
            v,
            R,
          )),
        S != null &&
          (R = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.lead_gen_configuration.is_form_qa_enabled.set(
            S,
            R,
          )),
        R
      );
    }
    function C(e) {
      return e.updateIn(
        r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES,
        function (e) {
          return (
            e &&
            e.filter(function (e) {
              return !e.has("image_crops");
            })
          );
        },
      );
    }
    function b(e, t, n, a) {
      var i,
        l,
        s,
        u,
        d,
        m = o("AdsAdgroupPostTypeMutatorsUtils").findTheConfig(t, e, n),
        p = v(t),
        _ = o(
          "AdsAdgroupPostTypeMutatorsUtils",
        ).convertPostTypeInAdgroupRecordUsingConfig(
          o(
            "AdsAdgroupPostTypeMutatorsUtils",
          ).getConversionConfigForAdgroupAndObjective(
            t,
            n,
            (i = t.creative) == null || (i = i.asset_feed_spec) == null
              ? void 0
              : i.optimization_type,
          ),
          m,
          t,
          a || null,
          null,
          o("AdsAssetFeedFieldConversionUtils")
            .convertFieldToObjectStorySpecFormat,
          o("AdsAssetFeedFieldConversionUtils").getDependentFields,
          p,
        ),
        f = o(
          "AdsUEditorAdgroupAppProductPageIdsMutators",
        ).getAppProductPageIdSpecField(t);
      if (
        o(
          "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
        ).isUnifiedCreativePhotoDataSupported(t) &&
        m.objectType === r("ApiAdObjectTypes").PHOTO &&
        m.dataPath === r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.path
      ) {
        var g;
        _ = c(_);
        var h = [
          (g = r("AdsAPIAdgroupPaths")).CREATIVE.ASSET_FEED_SPEC
            .ASSET_CUSTOMIZATION_RULES,
          g.CREATIVE.ASSET_FEED_SPEC.OPTIMIZATION_TYPE,
          g.CREATIVE.ASSET_FEED_SPEC.AD_FORMATS,
          g.CREATIVE.ASSET_FEED_SPEC.TITLES,
        ];
        h.forEach(function (e) {
          return (_ = _.deleteIn(e));
        });
      }
      if (
        (o("AdsChildAttachmentsUtils").isCarouselAd(t) &&
          (_ = r("adsPlacementAssetMutationAddCarouselFromAssetFeedSpec")(
            _,
            t,
          )),
        e === r("ApiAdObjectTypes").SHARE &&
          o("AdsLinkTypeUtils").isEventLinkTypeSelected(t))
      ) {
        var y = r("adsAssetFeedGetCallToActionValue")(t, 0, "event_id");
        y != null &&
          (_ = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.event_id.set(y, _));
      }
      if (e === r("ApiAdObjectTypes").VIDEO) {
        var C = o("AdsUEditorWebsiteUtils").getVideoLPPFormat(_, n);
        C != null &&
          (_ = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.link_format.set(
            C,
            _,
          ));
      }
      (n !== r("AdsAPIObjectives").STORE_VISITS &&
        (_ = r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.delete(_)),
        o("AdsAPIAdgroupRecordUtils").isExistingPostAd(t) &&
          (_ = r("AdsAdgroupRecordAccessors").creative.object_story_spec.delete(
            _,
          )),
        n === r("AdsAPIObjectives").VIDEO_VIEWS &&
          ((l = _.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null ||
          (l = l.value) == null
            ? void 0
            : l.link) === o("AdsWhatsAppConstants").WHATSAPP_API_LINK &&
          (_ = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.call_to_action.value.link.delete(
            _,
          )));
      var b =
        (s =
          (u = _.creative) == null ||
          (u = u.object_story_spec) == null ||
          (u = u.link_data) == null ||
          (u = u.call_to_action) == null ||
          (u = u.value) == null
            ? void 0
            : u.link) != null
          ? s
          : (d = _.creative) == null ||
              (d = d.object_story_spec) == null ||
              (d = d.link_data) == null
            ? void 0
            : d.link;
      return (
        b != null &&
          n === r("AdsAPIObjectives").LINK_CLICKS &&
          r("AdsAppUrlUtils").isAppStoreURL(b) &&
          (_ = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.call_to_action.value.object_store_urls.set(
            r("immutable").List([b]),
            _,
          )),
        (_ = o(
          "AdsUEditorAdgroupDegreesOfFreedomMutators",
        ).removeTransformations(_, { target: "image" })),
        (_ = o(
          "AdsUEditorAdgroupDegreesOfFreedomMutators",
        ).removeTransformations(_, { target: "video" })),
        (_ = o(
          "AdsUEditorAdgroupDegreesOfFreedomMutators",
        ).removeTransformations(_, { target: "stories" })),
        (_ = o(
          "AdsUEditorAdgroupAppProductPageIdsMutators",
        ).updateAppProductPageIdSpecField(_, f)),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_id.delete(_)
      );
    }
    function v(e) {
      var t = r("immutable").Map();
      if (!o("AdsAssetFeedUtils").isPACAdgroupFromRecord(e)) return t;
      if (
        o("AdsAssetFeedSimpleFieldCheckUtils").hasAssetCustomizationRules(e)
      ) {
        var n, a;
        ((n = e.creative) != null &&
          (n = n.asset_feed_spec) != null &&
          n.link_urls &&
          (t = t.set(
            "link_urls",
            o(
              "AdsUEditorAdgroupUrlMutators",
            ).getDefaultPlacementUrlAssetAndIndex(e).index,
          )),
          (a = e.creative) != null &&
            (a = a.asset_feed_spec) != null &&
            a.titles &&
            (t = t.set(
              "titles",
              o(
                "AdsUEditorAdgroupHeadlineMutators",
              ).getDefaultPlacementHeadlineAssetAndIndex(e).index,
            )));
      }
      return t;
    }
    function S(e) {
      var t = o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(
        e,
        "image_label",
      );
      if (t) return "image_label";
      var n = o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(
        e,
        "video_label",
      );
      if (n) return "video_label";
      var r = o("AdsPlacementAssetTargetingRuleUtils").hasLabelFieldInRule(
        e,
        "carousel_label",
      );
      return r ? "carousel_label" : null;
    }
    function R(e) {
      var t,
        n =
          (t = e.creative) == null || (t = t.asset_feed_spec) == null
            ? void 0
            : t.call_to_action_types;
      return n != null;
    }
    function L(e, t, n) {
      var o;
      return (
        e === "carousel_label"
          ? (o = r("ApiAdObjectTypes").SHARE)
          : e === "image_label"
            ? R(t)
              ? (o = r("ApiAdObjectTypes").SHARE)
              : (o = r("ApiAdObjectTypes").PHOTO)
            : (o = r("ApiAdObjectTypes").VIDEO),
        b(o, t, n)
      );
    }
    function E() {
      return new Map([
        ["body_label", "bodies"],
        ["call_to_action_type_label", "call_to_action_types"],
        ["caption_label", "captions"],
        ["carousel_label", "carousels"],
        ["description_label", "descriptions"],
        ["image_label", "images"],
        ["link_url_label", "link_urls"],
        ["title_label", "titles"],
        ["video_label", "videos"],
      ]);
    }
    function k(e, t, n) {
      var r,
        o = (r = e.creative) == null ? void 0 : r.asset_feed_spec;
      if (o == null) return !1;
      var a = o.get(t),
        i =
          a == null
            ? void 0
            : a.filter(function (e) {
                var t = e.get("adlabels");
                return (
                  t &&
                  t.some(function (e) {
                    return e.get("name") === n;
                  })
                );
              });
      return !!i && i.count() > 0;
    }
    function I(e) {
      var t;
      if (!o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e))
        return (
          r("FBLogger")("am_feature_pac").mustfix(
            "removeMissingAdlabelsFromCustomizationRules should only be used with PAC or DLO ads",
          ),
          e
        );
      var n =
        (t = e.creative) == null || (t = t.asset_feed_spec) == null
          ? void 0
          : t.asset_customization_rules;
      if (n == null) return e;
      var a = e,
        i = n.map(function (e) {
          var t = e;
          return (
            E().forEach(function (e, n) {
              var r = o(
                "AdsPlacementAssetTargetingRuleUtils",
              ).getLabelNameFromTargetingRuleNullable(t, n);
              r != null && (k(a, e, r) || (t = t.delete(n)));
            }),
            t
          );
        });
      return (
        (a = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(i, a)),
        o("AdsAssetFeedUtils").hasPACCarouselFormat(a) &&
          r("AdsAssetFeedFieldToRuleLabelMapping").forEach(function (e, t) {
            var n,
              o =
                (n = a.creative) == null || (n = n.asset_feed_spec) == null
                  ? void 0
                  : n.carousels;
            o != null &&
              ((o = o.map(function (n) {
                var o = n.get("child_attachments");
                return (
                  o instanceof r("immutable").List &&
                    (o = o.map(function (n) {
                      var r = n.get(e);
                      return r && !k(a, t, r.get("name")) ? n.delete(e) : n;
                    })),
                  n.set("child_attachments", o)
                );
              })),
              (a = r(
                "AdsAdgroupRecordAccessors",
              ).creative.asset_feed_spec.carousels.set(o, a)));
          }),
        a
      );
    }
    function T(e, t) {
      var n,
        o =
          (n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.asset_customization_rules;
      if (o == null) return t;
      var a = o.map(function (t) {
        return t.delete(e);
      });
      return r(
        "AdsAdgroupRecordAccessors",
      ).creative.asset_feed_spec.asset_customization_rules.set(a, t);
    }
    function D(e, t, n) {
      var a,
        i,
        l,
        u,
        c = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(e);
      if (c) {
        var d = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.images.delete(e);
        return P(d);
      }
      var m =
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.images,
        p =
          (i = e.creative) == null || (i = i.asset_feed_spec) == null
            ? void 0
            : i.videos,
        _ =
          (l = e.creative) == null || (l = l.asset_feed_spec) == null
            ? void 0
            : l.posts,
        f =
          (u = e.creative) == null || (u = u.asset_feed_spec) == null
            ? void 0
            : u.carousels,
        g = o("AdsAssetFeedUtils").hasPlacementCustomizationFromRecord(e),
        h = o("AdsAssetFeedUtils").isDLOAdgroupFromRecord(e);
      if (!g && !h) return e;
      var y = e,
        C = "";
      if (_ != null)
        ((y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.posts.delete(e)),
          (C = "post_label"));
      else if (m != null && p != null) {
        var b;
        ((y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.images.delete(e)),
          (y = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.videos.delete(y)));
        var v =
            (b = y.creative) == null || (b = b.asset_feed_spec) == null
              ? void 0
              : b.asset_customization_rules,
          R = o(
            "AdsPlacementAssetTargetingRuleUtils",
          ).getDefaultRuleOrRuleWithMostPlacements(v);
        (R || s(0, 13405), (C = S(R)), C != null || s(0, 13756));
      } else if (m != null)
        ((y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.images.delete(e)),
          (C = "image_label"));
      else if (p != null)
        ((y = r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.videos.delete(e)),
          (C = "video_label"));
      else return y;
      if (
        o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(y) &&
        (C === "image_label" || C === "video_label")
      ) {
        var E = C === "image_label" ? "images" : "videos";
        return x(y, E);
      }
      return (
        (y = h
          ? T(C, y)
          : o("AdsAssetFeedUtils").isPacAdgroupUsingTextDOF(y)
            ? o(
                "AdsAssetFeedMutationUtils",
              ).convertPACDofToDofAssetFeedSpecAdgroup(
                y,
                m != null ? "image" : "video",
                n,
                !1,
              )
            : o("AdsAPIAdgroupRecordUtils").isExistingPostAd(e) &&
                o("AdsAssetFeedUtils").isClickToMultiDestAds(e)
              ? r(
                  "adsPlacementCustomizationConvertToDOFMessagingDestinationAdWithExistingPost",
                )(y)
              : L(C, y, t)),
        f != null &&
          !r("justknobx")._("4935") &&
          (y = r("AdsAdgroupSemanticFields").childAttachments.set(
            n,
            y,
            o("AdsChildAttachmentsUtils").getDefaultChildAttachments(0),
          )),
        o("AdsAssetFeedUtils").restoreOnsiteDestinations(e, y)
      );
    }
    function x(e, t) {
      var n;
      if (!$(e, t)) return e;
      var a =
        (n = e.creative) == null || (n = n.asset_feed_spec) == null
          ? void 0
          : n.asset_customization_rules;
      if (a == null) return e;
      var i = a
          .filter(function (e) {
            var t = o(
              "adsConvertAssetCustomizationRuleToPlacementList",
            ).adsConvertAssetCustomizationRuleToPlacementList(e);
            return t.size === 0;
          })
          .map(function (e) {
            return e.delete("image_label").delete("video_label");
          }),
        l = o("AdsAssetFeedUtils").setOptimizationType(
          e,
          r("ApiDynamicCreativeOptimizationTypes").LANGUAGE,
        ),
        s = t === "images" ? "SINGLE_IMAGE" : "SINGLE_VIDEO";
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.asset_customization_rules.set(i),
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.ad_formats.set(
          r("immutable").List([s]),
        ),
      )(l);
    }
    function $(e, t) {
      if (!o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(e))
        return !1;
      if (t === "images") {
        var n,
          r =
            (n = e.creative) == null || (n = n.asset_feed_spec) == null
              ? void 0
              : n.images;
        return r == null || r.size <= 1;
      } else if (t === "videos") {
        var a,
          i =
            (a = e.creative) == null || (a = a.asset_feed_spec) == null
              ? void 0
              : a.videos;
        return i == null || i.size <= 1;
      }
      return !1;
    }
    function P(e) {
      var t = e;
      if (o("AdsDCODegreesOfFreedomUtils").isDOFAdgroupWithUniqueDOFAssets(t)) {
        var n = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(e);
        t = y(t, n);
      }
      return t;
    }
    function N(e, t, n, r, a, i) {
      if (
        (i === void 0 && (i = []),
        !o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(e))
      )
        return e.setIn(n.getPathOrThrow(e, t), a);
      var l = e;
      for (var s of i) l = l.deleteIn(s.getPathOrThrow(l, t));
      return (
        (l = M(l)),
        o("AdsAssetFeedUtils").isAdgroupUsingAssetFeedFromRecord(l)
          ? o("AdsAssetFeedMutationUtils").setAssetFieldAtIndex(
              l,
              t,
              n,
              0,
              r,
              a,
            )
          : l.setIn(n.getPathOrThrow(l, t), a)
      );
    }
    function M(e) {
      var t = e;
      if (o("AdsDCODegreesOfFreedomUtils").isDOFAdgroupWithUniqueDOFAssets(t)) {
        var n = o("AdsAssetFeedUtils").isDofWithImageAdgroupFromRecord(t);
        t = y(t, n);
      }
      return t;
    }
    function w(e, t) {
      var n, a;
      if (
        !o("AdsAssetFeedUtils").isClickToMultiDestAds(e) ||
        (o("AdsAssetFeedUtils").isClickToMultiDestAds(t) &&
          ((n = t.creative) == null || (n = n.asset_feed_spec) == null
            ? void 0
            : n.call_to_actions) != null)
      )
        return t;
      var i = o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.additional_data.is_click_to_message.set(!0),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.optimization_type.set(
          r("ApiDynamicCreativeOptimizationTypes").DOF_MESSAGING_DESTINATION,
        ),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.asset_feed_spec.call_to_actions.set(
          (a = e.creative) == null || (a = a.asset_feed_spec) == null
            ? void 0
            : a.call_to_actions,
        ),
      )(t);
      return i;
    }
    ((l.convertToAssetFeedSpec = e),
      (l.removeAdlabelsFromAssetFeedSpec = c),
      (l.dedupAssetsFromAssetFeedSpec = d),
      (l.convertToDOFAssetFeedSpec = g),
      (l.convertPACDoFToDoFAssetFeedSpec = h),
      (l.convertFromDOFAssetFeedSpec = y),
      (l.convertToTextOnlyDOFAssetFeedSpec = C),
      (l.convertFromAssetFeedSpec = b),
      (l.removeMissingAdlabelsFromCustomizationRules = I),
      (l.removeAllMediaAssets = D),
      (l.convertLocalizedPlacementsAdgroupToDLOAdgroup = x),
      (l.sanitizeDofAdgroup = P),
      (l.setAssetFieldOrValueInAdgroup = N),
      (l.revertToObjectStorySpecIfNeeded = M),
      (l.restoreCTXMDFields = w));
  },
  98,
);
