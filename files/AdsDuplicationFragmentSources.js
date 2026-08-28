__d(
  "AdsDuplicationFragmentSources",
  ["AdDraftFragmentSource"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = [
        (e = r("AdDraftFragmentSource"))
          .DUPLICATE_CAMPAIGN_GROUP_FROM_CLIPBOARD,
        e.DUPLICATE_CAMPAIGN_FROM_CLIPBOARD,
        e.DUPLICATE_AD_FROM_CLIPBOARD,
        e.COPY_PASTE_REDIRECT,
        e.QUICK_DUPLICATE_REDIRECT,
        e.ODAX_DUPLICATE,
        e.ODAX_EDITOR_DUPLICATE,
        e.SUGGESTED_ADS,
        e.UPGRADE_DUPLICATE,
        e.UPGRADE_PACKAGE_DUPLICATE,
        e.CLICK_CAMPAIGN_GROUP_DUPLICATE,
        e.CLICK_CAMPAIGN_DUPLICATE,
        e.CLICK_AD_DUPLICATE,
        e.ASC_FRAGMENTATION_MFR,
        e.QUICK_DUPLICATE_UPGRADE,
        e.COPY_PASTE_UPGRADE,
      ],
      u = new Set(s);
    function c(e) {
      return e != null && u.has(e);
    }
    l.isDuplicationFragmentSource = c;
  },
  98,
);
