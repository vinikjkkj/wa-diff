__d(
  "AdsAPIChildAttachmentPaths",
  [
    "ApiAdCreativeTemplateVideoSpecFields",
    "ApiCallToActionFields",
    "ApiObjectStorySpecLinkChildFields",
    "ApiObjectStorySpecPlaceDataFields",
    "CallToActionValueFields",
    "generatePaths",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        { pathKeys: [], expandsTo: r("ApiObjectStorySpecLinkChildFields") },
        { pathKeys: ["CALL_TO_ACTION"], expandsTo: r("ApiCallToActionFields") },
        {
          pathKeys: ["CALL_TO_ACTION", "VALUE"],
          expandsTo: r("CallToActionValueFields"),
        },
        {
          pathKeys: ["PLACE_DATA"],
          expandsTo: r("ApiObjectStorySpecPlaceDataFields"),
        },
        {
          pathKeys: ["TEMPLATE_VIDEO_SPEC"],
          expandsTo: r("ApiAdCreativeTemplateVideoSpecFields"),
        },
      ],
      s = r("generatePaths")(e),
      u = s;
    l.default = u;
  },
  98,
);
