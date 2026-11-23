__d(
  "MAIBACampaignPlanSort",
  ["MAIBACampaignFunnelStage"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        Jan: 0,
        Feb: 1,
        Mar: 2,
        Apr: 3,
        May: 4,
        Jun: 5,
        Jul: 6,
        Aug: 7,
        Sep: 8,
        Oct: 9,
        Nov: 10,
        Dec: 11,
      },
      s = { awareness: 0, consideration: 1, conversion: 2 },
      u = 99;
    function c(e) {
      var t = o("MAIBACampaignFunnelStage").deriveFunnelStage(e);
      return t == null ? u : s[t];
    }
    function d(t) {
      var n = t.trim().split(/\s+/);
      if (n.length < 2) return null;
      var r = e[n[0]],
        o = parseInt(n[1], 10);
      return r == null || Number.isNaN(o) ? null : { day: o, monthIdx: r };
    }
    function m(e) {
      var t = e.map(function (e, t) {
        var n = d(e.start_date),
          r = n == null ? Number.POSITIVE_INFINITY : n.monthIdx * 31 + n.day;
        return { campaign: e, funnel: c(e.objective), index: t, startKey: r };
      });
      return (
        t.sort(function (e, t) {
          return (
            e.startKey - t.startKey || e.funnel - t.funnel || e.index - t.index
          );
        }),
        t.map(function (e) {
          return e.campaign;
        })
      );
    }
    l.sortCampaignsForDisplay = m;
  },
  98,
);
