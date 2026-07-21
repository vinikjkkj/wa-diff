__d(
  "WAWebMdSyncDownloadFailureReason",
  ["WAWebHttpErrors", "WAWebMmsClientErrors"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e instanceof o("WAWebHttpErrors").HttpTimedOutError
        ? "http_timeout"
        : e instanceof o("WAWebHttpErrors").HttpNetworkError
          ? "http_network_error"
          : e instanceof o("WAWebMmsClientErrors").MediaNotFoundError
            ? "media_not_found"
            : e instanceof o("WAWebMmsClientErrors").MediaTooLargeError
              ? "media_too_large"
              : e instanceof o("WAWebMmsClientErrors").MediaInvalidError
                ? "media_invalid"
                : e instanceof o("WAWebMmsClientErrors").MMSUnauthorizedError
                  ? "mms_unauthorized"
                  : e instanceof o("WAWebMmsClientErrors").MMSForbiddenError
                    ? "mms_forbidden"
                    : e instanceof o("WAWebMmsClientErrors").MMSThrottleError
                      ? "mms_throttled"
                      : e instanceof
                          o("WAWebHttpErrors").MmsDownloadFilehashMismatchError
                        ? "media_filehash_mismatch"
                        : e instanceof
                            o("WAWebHttpErrors").HttpInvalidResponseError
                          ? "http_invalid_response"
                          : e instanceof
                              o("WAWebHttpErrors").HttpStatusCodeError
                            ? e.status >= 500
                              ? "http_server_error"
                              : e.status >= 400
                                ? "http_client_error"
                                : "http_unexpected_status"
                            : "unknown_download_error";
    }
    l.getMdSyncDownloadFailureReason = e;
  },
  98,
);
