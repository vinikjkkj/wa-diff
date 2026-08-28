__d(
  "filterObjectsWithoutParents",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.id;
        }),
      );
      return e.filter(function (e) {
        return n.has(e.campaign_id);
      });
    }
    function l(e, t) {
      var n = new Set(
        t.map(function (e) {
          return e.id;
        }),
      );
      return e.filter(function (e) {
        return n.has(e.adset_id);
      });
    }
    function s(t, n, r) {
      var o = e(n, t),
        a = l(r, o);
      return {
        filteredCampaignGroups: t,
        filteredCampaigns: o,
        filteredAdgroups: a,
      };
    }
    i.default = s;
  },
  66,
);
