__d(
  "WAWebWaffleIQErrorHandler",
  [
    "WAAsyncSleep",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 3,
      c = 1e3,
      d = 3e4;
    function m(e) {
      e === void 0 && (e = u);
      var t = { minTimeout: c, maxTimeout: d, retries: e, jitter: 0.5 },
        n = o("WAExponentialBackoffIterator").exponentialBackoffIterator(t);
      return {
        nextBackoffMs: function () {
          var e = n.next();
          return e.done ? null : e.value;
        },
        reset: function () {
          n = o("WAExponentialBackoffIterator").exponentialBackoffIterator(t);
        },
      };
    }
    function p(e) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
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
        _.apply(this, arguments)
      );
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.nextBackoffMs();
          return n == null
            ? (o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE] Nonce retry limit reached, stopping retry loop",
                    ])),
                )
                .sendLogs("waffle-nonce-retry-limit", { sampling: 0.01 }),
              !1)
            : (o("WALogger")
                .LOG(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[WAFFLE-TRACE] handleNonceRetry: attempting retry",
                    ])),
                )
                .sendLogs("waffle-nonce-trace-retry", { sampling: 1 }),
              yield o("WAAsyncSleep").asyncSleep(n),
              o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary());
        })),
        g.apply(this, arguments)
      );
    }
    ((l.createWaffleOperationRetryState = m),
      (l.handleCommonWaffleIQError = p),
      (l.handleNonceRetry = f));
  },
  98,
);
