__d(
  "AdsManagerErrorUtils",
  [
    "AdsEditorSelectedIDsContext",
    "ErrorMetadata",
    "ErrorNormalizeUtils",
    "InteractionTracingMetrics",
    "err",
    "ifRequired",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = p(t);
      n != null &&
        n.length > 0 &&
        r("InteractionTracingMetrics").addAnnotationStringArray(
          e,
          "opes_mids",
          n,
        );
      var o = d(t);
      o != null &&
        r("InteractionTracingMetrics").addAnnotation(
          e,
          "error_www_request_id",
          o,
        );
      var a = g(t),
        i = f(t),
        l = _(t) || a || i;
      if (
        l === !0 &&
        (r("InteractionTracingMetrics").addAnnotationBoolean(
          e,
          "is_js_error",
          l,
        ),
        t != null && m(t) == null)
      ) {
        var s = r("ErrorNormalizeUtils").normalizeError(t);
        t.js_normalized_error = s;
      }
      var u = m(t);
      u != null &&
        (r("InteractionTracingMetrics").addAnnotation(
          e,
          "js_error_message_format",
          u.messageFormat,
        ),
        r("InteractionTracingMetrics").addAnnotationStringArray(
          e,
          "js_error_message_params",
          u.messageParams,
        ),
        r("InteractionTracingMetrics").addAnnotation(
          e,
          "js_error_type",
          u.type,
        ),
        u.loggingSource != null &&
          r("InteractionTracingMetrics").addAnnotation(
            e,
            "js_error_logging_source",
            u.loggingSource,
          ),
        u.project != null &&
          r("InteractionTracingMetrics").addAnnotation(
            e,
            "js_error_project",
            u.project,
          ));
    }
    function s(e) {
      var t = r("ifRequired")(
        "AsyncResponse",
        function (t) {
          try {
            if (e instanceof t) return e.toError();
          } catch (e) {
            return null;
          }
        },
        function () {
          return null;
        },
      );
      if (t != null) return t;
      var n = null;
      if (e != null && e.hasOwnProperty("mid"))
        try {
          n = e;
        } catch (e) {
          n = null;
        }
      return n;
    }
    function u(e) {
      var t,
        n = s(e);
      return (t = e == null ? void 0 : e.code) != null
        ? t
        : n == null
          ? void 0
          : n.code;
    }
    function c(e) {
      var t,
        n,
        r,
        o = s(e);
      return (t =
        (n = e == null ? void 0 : e.message) != null
          ? n
          : e == null
            ? void 0
            : e.description) != null
        ? t
        : o == null || (r = o.summary) == null
          ? void 0
          : r.toString();
    }
    function d(e) {
      return e == null ? void 0 : e.fbtrace_id;
    }
    function m(e) {
      return (e == null ? void 0 : e.js_normalized_error) != null
        ? e.js_normalized_error
        : null;
    }
    function p(e, t) {
      var n, r;
      t === void 0 && (t = !1);
      var o = [];
      if (
        (e == null ? void 0 : e.opes_mids) != null &&
        Array.isArray(e == null ? void 0 : e.opes_mids)
      ) {
        var a,
          i = e.opes_mids;
        (a = o).push.apply(a, i);
      }
      if (
        (e == null ? void 0 : e.mids) != null &&
        Array.isArray(e == null ? void 0 : e.mids)
      ) {
        var l,
          u = e.mids;
        (l = o).push.apply(l, u);
      }
      if (
        (e == null || (n = e.source) == null ? void 0 : n.opes_mids) != null &&
        Array.isArray(
          e == null || (r = e.source) == null ? void 0 : r.opes_mids,
        )
      ) {
        var c,
          d = e.source.opes_mids;
        (c = o).push.apply(c, d);
      }
      var m = s(e);
      return (
        (m == null ? void 0 : m.mid) != null && o.push(m.mid),
        t &&
          (o = o.filter(function (e) {
            return !e.includes("fake_mid");
          })),
        o.length > 0 ? o : null
      );
    }
    function _(e) {
      return typeof (e == null ? void 0 : e.is_js_error) == "boolean"
        ? e.is_js_error
        : null;
    }
    function f(e) {
      var t,
        n = e == null ? void 0 : e.name;
      if (n === "Invariant Violation") return !0;
      var r = c(e);
      return (t =
        (r == null ? void 0 : r.includes("Minified React error")) ||
        (r == null ? void 0 : r.includes("Minified invariant"))) != null
        ? t
        : !1;
    }
    function g(e) {
      try {
        var t = [
          EvalError,
          RangeError,
          ReferenceError,
          SyntaxError,
          TypeError,
          URIError,
        ];
        return t.some(function (t) {
          return e instanceof t;
        });
      } catch (e) {
        return !1;
      }
    }
    function h(e, t, n) {
      var a,
        i = o("AdsEditorSelectedIDsContext").resolveSelectedIDs(t),
        l = p(e),
        s = (a = e.metadata) != null ? a : new (r("ErrorMetadata"))();
      if (l != null) for (var u of l) s.addEntry("OPES", "MID", u);
      ((i == null ? void 0 : i.adObjectIDs) != null &&
        s.addEntry(
          "ADS_INTERFACES",
          "SELECTED_AD_OBJECT_IDS",
          i.adObjectIDs.join(","),
        ),
        (i == null ? void 0 : i.draftFragmentIDs) != null &&
          s.addEntry(
            "ADS_INTERFACES",
            "SELECTED_FRAGMENT_IDS",
            i.draftFragmentIDs.join(","),
          ),
        (i == null ? void 0 : i.adObjectLevel) != null &&
          s.addEntry("ADS_INTERFACES", "AD_OBJECT_LEVEL", i.adObjectLevel),
        (e.metadata = s),
        n == null || n(e));
    }
    function y(e) {
      if (Array.isArray(e)) {
        var t = e == null ? void 0 : e[0];
        if (
          t != null &&
          typeof t == "object" &&
          t.exception != null &&
          typeof t.exception == "object"
        ) {
          var n,
            o = t.exception.class,
            a = t.exception.message,
            i = (n = t == null ? void 0 : t.mids) != null ? n : [],
            l =
              'Errors while executing operation at "PageBasePageSpecResolver" at Page.permitted_tasks: : Field implementation threw an exception. Check your server logs for more information.';
          o != null &&
            typeof o == "string" &&
            a != null &&
            typeof a == "string" &&
            (l = [o, ": ", a].join(""));
          var s = r("err")(l);
          return (
            Array.isArray(i) &&
              i.length > 0 &&
              typeof s == "object" &&
              (s.opes_mids = i),
            s
          );
        }
      }
      return null;
    }
    ((l.addCausalErrorMetadataToInteraction = e),
      (l.getErrorCode = u),
      (l.getErrorMessage = c),
      (l.getErrorWWWRequestID = d),
      (l.getJSNormalizedError = m),
      (l.getOpesMIDs = p),
      (l.isJSError = _),
      (l.isMinifiedInvariant = f),
      (l.isBuiltInJSError = g),
      (l.augmentErrorInErrorBoundary = h),
      (l.parseRelayCatchError = y));
  },
  98,
);
