__d(
  "WAWebStructuredClone",
  ["Promise", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = Reflect.get(globalThis, "structuredClone");
    function u(e) {
      return s != null ? s(e) : d(e, new Map());
    }
    var c = u;
    function d(t, r) {
      if (typeof t == "function" || typeof t == "symbol")
        throw p("WAWebStructuredClone: cannot clone a " + typeof t);
      if (t == null || typeof t != "object") return t;
      if (r.has(t)) return r.get(t);
      if (
        t instanceof (e || (e = n("Promise"))) ||
        t instanceof WeakMap ||
        t instanceof WeakSet
      )
        throw p("WAWebStructuredClone: cannot clone a non-serializable object");
      if (Array.isArray(t)) {
        var o = [];
        ((o.length = t.length), r.set(t, o));
        for (var a of Object.entries(t)) {
          var i = a[0],
            l = a[1];
          Object.defineProperty(o, i, {
            value: d(l, r),
            writable: !0,
            enumerable: !0,
            configurable: !0,
          });
        }
        return o;
      }
      if (t instanceof Date) return m(r, t, new Date(t.getTime()));
      if (t instanceof RegExp) return m(r, t, new RegExp(t.source, t.flags));
      if (t instanceof ArrayBuffer) return _(t, r);
      if (t instanceof DataView)
        return m(
          r,
          t,
          new DataView(_(t.buffer, r), t.byteOffset, t.byteLength),
        );
      var s = f(t, r);
      if (s != null) return m(r, t, s);
      if (ArrayBuffer.isView(t))
        throw p("WAWebStructuredClone: cannot clone this binary view type");
      if (t instanceof Map) {
        var u = new Map();
        r.set(t, u);
        for (var c of t) {
          var g = c[0],
            b = c[1];
          u.set(d(g, r), d(b, r));
        }
        return u;
      }
      if (t instanceof Set) {
        var v = new Set();
        r.set(t, v);
        for (var S of t) v.add(d(S, r));
        return v;
      }
      if (t instanceof Error) return C(t, r);
      var R = h(t);
      if (R != null) return m(r, t, R);
      var L = y(t);
      if (L != null) return m(r, t, L);
      if ({}.toString.call(t) !== "[object Object]")
        throw p("WAWebStructuredClone: cannot clone a non-serializable object");
      var E = {};
      r.set(t, E);
      for (var k of Object.entries(t)) {
        var I = k[0],
          T = k[1];
        Object.defineProperty(E, I, {
          value: d(T, r),
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      return E;
    }
    function m(e, t, n) {
      return (e.set(t, n), n);
    }
    function p(e) {
      var t = r("err")(e);
      return ((t.name = "DataCloneError"), t);
    }
    function _(e, t) {
      var n = t.get(e);
      if (n instanceof ArrayBuffer) return n;
      var r = e.slice(0);
      return (t.set(e, r), r);
    }
    function f(e, t) {
      return e instanceof Uint8Array
        ? g(Uint8Array, e, t)
        : e instanceof Uint8ClampedArray
          ? g(Uint8ClampedArray, e, t)
          : e instanceof Int8Array
            ? g(Int8Array, e, t)
            : e instanceof Int16Array
              ? g(Int16Array, e, t)
              : e instanceof Uint16Array
                ? g(Uint16Array, e, t)
                : e instanceof Int32Array
                  ? g(Int32Array, e, t)
                  : e instanceof Uint32Array
                    ? g(Uint32Array, e, t)
                    : e instanceof Float32Array
                      ? g(Float32Array, e, t)
                      : e instanceof Float64Array
                        ? g(Float64Array, e, t)
                        : null;
    }
    function g(e, t, n) {
      return new e(_(t.buffer, n), t.byteOffset, t.length);
    }
    function h(e) {
      return e instanceof Boolean || e instanceof Number || e instanceof String
        ? Object(e.valueOf())
        : null;
    }
    function y(e) {
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
    function C(e, t) {
      var n = b(e.name, e.message);
      return (
        t.set(e, n),
        e.stack != null && (n.stack = e.stack),
        Object.hasOwn(e, "cause") && (n.cause = d(e.cause, t)),
        n
      );
    }
    function b(e, t) {
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
    l.default = c;
  },
  98,
);
