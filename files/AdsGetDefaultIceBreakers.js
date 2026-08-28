__d(
  "AdsGetDefaultIceBreakers",
  [
    "AdsMessengerConstants",
    "AdsPageStore",
    "ClickToMessageCTMPerformanceFeatureGating",
    "isFalsey",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 3,
      u = 5;
    function c(e, t, n, r, o) {
      var a = _(e, t, n, r, o);
      return a;
    }
    function d(e) {
      var t = r("isStringNullOrEmpty")(e)
        ? null
        : r("AdsPageStore").getLoadObject(e);
      return !t || t.isLoading() ? null : t.getValue();
    }
    function m(e) {
      var t = d(e);
      return t ? t.inbox_faq_automation : null;
    }
    function p(e) {
      var t = m(e),
        n = t == null ? void 0 : t.eligible_faq_response_pairs;
      return !t || !n
        ? []
        : n.slice(0, u).map(function (e) {
            var t;
            return {
              title: e.custom_question,
              response: (t = e.saved_response) != null ? t : "",
            };
          });
    }
    function _(e, t, n, a, i) {
      var l = o("AdsMessengerConstants").DEFAULT_ICEBREAKERS.map(function (e) {
          return { title: e };
        }),
        u = d(e);
      if (!u) return l;
      if (
        r("isFalsey")(n) &&
        o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForLeveragingInboxFAQsInAM(t, e, a, i)
      )
        return p(e);
      var c = u.messenger_ads_default_icebreakers;
      return c
        ? c.slice(0, s).map(function (e) {
            return { title: e };
          })
        : l;
    }
    function f(e) {
      var t = m(e);
      return t == null ? void 0 : t.automation_id;
    }
    function g(e) {
      var t = m(e),
        n = t == null ? void 0 : t.eligible_faq_response_pairs;
      if (!t || !n) return !1;
      var r = t == null ? void 0 : t.skipped_faq_with_media_or_button;
      return r || n.length > u;
    }
    ((l.DEFAULT_AUTOFILL_LENGTH = e),
      (l.DEFAULT_ICEBREAKERS_LENGTH = s),
      (l.getDefaultIceBreakers = c),
      (l.getInboxFAQs = p),
      (l.getDefaultIceBreakersHelper = _),
      (l.getAutomationIDFromInbox = f),
      (l.isInboxFAQsFiltered = g));
  },
  98,
);
