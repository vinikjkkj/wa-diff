__d(
  "WAWebCanonicalTokenExchange",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebCanonicalEntRecoveryWam",
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
      p = n("$InternalEnum").Mirrored(["SUCCESS", "FAILED", "TIMEOUT"]),
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
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a) {
          var i = (function () {
              var a = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  try {
                    var n;
                    o("WALogger").LOG(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[canonical] Exchanging nonce for token",
                        ])),
                    );
                    var a = t.accessToken,
                      i = t.deviceId,
                      l = t.nonce,
                      d = t.userId,
                      m = r(
                        "WAXWhatsAppWebAuthControllerRouteBuilder",
                      ).buildUri({
                        access_token: a != null ? a : "",
                        nonce: l,
                        user_id: d,
                        device_id: i,
                      }),
                      _ = yield o(
                        "WAWebXControllerFetchUtils",
                      ).fetchFromXController(m.toString(), {
                        method: "POST",
                        retry: !0,
                      });
                    if (!_.ok)
                      return (
                        o("WALogger").ERROR(
                          s ||
                            (s = babelHelpers.taggedTemplateLiteralLoose([
                              "[canonical] Failed to exchange nonce: HTTP ",
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
                      ((n = f.payload) == null ? void 0 : n.status) !==
                        "success"
                    ) {
                      var g,
                        h,
                        y,
                        C,
                        b =
                          (g =
                            f == null || (h = f.payload) == null
                              ? void 0
                              : h.status) != null
                            ? g
                            : "invalid response",
                        v =
                          (y =
                            f == null || (C = f.payload) == null
                              ? void 0
                              : C.error) != null
                            ? y
                            : "unknown";
                      return (
                        o("WALogger")
                          .ERROR(
                            u ||
                              (u = babelHelpers.taggedTemplateLiteralLoose([
                                "[canonical] nonce exchange fail: ",
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
                          c ||
                            (c = babelHelpers.taggedTemplateLiteralLoose([
                              "[canonical] Unexpected error during nonce exchange: ",
                              "",
                            ])),
                          e,
                        )
                        .sendLogs("canonical-error", { sampling: 0.01 }),
                      p.FAILED
                    );
                  }
                },
              );
              return function () {
                return a.apply(this, arguments);
              };
            })(),
            l = function (t) {
              t === p.SUCCESS ? f(m.PRESENT) : t === p.FAILED && f(m.IDLE);
            };
          (o("WAWebCanonicalEntRecoveryWam").logExchangeNonceStart(),
            f(m.IN_PROGRESS));
          var _ = function (t) {
            t === p.SUCCESS
              ? o("WAWebCanonicalEntRecoveryWam").logExchangeNonceSuccess()
              : t === p.FAILED &&
                o("WAWebCanonicalEntRecoveryWam").logExchangeNonceError();
          };
          if (a == null) {
            var g = yield i();
            return (l(g), _(g), g);
          }
          return new (d || (d = n("Promise")))(function (e) {
            var t = window.setTimeout(function () {
              e(p.TIMEOUT);
            }, a);
            i()
              .then(function (n) {
                (l(n), _(n), window.clearTimeout(t), e(n));
              })
              .catch(function () {
                (l(p.FAILED), _(p.FAILED), window.clearTimeout(t), e(p.FAILED));
              });
          });
        })),
        y.apply(this, arguments)
      );
    }
    ((l.TokenCreationState = m),
      (l.TokenExchangeResult = p),
      (l.setTokenCreationState = f),
      (l.getTokenCreationState = g),
      (l.exchangeNonceForToken = h));
  },
  98,
);
