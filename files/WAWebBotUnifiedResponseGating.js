__d(
  "WAWebBotUnifiedResponseGating",
  ["WAWebABProps", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_imagine_receiver_web_enabled",
      );
    }
    function s(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_receiver_web_timestamp_v2",
      );
      return e != null && e >= t;
    }
    function u(e) {
      var t = o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_forwarding_sender_web_timestamp",
      );
      return e != null && e >= t;
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_sender_web_enabled",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_mutation_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_post_citations_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_zeitgeist_carousel_enabled",
      );
    }
    function _() {
      return r("gkx")("6940");
    }
    ((l.isUnifiedResponseImagineReceiverEnabled = e),
      (l.isUnifiedResponseReceiverEnabled = s),
      (l.isAiRichResponseForwardingSenderEnabled = u),
      (l.isUnifiedResponseSendingEnabled = c),
      (l.isUnifiedResponseMutationEnabled = d),
      (l.isUrZeitgeistCitationsEnabled = m),
      (l.isUrZeitgeistCarouselEnabled = p),
      (l.isFoABloksNodeRendererEnabled = _));
  },
  98,
);
