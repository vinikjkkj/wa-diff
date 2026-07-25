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
        "wa_web_imagine_ur_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_ur_imagine_video_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_grid_image_enabled",
      );
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_ur_bloks_enabled");
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_post_citations_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_zeitgeist_carousel_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_inline_links_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_ur_media_grid_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_ai_in_app_survey_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_side_by_side_survey_enabled",
      );
    }
    function S() {
      return r("gkx")("6940");
    }
    function R() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_rich_response_replying_enabled",
      );
    }
    ((l.isUnifiedResponseImagineReceiverEnabled = e),
      (l.isUnifiedResponseReceiverEnabled = s),
      (l.isAiRichResponseForwardingSenderEnabled = u),
      (l.isUnifiedResponseSendingEnabled = c),
      (l.isUnifiedResponseMutationEnabled = d),
      (l.isImagineUrEnabled = m),
      (l.isUrImagineVideoEnabled = p),
      (l.isRichResponseGridImageEnabled = _),
      (l.isUrBloksEnabled = f),
      (l.isUrZeitgeistCitationsEnabled = g),
      (l.isUrZeitgeistCarouselEnabled = h),
      (l.isRichResponseInlineLinksEnabled = y),
      (l.isUrMediaGridEnabled = C),
      (l.isRichResponseInAppSurveyEnabled = b),
      (l.isRichResponseSideBySideSurveyEnabled = v),
      (l.isFoABloksNodeRendererEnabled = S),
      (l.isReplyToRichResponseEnabled = R));
  },
  98,
);
