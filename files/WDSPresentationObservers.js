__d(
  "WDSPresentationObservers",
  ["WALogger", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set();
    function u(e) {
      var t = { observer: e };
      return (
        s.add(t),
        function () {
          s.delete(t);
        }
      );
    }
    function c(e) {
      if (s.size === 0) return null;
      var t = new Map();
      for (var n of s)
        try {
          t.set(n, n.observer.captureContext(e));
        } catch (e) {
          C(e);
        }
      return t;
    }
    function d(e, t) {
      if (e == null) return t;
      if (t == null) return e;
      var n = new Map();
      for (var r of new Set(
        [].concat(Array.from(e.keys()), Array.from(t.keys())),
      )) {
        var o = e.get(r),
          a = t.get(r);
        if (!e.has(r) || !t.has(r)) {
          n.set(r, e.has(r) ? o : a);
          continue;
        }
        var i = r.observer.combineContexts;
        try {
          n.set(r, i != null ? i(o, a) : a);
        } catch (e) {
          (C(e), n.set(r, a));
        }
      }
      return n;
    }
    function m(e) {
      y(function (t) {
        return {
          kind: "toast_presented",
          context: e == null ? void 0 : e.get(t),
        };
      });
    }
    var p = 0;
    function _(e, t) {
      var n = p++;
      return (
        y(function (r) {
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
    function f(e, t) {
      y(function (n) {
        return {
          kind: "menu_dismissed",
          token: e,
          context: t == null ? void 0 : t.get(n),
        };
      });
    }
    function g(e, t, n) {
      var r = p++;
      return (
        y(function (o) {
          return {
            kind: "dialog_presented",
            token: r,
            context: e == null ? void 0 : e.get(o),
            dialogKind: t,
            element: n,
          };
        }),
        r
      );
    }
    function h(e, t, n) {
      y(function (r) {
        return {
          kind: "dialog_dismissed",
          token: e,
          context: t == null ? void 0 : t.get(r),
          dismissal: n,
        };
      });
    }
    function y(e) {
      for (var t of s)
        try {
          t.observer.onEvent(e(t));
        } catch (e) {
          C(e);
        }
    }
    function C(t) {
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
    ((l.registerWDSPresentationObserver = u),
      (l.captureWDSPresentationContext = c),
      (l.combineWDSPresentationContexts = d),
      (l.notifyWDSToastPresented = m),
      (l.notifyWDSMenuPresented = _),
      (l.notifyWDSMenuDismissed = f),
      (l.notifyWDSDialogPresented = g),
      (l.notifyWDSDialogDismissed = h));
  },
  98,
);
