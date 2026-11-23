__d(
  "adsAdAccountStickyConfigSelector",
  ["AdsAccountStore", "AdsAdAccountSettingsStore"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t,
        n = r("AdsAccountStore").getSelectedAccountID();
      return n == null
        ? null
        : (t = r("AdsAdAccountSettingsStore").get(n).getValue()) == null ||
            (t = t.aplusc_sticky_config) == null
          ? void 0
          : t[e];
    }
    function s(e) {
      var t;
      return e === ""
        ? null
        : (t = r("AdsAdAccountSettingsStore").get(e).getValue()) == null
          ? void 0
          : t.is_video_gen_survey_exhausted;
    }
    function u(e) {
      var t;
      return e === ""
        ? null
        : (t = r("AdsAdAccountSettingsStore").get(e).getValue()) == null
          ? void 0
          : t.is_genai_adoption_survey_exhausted;
    }
    ((l.getAPlusCAdAccountStickyEntryForSelectedAccount = e),
      (l.getIsVideoGenSurveyExhaustedForAccount = s),
      (l.getIsGenAiAdoptionSurveyExhaustedForAccount = u));
  },
  98,
);
