__d(
  "AdsExperimentsCreativeMulticellDraftTestReducerPlugins",
  ["AdsDraftFragmentStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e.status === "SUCCESS";
    }
    var s = {
        reduce: function (t, n) {
          return n.updateCreativeMuticellDraftTestIds;
        },
      },
      u = function (t, n, r) {
        var e, o;
        return (
          r === void 0 && (r = '""'),
          String(
            JSON.parse(
              (e =
                (o = t.values) == null ||
                (o = o.find(function (e) {
                  return e.field === n;
                })) == null
                  ? void 0
                  : o.new_value) != null
                ? e
                : r,
            ),
          )
        );
      },
      c = {
        reduce: function (n, o) {
          var t,
            a,
            i,
            l,
            s =
              (t =
                (a = o.response.fragment_statuses) == null ? void 0 : a.data) !=
              null
                ? t
                : [],
            c = new Map(
              (i = n.studyIDToParentCampaignGroupID) != null ? i : [],
            ),
            d = new Map((l = n.studyIDToParentCampaignID) != null ? l : []);
          return (
            s == null ||
              s.forEach(function (t) {
                if (t.ad_object_type === "ad" && e(t)) {
                  var n = r("AdsDraftFragmentStore").getCached(t.fragment_id),
                    o = u(n, "include_in_ad_study_id"),
                    a = u(n, "include_in_ad_study_cell_id"),
                    i = u(n, "campaign_id"),
                    l = u(n, "adset_id");
                  o !== "" &&
                    a !== "" &&
                    i !== "" &&
                    l !== "" &&
                    (c == null || c.set(o, i), d == null || d.set(o, l));
                }
              }),
            { studyIDToParentCampaignGroupID: c, studyIDToParentCampaignID: d }
          );
        },
      };
    ((l.AdsExperimentsCreativeMuticellDraftTestClearReducerPlugin = s),
      (l.AdsExperimentsCreativeMulticellDraftTestReducerPlugin = c));
  },
  98,
);
