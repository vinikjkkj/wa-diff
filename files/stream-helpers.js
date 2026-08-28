__d(
  "stream-helpers",
  ["ManagedError", "Promise"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e;
    function l(e) {
      n("ManagedError").prototype.constructor.apply(this, arguments);
    }
    ((l.prototype = new (n("ManagedError"))()),
      (l.prototype.constructor = l),
      (i.AssertionError = l));
    function s(e, t) {
      if (typeof e != "boolean" || !e) throw new l(t);
      return e;
    }
    i.assert = s;
    function u(e) {
      return typeof e == "string" || typeof e == "symbol";
    }
    ((i.typeIsObject = function (e) {
      return (typeof e == "object" && e !== null) || typeof e == "function";
    }),
      (i.createDataProperty = function (e, t, n) {
        (s(i.typeIsObject(e)),
          Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            enumerable: !0,
            configurable: !0,
          }));
      }),
      (i.createArrayFromList = function (e) {
        return e.slice();
      }),
      (i.ArrayBufferCopy = function (e, t, n, r, o) {
        new Uint8Array(e).set(new Uint8Array(n, r, o), t);
      }),
      (i.CreateIterResultObject = function (e, t) {
        s(typeof t == "boolean");
        var n = {};
        return (
          Object.defineProperty(n, "value", {
            value: e,
            enumerable: !0,
            writable: !0,
            configurable: !0,
          }),
          Object.defineProperty(n, "done", {
            value: t,
            enumerable: !0,
            writable: !0,
            configurable: !0,
          }),
          n
        );
      }),
      (i.IsFiniteNonNegativeNumber = function (e) {
        return !(Number.isNaN(e) || e === 1 / 0 || e < 0);
      }));
    function c(e, t, n) {
      if (typeof e != "function")
        throw new TypeError("Argument is not a function");
      return Function.prototype.apply.call(e, t, n);
    }
    ((i.InvokeOrNoop = function (e, t, n) {
      (s(e !== void 0), s(u(t)), s(Array.isArray(n)));
      var r = e[t];
      if (r !== void 0) return c(r, e, n);
    }),
      (i.PromiseInvokeOrNoop = function (t, r, o) {
        (s(t !== void 0), s(u(r)), s(Array.isArray(o)));
        try {
          return (e || (e = n("Promise"))).resolve(i.InvokeOrNoop(t, r, o));
        } catch (t) {
          return (e || (e = n("Promise"))).reject(t);
        }
      }),
      (i.PromiseInvokeOrPerformFallback = function (t, r, o, a, i) {
        (s(t !== void 0), s(u(r)), s(Array.isArray(o)), s(Array.isArray(i)));
        var l;
        try {
          l = t[r];
        } catch (t) {
          return (e || (e = n("Promise"))).reject(t);
        }
        if (l === void 0) return a.apply(void 0, i);
        try {
          return (e || (e = n("Promise"))).resolve(c(l, t, o));
        } catch (t) {
          return (e || (e = n("Promise"))).reject(t);
        }
      }),
      (i.TransferArrayBuffer = function (e) {
        return e.slice();
      }),
      (i.ValidateAndNormalizeHighWaterMark = function (e) {
        if (((e = Number(e)), Number.isNaN(e) || e < 0))
          throw new RangeError(
            "highWaterMark property of a queuing strategy must be non-negative and non-NaN",
          );
        return e;
      }),
      (i.ValidateAndNormalizeQueuingStrategy = function (e, t) {
        if (e !== void 0 && typeof e != "function")
          throw new TypeError(
            "size property of a queuing strategy must be a function",
          );
        return (
          (t = i.ValidateAndNormalizeHighWaterMark(t)),
          { size: e, highWaterMark: t }
        );
      }));
  },
  null,
);
