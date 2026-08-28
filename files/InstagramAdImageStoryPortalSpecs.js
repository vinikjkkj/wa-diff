__d(
  "InstagramAdImageStoryPortalSpecs",
  [
    "AdCreativeType",
    "AdImageSpecCropKeys",
    "AdImageSpecsUtils",
    "AdsInstagramMediaSpecs",
    "AdsPageTypes",
    "getTranslatableRatio",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = {
        INSTAGRAM_STORY: {
          placement: r("AdsPageTypes").INSTAGRAM_STORY,
          platform: "instagram",
          position: "story",
          width: 1080,
          height: 1920,
          minWarningWidth: (u = o("AdImageSpecsUtils")).getMinSizeForIGAdImages(
            (e = r("AdsInstagramMediaSpecs")).MIN_MEDIA_WIDTH,
          ),
          minWarningHeight: u.getMinSizeForIGAdImages(
            e.MIN_STREAM_MEDIA_HEIGHT,
          ),
          aspectRatio: 0,
          displayRatio: r("getTranslatableRatio")(9, 16),
          maxWarningAspectRatio: e.MAX_STREAM_ASPECT_RATIO,
          aspectRatioTolerance: e.ASPECT_RATIO_TOLERANCE,
          cropKey: r("AdImageSpecCropKeys").NO_CROP,
          supportedTypes: [
            (s = o("AdCreativeType")).AD_CREATIVE_TYPE.AD_VIDEO,
            s.AD_CREATIVE_TYPE.FEED_URL,
            s.AD_CREATIVE_TYPE.NEKO_LPP,
            s.AD_CREATIVE_TYPE.PAGE_POSTS_V2,
          ],
        },
        INSTAGRAM_STORY_SQUARE: {
          placement: r("AdsPageTypes").INSTAGRAM_STORY,
          platform: "instagram",
          position: "story",
          width: 1080,
          height: 1080,
          minWarningWidth: u.getMinSizeForIGAdImages(e.MIN_MEDIA_WIDTH),
          minWarningHeight: u.getMinSizeForIGAdImages(e.MIN_MEDIA_WIDTH),
          aspectRatio: 1,
          displayRatio: r("getTranslatableRatio")(1, 1),
          cropKey: r("AdImageSpecCropKeys")["100x100"],
          supportedTypes: [
            s.AD_CREATIVE_TYPE.AD_VIDEO,
            s.AD_CREATIVE_TYPE.FEED_URL,
            s.AD_CREATIVE_TYPE.NEKO_LPP,
            s.AD_CREATIVE_TYPE.PAGE_POSTS_V2,
          ],
        },
        INSTAGRAM_STORY_LANDSCAPE: {
          placement: r("AdsPageTypes").INSTAGRAM_STORY,
          platform: "instagram",
          position: "story",
          width: 1200,
          height: 628,
          minWarningWidth: u.getMinSizeForIGAdImages(e.MIN_MEDIA_WIDTH),
          minWarningHeight: u.getMinSizeForIGAdImages(
            e.MIN_STREAM_MEDIA_HEIGHT,
          ),
          aspectRatio: e.MAX_STREAM_ASPECT_RATIO,
          displayRatio: r("getTranslatableRatio")(1.91, 1),
          cropKey: r("AdImageSpecCropKeys")["191x100"],
          supportedTypes: [
            s.AD_CREATIVE_TYPE.AD_VIDEO,
            s.AD_CREATIVE_TYPE.FEED_URL,
            s.AD_CREATIVE_TYPE.NEKO_LPP,
            s.AD_CREATIVE_TYPE.PAGE_POSTS_V2,
          ],
        },
      },
      d = c;
    l.default = d;
  },
  98,
);
