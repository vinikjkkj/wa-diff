__d(
  "MAIBAAssetSelectionTypes.flow",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e === "Post" || e === "Reel" || e === "Story";
    }
    function l(e) {
      return e.type === "Campaign" || e.type === "Ad set" || e.type === "Ad";
    }
    function s(e) {
      return e.type === "Post" || e.type === "Reel" || e.type === "Story";
    }
    function u(e) {
      return e.type === "WhatsApp Business Account";
    }
    ((i.isOrganicContentAssetType = e),
      (i.isAdObjectAsset = l),
      (i.isOrganicContentAsset = s),
      (i.isWABAAsset = u));
  },
  66,
);
