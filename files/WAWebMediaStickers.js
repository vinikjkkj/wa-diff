__d(
  "WAWebMediaStickers",
  [
    "Promise",
    "WAFilteredCatch",
    "WALogger",
    "WAWebDownloadManager",
    "WAWebGetUserMediaErrors",
    "WAWebMediaEntry",
    "WAWebMediaMmsV4Download",
    "WAWebMediaPrep",
    "WAWebMediaStorage",
    "WAWebMediaTypes",
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
    function g(e, t, n, a) {
      var i = _(e);
      if ((e.mediaData.set(i), !!t)) {
        e.mediaObject = t;
        var l = e.deprecatedMms3Url,
          u = e.encFilehash;
        if (
          (!r("gkx")("26258") &&
            !u &&
            l &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
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
          (u || l) && !t.entries.has({ encFilehash: u, deprecatedMms3Url: l }))
        ) {
          var c = t.entries.addEntry({
            deprecatedMms3Url: l,
            mediaKey: e.mediaKey,
            mediaKeyTimestamp: e.mediaKeyTimestamp,
            encFilehash: u,
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
    function h(e) {
      g(
        e,
        e.mediaObject || f(e),
        o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
        !1,
      );
    }
    function y(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromSticker(t, e);
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.shouldThrow,
            a = t === void 0 ? !0 : t,
            i = e.sticker,
            l = e.type;
          if (i.isPlaceholder === !0 || i.isCreateButton === !0)
            return (
              (i.mediaData.mediaStage =
                o("WAWebMediaTypes").MediaDataStage.PREPARING),
              (m || (m = n("Promise"))).resolve()
            );
          var s = i.mediaObject;
          if (!s)
            return (m || (m = n("Promise"))).reject(
              r("err")(
                "media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject",
              ),
            );
          var u =
              l === "STICKER"
                ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                    .STICKER_PANEL_STICKER
                : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                    .STICKER_PANEL_ICON,
            c = !1;
          yield s
            .getPendingProcess("fromDisk")
            .then(function () {
              if (!i.filehash || !i.mediaKey || !i.encFilehash)
                return (
                  (c = !0),
                  o("WAWebDownloadManager").downloadManager.rmr({
                    mediaObject: s,
                    signal: new AbortController().signal,
                    rmrReason: u,
                  })
                );
            })
            .then(function () {
              return o("WAWebMediaMmsV4Download").downloadMedia({
                mimetype: i.mimetype,
                mediaObject: i.mediaObject,
                downloadEvenIfExpensive: !0,
                mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
                  type: i.type,
                  isGif: !1,
                  isNewsletter: !1,
                }),
                rmrReason: u,
                downloadOrigin: o("WAWebWamEnumDownloadOriginType")
                  .DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
                shouldThrow: a,
              });
            })
            .catch(
              o("WAFilteredCatch").filteredCatch(
                o("WAWebGetUserMediaErrors")
                  .RMRNotSupportedOnNewsletterMessagesError,
                function (e) {
                  if (
                    e.mediaType !==
                    o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER
                  )
                    throw (
                      o("WALogger")
                        .ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
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
          var p = s.entries.getDownloadEntry(!0);
          c &&
            p instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
            o(
              "WAWebRecentStickerCollectionMd",
            ).RecentStickerCollectionMd.updateStickerMediaData(i.filehash, p);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose(["Prepping sticker"])),
      );
      var t = e.mediaObject,
        a = e.mediaData.toJSON();
      return (
        (a.fullWidth = p),
        (a.fullHeight = p),
        t
          ? new (o("WAWebMediaPrep").MediaPrep)(
              a.type,
              (m || (m = n("Promise"))).resolve(a),
            )
          : (o("WALogger")
              .ERROR(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose(["id: ", ""])),
                e.id,
              )
              .sendLogs("media-fault: prepSticker sticker without mediaObject"),
            new (o("WAWebMediaPrep").MediaPrep)(
              a.type,
              (m || (m = n("Promise"))).reject(
                r("err")("non initialized media"),
              ),
            ))
      );
    }
    ((l.registerSticker = h),
      (l.deregisterSticker = y),
      (l.downloadStickerOrStickerPackIcon = C),
      (l.prepSticker = v));
  },
  98,
);
