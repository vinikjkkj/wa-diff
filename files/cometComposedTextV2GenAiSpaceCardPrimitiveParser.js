__d(
  "cometComposedTextV2GenAiSpaceCardPrimitiveParser",
  [
    "MSGDataclassTypes.flow",
    "cometComposedTextV2IsSafeHttpsUrl",
    "cometComposedTextV2NodeBuilders",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      o("MSGDataclassTypes.flow").GenAiSpaceSource.Local,
      o("MSGDataclassTypes.flow").GenAiSpaceSource.Saved,
    ]);
    function s(t) {
      var n = d(t.display_name);
      if (n == null || !e.has(t.source)) return null;
      var r = c(t.icon);
      return o("cometComposedTextV2NodeBuilders")
        .buildRootNode()
        .append(
          o("cometComposedTextV2NodeBuilders").buildSpaceCardNode({
            artifactRef: t.artifact_ref,
            canOpen: !!t.can_open,
            displayName: n,
            icon: r,
            nodeType: "spaceCard",
            shareUrl: u(t.share_url),
            slug: d(t.slug),
            source: t.source,
            sourceUrl: u(t.source_url),
            status: t.status,
            thumbnail: c(t.thumbnail),
            xmdsIcon: r == null ? d(t.xmds_icon) : null,
          }),
        );
    }
    function u(e) {
      return e != null && r("cometComposedTextV2IsSafeHttpsUrl")(e) ? e : null;
    }
    function c(e) {
      return e == null ||
        d(e.direct_path) == null ||
        d(e.media_key) == null ||
        d(e.file_sha256) == null ||
        d(e.file_enc_sha256) == null ||
        d(e.mime_type) == null
        ? null
        : e;
    }
    function d(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    l.default = s;
  },
  98,
);
