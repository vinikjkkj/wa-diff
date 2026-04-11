__d(
  "WAWebSignalStoreApi",
  [
    "Promise",
    "WALogger",
    "WASignalKeys",
    "WAWebNoop",
    "WAWebSignalCommonUtils",
    "WAWebSignalConst",
    "WAWebSignalStorage",
    "WAWebSignalStorageUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 1,
      c = (function () {
        function t() {
          this.idToSignedPreKey = new Map();
        }
        var a = t.prototype;
        return (
          (a.getMeta = function (t) {
            var e = o("WAWebSignalStorage").getMetaTable();
            return e.get(t).then(function (e) {
              return e ? e.value : null;
            });
          }),
          (a.putMeta = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebSignalStorage").getMetaTable(),
                  r = e.map(function (e) {
                    return t.createOrReplace(e);
                  });
                yield (s || (s = n("Promise"))).all(r);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.setServerHasPreKeys = function (t) {
            this.putMeta([
              { key: o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY, value: t },
            ]);
          }),
          (a.getServerHasPreKeys = function () {
            return this.getMeta(o("WAWebSignalConst").META_KEYS.SERVER_HAS_KEY);
          }),
          (a.putADVSignedIdentity = function (t) {
            return this.putMeta([
              {
                key: o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY,
                value: t,
              },
            ]);
          }),
          (a.getADVSignedIdentity = function () {
            return this.getMeta(
              o("WAWebSignalConst").META_KEYS.ADV_SIGNED_IDENTITY,
            );
          }),
          (a.getPreKeysByRange = function (t, n) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.greaterThan(["keyId"], t - 1, { limit: n });
          }),
          (a.getPreKeyById = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.get(t);
          }),
          (a.removePreKeyById = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.remove(t);
          }),
          (a.bulkRemovePreKey = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkRemove(t);
          }),
          (a.putPreKeys = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.bulkCreateOrReplace(t);
          }),
          (a.markPreKeyAsDirectDistribution = function (t) {
            var e = o("WAWebSignalStorage").getPreKeyTable();
            return e.merge(t, { isDirectDistribution: 1 });
          }),
          (a.getSignedPreKey = function () {
            var e = this;
            return this.getMeta(
              o("WAWebSignalConst").META_KEYS.LAST_SPK_ID,
            ).then(function (t) {
              return e.getSignedPreKeyById(t);
            });
          }),
          (a.getSignedPreKeyById = function (t) {
            var e = this;
            if (this.idToSignedPreKey.has(t))
              return (s || (s = n("Promise"))).resolve(
                this.idToSignedPreKey.get(t),
              );
            var r = o("WAWebSignalStorage").getSignedPreKeyTable();
            return r.get(t).then(function (n) {
              return (e.idToSignedPreKey.set(t, n), n);
            });
          }),
          (a.putSignedPreKeys = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = o("WAWebSignalStorage").getSignedPreKeyTable(),
                  a = e.map(function (e) {
                    var n = e.keyId,
                      o = e.keyPair,
                      a = e.signature;
                    return t.get(n).then(function (e) {
                      if (e)
                        throw r("err")(
                          "signed preKey id " + n + " already exists",
                        );
                      var i = { keyId: n, keyPair: o, signature: a };
                      return t.create(i);
                    });
                  });
                yield (s || (s = n("Promise"))).all(a);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.putSession = function (t, n) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.createOrReplace({ address: t, session: n });
          }),
          (a.bulkPutSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkCreateOrReplace(t);
          }),
          (a.removeSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.remove(t);
          }),
          (a.bulkRemoveSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkRemove(t);
          }),
          (a.getSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.get(t).then(function (e) {
              return e ? e.session : null;
            });
          }),
          (a.bulkGetSession = function (t) {
            var e = o("WAWebSignalStorage").getSessionTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e ? e.session : null;
              });
            });
          }),
          (a.putIdentity = function (t, n) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.createOrReplace({ identifier: t, identityKey: n });
          }),
          (a.bulkPutIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
          }),
          (a.bulkGetIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e ? e.identityKey : null;
              });
            });
          }),
          (a.getIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.get(t).then(function (e) {
              return e ? e.identityKey : null;
            });
          }),
          (a.removeIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.remove(t);
          }),
          (a.bulkRemoveIdentity = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkRemove(t);
          }),
          (a.getIdentityKeyWithRowId = function (t) {
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
          (a.bulkGetIdentityKeyWithRowId = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkGet(t).then(function (e) {
              return e.map(function (e) {
                return e
                  ? { identityKey: e.identityKey, rowId: e.rowId }
                  : null;
              });
            });
          }),
          (a.bulkPutIdentityKeyWithRowId = function (t) {
            var e = o("WAWebSignalStorage").getIdentityTable();
            return e.bulkCreateOrReplace(t);
          }),
          (a.saveBaseKey = function (t, n, r) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e.createOrReplace({
              address: t,
              originalMsgId: n,
              baseKey: r,
            });
          }),
          (a.loadBaseKey = function (t, n) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e
              .equals(["address", "originalMsgId"], [t, n])
              .then(function (e) {
                return e && e.length !== 0 ? e[0].baseKey : null;
              });
          }),
          (a.deleteBaseKey = function (t, n) {
            var e = o("WAWebSignalStorage").getBaseKeyTable();
            return e
              .equals(["address", "originalMsgId"], [t, n])
              .then(function (t) {
                if (t && t.length !== 0) return e.remove(t[0].id);
              });
          }),
          (a.putSenderKey = function (t, n, r) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.createOrReplace({
              senderKeyName: t,
              senderId: n,
              senderKey: r,
            });
          }),
          (a.bulkPutSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.bulkCreateOrReplace(t);
          }),
          (a.removeSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.remove(t);
          }),
          (a.getSenderKey = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.get(t).then(function (e) {
              return e ? e.senderKey : null;
            });
          }),
          (a.removeSenderKeyBySenderId = function (t) {
            var e = o("WAWebSignalStorage").getSenderKeyTable();
            return e.equals(["senderId"], t).then(function (t) {
              return e.bulkRemove(
                t.map(function (e) {
                  return e.senderKeyName;
                }),
              );
            });
          }),
          (a.clearCredential = function () {
            var e,
              t = [
                (e = o("WAWebSignalStorage")).getIdentityTable(),
                e.getMetaTable(),
                e.getPreKeyTable(),
                e.getSessionTable(),
                e.getSignedPreKeyTable(),
              ];
            return (s || (s = n("Promise")))
              .all(
                t.map(function (e) {
                  return e.clear();
                }),
              )
              .then(r("WAWebNoop"));
          }),
          (a.getRegistrationInfo = function () {
            var e = this;
            return this.registrationInfo != null
              ? (s || (s = n("Promise"))).resolve(this.registrationInfo)
              : (s || (s = n("Promise")))
                  .all([
                    this.getMeta(o("WAWebSignalConst").META_KEYS.REG_ID),
                    this.getMeta(o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY),
                    this.getMeta(
                      o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY,
                    ),
                  ])
                  .then(function (t) {
                    var r = t[0],
                      a = t[1],
                      i = t[2];
                    if (!(!r || !a || !i))
                      return (s || (s = n("Promise")))
                        .all([
                          o(
                            "WAWebSignalCommonUtils",
                          ).decryptRegistrationMaterial(a),
                          o(
                            "WAWebSignalCommonUtils",
                          ).decryptRegistrationMaterial(i),
                        ])
                        .then(function (t) {
                          var n = t[0],
                            o = t[1];
                          return (
                            (e.registrationInfo = {
                              registrationId: r,
                              identityKeyPair: { pubKey: n, privKey: o },
                            }),
                            e.registrationInfo
                          );
                        });
                  });
          }),
          (a.setRegistrationInfo = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this;
                yield (s || (s = n("Promise")))
                  .all([
                    o("WAWebSignalCommonUtils").encryptRegistrationMaterial(
                      e.identityKeyPair.pubKey,
                    ),
                    o("WAWebSignalCommonUtils").encryptRegistrationMaterial(
                      e.identityKeyPair.privKey,
                    ),
                  ])
                  .then(function (r) {
                    var a = r[0],
                      i = r[1];
                    return (s || (s = n("Promise"))).all([
                      t.putMeta([
                        {
                          key: o("WAWebSignalConst").META_KEYS.REG_ID,
                          value: e.registrationId,
                        },
                        {
                          key: o("WAWebSignalConst").META_KEYS.STATIC_PUBKEY,
                          value: a,
                        },
                        {
                          key: o("WAWebSignalConst").META_KEYS.STATIC_PRIVKEY,
                          value: i,
                        },
                      ]),
                    ]);
                  });
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.getOrGenPreKeys = function (r, a) {
            var t = this;
            return o("WAWebSignalStorageUtils")
              .getStorage()
              .lock(["signal-meta-store", "prekey-store"], function () {
                return (s || (s = n("Promise")))
                  .all([
                    t.getMeta(
                      o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
                    ),
                    t.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID),
                  ])
                  .then(function (i) {
                    var l = i[0],
                      c = i[1],
                      m = l || u,
                      p = c || u,
                      _ = p - m,
                      f = r - _;
                    if (f <= 0)
                      return (
                        o("WALogger").LOG(
                          e ||
                            (e = babelHelpers.taggedTemplateLiteralLoose([
                              "getPreKeys: no prekey needs to be generated, available: ",
                              ", need: ",
                              "",
                            ])),
                          _,
                          r,
                        ),
                        t.getPreKeysByRange(m, r)
                      );
                    var g = d(p, p + f).map(function (e) {
                      return a(e);
                    });
                    return (s || (s = n("Promise")))
                      .all(g)
                      .then(function (e) {
                        return t.savePreKeys(e);
                      })
                      .then(function () {
                        return t.getPreKeysByRange(m, r);
                      });
                  });
              });
          }),
          (a.getOrGenSinglePreKey = function (t) {
            return this.getOrGenPreKeys(1, t).then(function (e) {
              if (e.length !== 1)
                throw r("err")(
                  "Expected to get exactly one key but got " + e.length,
                );
              return e[0];
            });
          }),
          (a.savePreKeys = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                if (e.length !== 0) {
                  var t = e[e.length - 1];
                  yield (s || (s = n("Promise"))).all([
                    this.putMeta([
                      {
                        key: o("WAWebSignalConst").META_KEYS.NEXT_PK_ID,
                        value: t.keyId + 1,
                      },
                    ]),
                    this.putPreKeys(e),
                  ]);
                }
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.markKeyAsUploaded = function (t) {
            var e = this;
            return (s || (s = n("Promise")))
              .all([
                this.getMeta(
                  o("WAWebSignalConst").META_KEYS.FIRST_UNUPLOAD_PK_ID,
                ),
                this.getMeta(o("WAWebSignalConst").META_KEYS.NEXT_PK_ID),
              ])
              .then(function (n) {
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
          (a.rotateSignedPreKey = function (t, n) {
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
                        ? u
                        : r + 1;
                    return n(t, a).then(function (t) {
                      return (
                        e.putSignedPreKeys([t]),
                        e.putMeta([
                          {
                            key: o("WAWebSignalConst").META_KEYS.LAST_SPK_ID,
                            value: a,
                          },
                        ]),
                        t
                      );
                    });
                  });
              });
          }),
          t
        );
      })();
    function d(e, t) {
      for (var n = [], r = e; r < t; r++) n.push(r);
      return n;
    }
    var m = new c();
    l.waSignalStore = m;
  },
  98,
);
