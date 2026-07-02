__d(
  "WAWebDeserializeBridgedError",
  [
    "WAAbortError",
    "WALogger",
    "WAWebHttpErrors",
    "WAWebMmsClientErrors",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      var t,
        n = {
          message: e.message,
          stack: (t = e.stack) != null ? t : "",
          name: e.name,
        };
      if (e instanceof o("WAWebHttpErrors").HttpStatusCodeError)
        return babelHelpers.extends({}, n, { statusCode: e.status });
      if (e instanceof o("WAAbortError").AbortError || e.name === "AbortError")
        return babelHelpers.extends({}, n, { name: "AbortError", isAbort: !0 });
      var r = babelHelpers.extends({}, n);
      return r;
    }
    function u(e) {
      var t = e.isAbort,
        n = e.message,
        r = e.name,
        a = e.stack,
        i = e.statusCode,
        l = t === !0 ? "AbortError" : r,
        s =
          l === "AbortError"
            ? new (o("WAAbortError").AbortError)(n)
            : l === "MediaNotFoundError"
              ? new (o("WAWebMmsClientErrors").MediaNotFoundError)(n)
              : l === "MediaTooLargeError"
                ? new (o("WAWebMmsClientErrors").MediaTooLargeError)(n)
                : l === "MediaInvalidError"
                  ? new (o("WAWebMmsClientErrors").MediaInvalidError)(n)
                  : l === "MMSUnauthorizedError"
                    ? new (o("WAWebMmsClientErrors").MMSUnauthorizedError)(n)
                    : l === "MMSForbiddenError"
                      ? new (o("WAWebMmsClientErrors").MMSForbiddenError)(n)
                      : l === "MMSThrottleError"
                        ? new (o("WAWebMmsClientErrors").MMSThrottleError)(n)
                        : l === "HttpStatusCodeError"
                          ? c(i, n)
                          : d(r, n);
      return ((s.message = n), (s.stack = a || s.stack), s);
    }
    function c(t, n) {
      return t == null
        ? (o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "deserializeBridgedError missing statusCode for HttpStatusCodeError",
                ])),
            )
            .sendLogs("deserialize-bridged-error-missing-status-code"),
          r("err")(n))
        : new (o("WAWebHttpErrors").HttpStatusCodeError)(t, n);
    }
    function d(e, t) {
      var n = r("err")(t);
      return ((n.name = e || "Error"), n);
    }
    ((l.serializeBridgedError = s), (l.deserializeBridgedError = u));
  },
  98,
);
