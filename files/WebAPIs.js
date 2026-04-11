__d(
  "WebAPIs",
  ["VisibilityAPI"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [],
      s =
        "IntersectionObserver" in window &&
        "IntersectionObserverEntry" in window &&
        "intersectionRatio" in window.IntersectionObserverEntry.prototype
          ? window.IntersectionObserver
          : null;
    function u(e) {
      return (
        e.intersectionRatio > 0 ||
        (e.intersectionRect &&
          e.intersectionRect.height > 0 &&
          e.intersectionRect.width > 0)
      );
    }
    s == null && e.push("IntersectionObserver");
    var c = window.MutationObserver || window.WebKitMutationObserver;
    (c == null && e.push("MutationObserver"),
      o("VisibilityAPI").canUseVisibilityAPI || e.push("VisibilityAPI"));
    var d = window.requestAnimationFrame;
    d == null && e.push("requestAnimationFrame");
    var m = window.cancelAnimationFrame;
    d == null && e.push("cancelAnimationFrame");
    function p(e) {
      try {
        window.addEventListener("beforeunload", e);
      } catch (e) {
        return null;
      }
      return {
        remove: function () {
          try {
            window.removeEventListener("beforeunload", e);
          } catch (e) {
            if (e.message !== "can't access dead object") throw e;
          }
        },
      };
    }
    var _ = (function () {
        function e(e) {
          this.$1 = e;
        }
        var t = e.prototype;
        return (
          (t.deref = function () {
            return this.$1;
          }),
          e
        );
      })(),
      f = typeof window.WeakRef == "function" ? window.WeakRef : _;
    typeof window.WeakRef != "function" && e.push("WeakRef");
    var g = window.WeakMap,
      h = window.WeakSet;
    (typeof window.WeakMap != "function" && e.push("WeakMap"),
      typeof window.WeakSet != "function" && e.push("WeakSet"));
    function y(e) {
      return e != null && e.isConnected !== !1;
    }
    function C(e) {
      var t = e == null ? void 0 : e.deref();
      return t != null && t.isConnected !== !1 ? t : null;
    }
    ((l.unavailableAPIs = e),
      (l.IntersectionObserver = s),
      (l.intersectionObserverEntryIsVisible = u),
      (l.MutationObserver = c),
      (l.requestAnimationFrame = d),
      (l.cancelAnimationFrame = m),
      (l.onBeforeUnload = p),
      (l.WeakRef = f),
      (l.WeakMap = g),
      (l.WeakSet = h),
      (l.isAttachedElement = y),
      (l.derefOnlyAttachedElement = C));
  },
  98,
);
