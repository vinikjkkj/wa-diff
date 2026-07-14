__d(
  "WAWebWaffleIQErrorHandler",
  [
    "Promise",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAPromiseDelays",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebWaffleLifecycleWamLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = {
        generateWAEntACUser: {
          IQErrorConflict: "server_purge",
          IQErrorAlreadyExists: "server_pause",
        },
        generateAccessTokens: {
          IQErrorWFStateMismatch: "server_pause",
          IQErrorConflict: "server_purge",
          IQErrorNotAuthorized: "server_pause",
          IQErrorAlreadyExists: "refresh_token",
        },
        refreshAccessToken: { IQErrorNotAuthorized: "refetch_certs" },
        ping: { IQErrorNotAuthorized: "refresh_token" },
        stateExists: {},
        linkAction: {
          IQErrorNotAuthorized: "refresh_token",
          IQErrorWFStateMismatch: "fail",
        },
      },
      c = 3,
      d = 1e3,
      m = 3e4;
    function p(e) {
      e === void 0 && (e = c);
      var t = { minTimeout: d, maxTimeout: m, retries: e, jitter: 0.5 },
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
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r = (n = u[e]) == null ? void 0 : n[t];
          return r != null
            ? (o("WAWebWaffleLifecycleWamLogger").logErrorClassification({
                errorAction: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorActionToWam(r),
                errorCode: o(
                  "WAWebWaffleLifecycleWamLogger",
                ).mapIQErrorNameToWamCode(t),
              }),
              y(r))
            : g(t);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield e === "IQErrorRequestTimeout" ||
          e === "IQErrorRateOverlimit"
            ? (s || (s = n("Promise"))).resolve("retry")
            : e === "IQErrorNotAuthorized"
              ? (s || (s = n("Promise"))).resolve(
                  o("WAWebAccountLinkingGatingUtils").isGuestMode()
                    ? "fail"
                    : "request_nonce",
                )
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
                    : e === "IQErrorPayloadEncDec"
                      ? (s || (s = n("Promise"))).resolve("refetch_certs")
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
            y(t)
          );
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      return !o("WAWebAccountLinkingGatingUtils").isGuestMode() ||
        o("WAWebAccountLinkingGatingUtils").isWaffleLifecycleEnabled()
        ? e
        : e === "retry" ||
            e === "request_nonce" ||
            e === "pause" ||
            e === "purge" ||
            e === "server_pause" ||
            e === "server_purge"
          ? "fail"
          : e;
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          if (o("WAWebAccountLinkingGatingUtils").isGuestMode()) return !1;
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
            : (yield o("WAPromiseDelays").delayMs(n),
              o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary());
        })),
        b.apply(this, arguments)
      );
    }
    ((l.createWaffleOperationRetryState = p),
      (l.handleCommonWaffleIQError = _),
      (l.handleNonceRetry = C));
  },
  98,
);
