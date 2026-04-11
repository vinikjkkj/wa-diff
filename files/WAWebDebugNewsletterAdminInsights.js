__d(
  "WAWebDebugNewsletterAdminInsights",
  ["WALogger", "WATimeUtils", "WAWebNewsletterAdminInsightsModel"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      var t,
        n = window.chat;
      if (n == null) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Select owned channel before mockAdminInsightsForChat",
            ])),
        );
        return;
      }
      var r = new (o(
        "WAWebNewsletterAdminInsightsModel",
      ).NewsletterAdminInsights)({
        id: n.id,
        rangeStart: o("WATimeUtils").unixTime() - 2628e3,
        rangeEnd: o("WATimeUtils").unixTime(),
        accountsReached: 5924187,
        reachDelta: 0.107,
        followersReached: 42e5,
        nonFollowersReached: 1724187,
        reachByCountry: [
          { label: "Colombia", percentage: 0.401, value: 23e5 },
          { label: "Brazil", percentage: 0.201, value: 11e5 },
          { label: "Peru", percentage: 0.153, value: 902e3 },
          { label: "United Kingdom", percentage: 0.102, value: 601e3 },
        ],
        followers: 6854382,
        followersDelta: 0.013,
        followersByCountry: [
          { label: "Colombia", percentage: 0.401, value: 23e5 },
          { label: "Brazil", percentage: 0.201, value: 11e5 },
          { label: "Peru", percentage: 0.153, value: 902e3 },
          { label: "United Kingdom", percentage: 0.102, value: 601e3 },
        ],
        netFollows: 974e3,
        growthChart: m,
      });
      (t = n.newsletterMetadata) == null || t.set("adminInsights", r);
    }
    var u = { mockAdminInsightsForChannel: s },
      c = Array(30)
        .fill()
        .map(function (e, t) {
          return new Date(2024, 11, t);
        });
    function d(e) {
      return e.map(function (e) {
        return [e.valueOf(), Math.random() * 1e6];
      });
    }
    var m = [
      {
        data: [d(c), d(c), d(c)],
        dataLabels: ["Net follows", "Follows", "Unfollows"],
        dataSetLabel: "Growth",
      },
    ];
    l.default = u;
  },
  98,
);
