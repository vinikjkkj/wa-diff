__d(
  "WAWebBizBroadcastGenAIGating",
  ["WALogger", "WAWebABProps", "WAWebL10nGetRenderedLocale", "countWhere"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_genai_master_abprop",
      );
    }
    function u() {
      var e = o("WAWebABProps").getABPropConfigValue(
          "web_business_broadcast_genai_text_languages",
        ),
        t = o("WAWebL10nGetRenderedLocale")
          .WAWebL10nGetRenderedLocale()
          .split("_")[0];
      return e
        .split(",")
        .map(function (e) {
          return e.trim();
        })
        .includes(t);
    }
    function c() {
      return (
        s() &&
        u() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_text",
        )
      );
    }
    function d() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_custom_user_prompt_enabled",
        )
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_bb_genai_composer_min_words",
      );
    }
    function p() {
      return o("WAWebABProps").getABPropConfigValue(
        "smba_business_broadcast_genai_text_max_tries",
      );
    }
    function _() {
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
    function f() {
      return (
        c() &&
        o("WAWebABProps").getABPropConfigValue(
          "smba_business_broadcast_genai_share_message_history",
        )
      );
    }
    function g(e) {
      return r("countWhere")(e.split(/\W+/), Boolean);
    }
    ((l.isGenAITextSupportedLocale = u),
      (l.isGenAITextEnabled = c),
      (l.isGenAICustomUserPromptEnabled = d),
      (l.getGenAIComposerMinWords = m),
      (l.getGenAIMaxDaily = p),
      (l.getGenAIModel = _),
      (l.isMessageHistoryEnabled = f),
      (l.countWords = g));
  },
  98,
);
