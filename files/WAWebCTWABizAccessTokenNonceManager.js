__d(
  "WAWebCTWABizAccessTokenNonceManager",
  [
    "WACustomError",
    "WALogger",
    "WAPromiseRetryLoop",
    "WAPromiseTimeout",
    "WAResolvable",
    "WASmaxBizAccessTokenRequestSilentNonceRPC",
    "WAWebBizGatingUtils",
    "WAWebQplFlowWrapper",
    "qpl",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = r("qpl")._(1029383287, "3456"),
      d = 250,
      m = 1e3,
      p = null;
    function _(e) {
      if (p != null && e !== !0) return p.promise;
      var t = o(
          "WAWebBizGatingUtils",
        ).adAccountTokenNoncePushWaitTimeoutSeconds(),
        n = o("WAWebBizGatingUtils").adAccountTokenNonceMaxRetries();
      (o("WAWebQplFlowWrapper").QPL.markerStart(c),
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
          int: { fetch_nonce_max_retries: n, fetch_nonce_timeout: t },
        }));
      var r = n,
        a = function (a) {
          return (
            o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
              int: { fetch_nonce_retry: n - r },
            }),
            o("WAPromiseTimeout")
              .promiseTimeout(f(), t * 1e3)
              .then(function (e) {
                a(e);
              })
              .catch(function (e) {
                var t = r > 0;
                if ((r--, !t))
                  throw (
                    e instanceof o("WACustomError").TimeoutError &&
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(c, 105),
                      (p = null)),
                    e
                  );
              })
          );
        },
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          code: a,
          name: "fetchAdAccountNonce",
          timer: { algo: { first: d, type: "exponential" }, max: m },
        });
      return (i.start(), i.promise());
    }
    function f() {
      o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_start");
      var e = (p = new (o("WAResolvable").Resolvable)());
      return o("WASmaxBizAccessTokenRequestSilentNonceRPC")
        .sendRequestSilentNonceRPC({})
        .then(function (t) {
          switch (t.name) {
            case "RequestSilentNonceResponseError":
              return (
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  c,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3),
                (p = null),
                { type: "error" }
              );
            case "RequestSilentNonceResponseRecoveryRequired":
              return (
                o("WAWebQplFlowWrapper").QPL.markerAnnotate(c, {
                  bool: { fetch_nonce_recovery_needed: !0 },
                }),
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  c,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3),
                (p = null),
                { emailMask: t.value.resultEmail, type: "recovery-required" }
              );
            default:
              return (
                t.name,
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  c,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_start"),
                e.promise
              );
          }
        })
        .catch(function (e) {
          throw (
            o("WAWebQplFlowWrapper").QPL.markerPoint(c, "request_nonce_end"),
            o("WAWebQplFlowWrapper").QPL.markerEnd(c, 3),
            (p = null),
            e
          );
        });
    }
    function g() {
      p != null &&
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Ad account email onboarding: awaitPushNonce overwriting in-flight cachedNonce",
            ])),
        );
      var t = (p = new (o("WAResolvable").Resolvable)());
      return o("WAPromiseTimeout")
        .promiseTimeout(t.promise, v() * 1e3)
        .then(function (e) {
          return (p === t && (p = null), e);
        })
        .catch(function (e) {
          if (e instanceof o("WACustomError").TimeoutError)
            return (
              p === t && (p = null),
              o("WALogger").WARN(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Ad account email onboarding: silent nonce push listen timed out",
                  ])),
              ),
              { type: "error" }
            );
          throw e;
        });
    }
    function h(e) {
      p == null
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "Received a biz token nonce without asking for it",
              ])),
          ),
          (p = null),
          o("WAWebQplFlowWrapper").QPL.markerStart(c),
          o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_end"),
          o("WAWebQplFlowWrapper").QPL.markerEnd(c, 216))
        : (p.resolve({ nonce: e, type: "success" }),
          o("WAWebQplFlowWrapper").QPL.markerPoint(c, "push_nonce_end"),
          o("WAWebQplFlowWrapper").QPL.markerEnd(c, 2));
    }
    function y(e) {
      (p == null && (p = new (o("WAResolvable").Resolvable)()),
        p.resolve({ nonce: e, type: "success" }));
    }
    function C() {
      p = null;
    }
    function b(e) {
      return e;
    }
    function v() {
      return (
        o("WAWebBizGatingUtils").adAccountTokenNoncePushWaitTimeoutSeconds() *
        (o("WAWebBizGatingUtils").adAccountTokenNonceMaxRetries() + 1)
      );
    }
    ((l.fetchNonce = _),
      (l.awaitPushNonce = g),
      (l.setNonceFromPushNotification = h),
      (l.setNonceFromRecoveryCode = y),
      (l.markNonceAsUsed = C),
      (l.castToNonce = b),
      (l.getMaximumNonceFetchTimeoutSeconds = v));
  },
  98,
);
