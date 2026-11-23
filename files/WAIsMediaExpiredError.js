__d(
  "WAIsMediaExpiredError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      switch (t) {
        case "signature-expired":
          return !0;
        case "hash-mismatch":
        case "ciphertext-hash-mismatch":
        case "enc-hash-mismatch":
        case "decryption-error":
        case "max-attempts-exceeded":
        case "request-error":
        case "download-throttled":
        case "media-not-found":
        case "media-entry-invalid":
        case "media-entry-invalid-direct-path":
        case "media-entry-invalid-file-enc-sha256":
        case "media-entry-invalid-file-sha256":
        case "media-entry-invalid-media-key":
        case "media-entry-invalid-server-media-type":
        case "no-host":
        case "backoff":
        case "body-network-error":
        case "disconnected":
        case "runtime-error":
        case "access-expired":
        case "http-fetch-exception":
        case "http-fetch-aborted":
        case "unspecified-http-error":
        case "server-timeout":
        case "missing-expected-hmacs":
        case "hmac-chiphertext-array-mismatch":
          return !1;
        default:
          return !0;
      }
    };
    i.isMediaExpiredError = e;
  },
  66,
);
