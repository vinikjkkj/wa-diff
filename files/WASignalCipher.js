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
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("WASignalPQXDH").__setRef("WASignalCipher"),
      u = 40,
      c = 8,
      d = 2e3;
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n,
            r =
              (n = e.sessionVersion) != null
                ? n
                : o("WASignalSessions").FORMAT_VERSION,
            a = e.sendChain,
            i = yield o("WASignalWhitepaper").deriveMsgKey(
              a.nextMsgIndex,
              a.chainKey,
            ),
            l = i[0],
            s = i[1],
            u = yield D(s),
            d = u.cipherKey,
            m = u.macKey,
            p = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.encrypt({ name: "AES-CBC", iv: s.iv }, d, t),
            _ = new (o("WABinary").Binary)();
          (_.writeByteArray(e.local.pubKey), _.writeByteArray(e.remote.pubKey));
          var f = _.size(),
            g =
              o("WACryptoLibraryConfig").getCryptoLibraryConfig()
                .isPq1on1MessageEnabled === !0;
          (g === !0
            ? _.writeUint8(k(r, r))
            : _.writeUint8(
                k(
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
            y = yield T(m, h),
            C = h.subarray(f),
            b = o("WABinary")
              .Binary.build(C, new Uint8Array(y, 0, c))
              .readByteArrayView(),
            v,
            S,
            R = e.initialExchangeInfo;
          if (R != null) {
            var L,
              E = new (o("WABinary").Binary)(),
              I =
                o("WACryptoLibraryConfig").getCryptoLibraryConfig()
                  .isPq1on1MessageEnabled === !0;
            (I === !0
              ? E.writeUint8(k(r, r))
              : E.writeUint8(
                  k(
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
                  message: b,
                  kyberPreKeyId:
                    I && R.kyberPreKeyId != null ? R.kyberPreKeyId : void 0,
                  kyberCiphertext:
                    I && R.kemCiphertext != null ? R.kemCiphertext : void 0,
                },
                E,
              ),
              (v = "pkmsg"),
              (S = E.readByteArrayView()));
          } else ((v = "msg"), (S = b));
          var x = o("WASignalSessions").makeSendChain(
              a.ratchetKey,
              s.index + 1,
              l,
            ),
            $ = o("WASignalSessions").updateChains(e, e.recvChains, x);
          return [$, { type: v, ciphertext: S }];
        })),
        p.apply(this, arguments)
      );
    }
    function _(e, t) {
      return f.apply(this, arguments);
    }
    function f() {
      return (
        (f = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (e == null)
            return o("WAResultOrError").makeError("errSignalNoSession");
          var n = yield v(e, t);
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
                d = yield v(c, t);
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
        f.apply(this, arguments)
      );
    }
    function g(e, t) {
      if (e == null) return o("WAResultOrError").makeResult(null);
      var n = e;
      if (x(n, t)) return o("WAResultOrError").makeResult(n);
      for (var r = n.prevSessions, a = 0; a < r.length; a++) {
        var i = o("WASignalSessions").parseSession(r[a]);
        if (x(i, t))
          return o("WAResultOrError").makeError("errSignalInvalidMsg");
      }
      return o("WAResultOrError").makeResult(null);
    }
    function h(e, t, n, r) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a,
              i,
              l = r.localSignedPreKey;
            if (l == null)
              return o("WAResultOrError").makeError(
                "errSignalInvalidSignedPreKey",
              );
            var c = o("WASignalSignatures").deserializeSignedPreKey(l);
            if (c == null)
              return o("WAResultOrError").makeError(
                "errSignalSignedPreKeyDeserialization",
              );
            if (c.id !== n.localSignedPreKeyId)
              return o("WAResultOrError").makeError(
                "errSignalSignedPreKeyIdMismatch",
              );
            var d = null;
            if (n.localOneTimeKeyId != null) {
              var m = r.localOneTimeKey;
              if (m == null)
                return o("WAResultOrError").makeError(
                  "errSignalInvalidOneTimeKey",
                );
              if (((d = o("WASignalKeys").deserializePreKey(m)), d == null))
                return o("WAResultOrError").makeError(
                  "errSignalOneTimeKeyDeserialization",
                );
              if (d.id !== n.localOneTimeKeyId)
                return o("WAResultOrError").makeError(
                  "errSignalOneTimeKeyMismatch",
                );
            }
            if (
              !o("WACryptoCurveKeyCanonicalCheck").isCanonical(
                n.sessionBaseKey.subarray(1),
              )
            )
              return o("WAResultOrError").makeError(
                "errSignalBaseKeyIsNotCanonical",
              );
            var p =
                (a = (i = d) == null ? void 0 : i.keyPair) != null ? a : null,
              _ = {
                signed: c.keyPair,
                oneTime: p,
                ratchet: o("WASignalKeys").toSerializedKeyPair(c.keyPair),
              },
              f;
            if (
              n.kyberCiphertext != null &&
              n.kyberPreKeyId != null &&
              r.localKyberPreKey != null
            ) {
              var g = r.localKyberPreKey.secretKey,
                h = n.kyberCiphertext;
              try {
                var y = yield s.load(),
                  C = y.initiateSessionIncomingPQ;
                f = yield C(e, n.remote, n.sessionBaseKey, _, g, h);
              } catch (e) {
                return o("WAResultOrError").makeError(
                  "errSignalPQXDHDecapsulationFailed",
                );
              }
            } else
              f = yield o("WASignalWhitepaper").initiateSessionIncoming(
                e,
                n.remote,
                n.sessionBaseKey,
                _,
              );
            var b = f.remote.pubKey,
              S =
                !t ||
                !o("WACryptoUtils").serializedPubKeysEqual(b, t.remote.pubKey)
                  ? b
                  : null;
            t &&
              !S &&
              (f = o("WASignalSessions").setPrevSessions(
                f,
                [o("WASignalSessions").detachSession(t)].concat(
                  t.prevSessions.slice(0, u - 1),
                ),
              ));
            var R = yield v(f, n);
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
          },
        )),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      var t,
        n,
        r = null;
      try {
        var a = E(
          e,
          o("WASignalSessions").FORMAT_VERSION,
          c,
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
    function b(e) {
      var t = E(
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
          f = c.registrationId,
          g = c.signedPreKeyId;
        if (f == null || g == null || d == null || m == null || p == null)
          return o("WAResultOrError").makeError(
            "errSignalDeserializePkInvalidProtoFormat",
          );
        ((i = o("WASignalKeys").castToSerializedPubKey(new Uint8Array(d))),
          (n = {
            regId: o("WASignalOther").castRegistrationId(f),
            pubKey: o("WASignalKeys").castToSerializedPubKey(new Uint8Array(m)),
          }),
          (a = _ != null ? o("WASignalKeys").castToPreKeyId(_) : null),
          (r = o("WASignalKeys").castToSignedPreKeyId(g)),
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
      var h = C(l);
      return h.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, h.value, {
              remote: n,
              sessionBaseKey: i,
              localSignedPreKeyId: r,
              localOneTimeKeyId: a,
              kyberPreKeyId: s,
              kyberCiphertext: u,
            }),
          )
        : h;
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
            u,
            d;
          if (s === -1) {
            var m = yield o("WASignalWhitepaper").calculateRatchet(
                e.rootKey,
                e.sendChain.ratchetKey,
                a,
              ),
              p = o("WASignalSessions").makeFreshRecvChain(a, m.chainKey),
              _ = yield R(p, r);
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
              (u = o("WASignalSessions").ratchetSession(
                e,
                y,
                o("WASignalSessions").makeFreshSendChain(g, h.chainKey),
                h.rootKey,
              )));
          } else {
            var C = yield R(l[s], r);
            if (!C.success) return C;
            var b = C.value,
              v = l.slice();
            ((v[s] = b.updatedChain),
              (d = b.msgKey),
              (u = o("WASignalSessions").updateChains(e, v, e.sendChain)));
          }
          var S = yield D(d),
            L = S.cipherKey,
            E = S.macKey,
            k = o("WABinary")
              .Binary.build(e.remote.pubKey, e.local.pubKey, i.subarray(0, -c))
              .readByteArrayView(),
            I = yield T(E, k),
            x = i.subarray(-c),
            $ = !o("WACryptoUtils").uint8ArraysEqual(
              new Uint8Array(I, 0, c),
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
                : o("WAResultOrError").makeResult([u, P]);
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                    I(a, i),
                  ),
                });
          }
          var l = e.nextMsgIndex,
            s = yield o("WASignalWhitepaper").deriveMsgKey(l, e.chainKey),
            u = s[0],
            c = s[1],
            m = null;
          if (n > 0) {
            var p = n + a.length - d;
            p > 0 ? ((m = a.slice(p)), (p -= a.length)) : (m = a.slice());
            for (var _ = l + 1; _ <= t; _++) {
              p > 0 ? p-- : m.push(c);
              var f = yield o("WASignalWhitepaper").deriveMsgKey(_, u);
              ((u = f[0]), (c = f[1]));
            }
          }
          return o("WAResultOrError").makeResult({
            msgKey: c,
            updatedChain: o("WASignalSessions").makeRecvChain(
              e.ratchetPubKey,
              t + 1,
              u,
              m || a,
            ),
          });
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t, n, r) {
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
    function k(e, t) {
      return ((e << 4) | t) & 255;
    }
    function I(e, t) {
      for (var n = [], r = 0; r < e.length; r++) r !== t && n.push(e[r]);
      return n;
    }
    function T(e, t) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.sign(o("WASignalOther").HMAC_SHA256, e, t);
    }
    function D(t) {
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
    function x(e, t) {
      var n = e.aliceBaseKey;
      return n ? o("WACryptoUtils").serializedPubKeysEqual(n, t) : !1;
    }
    ((l.MAX_UNUSED_KEYS = d),
      (l.encryptMsg = m),
      (l.decryptMsg = _),
      (l.findMatchingSession = g),
      (l.decryptPkMsgWithNewSession = h),
      (l.deserializeMsg = C),
      (l.deserializePkMsg = b),
      (l.decryptMsgFromSession = v),
      (l.readContent = E),
      (l.versionByte = k));
  },
  98,
);
