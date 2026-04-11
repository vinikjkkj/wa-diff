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
      s = r("qpl")._(1029383287, "3456"),
      u = 250,
      c = 1e3,
      d = null;
    function m(e) {
      if (d != null && e !== !0) return d.promise;
      var t = o(
          "WAWebBizGatingUtils",
        ).adAccountTokenNoncePushWaitTimeoutSeconds(),
        n = o("WAWebBizGatingUtils").adAccountTokenNonceMaxRetries();
      (o("WAWebQplFlowWrapper").QPL.markerStart(s),
        o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
          int: { fetch_nonce_timeout: t, fetch_nonce_max_retries: n },
        }));
      var r = n,
        a = function (a) {
          return (
            o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
              int: { fetch_nonce_retry: n - r },
            }),
            o("WAPromiseTimeout")
              .promiseTimeout(p(), t * 1e3)
              .then(function (e) {
                a(e);
              })
              .catch(function (e) {
                var t = r > 0;
                if ((r--, !t))
                  throw (
                    e instanceof o("WACustomError").TimeoutError &&
                      (o("WAWebQplFlowWrapper").QPL.markerEnd(s, 105),
                      (d = null)),
                    e
                  );
              })
          );
        },
        i = new (o("WAPromiseRetryLoop").PromiseRetryLoop)({
          name: "fetchAdAccountNonce",
          timer: { algo: { type: "exponential", first: u }, max: c },
          code: a,
        });
      return (i.start(), i.promise());
    }
    function p() {
      o("WAWebQplFlowWrapper").QPL.markerPoint(s, "request_nonce_start");
      var e = (d = new (o("WAResolvable").Resolvable)());
      return o("WASmaxBizAccessTokenRequestSilentNonceRPC")
        .sendRequestSilentNonceRPC({})
        .then(function (t) {
          switch (t.name) {
            case "RequestSilentNonceResponseError":
              return (
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  s,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(s, 3),
                (d = null),
                { type: "error" }
              );
            case "RequestSilentNonceResponseRecoveryRequired":
              return (
                o("WAWebQplFlowWrapper").QPL.markerAnnotate(s, {
                  bool: { fetch_nonce_recovery_needed: !0 },
                }),
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  s,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerEnd(s, 3),
                (d = null),
                { type: "recovery-required", emailMask: t.value.resultEmail }
              );
            default:
              return (
                t.name,
                o("WAWebQplFlowWrapper").QPL.markerPoint(
                  s,
                  "request_nonce_end",
                ),
                o("WAWebQplFlowWrapper").QPL.markerPoint(s, "push_nonce_start"),
                e.promise
              );
          }
        })
        .catch(function (e) {
          throw (
            o("WAWebQplFlowWrapper").QPL.markerPoint(s, "request_nonce_end"),
            o("WAWebQplFlowWrapper").QPL.markerEnd(s, 3),
            (d = null),
            e
          );
        });
    }
    function _(t) {
      d == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Received a biz token nonce without asking for it",
              ])),
          ),
          (d = null),
          o("WAWebQplFlowWrapper").QPL.markerStart(s),
          o("WAWebQplFlowWrapper").QPL.markerPoint(s, "push_nonce_end"),
          o("WAWebQplFlowWrapper").QPL.markerEnd(s, 216))
        : (d.resolve({ type: "success", nonce: t }),
          o("WAWebQplFlowWrapper").QPL.markerPoint(s, "push_nonce_end"),
          o("WAWebQplFlowWrapper").QPL.markerEnd(s, 2));
    }
    function f(e) {
      (d == null && (d = new (o("WAResolvable").Resolvable)()),
        d.resolve({ type: "success", nonce: e }));
    }
    function g() {
      d = null;
    }
    function h(e) {
      return e;
    }
    function y() {
      return (
        o("WAWebBizGatingUtils").adAccountTokenNoncePushWaitTimeoutSeconds() *
        (o("WAWebBizGatingUtils").adAccountTokenNonceMaxRetries() + 1)
      );
    }
    ((l.fetchNonce = m),
      (l.setNonceFromPushNotification = _),
      (l.setNonceFromRecoveryCode = f),
      (l.markNonceAsUsed = g),
      (l.castToNonce = h),
      (l.getMaximumNonceFetchTimeoutSeconds = y));
  },
  98,
);
