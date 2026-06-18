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
          "web_business_broadcast_genai_text",
        )
      );
    }
    function d() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_bb_genai_composer_min_words",
      );
    }
    function m() {
      return o("WAWebABProps").getABPropConfigValue(
        "web_business_broadcast_genai_text_max_tries",
      );
    }
    function p() {
      var t = o("WAWebABProps").getABPropConfigValue(
        "web_business_broadcast_genai_text_model",
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
    function _(e) {
      return r("countWhere")(e.split(/\W+/), Boolean);
    }
    ((l.isGenAIMasterEnabled = s),
      (l.isGenAITextSupportedLocale = u),
      (l.isGenAITextEnabled = c),
      (l.getGenAIComposerMinWords = d),
      (l.getGenAIMaxDaily = m),
      (l.getGenAIModel = p),
      (l.countWords = _));
  },
  98,
);
