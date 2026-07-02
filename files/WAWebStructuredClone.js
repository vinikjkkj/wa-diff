__d(
  "WAWebStructuredClone",
  ["Promise", "err", "structuredClone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(e) {
      return r("structuredClone") != null
        ? r("structuredClone")(e)
        : c(e, new Map());
    }
    var u = s;
    function c(t, r) {
      if (typeof t == "function" || typeof t == "symbol")
        throw m("WAWebStructuredClone: cannot clone a " + typeof t);
      if (t == null || typeof t != "object") return t;
      if (r.has(t)) return r.get(t);
      if (
        t instanceof (e || (e = n("Promise"))) ||
        t instanceof WeakMap ||
        t instanceof WeakSet
      )
        throw m("WAWebStructuredClone: cannot clone a non-serializable object");
      if (Array.isArray(t)) {
        var o = [];
        ((o.length = t.length), r.set(t, o));
        for (var a of Object.entries(t)) {
          var i = a[0],
            l = a[1];
          Object.defineProperty(o, i, {
            value: c(l, r),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
        }
        return o;
      }
      if (t instanceof Date) return d(r, t, new Date(t.getTime()));
      if (t instanceof RegExp) return d(r, t, new RegExp(t.source, t.flags));
      if (t instanceof ArrayBuffer) return p(t, r);
      if (t instanceof DataView)
        return d(
          r,
          t,
          new DataView(p(t.buffer, r), t.byteOffset, t.byteLength),
        );
      var s = _(t, r);
      if (s != null) return d(r, t, s);
      if (ArrayBuffer.isView(t))
        throw m("WAWebStructuredClone: cannot clone this binary view type");
      if (t instanceof Map) {
        var u = new Map();
        r.set(t, u);
        for (var f of t) {
          var C = f[0],
            b = f[1];
          u.set(c(C, r), c(b, r));
        }
        return u;
      }
      if (t instanceof Set) {
        var v = new Set();
        r.set(t, v);
        for (var S of t) v.add(c(S, r));
        return v;
      }
      if (t instanceof Error) return y(t, r);
      var R = g(t);
      if (R != null) return d(r, t, R);
      var L = h(t);
      if (L != null) return d(r, t, L);
      if ({}.toString.call(t) !== "[object Object]")
        throw m("WAWebStructuredClone: cannot clone a non-serializable object");
      var E = {};
      r.set(t, E);
      for (var k of Object.entries(t)) {
        var I = k[0],
          T = k[1];
        Object.defineProperty(E, I, {
          value: c(T, r),
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      return E;
    }
    function d(e, t, n) {
      return (e.set(t, n), n);
    }
    function m(e) {
      var t = r("err")(e);
      return ((t.name = "DataCloneError"), t);
    }
    function p(e, t) {
      var n = t.get(e);
      if (n instanceof ArrayBuffer) return n;
      var r = e.slice(0);
      return (t.set(e, r), r);
    }
    function _(e, t) {
      return e instanceof Uint8Array
        ? f(Uint8Array, e, t)
        : e instanceof Uint8ClampedArray
          ? f(Uint8ClampedArray, e, t)
          : e instanceof Int8Array
            ? f(Int8Array, e, t)
            : e instanceof Int16Array
              ? f(Int16Array, e, t)
              : e instanceof Uint16Array
                ? f(Uint16Array, e, t)
                : e instanceof Int32Array
                  ? f(Int32Array, e, t)
                  : e instanceof Uint32Array
                    ? f(Uint32Array, e, t)
                    : e instanceof Float32Array
                      ? f(Float32Array, e, t)
                      : e instanceof Float64Array
                        ? f(Float64Array, e, t)
                        : null;
    }
    function f(e, t, n) {
      return new e(p(t.buffer, n), t.byteOffset, t.length);
    }
    function g(e) {
      return e instanceof Boolean || e instanceof Number || e instanceof String
        ? Object(e.valueOf())
        : null;
    }
    function h(e) {
      if (typeof File == "function" && e instanceof File)
        return new File([e], e.name, {
          type: e.type,
          lastModified: e.lastModified,
        });
      if (typeof Blob == "function" && e instanceof Blob)
        return new Blob([e], { type: e.type });
      if (typeof ImageData == "function" && e instanceof ImageData) {
        var t = new Uint8ClampedArray(e.data);
        return e.colorSpace != null
          ? new ImageData(t, e.width, e.height, { colorSpace: e.colorSpace })
          : new ImageData(t, e.width, e.height);
      }
      return null;
    }
    function y(e, t) {
      var n = C(e.name, e.message);
      return (
        t.set(e, n),
        e.stack != null && (n.stack = e.stack),
        Object.hasOwn(e, "cause") && (n.cause = c(e.cause, t)),
        n
      );
    }
    function C(e, t) {
      return e === "EvalError"
        ? new EvalError(t)
        : e === "RangeError"
          ? new RangeError(t)
          : e === "ReferenceError"
            ? new ReferenceError(t)
            : e === "SyntaxError"
              ? new SyntaxError(t)
              : e === "TypeError"
                ? new TypeError(t)
                : e === "URIError"
                  ? new URIError(t)
                  : new Error(t);
    }
    l.default = u;
  },
  98,
);
