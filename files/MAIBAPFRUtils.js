__d(
  "MAIBAPFRUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return e.includes(".pfr.");
    }
    function l(e) {
      if ((e == null ? void 0 : e.ad_object_ids) == null) return null;
      var t = [],
        n = new Set();
      if (e.additional_info != null)
        try {
          var r = JSON.parse(e.additional_info);
          (r.campaign_group_id != null &&
            (t.push({
              ad_object_ids: [String(r.campaign_group_id)],
              ad_objects_level: "CAMPAIGN_GROUP",
            }),
            n.add("CAMPAIGN_GROUP")),
            r.campaign_id != null &&
              (t.push({
                ad_object_ids: [String(r.campaign_id)],
                ad_objects_level: "CAMPAIGN",
              }),
              n.add("CAMPAIGN")));
        } catch (e) {}
      var o = e.ad_object_level,
        a = e.ad_object_ids;
      return (
        o != null &&
          a != null &&
          !n.has(o) &&
          t.push({ ad_object_ids: [String(a[0])], ad_objects_level: o }),
        t.length > 0 ? t : null
      );
    }
    ((i.isPFRRecommendation = e),
      (i.buildAdObjectTreeFromEntrypointContext = l));
  },
  66,
);
