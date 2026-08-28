__d(
  "isAsyncNotificationEnabled",
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
      "Billing & Payments",
      "Business Help Center",
      "Business Support",
      "Creation Package",
      "Insights",
    ]);
    function s(t) {
      t === void 0 && (t = !1);
      var n = o("ALToolTab").getCurrentToolTab(),
        a = n.tool;
      return a == null || !e.has(a)
        ? !1
        : a === "Business Support" || a === "Business Help Center"
          ? t
            ? r("qex")._("1469") === !0
            : r("qex")._("1735") === !0
          : !0;
    }
    l.default = s;
  },
  98,
);
