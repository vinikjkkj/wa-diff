__d(
  "adsCampaignConvertGenericDateTimeToISOString",
  ["adsCampaignGetLeadingZeroString"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.split(" "),
        o = n[0].split("/"),
        a = n[1].split(":"),
        i = n[2],
        l = o[0],
        s = o[1],
        u = "20" + o[2],
        c = parseInt(a[0], 10),
        d = a[1],
        m = a[2] || "00";
      i === "pm" && c < 12 ? (c = c + 12) : i === "am" && c === 12 && (c = 0);
      var p =
          u +
          "-" +
          l +
          "-" +
          s +
          "T" +
          r("adsCampaignGetLeadingZeroString")(c) +
          ":" +
          d +
          ":" +
          m,
        _ = 60 * Math.abs(t),
        f = Math.floor(_ / 60),
        g = _ % 60,
        h =
          (t >= 0 ? "+" : "-") +
          r("adsCampaignGetLeadingZeroString")(f) +
          r("adsCampaignGetLeadingZeroString")(g);
      return p + h;
    }
    l.default = e;
  },
  98,
);
