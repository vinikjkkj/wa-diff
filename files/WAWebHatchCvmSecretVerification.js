__d(
  "WAWebHatchCvmSecretVerification",
  [
    "WALogger",
    "WAPromiseDelays",
    "WAWebHatchVmConnection",
    "WAWebNullFunc",
    "asyncToGeneratorRuntime",
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
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new AbortController(),
            t = o("WAWebHatchVmConnection")
              .connectHatchVmApiWithResult(e.signal)
              .catch(f),
            n = yield o("WAPromiseDelays").withTimeout(
              t,
              m,
              o("WAWebNullFunc").returnNull,
            );
          return n == null
            ? (e.abort(),
              o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: s-unconfirmed failure=timeout",
                  ])),
              ),
              { kind: "unconfirmed", reason: "timeout" })
            : n.kind === "ready"
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: s-verified",
                    ])),
                ),
                { kind: "verified" })
              : n.cause === "cvm_key_rejected"
                ? (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-cvm: s-rejected",
                        ])),
                    )
                    .sendLogs("hatch-cvm-pin-secret-rejected"),
                  { kind: "rejected" })
                : (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-cvm: s-unconfirmed failure=",
                        " cause=",
                        "",
                      ])),
                    n.failure,
                    String(n.cause),
                  ),
                  {
                    kind: "unconfirmed",
                    reason:
                      n.cause != null
                        ? n.failure + "(" + n.cause + ")"
                        : n.failure,
                  });
        })),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      return (
        o("WALogger")
          .WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "hatch-cvm: verifying connect threw",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("hatch-cvm-pin-verify-threw"),
        { failure: "threw", kind: "failed" }
      );
    }
    l.verifyRecoveredHatchCvmSecret = p;
  },
  98,
);
