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
      u = 3;
    function c(e) {
      e === void 0 && (e = u);
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
    function d(e) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
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
          try {
            yield o(
              "WAWebAccountLinkingNonceFetchAPI",
            ).requestNonceFromPrimary();
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[WAFFLE] requestNonceFromPrimary failed",
                  ])),
              )
              .catching(r("getErrorSafe")(e));
          }
          return !0;
        })),
        _.apply(this, arguments)
      );
    }
    ((l.createWaffleOperationRetryState = c),
      (l.handleCommonWaffleIQError = d),
      (l.handleNonceRetry = p));
  },
  98,
);
