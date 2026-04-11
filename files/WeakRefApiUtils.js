__d(
  "WeakRefApiUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = typeof window != "undefined" ? window : self,
      l = e.WeakMap,
      s = L(),
      u = e.WeakSet,
      c = E(),
      d = e.WeakRef,
      m = k(),
      p = s && c && m,
      _ = (function () {
        function e(e) {}
        var t = e.prototype;
        return ((t.deref = function () {}), e);
      })(),
      f = (function () {
        function e(e) {}
        var t = e.prototype;
        return (
          (t.add = function (t) {
            return this;
          }),
          (t.delete = function (t) {
            return !1;
          }),
          (t.has = function (t) {
            return !1;
          }),
          e
        );
      })(),
      g = (function () {
        function e(e) {}
        var t = e.prototype;
        return (
          (t.delete = function (t) {
            return !1;
          }),
          (t.get = function (t) {}),
          (t.has = function (t) {
            return !1;
          }),
          (t.set = function (t, n) {
            return this;
          }),
          e
        );
      })();
    function h() {
      return s ? l : null;
    }
    function y() {
      return s && l ? l : g;
    }
    function C() {
      return c ? u : null;
    }
    function b() {
      return c && u ? u : f;
    }
    function v() {
      return m ? d : null;
    }
    function S() {
      return m && d ? d : _;
    }
    function R(e) {
      return typeof e.replace == "function"
        ? e.replace(/\n/g, " ").replace(/\s+/g, " ")
        : null;
    }
    function L() {
      return (
        l != null &&
        typeof l.toString == "function" &&
        R(l.toString()) === "function WeakMap() { [native code] }"
      );
    }
    function E() {
      return (
        u != null &&
        typeof u.toString == "function" &&
        R(u.toString()) === "function WeakSet() { [native code] }"
      );
    }
    function k() {
      return (
        d != null &&
        typeof d.toString == "function" &&
        R(d.toString()) === "function WeakRef() { [native code] }"
      );
    }
    function I() {
      return p;
    }
    ((i.WeakRefNoOp = _),
      (i.WeakSetNoOp = f),
      (i.WeakMapNoOp = g),
      (i.getNativeWeakMap = h),
      (i.getNativeWeakMapOrFallback = y),
      (i.getNativeWeakSet = C),
      (i.getNativeWeakSetOrFallback = b),
      (i.getNativeWeakRef = v),
      (i.getNativeWeakRefOrFallback = S),
      (i.isWeakMapNative = L),
      (i.isWeakSetNative = E),
      (i.isWeakRefNative = k),
      (i.isWeakAPINative = I));
  },
  66,
);
