__d(
  "AdsAdgroupChildAttachmentsFieldMappings",
  [
    "AdsAPICallToActionPaths",
    "AdsAdgroupChildAttachmentsFieldMappingRecord",
    "AdsAdgroupChildAttachmentsFields",
    "filterObject",
    "whitelistObjectKeys",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u = {
        androidUrl: ["android_url"],
        callToActionType: ["call_to_action"].concat(
          (e = r("AdsAPICallToActionPaths")).TYPE,
        ),
        callToActionValue: ["call_to_action"].concat(e.VALUE.path),
        callToActionLink: ["call_to_action"].concat(e.VALUE.LINK),
        callToActionCaption: ["call_to_action"].concat(e.VALUE.CAPTION),
        callToActionAppLink: ["call_to_action"].concat(e.VALUE.APP_LINK),
        caption: ["caption"],
        captionIDs: ["caption_ids"],
        description: ["description"],
        headline: ["name"],
        imageCrops: ["image_crops"],
        imageHash: ["image_hash"],
        imageURL: ["picture"],
        iosUrl: ["ios_url"],
        link: ["caption"],
        linkURL: ["link"],
        marketingMessageButtons: ["marketing_message_buttons"],
        placeDataAddress: ["place_data", "address_string"],
        placeDataLabel: ["place_data", "label"],
        placeDataLatitude: ["place_data", "latitude"],
        placeDataLocationSourceID: ["place_data", "location_source_id"],
        placeDataLongitude: ["place_data", "longitude"],
        placeDataType: ["place_data", "type"],
        staticCard: ["static_card"],
        templateVideoSpecCategorizationCriteria: [
          "template_video_spec",
          "categorization_criteria",
        ],
        templateVideoSpecCustomization: [
          "template_video_spec",
          "customization",
        ],
        templateVideoSpecTemplateID: ["template_video_spec", "template_id"],
        videoID: ["video_id"],
        videoThumbnailID: ["video_thumbnail_id"],
        videoThumbnailSource: ["video_thumbnail_source"],
        marketingMessageSpec: ["marketing_message_spec"],
      },
      c = [
        (s = r("AdsAdgroupChildAttachmentsFields")).callToActionValue,
        s.callToActionLink,
        s.callToActionCaption,
      ],
      d = [
        s.placeDataAddress,
        s.placeDataLabel,
        s.placeDataLatitude,
        s.placeDataLongitude,
        s.placeDataType,
      ];
    function m(e) {
      return new (r("AdsAdgroupChildAttachmentsFieldMappingRecord"))(
        r("filterObject")(u, function (t, n) {
          return e.every(function (e) {
            return e.name !== n;
          });
        }),
      );
    }
    function p(e) {
      return new (r("AdsAdgroupChildAttachmentsFieldMappingRecord"))(
        r("whitelistObjectKeys")(
          u,
          e.map(function (e) {
            return e.name;
          }),
        ),
      );
    }
    var _ = m([s.staticCard]),
      f = m([].concat(c)),
      g = p([s.callToActionType, s.description, s.headline, s.linkURL]),
      h = p([
        s.caption,
        s.captionIDs,
        s.description,
        s.headline,
        s.imageCrops,
        s.imageHash,
        s.imageURL,
        s.linkURL,
        s.videoID,
        s.videoThumbnailID,
        s.videoThumbnailSource,
        s.marketingMessageSpec,
      ]),
      y = p([
        s.headline,
        s.imageCrops,
        s.imageHash,
        s.imageURL,
        s.videoThumbnailID,
        s.videoThumbnailSource,
        s.marketingMessageSpec,
      ]),
      C = p([s.placeDataLocationSourceID, s.placeDataType]),
      b = new (r("AdsAdgroupChildAttachmentsFieldMappingRecord"))();
    ((l.STATIC_CAROUSEL_PLACE_CARD_FIELDS = d),
      (l.STATIC_CAROUSEL_MAPPINGS = _),
      (l.DYNAMIC_CAROUSEL_STATIC_CARD_MAPPINGS = f),
      (l.DYNAMIC_CAROUSEL_DYNAMIC_CARD_MAPPINGS = g),
      (l.STORE_VISITS_STATIC_CARD_MAPPINGS = h),
      (l.STORE_VISITS_WITH_OFFER_STATIC_CARD_MAPPINGS = y),
      (l.DYNAMIC_AND_REALTIME_CAROUSEL_PLACE_CARD_MAPPINGS = C),
      (l.EMPTY_CAROUSEL_MAPPINGS = b));
  },
  98,
);
