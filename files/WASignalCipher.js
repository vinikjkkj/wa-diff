__d(
  "WASignalCipher",
  [
    "WABinary",
    "WACryptoCurveKeyCanonicalCheck",
    "WACryptoDependencies",
    "WACryptoLibraryConfig",
    "WACryptoUtils",
    "WAResultOrError",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalSignatures",
    "WASignalWhisperTextProtocol.pb",
    "WASignalWhitepaper",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 40,
      s = 8,
      u = 2e3;
    async function c(e, t) {
      var n = e.sendChain,
        r = await o("WASignalWhitepaper").deriveMsgKey(
          n.nextMsgIndex,
          n.chainKey,
        ),
        a = r[0],
        i = r[1],
        l = await S(i),
        u = l.cipherKey,
        c = l.macKey,
        d = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.encrypt({ name: "AES-CBC", iv: i.iv }, u, t),
        m = new (o("WABinary").Binary)();
      (m.writeByteArray(e.local.pubKey), m.writeByteArray(e.remote.pubKey));
      var p = m.size();
      (m.writeUint8(
        C(
          o("WASignalSessions").FORMAT_VERSION,
          o("WASignalSessions").FORMAT_VERSION,
        ),
      ),
        o("encodeProtobuf").encodeProtobuf(
          o("WASignalWhisperTextProtocol.pb").SignalMessageSpec,
          {
            ratchetKey: n.ratchetKey.serializedPubKey,
            counter: i.index,
            previousCounter: e.prevSendChainHighestIndex,
            ciphertext: d,
          },
          m,
        ));
      var _ = m.readByteArrayView(),
        f = await v(c, _),
        g = _.subarray(p),
        h = o("WABinary")
          .Binary.build(g, new Uint8Array(f, 0, s))
          .readByteArrayView(),
        y,
        b,
        R = e.initialExchangeInfo;
      if (R != null) {
        var L,
          E = new (o("WABinary").Binary)();
        (E.writeUint8(
          C(
            o("WASignalSessions").FORMAT_VERSION,
            o("WASignalSessions").FORMAT_VERSION,
          ),
        ),
          o("encodeProtobuf").encodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
            {
              registrationId: e.local.regId,
              preKeyId: (L = R.remoteOneTimeId) != null ? L : void 0,
              signedPreKeyId: R.remoteSignedId,
              baseKey: R.localOneTimePubKey,
              identityKey: e.local.pubKey,
              message: h,
            },
            E,
          ),
          (y = "pkmsg"),
          (b = E.readByteArrayView()));
      } else ((y = "msg"), (b = h));
      var k = o("WASignalSessions").makeSendChain(n.ratchetKey, i.index + 1, a),
        I = o("WASignalSessions").updateChains(e, e.recvChains, k);
      return [I, { type: y, ciphertext: b }];
    }
    async function d(e, t) {
      if (e == null)
        return o("WAResultOrError").makeError("errSignalNoSession");
      var n = await g(e, t);
      if (n.success) {
        var r = n.value,
          a = r[0],
          i = r[1];
        return o("WAResultOrError").makeResult({
          newSessionInfo: null,
          updatedSession: a,
          plaintext: i,
        });
      } else {
        for (
          var l = e.prevSessions, s = n, u = 0;
          !s.success && u < l.length;
          u++
        ) {
          var c = o("WASignalSessions").maybeClearPendingPreKey(
              o("WASignalSessions").parseSession(l[u]),
            ),
            d = await g(c, t);
          if (d.success) {
            var m = d.value,
              p = m[0],
              _ = m[1],
              f = o("WASignalSessions").setPrevSessions(
                p,
                [o("WASignalSessions").detachSession(e)].concat(
                  l.slice(0, u),
                  l.slice(u + 1),
                ),
              ),
              h =
                !e ||
                !o("WACryptoUtils").serializedPubKeysEqual(
                  f.remote.pubKey,
                  e.remote.pubKey,
                )
                  ? f.remote.pubKey
                  : null;
            s = o("WAResultOrError").makeResult({
              newSessionInfo: {
                newIdentity: h,
                baseSession: c,
                usedPreKey: null,
              },
              updatedSession: f,
              plaintext: _,
            });
          }
        }
        return s;
      }
    }
    function m(e, t) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      var n = e;
      if (R(n, t)) return o("WAResultOrError").makeResult(n);
      for (var r = n.prevSessions, a = 0; a < r.length; a++) {
        var i = o("WASignalSessions").parseSession(r[a]);
        if (R(i, t))
          return o("WAResultOrError").makeError("errSignalInvalidMsg");
      }
      return o("WAResultOrError").makeResult(null);
    }
    async function p(t, n, r, a) {
      var i,
        l = a.localSignedPreKey;
      if (l == null)
        return o("WAResultOrError").makeError("errSignalInvalidSignedPreKey");
      var s = o("WASignalSignatures").deserializeSignedPreKey(l);
      if (s == null)
        return o("WAResultOrError").makeError(
          "errSignalSignedPreKeyDeserialization",
        );
      if (s.id !== r.localSignedPreKeyId)
        return o("WAResultOrError").makeError(
          "errSignalSignedPreKeyIdMismatch",
        );
      var u = null;
      if (r.localOneTimeKeyId != null) {
        var c = a.localOneTimeKey;
        if (c == null)
          return o("WAResultOrError").makeError("errSignalInvalidOneTimeKey");
        if (((u = o("WASignalKeys").deserializePreKey(c)), u == null))
          return o("WAResultOrError").makeError(
            "errSignalOneTimeKeyDeserialization",
          );
        if (u.id !== r.localOneTimeKeyId)
          return o("WAResultOrError").makeError("errSignalOneTimeKeyMismatch");
      }
      if (
        !o("WACryptoCurveKeyCanonicalCheck").isCanonical(
          r.sessionBaseKey.subarray(1),
        )
      )
        return o("WAResultOrError").makeError("errSignalBaseKeyIsNotCanonical");
      var d = await o("WASignalWhitepaper").initiateSessionIncoming(
          t,
          r.remote,
          r.sessionBaseKey,
          {
            signed: s.keyPair,
            oneTime: (i = u) == null ? void 0 : i.keyPair,
            ratchet: o("WASignalKeys").toSerializedKeyPair(s.keyPair),
          },
        ),
        m = d.remote.pubKey,
        p =
          !n || !o("WACryptoUtils").serializedPubKeysEqual(m, n.remote.pubKey)
            ? m
            : null;
      n &&
        !p &&
        (d = o("WASignalSessions").setPrevSessions(
          d,
          [o("WASignalSessions").detachSession(n)].concat(
            n.prevSessions.slice(0, e - 1),
          ),
        ));
      var _ = await g(d, r);
      if (!_.success) return _;
      var f = _.value,
        h = f[0],
        y = f[1];
      return o("WAResultOrError").makeResult({
        newIdentity: p,
        baseSession: d,
        updatedSession: h,
        plaintext: y,
      });
    }
    function _(e) {
      var t,
        n,
        r = null;
      try {
        var a = y(e, o("WASignalSessions").FORMAT_VERSION, s);
        if (!a.success) return a;
        var i = o("decodeProtobuf").decodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").SignalMessageSpec,
            a.value,
          ),
          l = i.ratchetKey;
        if (
          ((r = i.counter),
          (n = i.ciphertext),
          l == null || r == null || n == null)
        )
          return o("WAResultOrError").makeError(
            "errSignalDeserializeInvalidProtoFormat",
          );
        t = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(l));
      } catch (e) {
        return o("WAResultOrError").makeError(
          "errSignalDeserializeRatchetKeyBadFormat",
        );
      }
      var u = {
        ratchetPubKey: t,
        counter: r,
        ciphertext: new Uint8Array(n),
        versionContentMac: e,
      };
      return o("WAResultOrError").makeResult(u);
    }
    function f(e) {
      var t = y(e, o("WASignalSessions").FORMAT_VERSION, 0);
      if (!t.success) return t;
      var n, r, a, i, l;
      try {
        var s = o("decodeProtobuf").decodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
            t.value,
          ),
          u = s.baseKey,
          c = s.identityKey,
          d = s.message,
          m = s.preKeyId,
          p = s.registrationId,
          f = s.signedPreKeyId;
        if (p == null || f == null || u == null || c == null || d == null)
          return o("WAResultOrError").makeError(
            "errSignalDeserializePkInvalidProtoFormat",
          );
        ((i = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(u))),
          (n = {
            regId: o("WASignalOther").castRegistrationId(p),
            pubKey: o("WASignalKeys").castToSerializedPubKey(new Uint8Array(c)),
          }),
          (a = m != null ? o("WASignalKeys").castToPreKeyId(m) : null),
          (r = o("WASignalKeys").castToSignedPreKeyId(f)),
          (l = new Uint8Array(d)));
      } catch (e) {
        return o("WAResultOrError").makeError(
          "errSignalDeserializePkKeyBadFormat",
        );
      }
      var g = _(l);
      return g.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, g.value, {
              remote: n,
              sessionBaseKey: i,
              localSignedPreKeyId: r,
              localOneTimeKeyId: a,
            }),
          )
        : g;
    }
    async function g(e, t) {
      var n = t.ciphertext,
        r = t.counter,
        a = t.ratchetPubKey,
        i = t.versionContentMac,
        l = e.recvChains,
        u = e.recvChains.findIndex(function (e) {
          return o("WACryptoUtils").serializedPubKeysEqual(e.ratchetPubKey, a);
        }),
        c,
        d;
      if (u === -1) {
        var m = await o("WASignalWhitepaper").calculateRatchet(
            e.rootKey,
            e.sendChain.ratchetKey,
            a,
          ),
          p = o("WASignalSessions").makeFreshRecvChain(a, m.chainKey),
          _ = await h(p, r);
        if (!_.success) return _;
        var f = _.value,
          g = o("WASignalKeys").makeSerializedKeyPair(),
          y = await o("WASignalWhitepaper").calculateRatchet(m.rootKey, g, a),
          C = l.slice(-4);
        (C.push(f.updatedChain),
          (d = f.msgKey),
          (c = o("WASignalSessions").ratchetSession(
            e,
            C,
            o("WASignalSessions").makeFreshSendChain(g, y.chainKey),
            y.rootKey,
          )));
      } else {
        var b = await h(l[u], r);
        if (!b.success) return b;
        var R = b.value,
          L = l.slice();
        ((L[u] = R.updatedChain),
          (d = R.msgKey),
          (c = o("WASignalSessions").updateChains(e, L, e.sendChain)));
      }
      var E = await S(d),
        k = E.cipherKey,
        I = E.macKey,
        T = o("WABinary")
          .Binary.build(e.remote.pubKey, e.local.pubKey, i.subarray(0, -s))
          .readByteArrayView(),
        D = await v(I, T),
        x = i.subarray(-s),
        $ = !o("WACryptoUtils").uint8ArraysEqual(new Uint8Array(D, 0, s), x),
        P = null;
      try {
        P = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.decrypt({ name: "AES-CBC", iv: d.iv }, k, n);
      } catch (e) {}
      return $ && P == null
        ? u === -1
          ? o("WAResultOrError").makeError(
              "errInvalidMacInvalidCipherKeyNewChain",
            )
          : o("WAResultOrError").makeError("errInvalidMacInvalidCipherKey")
        : $
          ? o("WAResultOrError").makeError(
              "errInvalidMacWithDecryptedPlaintext",
            )
          : P == null
            ? o("WAResultOrError").makeError("errUnknownInvalidCipherKey")
            : o("WAResultOrError").makeResult([c, P]);
    }
    async function h(e, t) {
      var n = t - e.nextMsgIndex,
        r = o("WACryptoLibraryConfig").getCryptoLibraryConfig()
          .signalFutureMessagesMax;
      if (n > r)
        return o("WAResultOrError").makeError(
          "errSignalTooManyMessagesInFuture",
        );
      var a = e.unusedMsgKeys;
      if (n < 0) {
        var i = a.findIndex(function (e) {
          return e.index === t;
        });
        return i === -1
          ? o("WAResultOrError").makeError("errDuplicateMsg")
          : o("WAResultOrError").makeResult({
              msgKey: a[i],
              updatedChain: o("WASignalSessions").makeRecvChain(
                e.ratchetPubKey,
                e.nextMsgIndex,
                e.chainKey,
                b(a, i),
              ),
            });
      }
      var l = e.nextMsgIndex,
        s = await o("WASignalWhitepaper").deriveMsgKey(l, e.chainKey),
        c = s[0],
        d = s[1],
        m = null;
      if (n > 0) {
        var p = n + a.length - u;
        p > 0 ? ((m = a.slice(p)), (p -= a.length)) : (m = a.slice());
        for (var _ = l + 1; _ <= t; _++) {
          p > 0 ? p-- : m.push(d);
          var f = await o("WASignalWhitepaper").deriveMsgKey(_, c);
          ((c = f[0]), (d = f[1]));
        }
      }
      return o("WAResultOrError").makeResult({
        msgKey: d,
        updatedChain: o("WASignalSessions").makeRecvChain(
          e.ratchetPubKey,
          t + 1,
          c,
          m || a,
        ),
      });
    }
    function y(e, t, n) {
      if (e.length < 1)
        return o("WAResultOrError").makeError(
          "errSignalEmptyVersionContentSuffix",
        );
      var r = e[0] >>> 4;
      if (r !== t)
        return r < t
          ? o("WAResultOrError").makeError("errSignalLegacyMsg")
          : o("WAResultOrError").makeError("errSignalInvalidVersion");
      var a = e.length - n;
      return a < 1
        ? o("WAResultOrError").makeError(
            "errSignalContentExceededExpectedLength",
          )
        : o("WAResultOrError").makeResult(e.subarray(1, a));
    }
    function C(e, t) {
      return ((e << 4) | t) & 255;
    }
    function b(e, t) {
      for (var n = [], r = 0; r < e.length; r++) r !== t && n.push(e[r]);
      return n;
    }
    function v(e, t) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.sign(o("WASignalOther").HMAC_SHA256, e, t);
    }
    function S(e) {
      return Promise.all([
        o("WASignalOther").makeCryptoKey(e.cipherKey, "aes-cbc"),
        o("WASignalOther").makeCryptoKey(e.macKey, "hmac-sha256"),
      ]).then(function (e) {
        var t = e[0],
          n = e[1];
        return { cipherKey: t, macKey: n };
      });
    }
    function R(e, t) {
      var n = e.aliceBaseKey;
      return n ? o("WACryptoUtils").serializedPubKeysEqual(n, t) : !1;
    }
    ((l.MAX_UNUSED_KEYS = u),
      (l.encryptMsg = c),
      (l.decryptMsg = d),
      (l.findMatchingSession = m),
      (l.decryptPkMsgWithNewSession = p),
      (l.deserializeMsg = _),
      (l.deserializePkMsg = f),
      (l.decryptMsgFromSession = g),
      (l.readContent = y),
      (l.versionByte = C));
  },
  98,
);
