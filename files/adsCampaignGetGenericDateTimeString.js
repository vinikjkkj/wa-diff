__d(
  "adsCampaignGetGenericDateTimeString",
  ["XUIDateTimePickerUtils", "adsCampaignGetLeadingZeroString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("XUIDateTimePickerUtils").offsetDate(e, t),
        o =
          r("adsCampaignGetLeadingZeroString")(n.getUTCMonth() + 1) +
          "/" +
          r("adsCampaignGetLeadingZeroString")(n.getUTCDate()) +
          "/" +
          r("adsCampaignGetLeadingZeroString")(n.getUTCFullYear() % 100),
        a =
          n.getUTCHours() === 0 || n.getUTCHours() === 12
            ? "12"
            : n.getUTCHours() % 12,
        i = r("adsCampaignGetLeadingZeroString")(n.getUTCMinutes()),
        l = r("adsCampaignGetLeadingZeroString")(n.getUTCSeconds()),
        s = n.getUTCHours() >= 12 ? "pm" : "am",
        u = a + ":" + i + ":" + l + " " + s;
      return o + " " + u;
    }
    l.default = e;
  },
  98,
);
