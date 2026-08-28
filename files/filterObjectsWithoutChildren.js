__d(
  "filterObjectsWithoutChildren",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      return new Set(
        e.map(function (e) {
          return e.adset_id;
        }),
      );
    }
    function l(e) {
      return new Set(
        e.map(function (e) {
          return e.campaign_id;
        }),
      );
    }
    function s(t, n, r) {
      var o = r.getFiltersFor("adgroup");
      if (o.length === 0) return t;
      var a = e(n);
      return t.filter(function (e) {
        return a.has(e.id);
      });
    }
    function u(e, t, n) {
      var r = n.getFiltersFor("campaign"),
        o = n.getFiltersFor("adgroup");
      if (r.length === 0 && o.length === 0) return e;
      var a = l(t);
      return e.filter(function (e) {
        return a.has(e.id);
      });
    }
    function c(e, t, n, r) {
      var o = s(t, n, r),
        a = u(e, o, r);
      return {
        filteredCampaignGroups: a,
        filteredCampaigns: o,
        filteredAdgroups: n,
      };
    }
    i.default = c;
  },
  66,
);
