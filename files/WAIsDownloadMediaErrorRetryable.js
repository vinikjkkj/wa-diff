__d(
  "WAIsDownloadMediaErrorRetryable",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      return t === "media-entry-invalid" ||
        t === "media-entry-invalid-direct-path" ||
        t === "media-entry-invalid-file-enc-sha256" ||
        t === "media-entry-invalid-file-sha256" ||
        t === "media-entry-invalid-media-key" ||
        t === "media-entry-invalid-server-media-type" ||
        t === "hash-mismatch" ||
        t === "ciphertext-hash-mismatch" ||
        t === "enc-hash-mismatch" ||
        t === "decryption-error" ||
        t === "invalid-media" ||
        t === "http-fetch-aborted"
        ? !1
        : t === "create-payload-failed" ||
            t === "resign-cdn-url-runtime-error" ||
            t === "resign-cdn-url-gql-error" ||
            t === "direct-path-undefined" ||
            t === "direct-path-corrupted" ||
            t === "direct-path-empty" ||
            t === "resign-cdn-url-timeout" ||
            t === "missing-media-entry" ||
            t === "missing-media-entry-for-restore" ||
            t === "missing-sort-order-ms-for-restore" ||
            t === "signature-expired" ||
            t === "max-attempts-exceeded" ||
            t === "request-error" ||
            t === "download-throttled" ||
            t === "media-not-found" ||
            t === "no-host" ||
            t === "backoff" ||
            t === "body-network-error" ||
            t === "disconnected" ||
            t === "runtime-error" ||
            t === "access-expired" ||
            t === "http-fetch-exception" ||
            t === "unspecified-http-error" ||
            t === "server-timeout" ||
            t === "preview-not-supported" ||
            t === "derive-primary-key-secret-error" ||
            t === "derive-access-token-secret-error"
          ? !0
          : (function () {
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  t,
              );
            })();
    };
    i.isDownloadMediaErrorRetryable = e;
  },
  66,
);
