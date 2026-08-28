__d(
  "AdStudiesImpactingReloadStudyReducerPlugins",
  [
    "AdsAccountStore",
    "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
    "adsMgmtCampaignSelectedIdsByLevelSelector",
    "adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1e3,
      s = 2 * e,
      u = function (t) {
        var e = t.adObjectIDsToCheck,
          n = t.forceReload,
          a = t.state,
          i = r("AdsAccountStore").getSelectedAccountID();
        if (i != null) {
          var l = o(
            "adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector",
          ).adsTALGetDraftVariantAdObjectIDsInFreeformTestSelector();
          if (l.size > 0 && (e.length > 0 || n === !0)) {
            var u,
              c =
                n === !0 ||
                ((u = e.filter(function (e) {
                  return l.has(e);
                })) != null
                  ? u
                  : []
                ).length > 0;
            c &&
              window.setTimeout(function () {
                a.get({
                  adAccountID: i,
                  filter: "All",
                  shouldLoadAllAtOnce: !0,
                  shouldReload: c,
                });
              }, s);
          }
        }
      },
      c = {
        reduce: function (t, n) {
          var e, r;
          return (
            u({
              adObjectIDsToCheck:
                (e =
                  (r = n.response.fragment_statuses) == null
                    ? void 0
                    : r.data.map(function (e) {
                        return e.ad_object_id;
                      })) != null
                  ? e
                  : [],
              state: t,
            }),
            t
          );
        },
      },
      d = {
        reduce: function (t, n) {
          return (
            u({
              adObjectIDsToCheck: n.campaignGroupIDs.concat(n.campaignIDs),
              state: t,
            }),
            t
          );
        },
      },
      m = {
        reduce: function (t, n) {
          return (
            u({
              adObjectIDsToCheck: r(
                "adsMgmtCampaignGroupSelectedIdsByLevelSelector",
              )().concat(r("adsMgmtCampaignSelectedIdsByLevelSelector")()),
              state: t,
            }),
            t
          );
        },
      };
    ((l.AdStudiesImpactingAdStudiesDraftPublishCompleteReducerPlugin = c),
      (l.AdStudiesImpactingAdStudiesDraftRevertReducerPlugin = d),
      (l.AdStudiesImpactingAdStudiesDraftRevertSelectedAdObjectReducerPlugin =
        m));
  },
  98,
);
