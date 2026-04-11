__d(
  "WASignalCipher",
  [
    "Promise",
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
    "asyncToGeneratorRuntime",
    "decodeProtobuf",
    "encodeProtobuf",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 40,
      u = 8,
      c = 2e3;
    function d(e, t) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e.sendChain,
            r = yield o("WASignalWhitepaper").deriveMsgKey(
              n.nextMsgIndex,
              n.chainKey,
            ),
            a = r[0],
            i = r[1],
            l = yield T(i),
            s = l.cipherKey,
            c = l.macKey,
            d = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.encrypt({ name: "AES-CBC", iv: i.iv }, s, t),
            m = new (o("WABinary").Binary)();
          (m.writeByteArray(e.local.pubKey), m.writeByteArray(e.remote.pubKey));
          var p = m.size();
          (m.writeUint8(
            E(
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
            f = yield I(c, _),
            g = _.subarray(p),
            h = o("WABinary")
              .Binary.build(g, new Uint8Array(f, 0, u))
              .readByteArrayView(),
            y,
            C,
            b = e.initialExchangeInfo;
          if (b != null) {
            var v,
              S = new (o("WABinary").Binary)();
            (S.writeUint8(
              E(
                o("WASignalSessions").FORMAT_VERSION,
                o("WASignalSessions").FORMAT_VERSION,
              ),
            ),
              o("encodeProtobuf").encodeProtobuf(
                o("WASignalWhisperTextProtocol.pb").PreKeySignalMessageSpec,
                {
                  registrationId: e.local.regId,
                  preKeyId: (v = b.remoteOneTimeId) != null ? v : void 0,
                  signedPreKeyId: b.remoteSignedId,
                  baseKey: b.localOneTimePubKey,
                  identityKey: e.local.pubKey,
                  message: h,
                },
                S,
              ),
              (y = "pkmsg"),
              (C = S.readByteArrayView()));
          } else ((y = "msg"), (C = h));
          var R = o("WASignalSessions").makeSendChain(
              n.ratchetKey,
              i.index + 1,
              a,
            ),
            L = o("WASignalSessions").updateChains(e, e.recvChains, R);
          return [L, { type: y, ciphertext: C }];
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null)
            return o("WAResultOrError").makeError("errSignalNoSession");
          var n = yield b(e, t);
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
                d = yield b(c, t);
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
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      var n = e;
      if (D(n, t)) return o("WAResultOrError").makeResult(n);
      for (var r = n.prevSessions, a = 0; a < r.length; a++) {
        var i = o("WASignalSessions").parseSession(r[a]);
        if (D(i, t))
          return o("WAResultOrError").makeError("errSignalInvalidMsg");
      }
      return o("WAResultOrError").makeResult(null);
    }
    function g(e, t, n, r) {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i = r.localSignedPreKey;
            if (i == null)
              return o("WAResultOrError").makeError(
                "errSignalInvalidSignedPreKey",
              );
            var l = o("WASignalSignatures").deserializeSignedPreKey(i);
            if (l == null)
              return o("WAResultOrError").makeError(
                "errSignalSignedPreKeyDeserialization",
              );
            if (l.id !== n.localSignedPreKeyId)
              return o("WAResultOrError").makeError(
                "errSignalSignedPreKeyIdMismatch",
              );
            var u = null;
            if (n.localOneTimeKeyId != null) {
              var c = r.localOneTimeKey;
              if (c == null)
                return o("WAResultOrError").makeError(
                  "errSignalInvalidOneTimeKey",
                );
              if (((u = o("WASignalKeys").deserializePreKey(c)), u == null))
                return o("WAResultOrError").makeError(
                  "errSignalOneTimeKeyDeserialization",
                );
              if (u.id !== n.localOneTimeKeyId)
                return o("WAResultOrError").makeError(
                  "errSignalOneTimeKeyMismatch",
                );
            }
            if (
              o("WACryptoLibraryConfig").getCryptoLibraryConfig()
                .baseKeyCanonicalCheck &&
              !o("WACryptoCurveKeyCanonicalCheck").isCanonical(
                n.sessionBaseKey.subarray(1),
              )
            )
              return o("WAResultOrError").makeError(
                "errSignalBaseKeyIsNotCanonical",
              );
            var d = yield o("WASignalWhitepaper").initiateSessionIncoming(
                e,
                n.remote,
                n.sessionBaseKey,
                {
                  signed: l.keyPair,
                  oneTime: (a = u) == null ? void 0 : a.keyPair,
                  ratchet: o("WASignalKeys").toSerializedKeyPair(l.keyPair),
                },
              ),
              m = d.remote.pubKey,
              p =
                !t ||
                !o("WACryptoUtils").serializedPubKeysEqual(m, t.remote.pubKey)
                  ? m
                  : null;
            t &&
              !p &&
              (d = o("WASignalSessions").setPrevSessions(
                d,
                [o("WASignalSessions").detachSession(t)].concat(
                  t.prevSessions.slice(0, s - 1),
                ),
              ));
            var _ = yield b(d, n);
            if (!_.success) return _;
            var f = _.value,
              g = f[0],
              h = f[1];
            return o("WAResultOrError").makeResult({
              newIdentity: p,
              baseSession: d,
              updatedSession: g,
              plaintext: h,
            });
          },
        )),
        h.apply(this, arguments)
      );
    }
    function y(e) {
      var t,
        n,
        r = null;
      try {
        var a = L(e, o("WASignalSessions").FORMAT_VERSION, u);
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
    function C(e) {
      var t = L(e, o("WASignalSessions").FORMAT_VERSION, 0);
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
          _ = s.signedPreKeyId;
        if (p == null || _ == null || u == null || c == null || d == null)
          return o("WAResultOrError").makeError(
            "errSignalDeserializePkInvalidProtoFormat",
          );
        ((i = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(u))),
          (n = {
            regId: o("WASignalOther").castRegistrationId(p),
            pubKey: o("WASignalKeys").castToSerializedPubKey(new Uint8Array(c)),
          }),
          (a = m != null ? o("WASignalKeys").castToPreKeyId(m) : null),
          (r = o("WASignalKeys").castToSignedPreKeyId(_)),
          (l = new Uint8Array(d)));
      } catch (e) {
        return o("WAResultOrError").makeError(
          "errSignalDeserializePkKeyBadFormat",
        );
      }
      var f = y(l);
      return f.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, f.value, {
              remote: n,
              sessionBaseKey: i,
              localSignedPreKeyId: r,
              localOneTimeKeyId: a,
            }),
          )
        : f;
    }
    function b(e, t) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = t.ciphertext,
            r = t.counter,
            a = t.ratchetPubKey,
            i = t.versionContentMac,
            l = e.recvChains,
            s = e.recvChains.findIndex(function (e) {
              return o("WACryptoUtils").serializedPubKeysEqual(
                e.ratchetPubKey,
                a,
              );
            }),
            c,
            d;
          if (s === -1) {
            var m = yield o("WASignalWhitepaper").calculateRatchet(
                e.rootKey,
                e.sendChain.ratchetKey,
                a,
              ),
              p = o("WASignalSessions").makeFreshRecvChain(a, m.chainKey),
              _ = yield S(p, r);
            if (!_.success) return _;
            var f = _.value,
              g = o("WASignalKeys").makeSerializedKeyPair(),
              h = yield o("WASignalWhitepaper").calculateRatchet(
                m.rootKey,
                g,
                a,
              ),
              y = l.slice(-4);
            (y.push(f.updatedChain),
              (d = f.msgKey),
              (c = o("WASignalSessions").ratchetSession(
                e,
                y,
                o("WASignalSessions").makeFreshSendChain(g, h.chainKey),
                h.rootKey,
              )));
          } else {
            var C = yield S(l[s], r);
            if (!C.success) return C;
            var b = C.value,
              v = l.slice();
            ((v[s] = b.updatedChain),
              (d = b.msgKey),
              (c = o("WASignalSessions").updateChains(e, v, e.sendChain)));
          }
          var R = yield T(d),
            L = R.cipherKey,
            E = R.macKey,
            k = o("WABinary")
              .Binary.build(e.remote.pubKey, e.local.pubKey, i.subarray(0, -u))
              .readByteArrayView(),
            D = yield I(E, k),
            x = i.subarray(-u),
            $ = !o("WACryptoUtils").uint8ArraysEqual(
              new Uint8Array(D, 0, u),
              x,
            ),
            P = null;
          try {
            P = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.decrypt({ name: "AES-CBC", iv: d.iv }, L, n);
          } catch (e) {}
          return $ && P == null
            ? s === -1
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
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                    k(a, i),
                  ),
                });
          }
          var l = e.nextMsgIndex,
            s = yield o("WASignalWhitepaper").deriveMsgKey(l, e.chainKey),
            u = s[0],
            d = s[1],
            m = null;
          if (n > 0) {
            var p = n + a.length - c;
            p > 0 ? ((m = a.slice(p)), (p -= a.length)) : (m = a.slice());
            for (var _ = l + 1; _ <= t; _++) {
              p > 0 ? p-- : m.push(d);
              var f = yield o("WASignalWhitepaper").deriveMsgKey(_, u);
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
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t, n) {
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
    function E(e, t) {
      return ((e << 4) | t) & 255;
    }
    function k(e, t) {
      for (var n = [], r = 0; r < e.length; r++) r !== t && n.push(e[r]);
      return n;
    }
    function I(e, t) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.sign(o("WASignalOther").HMAC_SHA256, e, t);
    }
    function T(t) {
      return (e || (e = n("Promise")))
        .all([
          o("WASignalOther").makeCryptoKey(t.cipherKey, "aes-cbc"),
          o("WASignalOther").makeCryptoKey(t.macKey, "hmac-sha256"),
        ])
        .then(function (e) {
          var t = e[0],
            n = e[1];
          return { cipherKey: t, macKey: n };
        });
    }
    function D(e, t) {
      var n = e.aliceBaseKey;
      return n ? o("WACryptoUtils").serializedPubKeysEqual(n, t) : !1;
    }
    ((l.MAX_UNUSED_KEYS = c),
      (l.encryptMsg = d),
      (l.decryptMsg = p),
      (l.findMatchingSession = f),
      (l.decryptPkMsgWithNewSession = g),
      (l.deserializeMsg = y),
      (l.deserializePkMsg = C),
      (l.decryptMsgFromSession = b),
      (l.readContent = L),
      (l.versionByte = E));
  },
  98,
);
