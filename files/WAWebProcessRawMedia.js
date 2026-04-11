__d(
  "WAWebProcessRawMedia",
  [
    "WAWebABProps",
    "WAWebFileUtils",
    "WAWebMediaDataUtils",
    "WAWebMediaFileTooLargeError",
    "WAWebMediaGatingUtils",
    "WAWebMiscErrors",
    "WAWebProcessRawMediaLogging",
    "asyncToGeneratorRuntime",
    "cr:10296",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 2147483648;
    function s(e, t) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          t.retain();
          try {
            var i,
              l,
              s = t.size(),
              u =
                (i =
                  n("cr:10296") == null
                    ? void 0
                    : n("cr:10296").isWindowsHybridTranscoderEnabled()) != null
                  ? i
                  : !1,
              c;
            a.asDocument === !0
              ? (c = o("WAWebFileUtils").FILETYPE.DOCUMENT)
              : a.asSticker === !0
                ? (c = o("WAWebFileUtils").FILETYPE.STICKER)
                : a.asStickerPack === !0
                  ? (c = o("WAWebFileUtils").FILETYPE.STICKER_PACK)
                  : (c = o("WAWebFileUtils").typeFromMimetype(t.type()));
            var d = (l = a.isVcardOverMmsDocument) != null ? l : !1;
            c === "document" &&
              o("WAWebProcessRawMediaLogging").logSendDocumentEvent(
                a.filename,
                s,
              );
            var m = o("WAWebMediaGatingUtils").getUploadLimit(
              c,
              a.fileOrigin,
              d,
            );
            if (c === "video" && u && s >= e)
              throw new (r("WAWebMediaFileTooLargeError"))(c, e, s);
            if (!u && s > m)
              throw new (r("WAWebMediaFileTooLargeError"))(c, m, s);
            if (s <= 0) throw new (o("WAWebMiscErrors").MediaFileEmpty)();
            var p;
            a.gifAttribution != null
              ? (p = a.gifAttribution)
              : a.asGif === !0 && (p = 0);
            var _;
            e: {
              if (c === "image") {
                var f;
                _ = yield o("WAWebMediaDataUtils").processRawImage(
                  t,
                  {
                    maxDimension:
                      (f = a.maxDimension) != null
                        ? f
                        : o("WAWebABProps").getABPropConfigValue(
                            "web_image_max_edge",
                          ),
                    minDimension: a.minDimension,
                    transparency: a.transparency,
                  },
                  a.fileOrigin,
                );
                break e;
              }
              if (c === "sticker") {
                _ = yield o("WAWebMediaDataUtils").processRawSticker(t);
                break e;
              }
              if (c === "video" || c === "audio") {
                if (
                  ((_ = yield o("WAWebMediaDataUtils").processRawAudioVideo(
                    t,
                    !!a.isPtt,
                    a.precomputedFields,
                    a.asGif,
                    p,
                    t.type(),
                    a.accessibilityLabel,
                    a.setProgressPercentage,
                    a.setMediaPreview,
                    a.resetMediaPreview,
                    a.setMimeType,
                  )),
                  u && c === "video" && _.size != null && _.size > m)
                )
                  throw new (r("WAWebMediaFileTooLargeError"))(c, m, _.size);
                break e;
              }
              if (c === "document" || c === "sticker-pack") {
                _ = yield o("WAWebMediaDataUtils").processRawDocument(
                  t,
                  a.filename,
                  d,
                  a.documentPageCount,
                  c,
                );
                break e;
              }
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  c,
              );
            }
            return _;
          } finally {
            t.autorelease();
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.processRawMedia = s;
  },
  98,
);
