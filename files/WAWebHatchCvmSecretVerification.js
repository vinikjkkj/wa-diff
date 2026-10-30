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
      m = 2e4;
    function p() {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o("WAWebHatchVmConnection")
              .connectHatchVmApiWithResult()
              .catch(f),
            t = yield o("WAPromiseDelays").withTimeout(
              e,
              m,
              o("WAWebNullFunc").returnNull,
            );
          return t == null
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "hatch-cvm: s-unconfirmed failure=timeout",
                  ])),
              ),
              "unconfirmed")
            : t.kind === "ready"
              ? (o("WALogger").LOG(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "hatch-cvm: s-verified",
                    ])),
                ),
                "verified")
              : t.cause === "cvm_key_rejected"
                ? (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "hatch-cvm: s-rejected",
                        ])),
                    )
                    .sendLogs("hatch-cvm-pin-secret-rejected"),
                  "rejected")
                : (o("WALogger").LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "hatch-cvm: s-unconfirmed failure=",
                        " cause=",
                        "",
                      ])),
                    t.failure,
                    String(t.cause),
                  ),
                  "unconfirmed");
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
