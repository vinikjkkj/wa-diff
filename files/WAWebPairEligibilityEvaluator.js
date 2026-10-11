__d(
  "WAWebPairEligibilityEvaluator",
  ["WAWebPairEligibilityEpdCountries"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n = e.adopter;
      if (n == null) return s("EVENT_NOT_REGISTERED");
      if (!e.isOneToOne) return s("NOT_ONE_TO_ONE");
      var r = e.readFacts();
      if (r == null) return { result: "UNKNOWN", reason: "FACTS_UNAVAILABLE" };
      var o = u(r);
      if (o == null) return s("NOT_CLOUD_API_BUSINESS");
      if (t.isConsumerUnderEpd()) return s("CONSUMER_EPD");
      var a = c(r.businessIso);
      return a != null
        ? a
        : !t.isMasterEnabled() || !t.isAdopterEnabled(n)
          ? s("DISABLED")
          : { result: "ELIGIBLE", channel: o, templateId: d(e, n) };
    }
    function s(e) {
      return { result: "INELIGIBLE", reason: e };
    }
    function u(e) {
      return e.hosted ? "COEX" : e.cloudApiHostStorage ? "CLOUD_API" : null;
    }
    function c(e) {
      var t,
        n = (t = e == null ? void 0 : e.trim().toUpperCase()) != null ? t : "";
      return n === ""
        ? { result: "UNKNOWN", reason: "BUSINESS_COUNTRY_UNKNOWN" }
        : o(
              "WAWebPairEligibilityEpdCountries",
            ).PAIR_ELIGIBILITY_EPD_ISO_CODES.has(n)
          ? s("BUSINESS_EPD")
          : null;
    }
    function d(e, t) {
      return e.subjectKind === "message" && t.templateApproved
        ? e.candidateTemplateId
        : null;
    }
    l.evaluatePairEligibility = e;
  },
  98,
);
