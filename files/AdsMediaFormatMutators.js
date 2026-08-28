__d(
  "AdsMediaFormatMutators",
  [
    "AdsAPIObjectives",
    "AdsAdgroupCallToActionMutatorsAdapter",
    "AdsAdgroupEditorStore",
    "AdsAdgroupPostTypeMutators",
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSemanticFields",
    "AdsAssetFeedUtils",
    "AdsBrandAwarenessUtils",
    "AdsCanvasAdUtils",
    "AdsDLOAssetFeedMutators",
    "AdsDataAtom",
    "AdsLocalizedPlacementsMutators",
    "AdsMediaOverlaysUtils",
    "AdsMutators",
    "AdsObjectTypeUtils",
    "AdsPageStore",
    "AdsUEditorAdgroupAssetFeedMutators",
    "AdsUEditorAdgroupCachedUtils",
    "AdsUEditorCallToActionMutators",
    "AdsUEditorWebsiteUtils",
    "ApiAdObjectTypes",
    "FBLogger",
    "gkx",
    "immutable",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e, t, n, a, i, l) {
      if (
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(t) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(t) &&
        (o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(t) ||
          (i != null &&
            o("AdsUEditorAdgroupCachedUtils").hasCachedAssetFeed(i, t, e)))
      )
        return u(e, t, n, a, i, l);
      if (
        (o("AdsMediaOverlaysUtils").hasCustomOverlaySpec(t) &&
          (t = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.custom_overlay_spec.delete(t)),
        a === r("AdsAPIObjectives").PAGE_LIKES)
      )
        return m(e, t, n);
      switch (
        ((t = r(
          "AdsAdgroupRecordAccessors",
        ).creative.platform_customizations.delete(t)),
        e)
      ) {
        case "IMAGE":
          return c(a, t);
        case "VIDEO":
          return d(a, t, n, l);
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid media format: %s", e),
            t
          );
      }
    }
    function u(e, t, n, a, i, l) {
      var s = i != null ? i.get(t.id) : null;
      switch (e) {
        case "IMAGE":
          return s != null && s.imageAssetFeedSpec != null
            ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
                s.imageAssetFeedSpec,
                t,
              )
            : o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t)
              ? c(
                  a,
                  o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertFromAssetFeedSpec(r("ApiAdObjectTypes").VIDEO, t, a),
                )
              : (o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(
                  t,
                ) &&
                  ((t = o(
                    "AdsLocalizedPlacementsMutators",
                  ).removeAllMediaInLocalizedPlacementsAdgroup(t)),
                  (t = o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertLocalizedPlacementsAdgroupToDLOAdgroup(
                    t,
                    "videos",
                  ))),
                (t = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.videos.delete(t)),
                (t = o("AdsDLOAssetFeedMutators").removeMediaFromAdgroup(
                  t,
                  "videos",
                )),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.ad_formats.set(
                  r("immutable").List.of("SINGLE_IMAGE"),
                  t,
                ));
        case "VIDEO":
          if (s != null && s.videoAssetFeedSpec != null)
            return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
              s.videoAssetFeedSpec,
              t,
            );
          if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(t)) {
            var u,
              m = (u = t.creative) == null ? void 0 : u.object_type;
            return d(
              a,
              o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
                m,
                t,
                a,
              ),
              n,
              l,
            );
          }
          return (
            o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(t) &&
              ((t = o(
                "AdsLocalizedPlacementsMutators",
              ).removeAllMediaInLocalizedPlacementsAdgroup(t)),
              (t = o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).convertLocalizedPlacementsAdgroupToDLOAdgroup(t, "images"))),
            (t = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.images.delete(t)),
            (t = o("AdsDLOAssetFeedMutators").removeMediaFromAdgroup(
              t,
              "images",
            )),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.ad_formats.set(
              r("immutable").List.of("SINGLE_VIDEO"),
              t,
            )
          );
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid media format: %s", e),
            t
          );
      }
    }
    function c(e, t) {
      var n,
        a,
        i = (n = t.creative) == null ? void 0 : n.object_type;
      switch (i) {
        case r("ApiAdObjectTypes").PHOTO:
          return t;
        case r("ApiAdObjectTypes").SHARE:
          var l =
            (a = t.creative) == null ||
            (a = a.object_story_spec) == null ||
            (a = a.video_data) == null
              ? void 0
              : a.offer_id;
          return l
            ? o(
                "AdsAdgroupPostTypeMutators",
              ).convertVideoPostToLinkOrTemplatePost(e, t)
            : o("AdsObjectTypeUtils").isTemplateCreative(t) &&
                e !== r("AdsAPIObjectives").STORE_VISITS &&
                !o("AdsCanvasAdUtils").isCanvasAd(t)
              ? r("AdsAdgroupRecordAccessors").creative.product_set_id.delete(
                  o("AdsAdgroupPostTypeMutators").convertTemplatePostToLinkPost(
                    t,
                  ),
                )
              : t;
        case r("ApiAdObjectTypes").VIDEO:
          var s =
            (e === r("AdsAPIObjectives").POST_ENGAGEMENT &&
              !o("AdsCanvasAdUtils").isCanvasDestinationEnabled(t)) ||
            (o("AdsBrandAwarenessUtils").isBrandObjective(e) &&
              !o("AdsBrandAwarenessUtils").isWebsiteLinkEnabled(t));
          return s
            ? o("AdsAdgroupPostTypeMutators").convertVideoPostToPhotoPost(e, t)
            : o(
                "AdsAdgroupPostTypeMutators",
              ).convertVideoPostToLinkOrTemplatePost(e, t);
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid object type: %s", i),
            t
          );
      }
    }
    function d(e, t, n, a) {
      var i,
        l,
        s = (i = t.creative) == null ? void 0 : i.object_type;
      switch (s) {
        case r("ApiAdObjectTypes").PHOTO:
          t = o("AdsAdgroupPostTypeMutators").convertPhotoPostToVideoPost(e, t);
          break;
        case r("ApiAdObjectTypes").SHARE:
          ((o("AdsBrandAwarenessUtils").isBrandObjective(e) ||
            e === r("AdsAPIObjectives").POST_ENGAGEMENT) &&
            (t = o("AdsAdgroupCallToActionMutatorsAdapter").setCallToAction(
              r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              t,
              a,
            )),
            (t = o(
              "AdsAdgroupPostTypeMutators",
            ).convertLinkOrTemplatePostToVideoPost(e, t)),
            o("AdsCanvasAdUtils").isCanvasAd(t) ||
              (t = r(
                "AdsAdgroupRecordAccessors",
              ).creative.product_set_id.delete(t)));
          break;
        case r("ApiAdObjectTypes").VIDEO:
          break;
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid object type: %s", s),
            t
          );
      }
      var u = o("AdsUEditorWebsiteUtils").getVideoLPPFormat(t, e);
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
          ((l = t.creative) == null ||
          (l = l.object_story_spec) == null ||
          (l = l.video_data) == null ||
          (l = l.call_to_action) == null
            ? void 0
            : l.type) === "CALL_NOW" &&
          (u = null),
        (t = o("AdsUEditorCallToActionMutators").setCallToActionLinkFormat(
          t,
          u,
        )),
        t
      );
    }
    function m(t, n, a) {
      var i, l;
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAdgroupEditorStore").getDispatchToken(),
        ]);
      var s = r("AdsAdgroupSemanticFields").pageID.get(a, n),
        u;
      if (
        t === "VIDEO" &&
        ((i = n.creative) == null ? void 0 : i.object_type) !==
          r("ApiAdObjectTypes").SHARE
      ) {
        var c, d;
        ((n = o("AdsMutators").chain(
          (d = r(
            "AdsAdgroupRecordAccessors",
          )).creative.object_story_spec.page_id.set(s),
          d.creative.object_type.set(r("ApiAdObjectTypes").VIDEO),
          d.creative.object_story_spec.video_data.call_to_action.value.page.set(
            s,
          ),
          d.creative.object_story_spec.video_data.call_to_action.type.set(
            "LIKE_PAGE",
          ),
        )(n)),
          (u = (c = n.creative) == null ? void 0 : c.body),
          u &&
            (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.message.set(u, n)));
        var m = r("AdsAdgroupEditorStore").getCachedVideoID(n.id);
        m &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.set(m, n));
        var p = r("AdsAdgroupEditorStore").getCachedVideoThumbnailURL(n.id);
        p &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_url.set(p, n));
        var _ = r("AdsAdgroupEditorStore").getCachedVideoThumbnailHash(n.id);
        return (
          _ &&
            (n = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.image_hash.set(_, n)),
          o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
            r("AdsAdgroupRecordAccessors").creative.body.delete,
            r("AdsAdgroupRecordAccessors").creative.title.delete,
            r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          )(n)
        );
      } else if (
        t === "VIDEO" &&
        ((l = n.creative) == null ? void 0 : l.object_type) ===
          r("ApiAdObjectTypes").SHARE
      ) {
        var f,
          g,
          h =
            (f = n.creative) == null || (f = f.asset_feed_spec) == null
              ? void 0
              : f.titles;
        (h &&
          (n = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.titles.delete(n)),
          (n = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.link_og_id.set(s),
            r("AdsAdgroupRecordAccessors").creative.object_type.set(
              r("ApiAdObjectTypes").VIDEO,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.page_id.set(s),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.page.set(
              s,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.set(
              "LIKE_PAGE",
            ),
          )(n)));
        var y =
            (g = n.creative) == null ||
            (g = g.object_story_spec) == null ||
            (g = g.link_data) == null
              ? void 0
              : g.message,
          C = r("AdsAdgroupEditorStore").getCachedVideoID(n.id),
          b = r("AdsAdgroupEditorStore").getCachedVideoThumbnailURL(n.id);
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
          r("AdsAdgroupRecordAccessors").creative.body.delete,
          r("AdsAdgroupRecordAccessors").creative.title.delete,
          r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.link_data
            .delete,
          r("AdsAdgroupRecordAccessors").creative.object_story_id.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.message.set(y),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.set(C),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_url.set(b),
        )(n);
      } else if (t === "IMAGE") {
        var v, d;
        n = o("AdsMutators").chain(
          (d = r("AdsAdgroupRecordAccessors")).creative.object_id.set(s),
          d.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
          d.creative.object_story_spec.link_data.call_to_action.value.page.set(
            s,
          ),
          d.creative.object_story_spec.link_data.call_to_action.type.set(
            "LIKE_PAGE",
          ),
        )(n);
        var S = r("AdsAdgroupEditorStore").getCachedImageCrops(n.id),
          R = r("AdsAdgroupEditorStore").getCachedImageHash(n.id),
          L = r("AdsAdgroupEditorStore").getCachedTitle(n.id),
          E =
            (v = n.creative) == null ||
            (v = v.object_story_spec) == null ||
            (v = v.video_data) == null
              ? void 0
              : v.message,
          k = r("AdsAdgroupEditorStore").getCachedLink(n.id);
        if (s != null && k == null) {
          var I = r("AdsPageStore").getLoadObject(s).getValue();
          k = I == null ? void 0 : I.link;
        }
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.link_og_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          r("AdsAdgroupRecordAccessors").creative.link_url.delete,
          r("AdsAdgroupRecordAccessors").creative.video_id.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.message.set(E),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.name.set(L),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_hash.set(R),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_crops.set(S),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(k),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .delete,
        )(n);
      } else
        return (r("FBLogger")("ads").mustfix("Invalid media format: %s", t), n);
    }
    l.setMediaFormat = s;
  },
  98,
);
