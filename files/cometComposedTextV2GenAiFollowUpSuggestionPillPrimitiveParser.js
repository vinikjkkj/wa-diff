__d(
  "cometComposedTextV2GenAiFollowUpSuggestionPillPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildTextNode(
            "\uD83D\uDD0D " + e.prompt_text,
          ),
        );
    }
    l.default = e;
  },
  98,
);
