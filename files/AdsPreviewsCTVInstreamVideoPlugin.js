__d(
  "AdsPreviewsCTVInstreamVideoPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/ctv_instream_video",
        apiFormat: "CTV_INSTREAM_VIDEO",
        loadingPlaceholderSize: { width: 480, height: 270 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("443196"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
