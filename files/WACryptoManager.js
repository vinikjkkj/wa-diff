__d(
  "WACryptoManager",
  [
    "WABridge",
    "WACryptoLibrary",
    "WACryptoUtils",
    "WAGlobals",
    "WAJids",
    "WALogger",
    "WALoggerTag",
    "WAOdsEnums",
    "WAPromiseQueue",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalLocalStorageProtocol.pb",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WATagsLogger",
    "WATimeUtils",
    "err",
    "nullthrows",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
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
      y = r("requireDeferred")("WACryptoLibraryConfig").__setRef(
        "WACryptoManager",
      ),
      C = r("requireDeferred")("WACryptoPQSession").__setRef("WACryptoManager"),
      b = o("WATagsLogger").TAGS([r("WALoggerTag").CryptoManager]),
      v = { type: "default" };
    function S(e) {
      return {
        flush: function () {
          return e.storage.savePendingToDatabase().then(function () {});
        },
      };
    }
    function R(e) {
      return { regInfo: e.regInfo, network: e.network, storage: e.storage };
    }
    async function L(t, n, r, a, i) {
      var l = await a(n, i);
      if (l != null && r.type !== "requestNewSession") {
        var u = l;
        if (r.type === "default") return o("WAResultOrError").makeResult(u);
        if (
          u.aliceBaseKey != null &&
          r.session.baseKey != null &&
          (r.type,
          !o("WACryptoUtils").uint8ArraysEqual(
            r.session.baseKey,
            u.aliceBaseKey,
          ))
        )
          return o("WAResultOrError").makeResult(u);
      }
      var c;
      if (r.type === "useSession") c = r.session.keys;
      else {
        r.type;
        var d = await t.network.requestKeys(n);
        if (!d.success) return d;
        ((c = d.value.keys),
          r.type === "compareTSAndUseSession" &&
            r.session.timestamp >= d.value.timestamp &&
            (c = r.session.keys));
      }
      if (c.kyberKey != null) {
        var m = await y.load(),
          p = m.getCryptoLibraryConfig;
        if (p().isPq1on1MessageEnabled === !0)
          try {
            var _ = await C.load(),
              f = _.createOutgoingSessionPQ,
              g = await f(t.regInfo, c);
            if (g.success)
              return o("WAResultOrError").makeResult(g.value.session);
            o("WALogger").ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[sessions] PQ session creation failed; falling back to X3DH: ",
                  "",
                ])),
              g.error,
            );
          } catch (e) {
            o("WALogger").ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[sessions] PQ session creation threw; falling back to X3DH: ",
                  "",
                ])),
              e,
            );
          }
      }
      var h = await o("WACryptoLibrary").createOutgoingSession(t.regInfo, c);
      return h.success ? o("WAResultOrError").makeResult(h.value) : h;
    }
    function E(e, t, n, r) {
      return o("WACryptoLibrary").establishOutgoingSession(
        { handleNewSession: e.storage.handleNewSession },
        e.regInfo,
        t,
        n,
        r,
      );
    }
    async function k(e, t) {
      var n = await e.storage.loadSessions(t),
        r = t.filter(function (e) {
          return !n.has(e);
        });
      if (r.length === 0) return n;
      var a = await e.network.bulkRequestKeys(r);
      if (!a.success)
        return (
          o("WALogger").ERROR(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "[sessions] fail during key requesting",
              ])),
          ),
          n
        );
      for (var i of n.entries()) {
        var l = i[0],
          s = i[1];
        s.sendChain.nextMsgIndex >=
          o("WAGlobals").getConfig().sessionDropIfTooOld() &&
          (n.delete(l),
          o("WABridge")
            .getBridge()
            .fireAndForget("event", "odsBumpEntityKey", {
              entity: o("WAOdsEnums").Entity.WA_LONG_SESSION_DROP,
              key: "decryption",
            }));
      }
      var _ = a.value,
        f = !1;
      for (var g of _.values())
        if (g.keys.kyberKey != null) {
          f = !0;
          break;
        }
      var h = !1;
      if (f) {
        var b = await y.load(),
          v = b.getCryptoLibraryConfig;
        h = v().isPq1on1MessageEnabled === !0;
      }
      var S = new (o("WAPromiseQueue").PromiseQueue)();
      return (
        _.forEach(function (t, r) {
          S.enqueue(async function () {
            if (h && t.keys.kyberKey != null)
              try {
                var a = await C.load(),
                  i = a.createOutgoingSessionPQ,
                  l = await i(e.regInfo, t.keys);
                if (l.success) {
                  n.set(r, l.value.session);
                  return;
                }
                o("WALogger").ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "[sessions] PQ bulk session creation failed; falling back to X3DH: ",
                      "",
                    ])),
                  l.error,
                );
              } catch (e) {
                o("WALogger").ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "[sessions] PQ bulk session creation threw; falling back to X3DH: ",
                      "",
                    ])),
                  e,
                );
              }
            var s = await o("WACryptoLibrary").createOutgoingSession(
              e.regInfo,
              t.keys,
            );
            s.success === !1
              ? o("WALogger").ERROR(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "[sessions] Failed to create a session",
                    ])),
                )
              : n.set(r, s.value);
          }).catch(function (e) {
            o("WALogger").ERROR(
              p ||
                (p = babelHelpers.taggedTemplateLiteralLoose([
                  "[sessions] Bulk session creation threw: ",
                  "",
                ])),
              e,
            );
          });
        }),
        await S.wait(),
        n
      );
    }
    async function I(e, t) {
      var n = Array.from(t.keys());
      o("WALogger").LOG(
        _ ||
          (_ = babelHelpers.taggedTemplateLiteralLoose([
            "[SendMessage] sendWrittenMsg bulkEncryptContent",
          ])),
      );
      var a = await k(e, n),
        i = new Map();
      return Promise.all(
        Array.from(a.entries()).map(async function (n) {
          var a,
            l = n[0],
            s = n[1],
            u = await o("WASignalCipher").encryptMsg(
              s,
              r("nullthrows")((a = t.get(l)) == null ? void 0 : a.plaintext),
            ),
            c = u[0],
            d = u[1];
          return (
            i.set(l, babelHelpers.extends({}, d, { baseKey: null })),
            e.storage.handleNewSession(l, c, c.remote.pubKey)
          );
        }),
      ).then(function () {
        return o("WAResultOrError").makeResult(i);
      });
    }
    function T(e, t, n, r, a) {
      return o("WACryptoLibrary").encryptContent(
        {
          loadSession: function (n) {
            return L(
              e,
              n,
              r,
              e.storage.loadSession,
              "cryptoManagerEncryptContent",
            ).then(function (e) {
              return e.success === !0 ? e.value : null;
            });
          },
          handleNewSession: e.storage.handleNewSession,
        },
        t,
        n,
        a,
      );
    }
    function D(e, t, n, r) {
      var a, i;
      return o("WACryptoLibrary").decryptContent(
        {
          loadSession: e.storage.loadSession,
          handleNewSession: e.storage.handleNewSession,
          loadSignedPreKey: e.storage.loadSignedPreKey,
          loadOneTimePreKey: e.storage.loadOneTimePreKey,
          loadKyberPreKey: (a = e.storage.loadKyberPreKey) != null ? a : null,
          deleteKyberPreKey:
            (i = e.storage.deleteKyberPreKey) != null ? i : null,
        },
        e.regInfo,
        t,
        n,
        r,
      );
    }
    async function x(e, t) {
      var n = await e.storage.loadSession(t, "getParticipantInfo");
      return n == null ? void 0 : n.remote;
    }
    async function $(e) {
      var t,
        n,
        a = await e.storage.getLastPreKeyGenerationId(),
        i = ((t = a == null ? void 0 : a.lastPreKeyId) != null ? t : 0) + 1,
        l = o("WASignalKeys").makePreKeys(i, 1)[0],
        s = await e.storage.saveOneTimePreKey({
          keyId: l.plainObject.id,
          encoded: l.record,
        });
      if (s.success) return l.plainObject;
      throw r("err")(
        "Cannot save one time prekey: " +
          s.error +
          ", LastPreKeyId: " +
          ((n = a == null ? void 0 : a.lastPreKeyId) != null ? n : 0),
      );
    }
    async function P(e, t) {
      var n;
      t === void 0 && (t = o("WAGlobals").getConfig().maxPrekeysToUpload());
      var r = await e.storage.getLastPreKeyGenerationId(),
        a = o("WASignalKeys").makePreKeys(
          ((n = r == null ? void 0 : r.lastPreKeyId) != null ? n : 0) + 1,
          t,
        );
      return e.storage.savePreKeysGeneration(
        a.map(function (e) {
          var t = e.plainObject,
            n = e.record;
          return { keyId: t.id, encoded: n };
        }),
      );
    }
    function N(e) {
      return e.storage.loadLatestSignedPreKey().then(function (t) {
        if (t.success === !1) {
          var n, a, i;
          throw (
            b
              .TAGS([r("WALoggerTag").SignedPrekey])
              .ERROR(
                f ||
                  (f = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to generate signed prekey ",
                    "",
                  ])),
                t == null || (n = t.payload) == null ? void 0 : n.toString(),
              ),
            r("err")(
              "Failed to generate signed prekey: " +
                ((a =
                  t == null || (i = t.payload) == null ? void 0 : i.message) !=
                null
                  ? a
                  : ""),
            )
          );
        }
        var l = t.value,
          s = o("WASignalSignatures").deserializeSignedPreKey(l);
        if (s == null)
          throw (
            b
              .TAGS([r("WALoggerTag").SignedPrekey])
              .ERROR(
                g ||
                  (g = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to deserialize signed prekey",
                  ])),
              ),
            r("err")("failed to deserialize signed prekey")
          );
        var u =
          s.id + 1 >= o("WASignalKeys").PRE_KEY_NON_INCLUSIVE_UPPER_BORDER
            ? 1
            : s.id + 1;
        return M(e, u);
      });
    }
    function M(e, t) {
      var n = o("WASignalSignatures").makeSignedPreKey(
          t,
          o("WATimeUtils").unixTimeMs(),
          e.regInfo.staticKeyPair,
        ),
        a = o("WASignalSignatures").serializeSignedPreKeyForPrivateStorage(n);
      return e.storage
        .saveSignedPreKeyIfNew(n.id, a)
        .then(function (e) {
          return e.type === "success"
            ? o("WAResultOrError").makeResult(n)
            : (e.type, o("WAResultOrError").makeResult(e.key));
        })
        .then(function (e) {
          if (!e.success) {
            var t, n;
            throw (
              b
                .TAGS([r("WALoggerTag").SignedPrekey])
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to generate signed prekey with id: ",
                      "",
                    ])),
                  e,
                ),
              r("err")(
                "Unexpected error when generateSignedPreKeyWithId: " +
                  ((t =
                    e == null || (n = e.payload) == null
                      ? void 0
                      : n.message) != null
                    ? t
                    : e.error),
              )
            );
          }
          return e.value;
        });
    }
    function w(e, t, n, r) {
      return o("WACryptoLibrary").encryptGroupContent(
        {
          loadSenderKeySession: e.storage.loadSenderKeySession,
          saveSenderKeySession: e.storage.saveSenderKeySession,
        },
        t,
        n,
        r,
      );
    }
    function A(e, t, n, r, a) {
      return o("WACryptoLibrary").decryptGroupContent(
        {
          loadSenderKeySession: e.storage.loadSenderKeySession,
          saveSenderKeySession: e.storage.saveSenderKeySession,
        },
        t,
        n,
        r,
        a,
      );
    }
    function F(e, t, n, r) {
      return o("WACryptoLibrary").saveSenderKeySession(
        { saveSenderKeySession: e.storage.saveSenderKeySession },
        t,
        n,
        r,
      );
    }
    async function O(e, t, n) {
      var r = await $(e);
      return o("WACryptoLibrary").rotateGroupSenderKey(
        { saveSenderKeySession: e.storage.saveSenderKeySession },
        t,
        n,
        r.keyPair,
      );
    }
    function B(e) {
      return Promise.resolve().then(function () {
        return {
          regId: o("WASignalOther").makeRegistrationId(e),
          staticKeyPair: o("WASignalKeys").makeKeyPair(),
          authKeyPair: o("WASignalKeys").makeKeyPair(),
        };
      });
    }
    function W(e) {
      return o("WASignalOther").encodeSignalProto(
        o("WASignalLocalStorageProtocol.pb").RecordStructureSpec,
        o("WASignalSessions").serializeSession(e),
      );
    }
    function q(e) {
      return o("WASignalOther").decodeSignalProto(
        o("WASignalLocalStorageProtocol.pb").RecordStructureSpec,
        e,
        o("WASignalSessions").parseSessionFromRecord,
      );
    }
    function U(e) {
      return o("WASignalOther").encodeSignalProto(
        o("WASignalLocalStorageProtocol.pb").SenderKeyRecordStructureSpec,
        o("WASignalGroupSession").serializeSession(e),
      );
    }
    function V(e) {
      return o("WASignalOther").decodeSignalProto(
        o("WASignalLocalStorageProtocol.pb").SenderKeyRecordStructureSpec,
        e,
        o("WASignalGroupSession").parseSessionFromRecord,
      );
    }
    function H(e) {
      return e;
    }
    function G(e, t) {
      return e + "|" + t;
    }
    function z(e) {
      var t = e.split("|");
      if (t.length !== 2) throw r("err")("Incorrect ComplexSenderKey");
      return {
        groupId: o("WAJids").unsafeCoerceToGroupJid(t[0]),
        deviceId: o("WAJids").unsafeCoerceToDeviceJid(t[1]),
      };
    }
    ((l.DEFAULT_SESSION_REQUEST = v),
      (l.cryptoManagerFlushable = S),
      (l.initCryptoManager = R),
      (l.getSessionForRecipient = L),
      (l.establishOutgoingSession = E),
      (l.bulkEncryptContent = I),
      (l.encryptContent = T),
      (l.decryptContent = D),
      (l.getParticipantInfo = x),
      (l.generateOneTimePreKey = $),
      (l.generatePreKeys = P),
      (l.generateSignedPreKey = N),
      (l.generateSignedPreKeyWithId = M),
      (l.encryptGroupContent = w),
      (l.decryptGroupContent = A),
      (l.saveSenderKeySession = F),
      (l.rotateGroupSenderKey = O),
      (l.generateRegistrationInfo = B),
      (l.encodeSession = W),
      (l.decodeSession = q),
      (l.encodeSenderKeySession = U),
      (l.decodeSenderKeySession = V),
      (l.castToPreKeyGenerationId = H),
      (l.encodeSenderKey = G),
      (l.decodeSenderKey = z));
  },
  98,
);
