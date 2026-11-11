__d(
  "WAWebSignalProtocolStoreUnifiedApi",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCryptoCurve25519",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebProtocolStoreCommonApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalConvertApi",
    "WAWebSignalProtocolStoreCacheApi",
    "WAWebSignalStorageUtils",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWidFromSignalAddress",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b = n("$InternalEnum").Mirrored(["Persist", "Memory"]),
      v = (function () {
        function t() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.$1 = new (o(
              "WAWebSignalProtocolStoreCacheApi",
            ).SignalStoreCache)()),
            (this.$2 = b.Persist),
            (this.$3 = 0),
            (this.$4 = new Map()),
            (this.$5 = !1),
            (this.$6 = new Set()),
            (this.$7 = new WeakMap()));
        }
        var a = t.prototype;
        return (
          (a.cache_TESTONLY = function () {
            return this.$1;
          }),
          (a.getIdentityKeyPair = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                this.$1.RegistrationInfo ||
                  (this.$1.RegistrationInfo = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.getRegistrationInfo()),
                (e = this.$1.RegistrationInfo) != null && e.identityKeyPair
                  ? o("WAWebCryptoCurve25519").toSignalCurveKeyPair(
                      this.$1.RegistrationInfo.identityKeyPair,
                    )
                  : void 0
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getLocalRegistrationId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var e;
              return (
                this.$1.RegistrationInfo ||
                  (this.$1.RegistrationInfo = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.getRegistrationInfo()),
                ((e = this.$1.RegistrationInfo) == null
                  ? void 0
                  : e.registrationId) || void 0
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.isTrustedIdentity = function (t, r) {
            return (C || (C = n("Promise"))).resolve(!0);
          }),
          (a.$8 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t, n;
                if (e == null)
                  throw r("err")(
                    "Tried to get identity key for undefined/null key",
                  );
                if (!this.$1.IdentityStore.has(e)) {
                  var a = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.getIdentityKeyWithRowId(e);
                  this.$1.IdentityStore.set(e, a);
                }
                return (t =
                  (n = this.$1.IdentityStore.get(e)) == null
                    ? void 0
                    : n.identityKey) != null
                  ? t
                  : void 0;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.loadIdentityKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.identity.acquire();
                try {
                  return yield this.$8(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$9 = function (t, n) {
            (this.$1.IdentityStore.set(t, { identityKey: n }),
              this.$1.Dirty.identity.add(t));
          }),
          (a.putIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1.Mutex.identity.acquire();
                try {
                  this.$9(e, t);
                } finally {
                  n.release();
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$10 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebProtocolStoreCommonApi").stringifyIdentityKey(
                    t,
                  ),
                  r = yield this.loadIdentityKey(e);
                if (!(r != null && r === n)) {
                  if (r != null) {
                    var a = o("WAWebSignalCommonUtils")
                        .createSignalAddress(
                          o("WAWebUserUtils").getMeLidUserOrThrow(),
                        )
                        .toString(),
                      i = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                      l =
                        i != null
                          ? o("WAWebSignalCommonUtils")
                              .createSignalAddress(i)
                              .toString()
                          : null;
                    if (e === a || e === l) {
                      o("WAWebBackendApi").frontendFireAndForget(
                        "handleSelfPrimaryIdentityChange",
                        {},
                      );
                      return;
                    }
                    e != null &&
                      (yield o(
                        "WAWebIdentityChangeApiWorkerCompatible",
                      ).handleNewIdentity(
                        o("WAWebWidFromSignalAddress").widFromSignalAddress(e),
                        !1,
                      ));
                  }
                  yield this.putIdentity(e, n);
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.saveIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                if (e == null)
                  throw r("err")(
                    "Tried to put identity key for undefined/null key",
                  );
                yield this.$10(e, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.compareAndSetAccountEncryptionState = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.$1.Mutex.identity.acquire();
                try {
                  var a;
                  yield this.$8(e);
                  var i = this.$1.IdentityStore.get(e);
                  return i == null ||
                    i.deleted !== void 0 ||
                    i.identityKey !== t
                    ? { applied: !1, changed: !1 }
                    : i.accountEncryptionState === r
                      ? { applied: !0, changed: !1 }
                      : ((a = i.accountEncryptionState) != null ? a : null) !==
                          (n != null ? n : null)
                        ? { applied: !1, changed: !1 }
                        : (this.$1.IdentityStore.set(
                            e,
                            babelHelpers.extends({}, i, {
                              accountEncryptionState: r,
                            }),
                          ),
                          this.$1.Dirty.identity.add(e),
                          { applied: !0, changed: !0 });
                } finally {
                  o.release();
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getIdentityWithRowId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e == null)
                  throw r("err")(
                    "Tried to get identity key for undefined/null key",
                  );
                yield this.loadIdentityKey(e);
                var t = this.$1.IdentityStore.get(e);
                if (!(t == null || t.deleted !== void 0)) return t;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkGetIdentityWithRowId = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (e == null)
                  throw r("err")(
                    "Tried to get identity key for undefined/null key",
                  );
                return e.length === 0
                  ? []
                  : (yield this.bulkLoadIdentityKey(e),
                    e.map(function (e) {
                      var n = t.$1.IdentityStore.get(e);
                      if (!(n == null || n.deleted !== void 0)) return n;
                    }));
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getAllIdentityRows = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              return (
                yield this.flushBufferToDiskIfNotMemOnlyMode(),
                o("WAWebSignalStoreApi").waSignalStore.getAllIdentityRows()
              );
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (e == null)
                  throw r("err")(
                    "Tried to get identity key for undefined/null key",
                  );
                if (e.length === 0) return [];
                var n = new Array(e.length),
                  a = [];
                if (
                  (e.forEach(function (e, r) {
                    if (t.$1.IdentityStore.has(e)) {
                      var o;
                      n[r] =
                        (o = t.$1.IdentityStore.get(e)) == null
                          ? void 0
                          : o.identityKey;
                    } else a.push({ id: e, pos: r });
                  }),
                  a.length > 0)
                ) {
                  var i = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.bulkGetIdentityKeyWithRowId(
                    a.map(function (e) {
                      return e.id;
                    }),
                  );
                  i.forEach(function (e, r) {
                    var o = a[r];
                    (t.$1.IdentityStore.set(o.id, e),
                      (n[o.pos] = e == null ? void 0 : e.identityKey));
                  });
                }
                return n;
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.bulkLoadIdentityKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.identity.acquire();
                try {
                  return yield this.$11(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$12 = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var a = this;
                if (t == null)
                  throw r("err")(
                    "Tried to bulk put identity key with undefined/null",
                  );
                (o("WALogger")
                  .LOG(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]bulkCreateIdentity: store ",
                        " value(s): start",
                      ])),
                    t.length,
                  )
                  .tags("unified-store"),
                  yield o("WAWebSignalStorageUtils")
                    .getStorage()
                    .lock(
                      ["identity-store"],
                      n("asyncToGeneratorRuntime").asyncToGenerator(
                        function* () {
                          var e = t.map(function (e) {
                              return e.identifier;
                            }),
                            n = yield a.$11(e),
                            r = t.filter(function (e, t) {
                              return !n[t];
                            });
                          (r.length > 0 &&
                            (yield o(
                              "WAWebSignalStoreApi",
                            ).waSignalStore.bulkPutIdentity(r),
                            r.forEach(function (e) {
                              var t = e.identifier,
                                n = e.identityKey;
                              a.$1.IdentityStore.set(t, { identityKey: n });
                            })),
                            o("WALogger")
                              .LOG(
                                s ||
                                  (s = babelHelpers.taggedTemplateLiteralLoose([
                                    "[Signal]bulkCreateIdentity: store ",
                                    " value(s) (new: ",
                                    "): end",
                                  ])),
                                t.length,
                                r.length,
                              )
                              .tags("unified-store"));
                        },
                      ),
                    ));
              },
            );
            function a(e) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.bulkCreateIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.identity.acquire();
                try {
                  yield this.$12(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$13 = function (t) {
            (this.$1.IdentityStore.set(t, { deleted: !0 }),
              this.$1.Dirty.identity.add(t));
          }),
          (a.removeIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e == null)
                  return (C || (C = n("Promise"))).reject(
                    r("err")(
                      "Tried to remove identity key for undefined/null key",
                    ),
                  );
                var t = yield this.$1.Mutex.identity.acquire();
                try {
                  yield this.$13(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$14 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e != null) {
                  if (!this.$1.PrekeyStore.has(e)) {
                    var t,
                      n =
                        (t = yield o(
                          "WAWebSignalStoreApi",
                        ).waSignalStore.getPreKeyById(e)) == null
                          ? void 0
                          : t.keyPair;
                    this.$1.PrekeyStore.set(e, { keyPair: n });
                  }
                  var r = this.$1.PrekeyStore.get(e);
                  return (r == null ? void 0 : r.keyPair) || void 0;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.loadPreKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.preKey.acquire();
                try {
                  return yield this.$14(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$15 = function (t) {
            return t == null
              ? (C || (C = n("Promise"))).reject(
                  r("err")("Tried to remove pre key without keyId"),
                )
              : (this.$1.PrekeyStore.set(t, { deleted: !0 }),
                this.$1.Dirty.preKey.add(t),
                (C || (C = n("Promise"))).resolve());
          }),
          (a.removePreKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.preKey.acquire();
                try {
                  yield this.$15(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.loadSignedPreKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e != null) {
                  if (!this.$1.SignedPreKeyStore.has(e)) {
                    var t = yield o(
                        "WAWebSignalStoreApi",
                      ).waSignalStore.getSignedPreKeyById(e),
                      n = t
                        ? {
                            pubKey: t.keyPair.pubKey,
                            privKey: t.keyPair.privKey,
                            signature: t.signature,
                          }
                        : null;
                    this.$1.SignedPreKeyStore.set(e, n);
                  }
                  return this.$1.SignedPreKeyStore.get(e) || void 0;
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$16 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e != null) {
                  if (!this.$1.SessionStore.has(e)) {
                    var n = yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getSession(e);
                    this.$1.SessionStore.set(
                      e,
                      n != null ? { session: n } : void 0,
                    );
                  }
                  var r =
                    (t = this.$1.SessionStore.get(e)) == null
                      ? void 0
                      : t.session;
                  if (r != null) {
                    if (r instanceof ArrayBuffer && r.byteLength === 0) {
                      o("WALogger")
                        .LOG(
                          u ||
                            (u = babelHelpers.taggedTemplateLiteralLoose([
                              "[signal] loadSession: empty/corrupted session",
                            ])),
                        )
                        .sendLogs("signal-corrupted-empty-session");
                      return;
                    }
                    return (
                      (yield o("WAWebSignalConvertApi").maybeConvertSession(
                        r,
                      )) || void 0
                    );
                  }
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.loadSession = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.session.acquire();
                try {
                  return yield this.$16(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$17 = function (t, n) {
            if (t == null)
              throw r("err")("Tried to put session without identifier");
            (this.$1.SessionStore.set(t, { session: n }),
              this.$1.Dirty.session.add(t));
          }),
          (a.storeSession = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1.Mutex.session.acquire();
                try {
                  this.$17(e, t);
                } finally {
                  n.release();
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$18 = function (t) {
            if (t == null)
              throw r("err")("Tried to remove session without identifier");
            (this.$1.SessionStore.set(t, { deleted: !0 }),
              this.$1.Dirty.session.add(t));
          }),
          (a.removeSession = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.session.acquire();
                try {
                  this.$18(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$19 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this,
                  n = [];
                for (var r of e) this.$1.SessionStore.has(r) || n.push(r);
                if (n.length > 0) {
                  var a = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.bulkGetSession(n);
                  a.forEach(function (e, r) {
                    var o = n[r];
                    t.$1.SessionStore.set(
                      o,
                      e != null ? { session: e } : void 0,
                    );
                  });
                }
                return e.map(function (e) {
                  var n = t.$1.SessionStore.get(e);
                  return n == null || n.deleted === !0
                    ? !1
                    : n.session == null ||
                        (n.session instanceof ArrayBuffer &&
                          n.session.byteLength === 0)
                      ? (o("WALogger")
                          .LOG(
                            c ||
                              (c = babelHelpers.taggedTemplateLiteralLoose([
                                "[signal] containSessions: empty/corrupted session",
                              ])),
                          )
                          .sendLogs("signal-corrupted-empty-session"),
                        !1)
                      : !0;
                });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.containSessions = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.session.acquire();
                try {
                  return yield this.$19(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$20 = function (t, o) {
            return t == null
              ? (C || (C = n("Promise"))).reject(
                  r("err")("Tried to put session without identifier"),
                )
              : (this.$1.SenderKeyStore.set(t, o),
                this.$1.Dirty.senderKey.add(t),
                (C || (C = n("Promise"))).resolve());
          }),
          (a.storeSenderKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1.Mutex.senderKey.acquire();
                try {
                  yield this.$20(e, t);
                } finally {
                  n.release();
                }
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$21 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e != null) {
                  if (!this.$1.SenderKeyStore.has(e)) {
                    var t = yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getSenderKey(e);
                    this.$1.SenderKeyStore.set(e, t);
                  }
                  return (
                    o("WAWebSignalConvertApi").maybeConvertSenderKey(
                      this.$1.SenderKeyStore.get(e),
                    ) || void 0
                  );
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.loadSenderKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.senderKey.acquire();
                try {
                  return yield this.$21(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.removeOwnSenderKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                ((this.$5 = !0), yield this.$22());
                var t = yield this.$1.Mutex.senderKey.acquire();
                try {
                  (this.$3++,
                    this.$4.set(e, this.$3),
                    this.$1.SenderKeyStore.set(e, null),
                    this.$1.Dirty.senderKey.delete(e),
                    yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.removeSenderKey(e));
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$23 = function (t) {
            return (this.$7.set(t, this.$3), t);
          }),
          (a.commitSnapshot = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                if (!this.$24()) {
                  var n = this.$25(e, e.senderKeyUpdate);
                  this.$6.add(n);
                  try {
                    yield n;
                  } finally {
                    this.$6.delete(n);
                  }
                  return;
                }
                var r = yield this.$1.Mutex.senderKey.acquire();
                try {
                  var o,
                    a = (o = this.$7.get(e)) != null ? o : 0;
                  yield this.$25(
                    e,
                    e.senderKeyUpdate.filter(function (e) {
                      var n,
                        r = e.senderKeyName;
                      return ((n = t.$4.get(r)) != null ? n : 0) <= a;
                    }),
                  );
                } finally {
                  r.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$24 = function () {
            return (
              !this.$5 &&
                (o("WAWebABProps").getABPropConfigValue(
                  "web_sender_key_rotation_fix_enabled",
                ) ||
                  o("WAWebABProps").getABPropConfigValue(
                    "web_status_sender_key_rotation_enabled",
                  )) &&
                (this.$5 = !0),
              this.$5
            );
          }),
          (a.$22 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              yield (C || (C = n("Promise"))).allSettled(Array.from(this.$6));
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$25 = function (t, r) {
            return o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(
                [
                  "session-store",
                  "identity-store",
                  "prekey-store",
                  "senderkey-store",
                ],
                n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                  yield (C || (C = n("Promise"))).all([
                    o("WAWebSignalStoreApi").waSignalStore.bulkPutSession(
                      t.sessionUpdate,
                    ),
                    o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.bulkPutIdentityKeyWithRowId(
                      t.identityUpdate,
                    ),
                    o("WAWebSignalStoreApi").waSignalStore.bulkPutSenderKey(r),
                    o("WAWebSignalStoreApi").waSignalStore.bulkRemovePreKey(
                      t.preKeyRemove,
                    ),
                    o("WAWebSignalStoreApi").waSignalStore.bulkRemoveSession(
                      t.sessionRemove,
                    ),
                    o("WAWebSignalStoreApi").waSignalStore.bulkRemoveIdentity(
                      t.identityRemove,
                    ),
                  ]);
                }),
              );
          }),
          (a.switchToMemMode = function () {
            this.$2 = b.Memory;
          }),
          (a.switchToPersistMode = function () {
            this.$2 = b.Persist;
          }),
          (a.generateSnapshot = function () {
            if (this.$2 === b.Memory)
              return this.$23(this.$1.generateCacheUpdate());
          }),
          (a.deleteAllCache = function () {
            (o("WALogger")
              .LOG(
                d ||
                  (d = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]deleteAllCache",
                  ])),
              )
              .tags("unified-store"),
              this.$1.clear(),
              (this.$5 = !1),
              this.$4.clear());
          }),
          (a.hasPendingPersistWrites = function () {
            return this.$2 === b.Persist && this.$1.hasDirty();
          }),
          (a.flushBufferToDiskIfNotMemOnlyMode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$2 === b.Memory)
                return (
                  o("WALogger")
                    .LOG(
                      m ||
                        (m = babelHelpers.taggedTemplateLiteralLoose([
                          "[Signal]flushBufferToDiskIfNotMemOnlyMode: skip mem mode",
                        ])),
                    )
                    .tags("unified-store"),
                  (C || (C = n("Promise"))).resolve()
                );
              o("WALogger")
                .LOG(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "[Signal]flushBufferToDiskIfNotMemOnlyMode: start",
                    ])),
                )
                .tags("unified-store");
              var e = [
                yield this.$1.Mutex.identity.acquire(),
                yield this.$1.Mutex.session.acquire(),
                yield this.$1.Mutex.senderKey.acquire(),
                yield this.$1.Mutex.preKey.acquire(),
              ];
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Signal]flushBufferToDiskIfNotMemOnlyMode: lock complete",
                    ])),
                )
                .tags("unified-store");
              var t = yield this.$1.generateCacheUpdateThrottled();
              try {
                (yield o("WAWebSignalStorageUtils")
                  .getStorage()
                  .lock(
                    [
                      "session-store",
                      "identity-store",
                      "prekey-store",
                      "senderkey-store",
                    ],
                    n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
                      yield (C || (C = n("Promise"))).all([
                        o("WAWebSignalStoreApi").waSignalStore.bulkPutSession(
                          t.sessionUpdate,
                        ),
                        o(
                          "WAWebSignalStoreApi",
                        ).waSignalStore.bulkPutIdentityKeyWithRowId(
                          t.identityUpdate,
                        ),
                        o("WAWebSignalStoreApi").waSignalStore.bulkPutSenderKey(
                          t.senderKeyUpdate,
                        ),
                        o("WAWebSignalStoreApi").waSignalStore.bulkRemovePreKey(
                          t.preKeyRemove,
                        ),
                        o(
                          "WAWebSignalStoreApi",
                        ).waSignalStore.bulkRemoveSession(t.sessionRemove),
                        o(
                          "WAWebSignalStoreApi",
                        ).waSignalStore.bulkRemoveIdentity(t.identityRemove),
                      ]);
                    }),
                  ),
                  this.$1.clearDirty());
              } finally {
                e.forEach(function (e) {
                  return e.release();
                });
              }
              o("WALogger")
                .LOG(
                  f ||
                    (f = babelHelpers.taggedTemplateLiteralLoose([
                      "[Signal]flushBufferToDiskIfNotMemOnlyMode: done",
                    ])),
                )
                .tags("unified-store");
            });
            function t() {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$26 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var a = this;
                (o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]updateIdentityRangeAfterEncryption: start",
                      ])),
                  )
                  .tags("unified-store"),
                  yield this.$11(n));
                var i = [];
                (n.forEach(function (n) {
                  var o = a.$1.IdentityStore.get(n);
                  if (
                    o &&
                    !o.deleted &&
                    (r == null || o.identityKey === r) &&
                    (o[e] == null || o[e] > t)
                  ) {
                    var l = babelHelpers.extends({}, o);
                    ((l[e] = t),
                      a.$1.IdentityStore.set(n, l),
                      a.$1.Dirty.identity.add(n),
                      i.push(n));
                  }
                }),
                  o("WALogger")
                    .LOG(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "[Signal]updateIdentityRangeAfterEncryption: ",
                          " updated",
                        ])),
                      i.length,
                    )
                    .tags("unified-store"));
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.updateIdentityRangeAfterEncryption = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n, r) {
                var o = yield this.$1.Mutex.identity.acquire();
                try {
                  yield this.$26(e, t, n, r);
                } finally {
                  o.release();
                }
              },
            );
            function t(t, n, r, o) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$27 = function (t) {
            if (t == null) return (C || (C = n("Promise"))).resolve();
            var e = this.$1.SessionStore.get(t);
            return (
              e &&
                o("WAWebSignalConvertApi").shouldConvertSession(e.session) &&
                (o("WALogger")
                  .LOG(
                    y ||
                      (y = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]maybeCleanUpUnconvertedSession: delete unconverted",
                      ])),
                  )
                  .tags("unified-store"),
                this.$18(t)),
              (C || (C = n("Promise"))).resolve()
            );
          }),
          (a.maybeCleanUpUnconvertedSession = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.session.acquire();
                try {
                  return yield this.$27(e);
                } finally {
                  t.release();
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })(),
      S = new v();
    l.default = S;
  },
  98,
);
