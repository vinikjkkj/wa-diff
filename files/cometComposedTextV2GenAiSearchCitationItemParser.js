__d(
  "cometComposedTextV2GenAiSearchCitationItemParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a = t.normalize("NFKC");
      return e.sources && e.sources.length > 0
        ? e.sources.map(function (e) {
            var t, n;
            return o("cometComposedTextV2NodeBuilders").buildCitationNode(
              (t = e.source_url) != null ? t : "#",
              e.source_type,
              !0,
              (n = e.source_display_name) != null ? n : a,
            );
          })
        : [
            o("cometComposedTextV2NodeBuilders").buildCitationNode(
              e.reference_url,
              (n = e.sources) == null || (n = n[0]) == null
                ? void 0
                : n.source_type,
              !0,
              (r = e.reference_display_name) != null ? r : a,
            ),
          ];
    }
    l.default = e;
  },
  98,
);
