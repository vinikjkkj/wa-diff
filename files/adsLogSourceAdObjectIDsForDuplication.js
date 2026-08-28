__d(
  "adsLogSourceAdObjectIDsForDuplication",
  [
    "AdsDraftPublishQPLUserFlowLogging",
    "AdsDuplicationFragmentSources",
    "adsGetSourceAdObjectIDsSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.some(function (e) {
        return o("AdsDuplicationFragmentSources").isDuplicationFragmentSource(
          e == null ? void 0 : e.source,
        );
      });
    }
    function s(t) {
      if (e(t)) {
        var n = t.reduce(
          function (e, t) {
            var n = t.ad_object_id,
              o = t.ad_object_type,
              a = r("adsGetSourceAdObjectIDsSelector")({ id: n, type: o });
            if (a == null) return e;
            switch (o) {
              case "campaign":
                return (e.source_campaign_group_ids.push(a), e);
              case "ad_set":
                return (e.source_campaign_ids.push(a), e);
              case "ad":
                return (e.source_adgroup_ids.push(a), e);
              default:
                return e;
            }
          },
          {
            source_adgroup_ids: [],
            source_campaign_group_ids: [],
            source_campaign_ids: [],
          },
        );
        o(
          "AdsDraftPublishQPLUserFlowLogging",
        ).logToAllPublishUserFlowsAppendArrayAnnotations({
          source_adgroup_ids: n.source_adgroup_ids,
          source_campaign_group_ids: n.source_campaign_group_ids,
          source_campaign_ids: n.source_campaign_ids,
        });
      }
    }
    l.default = s;
  },
  98,
);
