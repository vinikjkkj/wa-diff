__d(
  "WACryptoLibrary",
  [
    "WACryptoUtils",
    "WAJids",
    "WALockMap",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupCipher",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSignatures",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = o("WALockMap").makeLockMap(6e4),
      u = [],
      c = 300;
    function d(e) {
      (u.push(e), u.length >= c && u.shift());
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          d("createOutgoingSession");
          var n = k(t),
            r = n.signedKey,
            a = yield o("WASignalSignatures").verifyMsgSignalVariant(
              n.identity,
              r.publicKey,
              r.signature,
            );
          if (!a)
            return (
              d("createOutgoingSession: errSignalInvalidKey"),
              o("WAResultOrError").makeError("errSignalInvalidKey")
            );
          var i = yield o("WASignalWhitepaper").initiateSessionOutgoing(
            e,
            n,
            o("WASignalKeys").makeKeyPair(),
          );
          return o("WAResultOrError").makeResult(i);
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t, n, r, o) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o) {
            var a = e.handleNewSession;
            d("establishOutgoingSession");
            var i = yield m(t, r);
            if (!i.success) return i;
            var l = i.value;
            return a(n, l, l.remote.pubKey, null, o);
          },
        )),
        f.apply(this, arguments)
      );
    }
    function g(e, t, r, a) {
      var i = e.handleNewSession,
        l = e.loadSession;
      return (
        d("encryptContent"),
        s.lock(
          [o("WAJids").extractUserJid(t)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null;
            do {
              var n = yield l(t, "cryptoLibraryEncryptContent");
              if (n == null)
                return (
                  d("encryptContent: errSignalInvalidKey"),
                  o("WAResultOrError").makeError("errSignalInvalidKey")
                );
              if (
                a != null &&
                !o("WACryptoUtils").uint8ArraysEqual(a, n.remote.pubKey)
              )
                return (
                  d("encryptContent: identity-mismatch"),
                  o("WAResultOrError").makeError("identity-mismatch")
                );
              var s = yield o("WASignalCipher").encryptMsg(n, r),
                u = s[0],
                c = s[1],
                m = yield i(t, u, u.remote.pubKey);
              m.success
                ? (e = o("WAResultOrError").makeResult(
                    babelHelpers.extends({}, c, { baseKey: u.aliceBaseKey }),
                  ))
                : m.error;
            } while (e == null);
            return e;
          }),
        )
      );
    }
    function h(e, t, r, a, i) {
      var l = e.deleteKyberPreKey,
        u = e.handleNewSession,
        c = e.loadKyberPreKey,
        m = e.loadOneTimePreKey,
        p = e.loadSession,
        _ = e.loadSignedPreKey;
      return (
        d("decryptContent"),
        s.lock(
          [o("WAJids").extractUserJid(r)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !1,
              n = yield p(r, "decryptContent"),
              s;
            if (a.type === "pkmsg") {
              var f = o("WASignalCipher").deserializePkMsg(a.ciphertext);
              if (!f.success)
                return (
                  d("decryptContent: errCryptoDeserialization"),
                  o("WAResultOrError").makeError("errCryptoDeserialization")
                );
              var g = f.value,
                h = yield y(
                  {
                    loadSignedPreKey: _,
                    loadOneTimePreKey: m,
                    loadKyberPreKey: c != null ? c : null,
                  },
                  t,
                  g,
                  n,
                );
              if (!h.success) return h;
              s = h.value;
            } else {
              a.type;
              var C = o("WASignalCipher").deserializeMsg(a.ciphertext);
              if (!C.success)
                return (
                  d("decryptContent: errCryptoDeserialization"),
                  o("WAResultOrError").makeError("errCryptoDeserialization")
                );
              var b = C.value,
                v = yield o("WASignalCipher").decryptMsg(n, b);
              if (!v.success) return v;
              s = v.value;
            }
            var S = s,
              R = S.newSessionInfo;
            if (
              (R &&
                (R.newIdentity != null || R.usedPreKey != null) &&
                (yield u(r, R.baseSession, R.newIdentity, R.usedPreKey)),
              (R == null ? void 0 : R.usedKyberPreKey) != null &&
                l != null &&
                (yield l(R.usedKyberPreKey)),
              !e)
            ) {
              var L = R == null ? void 0 : R.baseSession.remote.pubKey;
              (yield i(new Uint8Array(s.plaintext), L), (e = !0));
            }
            return (
              yield u(r, s.updatedSession, s.updatedSession.remote.pubKey),
              o("WAResultOrError").makeResult()
            );
          }),
        )
      );
    }
    function y(e, t, n, r) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.loadKyberPreKey,
              i = e.loadOneTimePreKey,
              l = e.loadSignedPreKey;
            d("decryptPkMsg");
            var s = o("WASignalCipher").findMatchingSession(
              r,
              n.sessionBaseKey,
            );
            if (!s.success) return s;
            var u = s.value;
            if (u) {
              var c = yield o("WASignalCipher").decryptMsgFromSession(u, n);
              if (!c.success) return c;
              var m = c.value,
                p = m[0],
                _ = m[1];
              return o("WAResultOrError").makeResult({
                newSessionInfo: null,
                updatedSession: p,
                plaintext: _,
              });
            } else {
              var f = n.localOneTimeKeyId,
                g = yield l(n.localSignedPreKeyId),
                h = f == null ? null : yield i(f),
                y = null;
              n.kyberPreKeyId != null &&
                n.kyberCiphertext != null &&
                a != null &&
                (y = yield a(n.kyberPreKeyId));
              var C = yield o("WASignalCipher").decryptPkMsgWithNewSession(
                t,
                r,
                n,
                {
                  localSignedPreKey: g,
                  localOneTimeKey: h,
                  localKyberPreKey:
                    y != null ? { secretKey: y.secretKey } : null,
                },
              );
              if (!C.success) return C;
              var b = C.value,
                v = b.baseSession,
                S = b.newIdentity,
                R = b.plaintext,
                L = b.updatedSession;
              return o("WAResultOrError").makeResult({
                newSessionInfo: {
                  newIdentity: S,
                  baseSession: v,
                  usedPreKey: f,
                  usedKyberPreKey:
                    y != null && y.shouldDeleteAfterUse !== !1
                      ? n.kyberPreKeyId
                      : null,
                },
                updatedSession: L,
                plaintext: R,
              });
            }
          },
        )),
        C.apply(this, arguments)
      );
    }
    function b(e, t, r, a) {
      var i = e.loadSenderKeySession,
        l = e.saveSenderKeySession;
      return (
        d("encryptGroupContent"),
        s.lock(
          [t, o("WAJids").extractUserJid(r)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null;
            do {
              var n = yield i(t, r);
              if (!n.success) return o("WAResultOrError").makeError(n.error);
              var s = n.value,
                u = yield o(
                  "WASignalGroupCipher",
                ).encryptSenderKeyMsgWithSession(s, a);
              if (u.success) {
                var c = u.value,
                  m = c[0],
                  p = c[1];
                yield l(t, r, m);
                var _ = s.senderKeyStates[s.senderKeyStates.length - 1];
                e = o("WAResultOrError").makeResult({
                  ciphertext: { ciphertext: p, type: "skmsg" },
                  senderKeyId: _.senderKeyId,
                  senderKeyDistributionProto: o(
                    "WASignalGroupCipher",
                  ).createSenderKeyDistributionProto(
                    o("WASignalGroupSession").convertFromRawToSenderKeyState(_),
                  ),
                });
              } else
                return (
                  d("encryptGroupContent: sender-key-no-session"),
                  o("WAResultOrError").makeError("sender-key-no-session")
                );
            } while (e == null);
            return e;
          }),
        )
      );
    }
    function v(t, r, a, i, l) {
      var u = t.loadSenderKeySession,
        c = t.saveSenderKeySession;
      return (
        d("decryptGroupContent"),
        s.lock(
          [r, o("WAJids").extractUserJid(a)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = !1,
              n = yield u(r, a);
            if (!n.success)
              return (
                o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[WACryptoLibrary] Unable to load sender key session for group during decryptGroupContent: ",
                      ", author: ",
                      "",
                    ])),
                  r,
                  a,
                ),
                o("WAResultOrError").makeError(n.error)
              );
            var s = o("WASignalGroupCipher").deserializeSenderKeyMsg(i);
            if (!s.success)
              return (
                d("decryptGroupContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var m = n.value,
              p = yield o("WASignalGroupCipher").decryptSenderKeyMsgFromSession(
                m,
                s.value,
              );
            if (!p.success) return p;
            var _ = p.value,
              f = _[0],
              g = _[1];
            return (
              t || (yield l(new Uint8Array(g)), (t = !0)),
              yield c(r, a, f),
              o("WAResultOrError").makeResult()
            );
          }),
        )
      );
    }
    function S(e, t, r, a) {
      var i = e.loadSenderKeySession,
        l = e.saveSenderKeySession;
      return (
        d("saveSenderKeySession"),
        s.lock(
          [t, o("WAJids").extractUserJid(r)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null;
            if (i) {
              var n = yield i(t, r);
              e = n.success ? n.value : null;
            }
            var s = yield o(
              "WASignalGroupCipher",
            ).processSenderKeyDistributionMsg(a, e);
            if (!s.success) return s;
            var u = s.value;
            return (yield l(t, r, u), o("WAResultOrError").makeResult());
          }),
        )
      );
    }
    function R(e, t, r, a) {
      var i = e.saveSenderKeySession;
      return (
        d("rotateGroupSenderKey"),
        s.lock(
          [t, o("WAJids").extractUserJid(r)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e =
                yield o("WASignalWhitepaper").initiateSenderKeySessionOutgoing(
                  a,
                ),
              n = e.senderKeyStates[0].senderKeyId;
            return (yield i(t, r, e), { senderKeyId: n });
          }),
        )
      );
    }
    function L(e, t, n) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.loadSenderKeySession,
            a = e.saveSenderKeySession;
          d("createSenderKeyDistributionMsg");
          var i = yield r(t, n),
            l = i.error;
          if (!i.success && l === "errLoadSenderKeySession") {
            var s = yield o("WASignalKeys").makeKeyPair();
            (yield R({ saveSenderKeySession: a }, t, n, s),
              (i = yield r(t, n)));
          }
          if (i.success) {
            var u = i.value.senderKeyStates.slice(-1);
            if (u.length > 0)
              return o("WAResultOrError").makeResult(
                o("WASignalGroupCipher").createSenderKeyDistributionProto(
                  o("WASignalGroupSession").convertFromRawToSenderKeyState(
                    u[0],
                  ),
                ),
              );
          }
          return (
            d("createSenderKeyDistributionMsg: errGetSenderKeyProto"),
            o("WAResultOrError").makeError("errGetSenderKeyProto")
          );
        })),
        E.apply(this, arguments)
      );
    }
    function k(e) {
      var t = e.identity,
        n = e.oneTimeKey,
        r = e.regId,
        a = e.signedKey;
      d("sanitizeInitialSessionInfo");
      var i = o("WASignalKeys").castToSerializedPubKey(a.publicKey);
      return {
        regId: o("WASignalOther").castRegistrationId(r),
        identity: o("WASignalKeys").castToSerializedPubKey(t),
        signedKey: {
          id: o("WASignalKeys").castToSignedPreKeyId(a.id),
          publicKey: i,
          signature: o("WASignalOther").ensureSize(a.signature, 64),
        },
        oneTimeKey: n && {
          id: o("WASignalKeys").castToPreKeyId(n.id),
          publicKey: o("WASignalKeys").castToSerializedPubKey(n.publicKey),
        },
        ratchetKey: i,
      };
    }
    ((l.createOutgoingSession = m),
      (l.establishOutgoingSession = _),
      (l.encryptContent = g),
      (l.decryptContent = h),
      (l.encryptGroupContent = b),
      (l.decryptGroupContent = v),
      (l.saveSenderKeySession = S),
      (l.rotateGroupSenderKey = R),
      (l.createSenderKeyDistributionMsg = L));
  },
  98,
);
