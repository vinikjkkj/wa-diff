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
      s = 3,
      u = 1e3,
      c = 3e4;
    function d(e) {
      e === void 0 && (e = s);
      var t = { minTimeout: u, maxTimeout: c, retries: e, jitter: 0.5 },
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
            : (yield o("WAAsyncSleep").asyncSleep(n),
              o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary());
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
