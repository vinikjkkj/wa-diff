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
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhitepaper",
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
    async function m(e, t) {
      d("createOutgoingSession");
      var n = k(t),
        r = n.signedKey,
        a = await o("WASignalSignatures").verifyMsgSignalVariant(
          n.identity,
          r.publicKey,
          r.signature,
        );
      if (!a)
        return (
          d("createOutgoingSession: errSignalInvalidKey"),
          o("WAResultOrError").makeError("errSignalInvalidKey")
        );
      var i = await o("WASignalWhitepaper").initiateSessionOutgoing(
        e,
        n,
        o("WASignalKeys").makeKeyPair(),
      );
      return o("WAResultOrError").makeResult(i);
    }
    async function p(e, t, n, r, o) {
      var a = e.handleNewSession;
      d("establishOutgoingSession");
      var i = await m(t, r);
      if (!i.success) return i;
      var l = i.value;
      return a(n, l, l.remote.pubKey, null, o);
    }
    function _(e, t, n, r) {
      var a = e.handleNewSession,
        i = e.loadSession;
      return (
        d("encryptContent"),
        s.lock([o("WAJids").extractUserJid(t)], async function () {
          var e = null;
          do {
            var l = await i(t, "cryptoLibraryEncryptContent");
            if (l == null)
              return (
                d("encryptContent: errSignalInvalidKey"),
                o("WAResultOrError").makeError("errSignalInvalidKey")
              );
            if (
              r != null &&
              !o("WACryptoUtils").uint8ArraysEqual(r, l.remote.pubKey)
            )
              return (
                d("encryptContent: identity-mismatch"),
                o("WAResultOrError").makeError("identity-mismatch")
              );
            var s = await o("WASignalCipher").encryptMsg(l, n),
              u = s[0],
              c = s[1],
              m = await a(t, u, u.remote.pubKey);
            m.success
              ? (e = o("WAResultOrError").makeResult(
                  babelHelpers.extends({}, c, { baseKey: u.aliceBaseKey }),
                ))
              : m.error;
          } while (e == null);
          return e;
        })
      );
    }
    function f(e, t, n, r, a) {
      var i = e.deleteKyberPreKey,
        l = e.handleNewSession,
        u = e.loadKyberPreKey,
        c = e.loadOneTimePreKey,
        m = e.loadSession,
        p = e.loadSignedPreKey;
      return (
        d("decryptContent"),
        s.lock([o("WAJids").extractUserJid(n)], async function () {
          var e = !1,
            s = await m(n, "decryptContent"),
            _;
          if (r.type === "pkmsg") {
            var f = o("WASignalCipher").deserializePkMsg(r.ciphertext);
            if (!f.success)
              return (
                d("decryptContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var h = f.value,
              y = await g(
                {
                  loadSignedPreKey: p,
                  loadOneTimePreKey: c,
                  loadKyberPreKey: u != null ? u : null,
                },
                t,
                h,
                s,
              );
            if (!y.success) return y;
            _ = y.value;
          } else {
            r.type;
            var C = o("WASignalCipher").deserializeMsg(r.ciphertext);
            if (!C.success)
              return (
                d("decryptContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var b = C.value,
              v = await o("WASignalCipher").decryptMsg(s, b);
            if (!v.success) return v;
            _ = v.value;
          }
          var S = _,
            R = S.newSessionInfo;
          if (
            (R &&
              (R.newIdentity != null || R.usedPreKey != null) &&
              (await l(n, R.baseSession, R.newIdentity, R.usedPreKey)),
            (R == null ? void 0 : R.usedKyberPreKey) != null &&
              i != null &&
              (await i(R.usedKyberPreKey)),
            !e)
          ) {
            var L = R == null ? void 0 : R.baseSession.remote.pubKey;
            (await a(new Uint8Array(_.plaintext), L), (e = !0));
          }
          return (
            await l(n, _.updatedSession, _.updatedSession.remote.pubKey),
            o("WAResultOrError").makeResult()
          );
        })
      );
    }
    async function g(e, t, n, r) {
      var a = e.loadKyberPreKey,
        i = e.loadOneTimePreKey,
        l = e.loadSignedPreKey;
      d("decryptPkMsg");
      var s = o("WASignalCipher").findMatchingSession(r, n.sessionBaseKey);
      if (!s.success) return s;
      var u = s.value;
      if (u) {
        var c = await o("WASignalCipher").decryptMsgFromSession(u, n);
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
          g = await l(n.localSignedPreKeyId),
          h = f == null ? null : await i(f),
          y = null;
        n.kyberPreKeyId != null &&
          n.kyberCiphertext != null &&
          a != null &&
          (y = await a(n.kyberPreKeyId));
        var C = await o("WASignalCipher").decryptPkMsgWithNewSession(t, r, n, {
          localSignedPreKey: g,
          localOneTimeKey: h,
          localKyberPreKey: y != null ? { secretKey: y.secretKey } : null,
        });
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
    }
    function h(e, t, n, r) {
      return (
        d("decryptMsgWithoutSaving"),
        s.lock([o("WAJids").extractUserJid(t)], async function () {
          var a = o("WASignalCipher").deserializeMsg(n);
          if (!a.success)
            return o("WAResultOrError").makeError("errCryptoDeserialization");
          var i = a.value,
            l = await e(t, "decryptMsgWithoutSaving");
          if (l == null)
            return o("WAResultOrError").makeError("errSignalNoSession");
          if (i.counter - y(l, i.ratchetPubKey) >= r)
            return o("WAResultOrError").makeError("errCounterTooFarAhead");
          var s = await o("WASignalCipher").decryptMsg(l, i);
          return s.success
            ? o("WAResultOrError").makeResult(s.value.plaintext)
            : o("WAResultOrError").makeError(s.error);
        })
      );
    }
    function y(e, t) {
      var n = b(e, t);
      if (n != null) return n;
      for (var r of e.prevSessions) {
        var o = b(C(r), t);
        if (o != null) return o;
      }
      return 0;
    }
    function C(e) {
      try {
        return o("WASignalSessions").parseSession(e);
      } catch (e) {
        return null;
      }
    }
    function b(e, t) {
      var n;
      return e == null ||
        (n = e.recvChains.find(function (e) {
          return o("WACryptoUtils").serializedPubKeysEqual(e.ratchetPubKey, t);
        })) == null
        ? void 0
        : n.nextMsgIndex;
    }
    function v(e, t, n, r) {
      var a = e.loadSenderKeySession,
        i = e.saveSenderKeySession;
      return (
        d("encryptGroupContent"),
        s.lock([t, o("WAJids").extractUserJid(n)], async function () {
          var e = null;
          do {
            var l = await a(t, n);
            if (!l.success) return o("WAResultOrError").makeError(l.error);
            var s = l.value,
              u = await o("WASignalGroupCipher").encryptSenderKeyMsgWithSession(
                s,
                r,
              );
            if (u.success) {
              var c = u.value,
                m = c[0],
                p = c[1];
              await i({ author: n, groupId: t, updated: m });
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
        })
      );
    }
    function S(t, n, r, a, i) {
      var l = t.loadSenderKeySession,
        u = t.saveSenderKeySession;
      return (
        d("decryptGroupContent"),
        s.lock([n, o("WAJids").extractUserJid(r)], async function () {
          var t = !1,
            s = await l(n, r);
          if (!s.success)
            return (
              o("WALogger").WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[WACryptoLibrary] Unable to load sender key session for group during decryptGroupContent: ",
                    ", author: ",
                    "",
                  ])),
                n,
                r,
              ),
              o("WAResultOrError").makeError(s.error)
            );
          var c = o("WASignalGroupCipher").deserializeSenderKeyMsg(a);
          if (!c.success)
            return (
              d("decryptGroupContent: errCryptoDeserialization"),
              o("WAResultOrError").makeError("errCryptoDeserialization")
            );
          var m = s.value,
            p = await o("WASignalGroupCipher").decryptSenderKeyMsgFromSession(
              m,
              c.value,
            );
          if (!p.success) return p;
          var _ = p.value,
            f = _[0],
            g = _[1];
          return (
            t || (await i(new Uint8Array(g)), (t = !0)),
            await u({ author: r, groupId: n, updated: f }),
            o("WAResultOrError").makeResult()
          );
        })
      );
    }
    function R(e, t, n, r) {
      var a = e.loadSenderKeySession,
        i = e.saveSenderKeySession;
      return (
        d("saveSenderKeySession"),
        s.lock([t, o("WAJids").extractUserJid(n)], async function () {
          var e = null;
          if (a) {
            var l = await a(t, n);
            e = l.success ? l.value : null;
          }
          var s = await o(
            "WASignalGroupCipher",
          ).processSenderKeyDistributionMsg(r, e);
          if (!s.success) return s;
          var u = s.value;
          return (
            await i({ author: n, groupId: t, updated: u }),
            o("WAResultOrError").makeResult()
          );
        })
      );
    }
    function L(e, t, n, r) {
      var a = e.saveSenderKeySession;
      return (
        d("rotateGroupSenderKey"),
        s.lock([t, o("WAJids").extractUserJid(n)], async function () {
          var e =
              await o("WASignalWhitepaper").initiateSenderKeySessionOutgoing(r),
            i = e.senderKeyStates[0].senderKeyId;
          return (
            await a({ author: n, groupId: t, updated: e }),
            { senderKeyId: i }
          );
        })
      );
    }
    async function E(e, t, n) {
      var r = e.loadSenderKeySession,
        a = e.saveSenderKeySession;
      d("createSenderKeyDistributionMsg");
      var i = await r(t, n),
        l = i.error;
      if (!i.success && l === "errLoadSenderKeySession") {
        var s = await o("WASignalKeys").makeKeyPair();
        (await L({ saveSenderKeySession: a }, t, n, s), (i = await r(t, n)));
      }
      if (i.success) {
        var u = i.value.senderKeyStates.slice(-1);
        if (u.length > 0)
          return o("WAResultOrError").makeResult(
            o("WASignalGroupCipher").createSenderKeyDistributionProto(
              o("WASignalGroupSession").convertFromRawToSenderKeyState(u[0]),
            ),
          );
      }
      return (
        d("createSenderKeyDistributionMsg: errGetSenderKeyProto"),
        o("WAResultOrError").makeError("errGetSenderKeyProto")
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
      (l.establishOutgoingSession = p),
      (l.encryptContent = _),
      (l.decryptContent = f),
      (l.decryptMsgWithoutSaving = h),
      (l.encryptGroupContent = v),
      (l.decryptGroupContent = S),
      (l.saveSenderKeySession = R),
      (l.rotateGroupSenderKey = L),
      (l.createSenderKeyDistributionMsg = E));
  },
  98,
);
