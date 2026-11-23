__d(
  "WADownloadFullSizeAndPreviewTask",
  [
    "EncryptedBackupsResignCdnUrl",
    "MAWAttachmentCdnUrlReader",
    "MAWAttachmentCdnUrlWriter",
    "MAWCastToMsgrServerMediaType",
    "MAWEBSwitch",
    "MAWKaleidoscopeMediaTypeMapping",
    "UserAgent",
    "WADownloadFullSizeOnlyTask",
    "WADownloadPreviewOnlyTask",
    "WADownloadProgressiveJpegUsingMediaStreaming",
    "WAErrorMessage",
    "WAHashUtils",
    "WAIsMediaExpiredError",
    "WAIsPreviewSupported",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerPrepareMediaDownload",
    "WAMediaUtils",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WAStartMediaDownloadQplFlow",
    "WATimeUtils",
    "WAValidateMedia",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c, d, m, p, _, f, g, h, y;
    async function C(t) {
      var n = t.abortSignal,
        r = t.dbCallbacks,
        a = t.fullSizePlaintextHash,
        i = t.logger,
        l = t.mediaDownloadFlow,
        u = t.onCiphertext,
        c = t.recoverPreview,
        d = await o(
          "WAMediaManagerGetMostRecentMediaEntry",
        ).getMostRecentMediaEntry({
          fullSizePlaintextHash: a,
          getMediaEntries: r.getMediaEntries,
          mediaDownloadFlow: l,
        });
      if (!d.success)
        return {
          fullsizePromise: Promise.resolve(d),
          previewPromise: Promise.resolve(d),
        };
      var m = d.value,
        p = m.mediaEntries,
        _ = m.msgIdOfRecentMediaEntry,
        f = m.recentMediaEntry;
      return v({
        abortSignal: n,
        dbCallbacks: r,
        fullSizePlaintextHash: a,
        logger: i,
        mediaDownloadFlow: l,
        mediaEntries: p,
        msgIdOfRecentMediaEntry: _,
        onCiphertext: u,
        recentMediaEntry: f,
        recoverPreview: c,
      }).then(function (t) {
        if (
          (i.DEV(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "outter promise: ",
                "",
              ])),
            t.success === !0 ? "success" : t.error,
          ),
          !t.success)
        )
          return (
            i.ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "outter promise failed: ",
                  "",
                ])),
              t.error,
            ),
            {
              fullsizePromise: Promise.resolve(t),
              previewPromise: Promise.resolve(t),
            }
          );
        var n = t.value,
          r = n.fullsizePromise,
          o = n.previewPromise;
        return { fullsizePromise: r, previewPromise: o };
      });
    }
    async function b(e, t, n) {
      var r = await e;
      if (!r.success) return Promise.resolve(r);
      var a = await o("WAValidateMedia").validateMedia(
        r.value.plaintext,
        n,
        o(
          "MAWKaleidoscopeMediaTypeMapping",
        ).kaleidoscopeMediaTypeFromServerMediaType(r.value.serverMediaType),
      );
      return a.success
        ? o("WAResultOrError").makeResult({
            msgIdAndMediaEntry: t,
            serverMediaType: r.value.serverMediaType,
            source: "network",
            unvalidatedMimeType: r.value.mimeType,
            validatedResult: a.value,
          })
        : a;
    }
    async function v(e) {
      var t = e.abortSignal,
        n = e.dbCallbacks,
        r = e.fullSizePlaintextHash,
        a = e.logger,
        i = e.mediaDownloadFlow,
        l = e.mediaEntries,
        s = e.msgIdOfRecentMediaEntry,
        c = e.onCiphertext,
        d = e.recentMediaEntry,
        m = e.recoverPreview,
        p = o(
          "WAMediaManagerPrepareMediaDownload",
        ).mediaManagerPrepareMediaDownload({
          hash: r,
          logger: a,
          mediaDownloadFlow: i,
          mediaEntry: d,
        }),
        _ = p.logDownloadResult,
        f = {
          abortSignal: t,
          dbCallbacks: n,
          logger: a,
          mediaDownloadFlow: i,
          mediaEntries: l,
          msgIdOfRecentMediaEntry: s,
          onCiphertext: c,
          recentMediaEntry: d,
        },
        g = await S(babelHelpers.extends({}, f, { fullSizePlaintextHash: r }));
      if (g.success) {
        var h = g.value,
          y = h.fullsizePromise,
          C = h.previewPromise,
          v = y.then(function (e) {
            return e.success
              ? e
              : (i.addPoint("fallback_to_non_streaming_download", {
                  string: { streaming_fallback_reason: e.error },
                }),
                o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(f));
          }),
          L = [s, d];
        return o("WAResultOrError").makeResult({
          fullsizePromise: _(b(v, L, i)),
          previewPromise: b(C, L, i),
        });
      }
      var k = E(g.error);
      if (!k.shouldFallback) return o("WAResultOrError").makeError(k.error);
      (i.addPoint("fallback_to_non_streaming_download", {
        string: { streaming_fallback_reason: k.error },
      }),
        a.LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "fallback to non-streaming download",
            ])),
        ));
      var I = b(
          o("WADownloadFullSizeOnlyTask").downloadOrRestoreFullSize(f),
          [s, d],
          i,
        ),
        T = R(
          babelHelpers.extends({}, f, {
            fullSizePlaintextHash: r,
            fullsizePromise: I,
            recoverPreview: m,
          }),
        );
      return o("WAResultOrError").makeResult({
        fullsizePromise: _(I),
        previewPromise: T,
      });
    }
    async function S(e) {
      var t,
        n = e.abortSignal,
        a = e.dbCallbacks,
        i = e.logger,
        l = e.mediaDownloadFlow,
        s = e.mediaEntries,
        u = e.msgIdOfRecentMediaEntry,
        h = e.onCiphertext,
        y = e.recentMediaEntry,
        C = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
      C && l.addPoint("forcing_eb_download");
      var b = y.directPath,
        v = y.fileEncSha256,
        S = y.fileSha256,
        R = y.mediaKey,
        E = y.serverMediaType,
        k =
          (t = o(
            "WAProgressiveJpegGetPJpegDetails",
          ).maybeGetProgressiveJpegDetailsUsingMediaEntry(y).value) != null
            ? t
            : null;
      if (
        k == null ||
        y.serverMediaType !== "image" ||
        !o("WAMediaUtils").isTransformStreamSupported() ||
        r("UserAgent").isBrowser("Safari < 18") ||
        r("UserAgent").isBrowser("Mobile Safari < 18")
      )
        return (
          y.serverMediaType === "image" &&
            k == null &&
            (i.LOG(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "skip pjpeg streaming because pjpeg metadata is null",
                ])),
            ),
            i.DEV(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "media entry: ",
                  "",
                ])),
              y,
            )),
          o("WAResultOrError").makeError("jpeg-stream-not-supported")
        );
      l.addPoint("media_streaming_start");
      var I = C
        ? o("WAResultOrError").makeError("signature-expired")
        : await o("WADownloadProgressiveJpegUsingMediaStreaming")
            .downloadProgresiveJpegUsingMediaStreaming({
              abortSignal: n,
              directPath: b,
              downloadFlow: l,
              fileEncSha256: v,
              fileSha256: S,
              logger: i,
              mediaKey: R,
              onCiphertext: h,
              progressiveJpegDetails: k,
              serverMediaType: E,
            })
            .catch(function (e) {
              return (
                i.ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ",
                      "",
                    ])),
                  o("WAErrorMessage").maybeGetMessageFromError(e),
                ),
                o("WAResultOrError").makeError("runtime-error")
              );
            });
      if (I.success) return (l.addPoint("media_streaming_end"), I);
      if (
        !o("WAIsMediaExpiredError").isMediaExpiredError(I.error) ||
        !r("MAWEBSwitch").isEnabled()
      )
        return (
          l.addPoint("skip_resign_cdn_url", {
            string: {
              skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled()
                ? "error-not-expired"
                : "maw-eb-switch-disabled",
            },
          }),
          L(l, I),
          I
        );
      var T = await a.getProtocolMsgIdAndSortOrderMs(u);
      if (T == null)
        return o("WAResultOrError").makeError(
          "missing-sort-order-ms-for-restore",
        );
      var D = T.protocolMsgId,
        x = T.sortOrderMs,
        $ = y,
        P = u,
        N = $.fileEncSha256,
        M = $.fileSha256,
        w = $.mediaKey,
        A = $.serverMediaType,
        F = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(A),
        O = $.objectId,
        B =
          O != null && r("gkx")("7808")
            ? await o(
                "MAWAttachmentCdnUrlReader",
              ).getAttachmentCdnUrlDirectPath(O)
            : null;
      if (B != null) {
        (l.addPoint("resign_cdn_url_inline_hit"),
          l.addPoint("restore_cdn_url_download_start"));
        var W = await o("WADownloadProgressiveJpegUsingMediaStreaming")
          .downloadProgresiveJpegUsingMediaStreaming({
            abortSignal: n,
            directPath: B,
            downloadFlow: babelHelpers.extends({}, l, {
              addPoint: function (t, n) {
                l.addPoint("restore_cdn_url_" + t, n);
              },
            }),
            fileEncSha256: v,
            fileSha256: S,
            logger: i,
            mediaKey: R,
            onCiphertext: h,
            progressiveJpegDetails: k,
            serverMediaType: E,
          })
          .catch(function (e) {
            return (
              i.ERROR(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ",
                    "",
                  ])),
                o("WAErrorMessage").maybeGetMessageFromError(e),
              ),
              o("WAResultOrError").makeError("runtime-error")
            );
          });
        if (W.success) return (l.addPoint("restore_cdn_url_download_end"), W);
        (l.addPoint("restore_cdn_url_download_fail"),
          L(l, W),
          i.WARN(
            _ ||
              (_ = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download pjpeg with DB CDN URL, falling back to resign: ",
                "",
              ])),
            W.error,
          ));
      }
      if (F == null || O == null) {
        var q;
        return (
          l.addPoint("skip_resign_cdn_url", {
            string: {
              serverMediaType: (q = $.serverMediaType) != null ? q : "null",
              skipResignCdnUrlReason:
                O == null && F == null
                  ? "missing-object-id-and-media-type"
                  : O == null
                    ? "missing-object-id"
                    : "unsupported-media-type",
            },
          }),
          i.ERROR(
            f ||
              (f = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media and can not restore: ",
                "",
              ])),
            I.error,
          ),
          I
        );
      }
      l.addPoint("resign_cdn_url_inline_miss");
      var U = await o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
        deliveryObjectId: O,
        logger: i,
        mediaDownloadFlow: l,
        mediaKey: $.mediaKey,
        mediaType: F,
        msgId: P,
        protocolMsgId: D,
        sortOrderMs: x,
      });
      if (!U.success) return U;
      (r("gkx")("7808") &&
        (l.addPoint("write_cdn_to_db_start"),
        await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([
          {
            cdnUrl: U.value,
            objectId: O,
            timestampMs: o("WATimeUtils").millisTime(),
          },
        ]),
        l.addPoint("write_cdn_to_db_end")),
        l.addPoint("resign_cdn_url_download_start"));
      var V = await o("WADownloadProgressiveJpegUsingMediaStreaming")
        .downloadProgresiveJpegUsingMediaStreaming({
          abortSignal: n,
          directPath: U.value,
          downloadFlow: babelHelpers.extends({}, l, {
            addPoint: function (t, n) {
              l.addPoint("resign_cdn_url_" + t, n);
            },
          }),
          fileEncSha256: N,
          fileSha256: M,
          logger: i,
          mediaKey: w,
          onCiphertext: h,
          progressiveJpegDetails: k,
          serverMediaType: A,
        })
        .catch(function (e) {
          return (
            i.ERROR(
              g ||
                (g = babelHelpers.taggedTemplateLiteralLoose([
                  "downloadProgresiveJpegUsingMediaStreaming unexpected runtime-error: ",
                  "",
                ])),
              o("WAErrorMessage").maybeGetMessageFromError(e),
            ),
            o("WAResultOrError").makeError("runtime-error")
          );
        });
      return V.success
        ? (l.addPoint("resign_cdn_url_download_end"), V)
        : (L(l, V), V);
    }
    function R(e) {
      var t = e.abortSignal,
        n = e.dbCallbacks,
        r = e.fullSizePlaintextHash,
        a = e.fullsizePromise,
        i = e.logger,
        l = e.mediaDownloadFlow,
        s = e.mediaEntries,
        u = e.msgIdOfRecentMediaEntry,
        c = e.onCiphertext,
        d = e.recentMediaEntry,
        m = e.recoverPreview,
        p = d.serverMediaType,
        _ = o("WAIsPreviewSupported").checkPreviewSupport(d),
        f = _[0],
        g = _[1];
      if (
        f === o("WAIsPreviewSupported").PjpegPreviewSupport.NO &&
        g === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO
      )
        return (
          i.LOG(
            h ||
              (h = babelHelpers.taggedTemplateLiteralLoose([
                "preview not supported",
              ])),
          ),
          Promise.resolve(
            o("WAResultOrError").makeError("preview-not-supported"),
          )
        );
      if (
        g ===
        o("WAIsPreviewSupported").DownloadablePreviewSupport
          .DuplicatedWithFullSize
      )
        return (
          i.LOG(
            y ||
              (y = babelHelpers.taggedTemplateLiteralLoose([
                "preview duplicated with fullsize",
              ])),
          ),
          a
        );
      var C = o("WAStartMediaDownloadQplFlow").startMediaDownloadQplFlow({
          downloadEntry: l.downloadEntry,
          isPreview: !0,
          msgType: null,
          protocolMsgId: null,
          triggerUIView: null,
        }),
        v = o(
          "WAMediaManagerPrepareMediaDownload",
        ).mediaManagerPrepareMediaDownload({
          hash: r,
          logger: i,
          mediaDownloadFlow: C,
          mediaEntry: d,
        }),
        S = v.logDownloadResult;
      C.addAnnotations({
        bool: { isMediaManager: !0 },
        string: {
          downloadKind: "fullsizeAndPreview",
          fullSizeMediaType: p,
          mediaType: "preview",
          sanitisedMediaHash: o("WAHashUtils").sanitisePlaintextHash(r),
        },
      });
      var R = o("WADownloadPreviewOnlyTask").downloadOrRestorePreviewOnly({
          abortSignal: t,
          dbCallbacks: n,
          fullSizePlaintextHash: r,
          logger: i,
          mediaDownloadFlow: C,
          mediaEntries: s,
          msgIdOfRecentMediaEntry: u,
          onCiphertext: c,
          recentMediaEntry: d,
        }),
        L = S(b(R, [u, d], C));
      return (m == null ? L : m(L, C))
        .then(function (e) {
          return (
            e.success
              ? C.endSuccess()
              : C.endFail(e.error, { string: { failReason: e.error } }),
            e
          );
        })
        .catch(function (e) {
          return (
            C.endFail("runtime-error", {
              string: {
                failReason: o("WAErrorMessage").maybeGetMessageFromError(e),
              },
            }),
            o("WAResultOrError").makeError("runtime-error")
          );
        });
    }
    function L(e, t) {
      e.addPoint("media_streaming_fail", {
        string: {
          wa_media_download_streaming_fail_reason: o(
            "WAErrorMessage",
          ).maybeGetMessageFromError(t.error),
        },
      });
    }
    function E(e) {
      switch (e) {
        case "runtime-error":
        case "jpeg-stream-not-supported":
          return { error: e, shouldFallback: !0 };
        case "missing-expected-hmacs":
        case "hmac-chiphertext-array-mismatch":
          return { error: e, shouldFallback: !0 };
        case "missing-media-entry":
        case "missing-media-entry-for-restore":
        case "missing-sort-order-ms-for-restore":
        case "preview-not-supported":
          return { error: e, shouldFallback: !1 };
        case "derive-primary-key-secret-error":
        case "derive-access-token-secret-error":
        case "direct-path-undefined":
        case "direct-path-corrupted":
        case "direct-path-empty":
        case "create-payload-failed":
        case "resign-cdn-url-runtime-error":
        case "resign-cdn-url-timeout":
        case "resign-cdn-url-gql-error":
          return { error: e, shouldFallback: !1 };
        case "invalid-media":
          return { error: e, shouldFallback: !1 };
        case "decryption-error":
        case "enc-hash-mismatch":
        case "hash-mismatch":
        case "ciphertext-hash-mismatch":
          return { error: e, shouldFallback: !0 };
        case "access-expired":
        case "disconnected":
        case "backoff":
        case "body-network-error":
        case "http-fetch-exception":
        case "http-fetch-aborted":
        case "no-host":
        case "server-timeout":
        case "unspecified-http-error":
        case "media-not-found":
        case "download-throttled":
        case "request-error":
        case "max-attempts-exceeded":
        case "signature-expired":
        case "media-entry-invalid":
          return { error: e, shouldFallback: !1 };
        case "media-entry-invalid-direct-path":
        case "media-entry-invalid-file-enc-sha256":
        case "media-entry-invalid-file-sha256":
        case "media-entry-invalid-media-key":
        case "media-entry-invalid-server-media-type":
          return { error: e, shouldFallback: !1 };
      }
    }
    l.startDownloadFullSizeAndPreviewTask = C;
  },
  98,
);
