__d(
  "WAWebDebugBizBroadcastGenAI",
  [
    "WAJids",
    "WAWebBizBroadcastGenAIEligibilityModel",
    "WAWebBizBroadcastGenAIPacing",
    "WAWebBizBroadcastGenAIRecommendationJob",
    "WAWebBizBroadcastGenAIToS",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return o(
        "WAWebBizBroadcastGenAIRecommendationJob",
      ).fetchBroadcastGenAIRecommendation({
        broadcastJids: n != null ? [o("WAJids").toBroadcastJid(n)] : void 0,
        model: "LLAMA",
        userMessageDraft: e,
        userPrompt: t != null ? t : null,
      });
    }
    e.doc = "Fetch GenAI text recommendations for a draft message";
    function s(e) {
      o("WAWebBizBroadcastGenAIEligibilityModel").debugSetGenAIEligible(e);
    }
    s.doc = "Override GenAI eligibility (true/false)";
    function u() {
      return {
        dailyCount: o("WAWebBizBroadcastGenAIPacing").getRequestCount(),
        hasAcceptedToS: o("WAWebBizBroadcastGenAIToS").hasAcceptedGenAIToS(),
        hasReachedLimit: o(
          "WAWebBizBroadcastGenAIPacing",
        ).hasReachedDailyLimit(),
        isEligible: o(
          "WAWebBizBroadcastGenAIEligibilityModel",
        ).isGenAIEligible(),
      };
    }
    ((u.doc = "Show GenAI eligibility and pacing status"),
      (u.paramsToExecute = []));
    function c() {
      o("WAWebBizBroadcastGenAIToS").debugResetGenAIToS();
    }
    ((c.doc = "Reset GenAI ToS local cache for re-testing"),
      (c.paramsToExecute = []));
    var d = {
      bbFetchGenAIRecommendation: e,
      bbGenAIStatus: u,
      bbResetGenAIToS: c,
      bbSetGenAIEligible: s,
    };
    l.default = d;
  },
  98,
);
