__d(
  "WACryptoPrimitives",
  ["WACryptoDependencies", "WAHex", "cr:8712", "gkx"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 256,
      u = new WeakMap(),
      c = null,
      d = {
        scalarbase: (e = n("cr:8712")).lowlevel.scalarbase,
        crypto_hash: e.lowlevel.crypto_hash,
        modL: e.lowlevel.modL,
        pack25519: e.lowlevel.pack25519,
        S: e.lowlevel.S,
        M: e.lowlevel.M,
        A: e.lowlevel.A,
        Z: e.lowlevel.Z,
        D: e.lowlevel.D,
        unpack25519: e.lowlevel.unpack25519,
        pow2523: e.lowlevel.pow2523,
        crypto_verify_32: e.lowlevel.crypto_verify_32,
        set25519: e.lowlevel.set25519,
        add: e.lowlevel.add,
        scalarmult: e.lowlevel.scalarmult,
      },
      m = new Uint8Array([
        48, 46, 2, 1, 0, 48, 5, 6, 3, 43, 101, 110, 4, 34, 4, 32,
      ]),
      p = null;
    async function _(e, t) {
      var a = o("WACryptoDependencies").getCrypto().subtle,
        i = a.deriveBits;
      if (!r("gkx")("28506") || p === a || i == null)
        return n("cr:8712").scalarMult(e, t);
      var l = new Uint8Array(m.length + 32);
      (l.set(m), l.set(e, m.length));
      try {
        var s = await Promise.all([
            a.importKey("pkcs8", l, { name: "X25519" }, !1, ["deriveBits"]),
            a.importKey("raw", t, { name: "X25519" }, !1, []),
          ]),
          u = s[0],
          c = s[1],
          d = await i.call(a, { name: "X25519", public: c }, u, 256);
        return new Uint8Array(d);
      } catch (r) {
        return (
          r instanceof DOMException &&
            r.name === "NotSupportedError" &&
            (p = a),
          n("cr:8712").scalarMult(e, t)
        );
      } finally {
        l.fill(0);
      }
    }
    var f = new Uint8Array(32);
    f[0] = 9;
    async function g() {
      if (!r("gkx")("28506")) return n("cr:8712").box.keyPair();
      var e = n("cr:8712").randomBytes(32),
        t = await _(e, f);
      return { publicKey: t, secretKey: e };
    }
    async function h(e, t, a) {
      var i = o("WACryptoDependencies").getCrypto().subtle,
        l = i.verify;
      if (!r("gkx")("6446") || c === i || l == null)
        return n("cr:8712").sign.detached.verify(e, t, a);
      try {
        var s = await y(i, a);
        return await l.call(i, { name: "Ed25519" }, s, t, e);
      } catch (r) {
        return (
          r instanceof DOMException &&
            r.name === "NotSupportedError" &&
            (c = i),
          n("cr:8712").sign.detached.verify(e, t, a)
        );
      }
    }
    function y(e, t) {
      if (!r("gkx")("6446") || !r("gkx")("27245")) return C(e, t);
      var n = u.get(e),
        a = n != null ? n : new Map();
      n == null && u.set(e, a);
      var i = o("WAHex").toHex(t),
        l = a.get(i);
      if (l != null) return (a.delete(i), a.set(i, l), l);
      var c = C(e, t);
      if ((a.set(i, c), a.size > s)) {
        var d = a.keys().next().value;
        d != null && a.delete(d);
      }
      return (
        c.catch(function () {
          a.get(i) === c && a.delete(i);
        }),
        c
      );
    }
    function C(e, t) {
      return e.importKey("raw", t, { name: "Ed25519" }, !1, ["verify"]);
    }
    ((l.lowlevel = d),
      (l.keypairFromSecretKey = e.box.keyPair.fromSecretKey),
      (l.keyPair = e.box.keyPair),
      (l.signDetachedVerify = e.sign.detached.verify),
      (l.scalarMultAsync = _),
      (l.keyPairAsync = g),
      (l.signDetachedVerifyAsync = h),
      (l.hash = e.hash),
      (l.randomBytes = e.randomBytes),
      (l.scalarMult = e.scalarMult),
      (l.secretbox = e.secretbox),
      (l.verify = e.verify));
  },
  98,
);
