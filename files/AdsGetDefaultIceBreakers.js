__d(
  "AdsGetDefaultIceBreakers",
  [
    "AdsDefaultIceBreakersDataSourceLogger",
    "AdsDefaultIceBreakersDataUtils",
    "AdsMessengerConstants",
    "AdsPageStore",
    "ClickToMessageCTMPerformanceFeatureGating",
    "isFalsey",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 5;
    function s(e, t, n, r, o) {
      var a = m(e, t, n, r, o);
      return a;
    }
    function u(e, t) {
      if (r("isStringNullOrEmpty")(e)) return null;
      var n = r("AdsPageStore").getLoadObject(e),
        a = !n || n.isLoading() ? null : n.getValue();
      return (
        o(
          "AdsDefaultIceBreakersDataSourceLogger",
        ).logAdsDefaultIceBreakersDataSource(
          t,
          "AdsGetDefaultIceBreakers",
          "store_legacy",
          { storePageLoaded: a != null },
        ),
        a
      );
    }
    function c(e, t) {
      var n = u(e, t);
      return n ? n.inbox_faq_automation : null;
    }
    function d(t) {
      var n = c(t, "getInboxFAQs"),
        r = n == null ? void 0 : n.eligible_faq_response_pairs;
      return !n || !r
        ? []
        : r.slice(0, e).map(function (e) {
            var t;
            return {
              title: e.custom_question,
              response: (t = e.saved_response) != null ? t : "",
            };
          });
    }
    function m(e, t, n, a, i) {
      var l = o("AdsMessengerConstants").DEFAULT_ICEBREAKERS.map(function (e) {
          return { title: e };
        }),
        s = u(e, "getDefaultIceBreakers");
      if (!s) return l;
      if (
        r("isFalsey")(n) &&
        o(
          "ClickToMessageCTMPerformanceFeatureGating",
        ).isEligibleForLeveragingInboxFAQsInAM(t, e, a, i)
      )
        return d(e);
      var c = s.messenger_ads_default_icebreakers;
      return c
        ? c
            .slice(
              0,
              o("AdsDefaultIceBreakersDataUtils").DEFAULT_ICEBREAKERS_LENGTH,
            )
            .map(function (e) {
              return { title: e };
            })
        : l;
    }
    function p(e) {
      var t = c(e, "getAutomationIDFromInbox");
      return t == null ? void 0 : t.automation_id;
    }
    function _(t) {
      var n = c(t, "isInboxFAQsFiltered"),
        r = n == null ? void 0 : n.eligible_faq_response_pairs;
      if (!n || !r) return !1;
      var o = n == null ? void 0 : n.skipped_faq_with_media_or_button;
      return o || r.length > e;
    }
    ((l.getDefaultIceBreakers = s),
      (l.getInboxFAQs = d),
      (l.getDefaultIceBreakersHelper = m),
      (l.getAutomationIDFromInbox = p),
      (l.isInboxFAQsFiltered = _));
  },
  98,
);
