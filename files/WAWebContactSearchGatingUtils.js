__d(
  "WAWebContactSearchGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_distance_threshold",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_timeout_threshold",
      );
    }
    function u() {
      var t = e();
      return t <= 0 ? 1 / 0 : Math.ceil(1 / t);
    }
    function c(e) {
      var t = u();
      return e.every(function (e) {
        return e.length >= t;
      });
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_search_tokenized_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_push_name_in_global_search_non_contacts_enabled",
      );
    }
    ((l.getFuzzySearchDistanceThreshold = e),
      (l.getFuzzySearchTimeoutThreshold = s),
      (l.canTermsMeetFuzzySearchThreshold = c),
      (l.isTokenizedSearchEnabled = d),
      (l.isNonContactPushNameSearchEnabled = m));
  },
  98,
);
