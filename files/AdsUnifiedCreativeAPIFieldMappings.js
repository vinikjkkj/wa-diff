__d(
  "AdsUnifiedCreativeAPIFieldMappings",
  [
    "AdsAPIAdgroupPaths",
    "AdsUnifiedCreativeAPIFieldMappingRecord",
    "PathArrayIndex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = new (s = r("AdsUnifiedCreativeAPIFieldMappingRecord"))({
        callToActionType: (u = r("AdsAPIAdgroupPaths")).CREATIVE
          .CALL_TO_ACTION_TYPE,
        headline: u.CREATIVE.TITLE,
        imageCrops: u.CREATIVE.IMAGE_CROPS,
        imageHash: u.CREATIVE.IMAGE_HASH,
        imageURL: u.CREATIVE.IMAGE_URL,
        linkURL: u.CREATIVE.OBJECT_URL,
        message: u.CREATIVE.BODY,
      }),
      d = new s({ message: u.CREATIVE.ASSET_FEED_SPEC.BODIES }),
      m = {
        additionalImageIndex:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.ADDITIONAL_IMAGE_INDEX,
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        brandedContentSponsorRelationship:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .BRANDED_CONTENT_SPONSOR_RELATIONSHIP,
        brandedContentSharedToSponsorStatus:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA
            .BRANDED_CONTENT_SHARED_TO_SPONSOR_STATUS,
        callToAction:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CALL_TO_ACTION.path,
        callToActionType:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CALL_TO_ACTION.TYPE,
        callToActionValue:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CALL_TO_ACTION.VALUE.path,
        childAttachments:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CHILD_ATTACHMENTS,
        collectionThumbnails:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.COLLECTION_THUMBNAILS,
        displayURL: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CAPTION,
        eventID: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.EVENT_ID,
        headline: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.NAME,
        imageCrops: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.IMAGE_CROPS,
        imageHash: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.IMAGE_HASH,
        imageURL: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.PICTURE,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.DESCRIPTION,
        linkURL: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.LINK,
        message: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.MESSAGE,
        multiShareEndCard:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.MULTI_SHARE_END_CARD,
        multiShareOptimized:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.MULTI_SHARE_OPTIMIZED,
        offerID: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.OFFER_ID,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.PHONE_DATA_ID,
        productSetID: u.CREATIVE.PRODUCT_SET_ID,
        postClickItemDescription:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_DESCRIPTION,
        postClickItemHeadline:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_HEADLINE,
        retailerItemIDs:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.RETAILER_ITEM_IDS,
        interactiveComponentsSpec: u.CREATIVE.INTERACTIVE_COMPONENTS_SPEC.path,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
      },
      p = {
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
      },
      _ = {
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
      },
      f = babelHelpers.construct(s, m),
      g = babelHelpers.construct(s, p),
      h = babelHelpers.construct(s, _),
      y = new s(babelHelpers.extends({}, m, p)),
      C = new s(babelHelpers.extends({}, m, _)),
      b = new s({
        headline: u.CREATIVE.TITLE,
        imageCrops: u.CREATIVE.IMAGE_CROPS,
        imageHash: u.CREATIVE.IMAGE_HASH,
        imageURL: u.CREATIVE.IMAGE_URL,
        linkURL: u.CREATIVE.LINK_URL,
        message: u.CREATIVE.BODY,
        pageID: u.CREATIVE.OBJECT_ID,
      }),
      v = {
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        brandedContentSponsorRelationship:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
            .BRANDED_CONTENT_SPONSOR_RELATIONSHIP,
        brandedContentSharedToSponsorStatus:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA
            .BRANDED_CONTENT_SHARED_TO_SPONSOR_STATUS,
        imageHash: u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.IMAGE_HASH,
        imageURL: u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.URL,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        message: u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.CAPTION,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.PAGE_WELCOME_MESSAGE,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
      },
      S = {
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        brandedContentSponsorRelationship:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_RELATIONSHIP,
        brandedContentSharedToSponsorStatus:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SHARED_TO_SPONSOR_STATUS,
        imageHash: [].concat(u.CREATIVE.ASSET_FEED_SPEC.IMAGES, [
          (e = o("PathArrayIndex")).pathArrayIndex(0),
          "hash",
        ]),
        imageURL: [].concat(u.CREATIVE.ASSET_FEED_SPEC.IMAGES, [
          e.pathArrayIndex(0),
          "url",
        ]),
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        message: [].concat(u.CREATIVE.ASSET_FEED_SPEC.BODIES, [
          e.pathArrayIndex(0),
          "text",
        ]),
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
      },
      R = babelHelpers.extends({}, v, {
        callToAction:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.CALL_TO_ACTION.path,
        callToActionType:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.CALL_TO_ACTION.TYPE,
        callToActionValue:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.CALL_TO_ACTION.VALUE.path,
        linkURL:
          u.CREATIVE.OBJECT_STORY_SPEC.PHOTO_DATA.CALL_TO_ACTION.VALUE.LINK,
      }),
      L = babelHelpers.extends({}, S, {
        callToAction: [].concat(u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS, [
          e.pathArrayIndex(0),
        ]),
        callToActionType: [].concat(
          u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [e.pathArrayIndex(0), "type"],
        ),
        callToActionValue: [].concat(
          u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
          [e.pathArrayIndex(0), "value"],
        ),
        linkURL: [].concat(u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS, [
          e.pathArrayIndex(0),
          "value",
          "link",
        ]),
      }),
      E = {
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
      },
      k = new s(v),
      I = new s(S),
      T = new s(R),
      D = new s(L),
      x = new s(babelHelpers.extends({}, R, E)),
      $ = new s(babelHelpers.extends({}, L, E)),
      P = new s(E),
      N = {
        additionalImageIndex:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.ADDITIONAL_IMAGE_INDEX,
        callToAction:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CALL_TO_ACTION.path,
        callToActionType:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CALL_TO_ACTION.TYPE,
        callToActionValue:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CALL_TO_ACTION.VALUE.path,
        catalogAssetFormatOption:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.FORMAT_OPTION,
        childAttachments:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CHILD_ATTACHMENTS,
        collectionThumbnails:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.COLLECTION_THUMBNAILS,
        displayURL: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CAPTION,
        forceSingleLink:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.FORCE_SINGLE_LINK,
        headline: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.NAME,
        imageCrops: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.IMAGE_CROPS,
        imageHash: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.IMAGE_HASH,
        imageURL: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.PICTURE,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.DESCRIPTION,
        linkURL: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.LINK,
        message: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.MESSAGE,
        multiShareEndCard:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.MULTI_SHARE_END_CARD,
        multiShareOptimized:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.MULTI_SHARE_OPTIMIZED,
        offerID: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.OFFER_ID,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        postClickItemDescription:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_DESCRIPTION,
        postClickItemHeadline:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_HEADLINE,
        pageWelcomeMessage:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.PHONE_DATA_ID,
        productSetID: u.CREATIVE.PRODUCT_SET_ID,
        productDiscountID:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.PRODUCT_DISCOUNT_ID,
        retailerItemIDs:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.RETAILER_ITEM_IDS,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
      },
      M = new s(N),
      w = {
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      },
      A = {
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      },
      F = new s(babelHelpers.extends({}, N, w)),
      O = {
        additionalImageIndex:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.ADDITIONAL_IMAGE_INDEX,
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        brandedContentSponsorRelationship:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
            .BRANDED_CONTENT_SPONSOR_RELATIONSHIP,
        brandedContentSharedToSponsorStatus:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA
            .BRANDED_CONTENT_SHARED_TO_SPONSOR_STATUS,
        callToAction:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.path,
        callToActionType:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.TYPE,
        callToActionValue:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.VALUE.path,
        captionIDs: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CAPTION_IDS,
        childAttachments:
          u.CREATIVE.OBJECT_STORY_SPEC.LINK_DATA.CHILD_ATTACHMENTS,
        collectionThumbnails:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.COLLECTION_THUMBNAILS,
        displayURL:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.VALUE.CAPTION,
        eventID:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.VALUE.EVENT_ID,
        headline: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.TITLE,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        interactiveComponentsSpec: u.CREATIVE.INTERACTIVE_COMPONENTS_SPEC.path,
        linkDescription:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.LINK_DESCRIPTION,
        linkURL:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.CALL_TO_ACTION.VALUE.LINK,
        message: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.MESSAGE,
        offerID: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.OFFER_ID,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.PHONE_DATA_ID,
        postClickItemDescription:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_DESCRIPTION,
        postClickItemHeadline:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.POST_CLICK_CONFIGURATION
            .POST_CLICK_ITEM_HEADLINE,
        productSetID: u.CREATIVE.PRODUCT_SET_ID,
        retailerItemIDs:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.RETAILER_ITEM_IDS,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
        videoID: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.VIDEO_ID,
        videoThumbnailID:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.VIDEO_THUMBNAIL_ID,
        videoThumbnailURL: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.IMAGE_URL,
        videoThumbnailHash: u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.IMAGE_HASH,
        videoThumbnailSource:
          u.CREATIVE.OBJECT_STORY_SPEC.VIDEO_DATA.VIDEO_THUMBNAIL_SOURCE,
      },
      B = {
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
      },
      W = new s(O),
      q = new s(B),
      U = new s(babelHelpers.extends({}, O, B)),
      V = new s({
        headline: u.CREATIVE.EXISTING_POST_TITLE,
        message: u.CREATIVE.BODY,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        pageWelcomeMessage: u.CREATIVE.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
      }),
      H = new s({
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        pageWelcomeMessage: u.CREATIVE.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
      }),
      G = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      z = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        callToAction: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      j = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        callToAction: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        childAttachments:
          u.CREATIVE.OBJECT_STORY_SPEC.TEMPLATE_DATA.CHILD_ATTACHMENTS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        multiShareEndCard:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.MULTI_SHARE_END_CARD,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        productSetID: u.CREATIVE.PRODUCT_SET_ID,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      K = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToAction: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        instagramActorID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.OBJECT_STORY_SPEC.INSTAGRAM_USER_ID,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        threadsUserID: u.CREATIVE.OBJECT_STORY_SPEC.THREADS_USER_ID,
      }),
      Q = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        interactiveComponentsSpec: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        post: u.CREATIVE.ASSET_FEED_SPEC.POSTS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      X = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        interactiveComponentsSpec: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage: u.CREATIVE.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        post: u.CREATIVE.ASSET_FEED_SPEC.POSTS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      Y = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        callToAction: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        captionIDs: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        headline: u.CREATIVE.ASSET_FEED_SPEC.TITLES,
        imageCrops: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageHash: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        imageURL: u.CREATIVE.ASSET_FEED_SPEC.IMAGES,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        linkDescription: u.CREATIVE.ASSET_FEED_SPEC.DESCRIPTIONS,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        phoneDataID: u.CREATIVE.ASSET_FEED_SPEC.PHONE_DATA_IDS,
        post: u.CREATIVE.ASSET_FEED_SPEC.POSTS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
        videoID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailID: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailURL: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailHash: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
        videoThumbnailSource: u.CREATIVE.ASSET_FEED_SPEC.VIDEOS,
      }),
      J = new s({
        brandedContentSponsorPageID:
          u.CREATIVE.FACEBOOK_BRANDED_CONTENT.SPONSOR_PAGE_ID,
        callToAction: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTIONS,
        callToActionType: u.CREATIVE.ASSET_FEED_SPEC.CALL_TO_ACTION_TYPES,
        displayURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        instagramActorID: u.CREATIVE.INSTAGRAM_ACTOR_ID,
        instagramUserID: u.CREATIVE.INSTAGRAM_USER_ID,
        linkURL: u.CREATIVE.ASSET_FEED_SPEC.LINK_URLS,
        message: u.CREATIVE.ASSET_FEED_SPEC.BODIES,
        pageID: u.CREATIVE.OBJECT_STORY_SPEC.PAGE_ID,
        pageWelcomeMessage:
          u.CREATIVE.ASSET_FEED_SPEC.ADDITIONAL_DATA.PAGE_WELCOME_MESSAGE,
        post: u.CREATIVE.ASSET_FEED_SPEC.POSTS,
        threadsUserID: u.CREATIVE.THREADS_USER_ID,
      }),
      Z = new s({}),
      ee = new s(babelHelpers.extends({}, m, A)),
      te = new s(
        babelHelpers.extends({}, v, {
          callToActionType: u.CREATIVE.CALL_TO_ACTION.TYPE,
          callToAction: u.CREATIVE.CALL_TO_ACTION.path,
          linkURL: u.CREATIVE.CALL_TO_ACTION.VALUE.LINK,
        }),
      ),
      ne = Object.freeze({
        DOMAIN_MAPPING: c,
        DOF_CAROUSEL_ENABLED_FIELDS: d,
        LINK_MAPPING: f,
        LINK_MAPPING_DOF_ENABLED_FIELDS: g,
        LINK_MAPPING_DOF_WITH_IMAGE_ENABLED_FIELDS: h,
        LINK_DOF_MAPPING: y,
        LINK_DOF_WITH_IMAGE_MAPPING: C,
        PAGE_MAPPING: b,
        PHOTO_MAPPING: k,
        UCA_PHOTO_MAPPING: I,
        PHOTO_MAPPING_POST_ENGAGEMENT: T,
        UCA_PHOTO_MAPPING_POST_ENGAGEMENT: D,
        PHOTO_DOF_MAPPING: x,
        UCA_PHOTO_DOF_MAPPING: $,
        PHOTO_MAPPING_DOF_ENABLED_FIELDS: P,
        TEMPLATE_MAPPING: M,
        ACO_TEMPLATE_MAPPING: F,
        VIDEO_MAPPING: W,
        VIDEO_MAPPING_DOF_ENABLED_FIELDS: q,
        VIDEO_DOF_MAPPING: U,
        STATUS_MAPPING: V,
        EPA_DOF_MAPPING: H,
        ASSET_FEED_MAPPING: G,
        ASSET_FEED_MAPPING_WITH_CTA: z,
        ASSET_FEED_MAPPING_WITH_MMDA_CHILD_ATTACHMENTS: j,
        ASSET_FEED_MAPPING_PAC_CAROUSEL: K,
        ASSET_FEED_MAPPING_EXISTING_POST: Q,
        ASSET_FEED_MAPPING_EXISTING_POST_ON_AD: X,
        ASSET_FEED_MAPPING_WITH_CTA_EXISTING_POST: Y,
        ASSET_FEED_MAPPING_PAC_CAROUSEL_EXISTING_POST: J,
        INVALID_MAPPING: Z,
        ASSET_FEED_MAPPING_AUTOMATIC_FLOW: ee,
        MCA_FROM_MAPPING: te,
      }),
      re = ne;
    l.default = re;
  },
  98,
);
