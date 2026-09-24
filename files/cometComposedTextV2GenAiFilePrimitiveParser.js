__d(
  "cometComposedTextV2GenAiFilePrimitiveParser",
  ["cometComposedTextV2NodeBuilders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n, r;
      return e.url.trim() === ""
        ? null
        : o("cometComposedTextV2NodeBuilders")
            .buildRootNode()
            .append(
              o("cometComposedTextV2NodeBuilders").buildFileNode({
                fileExtension: e.file_extension,
                fileLength: e.file_length,
                nodeType: "file",
                pageCount: e.page_count,
                previewImageUrl:
                  (t = (n = e.preview_image) == null ? void 0 : n.url) != null
                    ? t
                    : (r = e.preview_image) == null
                      ? void 0
                      : r.url_fallback,
                title: e.title,
                url: e.url,
              }),
            );
    }
    l.default = e;
  },
  98,
);
