__d(
  "WAWebWaffleIQErrorHandler",
  [
    "Promise",
    "WAAsyncSleep",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebWaffleLifecycleWamLogger",
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
          var t = yield e === "IQErrorRequestTimeout" ||
          e === "IQErrorRateOverlimit"
            ? (s || (s = n("Promise"))).resolve("retry")
            : e === "IQErrorNotAuthorized"
              ? (s || (s = n("Promise"))).resolve("request_nonce")
              : e === "IQErrorWFNotAuthorizedInvalidPassword"
                ? (s || (s = n("Promise"))).resolve("fail")
                : e === "IQErrorWFNotFound" || e === "IQErrorWFStateMismatch"
                  ? o("WAWebAccountLinkingDBOperationsAPI")
                      .getAccountLinkingDBOps("account_linking")
                      .purgeWaffleData()
                      .then(function () {
                        return "handled";
                      })
                  : e === "IQErrorWFSuspended"
                    ? o("WAWebAccountLinkingHandler")
                        .handlePausedState()
                        .then(function () {
                          return "handled";
                        })
                    : (s || (s = n("Promise"))).resolve("fail");
          return (
            o("WAWebWaffleLifecycleWamLogger").logErrorClassification({
              errorAction: o(
                "WAWebWaffleLifecycleWamLogger",
              ).mapIQErrorActionToWam(t),
              errorCode: o(
                "WAWebWaffleLifecycleWamLogger",
              ).mapIQErrorNameToWamCode(e),
            }),
            t
          );
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
            : (yield o("WAAsyncSleep").asyncSleep(n),
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
