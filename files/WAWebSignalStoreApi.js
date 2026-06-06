__d(
  "WAWebSignalStoreApi",
  [
    "WALogger",
    "WASignalKeys",
    "WAWebNoop",
    "WAWebSignalCommonUtils",
    "WAWebSignalConst",
    "WAWebSignalStorage",
    "WAWebSignalStorageUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1,
      u = (function () {
        function t() {
          this.idToSignedPreKey = new Map();
        }
        var n = t.prototype;
        return (
          (n.getMeta = function (t) {
            var e = o("WAWebSignalStorage").getMetaTable();
            return e.get(t).then(function (e) {
              return e ? e.value : null;
            });
          }),
          (n.putMeta = async function (t) {
            var e = o("WAWebSignalStorage").getMetaTable(),
              n = t.map(function (t) {
                return e.createOrReplace(t);
              });
            await Promise.all(n);
          }),
          (n.setServerHasPreKeys = function (t) {
            this.putMeta([
              { key: o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY, value: t },
            ]);
          }),
          (n.getServerHasPreKeys = function () {
            return this.getMeta(o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY);
          }),
          (n.putADVSignedIdentity = function (t) {
            return this.putMeta([
              {
                key: o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY,
                value: t,
              },
            ]);
          }),
          (n.getADVSignedIdentity = function () {
            return this.getMeta(
              o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY,
            );
          }),
          (n.getPreKeysByRange = function (t, n) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.greaterThan(["keyId"], t - 1, { limit: n });
          }),
          (n.getPreKeyById = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.get(t);
          }),
          (n.removePreKeyById = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.remove(t);
          }),
          (n.bulkRemovePreKey = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkRemove(t);
          }),
          (n.putPreKeys = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkCreateOrReplace(t);
          }),
          (n.markPreKeyAsDirectDistribution = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.merge(t, { isDirectDistribution: 1 });
          }),
          (n.getSignedPreKey = function () {
            var e = this;
            return this.getMeta(
              o("WAWebSignalConst").META_KEYS.LAST_SPK_ID,
            ).then(function (t) {
              return e.getSignedPreKeyById(t);
            });
          }),
          (n.getSignedPreKeyById = function (t) {
            var e = this;
            if (this.idToSignedPreKey.has(t))
              return Promise.resolve(this.idToSignedPreKey.get(t));
            var n = o("WAWebSignalStorage").getSignedPreKeyTable();
            return n.get(t).then(function (n) {
              return (e.idToSignedPreKey.set(t, n), n);
            });
          }),
          (n.putSignedPreKeys = async function (t) {
            var e = o("WAWebSignalStorage").getSignedPreKeyTable(),
              n = t.map(function (t) {
                var n = t.keyId,
                  o = t.keyPair,
                  a = t.signature;
                return e.get(n).then(function (t) {
                  if (t)
                    throw r("err")("signed preKey id " + n + " already exists");
                  var i = { keyId: n, keyPair: o, signature: a };
                  return e.create(i);
                });
              });
            await Promise.all(n);
          }),
          (n.putSession = function (t, n) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.createOrReplace({ address: t, session: n });
          }),
          (n.bulkPutSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkCreateOrReplace(t);
          }),
          (n.removeSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.remove(t);
          }),
          (n.bulkRemoveSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkRemove(t);
          }),
          (n.getSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.get(t).then(function (e) {
              return e ? e.session : null;
            });
          }),
          (n.bulkGetSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e ? e.session : null;
              });
            });
          }),
          (n.putIdentity = function (t, n) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.createOrReplace({ identifier: t, identityKey: n });
          }),
          (n.bulkPutIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
          }),
          (n.bulkGetIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e ? e.identityKey : null;
              });
            });
          }),
          (n.getIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.get(t).then(function (e) {
              return e ? e.identityKey : null;
            });
          }),
          (n.removeIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.remove(t);
          }),
          (n.bulkRemoveIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkRemove(t);
          }),
          (n.getIdentityKeyWithRowId = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.get(t).then(function (e) {
              return e
                ? {
                    identityKey: e.identityKey,
                    rowId: e.rowId,
                    sentAddonRowId: e.sentAddonRowId,
                  }
                : null;
            });
          }),
          (n.bulkGetIdentityKeyWithRowId = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e
                  ? { identityKey: e.identityKey, rowId: e.rowId }
                  : null;
              });
            });
          }),
          (n.bulkPutIdentityKeyWithRowId = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
          }),
          (n.saveBaseKey = function (t, n, r) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e.createOrReplace({
              address: t,
              originalMsgId: n,
              baseKey: r,
            });
          }),
          (n.loadBaseKey = function (t, n) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e
              .equals(["address", "originalMsgId"], [t, n])
              .then(function (e) {
                return e && e.length !== 0 ? e[0].baseKey : null;
              });
          }),
          (n.deleteBaseKey = function (t, n) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e
              .equals(["address", "originalMsgId"], [t, n])
              .then(function (t) {
                if (t && t.length !== 0) return e.remove(t[0].id);
              });
          }),
          (n.putSenderKey = function (t, n, r) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.createOrReplace({
              senderKeyName: t,
              senderId: n,
              senderKey: r,
            });
          }),
          (n.bulkPutSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.bulkCreateOrReplace(t);
          }),
          (n.removeSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.remove(t);
          }),
          (n.getSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.get(t).then(function (e) {
              return e ? e.senderKey : null;
            });
          }),
          (n.removeSenderKeyBySenderId = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.equals(["senderId"], t).then(function (t) {
              return e.bulkRemove(
                t.map(function (e) {
                  return e.senderKeyName;
                }),
              );
            });
          }),
          (n.clearCredential = function () {
            var e,
              t = [
                (e = o("WAWebSignalStorage")).getIdentityTable(),
                e.getMetaTable(),
                e.getPreKeyTable(),
                e.getSessionTable(),
                e.getSignedPreKeyTable(),
              ];
            return Promise.all(
              t.map(function (e) {
                return e.clear();
              }),
            ).then(r("WAWebNoop"));
          }),
          (n.getRegistrationInfo = function () {
            var e = this;
            return this.registrationInfo != null
              ? Promise.resolve(this.registrationInfo)
              : Promise.all([
                  this.getMeta(o("WAWebSignalConst").META_KEYS.REG_ID),
                  this.getMeta(o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY),
                  this.getMeta(o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY),
                ]).then(function (t) {
                  var n = t[0],
                    r = t[1],
                    a = t[2];
                  if (!(!n || !r || !a))
                    return Promise.all([
                      o("WAWebSignalCommonUtils").decryptRegistrationMaterial(
                        r,
                      ),
                      o("WAWebSignalCommonUtils").decryptRegistrationMaterial(
                        a,
                      ),
                    ]).then(function (t) {
                      var r = t[0],
                        o = t[1];
                      return (
                        (e.registrationInfo = {
                          registrationId: n,
                          identityKeyPair: { pubKey: r, privKey: o },
                        }),
                        e.registrationInfo
                      );
                    });
                });
          }),
          (n.setRegistrationInfo = async function (t) {
            var e = this;
            await Promise.all([
              o("WAWebSignalCommonUtils").encryptRegistrationMaterial(
                t.identityKeyPair.pubKey,
              ),
              o("WAWebSignalCommonUtils").encryptRegistrationMaterial(
                t.identityKeyPair.privKey,
              ),
            ]).then(function (n) {
              var r = n[0],
                a = n[1];
              return Promise.all([
                e.putMeta([
                  {
                    key: o("WAWebSignalConst").META_KEYS.REG_ID,
                    value: t.registrationId,
                  },
                  {
                    key: o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY,
                    value: r,
                  },
                  {
                    key: o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY,
                    value: a,
                  },
                ]),
              ]);
            });
          }),
          (n.getOrGenPreKeys = function (n, r) {
            var t = this;
            return o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(["signal-meta-store", "prekey-store"], function () {
                return Promise.all([
                  t.getMeta(
                    o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
                  ),
                  t.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID),
                ]).then(function (a) {
                  var i = a[0],
                    l = a[1],
                    u = i || s,
                    d = l || s,
                    m = d - u,
                    p = n - m;
                  if (p <= 0)
                    return (
                      o("WALogger").LOG(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[getPreKeys] no gen needed avail=",
                            " need=",
                            "",
                          ])),
                        m,
                        n,
                      ),
                      t.getPreKeysByRange(u, n)
                    );
                  var _ = c(d, d + p).map(function (e) {
                    return r(e);
                  });
                  return t.savePreKeys(_).then(function () {
                    return t.getPreKeysByRange(u, n);
                  });
                });
              });
          }),
          (n.getOrGenSinglePreKey = function (t) {
            return this.getOrGenPreKeys(1, t).then(function (e) {
              if (e.length !== 1)
                throw r("err")(
                  "Expected to get exactly one key but got " + e.length,
                );
              return e[0];
            });
          }),
          (n.savePreKeys = async function (t) {
            if (t.length !== 0) {
              var e = t[t.length - 1];
              await Promise.all([
                this.putMeta([
                  {
                    key: o("WAWebSignalConst").META_KEYS.NEXT_PK_ID,
                    value: e.keyId + 1,
                  },
                ]),
                this.putPreKeys(t),
              ]);
            }
          }),
          (n.markKeyAsUploaded = function (t) {
            var e = this;
            return Promise.all([
              this.getMeta(
                o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
              ),
              this.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID),
            ]).then(function (n) {
              var a = n[0],
                i = n[1];
              if (t < 0 || !i || t >= i)
                throw r("err")(
                  "markKeyAsUploaded: key " + t + " is out of boundary.",
                );
              var l = a ? Math.max(a, t + 1) : t + 1;
              return e.putMeta([
                {
                  key: o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
                  value: l,
                },
              ]);
            });
          }),
          (n.rotateSignedPreKey = function (t, n) {
            var e = this;
            return o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(["signal-meta-store", "signed-prekey-store"], function () {
                return e
                  .getMeta(o("WAWebSignalConst").META_KEYS.LAST_SPK_ID)
                  .then(function (r) {
                    var a =
                        r == null ||
                        r + 1 >=
                          o("WASignalKeys").PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
                          ? s
                          : r + 1,
                      i = n(t, a);
                    return Promise.all([
                      e.putSignedPreKeys([i]),
                      e.putMeta([
                        {
                          key: o("WAWebSignalConst").META_KEYS.LAST_SPK_ID,
                          value: a,
                        },
                      ]),
                    ]).then(function () {
                      return i;
                    });
                  });
              });
          }),
          t
        );
      })();
    function c(e, t) {
      for (var n = [], r = e; r < t; r++) n.push(r);
      return n;
    }
    var d = new u();
    l.waSignalStore = d;
  },
  98,
);
