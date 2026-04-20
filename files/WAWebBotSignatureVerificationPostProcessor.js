__d(
  "WAWebBotSignatureVerificationPostProcessor",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBotSignatureVerificationGating",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = "[bot-signature-post-processor]",
      d = r("JSResourceForInteraction")(
        "WAWebBotSignatureVerificationUtils",
      ).__setRef("WAWebBotSignatureVerificationPostProcessor");
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!_(t)) return t;
          var n = t.botSignatureVerificationMetadata,
            r = t.forwardedAiBotMessageInfo;
          if (r == null || n == null) return t;
          var a = f(t);
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
            var i = yield d.load(),
              l = i.verifyBotMessageSignature,
              m = yield l(r, n, a);
            if (!m.verified && m.shouldBlock)
              return (
                o("WALogger")
                  .WARN(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Verification failed, removing Meta AI attribution: ",
                        "",
                      ])),
                    c,
                    m.reason,
                  )
                  .sendLogs("bot-sig-attribution-removed"),
                babelHelpers.extends({}, t, {
                  forwardedAiBotMessageInfo: void 0,
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
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return !(
        e.isForwarded !== !0 ||
        e.forwardedAiBotMessageInfo == null ||
        e.botSignatureVerificationMetadata == null ||
        !o("WAWebBotSignatureVerificationGating").isForwardVerificationEnabled()
      );
    }
    function f(e) {
      var t = e.unifiedResponseRawData;
      return t instanceof Uint8Array
        ? t
        : t instanceof ArrayBuffer
          ? new Uint8Array(t)
          : null;
    }
    ((l.verifyForwardedBotMessage = m),
      (l.shouldVerifyForwardedBotMessage = _));
  },
  98,
);
