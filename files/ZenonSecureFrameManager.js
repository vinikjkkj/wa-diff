__d(
  "ZenonSecureFrameManager",
  [
    "FrameDataHandlerTypeTypes",
    "SecureFrameErrors",
    "ZenonE2eeMandatedStateManager",
    "ZenonEncryptionKeysManagerState",
    "err",
    "performanceNow",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        error_count_decrypted: 0,
        error_count_encrypted: 0,
        frames_decrypted: 0,
        frames_encrypted: 0,
      },
      u = {
        debug_only_stats: s,
        decrypt_frames_dropped: 0,
        encrypt_frames_dropped: 0,
        total_decrypt_time: 0,
        total_encrypt_time: 0,
      },
      c = (function () {
        function t(e) {
          var t = e.encryptionKeysManager,
            n = e.logCallBack,
            r = e.module,
            a = e.onZenonLogEvent;
          ((this.$3 = new Map()),
            (this.$4 = new Map()),
            (this.$5 = new Map()),
            (this.$6 = !1),
            (this.$7 = !1),
            (this.$9 = o(
              "ZenonEncryptionKeysManagerState",
            ).ZenonEncryptionKeysManagerState$DefaultConstructor()),
            (this.$10 = new Map()),
            (this.$11 = !1),
            (this.$12 = !1),
            (this.$1 = r),
            (this.$2 = t),
            (this.$13 = a),
            (this.$8 = n));
        }
        var n = t.prototype;
        return (
          (n.setFrameDataHandlerTypesOnDecryptor = function (t, n) {
            var e = this,
              r = this.$14(t);
            if (r && !r.mediaType.includes("audio")) {
              var o = [];
              (n.forEach(function (t) {
                o.push(e.$15(t));
              }),
                this.$16(r.decryptor, o));
            }
          }),
          (n.setFrameDataHandlerOnEncryptor = function (t, n) {
            this.$5.set(t, n);
            var e = this.getEncryptorForId(t);
            e != null &&
              !e.mediaType.includes("audio") &&
              (e.frameDataHandlerType = this.$15(n));
          }),
          (n.$15 = function (t) {
            return t.includes("H264")
              ? o("FrameDataHandlerTypeTypes").FrameDataHandlerType.H264
              : o("FrameDataHandlerTypeTypes").FrameDataHandlerType.Generic;
          }),
          (n.encrypt = function (n, o) {
            var t,
              a = r("ZenonE2eeMandatedStateManager").isInfraE2eeMandated();
            if (o.data.byteLength === 0 || (!a && this.$6)) return o.data;
            var i = this.getEncryptorForId(n);
            if (i == null)
              return (
                this.$8("wasm_encrypt_encryptor_not_found"),
                a ? new ArrayBuffer(0) : o.data
              );
            var l = (t = this.$10.get(n)) != null ? t : n,
              s = this.$9.e2eeStats.track_specific_e2ee_stats.get(l);
            if (s == null)
              throw r("err")("Encrypt: e2eeStats not found for the given id");
            var u = i.frameDataHandlerType;
            if (u == null)
              return (s.encrypt_frames_dropped++, new ArrayBuffer(0));
            var c = (e || (e = r("performanceNow")))(),
              d = this.$1.encrypt(o, i.encryptor, u),
              m = e() - c;
            if (((s.total_encrypt_time += m), d.errorCode !== 0)) {
              var p,
                _ =
                  (p = r("SecureFrameErrors").get(d.errorCode)) != null
                    ? p
                    : "Undefined";
              return (
                this.$8("wasm_encryption_" + _.toLowerCase()),
                s.debug_only_stats.error_count_encrypted++,
                a ? (s.encrypt_frames_dropped++, new ArrayBuffer(0)) : o.data
              );
            } else
              return (s.debug_only_stats.frames_encrypted++, d.outputBuffer);
          }),
          (n.decrypt = function (n, o) {
            if (
              (this.$11 ||
                (this.$13({ name: "e2eeFirstFrameDecryptStart" }),
                (this.$11 = !0)),
              o.data.byteLength === 0)
            )
              return { data: o.data, hasError: !1 };
            if (this.$7) return { data: o.data, hasError: !1 };
            var t = this.$14(n);
            if (t == null)
              return (
                this.$8("wasm_decrypt_decryptor_not_found"),
                { data: o.data, hasError: !1 }
              );
            var a = this.$9.e2eeStats.track_specific_e2ee_stats.get(n);
            if (a == null)
              throw r("err")("Decrypt: e2eeStats not found for the given id");
            var i = (e || (e = r("performanceNow")))(),
              l = this.$1.decrypt(o, t.decryptor),
              s = e() - i;
            if (
              ((a.total_decrypt_time += s),
              this.$12 ||
                (this.$13({
                  errorCode: l.errorCode,
                  name: "e2eeFirstFrameDecryptEnd",
                }),
                (this.$12 = !0)),
              l.errorCode !== 0)
            ) {
              var u,
                c =
                  (u = r("SecureFrameErrors").get(l.errorCode)) != null
                    ? u
                    : "Undefined";
              return (
                this.$8("wasm_decryption_" + c.toLowerCase()),
                a.debug_only_stats.error_count_decrypted++,
                a.decrypt_frames_dropped++,
                { data: new ArrayBuffer(0), hasError: !0 }
              );
            } else
              return (
                a.debug_only_stats.frames_decrypted++,
                { data: l.outputBuffer, hasError: !1 }
              );
          }),
          (n.createEncryptorWithId = function (t, n) {
            if (!this.$17(t)) {
              var e = this.$1.createFrameEncryptor(this.$2),
                r = { encryptor: e, mediaType: n, trackId: t };
              if (n.includes("audio"))
                r.frameDataHandlerType = o(
                  "FrameDataHandlerTypeTypes",
                ).FrameDataHandlerType.Generic;
              else {
                var a = this.$5.get(t);
                a != null && (r.frameDataHandlerType = this.$15(a));
              }
              (this.$3.set(t, r),
                this.$9.e2eeStats.track_specific_e2ee_stats.has(t) ||
                  this.$9.e2eeStats.track_specific_e2ee_stats.set(t, u));
            }
          }),
          (n.createDecryptorWithId = function (t, n, r) {
            if (this.$18(t, n) == null) {
              var e = this.$14(t),
                o = this.$1.createFrameDecryptor(this.$2, n);
              (this.$19(o, r),
                this.$6 && this.$1.allowUnencryptedFrames(o),
                this.$4.set(t, {
                  decryptor: o,
                  e2eeId: n,
                  mediaType: r,
                  trackId: t,
                }),
                e != null && this.$20(e.decryptor),
                this.$9.e2eeStats.track_specific_e2ee_stats.has(t) ||
                  this.$9.e2eeStats.track_specific_e2ee_stats.set(t, u));
            }
          }),
          (n.$17 = function (t) {
            return this.$3.has(t);
          }),
          (n.getEncryptorForId = function (t) {
            return this.$3.get(t);
          }),
          (n.$14 = function (t) {
            return this.$4.get(t);
          }),
          (n.$18 = function (t, n) {
            var e = this.$14(t);
            if (e != null && e.e2eeId === n) return e;
          }),
          (n.freeAllEncryptorsAndDecryptors = function () {
            var e = this;
            (this.$3.forEach(function (t) {
              e.$21(t.encryptor);
            }),
              this.$3.clear(),
              this.$4.forEach(function (t) {
                e.$20(t.decryptor);
              }),
              this.$4.clear(),
              this.$5.clear());
          }),
          (n.freeEncryptorAndDecryptorForId = function (t) {
            var e = this.getEncryptorForId(t),
              n = this.$14(t);
            (this.$5.delete(t),
              e != null && (this.$21(e.encryptor), this.$3.delete(t)),
              n != null && (this.$20(n.decryptor), this.$4.delete(t)));
          }),
          (n.getTrackStats = function () {
            return this.$9.e2eeStats.track_specific_e2ee_stats;
          }),
          (n.updateLocalTrackIdForStats = function (t, n) {
            var e,
              r = this.$9.e2eeStats.track_specific_e2ee_stats,
              o = (e = this.$10.get(t)) != null ? e : t;
            this.$10.set(t, n);
            var a = r.get(o);
            a && (r.set(n, a), r.delete(o));
          }),
          (n.allowUnencryptedFramesOnDecryptors = function () {
            var e = this;
            this.$4.forEach(function (t) {
              e.$1.allowUnencryptedFrames(t.decryptor);
            });
          }),
          (n.setDecryptionDisabled = function (t) {
            this.$7 = t;
          }),
          (n.setEncryptionDisabled = function (t) {
            this.$6 = t;
          }),
          (n.$20 = function (t) {
            this.$1.freeDecryptor(t);
          }),
          (n.$21 = function (t) {
            this.$1.freeEncryptor(t);
          }),
          (n.$16 = function (t, n) {
            this.$1.setSupportedFrameDataHandlerTypes(t, n);
          }),
          (n.$19 = function (t, n) {
            var e = n.includes("audio")
              ? [o("FrameDataHandlerTypeTypes").FrameDataHandlerType.Generic]
              : [
                  o("FrameDataHandlerTypeTypes").FrameDataHandlerType.Generic,
                  o("FrameDataHandlerTypeTypes").FrameDataHandlerType.H264,
                ];
            this.$16(t, e);
          }),
          t
        );
      })();
    ((l.EMPTY_E2EE_STATS_PER_TRACK = u), (l.ZenonSecureFrameManager = c));
  },
  98,
);
