__d(
  "WAWebUserPrefsInfoStore",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = 128,
      f = "AES-GCM",
      g = "PBKDF2",
      h = r("gkx")("26256") ? 1e4 : 6e5,
      y = (function () {
        function t() {
          this.cachedPasscodeDerivedKey = null;
        }
        var r = t.prototype;
        return (
          (r.resetCachedPasscodeDerivedKey = function () {
            this.cachedPasscodeDerivedKey = null;
          }),
          (r.getCertficateChain = function (n) {
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
          (r.get = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = o("WAWebUserPrefsMultiDevice").getNoiseInfo();
              if (!e) return null;
              var t = this.$1();
              if (!t) return null;
              if (
                ((e = yield this.$2(e, t)),
                o("WAWebUserPrefsScreenLock").getScreenLockEnabled())
              ) {
                o("WAWebBackendEventBus").BackendEventBus.triggerSetSocketState(
                  o("WAWebSocketConstants").SOCKET_STATE.SCREEN_LOCKED,
                );
                var n = yield this.passcodeUnlockNoiseInfo(e);
                n && (e = n);
              }
              var r = yield this.$3(e);
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
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.setCertificateChain = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.get();
                if (t)
                  try {
                    var n = babelHelpers.extends({}, e.intermediate, {
                        key: o("WABase64").encodeB64(e.intermediate.key),
                      }),
                      r = babelHelpers.extends({}, e.leaf, {
                        key: o("WABase64").encodeB64(e.leaf.key),
                      }),
                      a = JSON.stringify({ intermediate: n, leaf: r });
                    return (
                      (t.certificateChainBuffer =
                        o("WAArrayBufferUtils").stringToArrayBuffer(a)),
                      this.set(t)
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.set = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  r = e;
                if (this.cachedPasscodeDerivedKey != null) {
                  var a = this.cachedPasscodeDerivedKey,
                    i = r,
                    l = i.certificateChainBuffer,
                    s = i.recoveryToken,
                    u = i.staticKeyPair,
                    c = u.privKey,
                    d = u.pubKey;
                  try {
                    var m = yield (p || (p = n("Promise"))).all(
                      [s, d, c, l].map(function (e) {
                        return t.encryptNoiseWithPasscodeDerivedKey(e, a);
                      }),
                    );
                    m[0] &&
                      m[1] &&
                      m[2] &&
                      (r = {
                        recoveryToken: m[0],
                        staticKeyPair: { pubKey: m[1], privKey: m[2] },
                        certificateChainBuffer: m[3],
                      });
                  } catch (e) {}
                }
                var _ = new Uint8Array(64);
                self.crypto.getRandomValues(_);
                var f = this.$4(_);
                yield this.$5(f);
                var g = yield (p || (p = n("Promise"))).all([
                    this.$6(r.recoveryToken, f[0]),
                    this.$6(r.staticKeyPair.pubKey, f[1]),
                    this.$6(r.staticKeyPair.privKey, f[2]),
                    r.certificateChainBuffer
                      ? this.$6(r.certificateChainBuffer, f[3])
                      : (p || (p = n("Promise"))).resolve(void 0),
                  ]),
                  h = g[0],
                  y = g[1],
                  C = g[2],
                  b = g[3];
                return (
                  (r.recoveryToken = h),
                  (r.staticKeyPair.pubKey = y),
                  (r.staticKeyPair.privKey = C),
                  (r.certificateChainBuffer = b),
                  o("WAWebUserPrefsMultiDevice").setNoiseInfo(r)
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$5 = function (t) {
            return o("WAWebUserPrefsMultiDevice").setNoiseInfoIv(
              t.map(o("WABase64").encodeB64),
            );
          }),
          (r.$1 = function () {
            var e = o("WAWebUserPrefsMultiDevice").getNoiseInfoIv();
            return e
              ? e.map(function (e) {
                  return new Uint8Array(o("WABase64").decodeB64(e));
                })
              : null;
          }),
          (r.$4 = function (t) {
            var e = new (o("WABinary").Binary)(t);
            return [
              e.readByteArrayView(16),
              e.readByteArrayView(16),
              e.readByteArrayView(16),
              e.readByteArrayView(16),
            ];
          }),
          (r.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
                  r = yield self.crypto.subtle.encrypt(
                    { iv: t, name: "AES-CBC" },
                    n.key,
                    e,
                  );
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = yield (p || (p = n("Promise"))).all([
                    this.$7(e.recoveryToken, t[0]),
                    this.$7(e.staticKeyPair.pubKey, t[1]),
                    this.$7(e.staticKeyPair.privKey, t[2]),
                    e.certificateChainBuffer != null
                      ? this.$7(e.certificateChainBuffer, t[3])
                      : (p || (p = n("Promise"))).resolve(void 0),
                  ]),
                  o = r[0],
                  a = r[1],
                  i = r[2],
                  l = r[3];
                return (
                  (e.certificateChainBuffer = l),
                  (e.recoveryToken = o),
                  (e.staticKeyPair.pubKey = a),
                  (e.staticKeyPair.privKey = i),
                  e
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$7 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebDbEncryptionKey").DbEncKeyStore.getEncKeys()[0],
                  r = yield self.crypto.subtle.decrypt(
                    { iv: t, name: "AES-CBC" },
                    n.key,
                    e,
                  );
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = !0;
                try {
                  for (
                    var n = yield o("WAWebCryptoCurve25519").keyPair(
                        e.staticKeyPair.privKey,
                      ),
                      r = n.pubKey,
                      a = new Uint8Array(r),
                      i = new Uint8Array(e.staticKeyPair.pubKey),
                      l = 0;
                    l < a.length;
                    l++
                  )
                    if (a[l] !== i[l]) {
                      t = !1;
                      break;
                    }
                } catch (e) {
                  (o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "Decrypted noise key failed validation.",
                        ])),
                    )
                    .tags("info-store"),
                    (t = !1));
                }
                return t;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.lockNoiseInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.deriveKeyFromPasscode(e);
                this.createScreenLockIv();
                var n = yield this.get();
                if (!n || !n.staticKeyPair) return !1;
                try {
                  return (
                    (this.cachedPasscodeDerivedKey = t),
                    yield this.set(n),
                    !0
                  );
                } catch (e) {
                  this.cachedPasscodeDerivedKey = null;
                }
                return !1;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.passcodeUnlockNoiseInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                t === void 0 && (t = !1);
                var n;
                if (this.cachedPasscodeDerivedKey == null) {
                  var r;
                  (t
                    ? (r = yield o("WAWebBackendApi").frontendSendAndReceive(
                        "waitForPasscodeAfterIncorrectAttempt",
                        void 0,
                      ))
                    : (r = yield o("WAWebBackendApi").frontendSendAndReceive(
                        "waitForPasscode",
                        void 0,
                      )),
                    (n = yield this.deriveKeyFromPasscode(r)));
                } else n = this.cachedPasscodeDerivedKey;
                var a = yield this.getUnlockedNoiseInfo(e, n);
                return !a || !(yield this.$3(a))
                  ? (o("WALogger")
                      .LOG(
                        d ||
                          (d = babelHelpers.taggedTemplateLiteralLoose([
                            "Decrypted noise key was invalid.",
                          ])),
                      )
                      .tags("info-store"),
                    this.passcodeUnlockNoiseInfo(e, !0))
                  : (yield o("WAWebBackendApi").frontendSendAndReceive(
                      "correctPasscodeEntered",
                      { key: n },
                    ),
                    o(
                      "WAWebBackendEventBus",
                    ).BackendEventBus.triggerSetSocketState(
                      o("WAWebSocketConstants").SOCKET_STATE.OPENING,
                    ),
                    a);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getUnlockedNoiseInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var r = this,
                  o = e.certificateChainBuffer,
                  a = e.recoveryToken,
                  i = e.staticKeyPair,
                  l = i.privKey,
                  s = i.pubKey;
                try {
                  var u = yield (p || (p = n("Promise"))).all(
                    [a, s, l, o].map(function (e) {
                      return r.decryptNoiseWithPasscodeDerivedKey(e, t);
                    }),
                  );
                  if (u[0] && u[1] && u[2])
                    return (
                      (this.cachedPasscodeDerivedKey = t),
                      {
                        recoveryToken: u[0],
                        staticKeyPair: { pubKey: u[1], privKey: u[2] },
                        certificateChainBuffer: u[3],
                      }
                    );
                } catch (e) {
                  return null;
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.removeLockOnNoiseInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebUserPrefsMultiDevice").getNoiseInfo();
                if (!t) return !1;
                var n = this.$1();
                if (!n) return !1;
                t = yield this.$2(t, n);
                var r = yield this.deriveKeyFromPasscode(e),
                  a = yield this.getUnlockedNoiseInfo(t, r);
                if (a != null) {
                  var i = yield this.$3(a);
                  return i
                    ? ((this.cachedPasscodeDerivedKey = null),
                      yield this.set(a),
                      o("WAWebUserPrefsScreenLock").setScreenLockSalt(null),
                      o("WAWebUserPrefsScreenLock").setScreenLockIvString(""),
                      yield o(
                        "WAWebUserPrefsScreenLock",
                      ).setScreenLockIterations(null),
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
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.deriveKeyFromPasscode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = new TextEncoder().encode(e),
                  n = yield self.crypto.subtle.importKey(
                    "raw",
                    t,
                    { name: g },
                    !1,
                    ["deriveKey"],
                  ),
                  r = yield this.getOrGenScreenLockSalt(),
                  o = yield self.crypto.subtle.deriveKey(
                    {
                      name: g,
                      hash: "SHA-256",
                      salt: r,
                      iterations: yield this.getScreenLockIterationCount(),
                    },
                    n,
                    { name: f, length: _ },
                    !1,
                    ["encrypt", "decrypt"],
                  );
                return o;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.getOrGenScreenLockSalt = function () {
            var e = null;
            return (
              o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ||
                ((e = new Uint8Array(_)),
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
              (p || (p = n("Promise"))).resolve(e)
            );
          }),
          (r.createScreenLockIv = function () {
            var e = new Uint8Array(16);
            self.crypto.getRandomValues(e);
            var t = new (o("WABinary").Binary)(e).readByteArrayView(16);
            o("WAWebUserPrefsScreenLock").setScreenLockIvString(
              o("WABase64").encodeB64(t),
            );
          }),
          (r.getScreenLockIvArray = function () {
            var e = o("WAWebUserPrefsScreenLock").getScreenLockIvString();
            return e ? new Uint8Array(o("WABase64").decodeB64(e)) : null;
          }),
          (r.encryptNoiseWithPasscodeDerivedKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e == null) return null;
                var n = this.getScreenLockIvArray();
                if (!n) return null;
                var r = yield self.crypto.subtle.encrypt(
                  { iv: n, name: f },
                  t,
                  e,
                );
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.decryptNoiseWithPasscodeDerivedKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e == null) return null;
                var n = this.getScreenLockIvArray();
                if (!n) return null;
                var r = yield self.crypto.subtle.decrypt(
                  { iv: n, name: f },
                  t,
                  e,
                );
                return r;
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.calculatePBKDF2Iterations = function () {
            var e = navigator.hardwareConcurrency;
            return h * Math.max(1, Number.isNaN(e) ? 1 : e);
          }),
          (r.getScreenLockIterationCount = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e = yield o(
                "WAWebUserPrefsScreenLock",
              ).getScreenLockIterations();
              return (
                (!o("WAWebUserPrefsScreenLock").getScreenLockEnabled() ||
                  e == null) &&
                  ((e = this.calculatePBKDF2Iterations()),
                  yield o("WAWebUserPrefsScreenLock").setScreenLockIterations(
                    e,
                  )),
                e
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      C = new y();
    l.waNoiseInfo = C;
  },
  98,
);
