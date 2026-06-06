__d(
  "WAWebSignalProtocolStoreUnifiedApi",
  [
    "$InternalEnum",
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
      h = n("$InternalEnum").Mirrored(["Persist", "Memory"]),
      y = (function () {
        function t() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.$1 = new (o(
              "WAWebSignalProtocolStoreCacheApi",
            ).SignalStoreCache)()),
            (this.$2 = h.Persist));
        }
        var n = t.prototype;
        return (
          (n.cache_TESTONLY = function () {
            return this.$1;
          }),
          (n.getIdentityKeyPair = async function () {
            var e;
            return (
              this.$1.RegistrationInfo ||
                (this.$1.RegistrationInfo = await o(
                  "WAWebSignalStoreApi",
                ).waSignalStore.getRegistrationInfo()),
              (e = this.$1.RegistrationInfo) != null && e.identityKeyPair
                ? o("WAWebCryptoCurve25519").toSignalCurveKeyPair(
                    this.$1.RegistrationInfo.identityKeyPair,
                  )
                : void 0
            );
          }),
          (n.getLocalRegistrationId = async function () {
            var e;
            return (
              this.$1.RegistrationInfo ||
                (this.$1.RegistrationInfo = await o(
                  "WAWebSignalStoreApi",
                ).waSignalStore.getRegistrationInfo()),
              ((e = this.$1.RegistrationInfo) == null
                ? void 0
                : e.registrationId) || void 0
            );
          }),
          (n.isTrustedIdentity = function (t, n) {
            return Promise.resolve(!0);
          }),
          (n.$3 = async function (t) {
            var e;
            if (t == null)
              throw r("err")(
                "Tried to get identity key for undefined/null key",
              );
            if (!this.$1.IdentityStore.has(t)) {
              var n = await o(
                "WAWebSignalStoreApi",
              ).waSignalStore.getIdentityKeyWithRowId(t);
              this.$1.IdentityStore.set(t, n);
            }
            return (
              ((e = this.$1.IdentityStore.get(t)) == null
                ? void 0
                : e.identityKey) || void 0
            );
          }),
          (n.loadIdentityKey = async function (t) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              return await this.$3(t);
            } finally {
              e.release();
            }
          }),
          (n.$4 = function (t, n) {
            (this.$1.IdentityStore.set(t, { identityKey: n }),
              this.$1.Dirty.identity.add(t));
          }),
          (n.putIdentity = async function (t, n) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              this.$4(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$5 = async function (t, n) {
            var e = o("WAWebProtocolStoreCommonApi").stringifyIdentityKey(n),
              r = await this.loadIdentityKey(t);
            if (!(r != null && r === e)) {
              if (r != null) {
                if (
                  t ===
                  o("WAWebSignalCommonUtils")
                    .createSignalAddress(
                      o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                    )
                    .toString()
                ) {
                  o("WAWebBackendApi").frontendFireAndForget(
                    "handleSelfPrimaryIdentityChange",
                    {},
                  );
                  return;
                }
                t != null &&
                  (await o(
                    "WAWebIdentityChangeApiWorkerCompatible",
                  ).handleNewIdentity(
                    o("WAWebWidFromSignalAddress").widFromSignalAddress(t),
                    !1,
                  ));
              }
              await this.putIdentity(t, e);
            }
          }),
          (n.saveIdentity = async function (t, n) {
            if (t == null)
              throw r("err")(
                "Tried to put identity key for undefined/null key",
              );
            await this.$5(t, n);
          }),
          (n.getIdentityWithRowId = async function (t) {
            if (t == null)
              throw r("err")(
                "Tried to get identity key for undefined/null key",
              );
            await this.loadIdentityKey(t);
            var e = this.$1.IdentityStore.get(t);
            if (!(e == null || e.deleted !== void 0)) return e;
          }),
          (n.bulkGetIdentityWithRowId = async function (t) {
            var e = this;
            if (t == null)
              throw r("err")(
                "Tried to get identity key for undefined/null key",
              );
            return t.length === 0
              ? []
              : (await this.bulkLoadIdentityKey(t),
                t.map(function (t) {
                  var n = e.$1.IdentityStore.get(t);
                  if (!(n == null || n.deleted !== void 0)) return n;
                }));
          }),
          (n.$6 = async function (t) {
            var e = this;
            if (t == null)
              throw r("err")(
                "Tried to get identity key for undefined/null key",
              );
            if (t.length === 0) return [];
            var n = new Array(t.length),
              a = [];
            if (
              (t.forEach(function (t, r) {
                if (e.$1.IdentityStore.has(t)) {
                  var o;
                  n[r] =
                    (o = e.$1.IdentityStore.get(t)) == null
                      ? void 0
                      : o.identityKey;
                } else a.push({ id: t, pos: r });
              }),
              a.length > 0)
            ) {
              var i = await o(
                "WAWebSignalStoreApi",
              ).waSignalStore.bulkGetIdentityKeyWithRowId(
                a.map(function (e) {
                  return e.id;
                }),
              );
              i.forEach(function (t, r) {
                var o = a[r];
                (e.$1.IdentityStore.set(o.id, t),
                  (n[o.pos] = t == null ? void 0 : t.identityKey));
              });
            }
            return n;
          }),
          (n.bulkLoadIdentityKey = async function (t) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              return await this.$6(t);
            } finally {
              e.release();
            }
          }),
          (n.$7 = async function (n) {
            var t = this;
            if (n == null)
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
                n.length,
              )
              .tags("unified-store"),
              await o("WAWebSignalStorageUtils")
                .getStorage()
                .lock(["identity-store"], async function () {
                  var e = n.map(function (e) {
                      return e.identifier;
                    }),
                    r = await t.$6(e),
                    a = n.filter(function (e, t) {
                      return !r[t];
                    });
                  (a.length > 0 &&
                    (await o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.bulkPutIdentity(a),
                    a.forEach(function (e) {
                      var n = e.identifier,
                        r = e.identityKey;
                      t.$1.IdentityStore.set(n, { identityKey: r });
                    })),
                    o("WALogger")
                      .LOG(
                        s ||
                          (s = babelHelpers.taggedTemplateLiteralLoose([
                            "[Signal]bulkCreateIdentity: store ",
                            " value(s) (new: ",
                            "): end",
                          ])),
                        n.length,
                        a.length,
                      )
                      .tags("unified-store"));
                }));
          }),
          (n.bulkCreateIdentity = async function (t) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              await this.$7(t);
            } finally {
              e.release();
            }
          }),
          (n.$8 = function (t) {
            (this.$1.IdentityStore.set(t, { deleted: !0 }),
              this.$1.Dirty.identity.add(t));
          }),
          (n.removeIdentity = async function (t) {
            if (t == null)
              return Promise.reject(
                r("err")("Tried to remove identity key for undefined/null key"),
              );
            var e = await this.$1.Mutex.identity.acquire();
            try {
              await this.$8(t);
            } finally {
              e.release();
            }
          }),
          (n.$9 = async function (t) {
            if (t != null) {
              if (!this.$1.PrekeyStore.has(t)) {
                var e,
                  n =
                    (e = await o(
                      "WAWebSignalStoreApi",
                    ).waSignalStore.getPreKeyById(t)) == null
                      ? void 0
                      : e.keyPair;
                this.$1.PrekeyStore.set(t, { keyPair: n });
              }
              var r = this.$1.PrekeyStore.get(t);
              return (r == null ? void 0 : r.keyPair) || void 0;
            }
          }),
          (n.loadPreKey = async function (t) {
            var e = await this.$1.Mutex.preKey.acquire();
            try {
              return await this.$9(t);
            } finally {
              e.release();
            }
          }),
          (n.$10 = function (t) {
            return t == null
              ? Promise.reject(
                  r("err")("Tried to remove pre key without keyId"),
                )
              : (this.$1.PrekeyStore.set(t, { deleted: !0 }),
                this.$1.Dirty.preKey.add(t),
                Promise.resolve());
          }),
          (n.removePreKey = async function (t) {
            var e = await this.$1.Mutex.preKey.acquire();
            try {
              await this.$10(t);
            } finally {
              e.release();
            }
          }),
          (n.loadSignedPreKey = async function (t) {
            if (t != null) {
              if (!this.$1.SignedPreKeyStore.has(t)) {
                var e = await o(
                    "WAWebSignalStoreApi",
                  ).waSignalStore.getSignedPreKeyById(t),
                  n = e
                    ? {
                        pubKey: e.keyPair.pubKey,
                        privKey: e.keyPair.privKey,
                        signature: e.signature,
                      }
                    : null;
                this.$1.SignedPreKeyStore.set(t, n);
              }
              return this.$1.SignedPreKeyStore.get(t) || void 0;
            }
          }),
          (n.$11 = async function (t) {
            var e;
            if (t != null) {
              if (!this.$1.SessionStore.has(t)) {
                var n = await o("WAWebSignalStoreApi").waSignalStore.getSession(
                  t,
                );
                this.$1.SessionStore.set(t, n ? { session: n } : void 0);
              }
              return (
                (await o("WAWebSignalConvertApi").maybeConvertSession(
                  (e = this.$1.SessionStore.get(t)) == null
                    ? void 0
                    : e.session,
                )) || void 0
              );
            }
          }),
          (n.loadSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$11(t);
            } finally {
              e.release();
            }
          }),
          (n.$12 = function (t, n) {
            if (t == null)
              throw r("err")("Tried to put session without identifier");
            (this.$1.SessionStore.set(t, { session: n }),
              this.$1.Dirty.session.add(t));
          }),
          (n.storeSession = async function (t, n) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              this.$12(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$13 = function (t) {
            if (t == null)
              throw r("err")("Tried to remove session without identifier");
            (this.$1.SessionStore.set(t, { deleted: !0 }),
              this.$1.Dirty.session.add(t));
          }),
          (n.removeSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              this.$13(t);
            } finally {
              e.release();
            }
          }),
          (n.$14 = async function (t) {
            var e = this,
              n = [];
            for (var r of t) this.$1.SessionStore.has(r) || n.push(r);
            if (n.length > 0) {
              var a = await o(
                "WAWebSignalStoreApi",
              ).waSignalStore.bulkGetSession(n);
              a.forEach(function (t, r) {
                var o = n[r];
                e.$1.SessionStore.set(o, t ? { session: t } : void 0);
              });
            }
            return t.map(function (t) {
              var n = e.$1.SessionStore.get(t);
              return n != null && !(n != null && n.deleted);
            });
          }),
          (n.containSessions = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$14(t);
            } finally {
              e.release();
            }
          }),
          (n.$15 = function (t, n) {
            if (t == null)
              return Promise.reject(
                r("err")("Tried to put session without identifier"),
              );
            if (!r("gkx")("26258"))
              if (Array.isArray(n == null ? void 0 : n.sessions))
                var e = n.sessions[n.sessions.length - 1];
              else
                var o,
                  a =
                    n == null || (o = n.senderKeyStates) == null
                      ? void 0
                      : o[0];
            return (
              this.$1.SenderKeyStore.set(t, n),
              this.$1.Dirty.senderKey.add(t),
              Promise.resolve()
            );
          }),
          (n.storeSenderKey = async function (t, n) {
            var e = await this.$1.Mutex.senderKey.acquire();
            try {
              await this.$15(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$16 = async function (t) {
            if (t != null) {
              if (!this.$1.SenderKeyStore.has(t)) {
                var e = await o(
                  "WAWebSignalStoreApi",
                ).waSignalStore.getSenderKey(t);
                this.$1.SenderKeyStore.set(t, e);
              }
              return (
                o("WAWebSignalConvertApi").maybeConvertSenderKey(
                  this.$1.SenderKeyStore.get(t),
                ) || void 0
              );
            }
          }),
          (n.loadSenderKey = async function (t) {
            var e = await this.$1.Mutex.senderKey.acquire();
            try {
              return await this.$16(t);
            } finally {
              e.release();
            }
          }),
          (n.switchToMemMode = function () {
            this.$2 = h.Memory;
          }),
          (n.switchToPersistMode = function () {
            this.$2 = h.Persist;
          }),
          (n.generateSnapshot = function () {
            if (this.$2 === h.Memory) return this.$1.generateCacheUpdate();
          }),
          (n.generateSnapshotThrottled = async function () {
            if (this.$2 === h.Memory) {
              var e = [
                await this.$1.Mutex.identity.acquire(),
                await this.$1.Mutex.session.acquire(),
                await this.$1.Mutex.senderKey.acquire(),
                await this.$1.Mutex.preKey.acquire(),
              ];
              try {
                return await this.$1.generateCacheUpdateThrottled();
              } finally {
                e.forEach(function (e) {
                  return e.release();
                });
              }
            }
          }),
          (n.deleteAllCache = function () {
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
          (n.flushBufferToDiskIfNotMemOnlyMode = async function () {
            if (this.$2 === h.Memory)
              return (
                o("WALogger")
                  .LOG(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]flushBufferToDiskIfNotMemOnlyMode: skip mem mode",
                      ])),
                  )
                  .tags("unified-store"),
                Promise.resolve()
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
              await this.$1.Mutex.identity.acquire(),
              await this.$1.Mutex.session.acquire(),
              await this.$1.Mutex.senderKey.acquire(),
              await this.$1.Mutex.preKey.acquire(),
            ];
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]flushBufferToDiskIfNotMemOnlyMode: lock complete",
                  ])),
              )
              .tags("unified-store");
            var t = await this.$1.generateCacheUpdateThrottled();
            try {
              (await o("WAWebSignalStorageUtils")
                .getStorage()
                .lock(
                  [
                    "session-store",
                    "identity-store",
                    "prekey-store",
                    "senderkey-store",
                  ],
                  async function () {
                    var e;
                    await Promise.all([
                      (e = o(
                        "WAWebSignalStoreApi",
                      )).waSignalStore.bulkPutSession(t.sessionUpdate),
                      e.waSignalStore.bulkPutIdentityKeyWithRowId(
                        t.identityUpdate,
                      ),
                      e.waSignalStore.bulkPutSenderKey(t.senderKeyUpdate),
                      e.waSignalStore.bulkRemovePreKey(t.preKeyRemove),
                      e.waSignalStore.bulkRemoveSession(t.sessionRemove),
                      e.waSignalStore.bulkRemoveIdentity(t.identityRemove),
                    ]);
                  },
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
          }),
          (n.$17 = async function (t, n, r) {
            var e = this;
            (o("WALogger")
              .LOG(
                _ ||
                  (_ = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]updateIdentityRangeAfterEncryption: start",
                  ])),
              )
              .tags("unified-store"),
              await this.$6(r));
            var a = [];
            (r.forEach(function (r) {
              var o = e.$1.IdentityStore.get(r);
              if (o && !o.deleted && (o[t] == null || o[t] > n)) {
                var i = babelHelpers.extends({}, o);
                ((i[t] = n),
                  e.$1.IdentityStore.set(r, i),
                  e.$1.Dirty.identity.add(r),
                  a.push(r));
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
          }),
          (n.updateIdentityRangeAfterEncryption = async function (t, n, r) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              await this.$17(t, n, r);
            } finally {
              e.release();
            }
          }),
          (n.$18 = function (t) {
            if (t == null) return Promise.resolve();
            var e = this.$1.SessionStore.get(t);
            return (
              e &&
                o("WAWebSignalConvertApi").shouldConvertSession(e.session) &&
                (o("WALogger")
                  .LOG(
                    g ||
                      (g = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]maybeCleanUpUnconvertedSession: delete unconverted",
                      ])),
                  )
                  .tags("unified-store"),
                this.$13(t)),
              Promise.resolve()
            );
          }),
          (n.maybeCleanUpUnconvertedSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$18(t);
            } finally {
              e.release();
            }
          }),
          t
        );
      })(),
      C = new y();
    l.default = C;
  },
  98,
);
