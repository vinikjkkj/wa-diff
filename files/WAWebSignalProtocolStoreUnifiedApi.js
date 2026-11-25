__d(
  "WAWebSignalProtocolStoreUnifiedApi",
  [
    "$InternalEnum",
    "WALogger",
    "WAWebABProps",
    "WAWebBackendApi",
    "WAWebCryptoCurve25519",
    "WAWebIdentityChangeApiWorkerCompatible",
    "WAWebNoop",
    "WAWebProtocolStoreCommonApi",
    "WAWebSignalCommonUtils",
    "WAWebSignalConvertApi",
    "WAWebSignalProtocolStoreCacheApi",
    "WAWebSignalStorageUtils",
    "WAWebSignalStoreApi",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
    "WAWebWidFromSignalAddress",
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
      h = 1e3,
      y = n("$InternalEnum").Mirrored(["Persist", "Memory"]),
      C = (function () {
        function t() {
          ((this.Direction = { SENDING: 1, RECEIVING: 2 }),
            (this.$1 = new (o(
              "WAWebSignalProtocolStoreCacheApi",
            ).SignalStoreCache)()),
            (this.$2 = y.Persist),
            (this.$3 = 0),
            (this.$4 = new Map()),
            (this.$5 = !1),
            (this.$6 = new Set()),
            (this.$7 = new WeakMap()));
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
          (n.$8 = async function (t) {
            var e, n;
            if (t == null)
              throw r("err")(
                "Tried to get identity key for undefined/null key",
              );
            if (!this.$1.IdentityStore.has(t)) {
              var a = await o(
                "WAWebSignalStoreApi",
              ).waSignalStore.getIdentityKeyWithRowId(t);
              this.$1.IdentityStore.set(t, a);
            }
            return (e =
              (n = this.$1.IdentityStore.get(t)) == null
                ? void 0
                : n.identityKey) != null
              ? e
              : void 0;
          }),
          (n.loadIdentityKey = async function (t) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              return await this.$8(t);
            } finally {
              e.release();
            }
          }),
          (n.$9 = function (t, n) {
            (this.$1.IdentityStore.set(t, { identityKey: n }),
              this.$1.Dirty.identity.add(t));
          }),
          (n.putIdentity = async function (t, n) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              this.$9(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$10 = async function (t, n) {
            var e = o("WAWebProtocolStoreCommonApi").stringifyIdentityKey(n),
              r = await this.loadIdentityKey(t);
            if (!(r != null && r === e)) {
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
                if (t === a || t === l) {
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
            await this.$10(t, n);
          }),
          (n.compareAndSetAccountEncryptionState = async function (t, n, r, o) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              var a;
              await this.$8(t);
              var i = this.$1.IdentityStore.get(t);
              return i == null || i.deleted !== void 0 || i.identityKey !== n
                ? { applied: !1, changed: !1 }
                : i.accountEncryptionState === o
                  ? { applied: !0, changed: !1 }
                  : ((a = i.accountEncryptionState) != null ? a : null) !==
                      (r != null ? r : null)
                    ? { applied: !1, changed: !1 }
                    : (this.$1.IdentityStore.set(
                        t,
                        babelHelpers.extends({}, i, {
                          accountEncryptionState: o,
                        }),
                      ),
                      this.$1.Dirty.identity.add(t),
                      { applied: !0, changed: !0 });
            } finally {
              e.release();
            }
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
          (n.getAllIdentityRows = async function () {
            return (
              await this.flushBufferToDiskIfNotMemOnlyMode(),
              o("WAWebSignalStoreApi").waSignalStore.getAllIdentityRows()
            );
          }),
          (n.$11 = async function (t) {
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
              return await this.$11(t);
            } finally {
              e.release();
            }
          }),
          (n.$12 = async function (n) {
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
                    r = await t.$11(e),
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
              await this.$12(t);
            } finally {
              e.release();
            }
          }),
          (n.$13 = function (t) {
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
              await this.$13(t);
            } finally {
              e.release();
            }
          }),
          (n.$14 = async function (t) {
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
              return await this.$14(t);
            } finally {
              e.release();
            }
          }),
          (n.$15 = function (t) {
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
              await this.$15(t);
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
          (n.$16 = async function (t) {
            var e;
            if (t != null) {
              if (!this.$1.SessionStore.has(t)) {
                var n = await o("WAWebSignalStoreApi").waSignalStore.getSession(
                  t,
                );
                this.$1.SessionStore.set(
                  t,
                  n != null ? { session: n } : void 0,
                );
              }
              var r =
                (e = this.$1.SessionStore.get(t)) == null ? void 0 : e.session;
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
                  (await o("WAWebSignalConvertApi").maybeConvertSession(r)) ||
                  void 0
                );
              }
            }
          }),
          (n.loadSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$16(t);
            } finally {
              e.release();
            }
          }),
          (n.$17 = function (t, n) {
            if (t == null)
              throw r("err")("Tried to put session without identifier");
            (this.$1.SessionStore.set(t, { session: n }),
              this.$1.Dirty.session.add(t));
          }),
          (n.storeSession = async function (t, n) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              this.$17(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$18 = function (t) {
            if (t == null)
              throw r("err")("Tried to remove session without identifier");
            (this.$1.SessionStore.set(t, { deleted: !0 }),
              this.$1.Dirty.session.add(t));
          }),
          (n.removeSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              this.$18(t);
            } finally {
              e.release();
            }
          }),
          (n.$19 = async function (t) {
            var e = this,
              n = [];
            for (var r of t) this.$1.SessionStore.has(r) || n.push(r);
            if (n.length > 0) {
              var a = await o(
                "WAWebSignalStoreApi",
              ).waSignalStore.bulkGetSession(n);
              a.forEach(function (t, r) {
                var o = n[r];
                e.$1.SessionStore.set(o, t != null ? { session: t } : void 0);
              });
            }
            return t.map(function (t) {
              var n = e.$1.SessionStore.get(t);
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
          }),
          (n.containSessions = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$19(t);
            } finally {
              e.release();
            }
          }),
          (n.$20 = function (t, n) {
            return t == null
              ? Promise.reject(
                  r("err")("Tried to put session without identifier"),
                )
              : (this.$1.SenderKeyStore.set(t, n),
                this.$1.Dirty.senderKey.add(t),
                Promise.resolve());
          }),
          (n.storeSenderKey = async function (t, n) {
            var e = await this.$1.Mutex.senderKey.acquire();
            try {
              await this.$20(t, n);
            } finally {
              e.release();
            }
          }),
          (n.$21 = async function (t) {
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
              return await this.$21(t);
            } finally {
              e.release();
            }
          }),
          (n.removeOwnSenderKey = async function (t) {
            ((this.$5 = !0), await this.$22());
            var e = await this.$1.Mutex.senderKey.acquire();
            try {
              (this.$3++,
                this.$4.set(t, this.$3),
                this.$1.SenderKeyStore.set(t, null),
                this.$1.Dirty.senderKey.delete(t),
                await o("WAWebSignalStoreApi").waSignalStore.removeSenderKey(
                  t,
                ));
            } finally {
              e.release();
            }
          }),
          (n.$23 = function (t) {
            return (this.$7.set(t, this.$3), t);
          }),
          (n.commitSnapshot = async function (t, n) {
            var e = this;
            if ((n === void 0 && (n = r("WAWebNoop")), !this.$24())) {
              n();
              var o = this.$25(t, t.senderKeyUpdate);
              this.$6.add(o);
              try {
                await o;
              } finally {
                this.$6.delete(o);
              }
              return;
            }
            var a = await this.$1.Mutex.senderKey.acquire();
            try {
              var i;
              n();
              var l = (i = this.$7.get(t)) != null ? i : 0;
              await this.$25(
                t,
                t.senderKeyUpdate.filter(function (t) {
                  var n,
                    r = t.senderKeyName;
                  return ((n = e.$4.get(r)) != null ? n : 0) <= l;
                }),
              );
            } finally {
              a.release();
            }
          }),
          (n.$24 = function () {
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
          (n.$22 = async function () {
            await Promise.allSettled(Array.from(this.$6));
          }),
          (n.$25 = function (t, n) {
            return o("WAWebSignalStorageUtils")
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
                    (e = o("WAWebSignalStoreApi")).waSignalStore.bulkPutSession(
                      t.sessionUpdate,
                    ),
                    e.waSignalStore.bulkPutIdentityKeyWithRowId(
                      t.identityUpdate,
                    ),
                    e.waSignalStore.bulkPutSenderKey(n),
                    e.waSignalStore.bulkRemovePreKey(t.preKeyRemove),
                    e.waSignalStore.bulkRemoveSession(t.sessionRemove),
                    e.waSignalStore.bulkRemoveIdentity(t.identityRemove),
                  ]);
                },
              );
          }),
          (n.switchToMemMode = function () {
            this.$2 = y.Memory;
          }),
          (n.switchToPersistMode = function () {
            this.$2 = y.Persist;
          }),
          (n.generateSnapshot = function () {
            if (this.$2 === y.Memory)
              return this.$23(this.$1.generateCacheUpdate());
          }),
          (n.deleteAllCache = function () {
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
          (n.hasPendingPersistWrites = function () {
            return this.$2 === y.Persist && this.$1.hasDirty();
          }),
          (n.flushBufferToDiskIfNotMemOnlyMode = async function (t) {
            if ((t === void 0 && (t = r("WAWebNoop")), this.$2 === y.Memory))
              return Promise.resolve();
            var e = self.performance.now(),
              n = self.setTimeout(v, h),
              a = [
                await this.$1.Mutex.identity.acquire(),
                await this.$1.Mutex.session.acquire(),
                await this.$1.Mutex.senderKey.acquire(),
                await this.$1.Mutex.preKey.acquire(),
              ];
            self.clearTimeout(n);
            var i = self.performance.now(),
              l = await this.$1.generateCacheUpdateThrottled();
            try {
              (t(), await this.$25(l, l.senderKeyUpdate), this.$1.clearDirty());
            } finally {
              a.forEach(function (e) {
                return e.release();
              });
            }
            o("WALogger")
              .LOG(
                m ||
                  (m = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]flushBufferToDiskIfNotMemOnlyMode: done lock ",
                    "ms write ",
                    "ms",
                  ])),
                Math.round(i - e),
                Math.round(self.performance.now() - i),
              )
              .tags("unified-store");
          }),
          (n.$26 = async function (t, n, r, a) {
            var e = this;
            (o("WALogger")
              .LOG(
                p ||
                  (p = babelHelpers.taggedTemplateLiteralLoose([
                    "[Signal]updateIdentityRangeAfterEncryption: start",
                  ])),
              )
              .tags("unified-store"),
              await this.$11(r));
            var i = [];
            (r.forEach(function (r) {
              var o = e.$1.IdentityStore.get(r);
              if (
                o &&
                !o.deleted &&
                (a == null || o.identityKey === a) &&
                (o[t] == null || o[t] > n)
              ) {
                var l = babelHelpers.extends({}, o);
                ((l[t] = n),
                  e.$1.IdentityStore.set(r, l),
                  e.$1.Dirty.identity.add(r),
                  i.push(r));
              }
            }),
              o("WALogger")
                .LOG(
                  _ ||
                    (_ = babelHelpers.taggedTemplateLiteralLoose([
                      "[Signal]updateIdentityRangeAfterEncryption: ",
                      " updated",
                    ])),
                  i.length,
                )
                .tags("unified-store"));
          }),
          (n.updateIdentityRangeAfterEncryption = async function (t, n, r, o) {
            var e = await this.$1.Mutex.identity.acquire();
            try {
              await this.$26(t, n, r, o);
            } finally {
              e.release();
            }
          }),
          (n.$27 = function (t) {
            if (t == null) return Promise.resolve();
            var e = this.$1.SessionStore.get(t);
            return (
              e &&
                o("WAWebSignalConvertApi").shouldConvertSession(e.session) &&
                (o("WALogger")
                  .LOG(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "[Signal]maybeCleanUpUnconvertedSession: delete unconverted",
                      ])),
                  )
                  .tags("unified-store"),
                this.$18(t)),
              Promise.resolve()
            );
          }),
          (n.maybeCleanUpUnconvertedSession = async function (t) {
            var e = await this.$1.Mutex.session.acquire();
            try {
              return await this.$27(t);
            } finally {
              e.release();
            }
          }),
          t
        );
      })(),
      b = new C();
    function v() {
      o("WALogger")
        .WARN(
          g ||
            (g = babelHelpers.taggedTemplateLiteralLoose([
              "[Signal]flushBufferToDiskIfNotMemOnlyMode: lock wait over ",
              "ms",
            ])),
          h,
        )
        .tags("unified-store");
    }
    l.default = b;
  },
  98,
);
