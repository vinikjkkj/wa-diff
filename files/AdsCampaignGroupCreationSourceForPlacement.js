__d(
  "AdsCampaignGroupCreationSourceForPlacement",
  ["AdDraftFragmentSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e == null
        ? e
        : e === r("AdDraftFragmentSource").AMA_POST_TO_AD_FLOW
          ? "AMA_CREATION_FLOW"
          : e ===
                r("AdDraftFragmentSource")
                  .FACEBOOK_AND_INSTAGRAM_LIVE_FACEBOOK_AD ||
              e ===
                r("AdDraftFragmentSource")
                  .FACEBOOK_AND_INSTAGRAM_LIVE_INSTAGRAM_AD
            ? null
            : e;
    }
    l.normalizeCampaignGroupCreationSourceForPlacement = e;
  },
  98,
);
