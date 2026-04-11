__d(
  "WAWebMediaStickers",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
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
      p,
      _ = 125;
    function f(e) {
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
    function g(t) {
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
    function h(e) {
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
    function y(e, t, n, a) {
      var i = f(e);
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
    function C(e) {
      y(
        e,
        e.mediaObject || g(e),
        o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
        !1,
      );
    }
    function b(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromSticker(t, e);
    }
    function v(e) {
      y(
        e,
        e.mediaObject || h(e),
        o("WAWebMmsMediaTypes").MEDIA_TYPES.IMAGE,
        !0,
      );
    }
    function S(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromStickerPack(t, e);
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, a) {
          if (
            (a === void 0 && (a = !0),
            e.isPlaceholder === !0 || e.isCreateButton === !0)
          )
            return (
              (e.mediaData.mediaStage =
                o("WAWebMediaTypes").MediaDataStage.PREPARING),
              (p || (p = n("Promise"))).resolve()
            );
          var i = e.mediaObject;
          if (!i)
            return (p || (p = n("Promise"))).reject(
              r("err")(
                "media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject",
              ),
            );
          var l =
              t === "STICKER"
                ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                    .STICKER_PANEL_STICKER
                : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                    .STICKER_PANEL_ICON,
            s = !1;
          yield i
            .getPendingProcess("fromDisk")
            .then(function () {
              if (!e.filehash || !e.mediaKey || !e.encFilehash)
                return (
                  (s = !0),
                  o("WAWebDownloadManager").downloadManager.rmr({
                    mediaObject: i,
                    signal: new AbortController().signal,
                    rmrReason: l,
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
                rmrReason: l,
                downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                  .DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
                shouldThrow: a,
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
                          m ||
                            (m = babelHelpers.taggedTemplateLiteralLoose([
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
          var u = i.entries.getDownloadEntry(!0);
          s &&
            u instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.updateStickerMediaData(e.filehash, u);
        })),
        L.apply(this, arguments)
      );
    }
    function E(e) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose(["Prepping sticker"])),
      );
      var t = e.mediaObject,
        a = e.mediaData.toJSON();
      return (
        (a.fullWidth = _),
        (a.fullHeight = _),
        t
          ? new (o("WAWebMediaPrep").MediaPrep)(
              a.type,
              (p || (p = n("Promise"))).resolve(a),
            )
          : (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose(["id: ", ""])),
                e.id,
              )
              .sendLogs("media-fault: prepSticker sticker without mediaObject"),
            new (o("WAWebMediaPrep").MediaPrep)(
              a.type,
              (p || (p = n("Promise"))).reject(
                r("err")("non initialized media"),
              ),
            ))
      );
    }
    ((l.registerSticker = C),
      (l.deregisterSticker = b),
      (l.registerStickerPackIcon = v),
      (l.deregisterStickerPackIcon = S),
      (l.downloadStickerOrStickerPackIcon = R),
      (l.prepSticker = E));
  },
  98,
);
