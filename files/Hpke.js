__d(
  "Hpke",
  ["$InternalEnum", "asyncToGeneratorRuntime"],
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
        var r = t.prototype;
        return (
          (r.setupBaseS = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.kem.encap(e),
                  r = yield this.keySchedule(n.sharedSecret, t);
                return { enc: n.enc, ctx: r };
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.setupBaseR = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield this.kem.decap(e, t),
                  o = yield this.keySchedule(r, n);
                return o;
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.keySchedule = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                var r = R(this.kem.kem_id, this.kdf.kdf_id, this.aead.aead_id),
                  o = yield this.kdf.labeledExtract(
                    new Uint8Array(0),
                    s,
                    new Uint8Array(0),
                    r,
                  ),
                  a = yield this.kdf.labeledExtract(new Uint8Array(0), u, n, r),
                  i = v(e, o, a),
                  l = yield this.kdf.labeledExtract(t, c, new Uint8Array(0), r),
                  _ = yield this.kdf.labeledExpand(l, d, i, this.aead.nK, r),
                  f = yield this.kdf.labeledExpand(l, m, i, this.aead.nN, r),
                  g = yield this.kdf.labeledExpand(l, p, i, this.kdf.nH, r);
                return new b(
                  _,
                  f,
                  b.defaultSeq(this.aead.nN),
                  g,
                  this.aead,
                  this.kdf,
                  r,
                );
              },
            );
            function r(e, n) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (r.sealSingleShot = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.setupBaseS(e, t),
                  a = yield o.ctx.seal(n, r);
                return { ct: a, enc: o.enc };
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.openSingleShot = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r, o) {
                var a = yield this.setupBaseR(e, t, n),
                  i = a.open(r, o);
                return i;
              },
            );
            function t(t, n, r, o, a) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
          (t.seal = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.aead.seal(
                  this.key,
                  this.computeNonce(),
                  e,
                  t,
                );
                return (this.incrementSeq(), n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (t.open = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.aead.open(
                  this.key,
                  this.computeNonce(),
                  e,
                  t,
                );
                return (this.incrementSeq(), n);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
          (t.export = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.kdf.labeledExpand(
                  this.exporter_secret,
                  f,
                  e,
                  t,
                  this.suite_id,
                );
                return n;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
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
