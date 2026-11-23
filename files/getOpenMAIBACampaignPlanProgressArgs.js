__d(
  "getOpenMAIBACampaignPlanProgressArgs",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = "campaign_plan_progress";
    function l(t) {
      for (var n = t != null ? t : [], r = n.length - 1; r >= 0; r--) {
        var o = n[r];
        if (o.tool_name === e) {
          var a = o.tool_call_args;
          return o.is_completed === !0 || a == null || a === "" ? null : a;
        }
      }
      return null;
    }
    i.default = l;
  },
  66,
);
