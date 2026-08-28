__d(
  "AndromedaValidator",
  [
    "AdsTreeMatcher",
    "AndromedaDispatchLogger",
    "AndromedaFieldTraceLogger",
    "AndromedaJSONUtils",
    "AndromedaSVLog",
    "FBLogger",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, r, o, a, i, l) {
      if (
        (o === void 0 && (o = null),
        a === void 0 && (a = null),
        i === void 0 && (i = null),
        !e.shouldSkipEventShadowValidation())
      )
        return s({
          moduleName: t,
          testData: n,
          controlData: r,
          qplEvent: e.genAdsInteropShadowValidationQplEvent(),
          treeMatcherOptions: e.treeMatcherOptions,
          extraAnnotations: o,
          logDataOnMismatch: e.logDataOnMismatch,
          logActionsOnMismatch: e.logActionsOnMismatch,
          matchers: a,
          fieldsToMatch: i,
          onMismatch: l,
        });
    }
    function s(e) {
      var t = e.controlData,
        n = e.extraAnnotations,
        a = e.fieldsToMatch,
        i = e.logActionsOnMismatch,
        l = e.logDataOnMismatch,
        s = e.matchers,
        c = e.moduleName,
        d = e.onMismatch,
        m = e.qplEvent,
        p = e.testData,
        _ = e.treeMatcherOptions,
        f = new (r("AndromedaFieldTraceLogger"))(),
        g = !1,
        h = [],
        y,
        C,
        b;
      function v(e) {
        try {
          return JSON.stringify(e, u);
        } catch (e) {
          var t = r("getErrorSafe")(e);
          (h.push(
            JSON.stringify({ error: t.toString(), error_stack: t.stack }),
          ),
            r("FBLogger")("relay_ads_manager")
              .catching(t)
              .mustfix("Error stringifying data"));
        }
      }
      try {
        ((_ == null ? void 0 : _.__global) != null &&
          (_.__global.onMismatch = f.onMismatch),
          (g = o("AdsTreeMatcher").matchTree(p, t, s, _, a)));
      } catch (e) {
        var S = r("getErrorSafe")(e);
        (h.push(
          JSON.stringify({
            error: S.toString(),
            error_stack: S.stack,
            error_field_trace: o("AdsTreeMatcher").fieldTraceToString(
              o("AdsTreeMatcher").fieldTrace,
            ),
          }),
        ),
          (y = v(p)),
          (C = v(t)));
      }
      (!g && l && ((y = v(p)), (C = v(t)), d == null || d(p, t)),
        !g && i && (b = o("AndromedaDispatchLogger").lastDispatchedActions),
        m.annotate({
          bool: { isResultEqual: g },
          string_array: {
            mismatches: f.getMismatchesString(),
            lastActions: b,
            errors: h,
          },
          string: {
            module: c,
            jsonTestData: y,
            jsonControlData: C,
            url: window.location.href,
          },
        }),
        n != null && m.annotate(n),
        m.stop());
    }
    function u(e, t) {
      return typeof e == "string" && e.toLowerCase().includes("token")
        ? "sanitized_" + e
        : t;
    }
    l.logUsingConfig = e;
  },
  98,
);
