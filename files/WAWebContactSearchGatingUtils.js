__d(
  "WAWebContactSearchGatingUtils",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_enabled",
      );
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_distance_threshold",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_timeout_threshold",
      );
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_and_chat_fuzzy_search_similarity_optimization_enabled",
      );
    }
    function d() {
      var e = s();
      return e <= 0 ? 1 / 0 : Math.ceil(1 / e);
    }
    function m(e) {
      if (!c()) return !0;
      var t = d();
      return e.every(function (e) {
        return e.length >= t;
      });
    }
    function p() {
      return (
        e() &&
        o("WAWebABProps").getABPropConfigValue(
          "wa_web_contact_and_chat_fuzzy_search_async_enabled",
        )
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_global_search_prefix_based",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_contact_search_tokenized_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_push_name_in_global_search_non_contacts_enabled",
      );
    }
    ((l.isFuzzySearchEnabled = e),
      (l.getFuzzySearchDistanceThreshold = s),
      (l.getFuzzySearchTimeoutThreshold = u),
      (l.canTermsMeetFuzzySearchThreshold = m),
      (l.isAsyncFuzzySearchEnabled = p),
      (l.isPrefixSearchEnabled = _),
      (l.isTokenizedSearchEnabled = f),
      (l.isNonContactPushNameSearchEnabled = g));
  },
  98,
);
