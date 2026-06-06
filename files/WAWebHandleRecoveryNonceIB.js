__d(
  "WAWebHandleRecoveryNonceIB",
  ["WALogger", "WAWebCTWABizAccessTokenNonceManager"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 547;
    function c(t, n) {
      if (!t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "handleRecoveryNonceIB: empty code",
            ])),
        );
        return;
      }
      switch (n) {
        case u:
          o("WAWebCTWABizAccessTokenNonceManager").setNonceFromPushNotification(
            o("WAWebCTWABizAccessTokenNonceManager").castToNonce(t),
          );
          break;
        default:
          o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "handleRecoveryNonceIB: unhandled use_case ",
                "",
              ])),
            n,
          );
          break;
      }
    }
    l.default = c;
  },
  98,
);
