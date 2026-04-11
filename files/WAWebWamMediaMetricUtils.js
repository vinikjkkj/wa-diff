__d(
  "WAWebWamMediaMetricUtils",
  [
    "WAAbortError",
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMediaHostsErrors",
    "WAWebMiscErrors",
    "WAWebMmsClientErrors",
    "WAWebMmsMediaTypes",
    "WAWebWamEnumBackendStoreType",
    "WAWebWamEnumMediaDownloadModeType",
    "WAWebWamEnumMediaDownloadResultType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMediaUploadModeType",
    "WAWebWamEnumMediaUploadResultType",
    "WAWebWamEnumWebcMediaOperationCode",
    "WAWebWebcMediaErrorUnknownDetailsWamEvent",
    "err",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return (
        e === "thumbnail-document" ||
        e === "thumbnail-image" ||
        e === "thumbnail-video" ||
        e === "thumbnail-link" ||
        e === "newsletter-thumbnail-link"
      );
    }
    function c(e, t, n) {
      return u(e)
        ? o("WAWebWamEnumMediaDownloadModeType").MEDIA_DOWNLOAD_MODE_TYPE
            .THUMBNAIL
        : t === "manual"
          ? o("WAWebWamEnumMediaDownloadModeType").MEDIA_DOWNLOAD_MODE_TYPE
              .MANUAL
          : n
            ? o("WAWebWamEnumMediaDownloadModeType").MEDIA_DOWNLOAD_MODE_TYPE
                .PREFETCH
            : o("WAWebWamEnumMediaDownloadModeType").MEDIA_DOWNLOAD_MODE_TYPE
                .FULL;
    }
    function d(e) {
      return u(e)
        ? o("WAWebWamEnumMediaUploadModeType").MEDIA_UPLOAD_MODE_TYPE.THUMBNAIL
        : o("WAWebWamEnumMediaUploadModeType").MEDIA_UPLOAD_MODE_TYPE.REGULAR;
    }
    function m(e) {
      switch (e) {
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_AUDIO:
        case "audio":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
        case "document":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
        case "thumbnail-document":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_GIF:
        case "gif":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF;
        case "image":
        case "waffle-image":
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_IMAGE:
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
        case "thumbnail-image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
        case "ppic":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PROFILE_PIC;
        case "product":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTT:
        case "ptt":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER:
        case "sticker":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_STICKER_PACK:
        case "sticker-pack":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
        case "thumbnail-sticker-pack":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
        case "video":
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_VIDEO:
        case "waffle-video":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
        case "ptv":
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_PTV:
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
        case "thumbnail-video":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
        case "template":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.TEMPLATE;
        case "md-msg-hist":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_HISTORY_SYNC;
        case "md-app-state":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MD_APP_STATE;
        case "product-catalog-image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
        case o("WAWebMmsMediaTypes").MEDIA_TYPES.NEWSLETTER_THUMBNAIL_LINK:
        case "thumbnail-link":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.URL;
        case "payment-bg-image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "biz-cover-photo":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "ads-image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "ads-video":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "music-artwork":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MUSIC_ARTWORK;
        case "group-history":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "newsletter-music-artwork":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MUSIC_ARTWORK;
        default:
          throw r("err")("webMediaType is invalid: " + e);
      }
    }
    function p(e) {
      return e instanceof o("WAWebMmsClientErrors").MMSUnauthorizedError
        ? o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
            .ERROR_NO_PERMISSIONS
        : e instanceof o("WAWebMmsClientErrors").MediaTooLargeError
          ? o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
              .ERROR_BAD_MEDIA
          : e instanceof o("WAWebMmsClientErrors").MMSThrottleError
            ? o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
                .ERROR_THROTTLE
            : e instanceof o("WAWebHttpErrors").HttpStatusCodeError &&
                e.status >= 500
              ? o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
                  .ERROR_SERVER
              : e instanceof o("WAWebMediaHostsErrors").NoMediaHostsError
                ? o("WAWebWamEnumMediaUploadResultType")
                    .MEDIA_UPLOAD_RESULT_TYPE.ERROR_MEDIA_CONN
                : e.name === o("WAAbortError").ABORT_ERROR
                  ? o("WAWebWamEnumMediaUploadResultType")
                      .MEDIA_UPLOAD_RESULT_TYPE.ERROR_CANCEL
                  : e instanceof o("WAWebHttpErrors").HttpNetworkError
                    ? o("WAWebWamEnumMediaUploadResultType")
                        .MEDIA_UPLOAD_RESULT_TYPE.ERROR_UPLOAD
                    : o("WAWebWamEnumMediaUploadResultType")
                        .MEDIA_UPLOAD_RESULT_TYPE.ERROR_UNKNOWN;
    }
    function _(e) {
      if (e instanceof o("WAWebMmsClientErrors").MMSThrottleError)
        return o("WAWebWamEnumMediaDownloadResultType")
          .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_THROTTLE;
      if (e instanceof o("WAWebMediaHostsErrors").NoMediaHostsError)
        return o("WAWebWamEnumMediaDownloadResultType")
          .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_MEDIA_CONN;
      if (e instanceof o("WAWebHttpErrors").HttpNetworkError)
        return o("WAWebWamEnumMediaDownloadResultType")
          .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_NETWORK;
      if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError)
        switch (e.status) {
          case 404:
          case 410:
            return o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_TOO_OLD;
          case 416:
            return o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_CANNOT_RESUME;
          case 401:
            return o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_INVALID_URL;
          case 429:
          case 507:
            return o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_THROTTLE;
          default:
            return o("WAWebWamEnumMediaDownloadResultType")
              .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_UNKNOWN;
        }
      return e.name === o("WAAbortError").ABORT_ERROR
        ? o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE
            .ERROR_CANCEL
        : e instanceof o("WAWebHttpErrors").MmsDownloadFilehashMismatchError
          ? o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE
              .ERROR_ENC_HASH_MISMATCH
          : e instanceof o("WAWebMiscErrors").MediaDecryptionError &&
              e.message.includes(
                o("WAWebMiscErrors").PLAINTEXT_HASH_MISMATCH_ERROR,
              )
            ? o("WAWebWamEnumMediaDownloadResultType")
                .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_HASH_MISMATCH
            : o("WAWebWamEnumMediaDownloadResultType")
                .MEDIA_DOWNLOAD_RESULT_TYPE.ERROR_UNKNOWN;
    }
    function f(e) {
      if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError)
        return e.status;
    }
    function g() {
      return 1 + Math.floor(Number.MAX_SAFE_INTEGER * Math.random());
    }
    function h(e, t) {
      if (t != null) {
        var n;
        (e.overallDownloadResult ===
        o("WAWebWamEnumMediaDownloadResultType").MEDIA_DOWNLOAD_RESULT_TYPE
          .ERROR_UNKNOWN
          ? (n = o("WAWebWamEnumWebcMediaOperationCode")
              .WEBC_MEDIA_OPERATION_CODE.DOWNLOAD)
          : e.overallUploadResult ===
              o("WAWebWamEnumMediaUploadResultType").MEDIA_UPLOAD_RESULT_TYPE
                .ERROR_UNKNOWN &&
            (n = o("WAWebWamEnumWebcMediaOperationCode")
              .WEBC_MEDIA_OPERATION_CODE.UPLOAD),
          n != null &&
            new (o(
              "WAWebWebcMediaErrorUnknownDetailsWamEvent",
            ).WebcMediaErrorUnknownDetailsWamEvent)({
              mediaId: e.mediaId,
              webcMediaOperation: n,
              webcMediaErrorName: t.name,
              webcMediaErrorMessage: t.message,
            }).commit());
      }
    }
    function y(t) {
      if (!t)
        return o("WAWebWamEnumBackendStoreType").BACKEND_STORE_TYPE
          .NON_DIRECT_PATH;
      switch (t.slice(0, 2).toLowerCase()) {
        case "/v":
          return o("WAWebWamEnumBackendStoreType").BACKEND_STORE_TYPE.EVERSTORE;
        case "/o":
          return o("WAWebWamEnumBackendStoreType").BACKEND_STORE_TYPE.OIL;
        case "/m":
          return o("WAWebWamEnumBackendStoreType").BACKEND_STORE_TYPE.MANIFOLD;
      }
      return (
        r("gkx")("26258")
          ? o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Unrecognized direct path type",
                  ])),
              )
              .sendLogs("unrecognized-direct-path-type")
          : o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Unrecognized direct path type: ",
                    "",
                  ])),
                t,
              )
              .sendLogs("unrecognized-direct-path-type"),
        null
      );
    }
    ((l.getMetricOverallDownloadModeType = c),
      (l.getMetricOverallUploadModeType = d),
      (l.getMetricMediaType = m),
      (l.getMetricUploadErrorResultType = p),
      (l.getMetricDownloadErrorResultType = _),
      (l.getStatusCode = f),
      (l.generateMediaEventId = g),
      (l.logErrorUnknownDetails = h),
      (l.getMetricBackendStore = y));
  },
  98,
);
