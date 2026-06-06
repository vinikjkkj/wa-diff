__d(
  "WAWebBotSignatureVerificationPostProcessor",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotCertificateRevocationService",
    "WAWebBotSignatureVerificationGating",
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
    async function p(t) {
      if (!f(t)) return t;
      d ||
        ((d = !0),
        o("WAWebBotCertificateRevocationService").startPeriodicCrlRefresh());
      var n = t.botSignatureVerificationMetadata,
        r = t.forwardedAiBotMessageInfo;
      if (r == null || n == null) return t;
      var a = g(t);
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
        var i = await m.load(),
          l = i.verifyBotMessageSignature,
          p = await l(r, n, a);
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
    }
    function _() {
      d = !1;
    }
    function f(e) {
      return !(
        e.isForwarded !== !0 ||
        e.forwardedAiBotMessageInfo == null ||
        e.botSignatureVerificationMetadata == null ||
        !o("WAWebBotSignatureVerificationGating").isForwardVerificationEnabled()
      );
    }
    function g(e) {
      var t = e.unifiedResponseRawData;
      return t instanceof Uint8Array
        ? t
        : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : null;
    }
    ((l.verifyForwardedBotMessage = p),
      (l.resetCrlRefreshStateForTesting = _),
      (l.shouldVerifyForwardedBotMessage = f));
  },
  98,
);
