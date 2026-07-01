__d(
  "WAKemModule",
  ["Promise", "asyncToGeneratorRuntime", "err", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("WAGetLiboqsWasm").__setRef("WAKemModule"),
      u = 1568,
      c = 3168,
      d = 1568,
      m = 32,
      p = "ML-KEM-1024",
      _ = 0,
      f = null,
      g = 0,
      h = null;
    function y() {
      if (f == null) throw r("err")("KEM: WASM module not initialized");
      return f;
    }
    function C() {
      return f != null && g !== 0
        ? (e || (e = n("Promise"))).resolve()
        : (h != null ||
            (h = b().catch(function (e) {
              throw ((f = null), (g = 0), (h = null), e);
            })),
          h);
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield s.load(),
            t = e.loadLiboqsWasm,
            n = yield t();
          f = n;
          var o = N(p);
          try {
            if (((g = n._create_kem(o)), g === 0))
              throw r("err")("KEM: Failed to create ML-KEM-1024 instance");
          } finally {
            n._free(o);
          }
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          yield C();
          var e = y(),
            t = e._malloc(u),
            n = e._malloc(c);
          try {
            var o = e._keypair(g, t, n);
            if (o !== _)
              throw r("err")("KEM: keypair generation failed with code " + o);
            return { publicKey: M(t, u), secretKey: M(n, c) };
          } finally {
            (e._free(t), e._free(n));
          }
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          yield C();
          var t = y();
          if (e.length !== u)
            throw r("err")(
              "KEM: invalid public key length " +
                e.length +
                ", " +
                ("expected " + u),
            );
          var n = P(e),
            o = t._malloc(d),
            a = t._malloc(m);
          try {
            var i = t._encaps(g, o, a, n);
            if (i !== _)
              throw r("err")("KEM: encapsulation failed with code " + i);
            return { ciphertext: M(o, d), sharedSecret: M(a, m) };
          } finally {
            (t._free(n), t._free(o), t._free(a));
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield C();
          var n = y();
          if (e.length !== d)
            throw r("err")(
              "KEM: invalid ciphertext length " +
                e.length +
                ", " +
                ("expected " + d),
            );
          if (t.length !== c)
            throw r("err")(
              "KEM: invalid secret key length " +
                t.length +
                ", " +
                ("expected " + c),
            );
          var o = P(e),
            a = P(t),
            i = n._malloc(m);
          try {
            var l = n._decaps(g, i, o, a);
            if (l !== _)
              throw r("err")("KEM: decapsulation failed with code " + l);
            return M(i, m);
          } finally {
            (n._free(o), n._free(a), n._free(i));
          }
        })),
        I.apply(this, arguments)
      );
    }
    var T = u,
      D = c,
      x = d,
      $ = m;
    function P(e) {
      var t = y(),
        n = t._malloc(e.length);
      if (n === 0) throw r("err")("KEM: WASM _malloc failed (out of memory)");
      return (t.HEAPU8.set(e, n), n);
    }
    function N(e) {
      var t = new TextEncoder(),
        n = t.encode(e + "\0");
      return P(new Uint8Array(n));
    }
    function M(e, t) {
      var n = y(),
        r = new Uint8Array(t);
      return (r.set(n.HEAPU8.subarray(e, e + t)), r);
    }
    ((l.generateKeyPair = S),
      (l.encapsulate = L),
      (l.decapsulate = k),
      (l.KYBER_PUBLIC_KEY_BYTES = T),
      (l.KYBER_SECRET_KEY_BYTES = D),
      (l.KYBER_CIPHERTEXT_BYTES = x),
      (l.KYBER_SHARED_SECRET_BYTES = $));
  },
  98,
);
