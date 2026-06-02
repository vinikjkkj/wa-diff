__d(
  "WAWebBotSignatureVerificationPostProcessor",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotSignatureVerificationGating",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "[bot-signature-post-processor]",
      d = r("JSResourceForInteraction")(
        "WAWebBotSignatureVerificationUtils",
      ).__setRef("WAWebBotSignatureVerificationPostProcessor");
    async function m(t) {
      if (!p(t)) return t;
      var n = t.botSignatureVerificationMetadata,
        r = t.forwardedAiBotMessageInfo;
      if (r == null || n == null) return t;
      var a = _(t);
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
        var i = await d.load(),
          l = i.verifyBotMessageSignature,
          m = await l(r, n, a);
        return (
          m === "failed" &&
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
              validationStatus: m,
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
    function p(e) {
      return !(
        e.isForwarded !== !0 ||
        e.forwardedAiBotMessageInfo == null ||
        e.botSignatureVerificationMetadata == null ||
        !o("WAWebBotSignatureVerificationGating").isForwardVerificationEnabled()
      );
    }
    function _(e) {
      var t = e.unifiedResponseRawData;
      return t instanceof Uint8Array
        ? t
        : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : null;
    }
    ((l.verifyForwardedBotMessage = m),
      (l.shouldVerifyForwardedBotMessage = p));
  },
  98,
);
