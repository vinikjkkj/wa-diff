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
    async function m(e, t, n) {
      d("createOutgoingSession");
      var r = S(t),
        a = r.signedKey,
        i = await o("WASignalSignatures").verifyMsgSignalVariant(
          r.identity,
          a.publicKey,
          a.signature,
        );
      if (!i)
        return (
          d("createOutgoingSession: errSignalInvalidKey"),
          o("WAResultOrError").makeError("errSignalInvalidKey")
        );
      n === !0 &&
        (await new Promise(function (e) {
          globalThis.setTimeout(e, 0);
        }));
      var l = await o("WASignalWhitepaper").initiateSessionOutgoing(
        e,
        r,
        o("WASignalKeys").makeKeyPair(),
      );
      return o("WAResultOrError").makeResult(l);
    }
    async function p(e, t, n, r, o, a) {
      var i = e.handleNewSession;
      d("establishOutgoingSession");
      var l = await m(t, r, a);
      if (!l.success) return l;
      var s = l.value;
      return i(n, s, s.remote.pubKey, null, o);
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
      var i = e.handleNewSession,
        l = e.loadOneTimePreKey,
        u = e.loadSession,
        c = e.loadSignedPreKey;
      return (
        d("decryptContent"),
        s.lock([o("WAJids").extractUserJid(n)], async function () {
          var e = !1,
            s = await u(n, "decryptContent"),
            m;
          if (r.type === "pkmsg") {
            var p = o("WASignalCipher").deserializePkMsg(r.ciphertext);
            if (!p.success)
              return (
                d("decryptContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var _ = p.value,
              f = await g(
                { loadSignedPreKey: c, loadOneTimePreKey: l },
                t,
                _,
                s,
              );
            if (!f.success) return f;
            m = f.value;
          } else {
            r.type;
            var h = o("WASignalCipher").deserializeMsg(r.ciphertext);
            if (!h.success)
              return (
                d("decryptContent: errCryptoDeserialization"),
                o("WAResultOrError").makeError("errCryptoDeserialization")
              );
            var y = h.value,
              C = await o("WASignalCipher").decryptMsg(s, y);
            if (!C.success) return C;
            m = C.value;
          }
          var b = m,
            v = b.newSessionInfo;
          if (
            (v &&
              (v.newIdentity != null || v.usedPreKey != null) &&
              (await i(n, v.baseSession, v.newIdentity, v.usedPreKey)),
            !e)
          ) {
            var S = v == null ? void 0 : v.baseSession.remote.pubKey;
            (await a(new Uint8Array(m.plaintext), S), (e = !0));
          }
          return (
            await i(n, m.updatedSession, m.updatedSession.remote.pubKey),
            o("WAResultOrError").makeResult()
          );
        })
      );
    }
    async function g(e, t, n, r) {
      var a = e.loadOneTimePreKey,
        i = e.loadSignedPreKey;
      d("decryptPkMsg");
      var l = o("WASignalCipher").findMatchingSession(r, n.sessionBaseKey);
      if (!l.success) return l;
      var s = l.value;
      if (s) {
        var u = await o("WASignalCipher").decryptMsgFromSession(s, n);
        if (!u.success) return u;
        var c = u.value,
          m = c[0],
          p = c[1];
        return o("WAResultOrError").makeResult({
          newSessionInfo: null,
          updatedSession: m,
          plaintext: p,
        });
      } else {
        var _ = n.localOneTimeKeyId,
          f = await i(n.localSignedPreKeyId),
          g = _ == null ? null : await a(_),
          h = await o("WASignalCipher").decryptPkMsgWithNewSession(t, r, n, {
            localSignedPreKey: f,
            localOneTimeKey: g,
          });
        if (!h.success) return h;
        var y = h.value,
          C = y.baseSession,
          b = y.newIdentity,
          v = y.plaintext,
          S = y.updatedSession;
        return o("WAResultOrError").makeResult({
          newSessionInfo: { newIdentity: b, baseSession: C, usedPreKey: _ },
          updatedSession: S,
          plaintext: v,
        });
      }
    }
    function h(e, t, n, r) {
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
              await i(t, n, m);
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
    function y(t, n, r, a, i) {
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
            await u(n, r, f),
            o("WAResultOrError").makeResult()
          );
        })
      );
    }
    function C(e, t, n, r) {
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
          return (await i(t, n, u), o("WAResultOrError").makeResult());
        })
      );
    }
    function b(e, t, n, r) {
      var a = e.saveSenderKeySession;
      return (
        d("rotateGroupSenderKey"),
        s.lock([t, o("WAJids").extractUserJid(n)], async function () {
          var e =
              await o("WASignalWhitepaper").initiateSenderKeySessionOutgoing(r),
            i = e.senderKeyStates[0].senderKeyId;
          return (await a(t, n, e), { senderKeyId: i });
        })
      );
    }
    async function v(e, t, n) {
      var r = e.loadSenderKeySession,
        a = e.saveSenderKeySession;
      d("createSenderKeyDistributionMsg");
      var i = await r(t, n),
        l = i.error;
      if (!i.success && l === "errLoadSenderKeySession") {
        var s = await o("WASignalKeys").makeKeyPair();
        (await b({ saveSenderKeySession: a }, t, n, s), (i = await r(t, n)));
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
    function S(e) {
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
      (l.encryptGroupContent = h),
      (l.decryptGroupContent = y),
      (l.saveSenderKeySession = C),
      (l.rotateGroupSenderKey = b),
      (l.createSenderKeyDistributionMsg = v));
  },
  98,
);
