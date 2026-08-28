__d(
  "AdsAdgroupEditorStore",
  [
    "AdsAdgroupRecordAccessors",
    "AdsAdgroupSetLinkPostFormatDataActionFlux",
    "AdsAdgroupSpecUtils",
    "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
    "AdsDataAtom",
    "AdsInstagramActorIDUtils",
    "AdsLinkPostFormat",
    "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
    "AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux",
    "AdsUEditorAdgroupSetCallToActionLinkDataActionFlux",
    "AdsUEditorAdgroupSetCallToActionTypeDataActionFlux",
    "AdsUEditorAdgroupSetMediaFormatDataActionFlux",
    "AdsUEditorAdgroupSetPageDataActionFlux",
    "AdsUEditorAdgroupSetUseDynamicDataActionFlux",
    "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
    "AdsUEditorCampaignChangeLeadGenDestinationActionFlux",
    "AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux",
    "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
    "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
    "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
    "AdsUEditorHostIDs",
    "AdsUEditorUtils",
    "Cache",
    "FluxStore",
    "adsCallToActionShouldCacheCTAType",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (function (t) {
        function n() {
          var n;
          return (
            (n = t.call(this, e || (e = r("AdsDataAtom"))) || this),
            (n.getCachedCallToActionType = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.callToActionType) || void 0;
            }),
            (n.getCachedCallToActionLink = function (e, t) {
              if (!t) return null;
              var r = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return r && r.callToActionLinks.get(t)
                ? r.callToActionLinks.get(t)
                : null;
            }),
            (n.getCachedImageCrops = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.imageCrops) || void 0;
            }),
            (n.getCachedImageHash = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.imageHash) || void 0;
            }),
            (n.getCachedVideoThumbnailURL = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.videoThumbnailURL) || void 0;
            }),
            (n.getCachedImageURL = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.imageURL) || void 0;
            }),
            (n.getCachedVideoID = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.videoID) || void 0;
            }),
            (n.getCachedVideoCallToActionType = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.videoCallToActionType) || void 0;
            }),
            (n.getCachedLink = function (e) {
              var t = n.$AdsAdgroupEditorStoreClass$p_1.get(e);
              return (t && t.link) || void 0;
            }),
            (n.$AdsAdgroupEditorStoreClass$p_1 = new (r("Cache"))()),
            n
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var a = n.prototype;
        return (
          (a.__getActionTypes = function () {
            return [
              o("AdsAdgroupSetLinkPostFormatDataActionFlux").actionType,
              o("AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux")
                .actionType,
              o("AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux")
                .actionType,
              o("AdsUEditorAdgroupSetCallToActionLinkDataActionFlux")
                .actionType,
              o("AdsUEditorAdgroupSetCallToActionTypeDataActionFlux")
                .actionType,
              o("AdsUEditorAdgroupSetMediaFormatDataActionFlux").actionType,
              o("AdsUEditorAdgroupSetPageDataActionFlux").actionType,
              o("AdsUEditorCampaignChangeLeadGenDestinationActionFlux")
                .actionType,
              o(
                "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
              ).actionType,
              o(
                "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
              ).actionType,
              o("AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux")
                .actionType,
              o("AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux")
                .actionType,
              o(
                "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
              ).actionType,
              o("AdsUEditorAdgroupSetUseDynamicDataActionFlux").actionType,
            ];
          }),
          (a.__onDispatch = function (t) {
            var e = t.action;
            if (
              o("AdsUEditorUtils").shouldHostHandleAction(
                e,
                r("AdsUEditorHostIDs").EDITING,
              )
            )
              switch (e.type) {
                case o("AdsUEditorAdgroupSetMediaFormatDataActionFlux")
                  .actionType:
                  this.$AdsAdgroupEditorStoreClass$p_2(
                    e.adgroupIDs,
                    e.mediaFormat,
                    e.adgroupsToCache,
                  );
                  break;
                case o(
                  "AdsUEditorCampaignPromotedObjectSetPageIdDataActionFlux",
                ).actionType:
                  this.$AdsAdgroupEditorStoreClass$p_3(e.adgroupIDs, e.pageID);
                  break;
                case o("AdsUEditorAdgroupSetPageDataActionFlux").actionType:
                  this.$AdsAdgroupEditorStoreClass$p_3(e.adgroupIDs, e.pageID);
                  break;
                case o("AdsAdgroupSetLinkPostFormatDataActionFlux").actionType:
                  this.$AdsAdgroupEditorStoreClass$p_4(
                    e.adgroupIDs,
                    e.linkPostFormat,
                    e.fieldsToCache,
                  );
                  break;
                case o("AdsUEditorAdgroupSetCallToActionTypeDataActionFlux")
                  .actionType:
                  this.$AdsAdgroupEditorStoreClass$p_5(
                    e.adgroupIDs,
                    e.adgroupsToCache,
                  );
                  break;
                case o("AdsUEditorAdgroupSetCallToActionLinkDataActionFlux")
                  .actionType:
                  this.$AdsAdgroupEditorStoreClass$p_5(
                    e.adgroupIDs,
                    e.adgroupsToCache,
                  );
                  break;
                case o("AdsUEditorAdgroupRemoveInstagramAccountDataActionFlux")
                  .actionType:
                  (this.setInstagramActorIDAndCoupledPageID(
                    e.adgroupIDs,
                    e.adgroupsToCache,
                  ),
                    this.$AdsAdgroupEditorStoreClass$p_6(e.adgroupIDs));
                  break;
                case o("AdsUEditorCampaignChangeLeadGenDestinationActionFlux")
                  .actionType:
                case o(
                  "AdsUEditorCampaignSelectOmnichannelPromotedObjectTypeForWebsiteAndAppDataActionFlux",
                ).actionType:
                case o(
                  "AdsOutcomeCampaignSelectMessengerPromotedObjectTypeDataActionFlux",
                ).actionType:
                case o(
                  "AdsUEditorCampaignSelectPixelPromotedObjectTypeDataActionFlux",
                ).actionType:
                case o(
                  "AdsUEditorCampaignSelectAppPromotedObjectTypeDataActionFlux",
                ).actionType:
                case o(
                  "AdsUEditorAdgroupTransformStaticToDynamicCreativeSourceActionFlux",
                ).actionType:
                case o("AdsUEditorAdgroupSetUseDynamicDataActionFlux")
                  .actionType:
                  this.removeCagGroupsCaches(e.adgroupIDs);
                  break;
              }
          }),
          (a.$AdsAdgroupEditorStoreClass$p_6 = function (t) {
            var e = this,
              n = !1;
            (t.forEach(function (t) {
              var o = e.$AdsAdgroupEditorStoreClass$p_1.get(t);
              if (
                o &&
                o.objectStorySpec &&
                o.objectStorySpec.instagram_actor_id
              ) {
                var a = babelHelpers.extends({}, o);
                (delete r("nullthrows")(a.objectStorySpec).instagram_actor_id,
                  e.$AdsAdgroupEditorStoreClass$p_1.set(t, a),
                  (n = !0));
              }
            }),
              n && this.__emitChange());
          }),
          (a.$AdsAdgroupEditorStoreClass$p_7 = function () {
            return {
              cagGroups: null,
              callToActionType: null,
              callToActionLinks: new Map(),
              carouselStyle: null,
              carouselWithStaticCardStyle: null,
              childAttachments: null,
              childAttachmentsMediaData: new Map(),
              coupledPageID: null,
              coupledInstagramActorID: null,
              customizationRulesSpec: null,
              displayURL: null,
              formatTransformationSpec: null,
              imageAssets: null,
              imageCrops: null,
              imageHash: null,
              imageURL: null,
              instagramActorID: null,
              instagramStoryID: null,
              link: null,
              templateLink: null,
              multiShareOptimized: null,
              multiShareEndCard: null,
              videoThumbnailHash: null,
              videoThumbnailURL: null,
              objectStorySpec: null,
              objectStoryID: null,
              pageID: null,
              platformCustomizations: null,
              productSetID: null,
              title: null,
              upcomingEvent: null,
              videoCallToActionType: null,
              videoID: null,
              videoAssets: null,
            };
          }),
          (a.getCachedInstagramStoryID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.instagramStoryID) || void 0;
          }),
          (a.getCachedCoupledInstagramActorID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.coupledInstagramActorID) || void 0;
          }),
          (a.getCachedInstagramActorID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.instagramActorID) || void 0;
          }),
          (a.getCachedCoupledPageID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.coupledPageID) || void 0;
          }),
          (a.getCachedCarouselStyle = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.carouselStyle) || void 0;
          }),
          (a.getCachedCarouselWithStaticCardStyle = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e ? e.carouselWithStaticCardStyle : null;
          }),
          (a.getCachedChildAttachments = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.childAttachments) || void 0;
          }),
          (a.getCachedMultiShareOptimized = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e && e.multiShareOptimized;
          }),
          (a.getCachedMultiShareEndCard = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e && e.multiShareEndCard;
          }),
          (a.getCachedUpcomingEvent = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e && e.upcomingEvent;
          }),
          (a.getCachedTemplateLink = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e == null ? void 0 : e.templateLink;
          }),
          (a.getCachedChildAttachmentsMediaData = function (t, n) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return e && e.childAttachmentsMediaData
              ? e.childAttachmentsMediaData.get(n)
              : null;
          }),
          (a.getCachedDisplayURL = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.displayURL) || void 0;
          }),
          (a.getCachedVideoThumbnailHash = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.videoThumbnailHash) || void 0;
          }),
          (a.getCachedPageID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.pageID) || void 0;
          }),
          (a.getCachedPlatformCustomizations = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.platformCustomizations) || void 0;
          }),
          (a.getCachedObjectStorySpec = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.objectStorySpec) || void 0;
          }),
          (a.getCachedObjectStoryID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.objectStoryID) || void 0;
          }),
          (a.getCachedTitle = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.title) || void 0;
          }),
          (a.getCachedAssetFeedVideos = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.videoAssets) || void 0;
          }),
          (a.getCachedAssetFeedImages = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.imageAssets) || void 0;
          }),
          (a.getCachedProductSetID = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.productSetID) || void 0;
          }),
          (a.getCachedCustomizationRulesSpec = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.customizationRulesSpec) || void 0;
          }),
          (a.getCachedCagGroups = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.cagGroups) || void 0;
          }),
          (a.getCachedFormatTransformationSpec = function (t) {
            var e = this.$AdsAdgroupEditorStoreClass$p_1.get(t);
            return (e && e.formatTransformationSpec) || void 0;
          }),
          (a.setInstagramActorIDAndCoupledPageID = function (t, n) {
            var e = this;
            n &&
              (t.forEach(function (t) {
                var r = n && n.get(t),
                  a = r
                    ? o("AdsInstagramActorIDUtils").getInstagramActorID(r)
                    : null;
                if (a) {
                  var i =
                    e.$AdsAdgroupEditorStoreClass$p_1.get(t) ||
                    e.$AdsAdgroupEditorStoreClass$p_7();
                  ((i.coupledPageID = i.pageID),
                    (i.instagramActorID = a),
                    e.$AdsAdgroupEditorStoreClass$p_1.set(t, i));
                }
              }),
              this.__emitChange());
          }),
          (a.removeCagGroupsCaches = function (t) {
            var e = this,
              n = !1;
            (t.forEach(function (t) {
              var r = e.$AdsAdgroupEditorStoreClass$p_1.get(t);
              r &&
                r.cagGroups &&
                ((n = !0),
                (r.cagGroups = null),
                e.$AdsAdgroupEditorStoreClass$p_1.set(t, r));
            }),
              n && this.__emitChange());
          }),
          (a.$AdsAdgroupEditorStoreClass$p_3 = function (t, n) {
            var e = this;
            (t.forEach(function (t) {
              var r =
                e.$AdsAdgroupEditorStoreClass$p_1.get(t) ||
                e.$AdsAdgroupEditorStoreClass$p_7();
              ((r.pageID = n), e.$AdsAdgroupEditorStoreClass$p_1.set(t, r));
            }),
              this.__emitChange());
          }),
          (a.$AdsAdgroupEditorStoreClass$p_4 = function (t, n, o) {
            var e = this;
            if (o) {
              var a = o.cagGroupsToCache,
                i = o.carouselStyleToCache,
                l = o.carouselWithStaticCardStyleToCache,
                s = o.childAttachmentsToCache,
                u = o.customizationRulesSpecToCache,
                c = o.displayURLsToCache,
                d = o.formatTransformationToCache,
                m = o.multiShareEndCardToCache,
                p = o.multiShareOptimizedToCache,
                _ = o.platformCustomizationsToCache,
                f = o.productSetIDToCache,
                g = o.templateLinkToCache,
                h = o.upcomingEventToCache;
              (!a && !s && !c && !_ && !u && !f && !p && !m && !h && !g) ||
                (t.forEach(function (t) {
                  var o =
                    e.$AdsAdgroupEditorStoreClass$p_1.get(t) ||
                    e.$AdsAdgroupEditorStoreClass$p_7();
                  (s &&
                    n === r("AdsLinkPostFormat").SINGLE &&
                    (o.childAttachments = s.get(t)),
                    f &&
                      n === r("AdsLinkPostFormat").SINGLE &&
                      (o.productSetID = f.get(t)),
                    c &&
                      n === r("AdsLinkPostFormat").SINGLE &&
                      (o.displayURL = c.get(t)),
                    _ &&
                      n === r("AdsLinkPostFormat").MULTIPLE &&
                      (o.platformCustomizations = _.get(t)),
                    i &&
                      n === r("AdsLinkPostFormat").SINGLE &&
                      (o.carouselStyle = i.get(t)),
                    l &&
                      n === r("AdsLinkPostFormat").SINGLE &&
                      (o.carouselWithStaticCardStyle = l.get(t)),
                    u && u.has(t) && (o.customizationRulesSpec = u.get(t)),
                    p &&
                      n !== r("AdsLinkPostFormat").MULTIPLE &&
                      (o.multiShareOptimized = p.get(t)),
                    m &&
                      n !== r("AdsLinkPostFormat").MULTIPLE &&
                      (o.multiShareEndCard = m.get(t)),
                    h && (o.upcomingEvent = h.get(t)),
                    g &&
                      n !== r("AdsLinkPostFormat").MULTIPLE &&
                      (o.templateLink = g.get(t)),
                    a &&
                      n !== r("AdsLinkPostFormat").FLEXIBLE &&
                      (o.cagGroups = a.get(t)),
                    d &&
                      n !== r("AdsLinkPostFormat").MULTIPLE &&
                      (o.formatTransformationSpec = d.get(t)),
                    e.$AdsAdgroupEditorStoreClass$p_1.set(t, o));
                }),
                this.__emitChange());
            }
          }),
          (a.$AdsAdgroupEditorStoreClass$p_2 = function (t, n, r) {
            var e = this;
            (t.forEach(function (t) {
              var a =
                  e.$AdsAdgroupEditorStoreClass$p_1.get(t) ||
                  e.$AdsAdgroupEditorStoreClass$p_7(),
                i = r.get(t);
              if (n === "IMAGE") {
                var l, s, u, c, d;
                ((a.videoCallToActionType =
                  i == null ||
                  (l = i.creative) == null ||
                  (l = l.object_story_spec) == null ||
                  (l = l.video_data) == null ||
                  (l = l.call_to_action) == null
                    ? void 0
                    : l.type),
                  (a.videoThumbnailHash =
                    i == null ||
                    (s = i.creative) == null ||
                    (s = s.object_story_spec) == null ||
                    (s = s.video_data) == null
                      ? void 0
                      : s.image_hash),
                  (a.videoThumbnailURL =
                    i == null ||
                    (u = i.creative) == null ||
                    (u = u.object_story_spec) == null ||
                    (u = u.video_data) == null
                      ? void 0
                      : u.image_url),
                  (a.videoID =
                    i == null ||
                    (c = i.creative) == null ||
                    (c = c.object_story_spec) == null ||
                    (c = c.video_data) == null
                      ? void 0
                      : c.video_id),
                  (a.videoAssets =
                    i == null ||
                    (d = i.creative) == null ||
                    (d = d.asset_feed_spec) == null
                      ? void 0
                      : d.videos));
              } else if (n === "VIDEO" && i) {
                var m, p, _, f, g;
                ((a.link = o("AdsAdgroupSpecUtils").getLink(i)),
                  (a.callToActionType = o(
                    "AdsAdgroupSpecUtils",
                  ).getCallToActionType(i)),
                  e.$AdsAdgroupEditorStoreClass$p_8(i, a),
                  (a.title =
                    i == null || (m = i.creative) == null ? void 0 : m.title),
                  (a.imageCrops =
                    (i == null || (p = i.creative) == null
                      ? void 0
                      : p.image_crops) ||
                    (i == null ||
                    (_ = i.creative) == null ||
                    (_ = _.object_story_spec) == null ||
                    (_ = _.link_data) == null
                      ? void 0
                      : _.image_crops) ||
                    (i == null ||
                    (f = i.creative) == null ||
                    (f = f.object_story_spec) == null ||
                    (f = f.template_data) == null
                      ? void 0
                      : f.image_crops)),
                  (a.imageAssets =
                    i == null ||
                    (g = i.creative) == null ||
                    (g = g.asset_feed_spec) == null
                      ? void 0
                      : g.images));
              }
              e.$AdsAdgroupEditorStoreClass$p_1.set(t, a);
            }),
              this.__emitChange());
          }),
          (a.$AdsAdgroupEditorStoreClass$p_8 = function (t, n) {
            var e,
              a,
              i,
              l,
              s,
              u,
              c = t == null || (e = t.creative) == null ? void 0 : e.image_hash,
              d =
                t == null ||
                (a = t.creative) == null ||
                (a = a.object_story_spec) == null ||
                (a = a.link_data) == null
                  ? void 0
                  : a.image_hash,
              m = o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).getUnifiedCreativeOrLegacyValueFromRecord(
                t,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .photo_data.image_hash.get,
                function (e) {
                  var t;
                  return (t = e.creative) == null ||
                    (t = t.asset_feed_spec) == null ||
                    (t = t.images) == null ||
                    (t = t.get(0)) == null
                    ? void 0
                    : t.get("hash");
                },
              ),
              p =
                t == null ||
                (i = t.creative) == null ||
                (i = i.object_story_spec) == null ||
                (i = i.template_data) == null
                  ? void 0
                  : i.image_hash;
            n.imageHash = c || d || m || p || null;
            var _ =
                t == null || (l = t.creative) == null ? void 0 : l.image_url,
              f =
                t == null ||
                (s = t.creative) == null ||
                (s = s.object_story_spec) == null ||
                (s = s.link_data) == null
                  ? void 0
                  : s.picture,
              g = o(
                "AdsAdgroupUnifiedCreativeAPIMigrationUtils",
              ).getUnifiedCreativeOrLegacyValueFromRecord(
                t,
                r("AdsAdgroupRecordAccessors").creative.object_story_spec
                  .photo_data.url.get,
                function (e) {
                  var t;
                  return (t = e.creative) == null ||
                    (t = t.asset_feed_spec) == null ||
                    (t = t.images) == null ||
                    (t = t.get(0)) == null
                    ? void 0
                    : t.get("url");
                },
              ),
              h =
                t == null ||
                (u = t.creative) == null ||
                (u = u.object_story_spec) == null ||
                (u = u.template_data) == null
                  ? void 0
                  : u.picture;
            n.imageURL = _ || f || g || h || null;
          }),
          (a.$AdsAdgroupEditorStoreClass$p_5 = function (t, n) {
            var e = this;
            if (n) {
              var o = !1;
              (t.forEach(function (t) {
                var a,
                  i,
                  l =
                    e.$AdsAdgroupEditorStoreClass$p_1.get(t) ||
                    e.$AdsAdgroupEditorStoreClass$p_7(),
                  s = n.get(t),
                  u =
                    s == null ||
                    (a = s.creative) == null ||
                    (a = a.object_story_spec) == null ||
                    (a = a.link_data) == null ||
                    (a = a.call_to_action) == null ||
                    (a = a.value) == null
                      ? void 0
                      : a.link,
                  c =
                    s == null ||
                    (i = s.creative) == null ||
                    (i = i.object_story_spec) == null ||
                    (i = i.link_data) == null ||
                    (i = i.call_to_action) == null
                      ? void 0
                      : i.type;
                c != null &&
                  r("adsCallToActionShouldCacheCTAType")(c) &&
                  (l.callToActionLinks.set(c, u),
                  e.$AdsAdgroupEditorStoreClass$p_1.set(t, l),
                  (o = !0));
              }),
                o && this.__emitChange());
            }
          }),
          n
        );
      })(r("FluxStore"));
    s.__moduleID = i.id;
    var u = new s(),
      c = u;
    l.default = c;
  },
  98,
);
