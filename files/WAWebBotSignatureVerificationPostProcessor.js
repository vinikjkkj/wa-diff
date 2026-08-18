__d(
  "WAWebBotSignatureVerificationPostProcessor",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotCertificateRevocationService",
    "WAWebBotSignatureVerificationGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "[bot-signature-post-processor]",
      d = !1,
      m = r("JSResourceForInteraction")(
        "WAWebBotSignatureVerificationUtils",
      ).__setRef("WAWebBotSignatureVerificationPostProcessor");
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!g(t)) return t;
          d ||
            ((d = !0),
            o(
              "WAWebBotCertificateRevocationService",
            ).startPeriodicCrlRefresh());
          var n = t.botSignatureVerificationMetadata,
            r = t.forwardedAiBotMessageInfo;
          if (r == null || n == null) return t;
          var a = h(t);
          if (a == null)
            return (
              o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " No unified response bytes available for verification",
                    ])),
                  c,
                )
                .sendLogs("bot-sig-no-unified-response"),
              t
            );
          try {
            var i = yield m.load(),
              l = i.verifyBotMessageSignature,
              p = yield l({
                forwardedAiBotMessageInfo: r,
                unifiedResponseBytes: a,
                verificationMetadata: n,
              });
            return (
              p === "failed" &&
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Verification failed",
                      ])),
                    c,
                  )
                  .sendLogs("bot-sig-verification-failed"),
              babelHelpers.extends({}, t, {
                forwardedAiBotMessageInfo: babelHelpers.extends({}, r, {
                  validationStatus: p,
                }),
              })
            );
          } catch (e) {
            o("WALogger")
              .WARN(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "",
                    " Verification error, failing open: ",
                    "",
                  ])),
                c,
                String(e),
              )
              .sendLogs("bot-sig-verification-error", { sampling: 0.01 });
          }
          return t;
        })),
        _.apply(this, arguments)
      );
    }
    function f() {
      d = !1;
    }
    function g(e) {
      return !(
        e.isForwarded !== !0 ||
        e.forwardedAiBotMessageInfo == null ||
        e.botSignatureVerificationMetadata == null ||
        !o("WAWebBotSignatureVerificationGating").isForwardVerificationEnabled()
      );
    }
    function h(e) {
      var t = e.unifiedResponseRawData;
      return t instanceof Uint8Array
        ? t
        : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : null;
    }
    ((l.verifyForwardedBotMessage = p),
      (l.resetCrlRefreshStateForTesting = f),
      (l.shouldVerifyForwardedBotMessage = g));
  },
  98,
);
