__d(
  "WDSPresentationObservers",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set(),
      u = new Map(),
      c = null;
    function d(e) {
      var t = { observer: e };
      return (
        s.add(t),
        function () {
          s.delete(t);
        }
      );
    }
    function m(e) {
      if (s.size === 0) return null;
      var t = new Map();
      for (var n of s)
        try {
          t.set(n, n.observer.captureContext(e));
        } catch (e) {
          R(e);
        }
      return t;
    }
    function p(e) {
      if (c != null || s.size === 0) {
        e();
        return;
      }
      var t = { context: m(null) };
      c = t;
      var n = !1;
      try {
        n = e();
      } finally {
        var r = function () {
          c === t && (c = null);
        };
        n ? queueMicrotask(r) : r();
      }
    }
    function _() {
      return c != null
        ? { context: c.context, source: "activation" }
        : { context: m(null), source: "request" };
    }
    function f(e, t) {
      if (e == null && t == null) return null;
      var n = e != null ? e : u,
        r = t != null ? t : u,
        o = new Map();
      for (var a of new Set(
        [].concat(Array.from(n.keys()), Array.from(r.keys())),
      )) {
        var i = n.get(a),
          l = r.get(a),
          c = r.has(a) ? l : i,
          d = a.observer.combineContexts;
        if (d == null || !s.has(a)) {
          o.set(a, c);
          continue;
        }
        try {
          o.set(a, d(i, l));
        } catch (e) {
          (R(e), o.set(a, c));
        }
      }
      return o;
    }
    function g(e) {
      S(function (t) {
        return {
          kind: "toast_presented",
          context: e == null ? void 0 : e.get(t),
        };
      });
    }
    var h = 0;
    function y(e, t) {
      var n = h++;
      return (
        S(function (r) {
          return {
            kind: "menu_presented",
            token: n,
            context: e == null ? void 0 : e.get(r),
            element: t,
          };
        }),
        n
      );
    }
    function C(e, t, n) {
      S(function (r) {
        return {
          kind: "menu_dismissed",
          token: e,
          context: t == null ? void 0 : t.get(r),
          contextSource: n,
        };
      });
    }
    function b(e, t, n, r) {
      var o = h++;
      return (
        S(function (a) {
          return {
            kind: "dialog_presented",
            token: o,
            context: e == null ? void 0 : e.get(a),
            dialogKind: t,
            element: n,
            buttonCount: r,
          };
        }),
        o
      );
    }
    function v(e, t, n, r, o) {
      S(function (a) {
        return {
          kind: "dialog_dismissed",
          token: e,
          context: t == null ? void 0 : t.get(a),
          contextSource: r,
          dismissal: n,
          buttonRole: o,
        };
      });
    }
    function S(e) {
      for (var t of s)
        try {
          t.observer.onEvent(e(t));
        } catch (e) {
          R(e);
        }
    }
    function R(t) {
      try {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[WDS] presentation observer threw",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("wds-presentation-observer-error");
      } catch (e) {}
    }
    ((l.registerWDSPresentationObserver = d),
      (l.captureWDSPresentationContext = m),
      (l.runWDSMenuItemActivation = p),
      (l.captureWDSCloseRequestContext = _),
      (l.combineWDSPresentationContexts = f),
      (l.notifyWDSToastPresented = g),
      (l.notifyWDSMenuPresented = y),
      (l.notifyWDSMenuDismissed = C),
      (l.notifyWDSDialogPresented = b),
      (l.notifyWDSDialogDismissed = v));
  },
  98,
);
