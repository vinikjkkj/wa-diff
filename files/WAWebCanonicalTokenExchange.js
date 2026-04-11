__d(
  "WAWebCanonicalTokenExchange",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
    "WAWebCanonicalGating",
    "WAWebCanonicalUtils",
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
      m,
      p,
      _,
      f = n("$InternalEnum").Mirrored(["IDLE", "IN_PROGRESS", "PRESENT"]),
      g = n("$InternalEnum").Mirrored(["SUCCESS", "FAILED", "TIMEOUT"]),
      h = f.IDLE;
    function y(e) {
      h = e;
    }
    function C() {
      return h;
    }
    function b() {
      return o("WAWebCanonicalGating").isCanonicalAppReloadEnabled()
        ? self.location.pathname === "/login"
          ? (o("WALogger").LOG(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[reload] reloading at /login, after canonical reg completed",
                ])),
            ),
            self.location.reload(),
            !0)
          : C() === f.PRESENT
            ? (o("WALogger").LOG(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "[reload][canonical] reloading after canonical reg completed",
                  ])),
              ),
              o("WAWebCanonicalUtils").markCredentialsStoredForPostReload(),
              self.location.reload(),
              !0)
            : (o("WALogger").LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[canonical] omit reload, token creation not done",
                  ])),
              ),
              !1)
        : !1;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var a = (function () {
              var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var t;
                    o("WALogger").LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[canonical] Exchanging nonce for token",
                        ])),
                    );
                    var n = e.accessToken,
                      a = e.deviceId,
                      i = e.nonce,
                      l = e.userId,
                      s = r(
                        "WAXWhatsAppWebAuthControllerRouteBuilder",
                      ).buildUri({
                        access_token: n != null ? n : "",
                        nonce: i,
                        user_id: l,
                        device_id: a,
                      }),
                      u = yield o(
                        "WAWebXControllerFetchUtils",
                      ).fetchFromXController(s.toString(), {
                        method: "POST",
                        retry: !0,
                      });
                    if (!u.ok)
                      return (
                        o("WALogger").ERROR(
                          d ||
                            (d = babelHelpers.taggedTemplateLiteralLoose([
                              "[canonical] Failed to exchange nonce: HTTP ",
                              "",
                            ])),
                          u.status,
                        ),
                        g.FAILED
                      );
                    var _ = yield o(
                      "WAWebXControllerFetchUtils",
                    ).extractJsonFromResponse(u);
                    if (
                      _ == null ||
                      ((t = _.payload) == null ? void 0 : t.status) !==
                        "success"
                    ) {
                      var f,
                        h,
                        y,
                        C,
                        b =
                          (f =
                            _ == null || (h = _.payload) == null
                              ? void 0
                              : h.status) != null
                            ? f
                            : "invalid response",
                        v =
                          (y =
                            _ == null || (C = _.payload) == null
                              ? void 0
                              : C.error) != null
                            ? y
                            : "unknown";
                      return (
                        o("WALogger")
                          .ERROR(
                            m ||
                              (m = babelHelpers.taggedTemplateLiteralLoose([
                                "[canonical] nonce exchange fail: ",
                                " err=",
                                "",
                              ])),
                            b,
                            v,
                          )
                          .sendLogs("canonical-error", { sampling: 0.01 }),
                        g.FAILED
                      );
                    }
                    return g.SUCCESS;
                  } catch (e) {
                    return (
                      o("WALogger")
                        .ERROR(
                          p ||
                            (p = babelHelpers.taggedTemplateLiteralLoose([
                              "[canonical] Unexpected error during nonce exchange: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("canonical-error", { sampling: 0.01 }),
                      g.FAILED
                    );
                  }
                },
              );
              return function () {
                return t.apply(this, arguments);
              };
            })(),
            i = function (t) {
              t === g.SUCCESS ? y(f.PRESENT) : t === g.FAILED && y(f.IDLE);
            };
          (o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(),
            y(f.IN_PROGRESS));
          var l = function (t) {
            t === g.SUCCESS
              ? o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess()
              : t === g.FAILED &&
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError();
          };
          if (t == null) {
            var s = yield a();
            return (i(s), l(s), s);
          }
          return new (_ || (_ = n("Promise")))(function (e) {
            var n = window.setTimeout(function () {
              e(g.TIMEOUT);
            }, t);
            a()
              .then(function (t) {
                (i(t), l(t), window.clearTimeout(n), e(t));
              })
              .catch(function () {
                (i(g.FAILED), l(g.FAILED), window.clearTimeout(n), e(g.FAILED));
              });
          });
        })),
        S.apply(this, arguments)
      );
    }
    ((l.TokenCreationState = f),
      (l.TokenExchangeResult = g),
      (l.setTokenCreationState = y),
      (l.getTokenCreationState = C),
      (l.maybeReloadAfterRegistration = b),
      (l.exchangeNonceForToken = v));
  },
  98,
);
