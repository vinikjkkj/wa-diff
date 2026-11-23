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
      var s = t;
      if (
        !o("AdsAssetFeedUtils").isDofMessagingDestinationAdgroupFromSpec(s) &&
        !o(
          "AdsAssetFeedUtils",
        ).isUnifiedProfileVisitsDestinationAdgroupFromSpec(s) &&
        (o("AdsAssetFeedUtils").isAdgroupUsingNonTextOnlyDofAssetFeedSpec(s) ||
          (i != null &&
            o("AdsUEditorAdgroupCachedUtils").hasCachedAssetFeed(i, s, e)))
      )
        return u(e, s, a, i, l);
      if (
        (o("AdsMediaOverlaysUtils").hasCustomOverlaySpec(s) &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.custom_overlay_spec.delete(s)),
        a === r("AdsAPIObjectives").PAGE_LIKES)
      )
        return m(e, s, n);
      switch (
        ((s = r(
          "AdsAdgroupRecordAccessors",
        ).creative.platform_customizations.delete(s)),
        e)
      ) {
        case "IMAGE":
          return c(a, s);
        case "VIDEO":
          return d(a, s, l);
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid media format: %s", e),
            s
          );
      }
    }
    function u(e, t, n, a, i) {
      var l = t,
        s = a != null ? a.get(l.id) : null;
      switch (e) {
        case "IMAGE":
          return s != null && s.imageAssetFeedSpec != null
            ? r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
                s.imageAssetFeedSpec,
                l,
              )
            : o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l)
              ? c(
                  n,
                  o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertFromAssetFeedSpec(r("ApiAdObjectTypes").VIDEO, l, n),
                )
              : (o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(
                  l,
                ) &&
                  ((l = o(
                    "AdsLocalizedPlacementsMutators",
                  ).removeAllMediaInLocalizedPlacementsAdgroup(l)),
                  (l = o(
                    "AdsUEditorAdgroupAssetFeedMutators",
                  ).convertLocalizedPlacementsAdgroupToDLOAdgroup(
                    l,
                    "videos",
                  ))),
                (l = r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.videos.delete(l)),
                (l = o("AdsDLOAssetFeedMutators").removeMediaFromAdgroup(
                  l,
                  "videos",
                )),
                r(
                  "AdsAdgroupRecordAccessors",
                ).creative.asset_feed_spec.ad_formats.set(
                  r("immutable").List.of("SINGLE_IMAGE"),
                  l,
                ));
        case "VIDEO":
          if (s != null && s.videoAssetFeedSpec != null)
            return r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.set(
              s.videoAssetFeedSpec,
              l,
            );
          if (o("AdsAssetFeedUtils").isPACAdgroupFromRecord(l)) {
            var u,
              m = (u = l.creative) == null ? void 0 : u.object_type;
            return d(
              n,
              o("AdsUEditorAdgroupAssetFeedMutators").convertFromAssetFeedSpec(
                m,
                l,
                n,
              ),
              i,
            );
          }
          return (
            o("AdsAssetFeedUtils").isLocalizedPlacementsAdgroupFromRecord(l) &&
              ((l = o(
                "AdsLocalizedPlacementsMutators",
              ).removeAllMediaInLocalizedPlacementsAdgroup(l)),
              (l = o(
                "AdsUEditorAdgroupAssetFeedMutators",
              ).convertLocalizedPlacementsAdgroupToDLOAdgroup(l, "images"))),
            (l = r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.images.delete(l)),
            (l = o("AdsDLOAssetFeedMutators").removeMediaFromAdgroup(
              l,
              "images",
            )),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.ad_formats.set(
              r("immutable").List.of("SINGLE_VIDEO"),
              l,
            )
          );
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid media format: %s", e),
            l
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
    function d(e, t, n) {
      var a,
        i,
        l = t,
        s = (a = l.creative) == null ? void 0 : a.object_type;
      switch (s) {
        case r("ApiAdObjectTypes").PHOTO:
          l = o("AdsAdgroupPostTypeMutators").convertPhotoPostToVideoPost(e, l);
          break;
        case r("ApiAdObjectTypes").SHARE:
          ((o("AdsBrandAwarenessUtils").isBrandObjective(e) ||
            e === r("AdsAPIObjectives").POST_ENGAGEMENT) &&
            (l = o("AdsAdgroupCallToActionMutatorsAdapter").setCallToAction(
              r("gkx")("14839") ? "SEE_DETAILS" : "LEARN_MORE",
              l,
              n,
            )),
            (l = o(
              "AdsAdgroupPostTypeMutators",
            ).convertLinkOrTemplatePostToVideoPost(e, l)),
            o("AdsCanvasAdUtils").isCanvasAd(l) ||
              (l = r(
                "AdsAdgroupRecordAccessors",
              ).creative.product_set_id.delete(l)));
          break;
        case r("ApiAdObjectTypes").VIDEO:
          break;
        default:
          return (
            r("FBLogger")("ads").mustfix("Invalid object type: %s", s),
            l
          );
      }
      var u = o("AdsUEditorWebsiteUtils").getVideoLPPFormat(l, e);
      return (
        e === r("AdsAPIObjectives").LINK_CLICKS &&
          ((i = l.creative) == null ||
          (i = i.object_story_spec) == null ||
          (i = i.video_data) == null ||
          (i = i.call_to_action) == null
            ? void 0
            : i.type) === "CALL_NOW" &&
          (u = null),
        (l = o("AdsUEditorCallToActionMutators").setCallToActionLinkFormat(
          l,
          u,
        )),
        l
      );
    }
    function m(t, n, a) {
      var i,
        l,
        s = n;
      (e || (e = r("AdsDataAtom"))).isDispatching() &&
        (e || (e = r("AdsDataAtom"))).waitFor([
          r("AdsAdgroupEditorStore").getDispatchToken(),
        ]);
      var u = r("AdsAdgroupSemanticFields").pageID.get(a, s),
        c;
      if (
        t === "VIDEO" &&
        ((i = s.creative) == null ? void 0 : i.object_type) !==
          r("ApiAdObjectTypes").SHARE
      ) {
        var d, m;
        ((s = o("AdsMutators").chain(
          (m = r(
            "AdsAdgroupRecordAccessors",
          )).creative.object_story_spec.page_id.set(u),
          m.creative.object_type.set(r("ApiAdObjectTypes").VIDEO),
          m.creative.object_story_spec.video_data.call_to_action.value.page.set(
            u,
          ),
          m.creative.object_story_spec.video_data.call_to_action.type.set(
            "LIKE_PAGE",
          ),
        )(s)),
          (c = (d = s.creative) == null ? void 0 : d.body),
          c &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.message.set(c, s)));
        var p = r("AdsAdgroupEditorStore").getCachedVideoID(s.id);
        p &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.set(p, s));
        var _ = r("AdsAdgroupEditorStore").getCachedVideoThumbnailURL(s.id);
        _ &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_url.set(_, s));
        var f = r("AdsAdgroupEditorStore").getCachedVideoThumbnailHash(s.id);
        return (
          f &&
            (s = r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.image_hash.set(f, s)),
          o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.image_hash.delete,
            r("AdsAdgroupRecordAccessors").creative.body.delete,
            r("AdsAdgroupRecordAccessors").creative.title.delete,
            r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          )(s)
        );
      } else if (
        t === "VIDEO" &&
        ((l = s.creative) == null ? void 0 : l.object_type) ===
          r("ApiAdObjectTypes").SHARE
      ) {
        var g,
          h,
          y =
            (g = s.creative) == null || (g = g.asset_feed_spec) == null
              ? void 0
              : g.titles;
        (y &&
          (s = r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.titles.delete(s)),
          (s = o("AdsMutators").chain(
            r("AdsAdgroupRecordAccessors").creative.link_og_id.set(u),
            r("AdsAdgroupRecordAccessors").creative.object_type.set(
              r("ApiAdObjectTypes").VIDEO,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.page_id.set(u),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.value.page.set(
              u,
            ),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.object_story_spec.video_data.call_to_action.type.set(
              "LIKE_PAGE",
            ),
          )(s)));
        var C =
            (h = s.creative) == null ||
            (h = h.object_story_spec) == null ||
            (h = h.link_data) == null
              ? void 0
              : h.message,
          b = r("AdsAdgroupEditorStore").getCachedVideoID(s.id),
          v = r("AdsAdgroupEditorStore").getCachedVideoThumbnailURL(s.id);
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
          ).creative.object_story_spec.video_data.message.set(C),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.video_id.set(b),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.video_data.image_url.set(v),
        )(s);
      } else if (t === "IMAGE") {
        var S, m;
        s = o("AdsMutators").chain(
          (m = r("AdsAdgroupRecordAccessors")).creative.object_id.set(u),
          m.creative.object_type.set(r("ApiAdObjectTypes").SHARE),
          m.creative.object_story_spec.link_data.call_to_action.value.page.set(
            u,
          ),
          m.creative.object_story_spec.link_data.call_to_action.type.set(
            "LIKE_PAGE",
          ),
        )(s);
        var R = r("AdsAdgroupEditorStore").getCachedImageCrops(s.id),
          L = r("AdsAdgroupEditorStore").getCachedImageHash(s.id),
          E = r("AdsAdgroupEditorStore").getCachedTitle(s.id),
          k =
            (S = s.creative) == null ||
            (S = S.object_story_spec) == null ||
            (S = S.video_data) == null
              ? void 0
              : S.message,
          I = r("AdsAdgroupEditorStore").getCachedLink(s.id);
        if (u != null && I == null) {
          var T = r("AdsPageStore").getLoadObject(u).getValue();
          I = T == null ? void 0 : T.link;
        }
        return o("AdsMutators").chain(
          r("AdsAdgroupRecordAccessors").creative.link_og_id.delete,
          r("AdsAdgroupRecordAccessors").creative.object_id.delete,
          r("AdsAdgroupRecordAccessors").creative.link_url.delete,
          r("AdsAdgroupRecordAccessors").creative.video_id.delete,
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.message.set(k),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.name.set(E),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_hash.set(L),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.image_crops.set(R),
          r(
            "AdsAdgroupRecordAccessors",
          ).creative.object_story_spec.link_data.link.set(I),
          r("AdsAdgroupRecordAccessors").creative.object_story_spec.video_data
            .delete,
        )(s);
      } else
        return (r("FBLogger")("ads").mustfix("Invalid media format: %s", t), s);
    }
    l.setMediaFormat = s;
  },
  98,
);
