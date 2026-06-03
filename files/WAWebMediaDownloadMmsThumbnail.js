__d(
  "WAWebMediaDownloadMmsThumbnail",
  [
    "Promise",
    "WAAbortError",
    "WABase64",
    "WALogger",
    "WANullthrows",
    "WAWebDownloadManager",
    "WAWebFrontendMsgGetters",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c, d, m, p, _, f, g;
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.chat,
            a = t.isPreload,
            i = t.msg,
            l = t.signal,
            m = o("WAWebFrontendMsgGetters").getAsUrl(i.unsafe()),
            p = m == null ? void 0 : m.faviconMMSMetadata,
            _ = p == null ? void 0 : p.thumbnailSha256;
          if (
            !(
              m == null ||
              p == null ||
              r("isStringNullOrEmpty")(p.thumbnailDirectPath) ||
              _ == null
            ) &&
            !(
              o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
                i,
              ) &&
              (p.thumbnailEncSha256 == null ||
                p.mediaKey == null ||
                p.mediaKeyTimestamp == null)
            )
          ) {
            var f = p.thumbnail == null;
            if (!f) {
              o("WALogger").LOG(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMMSFavicon: skipping",
                  ])),
              );
              return;
            }
            o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "media.downloadMMSFavicon: start",
                ])),
            );
            var g = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadMmsFavicon",
            });
            try {
              var h = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: p.thumbnailDirectPath,
                encFilehash: p.thumbnailEncSha256,
                filehash: _,
                mediaKey: p.mediaKey,
                mediaKeyTimestamp: p.mediaKeyTimestamp,
                type: r("WANullthrows")(
                  o(
                    "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
                  ).getThumbnailTypeForMediaMsg({ msg: i }),
                ),
                signal: l || new AbortController().signal,
                userDownloadAttemptCount: 0,
                isPreload: a,
                chatWid: n == null ? void 0 : n.id,
                downloadQpl: g,
                downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                  i.unsafe(),
                ),
              });
              if (h) {
                var y = o("WABase64").encodeB64(h);
                ((m.faviconMMSMetadata = babelHelpers.extends(
                  {},
                  m.faviconMMSMetadata,
                  { thumbnail: y },
                )),
                  g.endSuccess(),
                  o("WALogger").LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMMSFavicon: success",
                      ])),
                  ));
              }
            } catch (e) {
              var C = r("getErrorSafe")(e);
              if (C.name === o("WAAbortError").ABORT_ERROR) {
                (o("WALogger").LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "media.downloadMMSFavicon aborted",
                    ])),
                ),
                  g.endFailWithError("download_aborted", "Download aborted"));
                return;
              }
              (g.endFailWithError("download_failed", C.message),
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose(
                        ["media.downloadMMSFavicon: error\n", ""],
                        ["media.downloadMMSFavicon: error\\n", ""],
                      )),
                    r("WAWebSerializeError")(C),
                  )
                  .verbose());
            }
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.chat,
            n = e.isPreload,
            a = e.msg,
            i = e.signal,
            l = a.mediaKey,
            s = a.mediaKeyTimestamp,
            u = a.thumbnailDirectPath,
            c = a.thumbnailEncSha256,
            d = a.thumbnailSha256;
          if (
            !(r("isStringNullOrEmpty")(u) || r("isStringNullOrEmpty")(d)) &&
            !(
              o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
                a,
              ) &&
              (c == null || l == null || s == null)
            ) &&
            !(
              (a.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
                a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) &&
              o("WAWebMmsMediaTypes").getMsgMediaType(a) ===
                o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
              (a.thumbnailHeight == null || a.thumbnailWidth == null)
            )
          ) {
            var g = o("WAWebFrontendMsgGetters").getAsUrl(a.unsafe());
            if (
              !(g && (g.thumbnailHeight == null || g.thumbnailWidth == null))
            ) {
              o("WALogger").LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "media.downloadMmsThumbnail: start",
                  ])),
              );
              var h = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                entryPoint: "DownloadMmsThumbnail",
              });
              try {
                var y = yield o(
                  "WAWebDownloadManager",
                ).downloadManager.downloadAndMaybeDecrypt({
                  directPath: u,
                  encFilehash: c,
                  filehash: d,
                  mediaKey: l,
                  mediaKeyTimestamp: s,
                  type: r("WANullthrows")(
                    o(
                      "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
                    ).getThumbnailTypeForMediaMsg({ msg: a }),
                  ),
                  signal: i || new AbortController().signal,
                  userDownloadAttemptCount: 0,
                  isPreload: n,
                  chatWid: t == null ? void 0 : t.id,
                  downloadQpl: h,
                  downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                    a.unsafe(),
                  ),
                });
                if (g) g.thumbnailHQ = o("WABase64").encodeB64(y);
                else {
                  var C = r("WANullthrows")(
                      a.mediaObject,
                      "mediaObject cannot be null for thumbnail download",
                    ),
                    b = {
                      fullPreviewData: yield r(
                        "WAWebMediaOpaqueData",
                      ).createFromData(y, "image/jpeg"),
                    };
                  (a.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                    (b.fullPreviewSize = {
                      height: r("WANullthrows")(a.thumbnailHeight),
                      width: r("WANullthrows")(a.thumbnailWidth),
                    }),
                    C.consolidate(b));
                }
                (h.endSuccess(),
                  o("WALogger").LOG(
                    p ||
                      (p = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMmsThumbnail: success",
                      ])),
                  ));
              } catch (e) {
                var v = r("getErrorSafe")(e);
                if (v.name === o("WAAbortError").ABORT_ERROR) {
                  (o("WALogger").LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "media.downloadMmsThumbnail aborted",
                      ])),
                  ),
                    h.endFailWithError("download_aborted", "Download aborted"));
                  return;
                }
                (h.endFailWithError("download_failed", v.message),
                  o("WALogger")
                    .WARN(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose(
                          ["media.downloadMmsThumbnail: error\n", ""],
                          ["media.downloadMmsThumbnail: error\\n", ""],
                        )),
                      r("WAWebSerializeError")(v),
                    )
                    .verbose());
              }
            }
          }
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield (g || (g = n("Promise"))).all([h(e), C(e)]);
        })),
        S.apply(this, arguments)
      );
    }
    l.default = v;
  },
  98,
);
