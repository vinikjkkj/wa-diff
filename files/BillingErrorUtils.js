__d(
  "BillingErrorUtils",
  ["BillingError", "BillingSurfaceError", "BillingWizardRootUPLogger", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 1675030,
      s = 4992033,
      u = 4992034,
      c = 4992035,
      d = 4992031,
      m = 4992038,
      p = 4992039,
      _ = 4992040,
      f = 4992041,
      g = 4992043,
      h = 4992044;
    function y(e) {
      if (e == null || typeof e != "object") return null;
      var t = e;
      for (var n of Object.values(t))
        if (!(n == null || typeof n != "object")) {
          var r = n,
            o = r.payments_error;
          if (!(o == null || typeof o != "object")) {
            var a = o;
            return {
              description:
                typeof a.error_description == "string"
                  ? a.error_description
                  : null,
              errorCode: typeof a.error_code == "number" ? a.error_code : null,
              summary: typeof a.error_title == "string" ? a.error_title : null,
            };
          }
        }
      return null;
    }
    function C(e, t, n) {
      var o = y(e);
      return o == null
        ? null
        : new (r("BillingError"))(
            "Mutation returned a payments error",
            "server side mutation failure",
            t,
            n,
            "error",
            o,
          );
    }
    function b(e) {
      return (e == null ? void 0 : e.name) === "NetworkTransportError"
        ? { errorCode: s, errorType: "network transport exception" }
        : (e == null ? void 0 : e.name) === "NetworkTimeoutError"
          ? { errorCode: u, errorType: "network timeout exception" }
          : (e == null ? void 0 : e.name) === "NetworkRequestError"
            ? { errorCode: c, errorType: "network request exception" }
            : null;
    }
    function v(e) {
      var t,
        n,
        r,
        o,
        a = e == null || (t = e.source) == null ? void 0 : t.error_category,
        i = e == null || (n = e.source) == null ? void 0 : n.exception_category,
        l = e == null ? void 0 : e.error_category,
        s = e == null ? void 0 : e.exception_category;
      return (r = (o = a != null ? a : i) != null ? o : l) != null ? r : s;
    }
    function S(e) {
      return e == null ? void 0 : e.code;
    }
    function R(e, t) {
      return e != null && t == null;
    }
    function L(e, t, n) {
      var r = v(e);
      return r != null ? r : R(t, n) ? "user" : void 0;
    }
    function E(e) {
      if (e != null && typeof e == "object" && "extra_data" in e) {
        var t = e.extra_data,
          n;
        if (typeof t == "string") n = t;
        else
          try {
            var o;
            n = (o = JSON.stringify(t)) != null ? o : "Unknown error";
          } catch (e) {
            n = "Unknown error";
          }
        return r("err")(n);
      }
      if (e != null && typeof e == "object") {
        if (e instanceof Error) return e;
        var a = e,
          i = typeof a.message == "string" ? a.message : "Unknown error",
          l = r("err")(i);
        return (typeof a.name == "string" && (l.name = a.name), l);
      }
      return r("err")("Unknown error type: " + String(e));
    }
    function k(t, n, o, a, i) {
      var l, s, u, c, d, m;
      if (a instanceof r("BillingError")) return a;
      var p =
          a == null || (l = a.source) == null || (l = l.exception) == null
            ? void 0
            : l.stack_trace,
        _ = a == null || (s = a.source) == null ? void 0 : s.api_error_code,
        f = (a == null ? void 0 : a.code) === e,
        g = i,
        h = t,
        y = b(a),
        C = L(a, _, y),
        v = (u = S(a)) != null ? u : _;
      return (
        y != null && ((h = y.errorType), (g = "warning")),
        new (r("BillingError"))(
          (c = a == null ? void 0 : a.message) != null ? c : "",
          h,
          n,
          o,
          g,
          {
            apiErrorCode: _,
            description: f ? null : a == null ? void 0 : a.description,
            errorCategory: C,
            errorCode: (d = y == null ? void 0 : y.errorCode) != null ? d : v,
            helpCenterID:
              a == null || (m = a.source) == null ? void 0 : m.help_center_id,
            originalError: a,
            stack: p != null ? JSON.stringify(p) : a == null ? void 0 : a.stack,
            summary: f ? null : a == null ? void 0 : a.summary,
          },
        )
      );
    }
    function I(t, n, o, a, i) {
      var l, s, u, c, d, m;
      if (a instanceof r("BillingSurfaceError")) return a;
      var p = t,
        _ = i,
        f = b(a);
      if (
        (f != null && ((p = f.errorType), (_ = "warning")),
        a instanceof r("BillingError"))
      ) {
        var g, h, y, C, v;
        if (
          (a == null || (g = a.source) == null || (g = g.exception) == null
            ? void 0
            : g.stack_trace) != null
        ) {
          var R;
          v = JSON.stringify(
            a == null || (R = a.source) == null || (R = R.exception) == null
              ? void 0
              : R.stack_trace,
          );
        } else
          a.componentStack != null && typeof a.componentStack == "string"
            ? (v = a.componentStack)
            : (v = a.stack);
        return new (r("BillingSurfaceError"))(
          (h =
            (y = (C = a.originalError) == null ? void 0 : C.message) != null
              ? y
              : a.errorPayload.exception_message) != null
            ? h
            : "",
          a.type,
          n,
          o,
          _,
          {
            apiErrorCode: a.apiErrorCode,
            description: a == null ? void 0 : a.description,
            errorCategory: a.errorCategory,
            errorCode: a.errorPayload.exception_code,
            helpCenterID: a.helpCenterID,
            originalError: a,
            stack: v,
            summary: a == null ? void 0 : a.summary,
          },
        );
      }
      var E =
          a == null || (l = a.source) == null || (l = l.exception) == null
            ? void 0
            : l.stack_trace,
        k = a == null || (s = a.source) == null ? void 0 : s.api_error_code,
        I = (a == null ? void 0 : a.code) === e,
        T = L(a, k, f),
        D = (u = S(a)) != null ? u : k;
      return new (r("BillingSurfaceError"))(
        (c = a == null ? void 0 : a.message) != null ? c : "",
        p,
        n,
        o,
        _,
        {
          apiErrorCode: k,
          description: I ? null : a == null ? void 0 : a.description,
          errorCategory: T,
          errorCode: (d = f == null ? void 0 : f.errorCode) != null ? d : D,
          helpCenterID:
            a == null || (m = a.source) == null ? void 0 : m.help_center_id,
          originalError: a,
          stack: E != null ? JSON.stringify(E) : a == null ? void 0 : a.stack,
          summary: I ? null : a == null ? void 0 : a.summary,
        },
      );
    }
    function T(e, t, n, o, a) {
      var i = k(t, n, o, e instanceof Error ? e : r("err")("Unknown error"));
      return (
        i.logged ||
          (r("BillingWizardRootUPLogger").logBillingPayloadError(
            i.type,
            i.errorPayload,
            a,
            i.errorCategory,
          ),
          (i.logged = !0)),
        i
      );
    }
    ((l.BILLING_ERRORS__EXTERNAL_SITE_NON_SUCCESS = d),
      (l.BILLING_ERRORS__FORM_VALIDATION_FAILED = m),
      (l.BILLING_ERRORS__PTT_GENERATION_FAILED = p),
      (l.BILLING_ERRORS__THIRD_PARTY_REQUEST_STATUS_FAILED = _),
      (l.BILLING_ERRORS__CC_ACTIVATION_FAILED = f),
      (l.BILLING_ERRORS__CURRENCY_MISMATCH = g),
      (l.BILLING_ERRORS__WIZARD_MISSING_PROP = h),
      (l.buildBillingErrorFromMutationResponse = C),
      (l.normalizeError = E),
      (l.buildBillingErrorFromError = k),
      (l.buildBillingSurfaceError = I),
      (l.convertAndLogBillingError = T));
  },
  98,
);
