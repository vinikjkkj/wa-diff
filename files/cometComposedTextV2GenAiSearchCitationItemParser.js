__d(
  "cometComposedTextV2GenAiSearchCitationItemParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n,
        r,
        a,
        i,
        l = t.normalize("NFKC");
      return e.sources && e.sources.length > 0
        ? e.sources.map(function (t, n) {
            var r, a, i, s;
            return o("cometComposedTextV2NodeBuilders").buildCitationNode(
              (r = t.source_url) != null ? r : "#",
              t.source_type,
              !0,
              (a = t.source_display_name) != null ? a : l,
              t.source_subtitle,
              (i = t.favicon) == null ? void 0 : i.url,
              (s = e.sources) != null ? s : void 0,
              n,
            );
          })
        : [
            o("cometComposedTextV2NodeBuilders").buildCitationNode(
              e.reference_url,
              (n = e.sources) == null || (n = n[0]) == null
                ? void 0
                : n.source_type,
              !0,
              (r =
                (a = e.reference_display_name) != null
                  ? a
                  : e.reference_title) != null
                ? r
                : l,
              e.reference_title,
              (i = e.reference_favicon) == null ? void 0 : i.url,
            ),
          ];
    }
    l.default = e;
  },
  98,
);
