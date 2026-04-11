__d(
  "WAWebABPropsSaga",
  ["WAWebABProps"],
  function (t, n, r, o, a, i, l) {
    function e() {
      return o("WAWebABProps").getABPropConfigValue("saga_v1_enabled");
    }
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "saga_v1_reengagement_enabled",
      );
    }
    function u() {
      return o("WAWebABProps").getABPropConfigValue("saga_v1_carousel");
    }
    function c() {
      return o("WAWebABProps").getABPropConfigValue(
        "saga_protobuf_ai_stardust_web",
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue("saga_v1_nux_enabled");
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "support_message_feedback_enabled",
      );
    }
    ((l.getIsSagaV1Enabled = e),
      (l.getIsSagaV1ReengagementEnabled = s),
      (l.getIsSagaV1CarouselEnabled = u),
      (l.getIsSagaProtobufAIStardustEnabled = c),
      (l.getIsSagaV1NuxEnabled = d),
      (l.getSagaFeedbackEnabled = m));
  },
  98,
);
