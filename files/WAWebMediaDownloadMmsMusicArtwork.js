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
            l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadMusicArtwork",
            }),
            u = a.artworkDirectPath,
            c = a.artworkEncSha256,
            d = a.artworkSha256;
          if (u == null || d == null) {
            l.endFail("missing_artwork_download_metadata", {
              string: { earlyExitReason: "missing_artwork_download_metadata" },
            });
            return;
          }
          try {
            var m = yield o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt({
              directPath: u,
              encFilehash: c,
              filehash: d,
              mediaKey: a.artworkMediaKey,
              signal: i || new AbortController().signal,
              type: n.id.remote.isNewsletter()
                ? o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_MUSIC_ARTWORK
                : o("WAWebMmsMediaTypes").MEDIA_TYPES.MUSIC_ARTWORK,
              userDownloadAttemptCount: 0,
              downloadQpl: l,
              downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(n),
            });
            l.addPoint("music_artwork_store_start");
            var p = o("WABase64").encodeB64(m);
            return (
              (n.musicArtwork = p),
              l.addPoint("music_artwork_store_end"),
              l.endSuccess(),
              p
            );
          } catch (t) {
            var _ = r("getErrorSafe")(t);
            if (_.name === o("WAAbortError").ABORT_ERROR) {
              (o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMusicArtwork aborted",
                  ])),
              ),
                l.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (l.endFailWithError("download_failed", _.message),
              o("WALogger")
                .WARN(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "media.downloadMusicArtwork",
                    ])),
                )
                .verbose());
          }
        })),
        c.apply(this, arguments)
      );
    }
    l.downloadMusicArtwork = u;
  },
  98,
);
