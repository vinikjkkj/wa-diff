__d(
  "AdsPreviewsOculusVRAppsPlugin",
  ["fbt", "ix", "AdsPreviewsPluginCommon"],
  function (t, n, r, o, a, i, l, s, u) {
    "use strict";
    var e = babelHelpers.extends({}, r("AdsPreviewsPluginCommon"), {
        type: "previews",
        key: "previews/oculus_vr_apps",
        apiFormat: "OCULUS_VR_APPS",
        loadingPlaceholderSize: { width: 320, height: 387 },
        name: s._(/*BTDS*/ ""),
        positionName: s._(/*BTDS*/ ""),
        positionDetails: s._(/*BTDS*/ ""),
        icon: u("146971"),
      }),
      c = e;
    l.default = c;
  },
  226,
);
