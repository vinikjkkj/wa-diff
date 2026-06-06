__d(
  "WACryptoLibrary",
  [
    "Promise",
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
      s,
      u = o("WALockMap").makeLockMap(6e4),
      c = [],
      d = 300;
    function m(e) {
      (c.push(e), c.length >= d && c.shift());
    }
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, r) {
          m("createOutgoingSession");
          var a = I(t),
            i = a.signedKey,
            l = yield o("WASignalSignatures").verifyMsgSignalVariant(
              a.identity,
              i.publicKey,
              i.signature,
            );
          if (!l)
            return (
              m("createOutgoingSession: errSignalInvalidKey"),
              o("WAResultOrError").makeError("errSignalInvalidKey")
            );
          r === !0 &&
            (yield new (s || (s = n("Promise")))(function (e) {
              globalThis.setTimeout(e, 0);
            }));
          var u = yield o("WASignalWhitepaper").initiateSessionOutgoing(
            e,
            a,
            o("WASignalKeys").makeKeyPair(),
          );
          return o("WAResultOrError").makeResult(u);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t, n, r, o, a) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a) {
            var i = e.handleNewSession;
            m("establishOutgoingSession");
            var l = yield p(t, r, a);
            if (!l.success) return l;
            var s = l.value;
            return i(n, s, s.remote.pubKey, null, o);
          },
        )),
        g.apply(this, arguments)
      );
    }
    function h(e, t, r, a) {
      var i = e.handleNewSession,
        l = e.loadSession;
      return (
        m("encryptContent"),
        u.lock(
          [o("WAJids").extractUserJid(t)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = null;
            do {
              var n = yield l(t, "cryptoLibraryEncryptContent");
              if (n == null)
                return (
                  m("encryptContent: errSignalInvalidKey"),
                  o("WAResultOrError").makeError("errSignalInvalidKey")
                );
              if (
                a != null &&
                !o("WACryptoUtils").uint8ArraysEqual(a, n.remote.pubKey)
              )
                return (
                  m("encryptContent: identity-mismatch"),
                  o("WAResultOrError").makeError("identity-mismatch")
                );
              var s = yield o("WASignalCipher").encryptMsg(n, r),
                u = s[0],
                c = s[1],
                d = yield i(t, u, u.remote.pubKey);
              d.success
                ? (e = o("WAResultOrError").makeResult(
                    babelHelpers.extends({}, c, { baseKey: u.aliceBaseKey }),
                  ))
                : d.error;
            } while (e == null);
            return e;
          }),
        )
      );
    }
    function y(e, t, r, a, i) {
      var l = e.handleNewSession,
        s = e.loadOneTimePreKey,
        c = e.loadSession,
        d = e.loadSignedPreKey;
      return (
        m("decryptContent"),
        u.lock(
          [o("WAJids").extractUserJid(r)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = !1,
              n = yield c(r, "decryptContent"),
              u;
            if (a.type === "pkmsg") {
              var p = o("WASignalCipher").deserializePkMsg(a.ciphertext);
              if (!p.success)
                return (
                  m("decryptContent: errCryptoDeserialization"),
                  o("WAResultOrError").makeError("errCryptoDeserialization")
                );
              var _ = p.value,
                f = yield C(
                  { loadSignedPreKey: d, loadOneTimePreKey: s },
                  t,
                  _,
                  n,
                );
              if (!f.success) return f;
              u = f.value;
            } else {
              a.type;
              var g = o("WASignalCipher").deserializeMsg(a.ciphertext);
              if (!g.success)
                return (
                  m("decryptContent: errCryptoDeserialization"),
                  o("WAResultOrError").makeError("errCryptoDeserialization")
                );
              var h = g.value,
                y = yield o("WASignalCipher").decryptMsg(n, h);
              if (!y.success) return y;
              u = y.value;
            }
            var b = u,
              v = b.newSessionInfo;
            if (
              (v &&
                (v.newIdentity != null || v.usedPreKey != null) &&
                (yield l(r, v.baseSession, v.newIdentity, v.usedPreKey)),
              !e)
            ) {
              var S = v == null ? void 0 : v.baseSession.remote.pubKey;
              (yield i(new Uint8Array(u.plaintext), S), (e = !0));
            }
            return (
              yield l(r, u.updatedSession, u.updatedSession.remote.pubKey),
              o("WAResultOrError").makeResult()
            );
          }),
        )
      );
    }
    function C(e, t, n, r) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = e.loadOneTimePreKey,
              i = e.loadSignedPreKey;
            m("decryptPkMsg");
            var l = o("WASignalCipher").findMatchingSession(
              r,
              n.sessionBaseKey,
            );
            if (!l.success) return l;
            var s = l.value;
            if (s) {
              var u = yield o("WASignalCipher").decryptMsgFromSession(s, n);
              if (!u.success) return u;
              var c = u.value,
                d = c[0],
                p = c[1];
              return o("WAResultOrError").makeResult({
                newSessionInfo: null,
                updatedSession: d,
                plaintext: p,
              });
            } else {
              var _ = n.localOneTimeKeyId,
                f = yield i(n.localSignedPreKeyId),
                g = _ == null ? null : yield a(_),
                h = yield o("WASignalCipher").decryptPkMsgWithNewSession(
                  t,
                  r,
                  n,
                  { localSignedPreKey: f, localOneTimeKey: g },
                );
              if (!h.success) return h;
              var y = h.value,
                C = y.baseSession,
                b = y.newIdentity,
                v = y.plaintext,
                S = y.updatedSession;
              return o("WAResultOrError").makeResult({
                newSessionInfo: {
                  newIdentity: b,
                  baseSession: C,
                  usedPreKey: _,
                },
                updatedSession: S,
                plaintext: v,
              });
            }
          },
        )),
        b.apply(this, arguments)
      );
    }
    function v(e, t, r, a) {
      var i = e.loadSenderKeySession,
        l = e.saveSenderKeySession;
      return (
        m("encryptGroupContent"),
        u.lock(
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
                  d = c[0],
                  p = c[1];
                yield l(t, r, d);
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
                  m("encryptGroupContent: sender-key-no-session"),
                  o("WAResultOrError").makeError("sender-key-no-session")
                );
            } while (e == null);
            return e;
          }),
        )
      );
    }
    function S(t, r, a, i, l) {
      var s = t.loadSenderKeySession,
        c = t.saveSenderKeySession;
      return (
        m("decryptGroupContent"),
        u.lock(
          [r, o("WAJids").extractUserJid(a)],
          n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var t = !1,
              n = yield s(r, a);
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
            var u = o("WASignalGroupCipher").deserializeSenderKeyMsg(i);
            if (!u.success)
              return (
                m("decryptGroupContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var d = n.value,
              p = yield o("WASignalGroupCipher").decryptSenderKeyMsgFromSession(
                d,
                u.value,
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
    function R(e, t, r, a) {
      var i = e.loadSenderKeySession,
        l = e.saveSenderKeySession;
      return (
        m("saveSenderKeySession"),
        u.lock(
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
    function L(e, t, r, a) {
      var i = e.saveSenderKeySession;
      return (
        m("rotateGroupSenderKey"),
        u.lock(
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
    function E(e, t, n) {
      return k.apply(this, arguments);
    }
    function k() {
      return (
        (k = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = e.loadSenderKeySession,
            a = e.saveSenderKeySession;
          m("createSenderKeyDistributionMsg");
          var i = yield r(t, n),
            l = i.error;
          if (!i.success && l === "errLoadSenderKeySession") {
            var s = yield o("WASignalKeys").makeKeyPair();
            (yield L({ saveSenderKeySession: a }, t, n, s),
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
            m("createSenderKeyDistributionMsg: errGetSenderKeyProto"),
            o("WAResultOrError").makeError("errGetSenderKeyProto")
          );
        })),
        k.apply(this, arguments)
      );
    }
    function I(e) {
      var t = e.identity,
        n = e.oneTimeKey,
        r = e.regId,
        a = e.signedKey;
      m("sanitizeInitialSessionInfo");
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
    ((l.createOutgoingSession = p),
      (l.establishOutgoingSession = f),
      (l.encryptContent = h),
      (l.decryptContent = y),
      (l.encryptGroupContent = v),
      (l.decryptGroupContent = S),
      (l.saveSenderKeySession = R),
      (l.rotateGroupSenderKey = L),
      (l.createSenderKeyDistributionMsg = E));
  },
  98,
);
