__d(
  "isMAIBAAsyncTaskEnabled",
  [
    "ALToolTab",
    "MAIBAConversationViewAsyncTasksOverride",
    "MAIBAMBSAsyncTaskUtils",
    "gkx",
    "isMAIBAConversationViewPage",
    "qex",
  ],
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
    function s(t) {
      if (r("isMAIBAConversationViewPage")())
        return (
          o(
            "MAIBAConversationViewAsyncTasksOverride",
          ).isMAIBAConversationViewAsyncTasksOverriddenOn() ||
          r("qex")._("6054") === !0
        );
      var n = o("ALToolTab").getCurrentToolTab(),
        a = n.tool;
      return o("MAIBAMBSAsyncTaskUtils").isMAIBAMBSAsyncTaskSurface(a)
        ? t != null && o("MAIBAMBSAsyncTaskUtils").isMAIBAMBSAsyncTaskEnabled()
        : a == null || !e.has(a)
          ? !1
          : r("gkx")("27021") || r("qex")._("1426") === !0;
    }
    l.default = s;
  },
  98,
);
