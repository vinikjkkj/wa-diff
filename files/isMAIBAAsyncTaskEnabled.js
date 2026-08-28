__d(
  "isMAIBAAsyncTaskEnabled",
  ["ALToolTab", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "Account Overview",
      "Ad Account Settings",
      "Ad Limits",
      "Ads Manager (Campaigns)",
      "Ads Reporting",
      "Advertising Settings",
      "Audience Insights",
      "Audiences",
      "Automated Rules",
      "Creation Package",
      "Insights",
    ]);
    function s() {
      var t = o("ALToolTab").getCurrentToolTab(),
        n = t.tool;
      return n != null && e.has(n) && r("qex")._("1426") === !0;
    }
    l.default = s;
  },
  98,
);
