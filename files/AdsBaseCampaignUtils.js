__d(
  "AdsBaseCampaignUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 864e5,
      l = 1e3 * 60,
      s = {
        getCampaignDayCountFrom: function (n, r) {
          var t = r.valueOf() - n.valueOf();
          return t / e;
        },
        isSameDayUTC: function (t, n) {
          return (
            t.getUTCDate() === n.getUTCDate() &&
            t.getUTCMonth() === n.getUTCMonth() &&
            t.getUTCFullYear() === n.getUTCFullYear()
          );
        },
        isStartDateEditable: function (t, n, r) {
          var e = r || new Date();
          return t === !0 || n.getTime() - e.getTime() > l * 15;
        },
        getCampaignDayLeftCount: function (t, n) {
          var e = new Date(),
            r = new Date(e.getFullYear(), e.getMonth(), e.getDate()),
            o = n || e;
          return o < e
            ? 0
            : r >= t
              ? s.getCampaignDayCountFrom(r, o)
              : s.getCampaignDayCountFrom(t, o);
        },
      },
      u = s;
    i.default = u;
  },
  66,
);
