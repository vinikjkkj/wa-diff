__d(
  "WebBloksRenderDiagnostics",
  ["WebBloksErrors", "webBloksGlobalAttributeKeys"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = Object.freeze([
        "async_dependency_abandoned",
        "async_fetch_failed",
        "async_fetch_timeout",
        "async_query_skipped",
        "async_target_missing",
        "media_load_failed",
        "mutation_error",
        "mutation_target_missing",
        "schema_mismatch",
        "unknown_attribute",
      ]),
      s = new Set([
        "async_dependency_abandoned",
        "async_fetch_failed",
        "async_fetch_timeout",
        "async_query_skipped",
        "async_target_missing",
      ]),
      u = Object.freeze(["bad_response", "network", "other", "server_error"]),
      c = /Status: 5\d\d/,
      d = /Failed to fetch|Load failed|NetworkError/;
    function m(e) {
      try {
        for (var t = e, n = 0; t instanceof Error && n < 8; n++) {
          var r = t,
            a = r.message,
            i = r.name;
          if (c.test(a)) return "server_error";
          if (t instanceof o("WebBloksErrors").WebBloksNetworkError)
            return a.includes("Network error") ? "network" : "bad_response";
          if (
            t instanceof o("WebBloksErrors").WebBloksComponentQueryParseError ||
            t instanceof SyntaxError
          )
            return "bad_response";
          if (i === "AbortError" || (t instanceof TypeError && d.test(a)))
            return "network";
          t = t.cause instanceof Error ? t.cause : null;
        }
      } catch (e) {
        return "other";
      }
      return "other";
    }
    var p = 64,
      _ = null,
      f = new Map(),
      g = !1,
      h = !1,
      y = !1,
      C = null,
      b = 0,
      v = new WeakMap(),
      S = null,
      R = !1;
    function L() {
      ((f = new Map()), (g = !1), (h = !1), (y = !1));
    }
    function E() {
      (L(), (C = null), b++, (v = new WeakMap()));
    }
    function k(e) {
      var t;
      if (e !== _) {
        var n = _;
        if (n != null && n.onDisplaced != null) {
          var r = n.onDisplaced;
          w(function () {
            return r(e);
          });
        }
        if (
          ((_ = e),
          E(),
          (S = (t = e == null ? void 0 : e.initialRoute) != null ? t : null),
          e != null && !R)
        ) {
          R = !0;
          var o = e.seedLanding;
          o != null &&
            w(function () {
              return o(e.initialRoute);
            });
        }
      }
    }
    function I() {
      ((_ = null), (R = !1), (S = null), E());
    }
    function T(e, t, n) {
      var r, o;
      _ == null ||
        e === C ||
        $(e, (r = (o = v.get(e)) != null ? o : t) != null ? r : null, n);
    }
    function D(e, t) {
      _ == null || t == null || v.set(e, t);
    }
    function x(e, t) {
      var n,
        r = _;
      if (r != null) {
        if (C != null) {
          T(e, t, "refresh");
          return;
        }
        var o = (n = r.initialRoute) != null ? n : t;
        (o != null && v.set(e, o), (C = e));
      }
    }
    function $(e, t, n) {
      var r = _;
      if (r != null) {
        ((C = e), b++, L());
        var o = t != null ? t : S;
        o != null && (v.set(e, o), (S = o));
        var a = r.seedDocument;
        a != null &&
          w(function () {
            return a(o, n);
          });
      }
    }
    function P() {
      return b;
    }
    function N() {
      return _ != null;
    }
    function M(e) {
      try {
        return typeof e == "object" && e != null && typeof e.message == "string"
          ? e.message
          : String(e);
      } catch (e) {
        return "unstringifiable";
      }
    }
    function w(e) {
      try {
        e();
      } catch (e) {}
    }
    function A(e, t) {
      var n,
        r,
        o,
        a,
        i,
        l,
        u = _;
      if (u != null) {
        var c = s.has(e) ? t.queryAppId : t.styleId;
        if (!(c == null || c === "")) {
          var d = f.get(e);
          if ((d == null && ((d = new Set()), f.set(e, d)), !(d.size >= p))) {
            var m =
              ((n = t.styleId) != null ? n : "") +
              " " +
              ((r = t.attribute) != null ? r : "") +
              " " +
              ((o = t.queryId) != null ? o : "") +
              " " +
              ((a = t.componentId) != null ? a : "") +
              "|" +
              ((i = t.queryAppId) != null ? i : "") +
              "|" +
              ((l = t.errorClass) != null ? l : "");
            if (!d.has(m)) {
              var g = d.size === 0;
              (d.add(m),
                w(function () {
                  return u.reportDrop(e, t, g);
                }));
            }
          }
        }
      }
    }
    var F = null;
    function O(e) {
      return (
        F == null &&
          (F = new Set(
            Object.values(
              r("webBloksGlobalAttributeKeys").toCanonicalAttrs,
            ).map(String),
          )),
        F.has(e)
      );
    }
    function B(e, t) {
      return (t.length > 1 && t.charCodeAt(0) === 36) || O(t) ? !1 : !e.has(t);
    }
    function W(e, t) {
      var n = _;
      if (n != null) {
        var r = n.declaredWireKeysFor;
        if (r != null) {
          var o = String(t);
          if (!((o.length > 1 && o.charCodeAt(0) === 36) || O(o))) {
            var a = String(e),
              i;
            try {
              i = r(a);
            } catch (e) {
              return;
            }
            i == null ||
              !B(i, o) ||
              A("schema_mismatch", { attribute: o, styleId: a });
          }
        }
      }
    }
    function q(e, t) {
      var n = _;
      if (n != null) {
        var r = n.declaredWireKeysFor;
        if (r != null) {
          var o;
          try {
            o = r(e);
          } catch (e) {
            return;
          }
          if (o != null)
            for (var a of t)
              B(o, a) && A("unknown_attribute", { attribute: a, styleId: e });
        }
      }
    }
    function U(e) {
      var t = _,
        n = t == null ? void 0 : t.reportError;
      n == null ||
        g ||
        ((g = !0),
        w(function () {
          return n(e);
        }));
    }
    function V(e) {
      var t,
        n = _,
        r = n == null ? void 0 : n.reportScriptError;
      if (r != null) {
        var o = f.get("script_error");
        o == null && ((o = new Set()), f.set("script_error", o));
        var a = (t = e.errorClass) != null ? t : "other";
        if (!o.has(a)) {
          o.add(a);
          var i = !y;
          ((y = !0),
            w(function () {
              return r(babelHelpers.extends({}, e, { errorClass: a }), i);
            }));
        }
      }
    }
    function H(e, t) {
      var n = _,
        r = n == null ? void 0 : n.reportHydrationRecovery;
      r == null ||
        h ||
        ((h = !0),
        w(function () {
          return r(e, t);
        }));
    }
    ((l.WEB_BLOKS_RENDER_DROP_REASONS = e),
      (l.WEB_BLOKS_ASYNC_DROP_REASONS = s),
      (l.WEB_BLOKS_RENDER_ERROR_CLASSES = u),
      (l.classifyWebBloksRenderError = m),
      (l.installWebBloksRenderDiagnostics = k),
      (l.resetWebBloksRenderDiagnosticsForTest = I),
      (l.reportWebBloksNewDocument = T),
      (l.reportWebBloksScreenRoute = D),
      (l.reportWebBloksInitialScreen = x),
      (l.getWebBloksDocumentGeneration = P),
      (l.isWebBloksRenderDiagnosticsInstalled = N),
      (l.safeErrorMessage = M),
      (l.reportWebBloksRenderDrop = A),
      (l.isUndeclaredWireKey = B),
      (l.checkWebBloksAttributeRead = W),
      (l.reportUndeclaredWireAttributes = q),
      (l.reportWebBloksRenderError = U),
      (l.reportWebBloksScriptError = V),
      (l.reportWebBloksHydrationRecovery = H));
  },
  98,
);
