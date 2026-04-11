__d(
  "wa-kmp-syncd-engine-interfaces-crypto",
  ["kotlin-kotlin-stdlib-crypto"],
  function (t, n, r, o, a, i, l) {
    var e;
    ((e = o(
      "kotlin-kotlin-stdlib-crypto",
    )).initMetadataForCompanion1wyw17z38v6ac(f),
      e.initMetadataForClassbxx6q50dy2s7(
        k,
        "KmpSyncdCollectionName",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ));
    function s(e) {
      var t;
      try {
        t = this.getForInternal(e);
      } catch (e) {
        var n;
        if (
          e instanceof o("kotlin-kotlin-stdlib-crypto").Exceptiondt2hlxn7j7vw
        ) {
          var r = e;
          throw new le(r);
        } else throw e;
      }
      return t;
    }
    (e.initMetadataForInterface1egvbzx539z91(P, "KmpDerivedSyncdKeysProvider"),
      e.initMetadataForClassbxx6q50dy2s7(N, "KmpSyncdCryptoActionData"),
      e.initMetadataForClassbxx6q50dy2s7(M, "KmpSyncdCryptoDerivedKeys"),
      e.initMetadataForCompanion1wyw17z38v6ac(F),
      e.initMetadataForClassbxx6q50dy2s7(W, "KmpSyncdCryptoEncryptedData"),
      e.initMetadataForClassbxx6q50dy2s7(q, "KmpSyncdCryptoMutationData"),
      e.initMetadataForClassbxx6q50dy2s7(U, "KmpSyncdCryptoMutationKey"),
      e.initMetadataForClassbxx6q50dy2s7(V, "KmpSyncdCryptoMutationKeyId"),
      e.initMetadataForClassbxx6q50dy2s7(
        X,
        "KmpSyncdCryptoMutationOperation",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ),
      e.initMetadataForInterface1egvbzx539z91(Z, "KmpSyncdCryptoProvider"));
    function u(e, t, n, r) {
      return this.createInternal(e, t, n, r);
    }
    (e.initMetadataForInterface1egvbzx539z91(ee, "KmpSyncdMutationDataFactory"),
      e.initMetadataForInterface1egvbzx539z91(
        te,
        "KmpSyncdEncryptionProtobufProvider",
      ),
      e.initMetadataForInterface1egvbzx539z91(
        ne,
        "KmpSyncdProtobufProvider",
        e.VOID3gxj6tk5isa35,
        e.VOID3gxj6tk5isa35,
        [te],
      ),
      e.initMetadataForCompanion1wyw17z38v6ac(re),
      e.initMetadataForClassbxx6q50dy2s7(
        ie,
        "KmpSyncdCipherException",
        ie,
        e.Exceptiondt2hlxn7j7vw,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        le,
        "KmpSyncdKeyException",
        e.VOID3gxj6tk5isa35,
        e.Exceptiondt2hlxn7j7vw,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        se,
        "KmpSyncdMutationException",
        e.VOID3gxj6tk5isa35,
        e.Exceptiondt2hlxn7j7vw,
      ),
      e.initMetadataForCompanion1wyw17z38v6ac(fe),
      e.initMetadataForClassbxx6q50dy2s7(
        Ee,
        "KmpSyncdMutationExceptionReason",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ),
      e.initMetadataForCompanion1wyw17z38v6ac(Pe),
      e.initMetadataForClassbxx6q50dy2s7(
        we,
        "KmpSyncdParseException",
        e.VOID3gxj6tk5isa35,
        e.Exceptiondt2hlxn7j7vw,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        Ue,
        "OpMode",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        Qe,
        "MacAlgo",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ),
      e.initMetadataForCompanion1wyw17z38v6ac(qn),
      e.initMetadataForClassbxx6q50dy2s7(
        zn,
        "WamKmpSyncdFatalError",
        e.VOID3gxj6tk5isa35,
        e.Enum3alwj03lh1n41,
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        Zn,
        "JsKmpDerivedSyncdKeysProviderImpl",
        e.VOID3gxj6tk5isa35,
        e.VOID3gxj6tk5isa35,
        [P],
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        er,
        "JsKmpSyncdCryptoProviderImpl",
        e.VOID3gxj6tk5isa35,
        e.VOID3gxj6tk5isa35,
        [Z],
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        tr,
        "JsKmpSyncdMutationDataFactoryImpl",
        e.VOID3gxj6tk5isa35,
        e.VOID3gxj6tk5isa35,
        [ee],
      ),
      e.initMetadataForClassbxx6q50dy2s7(
        nr,
        "JsKmpSyncdProtobufProviderImpl",
        e.VOID3gxj6tk5isa35,
        e.VOID3gxj6tk5isa35,
        [ne],
      ),
      e.initMetadataForClassbxx6q50dy2s7(ar, "KmpCryptoResult"),
      e.initMetadataForCompanion1wyw17z38v6ac(ir),
      e.initMetadataForClassbxx6q50dy2s7(ur, "KmpSyncdCryptoMutationKeyData"),
      e.initMetadataForClassbxx6q50dy2s7(gr, "KmpLong"));
    var c, d, m, p, _;
    function f() {
      g = this;
      var e = this,
        t = y();
      ((e.b4_1 = o("kotlin-kotlin-stdlib-crypto").toSet1glep2u1u9tcb(t)),
        (this.c4_1 = o("kotlin-kotlin-stdlib-crypto").setOf45ia9pnfhe90([
          x(),
          $(),
        ])));
    }
    ((e.protoOf180f3jzyo7rfj(f).d4 = function (e) {
      var t = y(),
        n;
      e: {
        for (var r = 0, a = t.length; r < a; ) {
          var i = t[r];
          if (((r = (r + 1) | 0), i.value === e)) {
            n = i;
            break e;
          }
        }
        n = null;
      }
      var l = n,
        s;
      if (l == null)
        throw o(
          "kotlin-kotlin-stdlib-crypto",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          "Unknown collection name: " + e,
        );
      return ((s = l), s);
    }),
      (e.protoOf180f3jzyo7rfj(f).g4 = function (e) {
        var t;
        switch (e) {
          case 1:
            t = I();
            break;
          case 2:
            t = T();
            break;
          case 3:
            t = D();
            break;
          case 4:
            t = x();
            break;
          case 5:
            t = $();
            break;
          default:
            throw o(
              "kotlin-kotlin-stdlib-crypto",
            ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
              "Unknown WAM collection type: " + e,
            );
        }
        return t;
      }),
      (e.protoOf180f3jzyo7rfj(f).h4 = function () {
        return this.b4_1;
      }),
      (e.protoOf180f3jzyo7rfj(f).i4 = function () {
        return this.c4_1;
      }));
    var g;
    function h() {
      return (E(), g == null && new f(), g);
    }
    function y() {
      return [I(), T(), D(), x(), $()];
    }
    function C(e) {
      switch (e) {
        case "Regular":
          return I();
        case "RegularLow":
          return T();
        case "RegularHigh":
          return D();
        case "CriticalBlock":
          return x();
        case "CriticalUnblockLow":
          return $();
        default:
          (E(),
            o("kotlin-kotlin-stdlib-crypto").THROW_IAE23kobfj9wdoxr(
              "No enum constant com.whatsapp.kmp.syncd.syncdengine.core.model.KmpSyncdCollectionName." +
                e,
            ));
          break;
      }
    }
    function b(e) {
      return h().d4(e);
    }
    function v(e) {
      return h().g4(e);
    }
    function S() {
      return h().b4_1;
    }
    function R() {
      return h().c4_1;
    }
    var L;
    function E() {
      if (L) return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((L = !0),
        (c = new k("Regular", 0, "regular")),
        (d = new k("RegularLow", 1, "regular_low")),
        (m = new k("RegularHigh", 2, "regular_high")),
        (p = new k("CriticalBlock", 3, "critical_block")),
        (_ = new k("CriticalUnblockLow", 4, "critical_unblock_low")),
        h());
    }
    function k(e, t, n) {
      (o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t),
        (this.value = n));
    }
    ((e.protoOf180f3jzyo7rfj(k).o = function () {
      return this.value;
    }),
      (e.protoOf180f3jzyo7rfj(k).toWamSyncdCollectionType = function () {
        var e;
        switch (this.r_1) {
          case 0:
            e = 1;
            break;
          case 1:
            e = 2;
            break;
          case 2:
            e = 3;
            break;
          case 3:
            e = 4;
            break;
          case 4:
            e = 5;
            break;
          default:
            o(
              "kotlin-kotlin-stdlib-crypto",
            ).noWhenBranchMatchedException2a6r7ubxgky5j();
            break;
        }
        return e;
      }),
      (e.protoOf180f3jzyo7rfj(k).toString = function () {
        return o("kotlin-kotlin-stdlib-crypto")
          .protoOf180f3jzyo7rfj(
            o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41,
          )
          .toString.call(this);
      }));
    function I() {
      return (E(), c);
    }
    function T() {
      return (E(), d);
    }
    function D() {
      return (E(), m);
    }
    function x() {
      return (E(), p);
    }
    function $() {
      return (E(), _);
    }
    function P() {}
    function N(e) {
      this.syncdActionData = e;
    }
    ((e.protoOf180f3jzyo7rfj(N).j4 = function () {
      return this.syncdActionData;
    }),
      (e.protoOf180f3jzyo7rfj(N).toByteArray = function () {
        return this.syncdActionData;
      }));
    function M(e, t, n, r, o) {
      ((this.indexKey = e),
        (this.valueEncryptionKey = t),
        (this.valueMacKey = n),
        (this.snapshotMacKey = r),
        (this.patchMacKey = o));
    }
    ((e.protoOf180f3jzyo7rfj(M).k4 = function () {
      return this.indexKey;
    }),
      (e.protoOf180f3jzyo7rfj(M).l4 = function () {
        return this.valueEncryptionKey;
      }),
      (e.protoOf180f3jzyo7rfj(M).m4 = function () {
        return this.valueMacKey;
      }),
      (e.protoOf180f3jzyo7rfj(M).n4 = function () {
        return this.snapshotMacKey;
      }),
      (e.protoOf180f3jzyo7rfj(M).o4 = function () {
        return this.patchMacKey;
      }));
    function w(e, t, n, r, a) {
      var i;
      if (r.length > 32)
        i = o("kotlin-kotlin-stdlib-crypto").toByteArray3caw0hip00os(
          o("kotlin-kotlin-stdlib-crypto").takeLast725nefakqsdr(r, 32),
        );
      else {
        var l = new Int8Array(32),
          s = (32 - r.length) | 0,
          u = r.length,
          c = r;
        (o("kotlin-kotlin-stdlib-crypto").arrayCopytctsywo3h7gj(c, l, s, 0, u),
          (i = l));
      }
      return (W.call(a, e, t, n, r, i), a);
    }
    function A(e, t, n, r) {
      return w(
        e,
        t,
        n,
        r,
        o("kotlin-kotlin-stdlib-crypto").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib-crypto").protoOf180f3jzyo7rfj(W),
        ),
      );
    }
    function F() {
      this.p4_1 = 32;
    }
    var O;
    function B() {
      return O;
    }
    function W(e, t, n, r, o) {
      ((this.keyId = e),
        (this.indexHash = t),
        (this.operation = n),
        (this.indexAndValueCipherText = r),
        (this.mutationMac = o));
    }
    ((e.protoOf180f3jzyo7rfj(W).q4 = function () {
      return this.keyId;
    }),
      (e.protoOf180f3jzyo7rfj(W).r4 = function () {
        return this.indexHash;
      }),
      (e.protoOf180f3jzyo7rfj(W).s4 = function () {
        return this.operation;
      }),
      (e.protoOf180f3jzyo7rfj(W).t4 = function () {
        return this.indexAndValueCipherText;
      }),
      (e.protoOf180f3jzyo7rfj(W).u4 = function () {
        return this.mutationMac;
      }));
    function q(e, t, n, r, o, a) {
      ((this.index = e),
        (this.version = t),
        (this.keyId = n),
        (this.operation = r),
        (this.value = o),
        (this.mutationMac = a));
    }
    ((e.protoOf180f3jzyo7rfj(q).v4 = function () {
      return this.index;
    }),
      (e.protoOf180f3jzyo7rfj(q).w4 = function () {
        return this.version;
      }),
      (e.protoOf180f3jzyo7rfj(q).q4 = function () {
        return this.keyId;
      }),
      (e.protoOf180f3jzyo7rfj(q).s4 = function () {
        return this.operation;
      }),
      (e.protoOf180f3jzyo7rfj(q).o = function () {
        return this.value;
      }),
      (e.protoOf180f3jzyo7rfj(q).u4 = function () {
        return this.mutationMac;
      }));
    function U(e, t) {
      ((this.keyId = e), (this.keyData = t));
    }
    ((e.protoOf180f3jzyo7rfj(U).q4 = function () {
      return this.keyId;
    }),
      (e.protoOf180f3jzyo7rfj(U).x4 = function () {
        return this.keyData;
      }));
    function V(e) {
      this.bytes = e;
    }
    ((e.protoOf180f3jzyo7rfj(V).y4 = function () {
      return this.bytes;
    }),
      (e.protoOf180f3jzyo7rfj(V).equals = function (e) {
        var t;
        return (
          e instanceof V
            ? (t = o("kotlin-kotlin-stdlib-crypto").contentEquals1cdp6c846cfdi(
                e.bytes,
                this.bytes,
              ))
            : (t = !1),
          t
        );
      }),
      (e.protoOf180f3jzyo7rfj(V).hashCode = function () {
        return o("kotlin-kotlin-stdlib-crypto").contentHashCode25jw6rgkgywwr(
          this.bytes,
        );
      }));
    var H, G;
    function z() {
      return [Y(), J()];
    }
    function j(e) {
      switch (e) {
        case "Set":
          return Y();
        case "Remove":
          return J();
        default:
          (Q(),
            o("kotlin-kotlin-stdlib-crypto").THROW_IAE23kobfj9wdoxr(
              "No enum constant com.whatsapp.kmp.syncd.syncdengine.cryptomanager.KmpSyncdCryptoMutationOperation." +
                e,
            ));
          break;
      }
    }
    var K;
    function Q() {
      if (K) return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((K = !0), (H = new X("Set", 0, 1)), (G = new X("Remove", 1, 2)));
    }
    function X(e, t, n) {
      (o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t),
        (this.b5_1 = n));
    }
    e.protoOf180f3jzyo7rfj(X).asBytes = function () {
      return new Int8Array([this.b5_1]);
    };
    function Y() {
      return (Q(), H);
    }
    function J() {
      return (Q(), G);
    }
    function Z() {}
    function ee() {}
    function te() {}
    function ne() {}
    function re() {
      ((this.c5_1 = "Data mac corrupt"), (this.d5_1 = "Index mac corrupt"));
    }
    ((e.protoOf180f3jzyo7rfj(re).e5 = function () {
      return this.c5_1;
    }),
      (e.protoOf180f3jzyo7rfj(re).f5 = function () {
        return this.d5_1;
      }));
    var oe;
    function ae() {
      return oe;
    }
    function ie(e, t) {
      ((e =
        e === o("kotlin-kotlin-stdlib-crypto").VOID3gxj6tk5isa35 ? null : e),
        (t =
          t === o("kotlin-kotlin-stdlib-crypto").VOID3gxj6tk5isa35 ? null : t),
        o("kotlin-kotlin-stdlib-crypto").Exception_init_$Init$7nmtst2tre47(
          this,
        ),
        o("kotlin-kotlin-stdlib-crypto").captureStack1fzi4aczwc4hg(this, ie),
        (this.g5_1 = e),
        (this.h5_1 = t),
        delete this.message,
        delete this.cause);
    }
    ((e.protoOf180f3jzyo7rfj(ie).o3 = function () {
      return this.g5_1;
    }),
      (e.protoOf180f3jzyo7rfj(ie).p3 = function () {
        return this.h5_1;
      }));
    function le(e) {
      (o("kotlin-kotlin-stdlib-crypto").Exception_init_$Init$7nmtst2tre47(this),
        o("kotlin-kotlin-stdlib-crypto").captureStack1fzi4aczwc4hg(this, le),
        (this.i5_1 = e),
        delete this.cause);
    }
    e.protoOf180f3jzyo7rfj(le).p3 = function () {
      return this.i5_1;
    };
    function se(e, t, n) {
      ((t =
        t === o("kotlin-kotlin-stdlib-crypto").VOID3gxj6tk5isa35
          ? "MalformedMutationException with reason=" + e.toString()
          : t),
        (n =
          n === o("kotlin-kotlin-stdlib-crypto").VOID3gxj6tk5isa35 ? null : n),
        o("kotlin-kotlin-stdlib-crypto").Exception_init_$Init$7nmtst2tre47(
          this,
        ),
        o("kotlin-kotlin-stdlib-crypto").captureStack1fzi4aczwc4hg(this, se),
        (this.reason = e),
        (this.j5_1 = t),
        (this.k5_1 = n),
        delete this.message,
        delete this.cause);
    }
    ((e.protoOf180f3jzyo7rfj(se).l5 = function () {
      return this.reason;
    }),
      (e.protoOf180f3jzyo7rfj(se).o3 = function () {
        return this.j5_1;
      }),
      (e.protoOf180f3jzyo7rfj(se).p3 = function () {
        return this.k5_1;
      }));
    var ue, ce, de, me, pe, _e;
    function fe() {}
    e.protoOf180f3jzyo7rfj(fe).m5 = function (e) {
      var t = be(),
        n;
      e: {
        for (var r = t.f(); r.g(); ) {
          var a = r.h();
          if (a.code === e) {
            n = a;
            break e;
          }
        }
        n = null;
      }
      var i = n,
        l;
      if (i == null)
        throw o(
          "kotlin-kotlin-stdlib-crypto",
        ).IllegalArgumentException_init_$Create$3ewkh27kzt8z8(
          "Unknown mutation exception reason: " + e,
        );
      return ((l = i), l);
    };
    var ge;
    function he() {
      return ge;
    }
    function ye() {
      return [ke(), Ie(), Te(), De(), xe(), $e()];
    }
    function Ce(e) {
      switch (e) {
        case "UNPARSABLE":
          return ke();
        case "MISSING_INDEX":
          return Ie();
        case "MISSING_VALUE":
          return Te();
        case "MISSING_VERSION":
          return De();
        case "INVALID_INDEX_FORMAT":
          return xe();
        case "MISSING_ACTION_TIMESTAMP":
          return $e();
        default:
          (Re(),
            o("kotlin-kotlin-stdlib-crypto").THROW_IAE23kobfj9wdoxr(
              "No enum constant com.whatsapp.kmp.syncd.syncdengine.exception.KmpSyncdMutationExceptionReason." +
                e,
            ));
          break;
      }
    }
    function be() {
      return (
        Le == null &&
          (Le = o("kotlin-kotlin-stdlib-crypto").enumEntries20mr21zbe3az4(
            ye(),
          )),
        Le
      );
    }
    function ve(e) {
      return ge.m5(e);
    }
    var Se;
    function Re() {
      if (Se)
        return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((Se = !0),
        (ue = new Ee("UNPARSABLE", 0, 0)),
        (ce = new Ee("MISSING_INDEX", 1, 1)),
        (de = new Ee("MISSING_VALUE", 2, 2)),
        (me = new Ee("MISSING_VERSION", 3, 3)),
        (pe = new Ee("INVALID_INDEX_FORMAT", 4, 4)),
        (_e = new Ee("MISSING_ACTION_TIMESTAMP", 5, 7)));
    }
    var Le;
    function Ee(e, t, n) {
      (o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t),
        (this.code = n));
    }
    ((e.protoOf180f3jzyo7rfj(Ee).p5 = function () {
      return this.code;
    }),
      (e.protoOf180f3jzyo7rfj(Ee).q5 = function () {
        var e;
        switch (this.r_1) {
          case 0:
            e = jn();
            break;
          case 1:
            e = Kn();
            break;
          case 2:
            e = Xn();
            break;
          case 3:
            e = Yn();
            break;
          case 4:
            e = Qn();
            break;
          case 5:
            e = Jn();
            break;
          default:
            o(
              "kotlin-kotlin-stdlib-crypto",
            ).noWhenBranchMatchedException2a6r7ubxgky5j();
            break;
        }
        return e;
      }));
    function ke() {
      return (Re(), ue);
    }
    function Ie() {
      return (Re(), ce);
    }
    function Te() {
      return (Re(), de);
    }
    function De() {
      return (Re(), me);
    }
    function xe() {
      return (Re(), pe);
    }
    function $e() {
      return (Re(), _e);
    }
    function Pe() {
      this.r5_1 = "Cipher text too short";
    }
    e.protoOf180f3jzyo7rfj(Pe).s5 = function () {
      return this.r5_1;
    };
    var Ne;
    function Me() {
      return Ne;
    }
    function we(e) {
      (o("kotlin-kotlin-stdlib-crypto").Exception_init_$Init$7nmtst2tre47(this),
        o("kotlin-kotlin-stdlib-crypto").captureStack1fzi4aczwc4hg(this, we),
        (this.t5_1 = e),
        delete this.message);
    }
    e.protoOf180f3jzyo7rfj(we).o3 = function () {
      return this.t5_1;
    };
    var Ae, Fe;
    function Oe() {
      return [Xe(), Ye()];
    }
    function Be(e) {
      switch (e) {
        case "ENCRYPT":
          return Xe();
        case "DECRYPT":
          return Ye();
        default:
          (qe(),
            o("kotlin-kotlin-stdlib-crypto").THROW_IAE23kobfj9wdoxr(
              "No enum constant com.whatsapp.kmp.syncd.syncdengine.utils.primitives.OpMode." +
                e,
            ));
          break;
      }
    }
    var We;
    function qe() {
      if (We)
        return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((We = !0), (Ae = new Ue("ENCRYPT", 0)), (Fe = new Ue("DECRYPT", 1)));
    }
    function Ue(e, t) {
      o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t);
    }
    var Ve, He;
    function Ge() {
      return [Je(), Ze()];
    }
    function ze(e) {
      switch (e) {
        case "HMAC_SHA_256":
          return Je();
        case "HMAC_SHA_512":
          return Ze();
        default:
          (Ke(),
            o("kotlin-kotlin-stdlib-crypto").THROW_IAE23kobfj9wdoxr(
              "No enum constant com.whatsapp.kmp.syncd.syncdengine.utils.primitives.MacAlgo." +
                e,
            ));
          break;
      }
    }
    var je;
    function Ke() {
      if (je)
        return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((je = !0),
        (Ve = new Qe("HMAC_SHA_256", 0)),
        (He = new Qe("HMAC_SHA_512", 1)));
    }
    function Qe(e, t) {
      o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t);
    }
    function Xe() {
      return (qe(), Ae);
    }
    function Ye() {
      return (qe(), Fe);
    }
    function Je() {
      return (Ke(), Ve);
    }
    function Ze() {
      return (Ke(), He);
    }
    var et,
      tt,
      nt,
      rt,
      ot,
      at,
      it,
      lt,
      st,
      ut,
      ct,
      dt,
      mt,
      pt,
      _t,
      ft,
      gt,
      ht,
      yt,
      Ct,
      bt,
      vt,
      St,
      Rt,
      Lt,
      Et,
      kt,
      It,
      Tt,
      Dt,
      xt,
      $t,
      Pt,
      Nt,
      Mt,
      wt,
      At,
      Ft,
      Ot,
      Bt,
      Wt,
      qt,
      Ut,
      Vt,
      Ht,
      Gt,
      zt,
      jt,
      Kt,
      Qt,
      Xt,
      Yt,
      Jt,
      Zt,
      en,
      tn,
      nn,
      rn,
      on,
      an,
      ln,
      sn,
      un,
      cn,
      dn,
      mn,
      pn,
      _n,
      fn,
      gn,
      hn,
      yn,
      Cn,
      bn,
      vn,
      Sn,
      Rn,
      Ln,
      En,
      kn,
      In,
      Tn,
      Dn,
      xn,
      $n,
      Pn,
      Nn,
      Mn,
      wn,
      An,
      Fn,
      On,
      Bn,
      Wn;
    function qn() {}
    var Un;
    function Vn() {
      return Un;
    }
    var Hn;
    function Gn() {
      if (Hn)
        return o("kotlin-kotlin-stdlib-crypto").Unit_instance1fbcbse1fwigr;
      ((Hn = !0),
        (et = new zn("TooManyInternalServerErrorsIn7D", 0, 1)),
        (tt = new zn("ServerDataMismatch", 1, 2)),
        (nt = new zn("ProtobufDeserializationFailed", 2, 3)),
        (rt = new zn("ExternalPatchExpired", 3, 4)),
        (ot = new zn("MissingOrEmptyIndex", 4, 5)),
        (at = new zn("SameIndexForMultipleMutationsInPatch", 5, 6)),
        (it = new zn("DecryptionFailed", 6, 7)),
        (lt = new zn("MissingPatchVersion", 7, 8)),
        (st = new zn("DuplicatePatchVersionInCollection", 8, 9)),
        (ut = new zn("EncryptionFailed", 9, 10)),
        (ct = new zn("MissingMutationVersion", 10, 11)),
        (dt = new zn("MissingMutationValue", 11, 12)),
        (mt = new zn("InvalidMutationIndex", 12, 13)),
        (pt = new zn("PatchWithBothInlineAndExternalMutations", 13, 14)),
        (_t = new zn("MissingMutationOperation", 14, 15)),
        (ft = new zn("MissingMutationRecord", 15, 16)),
        (gt = new zn("MissingMutationKeyId", 16, 17)),
        (ht = new zn("PatchProtobufDeserializationFailed", 17, 18)),
        (yt = new zn("ActionDataProtobufDeserializationFailed", 18, 19)),
        (Ct = new zn("MissingMutationIndex", 19, 20)),
        (bt = new zn("MissingActionIndex", 20, 21)),
        (vt = new zn("InvalidActionIndex", 21, 22)),
        (St = new zn("MissingActionValue", 22, 23)),
        (Rt = new zn("MissingActionVersion", 23, 24)),
        (Lt = new zn("MissingActionTimestamp", 24, 25)),
        (Et = new zn("MutationsProtobufDeserializationFailed", 25, 26)),
        (kt = new zn("MutationsProtobufSerializationFailed", 26, 27)),
        (It = new zn("PatchProtobufSerializationFailed", 27, 28)),
        (Tt = new zn("ActionDataProtobufSerializationFailed", 28, 29)),
        (Dt = new zn("MissingKeyOnAllClients", 29, 30)),
        (xt = new zn("TimeoutWhileWaitingForMissingKey", 30, 31)),
        ($t = new zn("MacMismatchSnapshot", 31, 33)),
        (Pt = new zn("MacMismatchPatch", 32, 34)),
        (Nt = new zn("DbStoreNotReady", 33, 35)),
        (Mt = new zn("TerminalPatchMissingData", 34, 36)),
        (wt = new zn("TerminalPatchDeserializationError", 35, 37)),
        (At = new zn("TerminalPatchUnknown", 36, 38)),
        (Ft = new zn("CyclicMutationDependencyInPatch", 37, 39)),
        (Ot = new zn("MissingSnapshotVersion", 38, 45)),
        (Bt = new zn("MissingSnapshotMac", 39, 46)),
        (Wt = new zn("MissingPatchSnapshotMac", 40, 47)),
        (qt = new zn("MissingPatchMac", 41, 48)),
        (Ut = new zn("MissingExternalBlobReferenceMediaKey", 42, 49)),
        (Vt = new zn("MissingExternalBlobReferenceDirectPath", 43, 50)),
        (Ht = new zn("MissingExternalBlobReferenceFileSha256", 44, 51)),
        (Gt = new zn("MissingExternalBlobReferenceFileEncSha256", 45, 52)),
        (zt = new zn("InvalidKeyShareKeyId", 46, 53)),
        (jt = new zn("MissingPatchKeyId", 47, 56)),
        (Kt = new zn("InvalidKeyShareKeyData", 48, 57)),
        (Qt = new zn("SnapshotExpired", 49, 58)),
        (Xt = new zn("MissingSnapshotKeyId", 50, 59)),
        (Yt = new zn("SnapshotMacMismatchInPatch", 51, 60)),
        (Jt = new zn("SnapshotMacMismatchInSnapshot", 52, 61)),
        (Zt = new zn("XmppBadRequestForCollection", 53, 62)),
        (en = new zn("XmppNotFoundForCollection", 54, 63)),
        (tn = new zn("XmppBadRequestGlobalError", 55, 64)),
        (nn = new zn("XmppNotFoundGlobalError", 56, 65)),
        (rn = new zn("XmppBadMethodGlobalError", 57, 66)),
        (on = new zn("XmppNotAcceptableGlobalError", 58, 67)),
        (an = new zn("SameIndexForMultipleMutationsInSnapshot", 59, 68)),
        (ln = new zn(
          "ExternalBlobReferenceProtobufDeserializationFailed",
          60,
          69,
        )),
        (sn = new zn("SnapshotProtobufDeserializationFailed", 61, 70)),
        (un = new zn("RequestingMissingKeyWithNoClients", 62, 71)),
        (cn = new zn("DbStoreNotReadyLowDiskSpace", 63, 72)),
        (dn = new zn("ServerDidNotSendAllPatches", 64, 73)),
        (mn = new zn("ServerSentEarlierPatch", 65, 74)),
        (pn = new zn("MissingKeyForMutationInLocalSnapshot", 66, 75)),
        (_n = new zn("MissingActiveKeyAfterRotation", 67, 76)),
        (fn = new zn("MissingActiveKeyForEncryption", 68, 77)),
        (gn = new zn("MissingCurrentEpochForActiveKeyValidation", 69, 78)),
        (hn = new zn("SameIndexForMultipleMutationsInOutgoingPatch", 70, 79)),
        (yn = new zn("InvalidSnapshotRecords", 71, 80)),
        (Cn = new zn("MissingExternalBlobReferenceHandle", 72, 81)),
        (bn = new zn("InvalidExternalBlobReferenceUploaded", 73, 82)),
        (vn = new zn("InvalidPatchKeyIdSize", 74, 83)),
        (Sn = new zn("InvalidPatchMacSize", 75, 84)),
        (Rn = new zn("InvalidPatchSnapshotMacSize", 76, 85)),
        (Ln = new zn("InvalidCollectionSnapshotHashSize", 77, 86)),
        (En = new zn("MissingCollectionSnapshotHash", 78, 87)),
        (kn = new zn("InvalidPatchKeyIdDeviceId", 79, 88)),
        (In = new zn("InvalidPatchKeyIdEpoch", 80, 89)),
        (Tn = new zn("DecryptionFailedKeyIdMismatch", 81, 90)),
        (Dn = new zn("DecryptionFailedValueMacMismatch", 82, 91)),
        (xn = new zn("DecryptionFailedIndexMacMismatch", 83, 92)),
        ($n = new zn("ExternalPatchMissingBlob", 84, 93)),
        (Pn = new zn(
          "CollectionPullRequestReceivedPushResponseWithUpdatedVersion",
          85,
          94,
        )),
        (Nn = new zn(
          "CollectionPushRequestReceivedResponseWithVersionMismatch",
          86,
          95,
        )),
        (Mn = new zn("MmsErrorInvalidFilehash", 87, 96)),
        (wn = new zn("Unknown", 88, 97)),
        (An = new zn("MalformedMutationClearChat", 89, 98)),
        (Fn = new zn("MalformedMutationDeleteChat", 90, 99)),
        (On = new zn("FailedMutationClearChat", 91, 100)),
        (Bn = new zn("FailedMutationDeleteChat", 92, 101)),
        (Wn = new zn("ChatDbCorruption", 93, 102)));
    }
    function zn(e, t, n) {
      (o("kotlin-kotlin-stdlib-crypto").Enum3alwj03lh1n41.call(this, e, t),
        (this.a6_1 = n));
    }
    function jn() {
      return (Gn(), yt);
    }
    function Kn() {
      return (Gn(), bt);
    }
    function Qn() {
      return (Gn(), vt);
    }
    function Xn() {
      return (Gn(), St);
    }
    function Yn() {
      return (Gn(), Rt);
    }
    function Jn() {
      return (Gn(), Lt);
    }
    function Zn(e) {
      this.b6_1 = e;
    }
    e.protoOf180f3jzyo7rfj(Zn).getForInternal = function (e) {
      return this.b6_1.getForInternal(e);
    };
    function er(e) {
      this.c6_1 = e;
    }
    ((e.protoOf180f3jzyo7rfj(er).createCipherText = function (e, t, n, r) {
      return this.c6_1.createCipherText(e, t, n, r);
    }),
      (e.protoOf180f3jzyo7rfj(er).mac = function (e, t, n) {
        return this.c6_1.mac(e, t, n);
      }),
      (e.protoOf180f3jzyo7rfj(er).generateRandomBytes = function (e) {
        return this.c6_1.generateRandomBytes(e);
      }),
      (e.protoOf180f3jzyo7rfj(er).bytesToHexString = function (e) {
        return this.c6_1.bytesToHexString(e);
      }));
    function tr(e) {
      this.d6_1 = e;
    }
    e.protoOf180f3jzyo7rfj(tr).createInternal = function (e, t, n, r) {
      return this.d6_1.createInternal(e, t, n, r);
    };
    function nr(e) {
      this.e6_1 = e;
    }
    e.protoOf180f3jzyo7rfj(nr).encodeMutationDataToSyncdActionData = function (
      e,
      t,
    ) {
      return this.e6_1.encodeMutationDataToSyncdActionData(e, t);
    };
    function rr(e) {
      return function (t) {
        return e(t).toPromise();
      };
    }
    function or(e) {
      return e;
    }
    function ar(e) {
      this.f6_1 = e;
    }
    ((e.protoOf180f3jzyo7rfj(ar).g6 = function (e) {
      var t = this.f6_1.then(e);
      return new ar(t);
    }),
      (e.protoOf180f3jzyo7rfj(ar).h6 = function (e) {
        var t = this.f6_1.then(rr(e)),
          n = or,
          r = t.then(n);
        return new ar(r);
      }),
      (e.protoOf180f3jzyo7rfj(ar).toPromise = function () {
        return this.f6_1;
      }));
    function ir() {}
    var lr;
    function sr() {
      return lr;
    }
    function ur(e) {
      this.keyData = e;
    }
    e.protoOf180f3jzyo7rfj(ur).x4 = function () {
      return this.keyData;
    };
    function cr(e, t) {
      return (
        gr.call(t),
        (t.value = o("kotlin-kotlin-stdlib-crypto").toLongkk4waq8msp1k(e)),
        t
      );
    }
    function dr(e) {
      return cr(
        e,
        o("kotlin-kotlin-stdlib-crypto").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib-crypto").protoOf180f3jzyo7rfj(gr),
        ),
      );
    }
    function mr(e, t) {
      return (
        gr.call(t),
        (t.value = o("kotlin-kotlin-stdlib-crypto").fromInt2ii0rejb1w62w(e)),
        t
      );
    }
    function pr(e) {
      return mr(
        e,
        o("kotlin-kotlin-stdlib-crypto").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib-crypto").protoOf180f3jzyo7rfj(gr),
        ),
      );
    }
    function _r(e, t) {
      return (gr.call(t), (t.value = e), t);
    }
    function fr(e) {
      return _r(
        e,
        o("kotlin-kotlin-stdlib-crypto").objectCreate1ve4bgxiu4x98(
          o("kotlin-kotlin-stdlib-crypto").protoOf180f3jzyo7rfj(gr),
        ),
      );
    }
    ((e.protoOf180f3jzyo7rfj(gr).o = function () {
      return this.value;
    }),
      (e.protoOf180f3jzyo7rfj(gr).toDecimalString = function () {
        return this.value.toString();
      }));
    function gr() {}
    (e.defineProp3ur6h3slcvq4x(
      e.protoOf180f3jzyo7rfj(k),
      "name",
      e.protoOf180f3jzyo7rfj(k).s,
    ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(k),
        "ordinal",
        e.protoOf180f3jzyo7rfj(k).t,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(X),
        "name",
        e.protoOf180f3jzyo7rfj(X).s,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(X),
        "ordinal",
        e.protoOf180f3jzyo7rfj(X).t,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(ie),
        "message",
        function () {
          return this.o3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(ie),
        "cause",
        function () {
          return this.p3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(le),
        "cause",
        function () {
          return this.p3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(se),
        "message",
        function () {
          return this.o3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(se),
        "cause",
        function () {
          return this.p3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Ee),
        "name",
        e.protoOf180f3jzyo7rfj(Ee).s,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Ee),
        "ordinal",
        e.protoOf180f3jzyo7rfj(Ee).t,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(we),
        "message",
        function () {
          return this.o3();
        },
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Ue),
        "name",
        e.protoOf180f3jzyo7rfj(Ue).s,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Ue),
        "ordinal",
        e.protoOf180f3jzyo7rfj(Ue).t,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Qe),
        "name",
        e.protoOf180f3jzyo7rfj(Qe).s,
      ),
      e.defineProp3ur6h3slcvq4x(
        e.protoOf180f3jzyo7rfj(Qe),
        "ordinal",
        e.protoOf180f3jzyo7rfj(Qe).t,
      ),
      (e.protoOf180f3jzyo7rfj(Zn).getFor = s),
      (e.protoOf180f3jzyo7rfj(tr).create = u),
      (O = new F()),
      (oe = new re()),
      (ge = new fe()),
      (Ne = new Pe()),
      (Un = new qn()),
      (lr = new ir()),
      (k.values = y),
      (k.valueOf = C),
      (k.fromString = b),
      (k.fromWamSyncdCollectionType = v),
      e.defineProp3ur6h3slcvq4x(k, "Regular", I, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(k, "RegularLow", T, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(k, "RegularHigh", D, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(k, "CriticalBlock", x, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(
        k,
        "CriticalUnblockLow",
        $,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        k,
        "ALL_COLLECTIONS",
        S,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        k,
        "ALL_CRITICAL_COLLECTIONS",
        R,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(k, "Companion", h, e.VOID3gxj6tk5isa35, !0),
      (W.createAndCalculateMutationMac = A),
      e.defineProp3ur6h3slcvq4x(W, "Companion", B, e.VOID3gxj6tk5isa35, !0),
      (X.values = z),
      (X.valueOf = j),
      e.defineProp3ur6h3slcvq4x(X, "Set", Y, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(X, "Remove", J, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(ie, "Companion", ae, e.VOID3gxj6tk5isa35, !0),
      (Ee.values = ye),
      (Ee.valueOf = Ce),
      (Ee.fromInt = ve),
      e.defineProp3ur6h3slcvq4x(Ee, "UNPARSABLE", ke, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(
        Ee,
        "MISSING_INDEX",
        Ie,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        Ee,
        "MISSING_VALUE",
        Te,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        Ee,
        "MISSING_VERSION",
        De,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        Ee,
        "INVALID_INDEX_FORMAT",
        xe,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        Ee,
        "MISSING_ACTION_TIMESTAMP",
        $e,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(Ee, "Companion", he, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(we, "Companion", Me, e.VOID3gxj6tk5isa35, !0),
      (Ue.values = Oe),
      (Ue.valueOf = Be),
      e.defineProp3ur6h3slcvq4x(Ue, "ENCRYPT", Xe, e.VOID3gxj6tk5isa35, !0),
      e.defineProp3ur6h3slcvq4x(Ue, "DECRYPT", Ye, e.VOID3gxj6tk5isa35, !0),
      (Qe.values = Ge),
      (Qe.valueOf = ze),
      e.defineProp3ur6h3slcvq4x(
        Qe,
        "HMAC_SHA_256",
        Je,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      e.defineProp3ur6h3slcvq4x(
        Qe,
        "HMAC_SHA_512",
        Ze,
        e.VOID3gxj6tk5isa35,
        !0,
      ),
      (gr.fromDecimalString = dr),
      (gr.fromNumber = pr),
      (gr.fromBigint = fr),
      (l.KmpSyncdCollectionName = k),
      (l.KmpSyncdCryptoActionData = N),
      (l.KmpSyncdCryptoDerivedKeys = M),
      (l.KmpSyncdCryptoEncryptedData = W),
      (l.KmpSyncdCryptoMutationData = q),
      (l.KmpSyncdCryptoMutationKey = U),
      (l.KmpSyncdCryptoMutationKeyId = V),
      (l.KmpSyncdCryptoMutationOperation = X),
      (l.KmpSyncdCipherException = ie),
      (l.KmpSyncdKeyException = le),
      (l.KmpSyncdMutationException = se),
      (l.KmpSyncdMutationExceptionReason = Ee),
      (l.KmpSyncdParseException = we),
      (l.OpMode = Ue),
      (l.MacAlgo = Qe),
      (l.JsKmpDerivedSyncdKeysProviderImpl = Zn),
      (l.JsKmpSyncdCryptoProviderImpl = er),
      (l.JsKmpSyncdMutationDataFactoryImpl = tr),
      (l.JsKmpSyncdProtobufProviderImpl = nr),
      (l.KmpCryptoResult = ar),
      (l.KmpSyncdCryptoMutationKeyData = ur),
      (l.KmpLong = gr),
      (l.KmpSyncdCryptoEncryptedData2qzy9qni0hrm2 = W),
      (l.KmpSyncdCipherException1yr5ole70ur3d = ie),
      (l.KmpSyncdParseException1owflwptcaobs = we),
      (l.MacAlgo_HMAC_SHA_256_getInstance3mchsdvnjagj8 = Je),
      (l.MacAlgo_HMAC_SHA_512_getInstances0w60r7tu8vg = Ze),
      (l.OpMode_DECRYPT_getInstance1ub7qnw77sd5o = Ye),
      (l.OpMode_ENCRYPT_getInstance1dfeme89me53k = Xe));
  },
  98,
);
