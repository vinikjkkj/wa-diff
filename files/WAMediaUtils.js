__d(
  "WAMediaUtils",
  [
    "WACryptoDependencies",
    "WADirectPath",
    "WALongInt",
    "WAMediaEntryData.pb",
    "WAProgressiveJpegGetScanLengths",
    "WAResultOrError",
    "WAServerMediaType",
    "WATimeUtils",
    "decodeProtobuf",
    "encodeProtobuf",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = ["$$unknownFieldCount", "directPath", "objectId"],
      s = [
        "directPath",
        "downloadableThumbnail",
        "lastDownloadAttemptTimestamp",
        "mediaKey",
        "mediaKeyTimestamp",
        "objectId",
        "progressiveJpegDetails",
        "serverMediaType",
        "sidecar",
        "size",
        "uploadToken",
      ];
    function u() {
      var e = new Uint8Array(32);
      return (
        o("WACryptoDependencies").getCrypto().getRandomValues(e),
        e.buffer
      );
    }
    function c(e) {
      return e;
    }
    function d() {
      return u();
    }
    function m(e) {
      return e;
    }
    function p(e) {
      return e;
    }
    function _(e) {
      return e;
    }
    function f(e) {
      return e;
    }
    function g(e, t) {
      var n = o("decodeProtobuf").decodeProtobuf(
          o("WAMediaEntryData.pb").MediaEntrySpec,
          t,
        ),
        r = n.directPath,
        a = n.downloadableThumbnail,
        i = n.fbid,
        l = n.fileEncSha256,
        s = n.filename,
        u = n.fileSha256,
        c = n.mediaKey,
        d = n.mediaKeyTimestamp,
        m = n.objectId,
        _ = n.progressiveJpegDetails,
        f = n.serverMediaType,
        g = n.sidecar,
        h = n.size,
        y = o("WADirectPath").validateDirectPath(r);
      return {
        fileSha256: u,
        mediaKey: c,
        fileEncSha256: l,
        directPath: y.success ? y.value : null,
        mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(d),
        sidecar: g && g,
        objectId: m,
        fbid: i,
        downloadableThumbnail:
          a == null
            ? void 0
            : {
                directPath: a.directPath,
                fileEncSha256: a.fileEncSha256,
                fileSha256: a.fileSha256,
                mediaKey: a.mediaKey,
                mediaKeyTimestamp: o("WALongInt").maybeNumberOrThrowIfTooLarge(
                  a.mediaKeyTimestamp,
                ),
                objectId: a.objectId,
              },
        serverMediaType: f,
        filename: s,
        progressiveJpegDetails: _ && L(_),
        size: h == null ? void 0 : o("WALongInt").numberOrThrowIfTooLarge(h),
      };
    }
    function h(e) {
      var t = e.directPath,
        n = e.downloadableThumbnail,
        r = e.fbid,
        a = e.fileEncSha256,
        i = e.filename,
        l = e.fileSha256,
        s = e.mediaKey,
        u = e.mediaKeyTimestamp,
        c = e.objectId,
        d = e.progressiveJpegDetails,
        m = e.serverMediaType,
        p = e.size,
        _ = o("encodeProtobuf").encodeProtobuf(
          o("WAMediaEntryData.pb").MediaEntrySpec,
          {
            fileSha256: l,
            fileEncSha256: a,
            mediaKey: s,
            directPath: t,
            mediaKeyTimestamp: u,
            serverMediaType: m,
            objectId: c,
            fbid: r,
            downloadableThumbnail: n,
            filename: i,
            progressiveJpegDetails: d,
            size: p,
          },
        );
      return _.readByteArrayView();
    }
    function y(e) {
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, e)
        .readByteArrayView();
    }
    function C(e, t) {
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAMediaEntryData.pb").MediaEntrySpec,
          babelHelpers.extends({}, e, { directPath: t }),
        )
        .readByteArrayView();
    }
    function b(e, t) {
      return o("encodeProtobuf")
        .encodeProtobuf(
          o("WAMediaEntryData.pb").MediaEntrySpec,
          babelHelpers.extends({}, e, {
            downloadableThumbnail: babelHelpers.extends(
              {},
              e.downloadableThumbnail,
              { directPath: t },
            ),
          }),
        )
        .readByteArrayView();
    }
    function v(e, t) {
      var n = babelHelpers.extends({}, e, { fbid: t });
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, n)
        .readByteArrayView();
    }
    function S(e, t) {
      var n = babelHelpers.extends({}, e, { objectId: t });
      return o("encodeProtobuf")
        .encodeProtobuf(o("WAMediaEntryData.pb").MediaEntrySpec, n)
        .readByteArrayView();
    }
    function R(t) {
      if (t == null) return null;
      var n = t.$$unknownFieldCount,
        r = t.directPath,
        a = t.objectId,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = o("WADirectPath").validateDirectPath(r);
      return babelHelpers.extends({}, i, {
        directPath: l.success ? l.value : null,
        objectId: a,
        mediaKey: t.mediaKey && t.mediaKey,
        mediaKeyTimestamp:
          t.mediaKeyTimestamp == null
            ? null
            : o("WATimeUtils").castToUnixTime(
                o("WALongInt").numberOrThrowIfTooLarge(t.mediaKeyTimestamp),
              ),
      });
    }
    function L(e) {
      return e == null || e.scanLengths == null || e.sidecar == null
        ? null
        : {
            sidecar: e.sidecar,
            scanLengths: e.scanLengths.map(function (e) {
              return o(
                "WAProgressiveJpegGetScanLengths",
              ).asProgressiveJpegScanLength(
                o("WALongInt").numberOrThrowIfTooLarge(e),
              );
            }),
          };
    }
    function E(e) {
      var t = o("decodeProtobuf").decodeProtobuf(
          o("WAMediaEntryData.pb").MediaEntrySpec,
          e,
        ),
        n = t.directPath,
        r = t.downloadableThumbnail,
        a = t.lastDownloadAttemptTimestamp,
        i = t.mediaKey,
        l = t.mediaKeyTimestamp,
        u = t.objectId,
        d = t.progressiveJpegDetails,
        p = t.serverMediaType,
        _ = t.sidecar,
        f = t.size,
        g = t.uploadToken,
        h = babelHelpers.objectWithoutPropertiesLoose(t, s),
        y = null;
      d != null &&
        d.scanLengths != null &&
        d.sidecar != null &&
        (y = {
          sidecar: d.sidecar,
          scanLengths: d.scanLengths.map(function (e) {
            return o(
              "WAProgressiveJpegGetScanLengths",
            ).asProgressiveJpegScanLength(
              o("WALongInt").numberOrThrowIfTooLarge(e),
            );
          }),
        });
      var C = o("WADirectPath").validateDirectPath(n);
      return babelHelpers.extends({}, h, {
        objectId: u,
        directPath: C.success ? C.value : void 0,
        sidecar: _,
        serverMediaType:
          p == null ? null : o("WAServerMediaType").castToServerMediaType(p),
        mediaKey: i && i,
        mediaKeyTimestamp:
          l == null
            ? null
            : o("WATimeUtils").castToUnixTime(
                o("WALongInt").numberOrThrowIfTooLarge(l),
              ),
        uploadToken: g && g,
        progressiveJpegDetails: y,
        downloadableThumbnail: r && R(r),
        size: o("WALongInt").maybeNumberOrThrowIfTooLarge(f),
        lastDownloadAttemptTimestamp:
          a == null
            ? null
            : o("WATimeUtils").castToUnixTime(
                o("WALongInt").numberOrThrowIfTooLarge(a),
              ),
      });
    }
    function k(e) {
      var t = e.directPath,
        n = e.fileEncSha256,
        r = e.fileSha256,
        a = e.mediaKey,
        i = e.serverMediaType;
      return a == null
        ? o("WAResultOrError").makeError("media-entry-invalid-media-key")
        : t == null
          ? o("WAResultOrError").makeError("media-entry-invalid-direct-path")
          : n == null
            ? o("WAResultOrError").makeError(
                "media-entry-invalid-file-enc-sha256",
              )
            : r == null
              ? o("WAResultOrError").makeError(
                  "media-entry-invalid-file-sha256",
                )
              : i == null
                ? o("WAResultOrError").makeError(
                    "media-entry-invalid-server-media-type",
                  )
                : o("WAResultOrError").makeResult(
                    babelHelpers.extends({}, e, {
                      directPath: t,
                      fileEncSha256: n,
                      fileSha256: r,
                      mediaKey: a,
                      serverMediaType: i,
                    }),
                  );
    }
    function I(e) {
      var t = e.directPath,
        n = e.fileEncSha256,
        r = e.fileSha256,
        a = e.mediaKey,
        i = [];
      return (
        a == null
          ? i.push("media-entry-invalid-media-key")
          : t == null
            ? i.push("media-entry-invalid-direct-path")
            : n == null
              ? i.push("media-entry-invalid-file-enc-sha256")
              : r == null && i.push("media-entry-invalid-file-sha256"),
        a != null && t != null && n != null && r != null
          ? o("WAResultOrError").makeResult(
              babelHelpers.extends({}, e, {
                directPath: t,
                fileEncSha256: n,
                fileSha256: r,
                mediaKey: a,
              }),
            )
          : o("WAResultOrError").makeError(i)
      );
    }
    function T(e) {
      var t = "image/jpeg";
      switch (e) {
        case "image":
          t = "image/jpeg";
          break;
        case "ptt":
          t = "audio/wav";
          break;
        case "video":
          t = "video/mp4";
          break;
        case "gif":
          t = "image/gif";
          break;
        case "sticker":
          t = "image/webp";
          break;
        case "preview":
          t = "image/jpeg";
          break;
        case "document":
          t = "application/octet-stream";
          break;
        case "xma-image":
          t = "image/jpeg";
          break;
        default:
          throw r("err")("Unsupported server media type: " + e);
      }
      return t;
    }
    var D = function () {
      return "TransformStream" in self;
    };
    ((l.createMediaKey = u),
      (l.castToMediaKey = c),
      (l.createUploadToken = d),
      (l.castToUploadToken = m),
      (l.castToStreamingSidecar = p),
      (l.stringToDeliveryObjectId = _),
      (l.stringToBackupEntFbid = f),
      (l.mediaEntryDataToRawData = g),
      (l.rawDataToMediaEntry = h),
      (l.encodeMediaEntryForUpload = y),
      (l.encodeMediaEntryWithUpdatedPath = C),
      (l.encodeMediaEntryDownloadableThumbnailWithUpdatedPath = b),
      (l.encodeMediaEntryWithUpdatedFbid = v),
      (l.encodeMediaEntryWithUpdatedObjectId = S),
      (l.convertMediaDownloadableThumbnailToDownloadableThumbnail = R),
      (l.decodeMediaEntryData = E),
      (l.validateDecodedMediaEntryForDownload = k),
      (l.validateDownloadableThumbnailForDownload = I),
      (l.getMimeTypeFromServerMediaType = T),
      (l.isTransformStreamSupported = D));
  },
  98,
);
