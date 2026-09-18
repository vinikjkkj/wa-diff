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
            m = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadMmsFavicon",
            }),
            p = o("WAWebFrontendMsgGetters").getAsUrl(i.unsafe()),
            _ = p == null ? void 0 : p.faviconMMSMetadata,
            f = _ == null ? void 0 : _.thumbnailSha256;
          if (
            p == null ||
            _ == null ||
            r("isStringNullOrEmpty")(_.thumbnailDirectPath) ||
            f == null
          ) {
            m.endFail("missing_favicon_download_metadata", {
              string: { earlyExitReason: "missing_favicon_download_metadata" },
            });
            return;
          }
          if (
            o("WAWebMediaCryptoEligibilityUtils").isMediaCryptoExpectedForMsg(
              i.unsafe(),
            ) &&
            (_.thumbnailEncSha256 == null ||
              _.mediaKey == null ||
              _.mediaKeyTimestamp == null)
          ) {
            m.endFail("missing_favicon_crypto_metadata", {
              string: { earlyExitReason: "missing_favicon_crypto_metadata" },
            });
            return;
          }
          var g = _.thumbnail == null;
          if (!g) {
            (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "media.downloadMMSFavicon: skipping",
                ])),
            ),
              m.endSuccess({ string: { downloadResult: "existing_favicon" } }));
            return;
          }
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadMMSFavicon: start",
              ])),
          );
          try {
            var h = yield o(
              "WAWebDownloadManager",
            ).downloadManager.downloadAndMaybeDecrypt({
              directPath: _.thumbnailDirectPath,
              encFilehash: _.thumbnailEncSha256,
              filehash: f,
              mediaKey: _.mediaKey,
              mediaKeyTimestamp: _.mediaKeyTimestamp,
              type: r("nullthrows")(
                o(
                  "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
                ).getThumbnailTypeForMediaMsg({ msg: i }),
              ),
              signal: l || new AbortController().signal,
              userDownloadAttemptCount: 0,
              isPreload: a,
              chatWid: n == null ? void 0 : n.id,
              downloadQpl: m,
              downloadOrigin: r("WAWebMediaGetDownloadOriginForMsg")(
                i.unsafe(),
              ),
              experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
                i.unsafe(),
              ),
            });
            if (h) {
              m.addPoint("favicon_store_start");
              var y = o("WABase64").encodeB64(h);
              ((p.faviconMMSMetadata = babelHelpers.extends(
                {},
                p.faviconMMSMetadata,
                { thumbnail: y },
              )),
                m.addPoint("favicon_store_end"),
                m.endSuccess(),
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
                m.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (m.endFailWithError("download_failed", C.message),
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
            l = o("WAWebStartMediaDownloadQpl").startMediaDownloadQpl({
              entryPoint: "DownloadMmsThumbnail",
            }),
            s = a.mediaKey,
            u = a.mediaKeyTimestamp,
            c = a.thumbnailDirectPath,
            d = a.thumbnailEncSha256,
            g = a.thumbnailSha256;
          if (r("isStringNullOrEmpty")(c) || r("isStringNullOrEmpty")(g)) {
            l.endFail("missing_thumbnail_download_metadata", {
              string: {
                earlyExitReason: "missing_thumbnail_download_metadata",
              },
            });
            return;
          }
          var h = o(
            "WAWebMediaCryptoEligibilityUtils",
          ).isMediaCryptoExpectedForMsg(a.unsafe());
          if (h && (d == null || s == null || u == null)) {
            l.endFail("missing_thumbnail_crypto_metadata", {
              string: { earlyExitReason: "missing_thumbnail_crypto_metadata" },
            });
            return;
          }
          if (
            (a.type === o("WAWebMsgType").MSG_TYPE.DOCUMENT ||
              a.type === o("WAWebMsgType").MSG_TYPE.INTERACTIVE) &&
            o("WAWebMmsMediaTypes").getMsgMediaType(a) ===
              o("WAWebMmsMediaTypes").MEDIA_TYPES.DOCUMENT &&
            (a.thumbnailHeight == null || a.thumbnailWidth == null)
          ) {
            l.endFail("missing_document_thumbnail_dimensions", {
              string: {
                earlyExitReason: "missing_document_thumbnail_dimensions",
              },
            });
            return;
          }
          var y = o("WAWebFrontendMsgGetters").getAsUrl(a.unsafe());
          if (y && (y.thumbnailHeight == null || y.thumbnailWidth == null)) {
            l.endFail("missing_link_thumbnail_dimensions", {
              string: { earlyExitReason: "missing_link_thumbnail_dimensions" },
            });
            return;
          }
          o("WALogger").LOG(
            m ||
              (m = babelHelpers.taggedTemplateLiteralLoose([
                "media.downloadMmsThumbnail: start",
              ])),
          );
          var C = r("WAWebMediaGetDownloadOriginForMsg")(a.unsafe()),
            b = {
              callsite: "DOWNLOAD_MMS_THUMBNAIL",
              downloadOrigin: o(
                "WAWebThumbnailOutcomeLogger",
              ).thumbnailDownloadOriginFromWam(C),
              isEncrypted: h,
              mediaType: o(
                "WAWebThumbnailOutcomeLogger",
              ).thumbnailMediaTypeFromMsgType(
                a.type,
                a.type === o("WAWebMsgType").MSG_TYPE.VIDEO && a.isGif === !0,
              ),
            };
          try {
            var v = yield o(
                "WAWebDownloadManager",
              ).downloadManager.downloadAndMaybeDecrypt({
                directPath: c,
                encFilehash: d,
                filehash: g,
                mediaKey: s,
                mediaKeyTimestamp: u,
                type: r("nullthrows")(
                  o(
                    "WAWebMessagePluginGetThumbnailTypeForMediaMsg",
                  ).getThumbnailTypeForMediaMsg({ msg: a }),
                ),
                signal: i || new AbortController().signal,
                userDownloadAttemptCount: 0,
                isPreload: n,
                chatWid: t == null ? void 0 : t.id,
                downloadQpl: l,
                downloadOrigin: C,
                experienceIds: o("WAWebExperienceIdWamFields").getExperienceIds(
                  a.unsafe(),
                ),
              }),
              S = self.performance.now();
            if ((l.addPoint("thumbnail_consolidation_start"), y))
              y.thumbnailHQ = o("WABase64").encodeB64(v);
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
            (l.addPoint("thumbnail_consolidation_end"),
              l.endSuccess(),
              o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                branch: "SERVER_THUMBNAIL",
                checkPerformed: !1,
                context: b,
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
                l.endFailWithError("download_aborted", "Download aborted"));
              return;
            }
            (l.endFailWithError("download_failed", E.message),
              o("WAWebThumbnailOutcomeLogger").logThumbnailOutcome({
                branch: "SERVER_THUMBNAIL",
                checkPerformed: !1,
                context: b,
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
