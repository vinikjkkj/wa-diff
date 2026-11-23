__d(
  "WAKemModule",
  ["err", "requireDeferred"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WAGetLiboqsWasm").__setRef("WAKemModule"),
      s = 1568,
      u = 3168,
      c = 1568,
      d = 32,
      m = "ML-KEM-1024",
      p = 0,
      _ = null,
      f = 0,
      g = null;
    function h() {
      if (_ == null) throw r("err")("KEM: WASM module not initialized");
      return _;
    }
    function y() {
      return _ != null && f !== 0
        ? Promise.resolve()
        : (g != null ||
            (g = C().catch(function (e) {
              throw ((_ = null), (f = 0), (g = null), e);
            })),
          g);
    }
    async function C() {
      var t = await e.load(),
        n = t.loadLiboqsWasm,
        o = await n();
      _ = o;
      var a = 0;
      try {
        if (((a = D(m)), (f = o._create_kem(a)), f === 0))
          throw r("err")("KEM: Failed to create ML-KEM-1024 instance");
      } finally {
        a !== 0 && o._free(a);
      }
    }
    async function b() {
      await y();
      var e = h(),
        t = 0,
        n = 0;
      try {
        ((t = I(s)), (n = I(u)));
        var o = e._keypair(f, t, n);
        if (o !== p)
          throw r("err")("KEM: keypair generation failed with code " + o);
        return { publicKey: $(t, s), secretKey: $(n, u) };
      } finally {
        (t !== 0 && e._free(t), x(e, n, u));
      }
    }
    async function v(e) {
      await y();
      var t = h();
      if (e.length !== s)
        throw r("err")(
          "KEM: invalid public key length " +
            e.length +
            ", " +
            ("expected " + s),
        );
      var n = 0,
        o = 0,
        a = 0;
      try {
        ((n = T(e)), (o = I(c)), (a = I(d)));
        var i = t._encaps(f, o, a, n);
        if (i !== p) throw r("err")("KEM: encapsulation failed with code " + i);
        return { ciphertext: $(o, c), sharedSecret: $(a, d) };
      } finally {
        (n !== 0 && t._free(n), o !== 0 && t._free(o), x(t, a, d));
      }
    }
    async function S(e, t) {
      await y();
      var n = h();
      if (e.length !== c)
        throw r("err")(
          "KEM: invalid ciphertext length " +
            e.length +
            ", " +
            ("expected " + c),
        );
      if (t.length !== u)
        throw r("err")(
          "KEM: invalid secret key length " +
            t.length +
            ", " +
            ("expected " + u),
        );
      var o = 0,
        a = 0,
        i = 0;
      try {
        ((o = T(e)), (a = T(t)), (i = I(d)));
        var l = n._decaps(f, i, o, a);
        if (l !== p) throw r("err")("KEM: decapsulation failed with code " + l);
        return $(i, d);
      } finally {
        (o !== 0 && n._free(o), x(n, a, u), x(n, i, d));
      }
    }
    var R = s,
      L = u,
      E = c,
      k = d;
    function I(e) {
      var t = h()._malloc(e);
      if (t === 0) throw r("err")("KEM: WASM _malloc failed (out of memory)");
      return t;
    }
    function T(e) {
      var t = h(),
        n = e.length,
        r = I(n);
      try {
        return (t.HEAPU8.set(e, r), r);
      } catch (e) {
        throw (x(t, r, n), e);
      }
    }
    function D(e) {
      var t = new TextEncoder(),
        n = t.encode(e + "\0");
      return T(new Uint8Array(n));
    }
    function x(e, t, n) {
      t !== 0 && (e.HEAPU8.fill(0, t, t + n), e._free(t));
    }
    function $(e, t) {
      var n = h(),
        r = new Uint8Array(t);
      return (r.set(n.HEAPU8.subarray(e, e + t)), r);
    }
    ((l.generateKeyPair = b),
      (l.encapsulate = v),
      (l.decapsulate = S),
      (l.KYBER_PUBLIC_KEY_BYTES = R),
      (l.KYBER_SECRET_KEY_BYTES = L),
      (l.KYBER_CIPHERTEXT_BYTES = E),
      (l.KYBER_SHARED_SECRET_BYTES = k));
  },
  98,
);
