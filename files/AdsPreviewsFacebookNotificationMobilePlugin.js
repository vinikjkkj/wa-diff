__d(
  "AdsPreviewsFacebookNotificationMobilePlugin",
  ["fbt", "ix"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = {
        type: "previews",
        key: "previews/facebook_notification_mobile",
        apiFormat: "FACEBOOK_NOTIFICATION_MOBILE",
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: null,
        loadingPlaceholderSize: { width: 320, height: 567 },
        icon: u("22167"),
        customizationGroup: "FACEBOOK_NOTIFICATION",
        isClientSideSupported: function (t, n, r, o) {
          return !1;
        },
        renderClientSidePreview: function (t) {
          return null;
        },
      },
      c = e;
    l.default = c;
  },
  226,
);
