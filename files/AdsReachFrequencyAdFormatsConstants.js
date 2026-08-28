__d(
  "AdsReachFrequencyAdFormatsConstants",
  ["$InternalEnum", "AdsReachFrequencyCampaignEditorTitles"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored([
        "DURATION_5_TO_15",
        "DURATION_16_TO_120",
        "DURATION_OTHER",
      ]),
      u = n("$InternalEnum").Mirrored([
        "ASPECT_RATIO_WIDESCREEN",
        "ASPECT_RATIO_SQUARE",
        "ASPECT_RATIO_VERTICAL",
        "ASPECT_RATIO_OTHER",
      ]),
      c = "other",
      d = { canvas: !1 },
      m = {
        aspectRatioKey: u.ASPECT_RATIO_WIDESCREEN,
        canvas: !1,
        durationKey: s.DURATION_5_TO_15,
      },
      p = { categories: [c], formatType: "canvas" },
      _ = { categories: [c], details: [m], formatType: "video" },
      f = { categories: [c], details: [d], formatType: "image" },
      g = { categories: [c], details: [d], formatType: "stories_carousel" },
      h = { categories: [c], details: [d], formatType: "spherical_video" },
      y =
        ((e = {}),
        (e.canvas = 256),
        (e.image = 0),
        (e.spherical_image = 1024),
        (e.spherical_video = 512),
        (e.stories_carousel = 2048),
        (e.video = 128),
        e);
    ((l.DurationKeys = s),
      (l.AspectRatioKeys = u),
      (l.DEFAULT_CATEGORIES = c),
      (l.DEFAULT_NON_VIDEO_DETAILS = d),
      (l.DEFAULT_VIDEO_DETAILS = m),
      (l.CANVAS_AD_FORMAT = p),
      (l.DEFAULT_VIDEO_AD_FORMAT = _),
      (l.DEFAULT_IMAGE_AD_FORMAT = f),
      (l.STORIES_CAROUSEL_AD_FORMAT = g),
      (l.SPHERICAL_VIDEO_AD_FORMAT = h),
      (l.AD_FORMATS_TO_RESTRICTED_FORMATS_MAP = y),
      (l.AD_FORMATS_LABEL = o(
        "AdsReachFrequencyCampaignEditorTitles",
      ).AD_FORMATS));
  },
  98,
);
