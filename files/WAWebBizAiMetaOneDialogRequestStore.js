__d(
  "WAWebBizAiMetaOneDialogRequestStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = 0,
      c = null,
      d = new Set();
    function m(e, t, n) {
      ((u += 1),
        (c = { id: u, destination: e, sessionId: t, opened: !1, onFailure: n }),
        d.forEach(function (e) {
          return e();
        }));
    }
    function p(e) {
      var t = c;
      return t == null || t.id !== e || t.opened
        ? !1
        : ((c = babelHelpers.extends({}, t, { opened: !0 })),
          d.forEach(function (e) {
            return e();
          }),
          !0);
    }
    function _(e) {
      var t = c;
      if (!(t == null || t.id !== e)) {
        var n = t.onFailure;
        (f(e), n == null || n());
      }
    }
    function f(e) {
      var t;
      ((t = c) == null ? void 0 : t.id) === e &&
        ((c = null),
        d.forEach(function (e) {
          return e();
        }));
    }
    function g() {
      return s(h, y);
    }
    function h(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function y() {
      return c;
    }
    ((l.requestMetaOneDialog = m),
      (l.claimMetaOneDialogRequest = p),
      (l.failMetaOneDialogRequest = _),
      (l.clearMetaOneDialogRequest = f),
      (l.useMetaOneDialogRequest = g));
  },
  98,
);
