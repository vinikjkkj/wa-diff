__d(
  "AdsACOConstants",
  ["AdsPromotedObjectTypes", "immutable"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Object.freeze({
        ACO_DEFAULT_FORMATS_SELECTED_TIP_ID: "aco_default_formats_selected_tip",
        ACO_DYNAMIC_TEXT_TIP_ID: "aco_dynamic_text_tip",
        ACO_DYNAMIC_VIDEO_TIP_ID: "aco_dynamic_video_tip",
        ACO_PREVIEW_VIEW_MORE_VARIATIONS_TIP_ID:
          "aco_preview_view_more_variations_tip",
      }),
      u = r("immutable").Set([
        (e = r("AdsPromotedObjectTypes")).PIXEL,
        e.PRODUCT_SET,
        e.WEBSITE,
        e.WEB_AND_SHOP,
        e.MOBILE_APP,
        "PRODUCT_SET_AND_IN_STORE",
        "PRODUCT_SET_AND_WEBSITE",
        "PRODUCT_SET_AND_APP",
        "PRODUCT_SET_AND_WEBSITE_AND_PHONE_CALL",
        "PRODUCT_SET_AND_OMNICHANNEL",
        e.WEBSITE_AND_IN_STORE,
        "PRODUCT_SET_WEBSITE_APP_AND_INSTORE",
      ]);
    ((l.AdsACOOnboardingTipStep = s), (l.ACO_ELIGIBLE_PROMOTED_OBJECT = u));
  },
  98,
);
