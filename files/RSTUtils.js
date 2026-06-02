__d(
  "RSTUtils",
  ["RSTConfig", "RSTConstants", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = b().toUpperCase(),
      s = m(),
      u = r("uuidv4")(),
      c = d();
    function d() {
      return s &&
        typeof self != "undefined" &&
        typeof self.setTimeout == "function"
        ? self
        : window;
    }
    function m() {
      return typeof WorkerGlobalScope != "undefined"
        ? !0
        : typeof document == "undefined";
    }
    function p() {}
    function _() {}
    function f(e) {
      if (e == null) return "";
      var t = new URL(e);
      return t.origin + t.pathname;
    }
    async function g() {
      return typeof scheduler != "undefined" &&
        typeof scheduler.yield == "function"
        ? scheduler.yield()
        : new Promise(function (e) {
            return c.setTimeout(e, 0);
          });
    }
    function h() {
      return "indexedDB" in c;
    }
    function y(e) {
      return e != null ? String(e) : null;
    }
    function C(e) {
      var t = e.componentName,
        n = L(e.componentText);
      return t == null && n == null
        ? null
        : n == null
          ? t
          : t == null
            ? ' ["' + n + '"]'
            : t + ' ["' + n + '"]';
    }
    function b() {
      if (typeof window != "undefined" && typeof window.document != "undefined")
        return r("RSTConstants").executionContext.mainThread;
      if (typeof self != "undefined") {
        if (
          typeof ServiceWorkerGlobalScope != "undefined" &&
          self instanceof ServiceWorkerGlobalScope
        )
          return r("RSTConstants").executionContext.serviceWorker;
        if (
          typeof SharedWorkerGlobalScope != "undefined" &&
          self instanceof SharedWorkerGlobalScope
        )
          return r("RSTConstants").executionContext.sharedWorker;
        if (
          typeof WorkerGlobalScope != "undefined" &&
          self instanceof WorkerGlobalScope
        )
          return r("RSTConstants").executionContext.webWorker;
      }
      return r("RSTConstants").executionContext.unknown;
    }
    function v(e) {
      return e.startsWith("@");
    }
    function S(e) {
      return "@" + e;
    }
    function R() {
      return b() === r("RSTConstants").executionContext.webWorker;
    }
    function L(e) {
      return e == null ? null : e.replace(/[\[\]\",\']/g, "");
    }
    ((l.getGlobalObject = d),
      (l.isInWorker = m),
      (l.debugLogImportant = p),
      (l.debugLog = _),
      (l.sanitizeURL = f),
      (l.scheduleYield = g),
      (l.isIndexedDBSupported = h),
      (l.intToString = y),
      (l.getInteractionDetail = C),
      (l.getExecutionContext = b),
      (l.isExternalAnnotationKey = v),
      (l.getExternalAnnotationKey = S),
      (l.isInWebWorker = R));
  },
  98,
);
