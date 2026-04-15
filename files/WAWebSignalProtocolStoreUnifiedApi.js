__d(
  "WAWebSignalProtocolStoreUnifiedApi",
  [
    "$InternalEnum",
    "Promise",
    "WALogger",
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
    "WAWebWidFromSignalAddress",
    "asyncToGeneratorRuntime",
    "err",
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
      _,
      f,
      g,
      h,
      y = n("$InternalEnum").Mirrored(["Persist", "Memory"]),
      C = (function () {
        function t() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.$1 = new (o(
              "WAWebSignalProtocolStoreCacheApi",
            ).SignalStoreCache)()),
            (this.$2 = y.Persist));
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
            return (h || (h = n("Promise"))).resolve(!0);
          }),
          (a.$3 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e == null)
                  throw r("err")(
                    "Tried to get identity key for undefined/null key",
                  );
                if (!this.$1.IdentityStore.has(e)) {
                  var n = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.getIdentityKeyWithRowId(e);
                  this.$1.IdentityStore.set(e, n);
                }
                return (
                  ((t = this.$1.IdentityStore.get(e)) == null
                    ? void 0
                    : t.identityKey) || void 0
                );
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
                  return yield this.$3(e);
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
          (a.$4 = function (t, n) {
            (this.$1.IdentityStore.set(t, { identityKey: n }),
              this.$1.Dirty.identity.add(t));
          }),
          (a.putIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1.Mutex.identity.acquire();
                try {
                  this.$4(e, t);
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
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = o("WAWebProtocolStoreCommonApi").stringifyIdentityKey(
                    t,
                  ),
                  r = yield this.loadIdentityKey(e);
                if (!(r != null && r === n)) {
                  if (r != null) {
                    if (
                      e ===
                      o("WAWebSignalCommonUtils")
                        .createSignalAddress(
                          o(
                            "WAWebUserPrefsMeUser",
                          ).getMePnUserOrThrow_DO_NOT_USE(),
                        )
                        .toString()
                    ) {
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
                yield this.$5(e, t);
              },
            );
            function t(t, n) {
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
          (a.$6 = (function () {
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
                  return yield this.$6(e);
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
          (a.$7 = (function () {
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
                            n = yield a.$6(e),
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
                  yield this.$7(e);
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
          (a.$8 = function (t) {
            (this.$1.IdentityStore.set(t, { deleted: !0 }),
              this.$1.Dirty.identity.add(t));
          }),
          (a.removeIdentity = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e == null)
                  return (h || (h = n("Promise"))).reject(
                    r("err")(
                      "Tried to remove identity key for undefined/null key",
                    ),
                  );
                var t = yield this.$1.Mutex.identity.acquire();
                try {
                  yield this.$8(e);
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
          (a.$9 = (function () {
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
                  return yield this.$9(e);
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
          (a.$10 = function (t) {
            return t == null
              ? (h || (h = n("Promise"))).reject(
                  r("err")("Tried to remove pre key without keyId"),
                )
              : (this.$1.PrekeyStore.set(t, { deleted: !0 }),
                this.$1.Dirty.preKey.add(t),
                (h || (h = n("Promise"))).resolve());
          }),
          (a.removePreKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.preKey.acquire();
                try {
                  yield this.$10(e);
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
          (a.$11 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t;
                if (e != null) {
                  if (!this.$1.SessionStore.has(e)) {
                    var n = yield o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getSession(e);
                    this.$1.SessionStore.set(e, n ? { session: n } : void 0);
                  }
                  return (
                    (yield o("WAWebSignalConvertApi").maybeConvertSession(
                      (t = this.$1.SessionStore.get(e)) == null
                        ? void 0
                        : t.session,
                    )) || void 0
                  );
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
          (a.$12 = function (t, n) {
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
                  this.$12(e, t);
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
          (a.$13 = function (t) {
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
                  this.$13(e);
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
                var t = this,
                  n = [];
                for (var r of e) this.$1.SessionStore.has(r) || n.push(r);
                if (n.length > 0) {
                  var a = yield o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.bulkGetSession(n);
                  a.forEach(function (e, r) {
                    var o = n[r];
                    t.$1.SessionStore.set(o, e ? { session: e } : void 0);
                  });
                }
                return e.map(function (e) {
                  var n = t.$1.SessionStore.get(e);
                  return n != null && !(n != null && n.deleted);
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
          (a.$15 = function (t, o) {
            if (t == null)
              return (h || (h = n("Promise"))).reject(
                r("err")("Tried to put session without identifier"),
              );
            if (!r("gkx")("26258"))
              if (Array.isArray(o == null ? void 0 : o.sessions))
                var e = o.sessions[o.sessions.length - 1];
              else
                var a,
                  i =
                    o == null || (a = o.senderKeyStates) == null
                      ? void 0
                      : a[0];
            return (
              this.$1.SenderKeyStore.set(t, o),
              this.$1.Dirty.senderKey.add(t),
              (h || (h = n("Promise"))).resolve()
            );
          }),
          (a.storeSenderKey = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$1.Mutex.senderKey.acquire();
                try {
                  yield this.$15(e, t);
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
          (a.$16 = (function () {
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
          (a.switchToMemMode = function () {
            this.$2 = y.Memory;
          }),
          (a.switchToPersistMode = function () {
            this.$2 = y.Persist;
          }),
          (a.generateSnapshot = function () {
            if (this.$2 === y.Memory) return this.$1.generateCacheUpdate();
          }),
          (a.deleteAllCache = function () {
            (o("WALogger")
              .LOG(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]deleteAllCache",
                  ])),
              )
              .tags("unified-store"),
              this.$1.clear());
          }),
          (a.flushBufferToDiskIfNotMemOnlyMode = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (this.$2 === y.Memory)
                return (
                  o("WALogger")
                    .LOG(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "[Signal]flushBufferToDiskIfNotMemOnlyMode: skip for memory mode",
                        ])),
                    )
                    .tags("unified-store"),
                  (h || (h = n("Promise"))).resolve()
                );
              o("WALogger")
                .LOG(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
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
                      yield (h || (h = n("Promise"))).all([
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
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
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
          (a.$17 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = this;
                (o("WALogger")
                  .LOG(
                    _ ||
                      (_ = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]updateIdentityRangeAfterEncryption: start",
                      ])),
                  )
                  .tags("unified-store"),
                  yield this.$6(n));
                var a = [];
                (n.forEach(function (n) {
                  var o = r.$1.IdentityStore.get(n);
                  if (o && !o.deleted && (o[e] == null || o[e] > t)) {
                    var i = babelHelpers.extends({}, o);
                    ((i[e] = t),
                      r.$1.IdentityStore.set(n, i),
                      r.$1.Dirty.identity.add(n),
                      a.push(n));
                  }
                }),
                  o("WALogger")
                    .LOG(
                      f ||
                        (f = babelHelpers.taggedTemplateLiteralLoose([
                          "[Signal]updateIdentityRangeAfterEncryption: ",
                          " updated",
                        ])),
                      a.length,
                    )
                    .tags("unified-store"));
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.updateIdentityRangeAfterEncryption = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield this.$1.Mutex.identity.acquire();
                try {
                  yield this.$17(e, t, n);
                } finally {
                  r.release();
                }
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$18 = function (t) {
            if (t == null) return (h || (h = n("Promise"))).resolve();
            var e = this.$1.SessionStore.get(t);
            return (
              e &&
                o("WAWebSignalConvertApi").shouldConvertSession(e.session) &&
                (o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]maybeCleanUpUnconvertedSession: delete unconverted session",
                      ])),
                  )
                  .tags("unified-store"),
                this.$13(t)),
              (h || (h = n("Promise"))).resolve()
            );
          }),
          (a.maybeCleanUpUnconvertedSession = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = yield this.$1.Mutex.session.acquire();
                try {
                  return yield this.$18(e);
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
      b = new C();
    l.default = b;
  },
  98,
);
