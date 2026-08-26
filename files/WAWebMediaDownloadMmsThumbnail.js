__d(
  "WAWebMediaDownloadMmsThumbnail",
  [
    "Promise",
    "WAAbortError",
    "WABase64",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebExperienceIdWamFields",
    "WAWebFrontendMsgGetters",
    "WAWebMediaCryptoEligibilityUtils",
    "WAWebMediaGetDownloadOriginForMsg",
    "WAWebMediaOpaqueData",
    "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
    "WAWebMmsMediaTypes",
    "WAWebMsgType",
    "WAWebSerializeError",
    "WAWebStartMediaDownloadQpl",
    "WAWebThumbnailOutcomeLogger",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isStringNullOrEmpty",
    "nullthrows",
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
                i.unsafe(),
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
                type: r("nullthrows")(
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
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
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
          if (!(r("isStringNullOrEmpty")(u) || r("isStringNullOrEmpty")(d))) {
            var g = o(
              "WAWebMediaCryptoEligibilityUtils",
            ).isMediaCryptoExpectedForMsg(a.unsafe());
            if (
              !(g && (c == null || l == null || s == null)) &&
              !(
                (a.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
                  a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) &&
                o("WAWebMmsMediaTypes").getMsgMediaType(a) ===
                  o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
                (a.thumbnailHeight == null || a.thumbnailWidth == null)
              )
            ) {
              var h = o("WAWebFrontendMsgGetters").getAsUrl(a.unsafe());
              if (
                !(h && (h.thumbnailHeight == null || h.thumbnailWidth == null))
              ) {
                o("WALogger").LOG(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "media.downloadMmsThumbnail: start",
                    ])),
                );
                var y = r("WAWebMediaGetDownloadOriginForMsg")(a.unsafe()),
                  C = {
                    callsite: "DOWNLOAD_MMS_THUMBNAIL",
                    downloadOrigin: o(
                      "WAWebThumbnailOutcomeLogger",
                    ).thumbnailDownloadOriginFromWam(y),
                    isEncrypted: g,
                    mediaType: o(
                      "WAWebThumbnailOutcomeLogger",
                    ).thumbnailMediaTypeFromMsgType(
                      a.type,
                      a.type === o("WAWebMsgType").MSG_TYPE.VIDEO &&
                        a.isGif === !0,
                    ),
                  },
                  b = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
                    entryPoint: "DownloadMmsThumbnail",
                  });
                try {
                  var v = yield o(
                      "WAWebDownloadManager",
                    ).downloadManager.downloadAndMaybeDecrypt({
                      directPath: u,
                      encFilehash: c,
                      filehash: d,
                      mediaKey: l,
                      mediaKeyTimestamp: s,
                      type: r("nullthrows")(
                        o(
                          "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
                        ).getThumbnailTypeForMediaMsg({ msg: a }),
                      ),
                      signal: i || new AbortController().signal,
                      userDownloadAttemptCount: 0,
                      isPreload: n,
                      chatWid: t == null ? void 0 : t.id,
                      downloadQpl: b,
                      downloadOrigin: y,
                      experienceIds: o(
                        "WAWebExperienceIdWamFields",
                      ).getExperienceIds(a.unsafe()),
                    }),
                    S = self.performance.now();
                  if (h) h.thumbnailHQ = o("WABase64").encodeB64(v);
                  else {
                    var R = r("nullthrows")(
                        a.mediaObject,
                        "mediaObject cannot be null for thumbnail download",
                      ),
                      L = {
                        fullPreviewData: yield r(
                          "WAWebMediaOpaqueData",
                        ).createFromData(v, "image/jpeg"),
                      };
                    (a.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT &&
                      (L.fullPreviewSize = {
                        height: r("nullthrows")(a.thumbnailHeight),
                        width: r("nullthrows")(a.thumbnailWidth),
                      }),
                      R.consolidate(L));
                  }
                  (b.endSuccess(),
                    o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                      branch: "SERVER_THUMBNAIL",
                      checkPerformed: !1,
                      context: C,
                      generationDurationMs: self.performance.now() - S,
                      outcome: "OK",
                    }),
                    o("WALogger").LOG(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "media.downloadMmsThumbnail: success",
                        ])),
                    ));
                } catch (e) {
                  var E = r("getErrorSafe")(e);
                  if (E.name === o("WAAbortError").ABORT_ERROR) {
                    (o("WALogger").LOG(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "media.downloadMmsThumbnail aborted",
                        ])),
                    ),
                      b.endFailWithError(
                        "download_aborted",
                        "Download aborted",
                      ));
                    return;
                  }
                  (b.endFailWithError("download_failed", E.message),
                    o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                      branch: "SERVER_THUMBNAIL",
                      checkPerformed: !1,
                      context: C,
                      generationDurationMs: null,
                      outcome: "ERROR",
                    }),
                    o("WALogger")
                      .WARN(
                        f ||
                          (f = babelHelpers.taggedTemplateLiteralLoose(
                            ["media.downloadMmsThumbnail: error\n", ""],
                            ["media.downloadMmsThumbnail: error\\n", ""],
                          )),
                        r("WAWebSerializeError")(E),
                      )
                      .verbose());
                }
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
