__d(
  "WADownloadFullSizeOnlyTask",
  [
    "EncryptedBackupsResignCdnUrl",
    "MAWAttachmentCdnUrlReader",
    "MAWAttachmentCdnUrlWriter",
    "MAWCastToMsgrServerMediaType",
    "MAWEBSwitch",
    "MAWKaleidoscopeMediaTypeMapping",
    "WADownloadMedia",
    "WAIsMediaExpiredError",
    "WAMediaManagerGetMostRecentMediaEntry",
    "WAMediaManagerPrepareMediaDownload",
    "WAResultOrError",
    "WATimeUtils",
    "WAValidateMedia",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e, s, u, c;
    async function d(e) {
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
      if (!s.success) return { fullsizePromise: Promise.resolve(s) };
      var u = s.value,
        c = u.mediaEntries,
        d = u.msgIdOfRecentMediaEntry,
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
        g = m({
          abortSignal: t,
          dbCallbacks: n,
          logger: a,
          mediaDownloadFlow: i,
          mediaEntries: c,
          msgIdOfRecentMediaEntry: d,
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
                msgIdAndMediaEntry: [d, p],
                serverMediaType: e.value.serverMediaType,
                source: "network",
                unvalidatedMimeType: e.value.mimeType,
                validatedResult: t.value,
              })
            : t;
        });
      return { fullsizePromise: f(g) };
    }
    async function m(t) {
      var n = t.abortSignal,
        a = t.dbCallbacks,
        i = t.logger,
        l = t.mediaDownloadFlow,
        d = t.mediaEntries,
        m = t.msgIdOfRecentMediaEntry,
        p = t.onCiphertext,
        _ = t.recentMediaEntry,
        f = r("MAWEBSwitch").isEnabled() && r("gkx")("23960");
      f && l.addPoint("forcing_eb_download");
      var g = f
        ? o("WAResultOrError").makeError("signature-expired")
        : await o("WADownloadMedia").downloadFullMediaOnly({
            abortSignal: n,
            downloadMediaMetric: l,
            mediaEntry: _,
            onCiphertext: p,
          });
      if (g.success) return g;
      if (
        !o("WAIsMediaExpiredError").isMediaExpiredError(g.error) ||
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
          g
        );
      var h = await a.getProtocolMsgIdAndSortOrderMs(m);
      if (h == null)
        return o("WAResultOrError").makeError(
          "missing-sort-order-ms-for-restore",
        );
      var y = h.protocolMsgId,
        C = h.sortOrderMs,
        b = _,
        v = m,
        S = o("MAWCastToMsgrServerMediaType").castToMsgrServerMediaType(
          b.serverMediaType,
        ),
        R = b.objectId,
        L =
          R != null && r("gkx")("7808")
            ? await o(
                "MAWAttachmentCdnUrlReader",
              ).getAttachmentCdnUrlDirectPath(R)
            : null;
      if (L != null) {
        (l.addPoint("resign_cdn_url_inline_hit"),
          l.addPoint("restore_cdn_url_download_start"));
        var E = await o("WADownloadMedia").downloadFullMediaOnly({
          abortSignal: n,
          downloadMediaMetric: babelHelpers.extends({}, l, {
            addPoint: function (t, n) {
              l.addPoint("restore_cdn_url_" + t, n);
            },
          }),
          mediaEntry: babelHelpers.extends({}, _, { directPath: L }),
          onCiphertext: p,
        });
        if (E.success) return (l.addPoint("restore_cdn_url_download_end"), E);
        (l.addPoint("restore_cdn_url_download_fail"),
          i.WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media with DB CDN URL, falling back to resign: ",
                "",
              ])),
            E.error,
          ));
      }
      if (S == null || R == null)
        return (
          l.addPoint("skip_resign_cdn_url", {
            string: {
              skipResignCdnUrlReason:
                R == null && S == null
                  ? "missing-object-id-and-media-type"
                  : R == null
                    ? "missing-object-id"
                    : "unsupported-media-type",
            },
          }),
          i.ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media and can not restore: ",
                "",
              ])),
            g.error,
          ),
          g
        );
      l.addPoint("resign_cdn_url_inline_miss");
      var k = await o("EncryptedBackupsResignCdnUrl").resignCdnUrl({
        deliveryObjectId: R,
        logger: i,
        mediaDownloadFlow: l,
        mediaKey: b.mediaKey,
        mediaType: S,
        msgId: v,
        protocolMsgId: y,
        sortOrderMs: C,
      });
      if (!k.success)
        return (
          i.ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media and restore failed: ",
                "",
              ])),
            k.error,
          ),
          k
        );
      r("gkx")("7808") &&
        (l.addPoint("write_cdn_to_db_start"),
        await o("MAWAttachmentCdnUrlWriter").writeAttachmentCdnUrls([
          {
            cdnUrl: k.value,
            objectId: R,
            timestampMs: o("WATimeUtils").millisTime(),
          },
        ]),
        l.addPoint("write_cdn_to_db_end"));
      var I = await o("WADownloadMedia").downloadFullMediaOnly({
        abortSignal: n,
        downloadMediaMetric: babelHelpers.extends({}, l, {
          addPoint: function (t, n) {
            l.addPoint("second_" + t, n);
          },
        }),
        mediaEntry: babelHelpers.extends({}, b, { directPath: k.value }),
        onCiphertext: p,
      });
      return I.success
        ? o("WAResultOrError").makeResult(I.value)
        : (i.ERROR(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "Failed to download media after restore CDN URL: ",
                "",
              ])),
            I.error,
          ),
          I);
    }
    ((l.startDownloadFullSizeTask = d), (l.downloadOrRestoreFullSize = m));
  },
  98,
);
