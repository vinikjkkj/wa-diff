__d(
  "adsCampaignGetISODateTimeString",
  [
    "adsCampaignConvertGenericDateTimeToISOString",
    "adsCampaignGetGenericDateTimeString",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("adsCampaignGetGenericDateTimeString")(e, t);
      return r("adsCampaignConvertGenericDateTimeToISOString")(n, t);
    }
    l.default = e;
  },
  98,
);
