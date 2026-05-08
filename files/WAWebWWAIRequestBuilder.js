__d(
  "WAWebWWAIRequestBuilder",
  ["WAWebABProps", "WAWebWWAIConstants", "WAWebWWAIMentionAnonymizer"],
  function (t, n, r, o, a, i, l) {
    var e = 0;
    function s(e, t, n) {
      var r = o("WAWebWWAIMentionAnonymizer").anonymizeMentions(e, n),
        a = r.mentionMap,
        i = r.text,
        l = i
          .slice(0, o("WAWebWWAIConstants").MAX_TEXT_LENGTH)
          .replace(/__MENTION_\d*_?$/, ""),
        s = {
          text: l,
          tone: t,
          numSuggestions: c(),
          requestId: u(),
          languageCode: d(),
        };
      return { request: s, mentionMap: a };
    }
    function u() {
      return ((e += 1), "wwai_" + Date.now() + "_" + e);
    }
    function c() {
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
    function d() {
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
    l.buildRewriteRequest = s;
  },
  98,
);
