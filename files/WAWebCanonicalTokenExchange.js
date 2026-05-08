__d(
  "WAWebCanonicalTokenExchange",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalUtils",
    "WAWebCanonicalWamFalcoBuffer",
    "WAWebODS",
    "WAWebXControllerFetchUtils",
    "WAXWhatsAppWebAuthControllerRouteBuilder",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m = n("$InternalEnum").Mirrored(["SUCCESS", "FAILED"]);
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = t.accessToken,
              l = t.deviceId,
              c = t.nonce,
              d = t.userId,
              p = r("WAXWhatsAppWebAuthControllerRouteBuilder").buildUri({
                access_token: i != null ? i : "",
                nonce: c != null ? c : "",
                user_id: d,
                device_id: l,
              }),
              _ = yield o("WAWebXControllerFetchUtils").fetchFromXController(
                p.toString(),
                { method: "POST", retry: n.retry },
              );
            if (!_.ok)
              return (
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Auth controller failed: HTTP ",
                      "",
                    ])),
                  _.status,
                ),
                m.FAILED
              );
            var f = yield o(
              "WAWebXControllerFetchUtils",
            ).extractJsonFromResponse(_);
            if (
              f == null ||
              ((a = f.payload) == null ? void 0 : a.status) !== "success"
            ) {
              var g,
                h,
                y,
                C,
                b =
                  (g =
                    f == null || (h = f.payload) == null ? void 0 : h.status) !=
                  null
                    ? g
                    : "invalid response",
                v =
                  (y =
                    f == null || (C = f.payload) == null ? void 0 : C.error) !=
                  null
                    ? y
                    : "unknown";
              return (
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "[canonical] Auth controller fail: ",
                        " err=",
                        "",
                      ])),
                    b,
                    v,
                  )
                  .sendLogs("canonical-error", { sampling: 0.01 }),
                m.FAILED
              );
            }
            return m.SUCCESS;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  u ||
                    (u = babelHelpers.taggedTemplateLiteralLoose([
                      "[canonical] Unexpected error in auth controller: ",
                      "",
                    ])),
                  e,
                )
                .sendLogs("canonical-error", { sampling: 0.01 }),
              m.FAILED
            );
          }
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      e === m.SUCCESS
        ? (o("WAWebCanonicalUtils").setTokenCreationState(
            o("WAWebCanonicalUtils").TokenCreationState.PRESENT,
          ),
          o("WAWebCanonicalEntRecoveryWam").logCredentialsStored(t),
          o("WAWebCanonicalWamFalcoBuffer").drainCanonicalWamFalcoBuffer())
        : e === m.FAILED &&
          o("WAWebCanonicalUtils").setTokenCreationState(
            o("WAWebCanonicalUtils").TokenCreationState.IDLE,
          );
    }
    function g(e, t) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Storing canonical credentials directly",
              ])),
          ),
            o("WAWebCanonicalUtils").setTokenCreationState(
              o("WAWebCanonicalUtils").TokenCreationState.IN_PROGRESS,
            ));
          var n = yield p(e, { retry: !1 });
          return (f(n, t), n);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Exchanging nonce for token",
              ])),
          );
          var n = o("WAWebCanonicalEntRecoveryWam").generateRequestId();
          (o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(t, n),
            o("WAWebCanonicalUtils").setTokenCreationState(
              o("WAWebCanonicalUtils").TokenCreationState.IN_PROGRESS,
            ),
            r("WAWebODS").incr("web.app.canonical.exchange.attempt"));
          var a = yield p(e, { retry: !0 });
          return (
            f(a, t),
            a === m.SUCCESS
              ? (r("WAWebODS").incr("web.app.canonical.exchange.success"),
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess(t, n))
              : a === m.FAILED &&
                (r("WAWebODS").incr("web.app.canonical.exchange.failed"),
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError(t, n)),
            a
          );
        })),
        C.apply(this, arguments)
      );
    }
    ((l.TokenExchangeResult = m),
      (l.storeCanonicalCredentials = g),
      (l.exchangeNonceForToken = y));
  },
  98,
);
