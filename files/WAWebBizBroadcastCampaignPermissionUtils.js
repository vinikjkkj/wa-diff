__d(
  "WAWebBizBroadcastCampaignPermissionUtils",
  ["WAWebValidationUtils", "unsafeCast"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1e12,
      u = "ACTIVE",
      c = new Set([
        (e = r("unsafeCast"))("SCHEDULED"),
        e("NOT_SENDING"),
        e("COMPLETED"),
        e("REJECTED"),
      ]);
    function d(e) {
      return e.statusSource !== "PRO"
        ? !1
        : e.lifecycleStatus === u && !c.has(e.status);
    }
    function m(e) {
      return !(
        !o("WAWebValidationUtils").validateUUID(e.campaignId) ||
        e.createdTimestamp < s
      );
    }
    ((l.canDeleteBizBroadcastProCampaign = d),
      (l.canEditBizBroadcastCampaign = m));
  },
  98,
);
