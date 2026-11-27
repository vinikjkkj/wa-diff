__d(
  "EBMinosErrors",
  ["WmiErrorDomain"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {},
      s = {
        crypto_library_init_failed: { retryable: !1, severity: "mustfix" },
        db_init_failed: { retryable: !0, severity: "mustfix" },
        epoch_derivation_failed: { retryable: !0, severity: "warn" },
        infra: { retryable: !0, severity: "warn" },
        message_tag_dropped: { retryable: !1, severity: "warn" },
        payload_incomplete: { retryable: !1, severity: "warn" },
        thread_id_failed: { retryable: !1, severity: "warn" },
        timestamp_derivation_failed: { retryable: !1, severity: "warn" },
      },
      u = o("WmiErrorDomain").defineErrorDomain("eb_minos", {
        bug: e,
        infra: s,
        infraFallback: "infra",
      });
    l.EBMinosErrors = u;
  },
  98,
);
