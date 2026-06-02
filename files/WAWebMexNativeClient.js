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
    var e, s, u;
    async function c(t, n) {
      var a = new (o("WAWebMexLogging").MexPerfTracker)(!0);
      a.start();
      try {
        var i = m(t),
          l = i.params;
        (a.setQueryId(l.id), a.setOperationName(l.name));
        var c = { metadata: { mexPerfTracker: a } },
          p = await o("WAWebMexRelayEnvironment").fetchFunc(i.params, n, c),
          f = d(p, a);
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
          n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError ||
            o("WALogger")
              .ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[MEX][",
                    "] fetch query error",
                  ])),
                _(t),
              )
              .tags("GQL", "MEX"),
          n instanceof o("WAWebMexRelayEnvironment").MexFatalExtensionError)
        ) {
          var h = n.error.extensions.error_code;
          throw new (o("WAWebBackendErrors").ServerStatusCodeError)(
            Number(h),
            "MexFatalExtensionError: " + _(t) + ": " + n.error.message,
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
    function d(e, t) {
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
    function m(e) {
      var t,
        n = p(e);
      if (n != null) return n;
      var r = e.default != null ? e.default.kind : e.kind;
      throw new (o("WACustomError").CustomError)(
        "operation kind " +
          ((t = JSON.stringify(r)) != null ? t : "") +
          " is not 'Request'",
      );
    }
    function p(e) {
      return e.kind === "Request" && e.default == null
        ? e
        : e.default != null && e.default.kind === "Request"
          ? e.default
          : null;
    }
    function _(e) {
      var t = p(e);
      return t != null ? t.params.name : "unknown-operation";
    }
    l.fetchQuery = c;
  },
  98,
);
