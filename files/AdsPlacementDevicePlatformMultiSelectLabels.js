__d(
  "AdsPlacementDevicePlatformMultiSelectLabels",
  ["fbt", "AdsAPIDevicePlatform", "AdsPlacementCopy"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = new Map();
    (e.set(r("AdsAPIDevicePlatform").MOBILE, s._(/*BTDS*/ "Mobile")),
      e.set(r("AdsAPIDevicePlatform").DESKTOP, s._(/*BTDS*/ "Desktop")),
      e.set(r("AdsAPIDevicePlatform").CONNECTED_TV, s._(/*BTDS*/ "TV")),
      e.set(
        null,
        r("AdsPlacementCopy").DEFAULT_PLACEMENT_DEVICE_PLATFORM_LABEL,
      ));
    var u = e;
    l.default = u;
  },
  226,
);
