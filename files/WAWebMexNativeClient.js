__d(
  "WAWebMexNativeClient",
  [
    "WACustomError",
    "WALogger",
    "WAWebBackendErrors",
    "WAWebMexLogging",
    "WAWebMexRelayEnvironment",
    "err",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 1e3;
    async function d(t, n) {
      var a = new (o("WAWebMexLogging").MexPerfTracker)(!0);
      a.start();
      try {
        var i = _(t),
          l = i.params;
        (a.setQueryId(l.id), a.setOperationName(l.name));
        var c = { metadata: { mexPerfTracker: a } },
          d = await o("WAWebMexRelayEnvironment").fetchFunc(i.params, n, c),
          f = p(d, a);
        return (a.setHasData(!0), a.stop(), a.logEvent(), f.data);
      } catch (n) {
        if (
          n instanceof o("WAWebMexRelayEnvironment").MexIqError ||
          n instanceof o("WAWebMexRelayEnvironment").MexPayloadParsingError ||
          n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError
        )
          n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError ||
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
          var h = r("getErrorSafe")(n);
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][native-client] unexpected error",
                ])),
            )
            .catching(h)
            .tags("mex", "native-client")
            .sendLogs("mex-native-client-unexpected-error"),
            a.setHasData(!1),
            a.setErrors([
              o("WAWebMexLogging").createLoggingClientError(417, h.message),
            ]));
        }
        if (
          (a.stop(),
          a.logEvent(),
          n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError ||
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][",
                    "] fetch query error",
                  ])),
                g(t),
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
            "MexFatalExtensionError: " + g(t) + ": " + n.error.message,
            { backoffMs: m(C), retryable: v },
          );
        }
        throw n instanceof o("WAWebMexRelayEnvironment").MexIqError
          ? new (o("WAWebBackendErrors").ServerStatusCodeError)(
              n.code,
              "MexIqError: " + n.message,
            )
          : n;
      }
    }
    function m(e) {
      return e != null && Number.isFinite(e) && e > 0 ? e * c : null;
    }
    function p(e, t) {
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
    function _(e) {
      var t,
        n = f(e);
      if (n != null) return n;
      var r = e.default != null ? e.default.kind : e.kind;
      throw new (o("WACustomError").CustomError)(
        "operation kind " +
          ((t = JSON.stringify(r)) != null ? t : "") +
          " is not 'Request'",
      );
    }
    function f(e) {
      return e.kind === "Request" && e.default == null
        ? e
        : e.default != null && e.default.kind === "Request"
          ? e.default
          : null;
    }
    function g(e) {
      var t = f(e);
      return t != null ? t.params.name : "unknown-operation";
    }
    l.fetchQuery = d;
  },
  98,
);
