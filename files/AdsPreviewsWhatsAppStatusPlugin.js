__d(
  "AdsPreviewsWhatsAppStatusPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/whatsapp_status",
        apiFormat: "WHATSAPP_STATUS_MEDIA",
        customizationGroup: "WHATSAPP_STATUS",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        icon: u("279341"),
        isPreviewMediaSupported: function (t) {
          var e = t.assetSource;
          return e !== "gen-ai";
        },
      }),
      c = e;
    l.default = c;
  },
  226,
);
