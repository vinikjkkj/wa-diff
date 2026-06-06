__d(
  "WAWebUserPrefsInfoStore",
  [
    "WAArrayBufferUtils",
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebBackendApi",
    "WAWebBackendEventBus",
    "WAWebCoreActionsODS",
    "WAWebCryptoCurve25519",
    "WAWebDbEncryptionKey",
    "WAWebLogoutReasonConstants",
    "WAWebSocketConstants",
    "WAWebSocketLogoutJob",
    "WAWebUserPrefsMultiDevice",
    "WAWebUserPrefsScreenLock",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = 128,
      _ = "AES-GCM",
      f = "PBKDF2",
      g = r("gkx")("26256") ? 1e4 : 6e5,
      h = (function () {
        function t() {
          this.cachedPasscodeDerivedKey = null;
        }
        var n = t.prototype;
        return (
          (n.resetCachedPasscodeDerivedKey = function () {
            this.cachedPasscodeDerivedKey = null;
          }),
          (n.getCertficateChain = function (n) {
            var t = o("WAArrayBufferUtils").arrayBufferToString(n);
            try {
              var r = JSON.parse(t),
                a = r.intermediate,
                i = r.leaf;
              return {
                intermediate: {
                  key: o("WABase64").decodeB64(a.key),
                  notAfter: Number(a.notAfter),
                  notBefore: Number(a.notBefore),
                },
                leaf: {
                  key: o("WABase64").decodeB64(i.key),
                  notAfter: Number(i.notAfter),
                  notBefore: Number(i.notBefore),
                },
              };
            } catch (t) {
              return (
                o("WALogger").LOG(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error parsing certificate chain: ",
                      "",
                    ])),
                  t,
                ),
                null
              );
            }
          }),
          (n.get = async function () {
            var e = o("WAWebUserPrefsMultiDevice").getNoiseInfo();
            if (!e) return null;
            var t = this.$1();
            if (!t) return null;
            if (
              ((e = await this.$2(e, t)),
              o("WAWebUserPrefsScreenLock").getScreenLockEnabled())
            ) {
              o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                o("WAWebSocketConstants").SOCKET_STATE.SCREEN_LOCKED,
              );
              var n = await this.passcodeUnlockNoiseInfo(e);
              n && (e = n);
            }
            var r = await this.$3(e);
            return r
              ? e
              : (o("WALogger")
                  .LOG(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Decrypted noise key was invalid.",
                      ])),
                  )
                  .tags("info-store"),
                null);
          }),
          (n.setCertificateChain = async function (t) {
            var e = await this.get();
            if (e)
              try {
                var n = babelHelpers.extends({}, t.intermediate, {
                    key: o("WABase64").encodeB64(t.intermediate.key),
                  }),
                  r = babelHelpers.extends({}, t.leaf, {
                    key: o("WABase64").encodeB64(t.leaf.key),
                  }),
                  a = JSON.stringify({ intermediate: n, leaf: r });
                return (
                  (e.certificateChainBuffer =
                    o("WAArrayBufferUtils").stringToArrayBuffer(a)),
                  this.set(e)
                );
              } catch (e) {
                o("WALogger")
                  .LOG(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Error serializing certificate chain: ",
                        "",
                      ])),
                    e,
                  )
                  .sendLogs("handshake-serialization-failed");
              }
          }),
          (n.set = async function (t) {
            var e = this,
              n = t;
            if (this.cachedPasscodeDerivedKey != null) {
              var r = this.cachedPasscodeDerivedKey,
                a = n,
                i = a.certificateChainBuffer,
                l = a.recoveryToken,
                s = a.staticKeyPair,
                u = s.privKey,
                c = s.pubKey;
              try {
                var d = await Promise.all(
                  [l, c, u, i].map(function (t) {
                    return e.encryptNoiseWithPasscodeDerivedKey(t, r);
                  }),
                );
                d[0] &&
                  d[1] &&
                  d[2] &&
                  (n = {
                    recoveryToken: d[0],
                    staticKeyPair: { pubKey: d[1], privKey: d[2] },
                    certificateChainBuffer: d[3],
                  });
              } catch (e) {}
            }
            var m = new Uint8Array(64);
            self.crypto.getRandomValues(m);
            var p = this.$4(m);
            await this.$5(p);
            var _ = await Promise.all([
                this.$6(n.recoveryToken, p[0]),
                this.$6(n.staticKeyPair.pubKey, p[1]),
                this.$6(n.staticKeyPair.privKey, p[2]),
                n.certificateChainBuffer
                  ? this.$6(n.certificateChainBuffer, p[3])
                  : Promise.resolve(void 0),
              ]),
              f = _[0],
              g = _[1],
              h = _[2],
              y = _[3];
            return (
              (n.recoveryToken = f),
              (n.staticKeyPair.pubKey = g),
              (n.staticKeyPair.privKey = h),
              (n.certificateChainBuffer = y),
              o("WAWebUserPrefsMultiDevice").setNoiseInfo(n)
            );
          }),
          (n.$5 = function (t) {
            return o("WAWebUserPrefsMultiDevice").setNoiseInfoIv(
              t.map(o("WABase64").encodeB64),
            );
          }),
          (n.$1 = function () {
            var e = o("WAWebUserPrefsMultiDevice").getNoiseInfoIv();
            return e
              ? e.map(function (e) {
                  return new Uint8Array(o("WABase64").decodeB64(e));
                })
              : null;
          }),
          (n.$4 = function (t) {
            var e = new (o("WABinary").Binary)(t);
            return [
              e.readByteArrayView(16),
              e.readByteArrayView(16),
              e.readByteArrayView(16),
              e.readByteArrayView(16),
            ];
          }),
          (n.$6 = async function (t, n) {
            var e = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
              r = await self.crypto.subtle.encrypt(
                { iv: n, name: "AES-CBC" },
                e.key,
                t,
              );
            return r;
          }),
          (n.$2 = async function (t, n) {
            var e = await Promise.all([
                this.$7(t.recoveryToken, n[0]),
                this.$7(t.staticKeyPair.pubKey, n[1]),
                this.$7(t.staticKeyPair.privKey, n[2]),
                t.certificateChainBuffer != null
                  ? this.$7(t.certificateChainBuffer, n[3])
                  : Promise.resolve(void 0),
              ]),
              r = e[0],
              o = e[1],
              a = e[2],
              i = e[3];
            return (
              (t.certificateChainBuffer = i),
              (t.recoveryToken = r),
              (t.staticKeyPair.pubKey = o),
              (t.staticKeyPair.privKey = a),
              t
            );
          }),
          (n.$7 = async function (t, n) {
            var e = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
              r = await self.crypto.subtle.decrypt(
                { iv: n, name: "AES-CBC" },
                e.key,
                t,
              );
            return r;
          }),
          (n.$3 = async function (t) {
            var e = !0;
            try {
              for (
                var n = await o("WAWebCryptoCurve25519").keyPair(
                    t.staticKeyPair.privKey,
                  ),
                  r = n.pubKey,
                  a = new Uint8Array(r),
                  i = new Uint8Array(t.staticKeyPair.pubKey),
                  l = 0;
                l < a.length;
                l++
              )
                if (a[l] !== i[l]) {
                  e = !1;
                  break;
                }
            } catch (t) {
              (o("WALogger")
                .LOG(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "Decrypted noise key failed validation.",
                    ])),
                )
                .tags("info-store"),
                (e = !1));
            }
            return e;
          }),
          (n.lockNoiseInfo = async function (t) {
            var e = await this.deriveKeyFromPasscode(t);
            this.createScreenLockIv();
            var n = await this.get();
            if (!n || !n.staticKeyPair) return !1;
            try {
              return (
                (this.cachedPasscodeDerivedKey = e),
                await this.set(n),
                !0
              );
            } catch (e) {
              this.cachedPasscodeDerivedKey = null;
            }
            return !1;
          }),
          (n.passcodeUnlockNoiseInfo = async function (t, n) {
            n === void 0 && (n = !1);
            var e;
            if (this.cachedPasscodeDerivedKey == null) {
              var r;
              (n
                ? (r = await o("WAWebBackendApi").frontendSendAndReceive(
                    "waitForPasscodeAfterIncorrectAttempt",
                    void 0,
                  ))
                : (r = await o("WAWebBackendApi").frontendSendAndReceive(
                    "waitForPasscode",
                    void 0,
                  )),
                (e = await this.deriveKeyFromPasscode(r)));
            } else e = this.cachedPasscodeDerivedKey;
            var a = await this.getUnlockedNoiseInfo(t, e);
            return !a || !(await this.$3(a))
              ? (o("WALogger")
                  .LOG(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "Decrypted noise key was invalid.",
                      ])),
                  )
                  .tags("info-store"),
                this.passcodeUnlockNoiseInfo(t, !0))
              : (await o("WAWebBackendApi").frontendSendAndReceive(
                  "correctPasscodeEntered",
                  { key: e },
                ),
                o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.OPENING,
                ),
                a);
          }),
          (n.getUnlockedNoiseInfo = async function (t, n) {
            var e = this,
              r = t.certificateChainBuffer,
              o = t.recoveryToken,
              a = t.staticKeyPair,
              i = a.privKey,
              l = a.pubKey;
            try {
              var s = await Promise.all(
                [o, l, i, r].map(function (t) {
                  return e.decryptNoiseWithPasscodeDerivedKey(t, n);
                }),
              );
              if (s[0] && s[1] && s[2])
                return (
                  (this.cachedPasscodeDerivedKey = n),
                  {
                    recoveryToken: s[0],
                    staticKeyPair: { pubKey: s[1], privKey: s[2] },
                    certificateChainBuffer: s[3],
                  }
                );
            } catch (e) {
              return null;
            }
          }),
          (n.removeLockOnNoiseInfo = async function (t) {
            var e = o("WAWebUserPrefsMultiDevice").getNoiseInfo();
            if (!e) return !1;
            var n = this.$1();
            if (!n) return !1;
            e = await this.$2(e, n);
            var r = await this.deriveKeyFromPasscode(t),
              a = await this.getUnlockedNoiseInfo(e, r);
            if (a != null) {
              var i = await this.$3(a);
              return i
                ? ((this.cachedPasscodeDerivedKey = null),
                  await this.set(a),
                  o("WAWebUserPrefsScreenLock").setScreenLockSalt(null),
                  o("WAWebUserPrefsScreenLock").setScreenLockIvString(""),
                  await o("WAWebUserPrefsScreenLock").setScreenLockIterations(
                    null,
                  ),
                  !0)
                : (o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "Decrypted noise key was invalid.",
                        ])),
                    )
                    .tags("info-store"),
                  !1);
            }
            return !1;
          }),
          (n.deriveKeyFromPasscode = async function (t) {
            var e = new TextEncoder().encode(t),
              n = await self.crypto.subtle.importKey(
                "raw",
                e,
                { name: f },
                !1,
                ["deriveKey"],
              ),
              r = await this.getOrGenScreenLockSalt(),
              o = await self.crypto.subtle.deriveKey(
                {
                  name: f,
                  hash: "SHA-256",
                  salt: r,
                  iterations: await this.getScreenLockIterationCount(),
                },
                n,
                { name: _, length: p },
                !1,
                ["encrypt", "decrypt"],
              );
            return o;
          }),
          (n.getOrGenScreenLockSalt = function () {
            var e = null;
            return (
              o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ||
                ((e = new Uint8Array(p)),
                self.crypto.getRandomValues(e),
                (e = btoa(
                  String.fromCharCode.apply(
                    String,
                    Array.from(new Uint8Array(e)),
                  ),
                )),
                o("WAWebUserPrefsScreenLock").setScreenLockSalt(e)),
              (e = o("WAWebUserPrefsScreenLock").getScreenLockSalt()),
              e == null &&
                (o("WAWebCoreActionsODS").logSessionForcedLogout(),
                o("WAWebSocketLogoutJob").socketLogout(
                  o("WAWebLogoutReasonConstants").LogoutReason
                    .MissingScreenLockSalt,
                )),
              (e = Uint8Array.from(atob(e), function (e) {
                return e.charCodeAt(0);
              })),
              Promise.resolve(e)
            );
          }),
          (n.createScreenLockIv = function () {
            var e = new Uint8Array(16);
            self.crypto.getRandomValues(e);
            var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
            o("WAWebUserPrefsScreenLock").setScreenLockIvString(
              o("WABase64").encodeB64(t),
            );
          }),
          (n.getScreenLockIvArray = function () {
            var e = o("WAWebUserPrefsScreenLock").getScreenLockIvString();
            return e ? new Uint8Array(o("WABase64").decodeB64(e)) : null;
          }),
          (n.encryptNoiseWithPasscodeDerivedKey = async function (t, n) {
            if (t == null) return null;
            var e = this.getScreenLockIvArray();
            if (!e) return null;
            var r = await self.crypto.subtle.encrypt({ iv: e, name: _ }, n, t);
            return r;
          }),
          (n.decryptNoiseWithPasscodeDerivedKey = async function (t, n) {
            if (t == null) return null;
            var e = this.getScreenLockIvArray();
            if (!e) return null;
            var r = await self.crypto.subtle.decrypt({ iv: e, name: _ }, n, t);
            return r;
          }),
          (n.calculatePBKDF2Iterations = function () {
            var e = navigator.hardwareConcurrency;
            return g * Math.max(1, Number.isNaN(e) ? 1 : e);
          }),
          (n.getScreenLockIterationCount = async function () {
            var e = await o(
              "WAWebUserPrefsScreenLock",
            ).getScreenLockIterations();
            return (
              (!o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ||
                e == null) &&
                ((e = this.calculatePBKDF2Iterations()),
                await o("WAWebUserPrefsScreenLock").setScreenLockIterations(e)),
              e
            );
          }),
          t
        );
      })(),
      y = new h();
    l.waNoiseInfo = y;
  },
  98,
);
