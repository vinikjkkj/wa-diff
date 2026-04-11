__d(
  "WAWebMediaDownloadMmsMusicArtwork",
  [
    "WAAbortError",
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMmsMediaTypes",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s;
    function u(e) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.msg,
            a = t.musicMetadata,
            i = t.signal,
            l = a.artworkDirectPath,
            u = a.artworkEncSha256,
            c = a.artworkSha256;
          if (!(l == null || c == null)) {
            var d = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadMusicArtwork",
            });
            try {
              var m = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt({
                  directPath: l,
                  encFilehash: u,
                  filehash: c,
                  mediaKey: a.artworkMediaKey,
                  signal: i || new AbortController().signal,
                  type: n.id.remote.isNewsletter()
                    ? o("WAWebMmsMediaTypes").MEDIA_TYPES
                        .NEWSLETTER_MUSIC_ARTWORK
                    : o("WAWebMmsMediaTypes").MEDIA_TYPES.MUSIC_ARTWORK,
                  userDownloadAttemptCount: 0,
                  downloadQpl: d,
                  downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(n),
                }),
                p = o("WABase64").encodeB64(m);
              return ((n.musicArtwork = p), p);
            } catch (t) {
              if (t.name === o("WAAbortError").ABORT_ERROR) {
                (o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "media.downloadMusicArtwork aborted",
                    ])),
                ),
                  d.endFailWithError("download_aborted", "Download aborted"));
                return;
              }
              (d.endFailWithError(
                "download_failed",
                r("getErrorSafe")(t).message,
              ),
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMusicArtwork",
                      ])),
                  )
                  .verbose());
            }
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.downloadMusicArtwork = u;
  },
  98,
);
