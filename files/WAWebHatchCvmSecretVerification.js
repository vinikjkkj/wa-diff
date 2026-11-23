__d(
  "WAWebHatchCvmSecretVerification",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m = 3e4;
    async function p() {
      var t = new AbortController(),
        n = o("WAWebHatchVmConnection")
          .connectHatchVmApiWithResult(t.signal)
          .catch(_),
        r = await o("WAPromiseDelays").withTimeout(
          n,
          m,
          o("WAWebNullFunc").returnNull,
        );
      return r == null
        ? (t.abort(),
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: s-unconfirmed failure=timeout",
              ])),
          ),
          { kind: "unconfirmed", reason: "timeout" })
        : r.kind === "ready"
          ? (o("WALogger").LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "hatch-cvm: s-verified",
                ])),
            ),
            { kind: "verified" })
          : r.cause === "cvm_key_rejected"
            ? (o("WALogger")
                .LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: s-rejected",
                    ])),
                )
                .sendLogs("hatch-cvm-pin-secret-rejected"),
              { kind: "rejected" })
            : (o("WALogger").LOG(
                c ||
                  (c = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: s-unconfirmed failure=",
                    " cause=",
                    "",
                  ])),
                r.failure,
                String(r.cause),
              ),
              {
                kind: "unconfirmed",
                reason:
                  r.cause != null ? r.failure + "(" + r.cause + ")" : r.failure,
              });
    }
    function _(e) {
      return (
        o("WALogger")
          .WARN(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: verifying connect threw",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("hatch-cvm-pin-verify-threw"),
        { failure: "threw", kind: "failed" }
      );
    }
    l.verifyRecoveredHatchCvmSecret = p;
  },
  98,
);
