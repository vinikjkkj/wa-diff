__d(
  "WAWebWaffleIQErrorHandler",
  [
    "WALogger",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 3;
    function d(e) {
      e === void 0 && (e = c);
      var t = 0;
      return {
        canRetry: function () {
          return t < e ? (t++, !0) : !1;
        },
        reset: function () {
          t = 0;
        },
      };
    }
    function m(e) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          switch (e) {
            case "IQErrorRequestTimeout":
            case "IQErrorRateOverlimit":
              return "retry";
            case "IQErrorNotAuthorized":
              return "request_nonce";
            case "IQErrorWFNotAuthorizedInvalidPassword":
              return "fail";
            case "IQErrorWFNotFound":
            case "IQErrorWFStateMismatch":
              return (
                yield o("WAWebAccountLinkingHandler").handleUnlinkedState(),
                "handled"
              );
            case "IQErrorWFSuspended":
              return (
                yield o("WAWebAccountLinkingHandler").handlePausedState(),
                "handled"
              );
            default:
              return "fail";
          }
        })),
        p.apply(this, arguments)
      );
    }
    function _(e) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (!t.canRetry())
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Nonce retry limit reached, stopping retry loop",
                    ])),
                )
                .sendLogs("waffle-nonce-retry-limit", { sampling: 0.01 }),
              !1
            );
          o("WALogger")
            .LOG(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[WAFFLE-TRACE] handleNonceRetry: attempting retry",
                ])),
            )
            .sendLogs("waffle-nonce-trace-retry", { sampling: 1 });
          try {
            yield o(
              "WAWebAccountLinkingNonceFetchAPI",
            ).requestNonceFromPrimary();
          } catch (e) {
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] requestNonceFromPrimary failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
          return !0;
        })),
        f.apply(this, arguments)
      );
    }
    ((l.createWaffleOperationRetryState = d),
      (l.handleCommonWaffleIQError = m),
      (l.handleNonceRetry = _));
  },
  98,
);
