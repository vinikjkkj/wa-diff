__d(
  "WAWebMediaStickers",
  [
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
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = 125;
    function p(e) {
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
    function _(t) {
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
    function f(e) {
      var t = e.isIcon,
        n = e.mediaObject,
        a = e.mediaType,
        i = e.stickerX,
        l = p(i);
      if ((i.mediaData.set(l), !!n)) {
        i.mediaObject = n;
        var u = i.deprecatedMms3Url,
          c = i.encFilehash;
        if (
          (!r("gkx")("26258") &&
            (c == null || c === "") &&
            u &&
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "sticker ",
                    " encFileHash missing, has mms3Url",
                  ])),
                t ? "pack icon" : "",
              )
              .sendLogs(
                "sticker-" +
                  (t ? "icon-" : "") +
                  "missing-upload-hash-but-url-exists",
              ),
          (c || u) && !n.entries.has({ encFilehash: c, deprecatedMms3Url: u }))
        ) {
          var d = n.entries.addEntry({
            deprecatedMms3Url: u,
            mediaKey: i.mediaKey,
            mediaKeyTimestamp: i.mediaKeyTimestamp,
            encFilehash: c,
            type: a,
            directPath: i.directPath,
            debugHint: "setMediaObjectValues",
          });
          d &&
            n.downloadStage ===
              o("WAWebMediaTypes").DownloadStage.ERROR_MISSING &&
            (l.downloadStage = o("WAWebMediaTypes").DownloadStage.INIT);
        }
        n.consolidate(l);
      }
    }
    function g(e) {
      f({
        isIcon: !1,
        mediaObject: e.mediaObject || _(e),
        mediaType: o("WAWebMmsMediaTypes").MEDIA_TYPES.STICKER,
        stickerX: e,
      });
    }
    function h(e) {
      var t = e.mediaObject;
      t && o("WAWebMediaStorage").disassociateMediaFromSticker(t, e);
    }
    async function y(e) {
      var t = e.shouldThrow,
        n = t === void 0 ? !0 : t,
        a = e.sticker,
        i = e.type;
      if (a.isPlaceholder === !0 || a.actionTile != null)
        return (
          (a.mediaData.mediaStage =
            o("WAWebMediaTypes").MediaDataStage.PREPARING),
          Promise.resolve()
        );
      var l = a.mediaObject;
      if (!l)
        return Promise.reject(
          r("err")(
            "media-fault: downloadStickerOrStickerPackIcon sticker/stickerPack without mediaObject",
          ),
        );
      var s =
          i === "STICKER"
            ? o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STICKER_PANEL_STICKER
            : o("WAWebWamEnumWebcRmrReasonCode").WEBC_RMR_REASON_CODE
                .STICKER_PANEL_ICON,
        c = !1;
      await l
        .getPendingProcess("fromDisk")
        .then(function () {
          if (
            !a.filehash ||
            !a.mediaKey ||
            a.encFilehash == null ||
            a.encFilehash === ""
          )
            return (
              (c = !0),
              o("WAWebDownloadManager").downloadManager.rmr({
                mediaObject: l,
                signal: new AbortController().signal,
                rmrReason: s,
              })
            );
        })
        .then(function () {
          return o("WAWebMediaMmsV4Download").downloadMedia({
            mimetype: a.mimetype,
            mediaObject: a.mediaObject,
            downloadEvenIfExpensive: !0,
            mediaType: o("WAWebMmsMediaTypes").msgToMediaType({
              type: a.type,
              isGif: !1,
              isNewsletter: !1,
            }),
            rmrReason: s,
            downloadOrigin: o("WAWebWamEnumDownloadOriginType")
              .DOWNLOAD_ORIGIN_TYPE.STICKER_PICKER,
            shouldThrow: n,
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
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
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
      var d = l.entries.getDownloadEntry(!0);
      c &&
        d instanceof o("WAWebMediaEntry").EncryptedMediaEntry &&
        o(
          "WAWebRecentStickerCollectionMd",
        ).RecentStickerCollectionMd.updateStickerMediaData(a.filehash, d);
    }
    function C(e) {
      o("WALogger").LOG(
        c ||
          (c = babelHelpers.taggedTemplateLiteralLoose(["Prepping sticker"])),
      );
      var t = e.mediaObject,
        n = e.mediaData.toJSON(),
        a = b(n.fullWidth, n.fullHeight),
        i = a.height,
        l = a.width;
      return (
        (n.fullWidth = l),
        (n.fullHeight = i),
        t
          ? new (r("WAWebMediaPrep"))(n.type, Promise.resolve(n))
          : (o("WALogger")
              .ERROR(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose(["id: ", ""])),
                e.id,
              )
              .sendLogs("media-fault: prepSticker sticker without mediaObject"),
            new (r("WAWebMediaPrep"))(
              n.type,
              Promise.reject(r("err")("non initialized media")),
            ))
      );
    }
    function b(e, t) {
      return e == null || t == null || !(e > 0) || !(t > 0) || e === t
        ? { width: m, height: m }
        : { width: e, height: t };
    }
    ((l.registerSticker = g),
      (l.deregisterSticker = h),
      (l.downloadStickerOrStickerPackIcon = y),
      (l.prepSticker = C));
  },
  98,
);
