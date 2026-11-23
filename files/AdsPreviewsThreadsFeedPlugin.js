__d(
  "AdsPreviewsThreadsFeedPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/threads_stream",
        apiFormat: "THREADS_STREAM",
        customizationGroup: "THREADS_STREAM",
        loadingPlaceholderSize: { width: 320, height: 528 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279340"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
