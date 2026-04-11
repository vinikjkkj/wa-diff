__d(
  "cometComposedTextV2GenAiBotProgressStatusPrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders")
            .buildProgressStatusNode(
              e.icon,
              e.is_in_progress,
              e.meta_search_apps,
              e.target_secondary_screen_id,
              e.target_secondary_screen_tab_id,
            )
            .append(
              o("cometComposedTextV2NodeBuilders").buildTextNode(e.title),
            ),
        );
    }
    l.default = e;
  },
  98,
);
