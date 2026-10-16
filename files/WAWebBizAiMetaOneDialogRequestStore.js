__d(
  "WAWebBizAiMetaOneDialogRequestStore",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useSyncExternalStore,
      u = 0,
      c = null,
      d = null,
      m = new Set();
    function p(e) {
      ((u += 1),
        (c = { id: u, destination: e }),
        m.forEach(function (e) {
          return e();
        }));
    }
    function _(e) {
      return d === e ? !1 : ((d = e), !0);
    }
    function f(e) {
      var t;
      ((t = c) == null ? void 0 : t.id) === e &&
        ((c = null),
        m.forEach(function (e) {
          return e();
        }));
    }
    function g() {
      return s(h, y);
    }
    function h(e) {
      return (
        m.add(e),
        function () {
          m.delete(e);
        }
      );
    }
    function y() {
      return c;
    }
    ((l.requestMetaOneDialog = p),
      (l.claimMetaOneDialogRequest = _),
      (l.clearMetaOneDialogRequest = f),
      (l.useMetaOneDialogRequest = g));
  },
  98,
);
