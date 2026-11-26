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
    async function d(t, n, a) {
      var i = new (o("WAWebMexLogging").MexPerfTracker)(!0);
      i.start();
      try {
        var l = _(t),
          c = l.params;
        (i.setQueryId(c.id), i.setOperationName(c.name));
        var d = {
            metadata: {
              mexPerfTracker: i,
              withoutRetry: (a == null ? void 0 : a.withoutRetry) === !0,
            },
          },
          f = await o("WAWebMexRelayEnvironment").fetchFunc(l.params, n, d),
          h = p(f, i);
        return (i.setHasData(!0), i.stop(), i.logEvent(), h.data);
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
          var y = r("getErrorSafe")(n);
          (o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[mex][native-client] unexpected error",
                ])),
            )
            .catching(y)
            .tags("mex", "native-client")
            .sendLogs("mex-native-client-unexpected-error"),
            i.setHasData(!1),
            i.setErrors([
              o("WAWebMexLogging").createLoggingClientError(417, y.message),
            ]));
        }
        if (
          (i.stop(),
          i.logEvent(),
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
          var C = n.error.extensions,
            b = C.backoff_sec,
            v = C.error_code,
            S = C.is_retryable;
          throw new (o("WAWebBackendErrors").MexServerStatusCodeError)(
            Number(v),
            "MexFatalExtensionError: " + g(t) + ": " + n.error.message,
            { backoffMs: m(b), retryable: S },
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
