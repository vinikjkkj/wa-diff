__d(
  "wa-kmp-syncd-engine-crypto",
  ["kotlin-kotlin-stdlib-crypto", "wa-kmp-syncd-engine-interfaces-crypto"],
  function (t, n, r, o, a, i, l) {
    var e;
    ((e = o(
      "kotlin-kotlin-stdlib-crypto",
    )).initMetadataForCompanion1wyw17z38v6ac(d),
      e.initMetadataForClassbxx6q50dy2s7(E, "KmpSyncdEncryptionManager"),
      e.initMetadataForClassbxx6q50dy2s7(
        k,
        "KmpSyncdMutationDataWithPlaintext",
      ));
    function s(e) {
      var t;
      return new Int8Array([
        (t = o("kotlin-kotlin-stdlib-crypto")).convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 56) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 48) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 40) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 32) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 24) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 16) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(
          t.shiftRight2gqph14wydb8s(e, 8) & BigInt(255),
        ),
        t.convertToByte2t4hntblnhq2k(e & BigInt(255)),
      ]);
    }
    function u(e, t, n, r, a) {
      var i,
        l = t.bytes,
        u = (i = o(
          "kotlin-kotlin-stdlib-crypto",
        )).primitiveArrayConcatwxgknw08pmlb([n, l]),
        c = s(i.fromInt2ii0rejb1w62w(u.length)),
        d = o(
          "wa-kmp-syncd-engine-interfaces-crypto",
        ).MacAlgo_HMAC_SHA_512_getInstances0w60r7tu8vg(),
        m = i.primitiveArrayConcatwxgknw08pmlb([u, a]),
        p = i.primitiveArrayConcatwxgknw08pmlb([m, c]),
        _ = e.k6_1.mac(d, p, r);
      return _.g6(L);
    }
    function c(e, t, n) {
      var r = (((0 - t) | 0) - n) | 0,
        o = Math.max(0, r);
      return e.k6_1.generateRandomBytes(o);
    }
    function d() {
      ((this.m6_1 = 16), (this.n6_1 = 0), (this.o6_1 = 32));
    }
    e.protoOf180f3jzyo7rfj(d).p6 = function () {
      throw o(
        "kotlin-kotlin-stdlib-crypto",
      ).RuntimeException_init_$Create$17ncyu0a6xfek(
        "This is a test crash from KMP - WASyncDEngine",
      );
    };
    var m;
    function p() {
      return m;
    }
    function _(e, t, n) {
      return function (r) {
        return new (o(
          "wa-kmp-syncd-engine-interfaces-crypto",
        ).KmpSyncdCryptoEncryptedData2qzy9qni0hrm2)(
          e.keyId,
          r,
          t.operation,
          n,
          o("kotlin-kotlin-stdlib-crypto").copyOfRange3alro60z4hhf8(
            n,
            (n.length - 32) | 0,
            n.length,
          ),
        );
      };
    }
    function f(e, t, n, r, a, i) {
      return function (l) {
        var s = e,
          u = o("kotlin-kotlin-stdlib-crypto").primitiveArrayConcatwxgknw08pmlb(
            [s, l],
          ),
          c = t.k6_1.mac(
            o(
              "wa-kmp-syncd-engine-interfaces-crypto",
            ).MacAlgo_HMAC_SHA_256_getInstance3mchsdvnjagj8(),
            n,
            r.indexKey,
          );
        return c.g6(_(a, i, u));
      };
    }
    function g(e, t, n, r, a, i) {
      return function (l) {
        var s = e,
          c = o("kotlin-kotlin-stdlib-crypto").primitiveArrayConcatwxgknw08pmlb(
            [s, l],
          ),
          d = u(t, n.keyId, r.operation.asBytes(), a.valueMacKey, c);
        return d.h6(f(c, t, i, a, n, r));
      };
    }
    function h(e, t, n) {
      return function (r) {
        var a = o("kotlin-kotlin-stdlib-crypto").encodeToByteArray1onwao0uakjfh(
            e.index,
          ),
          i = e.value,
          l;
        i == null ? (l = new Int8Array([])) : (l = i);
        var s = l,
          u = t.k6_1.generateRandomBytes(16),
          d = c(t, a.length, s.length),
          m = t.l6_1.encodeMutationDataToSyncdActionData(e, d).toByteArray(),
          p = t.k6_1.createCipherText(
            o(
              "wa-kmp-syncd-engine-interfaces-crypto",
            ).OpMode_ENCRYPT_getInstance1dfeme89me53k(),
            u,
            m,
            r.valueEncryptionKey,
          );
        return p.h6(g(u, t, n, e, r, a));
      };
    }
    function y(e, t, n) {
      return function (r) {
        var a;
        if (
          !o("kotlin-kotlin-stdlib-crypto").contentEquals1cdp6c846cfdi(
            e.indexHash,
            r,
          )
        )
          throw new (o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).KmpSyncdCipherException1yr5ole70ur3d)("Index mac corrupt");
        return new k(t, n);
      };
    }
    function C(e, t, n) {
      return function (r) {
        var a = e.j6_1.create(t.keyId, t.operation, r, t.mutationMac),
          i = e.k6_1.mac(
            o(
              "wa-kmp-syncd-engine-interfaces-crypto",
            ).MacAlgo_HMAC_SHA_256_getInstance3mchsdvnjagj8(),
            o("kotlin-kotlin-stdlib-crypto").encodeToByteArray1onwao0uakjfh(
              a.index,
            ),
            n.indexKey,
          );
        return i.g6(y(t, a, r));
      };
    }
    function b(e, t, n, r, a, i) {
      return function (l) {
        var s;
        if (!o("kotlin-kotlin-stdlib-crypto").contentEquals1cdp6c846cfdi(e, l))
          throw new (o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).KmpSyncdCipherException1yr5ole70ur3d)("Data mac corrupt");
        var u = t.k6_1.createCipherText(
          o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).OpMode_DECRYPT_getInstance1ub7qnw77sd5o(),
          n,
          r,
          a.valueEncryptionKey,
        );
        return u.h6(C(t, i, a));
      };
    }
    function v(e, t, n, r, a, i) {
      return function (l) {
        var s = e,
          c = t,
          d = o("kotlin-kotlin-stdlib-crypto").primitiveArrayConcatwxgknw08pmlb(
            [s, c],
          ),
          m = n.operation.asBytes(),
          p = u(r, a.keyId, m, l.valueMacKey, d);
        return p.h6(b(i, r, e, t, l, n));
      };
    }
    function S(e, t, n, r) {
      return function (a) {
        var i = o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).MacAlgo_HMAC_SHA_256_getInstance3mchsdvnjagj8(),
          l = t,
          u = s(n.value),
          c = o("kotlin-kotlin-stdlib-crypto").primitiveArrayConcatwxgknw08pmlb(
            [l, u],
          ),
          d = o("kotlin-kotlin-stdlib-crypto").encodeToByteArray1onwao0uakjfh(
            r,
          ),
          m = o("kotlin-kotlin-stdlib-crypto").primitiveArrayConcatwxgknw08pmlb(
            [c, d],
          );
        return e.k6_1.mac(i, m, a.snapshotMacKey);
      };
    }
    function R(e, t, n, r, a) {
      return function (i) {
        var l,
          u = o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).MacAlgo_HMAC_SHA_256_getInstance3mchsdvnjagj8(),
          c = t,
          d = n,
          m = (l = o(
            "kotlin-kotlin-stdlib-crypto",
          )).primitiveArrayConcatwxgknw08pmlb([c, d]),
          p = s(r.value),
          _ = l.primitiveArrayConcatwxgknw08pmlb([m, p]),
          f = l.encodeToByteArray1onwao0uakjfh(a),
          g = l.primitiveArrayConcatwxgknw08pmlb([_, f]);
        return e.k6_1.mac(u, g, i.patchMacKey);
      };
    }
    function L(e) {
      return o("kotlin-kotlin-stdlib-crypto").copyOfRange3alro60z4hhf8(
        e,
        0,
        32,
      );
    }
    function E(e, t, n, r) {
      ((this.i6_1 = e), (this.j6_1 = t), (this.k6_1 = n), (this.l6_1 = r));
    }
    ((e.protoOf180f3jzyo7rfj(E).encrypt = function (e, t) {
      var n = this.i6_1.getFor(e.keyData);
      return n.h6(h(t, this, e));
    }),
      (e.protoOf180f3jzyo7rfj(E).decrypt = function (e, t) {
        var n = t.indexAndValueCipherText;
        if (n.length < 48)
          throw new (o(
            "wa-kmp-syncd-engine-interfaces-crypto",
          ).KmpSyncdParseException1owflwptcaobs)("Cipher text too short");
        var r = [
            o("kotlin-kotlin-stdlib-crypto").copyOfRange3alro60z4hhf8(n, 0, 16),
            o("kotlin-kotlin-stdlib-crypto").copyOfRange3alro60z4hhf8(
              n,
              16,
              (n.length - 32) | 0,
            ),
            o("kotlin-kotlin-stdlib-crypto").copyOfRange3alro60z4hhf8(
              n,
              (n.length - 32) | 0,
              n.length,
            ),
          ],
          a = r[0],
          i = r[1],
          l = r[2],
          s = this.i6_1.getFor(e.keyData);
        return s.h6(v(a, i, t, this, e, l));
      }),
      (e.protoOf180f3jzyo7rfj(E).calculateSnapshotMac = function (e, t, n, r) {
        var o = this.i6_1.getFor(r);
        return o.h6(S(this, n, t, e));
      }),
      (e.protoOf180f3jzyo7rfj(E).calculatePatchMac = function (e, t, n, r, o) {
        var a = this.i6_1.getFor(n);
        return a.h6(R(this, o, r, t, e));
      }));
    function k(e, t) {
      ((this.mutation = e), (this.plaintext = t));
    }
    ((e.protoOf180f3jzyo7rfj(k).q6 = function () {
      return this.mutation;
    }),
      (e.protoOf180f3jzyo7rfj(k).r6 = function () {
        return this.plaintext;
      }),
      (m = new d()),
      e.defineProp3ur6h3slcvq4x(E, "Companion", p, e.VOID3gxj6tk5isa35, !0),
      (l.KmpSyncdEncryptionManager = E),
      (l.KmpSyncdMutationDataWithPlaintext = k));
  },
  98,
);
