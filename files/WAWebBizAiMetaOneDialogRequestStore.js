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
    function m(e, t, n, r) {
      _({
        destination: e,
        sessionId: t,
        requiresFreeBizAiPlan: !0,
        onFailure: n,
        onBeforeOpen: r,
      });
    }
    function p(e, t) {
      _({
        destination: null,
        sessionId: e,
        requiresFreeBizAiPlan: !1,
        onFailure: t,
      });
    }
    function _(e) {
      ((u += 1),
        (c = babelHelpers.extends({}, e, { id: u, opened: !1 })),
        d.forEach(function (e) {
          return e();
        }));
    }
    function f(e) {
      var t = c;
      return t == null || t.id !== e || t.opened
        ? !1
        : ((c = babelHelpers.extends({}, t, { opened: !0 })),
          d.forEach(function (e) {
            return e();
          }),
          !0);
    }
    function g(e) {
      var t = c;
      if (!(t == null || t.id !== e)) {
        var n = t.onFailure;
        (h(e), n == null || n());
      }
    }
    function h(e) {
      var t;
      ((t = c) == null ? void 0 : t.id) === e &&
        ((c = null),
        d.forEach(function (e) {
          return e();
        }));
    }
    function y() {
      return s(C, b);
    }
    function C(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function b() {
      return c;
    }
    ((l.requestMetaOneDialog = m),
      (l.requestMetaOneDialogForAnyBusiness = p),
      (l.claimMetaOneDialogRequest = f),
      (l.failMetaOneDialogRequest = g),
      (l.clearMetaOneDialogRequest = h),
      (l.useMetaOneDialogRequest = y));
  },
  98,
);
