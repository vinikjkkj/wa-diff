__d(
  "VideoPlayerImplementationErrorNormalization",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.getType(),
        n = e.getDescription();
      switch (t) {
        case "OZ_NETWORK": {
          var r,
            o,
            a =
              (r = (o = e.getExtra()) == null ? void 0 : o.code) != null
                ? r
                : "0",
            i = parseInt(a, 10);
          return i < 100 || i > 599 ? "NetworkError" : "HTTPError";
        }
        case "OZ_SOURCE_BUFFER_QUOTA_EXCEEDED": {
          var l,
            s = (l = e.getExtra()) == null ? void 0 : l.mimeType;
          return s != null && s.indexOf("video") > -1
            ? "VideoDecodeError"
            : s != null && s.indexOf("audio") > -1
              ? "AudioDecodeError"
              : "GenericDecodeError";
        }
        case "OZ_XML_PARSER":
        case "OZ_MPD_PARSER":
        case "OZ_REPRESENTATION_PARSER":
          return "ManifestParseError";
        case "OZ_DRM_MANAGER":
        case "OZ_INITIALIZATION":
          return /(OZ_XML_PARSER)|(OZ_MPD_PARSER)|(OZ_REPRESENTATION_PARSER)/.test(
            n,
          )
            ? "ManifestParseError"
            : "RuntimeError";
        case "OZ_JAVASCRIPT_NATIVE":
        case "OZ_SOURCE_BUFFER":
        case "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR":
        case "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR":
          return "RuntimeError";
      }
      return null;
    }
    function l(e, t) {
      switch (e) {
        case "OZ_XML_PARSER":
        case "OZ_MPD_PARSER":
        case "OZ_REPRESENTATION_PARSER":
          return "ManifestParseError";
        case "OZ_DRM_MANAGER":
        case "OZ_INITIALIZATION":
          return /(OZ_XML_PARSER)|(OZ_MPD_PARSER)|(OZ_REPRESENTATION_PARSER)/.test(
            t,
          )
            ? "ManifestParseError"
            : "RuntimeError";
        case "OZ_JAVASCRIPT_NATIVE":
        case "OZ_SOURCE_BUFFER":
        case "OZ_STREAM_APPEND_QUOTA_EXCEEDED_HANDLER_ERROR":
        case "OZ_NETWORK_REQUEST_STREAM_RETRY_HANDLER_ERROR":
          return "RuntimeError";
        default: {
          var n = [
            [["MEDIA_ERR_NETWORK"], "NetworkError"],
            [
              [
                "MEDIA_ERR_ABORTED",
                "MEDIA_ERR_DECODE",
                "MEDIA_ERR_SRC_NOT_SUPPORTED",
                "MEDIA_ERR_UNKNOWN",
              ],
              "GenericDecodeError",
            ],
          ];
          for (var r of n) {
            var o = r[0],
              a = r[1];
            if (
              o.some(function (t) {
                return e.includes(t);
              })
            )
              return a;
          }
        }
      }
      return null;
    }
    ((i.getVideoPlayerNormalizedErrorTypeFromOzError = e),
      (i.getErrorTypeFromErrorName = l));
  },
  66,
);
