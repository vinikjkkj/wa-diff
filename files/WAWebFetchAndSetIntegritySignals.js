__d(
  "WAWebFetchAndSetIntegritySignals",
  [
    "Promise",
    "WACustomError",
    "WALogger",
    "WAPromiseTimeout",
    "WAWebBackendApi",
    "WAWebDBUpdateChatTable",
    "WAWebMexFetchIntegritySignals",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "isEmptyObject",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 600;
    function f(t) {
      try {
        return (
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[FMX] firing integrity signals MEX call for ",
                "",
              ])),
            t.toLogString(),
          ),
          o("WAPromiseTimeout")
            .promiseTimeout(
              o("WAWebMexFetchIntegritySignals").fetchIntegritySignals(
                o("WAWebWidFactory").asUserWidOrThrow(t),
              ),
              _,
            )
            .then(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e) {
                    if (e != null) {
                      var n = e.isNewAccount,
                        a = e.isSuspicious;
                      o("WALogger").LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[FMX] integrity signals for ",
                            ": isNewAccount=",
                            ", isSuspicious=",
                            "",
                          ])),
                        t.toLogString(),
                        String(n),
                        String(a),
                      );
                      var i = {},
                        l = {};
                      (n != null &&
                        ((i.isSenderNewAccount = n),
                        (l.isSenderNewAccount = n)),
                        a != null &&
                          ((i.isSenderSuspicious = a),
                          (l.isSenderSuspicious = a)),
                        r("isEmptyObject")(i) ||
                          (yield o("WAWebBackendApi").frontendSendAndReceive(
                            "chatCollectionUpdate",
                            { updates: [babelHelpers.extends({ id: t }, i)] },
                          ),
                          o("WAWebDBUpdateChatTable").updateChatTable(t, l)));
                    }
                  },
                );
                return function (t) {
                  return e.apply(this, arguments);
                };
              })(),
              function (e) {
                e instanceof o("WACustomError").TimeoutError
                  ? o("WALogger")
                      .ERROR(
                        u ||
                          (u = babelHelpers.taggedTemplateLiteralLoose([
                            "[FMX] integrity signals MEX call timed out for ",
                            "",
                          ])),
                        t.toLogString(),
                      )
                      .sendLogs("fmx-integrity-signals-mex-timeout")
                  : o("WALogger")
                      .ERROR(
                        c ||
                          (c = babelHelpers.taggedTemplateLiteralLoose([
                            "[FMX] integrity signals fetch failed for ",
                            "",
                          ])),
                        t.toLogString(),
                      )
                      .catching(r("getErrorSafe")(e))
                      .sendLogs("fmx-integrity-signals-failed");
              },
            )
            .catch(function (e) {
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[FMX] unexpected error in integrity signals handler for ",
                      "",
                    ])),
                  t.toLogString(),
                )
                .catching(r("getErrorSafe")(e))
                .sendLogs("fmx-integrity-signals-handler-failed");
            })
        );
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "[FMX] failed to initiate integrity signals fetch for ",
                  "",
                ])),
              t.toLogString(),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("fmx-integrity-signals-init-failed"),
          (p || (p = n("Promise"))).resolve()
        );
      }
    }
    l.fetchAndSetIntegritySignals = f;
  },
  98,
);
