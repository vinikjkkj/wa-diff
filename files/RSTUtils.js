__d(
  "RSTUtils",
  ["Promise", "RSTConfig", "RSTConstants", "asyncToGeneratorRuntime", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = S().toUpperCase(),
      u = p(),
      c = r("uuidv4")(),
      d = m();
    function m() {
      return u &&
        typeof self != "undefined" &&
        typeof self.setTimeout == "function"
        ? self
        : window;
    }
    function p() {
      return typeof WorkerGlobalScope != "undefined"
        ? !0
        : typeof document == "undefined";
    }
    function _() {}
    function f() {}
    function g(e) {
      if (e == null) return "";
      var t = new URL(e);
      return t.origin + t.pathname;
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          return typeof scheduler != "undefined" &&
            typeof scheduler.yield == "function"
            ? scheduler.yield()
            : new (e || (e = n("Promise")))(function (e) {
                return d.setTimeout(e, 0);
              });
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
      return "indexedDB" in d;
    }
    function b(e) {
      return e != null ? String(e) : null;
    }
    function v(e) {
      var t = e.componentName,
        n = k(e.componentText);
      return t == null && n == null
        ? null
        : n == null
          ? t
          : t == null
            ? ' ["' + n + '"]'
            : t + ' ["' + n + '"]';
    }
    function S() {
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
    function R(e) {
      return e.startsWith("@");
    }
    function L(e) {
      return "@" + e;
    }
    function E() {
      return S() === r("RSTConstants").executionContext.webWorker;
    }
    function k(e) {
      return e == null ? null : e.replace(/[\[\]\",\']/g, "");
    }
    ((l.getGlobalObject = m),
      (l.isInWorker = p),
      (l.debugLogImportant = _),
      (l.debugLog = f),
      (l.sanitizeURL = g),
      (l.scheduleYield = h),
      (l.isIndexedDBSupported = C),
      (l.intToString = b),
      (l.getInteractionDetail = v),
      (l.getExecutionContext = S),
      (l.isExternalAnnotationKey = R),
      (l.getExternalAnnotationKey = L),
      (l.isInWebWorker = E));
  },
  98,
);
