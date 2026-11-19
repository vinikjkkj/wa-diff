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
          var o = 0;
          try {
            if (((o = M(p)), (g = n._create_kem(o)), g === 0))
              throw r("err")("KEM: Failed to create ML-KEM-1024 instance");
          } finally {
            o !== 0 && n._free(o);
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
            t = 0,
            n = 0;
          try {
            ((t = P(u)), (n = P(c)));
            var o = e._keypair(g, t, n);
            if (o !== _)
              throw r("err")("KEM: keypair generation failed with code " + o);
            return { publicKey: A(t, u), secretKey: A(n, c) };
          } finally {
            (t !== 0 && e._free(t), w(e, n, c));
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
          var n = 0,
            o = 0,
            a = 0;
          try {
            ((n = N(e)), (o = P(d)), (a = P(m)));
            var i = t._encaps(g, o, a, n);
            if (i !== _)
              throw r("err")("KEM: encapsulation failed with code " + i);
            return { ciphertext: A(o, d), sharedSecret: A(a, m) };
          } finally {
            (n !== 0 && t._free(n), o !== 0 && t._free(o), w(t, a, m));
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
          var o = 0,
            a = 0,
            i = 0;
          try {
            ((o = N(e)), (a = N(t)), (i = P(m)));
            var l = n._decaps(g, i, o, a);
            if (l !== _)
              throw r("err")("KEM: decapsulation failed with code " + l);
            return A(i, m);
          } finally {
            (o !== 0 && n._free(o), w(n, a, c), w(n, i, m));
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
      var t = y()._malloc(e);
      if (t === 0) throw r("err")("KEM: WASM _malloc failed (out of memory)");
      return t;
    }
    function N(e) {
      var t = y(),
        n = e.length,
        r = P(n);
      try {
        return (t.HEAPU8.set(e, r), r);
      } catch (e) {
        throw (w(t, r, n), e);
      }
    }
    function M(e) {
      var t = new TextEncoder(),
        n = t.encode(e + "\0");
      return N(new Uint8Array(n));
    }
    function w(e, t, n) {
      t !== 0 && (e.HEAPU8.fill(0, t, t + n), e._free(t));
    }
    function A(e, t) {
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
