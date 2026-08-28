__d(
  "BaseBillingError",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r) {
      return JSON.stringify({
        api_error_code: r,
        description: n,
        message: e,
        summary: t,
      });
    }
    var l = (function (t) {
      function n(n, r, o, a, i, l) {
        var s;
        (l === void 0 && (l = {}),
          (s = t.call(this, n) || this),
          (s.class = "BaseBillingError"),
          (s.logged = !1));
        var u = l,
          c = u.apiErrorCode,
          d = u.description,
          m = u.errorCategory,
          p = u.errorCode,
          _ = u.helpCenterID,
          f = u.originalError,
          g = u.sourceState,
          h = u.stack,
          y = u.summary;
        return (
          (s.apiErrorCode = c),
          (s.errorCategory = m),
          (s.originalError = f),
          (s.type = r),
          (s.helpCenterID = _),
          (s.sourceState = g),
          (s.errorPayload = {
            error_stacktrace: h != null ? h : void 0,
            event: o,
            exception_class: i,
            exception_code: p != null ? p : void 0,
            exception_message: e(n, y, d, c),
            upl_event: a != null ? a : { action: "unknown" },
          }),
          y != null && (s.summary = y),
          d != null && (s.description = d),
          s
        );
      }
      return (babelHelpers.inheritsLoose(n, t), n);
    })(babelHelpers.wrapNativeSuper(Error));
    i.default = l;
  },
  66,
);
