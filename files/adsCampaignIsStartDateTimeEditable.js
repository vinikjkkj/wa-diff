__d(
  "adsCampaignIsStartDateTimeEditable",
  ["DateTime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      var o = r("DateTime").now(n);
      return e || o.isBefore(t);
    }
    l.default = e;
  },
  98,
);
