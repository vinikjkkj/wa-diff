__d(
  "WASignalGroupCipher",
  [
    "WABinary",
    "WACryptoDependencies",
    "WACryptoLibraryConfig",
    "WALogger",
    "WAResultOrError",
    "WASignalCipher",
    "WASignalGroupSession",
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
      s = 64;
    function u(e, t) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = g(e);
          if (!n.success) return n;
          var r = n.value,
            a = r.chainKey,
            i = r.iteration,
            l = r.senderKeyId,
            s = r.signingKeyPublic,
            u = yield o("WASignalWhitepaper").initiateSenderKeySessionIncoming(
              l,
              i,
              s,
              a,
              t,
            );
          return o("WAResultOrError").makeResult(u);
        })),
        c.apply(this, arguments)
      );
    }
    function d(e) {
      var t = o("WASignalGroupSession").serializeSenderKeyState(e),
        n = new (o("WABinary").Binary)();
      return (
        n.writeUint8(
          o("WASignalCipher").versionByte(
            o("WASignalGroupSession").FORMAT_VERSION,
            o("WASignalGroupSession").FORMAT_VERSION,
          ),
        ),
        o("encodeProtobuf").encodeProtobuf(
          o("WASignalWhisperTextProtocol.pb").SenderKeyDistributionMessageSpec,
          {
            id: t.senderKeyId,
            iteration: o("WASignalSessions").definedOrThrow(
              t.senderChainKey,
              "senderChainKey",
            ).iteration,
            chainKey: o("WASignalSessions").definedOrThrow(
              t.senderChainKey,
              "senderChainKey",
            ).seed,
            signingKey: o("WASignalSessions").definedOrThrow(
              t.senderSigningKey,
              "senderSigningKey",
            ).public,
          },
          n,
        ),
        n.readByteArrayView()
      );
    }
    function m(e, t) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          if (!e.senderKeyStates || e.senderKeyStates.length === 0)
            return o("WAResultOrError").makeError("errSignalNoSession");
          var n = e.senderKeyStates[e.senderKeyStates.length - 1],
            r = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(
              n.senderKeyChainKey.nextMsgIndex,
              n.senderKeyChainKey.chainKey,
            ),
            a = r[0],
            i = r[1],
            l = yield y(i.seed),
            s = l[0],
            u = l[1],
            c = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.encrypt({ name: "AES-CBC", iv: u }, s, t),
            d = new (o("WABinary").Binary)();
          o("encodeProtobuf").encodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").SenderKeyMessageSpec,
            { id: n.senderKeyId, iteration: i.iteration, ciphertext: c },
            d,
          );
          var m = new (o("WABinary").Binary)();
          (m.writeUint8(
            o("WASignalCipher").versionByte(
              o("WASignalGroupSession").FORMAT_VERSION,
              o("WASignalGroupSession").FORMAT_VERSION,
            ),
          ),
            m.writeBinary(d));
          var p = o("WASignalKeys").makeKeyPairFromSerialized(
              o("WASignalSessions").definedOrThrow(
                n.senderSigningKeyPrivate,
                "senderSigningKeyPrivate",
              ),
              n.senderSigningKeyPublic,
            ),
            _ = o("WASignalSignatures").signSenderKeyMessage(
              p,
              m.readByteArrayView(),
            ),
            f = new (o("WABinary").Binary)();
          (f.writeUint8(
            o("WASignalCipher").versionByte(
              o("WASignalGroupSession").FORMAT_VERSION,
              o("WASignalGroupSession").FORMAT_VERSION,
            ),
          ),
            f.writeBinary(d),
            f.writeByteArray(_));
          var g = o("WASignalGroupSession").makeSenderKeyChainKey(
              i.iteration + 1,
              a,
            ),
            h = o(
              "WASignalGroupSession",
            ).updateSessionWithUpdatedSenderKeyState(
              e,
              o("WASignalGroupSession").makeSenderKeyState(
                n.senderSigningKeyPublic,
                n.senderSigningKeyPrivate,
                g,
                n.senderKeyId,
                n.unusedMsgKeys,
              ),
            );
          return o("WAResultOrError").makeResult([h, f.readByteArrayView()]);
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
          var n = t.ciphertext,
            r = t.iteration,
            a = t.senderKeyMessageId,
            i = t.versionContentMac,
            l = o("WASignalGroupSession").findSenderKeyState(e, a);
          if (l == null)
            return o("WAResultOrError").makeError("errSignalNoSession");
          var s = l.senderSigningKeyPublic,
            u = b(i, s);
          if (!u) return o("WAResultOrError").makeError("errSignalInvalidKey");
          var c = yield v(l, r);
          if (!c.success) return c;
          var d = c.value,
            m = d.msgKey,
            p = o(
              "WASignalGroupSession",
            ).updateSessionWithUpdatedSenderKeyState(
              e,
              d.updatedSenderKeyState,
            ),
            _ = yield y(m.seed),
            f = _[0],
            g = _[1],
            h = yield o("WACryptoDependencies")
              .getCrypto()
              .subtle.decrypt({ name: "AES-CBC", iv: g }, f, n);
          return o("WAResultOrError").makeResult([p, h]);
        })),
        f.apply(this, arguments)
      );
    }
    function g(e) {
      var t, n, r, a, i;
      try {
        if (
          ((i = o("WASignalCipher").readContent(
            e,
            o("WASignalGroupSession").FORMAT_VERSION,
            0,
          )),
          !i.success)
        )
          return i;
        var l = o("decodeProtobuf").decodeProtobuf(
          o("WASignalWhisperTextProtocol.pb").SenderKeyDistributionMessageSpec,
          i.value,
        );
        ((t = l.id), (n = l.iteration));
        var s = o("WASignalSessions").bytesOrThrow(
          l.signingKey,
          33,
          "signingKey",
        );
        if (
          ((r = o("WASignalKeys").castToSerializedPubKey(s)),
          (a = o("WASignalSessions").bytesOrThrow(l.chainKey, 32, "chainKey")),
          t == null || n == null)
        )
          return o("WAResultOrError").makeError(
            "errSignalGrpInvalidProtoFormat",
          );
      } catch (e) {
        return o("WAResultOrError").makeError("errSignalGrpInvalidKeyFormat");
      }
      return o("WAResultOrError").makeResult({
        senderKeyId: t,
        iteration: n,
        signingKeyPublic: r,
        chainKey: a,
      });
    }
    function h(t) {
      if (t.length < 1)
        return o("WAResultOrError").makeError(
          "errSignalGrpVersionContentEmpty",
        );
      var n = t[0] >>> 4;
      if (n !== o("WASignalGroupSession").FORMAT_VERSION)
        return n < o("WASignalGroupSession").FORMAT_VERSION
          ? o("WAResultOrError").makeError("errSignalLegacyMsg")
          : o("WAResultOrError").makeError("errSignalInvalidVersion");
      if (t.length < 1 + s)
        return o("WAResultOrError").makeError(
          "errSignalGrpInvalidVersionContentLength",
        );
      var r, a, i;
      try {
        var l = t.subarray(1, -s),
          u = o("decodeProtobuf").decodeProtobuf(
            o("WASignalWhisperTextProtocol.pb").SenderKeyMessageSpec,
            l,
          );
        if (
          ((r = u.id),
          (a = u.iteration),
          (i = u.ciphertext),
          r == null || a == null || i == null)
        )
          return o("WAResultOrError").makeError(
            "errSignalGrpSenderKeyInvalidProtoFormat",
          );
      } catch (t) {
        return (
          o("WALogger").ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "Exception caught during SenderKeyMessageSpec Proto: ",
                "",
              ])),
            t,
          ),
          o("WAResultOrError").makeError("errSignalGrpSenderKeyProtoError")
        );
      }
      return o("WAResultOrError").makeResult({
        senderKeyMessageId: r,
        iteration: a,
        ciphertext: new Uint8Array(i),
        versionContentMac: t,
      });
    }
    function y(e) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = new (o("WABinary").Binary)(e),
            n = o("WASignalOther").readBytes(t, 16),
            r = o("WASignalOther").readBytes(t, 32);
          return [yield o("WASignalOther").makeCryptoKey(r, "aes-cbc"), n];
        })),
        C.apply(this, arguments)
      );
    }
    function b(e, t) {
      var n = e.subarray(e.length - s),
        r = e.subarray(0, e.length - s);
      return o("WASignalSignatures").verifyMsgSignalVariant(
        t,
        r,
        o("WASignalOther").toBytes(o("WASignalOther").toBuffer(n), 64),
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = e,
            r = t - n.senderKeyChainKey.nextMsgIndex,
            a = o("WACryptoLibraryConfig").getCryptoLibraryConfig()
              .signalFutureMessagesMax;
          if (r > a)
            return o("WAResultOrError").makeError(
              "errSignalGrpTooManyMessagesInFuture",
            );
          var i = e.unusedMsgKeys || [];
          if (r < 0) {
            var l = i.findIndex(function (e) {
              return e.iteration === t;
            });
            return l === -1
              ? o("WAResultOrError").makeError("errDuplicateMsg")
              : o("WAResultOrError").makeResult({
                  msgKey: i[l],
                  updatedSenderKeyState: o(
                    "WASignalGroupSession",
                  ).makeSenderKeyState(
                    n.senderSigningKeyPublic,
                    n.senderSigningKeyPrivate,
                    n.senderKeyChainKey,
                    n.senderKeyId,
                    R(i, l),
                  ),
                });
          }
          var s = n.senderKeyChainKey.nextMsgIndex,
            u = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(
              s,
              n.senderKeyChainKey.chainKey,
            ),
            c = u[0],
            d = u[1],
            m = null;
          if (r > 0) {
            var p = r + i.length - o("WASignalCipher").MAX_UNUSED_KEYS;
            p > 0 ? ((m = i.slice(p)), (p -= i.length)) : (m = i.slice());
            for (var _ = s + 1; _ <= t; _++) {
              p > 0 ? p-- : m.push(d);
              var f = yield o("WASignalWhitepaper").deriveSenderKeyMsgKey(_, c);
              ((c = f[0]), (d = f[1]));
            }
          }
          return o("WAResultOrError").makeResult({
            msgKey: d,
            updatedSenderKeyState: o("WASignalGroupSession").makeSenderKeyState(
              n.senderSigningKeyPublic,
              n.senderSigningKeyPrivate,
              o("WASignalGroupSession").makeSenderKeyChainKey(t + 1, c),
              e.senderKeyId,
              m || i,
            ),
          });
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t) {
      for (var n = [], r = 0; r < e.length; r++) r !== t && n.push(e[r]);
      return n;
    }
    ((l.processSenderKeyDistributionMsg = u),
      (l.createSenderKeyDistributionProto = d),
      (l.encryptSenderKeyMsgWithSession = m),
      (l.decryptSenderKeyMsgFromSession = _),
      (l.deserializeSenderKeyMsg = h));
  },
  98,
);
