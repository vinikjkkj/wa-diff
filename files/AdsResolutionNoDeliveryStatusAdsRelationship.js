__d(
  "AdsResolutionNoDeliveryStatusAdsRelationship",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
        "EditAd",
        "DuplicateAdSet",
        "CreateAd",
        "CreateAdSet",
        "EditAdSet",
      ]),
      l = n("$InternalEnum").Mirrored([
        "Resolved",
        "Discarded",
        "Duplicating",
        "Duplicated",
        "Creating",
        "Created",
        "Editing",
        "Edited",
      ]);
    ((i.AdsDeliveryNoDeliveryStatusResolution = e),
      (i.NoDeliveryStatusResolutionStatus = l));
  },
  66,
);
