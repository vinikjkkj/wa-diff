__d(
  "WAWebWindowsSharesheetHelpers",
  [
    "WALogger",
    "WAWebWindowsMediaFilesHelpers",
    "asyncToGeneratorRuntime",
    "cr:17219",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var a,
            i = o("WAWebWindowsMediaFilesHelpers").getMediaFileInfo(t);
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[shareFile] Starting to save media file for msg ",
                "",
              ])),
            t.id.toString(),
          );
          var l =
            n("cr:17219") == null ||
            (a = n("cr:17219").getWindowsBridge()) == null
              ? void 0
              : a.sharesheetBridge;
          l
            ? i != null
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[shareFile] Sharing file for msg ",
                      "",
                    ])),
                  t.id.toString(),
                ),
                yield l.shareFile(
                  i == null ? void 0 : i.mediaFileHash,
                  i == null ? void 0 : i.suggestedFileName,
                ))
              : (o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[shareFile] Failed to get media info for msg ",
                      "",
                    ])),
                  t.id.toString(),
                ),
                r("err")("Failed to get media info or media files bridge"))
            : (o("WALogger").ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[shareFile] Sharesheet bridge not supported in this version",
                  ])),
              ),
              r("err")("Sharesheet bridge not supported in this version"));
        })),
        m.apply(this, arguments)
      );
    }
    l.shareFile = d;
  },
  98,
);
