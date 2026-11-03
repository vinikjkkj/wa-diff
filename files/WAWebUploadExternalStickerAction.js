__d(
  "WAWebUploadExternalStickerAction",
  [
    "WAWebMediaMmsV4Upload",
    "WAWebStickerModel",
    "WAWebWamEnumUploadOriginType",
    "asyncToGeneratorRuntime",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield e.downloadMedia(!0);
          var t = yield o("WAWebMediaMmsV4Upload").uploadMedia({
              mimetype: e.mimetype,
              mediaObject: r("nullthrows")(e.mediaObject),
              mediaType: "sticker",
              forwardedFromWeb: !1,
              uploadOrigin: o("WAWebWamEnumUploadOriginType").UPLOAD_ORIGIN_TYPE
                .STICKER_WEB,
              fileOrigin: null,
              isViewOnce: !1,
            }),
            n = t.kind,
            a = t.mediaEntry;
          if (
            n !== o("WAWebMediaMmsV4Upload").UploadMediaResultKind.SUCCESS ||
            a == null
          )
            throw r("err")("External sticker upload failed");
          e.set({
            directPath: a.directPath,
            encFilehash: a.encFilehash,
            mediaKey: a.mediaKey,
            mediaKeyTimestamp: a.mediaKeyTimestamp,
          });
        })),
        s.apply(this, arguments)
      );
    }
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e.externalUrl == null) return t(e);
          var n = new (o("WAWebStickerModel").StickerModel)(
            babelHelpers.extends({}, e.toDbData(), {
              id: e.id,
              externalUrl: e.externalUrl,
            }),
          );
          n.mediaData.accessibilityLabel = e.mediaData.accessibilityLabel;
          try {
            return yield t(n);
          } finally {
            n.delete();
          }
        })),
        c.apply(this, arguments)
      );
    }
    ((l.uploadExternalSticker = e), (l.withExternalStickerSelection = u));
  },
  98,
);
