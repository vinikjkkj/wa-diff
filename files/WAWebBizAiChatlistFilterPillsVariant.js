__d(
  "WAWebBizAiChatlistFilterPillsVariant",
  ["$InternalEnum", "WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
      None: "NONE",
      Control: "CONTROL",
      Test: "TEST",
      TestPills: "TEST_PILLS",
      Rollout: "ROLLOUT",
    });
    function s() {
      var t, n;
      try {
        n = o("WAWebABProps").getABPropConfigValue("smb_biz_ai_lists_pills");
      } catch (t) {
        return e.None;
      }
      return n == null || typeof n != "string"
        ? e.None
        : (t = e.cast(n.toUpperCase())) != null
          ? t
          : e.None;
    }
    function u() {
      var t = s();
      return t === e.TestPills || t === e.Rollout;
    }
    ((l.BizAiChatlistFilterPillsVariant = e),
      (l.getBizAiChatlistFilterPillsVariant = s),
      (l.isBizAiChatlistFilterPillsTestPills = u));
  },
  98,
);
