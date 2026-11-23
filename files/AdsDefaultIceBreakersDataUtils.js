__d(
  "AdsDefaultIceBreakersDataUtils",
  ["AdsMessengerConstants"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1,
      s = 3,
      u = 5;
    function c(e) {
      var t = e == null ? void 0 : e.messenger_ads_default_icebreakers;
      return t != null && t.length > 0
        ? t.slice(0, s).map(function (e) {
            return { title: e };
          })
        : o("AdsMessengerConstants").DEFAULT_ICEBREAKERS.map(function (e) {
            return { title: e };
          });
    }
    function d(e) {
      var t = e == null ? void 0 : e.inbox_faq_automation,
        n = t == null ? void 0 : t.eligible_faq_response_pairs;
      return (t == null ? void 0 : t.automation_id) == null ||
        n == null ||
        n.length === 0
        ? !1
        : t.skipped_faq_with_media_or_button === !0 || n.length > u;
    }
    function m(e) {
      return JSON.stringify(
        e.map(function (e) {
          return String(e.title);
        }),
      );
    }
    ((l.DEFAULT_AUTOFILL_LENGTH = e),
      (l.DEFAULT_ICEBREAKERS_LENGTH = s),
      (l.getDefaultIceBreakersFromPage = c),
      (l.isInboxFAQsFilteredFromPage = d),
      (l.getIceBreakerTitlesKey = m));
  },
  98,
);
