__d(
  "MAIBADeeplinkPromptStore",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = null,
      l = null,
      s = null,
      u = null,
      c = 0,
      d = new Set();
    function m(e) {
      return (
        d.add(e),
        function () {
          d.delete(e);
        }
      );
    }
    function p(t, n) {
      ((e = t),
        (l = n),
        (s = null),
        (u = null),
        c++,
        d.forEach(function (e) {
          return e();
        }));
    }
    function _() {
      return e != null && l != null ? { promptId: e, promptText: l } : null;
    }
    function f() {
      ((e = null), (l = null));
    }
    function g() {
      var e = _();
      return (e != null && f(), e);
    }
    function h(t) {
      ((s = t),
        (e = null),
        (l = null),
        (u = null),
        c++,
        d.forEach(function (e) {
          return e();
        }));
    }
    function y() {
      return s;
    }
    function C() {
      s = null;
    }
    function b(t) {
      ((u = t),
        (e = null),
        (l = null),
        (s = null),
        c++,
        d.forEach(function (e) {
          return e();
        }));
    }
    function v() {
      return u;
    }
    function S() {
      u = null;
    }
    function R() {
      return c;
    }
    var L = !1;
    function E(e) {
      L = e;
    }
    function k() {
      var e = L;
      return ((L = !1), e);
    }
    ((i.subscribeDeeplinkGeneration = m),
      (i.setPendingDeeplinkPrompt = p),
      (i.getPendingDeeplinkPrompt = _),
      (i.clearPendingDeeplinkPrompt = f),
      (i.getAndClearPendingDeeplinkPrompt = g),
      (i.setPendingDeeplinkRecommendationHash = h),
      (i.getPendingDeeplinkRecommendationHash = y),
      (i.clearPendingDeeplinkRecommendationHash = C),
      (i.setPendingDeeplinkToken = b),
      (i.getPendingDeeplinkToken = v),
      (i.clearPendingDeeplinkToken = S),
      (i.getDeeplinkGeneration = R),
      (i.setPendingDeeplinkHideUserMessage = E),
      (i.consumePendingDeeplinkHideUserMessage = k));
  },
  66,
);
