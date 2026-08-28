__d(
  "ClickToWhatsAppAdsLoggerUtils",
  ["AdsAPIObjectives", "ClickToWhatsAppAdsUnifiedEventsTypedLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i) {
      new (r("ClickToWhatsAppAdsUnifiedEventsTypedLogger"))()
        .setAdAccountID(o)
        .setEvent(n)
        .setObjective(i != null ? i : t)
        .setPageID(null)
        .setPostID(null)
        .setSourceAppID(e)
        .setVerificationCode(null)
        .setWhatsappCountryCode(null)
        .setWhatsappNumber(null)
        .setWhatsappNumberType(null)
        .setWhatsappPhoneNumber(null)
        .setProductFlow(a)
        .setOdaxObjective(t)
        .log();
    }
    function s(e) {
      var t = e.adAccountID,
        n = e.adgroupID,
        o = e.appID,
        a = e.campaignGroupID,
        i = e.campaignID,
        l = e.effectiveObjective,
        s = e.event,
        u = e.eventInfo,
        c = e.objective,
        d = e.pageID,
        m = e.productFlow,
        p = e.targetID,
        _ = e.verificationCode,
        f = e.whatsAppCountryCode,
        g = e.whatsAppNumber,
        h = e.whatsAppNumberType,
        y = e.whatsAppPhoneNumber;
      new (r("ClickToWhatsAppAdsUnifiedEventsTypedLogger"))()
        .setAdAccountID(t)
        .setAdgroupID(n)
        .setCampaignGroupID(a)
        .setCampaignID(i)
        .setEvent(s)
        .setEventInfo(u)
        .setObjective(l != null ? l : c)
        .setPageID(d)
        .setPostID(p)
        .setProductFlow(m)
        .setSourceAppID(o)
        .setVerificationCode(_)
        .setWhatsappCountryCode(f)
        .setWhatsappNumber(g)
        .setWhatsappNumberType(h)
        .setWhatsappPhoneNumber(y)
        .setOdaxObjective(c)
        .log();
    }
    function u(e) {
      if (e == null) return null;
      switch (e) {
        case r("AdsAPIObjectives").POST_ENGAGEMENT:
          return 14;
        case r("AdsAPIObjectives").LINK_CLICKS:
          return 19;
        case r("AdsAPIObjectives").REACH:
          return 36;
        case r("AdsAPIObjectives").BRAND_AWARENESS:
          return 32;
        case r("AdsAPIObjectives").MESSAGES:
          return 39;
        case r("AdsAPIObjectives").WEBSITE_CONVERSIONS:
          return 15;
        case r("AdsAPIObjectives").PAGE_LIKES:
          return 8;
        case r("AdsAPIObjectives").VIDEO_VIEWS:
          return 8;
        case r("AdsAPIObjectives").LEAD_GENERATION:
          return 31;
        case r("AdsAPIObjectives").CONVERSIONS:
          return 15;
        case r("AdsAPIObjectives").OUTCOME_AWARENESS:
          return 41;
        case r("AdsAPIObjectives").OUTCOME_ENGAGEMENT:
          return 42;
        case r("AdsAPIObjectives").OUTCOME_LEADS:
          return 40;
        case r("AdsAPIObjectives").OUTCOME_SALES:
          return 43;
        default:
          return null;
      }
    }
    ((l.logClickToWhatsAppAdsUnifiedEvent = e),
      (l.logClickToWhatsAppAdsUnifiedEventDetails = s),
      (l.getAdproObjectiveFromApiObjective = u));
  },
  98,
);
