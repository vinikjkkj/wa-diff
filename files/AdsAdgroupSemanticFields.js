__d(
  "AdsAdgroupSemanticFields",
  ["AdsAdgroupSemanticFieldMappings"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return {
        isSupported: function (n, r) {
          return (
            n.getSemanticFieldMapping(r)[e] !==
            o("AdsAdgroupSemanticFieldMappings").DEFAULT_ACCESSOR
          );
        },
        get: function (n, r) {
          return n.getSemanticFieldMapping(r)[e].get(r);
        },
        delete: function (n, r) {
          return n.getSemanticFieldMapping(r)[e].delete(r);
        },
        set: function (n, r, o) {
          return n.getSemanticFieldMapping(r)[e].set(o, r);
        },
      };
    }
    var s = Object.freeze({
        additionalImageIndex: e("additionalImageIndex"),
        brandedContentSponsorPageID: e("brandedContentSponsorPageID"),
        brandedContentSponsorRelationship: e(
          "brandedContentSponsorRelationship",
        ),
        brandedContentSharedToSponsorStatus: e(
          "brandedContentSharedToSponsorStatus",
        ),
        callToAction: e("callToAction"),
        callToActionType: e("callToActionType"),
        callToActionValue: e("callToActionValue"),
        captionIDs: e("captionIDs"),
        catalogAssetFormatOption: e("catalogAssetFormatOption"),
        childAttachments: e("childAttachments"),
        collectionThumbnails: e("collectionThumbnails"),
        displayURL: e("displayURL"),
        eventID: e("eventID"),
        headline: e("headline"),
        imageCrops: e("imageCrops"),
        imageHash: e("imageHash"),
        imageURL: e("imageURL"),
        instagramActorID: e("instagramActorID"),
        instagramUserID: e("instagramUserID"),
        interactiveComponentsSpec: e("interactiveComponentsSpec"),
        linkDescription: e("linkDescription"),
        linkURL: e("linkURL"),
        message: e("message"),
        multiShareEndCard: e("multiShareEndCard"),
        multiShareOptimized: e("multiShareOptimized"),
        offerID: e("offerID"),
        pageID: e("pageID"),
        pageWelcomeMessage: e("pageWelcomeMessage"),
        phoneDataID: e("phoneDataID"),
        post: e("post"),
        postClickItemDescription: e("postClickItemDescription"),
        postClickItemHeadline: e("postClickItemHeadline"),
        productSetID: e("productSetID"),
        retailerItemIDs: e("retailerItemIDs"),
        threadsUserID: e("threadsUserID"),
        videoID: e("videoID"),
        videoThumbnailHash: e("videoThumbnailHash"),
        videoThumbnailID: e("videoThumbnailID"),
        videoThumbnailURL: e("videoThumbnailURL"),
        videoThumbnailSource: e("videoThumbnailSource"),
      }),
      u = s;
    l.default = u;
  },
  98,
);
