__d(
  "WAWebWWAIRequestBuilder",
  [
    "WAWebABProps",
    "WAWebPonyfillsCryptoRandomUUID",
    "WAWebWWAIConstants",
    "WAWebWWAIMentionAnonymizer",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t, n) {
      var r = o("WAWebWWAIMentionAnonymizer").anonymizeMentions(e, n),
        a = r.mentionMap,
        i = r.text,
        l = i
          .slice(0, o("WAWebWWAIConstants").MAX_TEXT_LENGTH)
          .replace(/__MENTION_\d*_?$/, ""),
        d = {
          text: l,
          tone: t,
          numSuggestions: u(),
          requestId: s(),
          languageCode: c(),
        };
      return { request: d, mentionMap: a };
    }
    function s() {
      return "wwai_" + r("WAWebPonyfillsCryptoRandomUUID")();
    }
    function u() {
      try {
        var e = o("WAWebABProps").getABPropConfigValue(
          "ai_rewrite_num_suggestions",
        );
        return typeof e == "number"
          ? e
          : o("WAWebWWAIConstants").DEFAULT_NUM_SUGGESTIONS;
      } catch (e) {
        return o("WAWebWWAIConstants").DEFAULT_NUM_SUGGESTIONS;
      }
    }
    function c() {
      try {
        var e = o("WAWebABProps").getABPropConfigValue(
          "ai_rewrite_supported_languages",
        );
        if (typeof e == "string") {
          var t = e.split(",")[0].trim();
          if (t.length > 0) return t;
        }
      } catch (e) {}
      return "en";
    }
    l.buildRewriteRequest = e;
  },
  98,
);
