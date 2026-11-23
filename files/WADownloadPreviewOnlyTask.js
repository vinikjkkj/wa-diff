__d(
  "WADownloadPreviewOnlyTask",
  [
    "EncryptedBackupsResignCdnUrl",
    "MAWAttachmentCdnUrlReader",
    "MAWAttachmentCdnUrlWriter",
    "MAWEBSwitch",
    "MAWKaleidoscopeMediaTypeMapping",
    "WADownloadMediaPreviewV2",
    "WAIsMediaExpiredError",
    "WAIsPreviewSupported",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerPrepareMediaDownload",
    "WAProgressiveJpegGetPJpegDetails",
    "WAResultOrError",
    "WATimeUtils",
    "WAValidateMedia",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u;
    async function c(e) {
      var t = e.abortSignal,
        n = e.dbCallbacks,
        r = e.fullSizePlaintextHash,
        a = e.logger,
        i = e.mediaDownloadFlow,
        l = e.onCiphertext,
        s = await o(
          "WAMediaManagerGetMostRecentMediaEntry",
        ).getMostRecentMediaEntry({
          fullSizePlaintextHash: r,
          getMediaEntries: n.getMediaEntries,
          mediaDownloadFlow: i,
        });
      if (!s.success) return { previewPromise: Promise.resolve(s) };
      var u = s.value,
        c = u.mediaEntries,
        m = u.msgIdOfRecentMediaEntry,
        p = u.recentMediaEntry,
        _ = o(
          "WAMediaManagerPrepareMediaDownload",
        ).mediaManagerPrepareMediaDownload({
          hash: r,
          logger: a,
          mediaDownloadFlow: i,
          mediaEntry: p,
        }),
        f = _.logDownloadResult,
        g = d({
          abortSignal: t,
          dbCallbacks: n,
          fullSizePlaintextHash: r,
          logger: a,
          mediaDownloadFlow: i,
          mediaEntries: c,
          msgIdOfRecentMediaEntry: m,
          onCiphertext: l,
          recentMediaEntry: p,
        }).then(async function (e) {
          if (!e.success) return e;
          var t = await o("WAValidateMedia").validateMedia(
            e.value.plaintext,
            i,
            o(
              "MAWKaleidoscopeMediaTypeMapping",
            ).kaleidoscopeMediaTypeFromServerMediaType(e.value.serverMediaType),
          );
          return t.success
            ? o("WAResultOrError").makeResult({
                msgIdAndMediaEntry: [m, p],
                serverMediaType: e.value.serverMediaType,
                source: "network",
                unvalidatedMimeType: e.value.mimeType,
                validatedResult: t.value,
              })
            : t;
        });
      return { previewPromise: f(g) };
    }
    async function d(t) {
      var n,
        a,
        i,
        l = t.abortSignal,
        c = t.dbCallbacks,
        d = t.fullSizePlaintextHash,
        p = t.logger,
        _ = t.mediaDownloadFlow,
        f = t.mediaEntries,
        g = t.msgIdOfRecentMediaEntry,
        h = t.onCiphertext,
        y = t.recentMediaEntry,
        C = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
      C && _.addPoint("forcing_eb_download");
      var b = o("WAIsPreviewSupported").checkPreviewSupport(y),
        v = b[0],
        S = b[1];
      if (
        v === o("WAIsPreviewSupported").PjpegPreviewSupport.NO &&
        S === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO
      )
        return o("WAResultOrError").makeError("preview-not-supported");
      var R = o(
          "WAProgressiveJpegGetPJpegDetails",
        ).maybeGetProgressiveJpegDetailsUsingMediaEntry(y),
        L = R.success === !0 ? R.value : null,
        E = {
          abortSignal: l,
          hash: d,
          logger: p,
          mediaDownloadFlow: _,
          onCiphertext: h,
          progressiveJpegDetails: L,
        };
      _.addPoint("download_preview_start", {
        string: { preview_downloadable_support: S, preview_pjpeg_support: v },
      });
      var k = C
        ? o("WAResultOrError").makeError("signature-expired")
        : await o("WADownloadMediaPreviewV2").downloadMediaPreview(
            babelHelpers.extends({}, E, { mediaEntry: y }),
          );
      if (k.success)
        return (
          _.addPoint("download_preview_end"),
          o("WAResultOrError").makeResult({
            mimeType: k.value.mimeType,
            plaintext: k.value.plaintext,
            serverMediaType: k.value.serverMediaType,
          })
        );
      if (
        (_.addPoint("download_preview_fail"),
        !o("WAIsMediaExpiredError").isMediaExpiredError(k.error) ||
          !r("MAWEBSwitch").isEnabled())
      )
        return (
          _.addPoint("skip_resign_cdn_url", {
            string: {
              skipResignCdnUrlReason: r("MAWEBSwitch").isEnabled()
                ? "error-not-expired"
                : "maw-eb-switch-disabled",
            },
          }),
          k
        );
      var I =
          S === o("WAIsPreviewSupported").DownloadablePreviewSupport.NO
            ? null
            : (n =
                  (a = y.downloadableThumbnail) == null
                    ? void 0
                    : a.objectId) != null
              ? n
              : null,
        T =
          v === o("WAIsPreviewSupported").PjpegPreviewSupport.NO
            ? null
            : (i = y.objectId) != null
              ? i
              : null,
        D = r("gkx")("7808"),
        x =
          D && I != null
            ? await o(
                "MAWAttachmentCdnUrlReader",
              ).getAttachmentCdnUrlDirectPath(I)
            : null,
        $ =
          D && T != null
            ? await o(
                "MAWAttachmentCdnUrlReader",
              ).getAttachmentCdnUrlDirectPath(T)
            : null;
      if (x != null || $ != null) {
        (x != null &&
          _.addPoint("resign_cdn_url_inline_hit", {
            string: { inlineDbLeg: "thumbnail" },
          }),
          $ != null &&
            _.addPoint("resign_cdn_url_inline_hit", {
              string: { inlineDbLeg: "pjpeg" },
            }),
          _.addPoint("restore_cdn_url_download_start"));
        var P = await o("WADownloadMediaPreviewV2").downloadMediaPreview(
          babelHelpers.extends({}, E, {
            mediaDownloadFlow: babelHelpers.extends({}, _, {
              addPoint: function (t, n) {
                _.addPoint("restore_cdn_url_" + t, n);
              },
            }),
            mediaEntry: babelHelpers.extends({}, y, {
              directPath: $ != null ? $ : y.directPath,
              downloadableThumbnail:
                y.downloadableThumbnail == null
                  ? null
                  : babelHelpers.extends({}, y.downloadableThumbnail, {
                      directPath:
                        x != null ? x : y.downloadableThumbnail.directPath,
                    }),
            }),
          }),
        );
        if (P.success)
          return (
            _.addPoint("restore_cdn_url_download_end"),
            o("WAResultOrError").makeResult({
              mimeType: P.value.mimeType,
              plaintext: P.value.plaintext,
              serverMediaType: P.value.serverMediaType,
            })
          );
        (_.addPoint("restore_cdn_url_download_fail"),
          p.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download preview with DB CDN URL, falling back to resign: ",
                "",
              ])),
            P.error,
          ));
      }
      var N = await c.getProtocolMsgIdAndSortOrderMs(g);
      if (N == null)
        return o("WAResultOrError").makeError(
          "missing-sort-order-ms-for-restore",
        );
      var M = N.protocolMsgId,
        w = N.sortOrderMs,
        A = y,
        F = g,
        O = m({
          legName: "thumbnail",
          logger: p,
          mediaDownloadFlow: _,
          mediaKey: A.mediaKey,
          mediaType: "preview",
          msgId: F,
          objectId: I,
          protocolMsgId: M,
          sortOrderMs: w,
        }),
        B = m({
          legName: "pjpeg",
          logger: p,
          mediaDownloadFlow: _,
          mediaKey: A.mediaKey,
          mediaType: "image",
          msgId: F,
          objectId: T,
          protocolMsgId: M,
          sortOrderMs: w,
        });
      if (O == null && B == null) {
        var W, q, U;
        _.addPoint("skip_resign_cdn_url", {
          string: {
            serverMediaType: (W = A.serverMediaType) != null ? W : "null",
            skipResignCdnUrlReason:
              A.objectId == null &&
              ((q = A.downloadableThumbnail) == null ? void 0 : q.objectId) ==
                null
                ? "missing-object-id-for-pjpeg-and-thumbnail"
                : A.objectId == null &&
                    S ===
                      o("WAIsPreviewSupported").DownloadablePreviewSupport.NO
                  ? "missing-object-id-for-pjpeg-and-thumbnail-unsupported"
                  : ((U = A.downloadableThumbnail) == null
                        ? void 0
                        : U.objectId) == null &&
                      v === o("WAIsPreviewSupported").PjpegPreviewSupport.NO
                    ? "missing-object-id-for-thumbnail-and-pjpeg-unsupported"
                    : "no-resign-attempt-available",
          },
        });
      }
      var V = await Promise.all([O, B]),
        H = V[0],
        G = V[1];
      if (
        (H == null ? void 0 : H.success) !== !0 &&
        (G == null ? void 0 : G.success) !== !0
      ) {
        var z;
        return (
          p.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media and restore failed. downloadableThumbnail error: ",
                ". pjpegPreview error: ",
                "",
              ])),
            H == null ? void 0 : H.error,
            G == null ? void 0 : G.error,
          ),
          (z = G != null ? G : H) != null
            ? z
            : o("WAResultOrError").makeError("preview-not-supported")
        );
      }
      (D &&
        (_.addPoint("write_cdn_to_db_start"),
        await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls(
          [
            (H == null ? void 0 : H.success) === !0 && I != null
              ? {
                  cdnUrl: H.value,
                  objectId: I,
                  timestampMs: o("WATimeUtils").millisTime(),
                }
              : null,
            (G == null ? void 0 : G.success) === !0 && T != null
              ? {
                  cdnUrl: G.value,
                  objectId: T,
                  timestampMs: o("WATimeUtils").millisTime(),
                }
              : null,
          ].filter(Boolean),
        ),
        _.addPoint("write_cdn_to_db_end")),
        _.addPoint("second_download_preview_start"));
      var j = await o("WADownloadMediaPreviewV2").downloadMediaPreview(
        babelHelpers.extends({}, E, {
          mediaDownloadFlow: babelHelpers.extends({}, _, {
            addPoint: function (t, n) {
              _.addPoint("second_" + t, n);
            },
          }),
          mediaEntry: babelHelpers.extends({}, A, {
            directPath:
              (G == null ? void 0 : G.success) === !0 ? G.value : A.directPath,
            downloadableThumbnail:
              A.downloadableThumbnail == null
                ? null
                : babelHelpers.extends({}, A.downloadableThumbnail, {
                    directPath:
                      (H == null ? void 0 : H.success) === !0
                        ? H.value
                        : A.downloadableThumbnail.directPath,
                  }),
          }),
        }),
      );
      return j.success
        ? (_.addPoint("second_download_preview_end"),
          o("WAResultOrError").makeResult({
            mimeType: j.value.mimeType,
            plaintext: j.value.plaintext,
            serverMediaType: j.value.serverMediaType,
          }))
        : (p.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media after restore CDN URL: ",
                "",
              ])),
            j.error,
          ),
          _.addPoint("second_download_preview_fail"),
          j);
    }
    function m(e) {
      var t = e.legName,
        n = e.logger,
        r = e.mediaDownloadFlow,
        a = e.mediaKey,
        i = e.mediaType,
        l = e.msgId,
        s = e.objectId,
        u = e.protocolMsgId,
        c = e.sortOrderMs;
      return s == null
        ? null
        : (r.addPoint("resign_cdn_url_inline_miss", {
            string: { inlineCacheLeg: t },
          }),
          o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
            deliveryObjectId: s,
            logger: n,
            mediaDownloadFlow: r,
            mediaKey: a,
            mediaType: i,
            msgId: l,
            protocolMsgId: u,
            sortOrderMs: c,
          }));
    }
    ((l.startDownloadPreviewTask = c), (l.downloadOrRestorePreviewOnly = d));
  },
  98,
);
