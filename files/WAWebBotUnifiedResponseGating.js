__d(
  "WAWebBotUnifiedResponseGating",
  ["WAWebABProps", "WAWebBotBaseGating", "gkx"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return (
        o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled() &&
        o("WAWebABProps").getABPropConfigValue(
          "ai_unified_response_imagine_receiver_web_enabled",
        )
      );
    }
    function s(e) {
      return (
        (o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled() &&
          o("WAWebABProps").getABPropConfigValue(
            "ai_unified_response_receiver_web_enabled",
          )) ||
        u(e)
      );
    }
    function u(e) {
      if (
        !o("WAWebBotBaseGating").isRichStructuredResponseReceiverEnabled() ||
        !o("WAWebABProps").getABPropConfigValue(
          "ai_unified_response_receiver_web_enabled_v2",
        )
      )
        return !1;
      var t = o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_receiver_web_timestamp_v2",
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
        "wa_web_imagine_ur_enabled",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "wa_web_ur_imagine_video_enabled",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_grid_image_enabled",
      );
    }
    function _() {
      return o("WAWebABProps").getABPropConfigValue("wa_web_ur_bloks_enabled");
    }
    function f() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_post_citations_enabled",
      );
    }
    function g() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_zeitgeist_carousel_enabled",
      );
    }
    function h() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_inline_links_enabled",
      );
    }
    function y() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_ur_media_grid_enabled",
      );
    }
    function C() {
      return o("WAWebABProps").getABPropConfigValue(
        "meta_ai_in_app_survey_enabled",
      );
    }
    function b() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_rich_response_side_by_side_survey_enabled",
      );
    }
    function v() {
      return o("WAWebABProps").getABPropConfigValue(
        "ai_unified_response_qpl_logging",
      );
    }
    function S() {
      return r("gkx")("6940");
    }
    ((l.isUnifiedResponseImagineReceiverEnabled = e),
      (l.isUnifiedResponseReceiverEnabled = s),
      (l.isUnifiedResponseSendingEnabled = c),
      (l.isImagineUrEnabled = d),
      (l.isUrImagineVideoEnabled = m),
      (l.isRichResponseGridImageEnabled = p),
      (l.isUrBloksEnabled = _),
      (l.isUrZeitgeistCitationsEnabled = f),
      (l.isUrZeitgeistCarouselEnabled = g),
      (l.isRichResponseInlineLinksEnabled = h),
      (l.isUrMediaGridEnabled = y),
      (l.isRichResponseInAppSurveyEnabled = C),
      (l.isRichResponseSideBySideSurveyEnabled = b),
      (l.isUnifiedResponseQPLLoggingEnabled = v),
      (l.isFoABloksNodeRendererEnabled = S));
  },
  98,
);
