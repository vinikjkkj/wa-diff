__d(
  "WAWebWaffleIQErrorHandler",
  [
    "WAAsyncSleep",
    "WAExponentialBackoffIterator",
    "WALogger",
    "WAWebAccountLinkingDBOperationsAPI",
    "WAWebAccountLinkingGatingUtils",
    "WAWebAccountLinkingHandler",
    "WAWebAccountLinkingNonceFetchAPI",
    "WAWebWaffleLifecycleWamLogger",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
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
    async function p(e, t) {
      var n,
        r = (n = s[e]) == null ? void 0 : n[t];
      return r != null
        ? (o("WAWebWaffleLifecycleWamLogger").logErrorClassification({
            errorAction: o(
              "WAWebWaffleLifecycleWamLogger",
            ).mapIQErrorActionToWam(r),
            errorCode: o(
              "WAWebWaffleLifecycleWamLogger",
            ).mapIQErrorNameToWamCode(t),
          }),
          f(r))
        : _(t);
    }
    async function _(e) {
      var t = await (e === "IQErrorRequestTimeout" ||
      e === "IQErrorRateOverlimit"
        ? Promise.resolve("retry")
        : e === "IQErrorNotAuthorized"
          ? Promise.resolve(
              o("WAWebAccountLinkingGatingUtils").isGuestMode()
                ? "fail"
                : "request_nonce",
            )
          : e === "IQErrorWFNotAuthorizedInvalidPassword"
            ? Promise.resolve("fail")
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
                  ? Promise.resolve("refetch_certs")
                  : Promise.resolve("fail"));
      return (
        o("WAWebWaffleLifecycleWamLogger").logErrorClassification({
          errorAction: o("WAWebWaffleLifecycleWamLogger").mapIQErrorActionToWam(
            t,
          ),
          errorCode: o("WAWebWaffleLifecycleWamLogger").mapIQErrorNameToWamCode(
            e,
          ),
        }),
        f(t)
      );
    }
    function f(e) {
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
    async function g(t) {
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
        : (await o("WAAsyncSleep").asyncSleep(n),
          o("WAWebAccountLinkingNonceFetchAPI").requestNonceFromPrimary());
    }
    ((l.createWaffleOperationRetryState = m),
      (l.handleCommonWaffleIQError = p),
      (l.handleNonceRetry = g));
  },
  98,
);
