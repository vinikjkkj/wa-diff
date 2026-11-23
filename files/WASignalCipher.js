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
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")("WASignalPQXDH").__setRef("WASignalCipher"),
      s = 40,
      u = 8,
      c = 2e3;
    async function d(e, t) {
      var n,
        r =
          (n = e.sessionVersion) != null
            ? n
            : o("WASignalSessions").FORMAT_VERSION,
        a = e.sendChain,
        i = await o("WASignalWhitepaper").deriveMsgKey(
          a.nextMsgIndex,
          a.chainKey,
        ),
        l = i[0],
        s = i[1],
        c = await R(s),
        d = c.cipherKey,
        m = c.macKey,
        p = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.encrypt({ name: "AES-CBC", iv: s.iv }, d, t),
        _ = new (o("WABinary").Binary)();
      (_.writeByteArray(e.local.pubKey), _.writeByteArray(e.remote.pubKey));
      var f = _.size(),
        g =
          o("WACryptoLibraryConfig").getCryptoLibraryConfig()
            .isPq1on1MessageEnabled === !0;
      (g === !0
        ? _.writeUint8(b(r, r))
        : _.writeUint8(
            b(
              o("WASignalSessions").FORMAT_VERSION,
              o("WASignalSessions").FORMAT_VERSION,
            ),
          ),
        o("encodeProtobuf").encodeProtobuf(
          o("WASignalWhisperTextProtocol.pb").SignalMessageSpec,
          {
            ratchetKey: a.ratchetKey.serializedPubKey,
            counter: s.index,
            previousCounter: e.prevSendChainHighestIndex,
            ciphertext: p,
          },
          _,
        ));
      var h = _.readByteArrayView(),
        y = await S(m, h),
        C = h.subarray(f),
        v = o("WABinary")
          .Binary.build(C, new Uint8Array(y, 0, u))
          .readByteArrayView(),
        L,
        E,
        k = e.initialExchangeInfo;
      if (k != null) {
        var I,
          T = new (o("WABinary").Binary)(),
          D =
            o("WACryptoLibraryConfig").getCryptoLibraryConfig()
              .isPq1on1MessageEnabled === !0;
        (D === !0
          ? T.writeUint8(b(r, r))
          : T.writeUint8(
              b(
                o("WASignalSessions").FORMAT_VERSION,
                o("WASignalSessions").FORMAT_VERSION,
              ),
            ),
          o("encodeProtobuf").encodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
            {
              registrationId: e.local.regId,
              preKeyId: (I = k.remoteOneTimeId) != null ? I : void 0,
              signedPreKeyId: k.remoteSignedId,
              baseKey: k.localOneTimePubKey,
              identityKey: e.local.pubKey,
              message: v,
              kyberPreKeyId:
                D && k.kyberPreKeyId != null ? k.kyberPreKeyId : void 0,
              kyberCiphertext:
                D && k.kemCiphertext != null ? k.kemCiphertext : void 0,
            },
            T,
          ),
          (L = "pkmsg"),
          (E = T.readByteArrayView()));
      } else ((L = "msg"), (E = v));
      var x = o("WASignalSessions").makeSendChain(a.ratchetKey, s.index + 1, l),
        $ = o("WASignalSessions").updateChains(e, e.recvChains, x);
      return [$, { type: L, ciphertext: E }];
    }
    async function m(e, t) {
      if (e == null)
        return o("WAResultOrError").makeError("errSignalNoSession");
      var n = await h(e, t);
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
            d = await h(c, t);
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
              g =
                !e ||
                !o("WACryptoUtils").serializedPubKeysEqual(
                  f.remote.pubKey,
                  e.remote.pubKey,
                )
                  ? f.remote.pubKey
                  : null;
            s = o("WAResultOrError").makeResult({
              newSessionInfo: {
                newIdentity: g,
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
    function p(e, t) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      var n = e;
      if (L(n, t)) return o("WAResultOrError").makeResult(n);
      for (var r = n.prevSessions, a = 0; a < r.length; a++) {
        var i = o("WASignalSessions").parseSession(r[a]);
        if (L(i, t))
          return o("WAResultOrError").makeError("errSignalInvalidMsg");
      }
      return o("WAResultOrError").makeResult(null);
    }
    async function _(t, n, r, a) {
      var i,
        l,
        u = a.localSignedPreKey;
      if (u == null)
        return o("WAResultOrError").makeError("errSignalInvalidSignedPreKey");
      var c = o("WASignalSignatures").deserializeSignedPreKey(u);
      if (c == null)
        return o("WAResultOrError").makeError(
          "errSignalSignedPreKeyDeserialization",
        );
      if (c.id !== r.localSignedPreKeyId)
        return o("WAResultOrError").makeError(
          "errSignalSignedPreKeyIdMismatch",
        );
      var d = null;
      if (r.localOneTimeKeyId != null) {
        var m = a.localOneTimeKey;
        if (m == null)
          return o("WAResultOrError").makeError("errSignalInvalidOneTimeKey");
        if (((d = o("WASignalKeys").deserializePreKey(m)), d == null))
          return o("WAResultOrError").makeError(
            "errSignalOneTimeKeyDeserialization",
          );
        if (d.id !== r.localOneTimeKeyId)
          return o("WAResultOrError").makeError("errSignalOneTimeKeyMismatch");
      }
      if (
        !o("WACryptoCurveKeyCanonicalCheck").isCanonical(
          r.sessionBaseKey.subarray(1),
        )
      )
        return o("WAResultOrError").makeError("errSignalBaseKeyIsNotCanonical");
      var p = (i = (l = d) == null ? void 0 : l.keyPair) != null ? i : null,
        _ = {
          signed: c.keyPair,
          oneTime: p,
          ratchet: o("WASignalKeys").toSerializedKeyPair(c.keyPair),
        },
        f;
      if (
        r.kyberCiphertext != null &&
        r.kyberPreKeyId != null &&
        a.localKyberPreKey != null
      ) {
        var g = a.localKyberPreKey.secretKey,
          y = r.kyberCiphertext;
        try {
          var C = await e.load(),
            b = C.initiateSessionIncomingPQ;
          f = await b(t, r.remote, r.sessionBaseKey, _, g, y);
        } catch (e) {
          return o("WAResultOrError").makeError(
            "errSignalPQXDHDecapsulationFailed",
          );
        }
      } else
        f = await o("WASignalWhitepaper").initiateSessionIncoming(
          t,
          r.remote,
          r.sessionBaseKey,
          _,
        );
      var v = f.remote.pubKey,
        S =
          !n || !o("WACryptoUtils").serializedPubKeysEqual(v, n.remote.pubKey)
            ? v
            : null;
      n &&
        !S &&
        (f = o("WASignalSessions").setPrevSessions(
          f,
          [o("WASignalSessions").detachSession(n)].concat(
            n.prevSessions.slice(0, s - 1),
          ),
        ));
      var R = await h(f, r);
      if (!R.success) return R;
      var L = R.value,
        E = L[0],
        k = L[1];
      return o("WAResultOrError").makeResult({
        newIdentity: S,
        baseSession: f,
        updatedSession: E,
        plaintext: k,
      });
    }
    function f(e) {
      var t,
        n,
        r = null;
      try {
        var a = C(
          e,
          o("WASignalSessions").FORMAT_VERSION,
          u,
          o("WASignalSessions").PQXDH_FORMAT_VERSION,
        );
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
      var s = {
        ratchetPubKey: t,
        counter: r,
        ciphertext: new Uint8Array(n),
        versionContentMac: e,
      };
      return o("WAResultOrError").makeResult(s);
    }
    function g(e) {
      var t = C(
        e,
        o("WASignalSessions").FORMAT_VERSION,
        0,
        o("WASignalSessions").PQXDH_FORMAT_VERSION,
      );
      if (!t.success) return t;
      var n, r, a, i, l, s, u;
      try {
        var c = o("decodeProtobuf").decodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
            t.value,
          ),
          d = c.baseKey,
          m = c.identityKey,
          p = c.message,
          _ = c.preKeyId,
          g = c.registrationId,
          h = c.signedPreKeyId;
        if (g == null || h == null || d == null || m == null || p == null)
          return o("WAResultOrError").makeError(
            "errSignalDeserializePkInvalidProtoFormat",
          );
        ((i = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(d))),
          (n = {
            regId: o("WASignalOther").castRegistrationId(g),
            pubKey: o("WASignalKeys").castToSerializedPubKey(new Uint8Array(m)),
          }),
          (a = _ != null ? o("WASignalKeys").castToPreKeyId(_) : null),
          (r = o("WASignalKeys").castToSignedPreKeyId(h)),
          (l = new Uint8Array(p)),
          (s = c.kyberPreKeyId != null ? c.kyberPreKeyId : null),
          (u =
            c.kyberCiphertext != null
              ? new Uint8Array(c.kyberCiphertext)
              : null));
      } catch (e) {
        return o("WAResultOrError").makeError(
          "errSignalDeserializePkKeyBadFormat",
        );
      }
      var y = f(l);
      return y.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, y.value, {
              remote: n,
              sessionBaseKey: i,
              localSignedPreKeyId: r,
              localOneTimeKeyId: a,
              kyberPreKeyId: s,
              kyberCiphertext: u,
            }),
          )
        : y;
    }
    async function h(e, t) {
      var n = t.ciphertext,
        a = t.counter,
        i = t.ratchetPubKey,
        l = t.versionContentMac,
        s = e.recvChains,
        c = e.recvChains.findIndex(function (e) {
          return o("WACryptoUtils").serializedPubKeysEqual(e.ratchetPubKey, i);
        }),
        d,
        m;
      if (c === -1) {
        var p = await o("WASignalWhitepaper").calculateRatchet(
            e.rootKey,
            e.sendChain.ratchetKey,
            i,
          ),
          _ = o("WASignalSessions").makeFreshRecvChain(i, p.chainKey),
          f = await y(_, a);
        if (!f.success) return f;
        var g = f.value,
          h = r("gkx")("28506")
            ? await o("WASignalKeys").makeSerializedKeyPairAsync()
            : o("WASignalKeys").makeSerializedKeyPair(),
          C = await o("WASignalWhitepaper").calculateRatchet(p.rootKey, h, i),
          b = s.slice(-4);
        (b.push(g.updatedChain),
          (m = g.msgKey),
          (d = o("WASignalSessions").ratchetSession(
            e,
            b,
            o("WASignalSessions").makeFreshSendChain(h, C.chainKey),
            C.rootKey,
          )));
      } else {
        var v = await y(s[c], a);
        if (!v.success) return v;
        var L = v.value,
          E = s.slice();
        ((E[c] = L.updatedChain),
          (m = L.msgKey),
          (d = o("WASignalSessions").updateChains(e, E, e.sendChain)));
      }
      var k = await R(m),
        I = k.cipherKey,
        T = k.macKey,
        D = o("WABinary")
          .Binary.build(e.remote.pubKey, e.local.pubKey, l.subarray(0, -u))
          .readByteArrayView(),
        x = await S(T, D),
        $ = l.subarray(-u),
        P = !o("WACryptoUtils").uint8ArraysEqual(new Uint8Array(x, 0, u), $),
        N = null;
      try {
        N = await o("WACryptoDependencies")
          .getCrypto()
          .subtle.decrypt({ name: "AES-CBC", iv: m.iv }, I, n);
      } catch (e) {}
      return P && N == null
        ? c === -1
          ? o("WAResultOrError").makeError(
              "errInvalidMacInvalidCipherKeyNewChain",
            )
          : o("WAResultOrError").makeError("errInvalidMacInvalidCipherKey")
        : P
          ? o("WAResultOrError").makeError(
              "errInvalidMacWithDecryptedPlaintext",
            )
          : N == null
            ? o("WAResultOrError").makeError("errUnknownInvalidCipherKey")
            : o("WAResultOrError").makeResult([d, N]);
    }
    async function y(e, t) {
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
                v(a, i),
              ),
            });
      }
      var l = e.nextMsgIndex,
        s = await o("WASignalWhitepaper").deriveMsgKey(l, e.chainKey),
        u = s[0],
        d = s[1],
        m = null;
      if (n > 0) {
        var p = n + a.length - c;
        p > 0 ? ((m = a.slice(p)), (p -= a.length)) : (m = a.slice());
        for (var _ = l + 1; _ <= t; _++) {
          p > 0 ? p-- : m.push(d);
          var f = await o("WASignalWhitepaper").deriveMsgKey(_, u);
          ((u = f[0]), (d = f[1]));
        }
      }
      return o("WAResultOrError").makeResult({
        msgKey: d,
        updatedChain: o("WASignalSessions").makeRecvChain(
          e.ratchetPubKey,
          t + 1,
          u,
          m || a,
        ),
      });
    }
    function C(e, t, n, r) {
      if (e.length < 1)
        return o("WAResultOrError").makeError(
          "errSignalEmptyVersionContentSuffix",
        );
      var a = r != null ? r : t,
        i = e[0] >>> 4;
      if (i < t || i > a)
        return i < t
          ? o("WAResultOrError").makeError("errSignalLegacyMsg")
          : o("WAResultOrError").makeError("errSignalInvalidVersion");
      var l = e.length - n;
      return l < 1
        ? o("WAResultOrError").makeError(
            "errSignalContentExceededExpectedLength",
          )
        : o("WAResultOrError").makeResult(e.subarray(1, l));
    }
    function b(e, t) {
      return ((e << 4) | t) & 255;
    }
    function v(e, t) {
      for (var n = [], r = 0; r < e.length; r++) r !== t && n.push(e[r]);
      return n;
    }
    function S(e, t) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.sign(o("WASignalOther").HMAC_SHA256, e, t);
    }
    function R(e) {
      return Promise.all([
        o("WASignalOther").makeCryptoKey(e.cipherKey, "aes-cbc"),
        o("WASignalOther").makeCryptoKey(e.macKey, "hmac-sha256"),
      ]).then(function (e) {
        var t = e[0],
          n = e[1];
        return { cipherKey: t, macKey: n };
      });
    }
    function L(e, t) {
      var n = e.aliceBaseKey;
      return n ? o("WACryptoUtils").serializedPubKeysEqual(n, t) : !1;
    }
    ((l.MAX_UNUSED_KEYS = c),
      (l.encryptMsg = d),
      (l.decryptMsg = m),
      (l.findMatchingSession = p),
      (l.decryptPkMsgWithNewSession = _),
      (l.deserializeMsg = f),
      (l.deserializePkMsg = g),
      (l.decryptMsgFromSession = h),
      (l.readContent = C),
      (l.versionByte = b));
  },
  98,
);
