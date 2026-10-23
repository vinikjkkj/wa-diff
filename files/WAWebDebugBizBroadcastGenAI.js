__d(
  "WAWebDebugBizBroadcastGenAI",
  [
    "WAJids",
    "WAWebBizBroadcastGenAIEligibilityModel",
    "WAWebBizBroadcastGenAIPacing",
    "WAWebBizBroadcastGenAIRecommendationJob",
    "WAWebBizBroadcastGenAIToS",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      return (
        r("vulture")("1J8nAWLttTAw4PW9yYM5C-4zTrA="),
        o(
          "WAWebBizBroadcastGenAIRecommendationJob",
        ).fetchBroadcastGenAIRecommendation({
          broadcastJids: n != null ? [o("WAJids").toBroadcastJid(n)] : void 0,
          model: "LLAMA",
          userMessageDraft: e,
          userPrompt: t != null ? t : null,
        })
      );
    }
    e.doc = "Fetch GenAI text recommendations for a draft message";
    function s(e) {
      (r("vulture")("Je4x7K6bWNc38x2afLmSKtJ6E-M="),
        o("WAWebBizBroadcastGenAIEligibilityModel").debugSetGenAIEligible(e));
    }
    s.doc = "Override GenAI eligibility (true/false)";
    function u() {
      return (
        r("vulture")("5sIxsQWi3Gxafvciqoz_Oprbr-E="),
        {
          dailyCount: o("WAWebBizBroadcastGenAIPacing").getRequestCount(),
          hasAcceptedToS: o("WAWebBizBroadcastGenAIToS").hasAcceptedGenAIToS(),
          hasReachedLimit: o(
            "WAWebBizBroadcastGenAIPacing",
          ).hasReachedDailyLimit(),
          isEligible: o(
            "WAWebBizBroadcastGenAIEligibilityModel",
          ).isGenAIEligible(),
        }
      );
    }
    ((u.doc = "Show GenAI eligibility and pacing status"),
      (u.paramsToExecute = []));
    function c() {
      (r("vulture")("DN6mICMTdolXYNJ-CLSRc8sr6bI="),
        o("WAWebBizBroadcastGenAIToS").debugResetGenAIToS());
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
