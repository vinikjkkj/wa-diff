__d(
  "AdsUEditorAdgroupChildAttachmentsMutators",
  [
    "invariant",
    "AdsAPICallToActionPaths",
    "AdsAPIChildAttachmentPaths",
    "AdsAdgroupChildAttachmentTypes",
    "AdsAdgroupChildAttachmentsFields",
    "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAdgroupSpecUtils",
    "AdsChildAttachmentsUtils",
    "AdsCreativeFlexGKCheckUtils",
    "AdsCreativeFormatMutatorUtils",
    "AdsDynamicAdCustomizationAssetFeedUtils",
    "AdsDynamicAdCustomizationFieldMutators",
    "AdsEditorMPAConstants",
    "AdsInterfacesLogger",
    "AdsMultiProductConstants",
    "AdsMutators",
    "AdsVideoStore",
    "DAFlexibleFormatUtils",
    "DynamicAdsTemplateVideoShowreelTemplateConfig",
    "FBLogger",
    "PartnershipDynamicAdsGatingUtils",
    "adsAdgroupIsDynamicProductCarouselAd",
    "adsIsNewVideoThumbnailDataModel",
    "getByPath",
    "gkx",
    "immutable",
    "isFalsey",
    "isTruthy",
    "qex",
    "setByPath",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 2;
    function u(e, t, n) {
      if (o("AdsChildAttachmentsUtils").isStaticCarouselAd(t)) {
        var a = r("AdsAdgroupSemanticFields").childAttachments.get(e, t);
        t = r("AdsAdgroupSemanticFields").childAttachments.set(
          e,
          t,
          a ? a.map(n) : void 0,
        );
      }
      return t;
    }
    function c(e, t, n, a, i) {
      var l = i.parentSourceFacebookPostID,
        s = i.parentSourceInstagramMediaID,
        u = r("AdsAdgroupChildAttachmentsFields").imageURL.get(e, t, n),
        c = r("AdsAdgroupChildAttachmentsFields").imageHash.get(e, t, n),
        f = r("AdsAdgroupChildAttachmentsFields").staticCard.get(e, t, n),
        g = _(e, t, n);
      switch (
        ((g = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .parent_source_facebook_post_id.delete,
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .parent_source_instagram_media_id.delete,
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .instagram_boost_post_access_token.delete,
        )(g)),
        a)
      ) {
        case "VIDEO": {
          g = d(g, t, n, i, c, u, f);
          break;
        }
        case "IMAGE": {
          g = m(g, t, n, i, c, u, f);
          break;
        }
        case "TEMPLATE_VIDEO": {
          var h;
          g = p(g, t, n, [
            (h = r("AdsAdgroupChildAttachmentsFields")).imageCrops,
            h.imageHash,
            h.imageURL,
            h.videoID,
          ]);
          var y = [
              h.templateVideoSpecCustomization,
              h.templateVideoSpecTemplateID,
            ].map(function (e) {
              return e.get(g, t, n);
            }),
            C = y[0],
            b = y[1];
          b.supported && C.supported && f.supported
            ? (g = g
                .setIn(
                  b.path,
                  r("DynamicAdsTemplateVideoShowreelTemplateConfig")
                    .default_template_id,
                )
                .setIn(
                  C.path,
                  r("immutable").Map(
                    r("DynamicAdsTemplateVideoShowreelTemplateConfig")
                      .templates[
                      r("DynamicAdsTemplateVideoShowreelTemplateConfig")
                        .default_template_id
                    ].customization,
                  ),
                )
                .deleteIn(f.path))
            : r("FBLogger")("dpa").mustfix(
                "attempted to change media format to template video, but some fields were unsupported templateID: %s customization: %s staticCard: %s",
                b.supported ? "supported" : "unsupported",
                C.supported ? "supported" : "unsupported",
                f.supported ? "supported" : "unsupported",
              );
          break;
        }
        case "EXISTING_POST": {
          var h;
          if (
            ((g = p(g, t, n, [
              (h = r("AdsAdgroupChildAttachmentsFields")).imageCrops,
              h.imageHash,
              h.imageURL,
              h.videoID,
            ])),
            s != null)
          ) {
            g = r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content.parent_source_instagram_media_id.set(
              s,
              g,
            );
            break;
          } else if (l != null) {
            g = r(
              "AdsAdgroupRecordAccessors",
            ).creative.branded_content.parent_source_facebook_post_id.set(l, g);
            break;
          }
          var v = "0";
          g = r(
            "AdsAdgroupRecordAccessors",
          ).creative.branded_content.parent_source_facebook_post_id.set(v, g);
          break;
        }
      }
      return g;
    }
    function d(e, t, n, a, i, l, s) {
      var u = a.imageHash,
        c = a.thumbnailURL,
        d = p(e, t, n, [
          r("AdsAdgroupChildAttachmentsFields").imageCrops,
          r("AdsAdgroupChildAttachmentsFields").imageHash,
          r("AdsAdgroupChildAttachmentsFields").imageURL,
        ]),
        m =
          a.videoID ||
          o("AdsEditorMPAConstants").AdsEditorMPAConstants
            .MPA_PLACEHOLDER_VIDEO_ID,
        _ = r("AdsAdgroupChildAttachmentsFields").videoID.get(d, t, n);
      if (
        _.supported &&
        ((d = d.setIn(_.path, m)),
        m !==
          o("AdsEditorMPAConstants").AdsEditorMPAConstants
            .MPA_PLACEHOLDER_VIDEO_ID &&
          r("isTruthy")(m) &&
          i.supported &&
          r("isFalsey")(u) &&
          l.supported &&
          r("isFalsey")(c))
      ) {
        var f,
          g = r("AdsVideoStore").get(m),
          h = g == null || (f = g.preferredThumbnail) == null ? void 0 : f.uri;
        d = d.setIn(l.path, h);
      }
      (i.supported && u && (d = d.setIn(i.path, u)),
        l.supported && c && (d = d.setIn(l.path, c)));
      var y = a.captionIDs,
        C = r("AdsAdgroupChildAttachmentsFields").captionIDs.get(d, t, n);
      return (
        C.supported && y !== null && (d = d.setIn(C.path, y)),
        s.supported && (d = d.setIn(s.path, !0)),
        d
      );
    }
    function m(e, t, n, o, a, i, l) {
      var s,
        u = o.imageCrops,
        c = o.imageHash,
        d = o.imageURL,
        m = p(e, t, n, [
          (s = r("AdsAdgroupChildAttachmentsFields")).imageCrops,
          s.imageURL,
          s.videoID,
          s.captionIDs,
        ]),
        _ = s.imageCrops.get(m, t, n);
      return (
        a.supported && c
          ? (m = m.setIn(a.path, c))
          : i.supported && d && (m = m.setIn(i.path, d)),
        _.supported && u && (m = m.setIn(_.path, u)),
        l.supported && (m = m.setIn(l.path, !0)),
        m
      );
    }
    function p(e, t, n, r) {
      return r.reduce(function (e, r) {
        var o = r.get(e, t, n);
        return o.supported === !0 ? e.deleteIn(o.path) : e;
      }, e);
    }
    function _(e, t, n) {
      var o = r(
        "AdsAdgroupChildAttachmentsFields",
      ).templateVideoSpecTemplateID.get(e, t, n);
      return o.supported ? e.deleteIn(o.path.slice(0, -1)) : e;
    }
    function f(e, t, n, o, a, i) {
      var l,
        s = (l = r("AdsAdgroupChildAttachmentsFields")).imageURL.get(e, t, n),
        u = l.imageHash.get(e, t, n),
        c = l.videoThumbnailID.get(e, t, n),
        d = l.videoThumbnailSource.get(e, t, n);
      return (
        s.supported && (e = e.setIn(s.path, o)),
        r("adsIsNewVideoThumbnailDataModel")()
          ? (c.supported && a && (e = e.setIn(c.path, a)),
            d.supported && i && (e = e.setIn(d.path, i)))
          : (c.supported && (e = e.deleteIn(c.path)),
            d.supported && (e = e.deleteIn(d.path))),
        u.supported && (e = e.deleteIn(u.path)),
        n === 0 &&
          (e = r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(o, e)),
        e
      );
    }
    function g(e, t, n, o, a, i) {
      var l,
        s = (l = r("AdsAdgroupChildAttachmentsFields")).videoID.get(e, t, n),
        u = l.imageHash.get(e, t, n),
        c = l.imageURL.get(e, t, n),
        d = l.videoThumbnailID.get(e, t, n),
        m = l.videoThumbnailSource.get(e, t, n);
      if (
        (s.supported && (e = e.setIn(s.path, o)),
        u.supported && (e = e.deleteIn(u.path)),
        a)
      ) {
        if (c.supported) {
          var p;
          e = e.setIn(
            c.path,
            i != null
              ? i
              : a == null || (p = a.preferredThumbnail) == null
                ? void 0
                : p.uri,
          );
        }
        if (
          (r("adsIsNewVideoThumbnailDataModel")()
            ? (d.supported && (e = e.setIn(d.path, "0")),
              m.supported && (e = e.setIn(m.path, "generated_default")))
            : (d.supported && (e = e.deleteIn(d.path)),
              m.supported && (e = e.deleteIn(m.path))),
          n === 0)
        ) {
          var _;
          e = r("AdsAdgroupRecordAccessors").creative.thumbnail_url.set(
            i != null
              ? i
              : a == null || (_ = a.preferredThumbnail) == null
                ? void 0
                : _.uri,
            e,
          );
        }
        return e;
      }
      return (
        c.supported && (e = e.deleteIn(c.path)),
        d.supported && (e = e.deleteIn(d.path)),
        m.supported && (e = e.deleteIn(m.path)),
        e
      );
    }
    function h(e, t, n, o) {
      var a = r("AdsAdgroupChildAttachmentsFields").captionIDs.get(e, t, n);
      return a.supported ? e.setIn(a.path, o) : e;
    }
    function y(e, t, n, o, a) {
      var i = r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      return i
        ? e.withMutations(function (e) {
            i.forEach(function (r, i) {
              var l = n.get(e, t, i);
              (a && !a(l, r, e, i)) || (l.supported && e.setIn(l.path, o));
            });
          })
        : e;
    }
    function C(e) {
      return function (t, n, r, o) {
        return t.supported && o === e;
      };
    }
    function b(e, t, n, r) {
      return e.supported && !e.value;
    }
    function v(e, t, n, r) {
      return e.supported && !!e.value;
    }
    function S(e, t) {
      return function (n, r, o, a) {
        var i = e.get(o, t, a);
        return n.supported && i.supported && n.value !== i.value;
      };
    }
    function R(e, t, n, o) {
      return (
        e.supported && !t.getIn(r("AdsAPIChildAttachmentPaths").STATIC_CARD)
      );
    }
    function L(e, t, n) {
      var a;
      if (o("AdsChildAttachmentsUtils").getPlaceDataIndex(e, t) === -1)
        return e;
      if (r("adsAdgroupIsDynamicProductCarouselAd")(e, t, n)) return I(e);
      var i = r("AdsAdgroupSemanticFields").childAttachments.get(t, e);
      if (!i) return e;
      ((e = o("AdsCreativeFormatMutatorUtils").mutateCreativeFormat(
        e,
        "ProductCatalog",
      )),
        (i = i.filter(function (e) {
          return e && !e.get("place_data");
        })),
        (e = r("AdsAdgroupSemanticFields").childAttachments.set(t, e, i)));
      var l = i.size;
      if (l === 0 || l >= o("AdsMultiProductConstants").MIN_PRODUCTS) return e;
      var s = i.first(),
        u = s.get("call_to_action"),
        c = ((a = {}), (a.link = s.get("link")), a);
      if (u) {
        var d, m;
        c =
          ((m = {}),
          (m.link = s.get("link")),
          (m.call_to_action =
            ((d = {}),
            (d.type = u && u.get("type")),
            (d.value = r("immutable").fromJS(u && u.get("value"))),
            d)),
          m);
      }
      for (
        var p = i.toJS(), _ = l;
        _ < o("AdsMultiProductConstants").MIN_PRODUCTS;
        _++
      )
        p = p.concat(c);
      return r("AdsAdgroupSemanticFields").childAttachments.set(
        t,
        e,
        r("immutable").fromJS(p),
      );
    }
    function E(e) {
      var t,
        n,
        a,
        i,
        l = o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
          e,
        ),
        s = l
          ? o("AdsDynamicAdCustomizationAssetFeedUtils").getCTAType(e)
          : o("AdsAdgroupSpecUtils").getCallToActionType(e),
        u =
          ((i = {}),
          (i.description = l
            ? o("AdsDynamicAdCustomizationAssetFeedUtils").getDefaultTextValue(
                e,
                "descriptions",
              )
            : (t = e.creative) == null ||
                (t = t.object_story_spec) == null ||
                (t = t.template_data) == null
              ? void 0
              : t.description),
          (i.link =
            (l
              ? o(
                  "AdsDynamicAdCustomizationAssetFeedUtils",
                ).getDefaultWebsiteURL(e)
              : (n = e.creative) == null ||
                  (n = n.object_story_spec) == null ||
                  (n = n.template_data) == null
                ? void 0
                : n.link) || ""),
          (i.name = l
            ? o("AdsDynamicAdCustomizationAssetFeedUtils").getDefaultTextValue(
                e,
                "titles",
              )
            : (a = e.creative) == null ||
                (a = a.object_story_spec) == null ||
                (a = a.template_data) == null
              ? void 0
              : a.name),
          i);
      if (s != null) {
        var c,
          d = r("immutable").Map(((c = {}), (c.type = s), c)),
          m = r("getByPath")(
            o("AdsAdgroupSpecUtils").getCallToAction(e),
            r("AdsAPICallToActionPaths").VALUE.LEAD_GEN_FORM_ID,
          );
        if (m) {
          var p;
          d = d.set(
            "value",
            r("immutable").Map(((p = {}), (p.lead_gen_form_id = m), p)),
          );
        }
        u.call_to_action = d;
      }
      return r("immutable").fromJS(u);
    }
    function k(t, n) {
      var o;
      n = n.setIn(r("AdsAPIChildAttachmentPaths").STATIC_CARD, !0);
      var a =
        (o = t.creative) == null ||
        (o = o.object_story_spec) == null ||
        (o = o.template_data) == null
          ? void 0
          : o.child_attachments;
      return (
        a
          ? (a = a.splice(e, 0, r("immutable").fromJS(n)))
          : (a = r("immutable").fromJS([E(t), n])),
        M(t, a)
      );
    }
    function I(e) {
      return T(e, r("AdsAdgroupChildAttachmentTypes").PLACE);
    }
    function T(e, t) {
      var n,
        a,
        i,
        l =
          (n = e.creative) == null ||
          (n = n.object_story_spec) == null ||
          (n = n.template_data) == null
            ? void 0
            : n.child_attachments;
      if (!l) return e;
      var s = e;
      ((a = e.creative) == null ? void 0 : a.branded_content_boosting_type) !=
        null &&
        ((i = e.creative) == null ? void 0 : i.product_set_id) != null &&
        (o(
          "PartnershipDynamicAdsGatingUtils",
        ).shouldEnablePartnershipAdsDynamicAdsWithExistingPost() ||
          o(
            "PartnershipDynamicAdsGatingUtils",
          ).shouldEnableContentSearchForPartnershipAdsDynamicAds()) &&
        ((s = o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .parent_source_instagram_media_id.delete,
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .instagram_boost_post_access_token.delete,
          r("AdsAdgroupRecordAccessors").creative.branded_content
            .parent_source_facebook_post_id.delete,
        )(s)),
        o(
          "PartnershipDynamicAdsGatingUtils",
        ).shouldEnableContentSearchForPartnershipAdsDynamicAds() &&
          (s = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.branded_content
              .content_search_input.delete,
            r("AdsAdgroupRecordAccessors").creative.branded_content
              .facebook_boost_post_access_token.delete,
          )(s)));
      var u =
        l.filter(o("AdsChildAttachmentsUtils").isDynamicAdsIntroCard).size > 1;
      return u
        ? ((l = l.filter(function (e, n) {
            var r = o("AdsChildAttachmentsUtils").getChildAttachmentType(s, e);
            return r !== t;
          })),
          M(s, l))
        : w(s);
    }
    function D(e) {
      var t = e;
      if (x(e) && e.creative_asset_groups_spec != null) {
        var n,
          a = o(
            "AdsCreativeFlexGKCheckUtils",
          ).shouldSkipCreativeFlexCagOriginWrite();
        (r("AdsInterfacesLogger").logOnce({
          eventName: "creative_flex_debug",
          data:
            ((n = {}),
            (n.adgroup_id = r("AdsAdgroupRecordAccessors").id.get(e)),
            (n.event_source = "skip_creative_flex_cag_origin_write"),
            (n.subsequent_data = JSON.stringify({
              callsite: "removeLeadingStaticCard",
              gk_skip: a,
            })),
            n),
        }),
          o("DAFlexibleFormatUtils").hasRelatedMedia(e) && !a
            ? (t = N(
                t,
                "format_liquidity_da_flexible_format_with_related_media",
              ))
            : (t = o("AdsMutators").chain(
                o("AdsAdgroupCreativeAssetGroupsSpecOriginMutators")
                  .deleteAllOrigins,
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative_asset_groups_spec.groups.set(
                  r("immutable").List([]),
                ),
              )(e)));
      }
      return T(t, r("AdsAdgroupChildAttachmentTypes").STATIC);
    }
    function x(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(e, "format_liquidity_da_intro_card");
    }
    function $(e) {
      return o(
        "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
      ).hasSpecificOrigin(
        e,
        "format_liquidity_da_flexible_format_with_related_media",
      );
    }
    function P(e, t) {
      var n,
        a,
        i,
        l,
        s = o("AdsDynamicAdCustomizationAssetFeedUtils").isAssetFeedBasedMMDA(
          e,
        ),
        u = s
          ? o("AdsDynamicAdCustomizationAssetFeedUtils").getCTAType(e)
          : o("AdsAdgroupSpecUtils").getCallToActionType(e),
        c = s
          ? o("AdsDynamicAdCustomizationAssetFeedUtils").getDefaultWebsiteURL(e)
          : (n = e.creative) == null ||
              (n = n.object_story_spec) == null ||
              (n = n.template_data) == null
            ? void 0
            : n.link,
        d = ((a = {}), (a.link = c || ""), a);
      if (
        (t
          ? (r("setByPath")(
              d,
              r("AdsAPIChildAttachmentPaths").TEMPLATE_VIDEO_SPEC.TEMPLATE_ID,
              r("DynamicAdsTemplateVideoShowreelTemplateConfig")
                .default_template_id,
            ),
            r("setByPath")(
              d,
              r("AdsAPIChildAttachmentPaths").TEMPLATE_VIDEO_SPEC.CUSTOMIZATION,
              r("DynamicAdsTemplateVideoShowreelTemplateConfig").templates[
                r("DynamicAdsTemplateVideoShowreelTemplateConfig")
                  .default_template_id
              ].customization,
            ))
          : r("setByPath")(d, r("AdsAPIChildAttachmentPaths").STATIC_CARD, !0),
        u != null)
      ) {
        var m,
          p = r("immutable").Map(((m = {}), (m.type = u), m)),
          _ = r("getByPath")(
            o("AdsAdgroupSpecUtils").getCallToAction(e),
            r("AdsAPICallToActionPaths").VALUE.LEAD_GEN_FORM_ID,
          );
        if (_) {
          var f;
          p = p.set(
            "value",
            r("immutable").Map(((f = {}), (f.lead_gen_form_id = _), f)),
          );
        }
        d.call_to_action = p;
      }
      var g =
        (i = e.creative) == null ||
        (i = i.object_story_spec) == null ||
        (i = i.template_data) == null
          ? void 0
          : i.child_attachments;
      g
        ? (g = g.splice(0, 0, r("immutable").fromJS(d)))
        : (g = r("immutable").fromJS([d, E(e)]));
      var h = (l = r("qex")._("3966")) != null ? l : !1,
        y = r("gkx")("20703") === !0;
      if ((h || y) && !$(e)) {
        var C = N(e, "format_liquidity_da_intro_card");
        return M(C, g);
      }
      return M(e, g);
    }
    function N(e, t) {
      var n = r("immutable").Map().set("group_uuid", r("uuidv4")().toString());
      return o("AdsMutators").chain(
        function (e) {
          return o(
            "AdsAdgroupCreativeAssetGroupsSpecOriginMutators",
          ).setOrigins(e, [t]);
        },
        r("AdsAdgroupRecordAccessors").creative_asset_groups_spec.groups.set(
          r("immutable").List([n]),
        ),
      )(e);
    }
    function M(e, t) {
      var n;
      return o("AdsMutators").chain(
        (n = r("AdsAdgroupRecordAccessors")).creative.object_story_spec
          .template_data.name.delete,
        n.creative.object_story_spec.template_data.description.delete,
        n.creative.object_story_spec.template_data.force_single_link.delete,
        n.creative.object_story_spec.template_data.child_attachments.set(t),
        function (e) {
          return o(
            "AdsDynamicAdCustomizationAssetFeedUtils",
          ).isAssetFeedBasedMMDA(e)
            ? o(
                "AdsDynamicAdCustomizationFieldMutators",
              ).fixTemplateDataForAssetFeedMMDALegacyFields(e)
            : e;
        },
      )(e);
    }
    function w(e) {
      var t,
        n,
        a =
          (t = e.creative) == null ||
          (t = t.object_story_spec) == null ||
          (t = t.template_data) == null
            ? void 0
            : t.child_attachments,
        i =
          a == null ||
          (n = a.findIndex(function (e) {
            return !e.getIn(r("AdsAPIChildAttachmentPaths").STATIC_CARD);
          })) == null
            ? void 0
            : n.toString(),
        l =
          a == null
            ? void 0
            : a.getIn([i].concat(r("AdsAPIChildAttachmentPaths").NAME)),
        s =
          a == null
            ? void 0
            : a.getIn([i].concat(r("AdsAPIChildAttachmentPaths").DESCRIPTION));
      return o("AdsMutators").chain(
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.name.set(l),
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.template_data.description.set(s),
        r("AdsAdgroupRecordAccessors").creative.object_story_spec.template_data
          .child_attachments.delete,
        function (e) {
          return o(
            "AdsDynamicAdCustomizationAssetFeedUtils",
          ).isAssetFeedBasedMMDA(e)
            ? o(
                "AdsDynamicAdCustomizationFieldMutators",
              ).fixTemplateDataForAssetFeedMMDALegacyFields(e)
            : e;
        },
      )(e);
    }
    var A = {
      isCardIndex: C,
      isEmptyValue: b,
      hasValue: v,
      valueNotEqualOtherField: S,
      notStaticCard: R,
    };
    function F(e, t, n, a, i) {
      var l = r("AdsAdgroupChildAttachmentsFields").callToActionType.get(
        e,
        a,
        i,
      );
      return !l.supported || l.value == null || l.value === ""
        ? !1
        : !o("AdsAdgroupSpecUtils").isCTALinkCustomizable(e, t, n);
    }
    function O(e, t, n) {
      var o = [
        A.hasValue,
        A.valueNotEqualOtherField(
          r("AdsAdgroupChildAttachmentsFields").linkURL,
          t,
        ),
      ];
      return y(
        e,
        t,
        r("AdsAdgroupChildAttachmentsFields").callToActionLink,
        n,
        function () {
          for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return o.every(function (e) {
            return e.apply(void 0, t);
          });
        },
      );
    }
    ((l.mutateChildAttachments = u),
      (l.setChildMediaFormat = c),
      (l.setChildImageURL = f),
      (l.setChildVideoID = g),
      (l.setChildCaptionIDs = h),
      (l.setEachChildField = y),
      (l.removePlaceData = L),
      (l.appendPlaceData = k),
      (l.removeTemplatePlaceData = I),
      (l.removeLeadingStaticCard = D),
      (l.addLeadingStaticCard = P),
      (l.removeAllStaticCards = w),
      (l.childIterationConditions = A),
      (l.shouldSyncCallToActionLinkWithLink = F),
      (l.syncAllChildLinksWithCTALinks = O));
  },
  98,
);
