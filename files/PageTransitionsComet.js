__d(
  "PageTransitionsComet",
  ["FBLogger", "URI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      r("FBLogger")("comet_infra").mustfix(
        "PageTransitions.%s called unexpectedly. This is not supported in Comet!",
        e,
      );
    }
    function u() {
      s("_executeCompleteCallbacks");
    }
    function c(e, t) {
      return (s("_handleTransition"), !1);
    }
    function d() {
      return (s("_hasBootloadErrors"), !1);
    }
    function m(e) {
      return (s("_historyManagerHandler"), !1);
    }
    function p() {
      return (s("_init"), !1);
    }
    function _(e, t, n) {
      s("_loadPage");
    }
    function f(e, t) {
      s("_warnBeforeLeaving");
    }
    function g() {
      s("disableScrollAnimation");
    }
    function h() {
      s("disableTransitions");
    }
    function y() {
      return (s("getCurrentURI"), new (e || (e = r("URI")))());
    }
    function C() {
      return (s("getMostRecentURI"), new (e || (e = r("URI")))());
    }
    function b() {
      return (s("getNextURI"), new (e || (e = r("URI")))());
    }
    function v() {
      return (s("getReferrerURI"), new (e || (e = r("URI")))());
    }
    function S(e, t) {
      (t === void 0 && (t = !1), s("go"));
    }
    function R(e, t) {
      (t === void 0 && (t = !1), s("goBase"));
    }
    function L() {
      s("init");
    }
    function E() {
      return (s("isInitalized"), !1);
    }
    function k() {
      return (s("isTransitioning"), !1);
    }
    function I(e) {
      s("registerCompletionCallback");
    }
    function T(e, t) {
      s("registerHandler");
    }
    function D(e, t) {
      s("removeHanlder");
    }
    function x(e) {
      return (s("restoreScrollPosition"), !1);
    }
    function $(e, t) {
      s("rewriteCurrentURI");
    }
    function P(e) {
      (e === void 0 && (e = !1), s("transitionComplete"));
    }
    function N() {
      s("unifyURI");
    }
    ((l._executeCompletionCallbacks = u),
      (l._handleTransition = c),
      (l._hasBootloadErrors = d),
      (l._historyManagerHandler = m),
      (l._init = p),
      (l._loadPage = _),
      (l._warnBeforeLeaving = f),
      (l.disableScrollAnimation = g),
      (l.disableTransitions = h),
      (l.getCurrentURI = y),
      (l.getMostRecentURI = C),
      (l.getNextURI = b),
      (l.getReferrerURI = v),
      (l.go = S),
      (l.goBase = R),
      (l.init = L),
      (l.isInitialized = E),
      (l.isTransitioning = k),
      (l.registerCompletionCallback = I),
      (l.registerHandler = T),
      (l.removeHandler = D),
      (l.restoreScrollPosition = x),
      (l.rewriteCurrentURI = $),
      (l.transitionComplete = P),
      (l.unifyURI = N));
  },
  98,
);
