__d(
  "AdsPreviewsMessengerMobileStoryMediaPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/messenger_mobile_story_media",
        apiFormat: "MESSENGER_MOBILE_STORY_MEDIA",
        customizationGroup: "MESSENGER_STORY",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
