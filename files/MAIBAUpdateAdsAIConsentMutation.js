__d(
  "MAIBAUpdateAdsAIConsentMutation",
  ["MAIBAUpdateAdsAIConsentMutation.graphql"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e !== void 0 ? e : (e = n("MAIBAUpdateAdsAIConsentMutation.graphql"));
    function u(e, t) {
      var n = e.getRoot(),
        r = n.getLinkedRecord("maiba_viewer");
      r != null && r.setValue(t, "is_user_consented_to_maiba");
      var o = n.getLinkedRecord("viewer"),
        a = o == null ? void 0 : o.getLinkedRecord("ads_user_settings");
      a != null && a.setValue(t, "is_ads_ai_consented");
    }
    ((l.UPDATE_ADS_AI_CONSENT_MUTATION = s),
      (l.updateMAIBAConsentStatusInRelay = u));
  },
  98,
);
