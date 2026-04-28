__d(
  "WAWebCanonicalTokenExchange",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
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
      m = n("$InternalEnum").Mirrored(["IDLE", "IN_PROGRESS", "PRESENT"]),
      p = n("$InternalEnum").Mirrored(["SUCCESS", "FAILED"]),
      _ = m.IDLE;
    function f(e) {
      _ = e;
    }
    function g() {
      return _;
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          try {
            var a,
              i = t.accessToken,
              l = t.deviceId,
              c = t.nonce,
              d = t.userId,
              m = r("WAXWhatsAppWebAuthControllerRouteBuilder").buildUri({
                access_token: i != null ? i : "",
                nonce: c,
                user_id: d,
                device_id: l,
              }),
              _ = yield o("WAWebXControllerFetchUtils").fetchFromXController(
                m.toString(),
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
                p.FAILED
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
                p.FAILED
              );
            }
            return p.SUCCESS;
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
              p.FAILED
            );
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      e === p.SUCCESS
        ? (f(m.PRESENT),
          o("WAWebCanonicalEntRecoveryWam").logCredentialsStored())
        : e === p.FAILED && f(m.IDLE);
    }
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          (o("WALogger").LOG(
            c ||
              (c = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Storing canonical credentials directly",
              ])),
          ),
            f(m.IN_PROGRESS));
          var t = yield h(e, { retry: !1 });
          return (C(t), t);
        })),
        v.apply(this, arguments)
      );
    }
    function S(e) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          o("WALogger").LOG(
            d ||
              (d = babelHelpers.taggedTemplateLiteralLoose([
                "[canonical] Exchanging nonce for token",
              ])),
          );
          var t = o("WAWebCanonicalEntRecoveryWam").generateRequestId();
          (o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(t),
            f(m.IN_PROGRESS),
            r("WAWebODS").incr("web.app.canonical.exchange.attempt"));
          var n = yield h(e, { retry: !0 });
          return (
            C(n),
            n === p.SUCCESS
              ? (r("WAWebODS").incr("web.app.canonical.exchange.success"),
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess(t))
              : n === p.FAILED &&
                (r("WAWebODS").incr("web.app.canonical.exchange.failed"),
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError(t)),
            n
          );
        })),
        R.apply(this, arguments)
      );
    }
    ((l.TokenCreationState = m),
      (l.TokenExchangeResult = p),
      (l.setTokenCreationState = f),
      (l.getTokenCreationState = g),
      (l.storeCanonicalCredentials = b),
      (l.exchangeNonceForToken = S));
  },
  98,
);
