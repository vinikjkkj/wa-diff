__d(
  "WAWebMexNativeClient",
  [
    "WACustomError",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexLogging",
    "WAWebMexRelayEnvironment",
    "asyncToGeneratorRuntime",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, n) {
          var a = new (o("WAWebMexLogging").MexPerfTracker)(!0);
          a.start();
          try {
            var i = f(t),
              l = i.params;
            (a.setQueryId(l.id), a.setOperationName(l.name));
            var c = { metadata: { mexPerfTracker: a } },
              d = yield o("WAWebMexRelayEnvironment").fetchFunc(i.params, n, c),
              m = _(d, a);
            return (a.setHasData(!0), a.stop(), a.logEvent(), m.data);
          } catch (n) {
            if (
              n instanceof o("WAWebMexRelayEnvironment").MexIqError ||
              n instanceof
                o("WAWebMexRelayEnvironment").MexPayloadParsingError ||
              n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError
            )
              n instanceof
                o("WAWebMexRelayEnvironment").MexFatalExtensionError ||
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[mex][native-client] infra error",
                      ])),
                  )
                  .catching(n)
                  .tags("mex", "native-client")
                  .sendLogs("mex-native-client-infra-error");
            else {
              var g = r("getErrorSafe")(n);
              (o("WALogger")
                .ERROR(
                  s ||
                    (s = babelHelpers.taggedTemplateLiteralLoose([
                      "[mex][native-client] unexpected error",
                    ])),
                )
                .catching(g)
                .tags("mex", "native-client")
                .sendLogs("mex-native-client-unexpected-error"),
                a.setHasData(!1),
                a.setErrors([
                  o("WAWebMexLogging").createLoggingClientError(417, g.message),
                ]));
            }
            if (
              (a.stop(),
              a.logEvent(),
              n instanceof
                o("WAWebMexRelayEnvironment").MexFatalExtensionError ||
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "[MEX][",
                        "] fetch query error",
                      ])),
                    h(t),
                  )
                  .tags("GQL", "MEX"),
              n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError)
            ) {
              var y = n.error.extensions,
                C = y.backoff_sec,
                b = y.error_code,
                v = y.is_retryable;
              throw new (o("WAWebBackendErrors").MexServerStatusCodeError)(
                Number(b),
                "MexFatalExtensionError: " + h(t) + ": " + n.error.message,
                { backoffMs: p(C), retryable: v },
              );
            }
            throw n instanceof o("WAWebMexRelayEnvironment").MexIqError
              ? new (o("WAWebBackendErrors").ServerStatusCodeError)(
                  n.code,
                  "MexIqError: " + n.message,
                )
              : n;
          }
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e != null && Number.isFinite(e) && e > 0 ? e * c : null;
    }
    function _(e, t) {
      if (e.data != null) return { data: e.data };
      if (Array.isArray(e)) {
        var n = "mex response is an array";
        throw (
          t.setErrors([o("WAWebMexLogging").createLoggingClientError(472, n)]),
          new (o("WAWebMexRelayEnvironment").MexPayloadParsingError)(
            r("err")(n),
          )
        );
      }
      var a = "data is missing in mex response";
      throw (
        t.setErrors([o("WAWebMexLogging").createLoggingClientError(472, a)]),
        new (o("WAWebMexRelayEnvironment").MexPayloadParsingError)(r("err")(a))
      );
    }
    function f(e) {
      var t,
        n = g(e);
      if (n != null) return n;
      var r = e.default != null ? e.default.kind : e.kind;
      throw new (o("WACustomError").CustomError)(
        "operation kind " +
          ((t = JSON.stringify(r)) != null ? t : "") +
          " is not 'Request'",
      );
    }
    function g(e) {
      return e.kind === "Request" && e.default == null
        ? e
        : e.default != null && e.default.kind === "Request"
          ? e.default
          : null;
    }
    function h(e) {
      var t = g(e);
      return t != null ? t.params.name : "unknown-operation";
    }
    l.fetchQuery = d;
  },
  98,
);
