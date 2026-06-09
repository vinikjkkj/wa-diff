__d(
  "WAWebBizNativeAdsFBAuthError",
  ["WAWebFailureErrorCodes", "WAWebGraphQLServerError"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n;
      if (!(e == null || typeof e != "object"))
        return (n = Object.getOwnPropertyDescriptor(e, t)) == null
          ? void 0
          : n.value;
    }
    function s(t, n) {
      var r = e(t, n);
      return typeof r == "number" ? r : null;
    }
    function u(e) {
      return (
        o("WAWebGraphQLServerError").GraphQLErrorCode.cast(e) ===
        o("WAWebGraphQLServerError").GraphQLErrorCode.INVALID_ACCESS_TOKEN
      );
    }
    function c(t) {
      var n = e(t, "source"),
        r = e(n, "errorMsg");
      if (typeof r != "string") return null;
      try {
        var o,
          a = JSON.parse(r),
          i = a == null || (o = a.error) == null ? void 0 : o.code;
        return typeof i == "number" ? i : null;
      } catch (e) {
        return null;
      }
    }
    function d(e) {
      var t = s(e, "code");
      if (
        t != null &&
        (u(t) ||
          t ===
            o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE)
      )
        return !0;
      if (e instanceof o("WAWebGraphQLServerError").GraphQLServerError)
        return e.source.errors.some(function (e) {
          return (
            u(e.code) ||
            e.code ===
              o("WAWebFailureErrorCodes").FAILURE_REASON.REASON_GENERIC_FAILURE
          );
        });
      if (e.name === "NetworkOAuthError") {
        var n = c(e);
        return n == null || u(n);
      }
      return !1;
    }
    l.isFBAuthError = d;
  },
  98,
);
