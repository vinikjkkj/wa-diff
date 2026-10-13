__d(
  "WASignalWhitepaper",
  [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "asyncToGeneratorRuntime",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Uint8Array(32);
    s.fill(255);
    var u = new Uint8Array([1]),
      c = new Uint8Array([2]);
    function d(e, t, n) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l,
            u = t.regId,
            c = t.staticKeyPair,
            d = a.identity,
            m = a.signedKey.publicKey,
            p = i.privateKey,
            _ = c.privateKey,
            f = (l = a.oneTimeKey) == null ? void 0 : l.publicKey,
            g = r("gkx")("7643")
              ? o("WABinary")
                  .Binary.build.apply(
                    o("WABinary").Binary,
                    [s].concat(
                      yield (e || (e = n("Promise"))).all([
                        o("WASignalKeys").ecdhAsync(_, m),
                        o("WASignalKeys").ecdhAsync(p, d),
                        o("WASignalKeys").ecdhAsync(p, m),
                        f && o("WASignalKeys").ecdhAsync(p, f),
                      ]),
                    ),
                  )
                  .readByteArrayView()
              : o("WABinary")
                  .Binary.build(s, E(_, m), E(p, d), E(p, m), f && E(p, f))
                  .readByteArrayView(),
            h = yield R(g, "WhisperText"),
            y = h[0],
            C = h[1],
            b = a.ratchetKey,
            S = o("WASignalSessions").makeFreshRecvChain(b, C),
            L = r("gkx")("7643")
              ? yield o("WASignalKeys").makeSerializedKeyPairAsync()
              : o("WASignalKeys").makeSerializedKeyPair(),
            k = yield v(y, L, b),
            I = o("WASignalSessions").makeInitialExchangeInfo(
              a.oneTimeKey == null ? null : a.oneTimeKey.id,
              a.signedKey.id,
              o("WASignalKeys").serializePubKey(i),
            );
          return o("WASignalSessions").makeFreshSession(
            { regId: u, pubKey: o("WASignalKeys").serializePubKey(c) },
            { regId: a.regId, pubKey: d },
            k.rootKey,
            [S],
            o("WASignalSessions").makeFreshSendChain(L, k.chainKey),
            I,
            o("WASignalKeys").serializePubKey(i),
          );
        })),
        m.apply(this, arguments)
      );
    }
    function p(e, t, n, r) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l) {
            var u,
              c = t.regId,
              d = t.staticKeyPair,
              m = d.privateKey,
              p = l.signed.privateKey,
              _ = i,
              f = a.pubKey,
              g = (u = l.oneTime) == null ? void 0 : u.privateKey,
              h = r("gkx")("7643")
                ? o("WABinary")
                    .Binary.build.apply(
                      o("WABinary").Binary,
                      [s].concat(
                        yield (e || (e = n("Promise"))).all([
                          o("WASignalKeys").ecdhAsync(p, f),
                          o("WASignalKeys").ecdhAsync(m, _),
                          o("WASignalKeys").ecdhAsync(p, _),
                          g && o("WASignalKeys").ecdhAsync(g, _),
                        ]),
                      ),
                    )
                    .readByteArrayView()
                : o("WABinary")
                    .Binary.build(s, k(f, p), k(_, m), k(_, p), g && k(_, g))
                    .readByteArrayView(),
              y = yield R(h, "WhisperText"),
              C = y[0],
              b = y[1],
              v = l.ratchet,
              S = o("WASignalSessions").makeFreshSendChain(v, b);
            return o("WASignalSessions").makeSession(
              { regId: c, pubKey: o("WASignalKeys").serializePubKey(d) },
              a,
              C,
              [],
              S,
              null,
              0,
              [],
              i,
            );
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f(t) {
      var r = o("WASignalGroupSession").makeSenderKeyState(
        o("WASignalKeys").serializePubKey(t),
        t.privateKey,
        o("WASignalGroupSession").makeSenderKeyChainKey(
          0,
          o("WASignalKeys").makeRawSenderKey(),
        ),
        o("WASignalOther").makeSenderKeyId(),
        [],
      );
      return (e || (e = n("Promise"))).resolve(
        o("WASignalGroupSession").makeNewSenderKeySession(r),
      );
    }
    function g(t, r, a, i, l) {
      var s = o("WASignalGroupSession").makeSenderKeyState(
          a,
          void 0,
          o("WASignalGroupSession").makeSenderKeyChainKey(r, i),
          t,
          [],
        ),
        u = null;
      return (
        l
          ? (u = o("WASignalGroupSession").updateSessionWithNewSenderKeyState(
              l,
              s,
            ))
          : (u = o("WASignalGroupSession").makeNewSenderKeySession(s)),
        (e || (e = n("Promise"))).resolve(u)
      );
    }
    function h(e, t) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield o("WASignalOther").makeCryptoKey(r, "hmac-sha256"),
            i = function (t) {
              return o("WACryptoDependencies")
                .getCrypto()
                .subtle.sign({ name: "HMAC", hash: "SHA-256" }, a, t);
            },
            l = i(u)
              .then(function (e) {
                return o("WASignalOther").hkdf(
                  new Uint8Array(e),
                  null,
                  "WhisperMessageKeys",
                  80,
                );
              })
              .then(function (e) {
                return o("WASignalSessions").splitMsgKey(t, e);
              }),
            s = i(c).then(function (e) {
              return o("WASignalOther").toBytes(e, 32);
            });
          return (e || (e = n("Promise"))).all([s, l]);
        })),
        y.apply(this, arguments)
      );
    }
    function C(e, t) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield o("WASignalOther").makeCryptoKey(r, "hmac-sha256"),
            i = function (t) {
              return o("WACryptoDependencies")
                .getCrypto()
                .subtle.sign({ name: "HMAC", hash: "SHA-256" }, a, t);
            },
            l = i(u)
              .then(function (e) {
                return o("WASignalOther").hkdf(
                  new Uint8Array(e),
                  null,
                  "WhisperGroup",
                  50,
                );
              })
              .then(function (e) {
                return o("WASignalGroupSession").makeSenderKeyMsgKey(t, e);
              }),
            s = i(c).then(function (e) {
              return o("WASignalOther").toBytes(e, 32);
            });
          return (e || (e = n("Promise"))).all([s, l]);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var a = t.privateKey,
            i = n,
            l = r("gkx")("7643")
              ? yield o("WASignalKeys").ecdhAsync(a, i)
              : o("WASignalKeys").ecdh(a, i),
            s = yield R(new Uint8Array(l), "WhisperRatchet", e),
            u = s[0],
            c = s[1];
          return { rootKey: u, chainKey: c };
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          n === void 0 && (n = null);
          var r = yield o("WASignalOther").hkdf(e, n, t, 64);
          return [
            o("WASignalOther").sliceBytes(r, 0, 32),
            o("WASignalOther").sliceBytes(r, 32, 32),
          ];
        })),
        L.apply(this, arguments)
      );
    }
    function E(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function k(e, t) {
      return E(t, e);
    }
    ((l.initiateSessionOutgoing = d),
      (l.initiateSessionIncoming = p),
      (l.initiateSenderKeySessionOutgoing = f),
      (l.initiateSenderKeySessionIncoming = g),
      (l.deriveMsgKey = h),
      (l.deriveSenderKeyMsgKey = C),
      (l.calculateRatchet = v));
  },
  98,
);
