__d(
  "AdsAdgroupSemanticFieldMappings",
  [
    "AdsAPIAdgroupPaths",
    "AdsAdgroupRecordAccessors",
    "FBLogger",
    "PathArrayIndex",
    "gkx",
    "immutable",
    "justknobx",
    "unsafeCast",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = function (t) {
        return r("unsafeCast")({
          get: function (n) {
            return n.getIn(t);
          },
          set: function (n, r) {
            var e = function (r) {
              return r.setIn(t, n);
            };
            return r === void 0 ? e : e(r);
          },
          delete: function (n) {
            return n.deleteIn(t);
          },
        });
      },
      u = r("unsafeCast")({
        get: (e = r("AdsAdgroupRecordAccessors")).creative.asset_feed_spec
          .call_to_action_types.get,
        set: function (t, n) {
          var e = t;
          return (
            typeof t == "string" &&
              (r("FBLogger")("ads_asset_feed_spec").mustfix(
                'Bare string passed for call_to_action_types: "%s"',
                t,
              ),
              r("gkx")("23730") && (e = r("immutable").List([t]))),
            r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.call_to_action_types.set(
              r("unsafeCast")(e),
              n,
            )
          );
        },
        __setSemanticValue:
          e.creative.asset_feed_spec.call_to_action_types.__setSemanticValue,
        delete: e.creative.asset_feed_spec.call_to_action_types.delete,
      }),
      c = r("justknobx")._("60"),
      d = babelHelpers.extends({}, e.creative.asset_feed_spec.descriptions, {
        set: function (t, n) {
          var e = t;
          if (
            typeof t == "string" &&
            (r("FBLogger")("ads_asset_feed_spec")
              .blameToPreviousDirectory()
              .mustfix('Bare string passed for descriptions: "%s"', t),
            r("justknobx")._("87") && r("gkx")("23730"))
          ) {
            var o;
            e = r("immutable").List([
              r("immutable").Map(((o = {}), (o.text = t), o)),
            ]);
          }
          return r(
            "AdsAdgroupRecordAccessors",
          ).creative.asset_feed_spec.descriptions.set(r("unsafeCast")(e), n);
        },
      }),
      m = c
        ? r("unsafeCast")(d)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.descriptions,
      p = babelHelpers.extends(
        {},
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles,
        {
          set: function (t, n) {
            var e = t;
            if (
              typeof t == "string" &&
              (r("FBLogger")("ads_asset_feed_spec")
                .blameToPreviousDirectory()
                .mustfix('Bare string passed for titles: "%s"', t),
              r("justknobx")._("207") && r("gkx")("23730"))
            ) {
              var o;
              e = r("immutable").List([
                r("immutable").Map(((o = {}), (o.text = t), o)),
              ]);
            }
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.titles.set(r("unsafeCast")(e), n);
          },
        },
      ),
      _ = c
        ? r("unsafeCast")(p)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.titles,
      f = babelHelpers.extends(
        {},
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies,
        {
          set: function (t, n) {
            var e = t;
            if (
              typeof t == "string" &&
              (r("FBLogger")("ads_asset_feed_spec")
                .blameToPreviousDirectory()
                .mustfix('Bare string passed for bodies: "%s"', t),
              r("justknobx")._("1391") && r("gkx")("23730"))
            ) {
              var o;
              e = r("immutable").List([
                r("immutable").Map(((o = {}), (o.text = t), o)),
              ]);
            }
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.bodies.set(r("unsafeCast")(e), n);
          },
        },
      ),
      g = c
        ? r("unsafeCast")(f)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.bodies,
      h = babelHelpers.extends(
        {},
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls,
        {
          set: function (t, n) {
            var e = t;
            if (
              typeof t == "string" &&
              (r("FBLogger")("ads_asset_feed_spec")
                .blameToPreviousDirectory()
                .mustfix('Bare string passed for link_urls: "%s"', t),
              r("justknobx")._("1406") && r("gkx")("23730"))
            ) {
              var o;
              e = r("immutable").List([
                r("immutable").Map(((o = {}), (o.website_url = t), o)),
              ]);
            }
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.link_urls.set(r("unsafeCast")(e), n);
          },
        },
      ),
      y = c
        ? r("unsafeCast")(h)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.link_urls;
    function C(e, t) {
      return babelHelpers.extends(
        {},
        r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images,
        {
          set: function (o, a) {
            var n = o;
            if (
              typeof o == "string" &&
              (r("FBLogger")("ads_asset_feed_spec")
                .blameToPreviousDirectory()
                .mustfix('Bare string passed for images (%s): "%s"', t, o),
              r("justknobx")._("1537") && r("gkx")("23730"))
            ) {
              var i;
              n =
                o === ""
                  ? null
                  : r("immutable").List([
                      r("immutable").Map(((i = {}), (i[e] = o), i)),
                    ]);
            }
            return r(
              "AdsAdgroupRecordAccessors",
            ).creative.asset_feed_spec.images.set(r("unsafeCast")(n), a);
          },
        },
      );
    }
    var b = C("image_crops", "imageCrops"),
      v = C("hash", "imageHash"),
      S = C("url", "imageURL"),
      R = c
        ? r("unsafeCast")(b)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images,
      L = c
        ? r("unsafeCast")(v)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images,
      E = c
        ? r("unsafeCast")(S)
        : r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.images,
      k = s(
        [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES, [
          o("PathArrayIndex").pathArrayIndex(0),
          "hash",
        ]),
      ),
      I = s(
        [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.IMAGES, [
          o("PathArrayIndex").pathArrayIndex(0),
          "url",
        ]),
      ),
      T = s(
        [].concat(r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.BODIES, [
          o("PathArrayIndex").pathArrayIndex(0),
          "text",
        ]),
      ),
      D = s(
        [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [o("PathArrayIndex").pathArrayIndex(0)],
        ),
      ),
      x = s(
        [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [o("PathArrayIndex").pathArrayIndex(0), "type"],
        ),
      ),
      $ = s(
        [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [o("PathArrayIndex").pathArrayIndex(0), "value"],
        ),
      ),
      P = s(
        [].concat(
          r("AdsAPIAdgroupPaths").CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [o("PathArrayIndex").pathArrayIndex(0), "value", "link"],
        ),
      ),
      N = {
        get: function (t) {},
        set: function (t, n) {
          var e = function (t) {
            return t;
          };
          return n === void 0 ? e : e(n);
        },
        __setSemanticValue: function () {
          throw r("FBLogger")("ads_ad_objects").mustfixThrow(
            "__setSemanticValue is unimplemented and should not be called",
          );
        },
        delete: function (t) {
          return t;
        },
      },
      M = Object.freeze({
        additionalImageIndex: N,
        brandedContentSponsorPageID: N,
        brandedContentSponsorRelationship: N,
        brandedContentSharedToSponsorStatus: N,
        callAdsConfiguration: N,
        callToAction: N,
        callToActionType: N,
        callToActionValue: N,
        captionIDs: N,
        catalogAssetFormatOption: N,
        childAttachments: N,
        collectionThumbnails: N,
        displayURL: N,
        eventID: N,
        headline: N,
        imageCrops: N,
        imageHash: N,
        imageURL: N,
        instagramActorID: N,
        instagramUserID: N,
        interactiveComponentsSpec: N,
        leadGenConfiguration: N,
        leadGenMultiDestination: N,
        linkDescription: N,
        linkURL: N,
        message: N,
        multiShareEndCard: N,
        multiShareOptimized: N,
        offerID: N,
        pageID: N,
        pageWelcomeMessage: N,
        phoneDataID: N,
        post: N,
        postClickItemDescription: N,
        postClickItemHeadline: N,
        productSetID: N,
        retailerItemIDs: N,
        threadsUserID: N,
        upcomingEventMetadata: N,
        videoID: N,
        videoThumbnailHash: N,
        videoThumbnailID: N,
        videoThumbnailURL: N,
        videoThumbnailSource: N,
      }),
      w = Object.freeze({
        callToActionType: r("AdsAdgroupRecordAccessors").creative
          .call_to_action_type,
        headline: r("AdsAdgroupRecordAccessors").creative.title,
        imageCrops: r("AdsAdgroupRecordAccessors").creative.image_crops,
        imageHash: r("AdsAdgroupRecordAccessors").creative.image_hash,
        imageURL: r("AdsAdgroupRecordAccessors").creative.image_url,
        linkURL: r("AdsAdgroupRecordAccessors").creative.object_url,
        message: r("AdsAdgroupRecordAccessors").creative.body,
      }),
      A = Object.freeze({
        headline: r("AdsAdgroupRecordAccessors").creative.existing_post_title,
        message: r("AdsAdgroupRecordAccessors").creative.body,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .instagram_user_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .page_welcome_message,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.threads_user_id,
      }),
      F = Object.freeze({
        message: g,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .instagram_user_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .page_welcome_message,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.threads_user_id,
      }),
      O = Object.freeze({
        headline: r("AdsAdgroupRecordAccessors").creative.title,
        imageCrops: r("AdsAdgroupRecordAccessors").creative.image_crops,
        imageHash: r("AdsAdgroupRecordAccessors").creative.image_hash,
        imageURL: r("AdsAdgroupRecordAccessors").creative.image_url,
        linkURL: r("AdsAdgroupRecordAccessors").creative.link_url,
        message: r("AdsAdgroupRecordAccessors").creative.body,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_id,
      }),
      B = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        callAdsConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.call_ads_configuration,
        callToActionType: u,
        captionIDs: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .videos,
        displayURL: y,
        headline: _,
        imageCrops: R,
        imageHash: L,
        imageURL: E,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        leadGenConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_configuration,
        leadGenMultiDestination: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_multi_destination,
        linkDescription: m,
        linkURL: y,
        message: g,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.additional_data.page_welcome_message,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
        upcomingEventMetadata: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.upcoming_event_metadata,
        videoID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos,
        videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
      }),
      W = Object.freeze(
        babelHelpers.extends({}, B, {
          interactiveComponentsSpec: N,
          callToAction: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .call_to_actions,
          pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.additional_data.page_welcome_message,
        }),
      ),
      q = Object.freeze(
        babelHelpers.extends({}, B, {
          callToAction: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .call_to_actions,
          childAttachments: r("AdsAdgroupRecordAccessors").creative
            .object_story_spec.template_data.child_attachments,
          multiShareEndCard: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.additional_data.multi_share_end_card,
          productSetID: r("AdsAdgroupRecordAccessors").creative.product_set_id,
        }),
      ),
      U = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        callToActionType: u,
        callToAction: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .call_to_actions,
        displayURL: y,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        linkURL: y,
        message: g,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.additional_data.page_welcome_message,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
      }),
      V = Object.freeze({
        additionalImageIndex: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.additional_image_index,
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        brandedContentSponsorRelationship: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.link_data
          .branded_content_sponsor_relationship,
        brandedContentSharedToSponsorStatus: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.link_data
          .branded_content_shared_to_sponsor_status,
        callAdsConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.call_ads_configuration,
        callToAction: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.call_to_action,
        callToActionType: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.call_to_action.type,
        callToActionValue: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.call_to_action.value,
        childAttachments: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.child_attachments,
        collectionThumbnails: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.collection_thumbnails,
        displayURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.caption,
        eventID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.event_id,
        headline: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.name,
        imageCrops: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.image_crops,
        imageHash: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.image_hash,
        imageURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.picture,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        leadGenConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_configuration,
        leadGenMultiDestination: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_multi_destination,
        linkDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.description,
        linkURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.link,
        message: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.message,
        multiShareEndCard: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.multi_share_end_card,
        multiShareOptimized: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.multi_share_optimized,
        offerID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.offer_id,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.page_welcome_message,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .link_data.phone_data_id,
        productSetID: r("AdsAdgroupRecordAccessors").creative.product_set_id,
        postClickItemDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.post_click_configuration
          .post_click_item_description,
        postClickItemHeadline: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.post_click_configuration
          .post_click_item_headline,
        retailerItemIDs: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.retailer_item_ids,
        interactiveComponentsSpec: r("AdsAdgroupRecordAccessors").creative
          .interactive_components_spec,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
        upcomingEventMetadata: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.upcoming_event_metadata,
      }),
      H = Object.freeze({
        headline: _,
        message: g,
        linkDescription: m,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
      }),
      G = Object.freeze({
        headline: _,
        message: g,
        linkDescription: m,
        imageCrops: R,
        imageHash: L,
        imageURL: E,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
      }),
      z = Object.freeze(babelHelpers.extends({}, V, H)),
      j = Object.freeze(babelHelpers.extends({}, V, G)),
      K = Object.freeze({
        additionalImageIndex: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.additional_image_index,
        callToAction: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.call_to_action,
        callToActionType: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.call_to_action.type,
        callToActionValue: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.call_to_action.value,
        catalogAssetFormatOption: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.format_option,
        childAttachments: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.child_attachments,
        collectionThumbnails: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.collection_thumbnails,
        displayURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.caption,
        headline: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.name,
        imageCrops: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.image_crops,
        imageHash: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.image_hash,
        imageURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.picture,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        linkDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.description,
        linkURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.link,
        message: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.message,
        multiShareEndCard: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.multi_share_end_card,
        multiShareOptimized: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.multi_share_optimized,
        offerID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.offer_id,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .template_data.phone_data_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.page_welcome_message,
        postClickItemDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.post_click_configuration
          .post_click_item_description,
        postClickItemHeadline: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.post_click_configuration
          .post_click_item_headline,
        productSetID: r("AdsAdgroupRecordAccessors").creative.product_set_id,
        retailerItemIDs: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.template_data.retailer_item_ids,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
      }),
      Q = Object.freeze(
        babelHelpers.extends({}, K, {
          captionIDs: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .videos,
          imageCrops: R,
          imageHash: L,
          imageURL: E,
          linkDescription: m,
          phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .phone_data_ids,
          videoID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .videos,
          videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
        }),
      ),
      X = Object.freeze({
        additionalImageIndex: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.additional_image_index,
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        brandedContentSponsorRelationship: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.video_data
          .branded_content_sponsor_relationship,
        callAdsConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.call_ads_configuration,
        brandedContentSharedToSponsorStatus: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.video_data
          .branded_content_shared_to_sponsor_status,
        callToAction: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.call_to_action,
        callToActionType: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.call_to_action.type,
        callToActionValue: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.call_to_action.value,
        captionIDs: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.caption_ids,
        childAttachments: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.link_data.child_attachments,
        collectionThumbnails: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.collection_thumbnails,
        displayURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.call_to_action.value.link_caption,
        eventID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.call_to_action.value.event_id,
        headline: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.title,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        interactiveComponentsSpec: r("AdsAdgroupRecordAccessors").creative
          .interactive_components_spec,
        leadGenConfiguration: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_configuration,
        leadGenMultiDestination: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.lead_gen_multi_destination,
        linkDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.link_description,
        linkURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.call_to_action.value.link,
        message: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.message,
        offerID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.offer_id,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.page_welcome_message,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.phone_data_id,
        postClickItemDescription: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.post_click_configuration
          .post_click_item_description,
        postClickItemHeadline: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.post_click_configuration
          .post_click_item_headline,
        productSetID: r("AdsAdgroupRecordAccessors").creative.product_set_id,
        retailerItemIDs: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.retailer_item_ids,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
        upcomingEventMetadata: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.upcoming_event_metadata,
        videoID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .video_data.video_id,
        videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.image_url,
        videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.video_thumbnail_id,
        videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.image_hash,
        videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.video_data.video_thumbnail_source,
      }),
      Y = Object.freeze({
        headline: _,
        message: g,
        linkDescription: m,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
      }),
      J = Object.freeze(babelHelpers.extends({}, X, Y)),
      Z = Object.freeze({ message: g }),
      ee = Object.freeze(babelHelpers.extends({}, M)),
      te = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        callToActionType: u,
        captionIDs: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .videos,
        displayURL: y,
        headline: _,
        imageCrops: R,
        imageHash: L,
        imageURL: E,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .instagram_user_id,
        interactiveComponentsSpec: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        linkDescription: m,
        linkURL: y,
        message: g,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
        post: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.posts,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.threads_user_id,
        videoID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos,
        videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
      }),
      ne = Object.freeze(
        babelHelpers.extends({}, te, {
          pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
            .page_welcome_message,
        }),
      ),
      re = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        callToActionType: u,
        callToAction: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .call_to_actions,
        captionIDs: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .videos,
        displayURL: y,
        headline: _,
        imageCrops: R,
        imageHash: L,
        imageURL: E,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .instagram_user_id,
        linkDescription: m,
        linkURL: y,
        message: g,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.additional_data.page_welcome_message,
        phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .phone_data_ids,
        post: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.posts,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.threads_user_id,
        videoID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.videos,
        videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
        videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.videos,
      }),
      oe = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        callToAction: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
          .call_to_actions,
        callToActionType: u,
        displayURL: y,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .instagram_user_id,
        linkURL: y,
        message: g,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.additional_data.page_welcome_message,
        post: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec.posts,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.threads_user_id,
      }),
      ae = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        brandedContentSponsorRelationship: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.photo_data
          .branded_content_sponsor_relationship,
        brandedContentSharedToSponsorStatus: r("AdsAdgroupRecordAccessors")
          .creative.object_story_spec.photo_data
          .branded_content_shared_to_sponsor_status,
        imageHash: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .photo_data.image_hash,
        imageURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .photo_data.url,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        message: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .photo_data.caption,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.photo_data.page_welcome_message,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
      }),
      ie = Object.freeze({
        brandedContentSponsorPageID: r("AdsAdgroupRecordAccessors").creative
          .facebook_branded_content.sponsor_page_id,
        brandedContentSponsorRelationship: r("AdsAdgroupRecordAccessors")
          .creative.facebook_branded_content.sponsor_relationship,
        brandedContentSharedToSponsorStatus: r("AdsAdgroupRecordAccessors")
          .creative.facebook_branded_content.shared_to_sponsor_status,
        imageHash: k,
        imageURL: I,
        instagramActorID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_actor_id,
        instagramUserID: r("AdsAdgroupRecordAccessors").creative
          .object_story_spec.instagram_user_id,
        message: T,
        pageID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .page_id,
        pageWelcomeMessage: r("AdsAdgroupRecordAccessors").creative
          .asset_feed_spec.additional_data.page_welcome_message,
        threadsUserID: r("AdsAdgroupRecordAccessors").creative.object_story_spec
          .threads_user_id,
      }),
      le = Object.freeze({ headline: _, message: g }),
      se = Object.freeze(
        babelHelpers.extends({}, ae, {
          callToAction: r("AdsAdgroupRecordAccessors").creative
            .object_story_spec.photo_data.call_to_action,
          callToActionType: r("AdsAdgroupRecordAccessors").creative
            .object_story_spec.photo_data.call_to_action.type,
          callToActionValue: r("AdsAdgroupRecordAccessors").creative
            .object_story_spec.photo_data.call_to_action.value,
          linkURL: r("AdsAdgroupRecordAccessors").creative.object_story_spec
            .photo_data.call_to_action.value.link,
        }),
      ),
      ue = babelHelpers.extends({}, ie, {
        callToAction: D,
        callToActionType: x,
        callToActionValue: $,
        linkURL: P,
      }),
      ce = Object.freeze(babelHelpers.extends({}, se, le)),
      de = babelHelpers.extends({}, ue, le),
      me = babelHelpers.extends({}, ae, {
        callToActionType: r("AdsAdgroupRecordAccessors").creative.call_to_action
          .type,
        callToAction: r("AdsAdgroupRecordAccessors").creative.call_to_action,
        linkURL: r("AdsAdgroupRecordAccessors").creative.call_to_action.value
          .link,
      }),
      pe = Object.freeze(
        babelHelpers.extends({}, V, {
          callToActionType: u,
          captionIDs: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .videos,
          displayURL: y,
          linkURL: y,
          imageCrops: R,
          imageHash: L,
          imageURL: E,
          message: g,
          phoneDataID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .phone_data_ids,
          videoID: r("AdsAdgroupRecordAccessors").creative.asset_feed_spec
            .videos,
          videoThumbnailURL: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailID: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailHash: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
          videoThumbnailSource: r("AdsAdgroupRecordAccessors").creative
            .asset_feed_spec.videos,
        }),
      ),
      _e = Object.freeze({
        ACO_TEMPLATE_MAPPING: Object.freeze(babelHelpers.extends({}, M, Q)),
        ASSET_FEED_MAPPING: Object.freeze(babelHelpers.extends({}, M, B)),
        ASSET_FEED_MAPPING_PAC_CAROUSEL: Object.freeze(
          babelHelpers.extends({}, M, U),
        ),
        ASSET_FEED_MAPPING_WITH_CTA: Object.freeze(
          babelHelpers.extends({}, M, W),
        ),
        ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS: Object.freeze(
          babelHelpers.extends({}, M, q),
        ),
        DOF_CAROUSEL_ENABLED_FIELDS: Object.freeze(
          babelHelpers.extends({}, M, Z),
        ),
        DOMAIN_MAPPING: Object.freeze(babelHelpers.extends({}, M, w)),
        INVALID_MAPPING: Object.freeze(babelHelpers.extends({}, M, ee)),
        LINK_DOF_MAPPING: Object.freeze(babelHelpers.extends({}, M, z)),
        LINK_DOF_WITH_IMAGE_MAPPING: Object.freeze(
          babelHelpers.extends({}, M, j),
        ),
        LINK_MAPPING: Object.freeze(babelHelpers.extends({}, M, V)),
        LINK_MAPPING_DOF_ENABLED_FIELDS: Object.freeze(
          babelHelpers.extends({}, M, H),
        ),
        LINK_MAPPING_DOF_WITH_IMAGE_ENABLED_FIELDS: Object.freeze(
          babelHelpers.extends({}, M, G),
        ),
        PAGE_MAPPING: Object.freeze(babelHelpers.extends({}, M, O)),
        PHOTO_MAPPING: Object.freeze(babelHelpers.extends({}, M, ae)),
        UCA_PHOTO_MAPPING: Object.freeze(babelHelpers.extends({}, M, ie)),
        STATUS_MAPPING: Object.freeze(babelHelpers.extends({}, M, A)),
        EPA_DOF_MAPPING: Object.freeze(babelHelpers.extends({}, M, F)),
        TEMPLATE_MAPPING: Object.freeze(babelHelpers.extends({}, M, K)),
        VIDEO_DOF_MAPPING: Object.freeze(babelHelpers.extends({}, M, J)),
        VIDEO_MAPPING: Object.freeze(babelHelpers.extends({}, M, X)),
        VIDEO_MAPPING_DOF_ENABLED_FIELDS: Object.freeze(
          babelHelpers.extends({}, M, Y),
        ),
        ASSET_FEED_MAPPING_EXISTING_POST: Object.freeze(
          babelHelpers.extends({}, M, te),
        ),
        ASSET_FEED_MAPPING_EXISTING_POST_ON_AD: Object.freeze(
          babelHelpers.extends({}, M, ne),
        ),
        ASSET_FEED_MAPPING_PAC_CAROUSEL_EXISTING_POST: Object.freeze(
          babelHelpers.extends({}, M, oe),
        ),
        ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST: Object.freeze(
          babelHelpers.extends({}, M, re),
        ),
        ASSET_FEED_MAPPING_AUTOMATIC_FLOW: Object.freeze(
          babelHelpers.extends({}, M, pe),
        ),
        PHOTO_DOF_MAPPING: Object.freeze(babelHelpers.extends({}, M, ce)),
        UCA_PHOTO_DOF_MAPPING: Object.freeze(babelHelpers.extends({}, M, de)),
        PHOTO_MAPPING_DOF_ENABLED_FIELDS: Object.freeze(
          babelHelpers.extends({}, M, le),
        ),
        PHOTO_MAPPING_POST_ENGAGEMENT: Object.freeze(
          babelHelpers.extends({}, M, se),
        ),
        UCA_PHOTO_MAPPING_POST_ENGAGEMENT: Object.freeze(
          babelHelpers.extends({}, M, ue),
        ),
        MCA_FROM_MAPPING: Object.freeze(babelHelpers.extends({}, M, me)),
      }),
      fe = _e;
    ((l.DEFAULT_ACCESSOR = N), (l.AdsAdgroupSemanticFieldMappings = fe));
  },
  98,
);
