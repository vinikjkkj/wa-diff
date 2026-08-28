__d(
  "AdvantageAudienceUtil",
  ["fbt", "AdsAPIObjectives", "AdsLeadGenAutomationQEUtils", "justknobx"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e() {
      return r("justknobx")._("3978");
    }
    var u = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 236 AB studies that included advertisers across industries and regions who used lower funnel performance goals. The analysis showed that campaigns that had Advantage+ on for Audience saw a 7.2\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      c = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 236 AB studies that included advertisers across industries and regions who used lower funnel performance goals, but excluded advertisers who used a broad audience or Advantage+ shopping campaigns, which were the equivalent of using Advantage+ audience. The analysis showed that campaigns that used Advantage+ audience saw a 7.2\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      d = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 236 AB studies that included advertisers across industries and regions who used lower funnel performance goals, but excluded advertisers who used a broad audience or Advantage+ app campaigns, which were the equivalent of using Advantage+ audience. The analysis showed that campaigns that used Advantage+ audience saw a 7.2\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      m = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 150 AB studies that included advertisers across industries and regions who used mid-funnel performance goals. The analysis showed that campaigns that had Advantage+ on for Audience saw a 9.7\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      p = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 150 AB studies that included advertisers across industries and regions who used mid-funnel performance goals, but excluded advertisers who used a broad audience. The analysis showed that campaigns that used Advantage+ audience saw a 9.7\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      _ = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 150 AB studies that included advertisers across industries and regions who used mid-funnel performance goals, but excluded advertisers who used a broad audience. The analysis showed that campaigns that used Advantage+ audience saw a 9.7\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      f = s._(
        /*BTDS*/ "This result is based on a meta-analysis run between Jan 1, 2023 and Aug 1, 2024. It looked at 83 AB studies that included advertisers across industries and regions who used upper funnel performance goals, but excluded advertisers who used a broad audience, which was the equivalent of using Advantage+ audience. The analysis showed that campaigns that used Advantage+ audience saw a 14.8\u0025 lower median cost per result compared to those that did not. Results may vary.",
      ),
      g = s._(
        /*BTDS*/ "This result is based on an experiment run between March 2023 and June 2023. The experiment compared the results of ad sets delivered using Advantage+ audience versus the original audience for 16 advertisers. Results may vary.",
      );
    function h(e) {
      var t,
        n = [
          (t = r("AdsAPIObjectives")).OUTCOME_TRAFFIC,
          t.OUTCOME_ENGAGEMENT,
          t.LINK_CLICKS,
          t.CANVAS_APP_ENGAGEMENT,
          t.EVENT_RESPONSES,
          t.MESSAGES,
          t.MOBILE_APP_ENGAGEMENT,
          t.OFFER_CLAIMS,
          t.PAGE_LIKES,
          t.POST_ENGAGEMENT,
        ];
      return n.includes(e);
    }
    function y(e) {
      var t,
        n = [
          (t = r("AdsAPIObjectives")).OUTCOME_AWARENESS,
          t.BRAND_AWARENESS,
          t.LOCAL_AWARENESS,
          t.REACH,
          t.RESEARCH_POLL,
          t.STORE_VISITS,
          t.VIDEO_VIEWS,
        ];
      return n.includes(e);
    }
    function C(e) {
      var t = [
        r("AdsAPIObjectives").OUTCOME_SALES,
        r("AdsAPIObjectives").WEBSITE_CONVERSIONS,
        r("AdsAPIObjectives").PRODUCT_CATALOG_SALES,
      ];
      return t.includes(e);
    }
    function b(e) {
      var t = [
        r("AdsAPIObjectives").APP_INSTALLS,
        r("AdsAPIObjectives").CANVAS_APP_INSTALLS,
        r("AdsAPIObjectives").MOBILE_APP_INSTALLS,
      ];
      return t.includes(e);
    }
    function v(t, n, r, a, i) {
      if (e()) {
        if (o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t) || h(t))
          return r;
        if (b(t) || C(t)) return n;
        if (y(t)) return a;
      }
      return i;
    }
    function S(t, n, r, a, i, l, s) {
      if (e()) {
        if (o("AdsLeadGenAutomationQEUtils").isLeadsObjective(t)) return a;
        if (h(t)) return i;
        if (b(t)) return r;
        if (C(t)) return n;
        if (y(t)) return l;
      }
      return s;
    }
    function R(e, t) {
      return t ? S(e, u, u, m, _, f, g) : S(e, c, d, p, _, f, g);
    }
    ((l.getIsEligibleForAdvantagePlusStatUpdates = e),
      (l.getAdvantageAudienceUpdatedStatNumber = v),
      (l.getAdvantageAudienceUpdatedStatDescription = S),
      (l.getAudienceMetricDetails = R));
  },
  226,
);
