__d(
  "VideoPlayerImplementationErrors",
  [
    "VideoPlayerImplementationErrorNormalization",
    "getErrorMessageFromMediaErrorCode",
    "getErrorNameFromMediaErrorCode",
    "getErrorSafe",
    "getMoreGranularErrorNameFromHTMLVideoElementErrorMessage",
    "oz-player/utils/OzErrorUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.errorLocation,
        n = e.hostCallError,
        o = e.videoElementError,
        a = e.videoElementNetworkState,
        i = e.videoElementReadyState,
        l = o == null ? void 0 : o.code,
        s = n != null && typeof n.message == "string" ? n.message : null;
      (s == null && (s = o == null ? void 0 : o.message),
        s == null &&
          l != null &&
          (s = r("getErrorMessageFromMediaErrorCode")(l)));
      var u = r("getErrorNameFromMediaErrorCode")(l);
      return {
        createdTimestamp: Date.now(),
        errorLocation: t,
        errorMessageFormat:
          (s != null ? s : "Empty error") +
          ("; code: " + (l != null ? l : "undefined")) +
          ("; readyState: " + i) +
          ("; networkState: " + a),
        errorMessageParams: [],
        errorName: u,
        originalError: n,
      };
    }
    function s(e, t, n, o) {
      var a, i;
      o === void 0 && (o = null);
      var l = r("getErrorSafe")(t);
      return {
        createdTimestamp: Date.now(),
        errorCode: null,
        errorLocation: n,
        errorMessageFormat:
          (l.name || "UnknownError") +
          " " +
          ((a = l.messageFormat) != null ? a : l.message),
        errorMessageParams:
          l.messageFormat != null
            ? (i = l.messageParams) != null
              ? i
              : []
            : [],
        errorName: e,
        stack: l.stack,
        url: o != null ? o : null,
      };
    }
    function u(e, t) {
      if (o("oz-player/utils/OzErrorUtils").isOzError(e)) {
        var n = e,
          r = n.getExtra();
        return {
          createdTimestamp: Date.now(),
          errorCode: r.code,
          errorLocation: t,
          errorMessageFormat: n.getDescription(),
          errorMessageParams: [],
          errorName: n.getType(),
          errorType: o(
            "VideoPlayerImplementationErrorNormalization",
          ).getVideoPlayerNormalizedErrorTypeFromOzError(n),
          stack: n.stack,
          url: r.url,
        };
      } else return s("OZ_JAVASCRIPT_NATIVE", e, t);
    }
    function c(e, t) {
      var n = r("getMoreGranularErrorNameFromHTMLVideoElementErrorMessage")(
          e.message,
        ),
        o = n != null ? e.name + "_" + n : e.name,
        a = e.message,
        i = [];
      return {
        createdTimestamp: Date.now(),
        errorLocation: t,
        errorMessageFormat: a,
        errorMessageParams: i,
        errorName: o,
        errorType: "GenericDecodeError",
      };
    }
    ((l.createVideoPlayerErrorFromHTMLVideoElementError = e),
      (l.createVideoPlayerErrorFromGenericError = s),
      (l.createVideoPlayerErrorFromOzImplementationError = u),
      (l.createVideoPlayerErrorFromOzImplementationVideoNodeError = c));
  },
  98,
);
