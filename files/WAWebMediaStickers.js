__d(
  "WAWebMediaStickers",
  [
    "WAFilteredCatch",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebMediaEntry",
    "WAWebMediaMmsV4Download",
    "WAWebMediaPrep",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
    "WAWebMiscErrors",
    "WAWebMmsMediaTypes",
    "WAWebRecentStickerCollectionMd",
    "WAWebWamEnumDownloadOriginType",
    "WAWebWamEnumWebcRmrReasonCode",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 125;
    function _(e) {
      var t = {};
      return (
        o("WAWebMediaTypes").MAPPED_STICKER_PROPS.forEach(function (n) {
          var r = e[n],
            a = o("WAWebMediaTypes").MSG_TO_MEDIA[n];
          t[a] = r;
        }),
        t
      );
    }
    function f(t) {
      if (!t.filehash) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected sticker with no filehash",
              ])),
          )
          .sendLogs("sticker-filehash-error");
        return;
      }
      var n = o("WAWebMediaStorage").getOrCreateMediaObject(t.filehash);
      return (o("WAWebMediaStorage").associateMediaWithSticker(n, t), n);
    }
    function g(e) {
      if (!e.filehash) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "Unexpected sticker pack with no filehash",
              ])),
          )
          .sendLogs("sticker-pack-filehash-error");
        return;
      }
      var t = o("WAWebMediaStorage").getOrCreateMediaObject(e.filehash);
      return (o("WAWebMediaStorage").associateMediaWithStickerPack(t, e), t);
    }
    function h(e, t, n, a) {
      var i = _(e);
      if ((e.mediaData.set(i), !!t)) {
        e.mediaObject = t;
        var l = e.deprecatedMms3Url,
          s = e.encFilehash;
        if (
          (!r("gkx")("26258") &&
            !s &&
            l &&
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "sticker ",
                    " encFileHash missing, has mms3Url",
                  ])),
                a ? "pack icon" : "",
              )
              .sendLogs(
                "sticker-" +
                  (a ? "icon-" : "") +
                  "missing-upload-hash-but-url-exists",
              ),
          (s || l) && !t.entries.has({ encFilehash: s, deprecatedMms3Url: l }))
        ) {
          var c = t.entries.addEntry({
            deprecatedMms3Url: l,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: e.mediaKeyTimestamp,
            encFilehash: s,
            type: n,
            directPath: e.directPath,
            debugHint: "setMediaObjectValues",
          });
          c &&
            t.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            (i.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT);
        }
        t.consolidate(i);
      }
    }
    function y(e) {
      h(
        e,
        e.mediaObject || f(e),
        o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
        !1,
      );
    }
    function C(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromSticker(t, e);
    }
    function b(e) {
      h(
        e,
        e.mediaObject || g(e),
        o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
        !0,
      );
    }
    function v(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromStickerPack(t, e);
    }
    async function S(e, t, n) {
      if (
        (n === void 0 && (n = !0),
        e.isPlaceholder === !0 || e.isCreateButton === !0)
      )
        return (
          (e.mediaData.mediaStage =
            o("WAWebMediaTypes").MediaDataStage.PREPARING),
          Promise.resolve()
        );
      var a = e.mediaObject;
      if (!a)
        return Promise.reject(
          r("err")(
            "media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject",
          ),
        );
      var i =
          t === "STICKER"
            ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STICKER_PANEL_STICKER
            : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STICKER_PANEL_ICON,
        l = !1;
      await a
        .getPendingProcess("fromDisk")
        .then(function () {
          if (!e.filehash || !e.mediaKey || !e.encFilehash)
            return (
              (l = !0),
              o("WAWebDownloadManager").downloadManager.rmr({
                mediaObject: a,
                signal: new AbortController().signal,
                rmrReason: i,
              })
            );
        })
        .then(function () {
          return o("WAWebMediaMmsV4Download").downloadMedia({
            mimetype: e.mimetype,
            mediaObject: e.mediaObject,
            downloadEvenIfExpensive: !0,
            mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
              type: e.type,
              isGif: !1,
              isNewsletter: !1,
            }),
            rmrReason: i,
            downloadOrigin: o("WAWebWamEnumDownloadOriginType")
              .DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
            shouldThrow: n,
          });
        })
        .catch(
          o("WAFilteredCatch").filteredCatch(
            o("WAWebMiscErrors").RMRNotSupportedOnNewsletterMessagesError,
            function (e) {
              if (
                e.mediaType !==
                o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER
              )
                throw (
                  o("WALogger")
                    .ERROR(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Unexpected RMR error for media type ",
                          "",
                        ])),
                      e.mediaType,
                    )
                    .sendLogs("failed-to-download-sticker-rmr"),
                  e
                );
            },
          ),
        );
      var s = a.entries.getDownloadEntry(!0);
      l &&
        s instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
        o(
          "WAWebRecentStickerCollectionMd",
        ).RecentStickerCollectionMd.updateStickerMediaData(e.filehash, s);
    }
    function R(e) {
      o("WALogger").LOG(
        d ||
          (d = babelHelpers.taggedTemplateLiteralLoose(["Prepping sticker"])),
      );
      var t = e.mediaObject,
        n = e.mediaData.toJSON();
      return (
        (n.fullWidth = p),
        (n.fullHeight = p),
        t
          ? new (o("WAWebMediaPrep").MediaPrep)(n.type, Promise.resolve(n))
          : (o("WALogger")
              .ERROR(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose(["id: ", ""])),
                e.id,
              )
              .sendLogs("media-fault: prepSticker sticker without mediaObject"),
            new (o("WAWebMediaPrep").MediaPrep)(
              n.type,
              Promise.reject(r("err")("non initialized media")),
            ))
      );
    }
    ((l.registerSticker = y),
      (l.deregisterSticker = C),
      (l.registerStickerPackIcon = b),
      (l.deregisterStickerPackIcon = v),
      (l.downloadStickerOrStickerPackIcon = S),
      (l.prepSticker = R));
  },
  98,
);
