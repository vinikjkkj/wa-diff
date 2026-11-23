__d(
  "Hpke",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Uint8Array([0]),
      l = new TextEncoder(),
      s = l.encode("psk_id_hash"),
      u = l.encode("info_hash"),
      c = l.encode("secret"),
      d = l.encode("key"),
      m = l.encode("base_nonce"),
      p = l.encode("exp"),
      _ = l.encode("HPKE"),
      f = l.encode("sec"),
      g = n("$InternalEnum")({ KemX25519HkdfSha256Id: 32 }),
      h = n("$InternalEnum")({ KdfHkdfSha256Id: 1 }),
      y = n("$InternalEnum")({ AeadAes128GcmId: 1, AeadChaCha20Poly1305Id: 3 }),
      C = (function () {
        function t(e, t, n) {
          ((this.kem = e), (this.kdf = t), (this.aead = n));
        }
        var n = t.prototype;
        return (
          (n.setupBaseS = async function (t, n) {
            var e = await this.kem.encap(t),
              r = await this.keySchedule(e.sharedSecret, n);
            return { enc: e.enc, ctx: r };
          }),
          (n.setupBaseR = async function (t, n, r) {
            var e = await this.kem.decap(t, n),
              o = await this.keySchedule(e, r);
            return o;
          }),
          (n.keySchedule = async function (n, r) {
            var t = R(this.kem.kem_id, this.kdf.kdf_id, this.aead.aead_id),
              o = await this.kdf.labeledExtract(
                new Uint8Array(0),
                s,
                new Uint8Array(0),
                t,
              ),
              a = await this.kdf.labeledExtract(new Uint8Array(0), u, r, t),
              i = v(e, o, a),
              l = await this.kdf.labeledExtract(n, c, new Uint8Array(0), t),
              _ = await this.kdf.labeledExpand(l, d, i, this.aead.nK, t),
              f = await this.kdf.labeledExpand(l, m, i, this.aead.nN, t),
              g = await this.kdf.labeledExpand(l, p, i, this.kdf.nH, t);
            return new b(
              _,
              f,
              b.defaultSeq(this.aead.nN),
              g,
              this.aead,
              this.kdf,
              t,
            );
          }),
          (n.sealSingleShot = async function (t, n, r, o) {
            var e = await this.setupBaseS(t, n),
              a = await e.ctx.seal(r, o);
            return { ct: a, enc: e.enc };
          }),
          (n.openSingleShot = async function (t, n, r, o, a) {
            var e = await this.setupBaseR(t, n, r),
              i = e.open(o, a);
            return i;
          }),
          t
        );
      })(),
      b = (function () {
        function e(e, t, n, r, o, a, i) {
          ((this.key = e),
            (this.base_nonce = t),
            (this.seq = n),
            (this.exporter_secret = r),
            (this.aead = o),
            (this.kdf = a),
            (this.suite_id = i));
        }
        e.defaultSeq = function (t) {
          return new Uint8Array(t).fill(0);
        };
        var t = e.prototype;
        return (
          (t.seal = async function (t, n) {
            var e = await this.aead.seal(this.key, this.computeNonce(), t, n);
            return (this.incrementSeq(), e);
          }),
          (t.open = async function (t, n) {
            var e = await this.aead.open(this.key, this.computeNonce(), t, n);
            return (this.incrementSeq(), e);
          }),
          (t.computeNonce = function () {
            return L(this.base_nonce, this.seq);
          }),
          (t.incrementSeq = function () {
            for (var e = !1, t = this.seq.byteLength - 1; t >= 0 && !e; t--)
              this.seq[t] !== 255
                ? ((this.seq[t] += 1), (e = !0))
                : (this.seq[t] = 0);
          }),
          (t.setSeq = function (t) {
            this.seq = t;
          }),
          (t.export = async function (t, n) {
            var e = await this.kdf.labeledExpand(
              this.exporter_secret,
              f,
              t,
              n,
              this.suite_id,
            );
            return e;
          }),
          e
        );
      })();
    function v() {
      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      n.forEach(function (t) {
        return (e += t.byteLength);
      });
      var o = new Uint8Array(e),
        a = 0;
      return (
        n.forEach(function (e) {
          (o.set(e, a), (a += e.byteLength));
        }),
        o
      );
    }
    function S(e, t) {
      for (var n = new Uint8Array(t), r = e, o = 0; o < t && r; o++)
        ((n[t - (o + 1)] = r % 256), (r >>= 8));
      return n;
    }
    function R(e, t, n) {
      var r = v(_, S(e, 2), S(t, 2), S(n, 2));
      return r;
    }
    function L(e, t) {
      if (e.byteLength !== t.byteLength) {
        var n = new Error("Xor: different length inputs");
        throw (n.stack, n);
      }
      for (var r = new Uint8Array(e.byteLength), o = 0; o < e.byteLength; o++)
        r[o] = e[o] ^ t[o];
      return r;
    }
    ((i.KemID = g),
      (i.KdfID = h),
      (i.AeadID = y),
      (i.Hpke = C),
      (i.HpkeCtx = b),
      (i.concat = v),
      (i.i2osp = S),
      (i.hpkeSuiteId = R),
      (i.xor = L));
  },
  66,
);
