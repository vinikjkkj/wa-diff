__d(
  "WAWebBizBroadcastGenAIGating",
  ["WALogger", "WAWebABProps", "countWhere"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_genai_master_abprop",
      );
    }
    function u() {
      return (
        s() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_text",
        )
      );
    }
    function c() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_custom_user_prompt_enabled",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_bb_genai_composer_min_words",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_genai_text_max_tries",
      );
    }
    function p() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_genai_text_model",
      );
      return t === "MGEN"
        ? "MGEN"
        : (t !== "LLAMA" &&
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[broadcast:genai] Unexpected genai model value: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("genai-invalid-model"),
          "LLAMA");
    }
    function _() {
      return (
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_share_message_history",
        )
      );
    }
    function f(e) {
      return r("countWhere")(e.split(/\W+/), Boolean);
    }
    ((l.isGenAIMasterEnabled = s),
      (l.isGenAITextEnabled = u),
      (l.isGenAICustomUserPromptEnabled = c),
      (l.getGenAIComposerMinWords = d),
      (l.getGenAIMaxDaily = m),
      (l.getGenAIModel = p),
      (l.isMessageHistoryEnabled = _),
      (l.countWords = f));
  },
  98,
);
