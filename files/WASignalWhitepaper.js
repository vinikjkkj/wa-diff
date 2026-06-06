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
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r,
            a = e.regId,
            i = e.staticKeyPair,
            l = t.identity,
            u = t.signedKey.publicKey,
            c = n.privateKey,
            d = i.privateKey,
            m = (r = t.oneTimeKey) == null ? void 0 : r.publicKey,
            p = o("WABinary")
              .Binary.build(s, E(d, u), E(c, l), E(c, u), m && E(c, m))
              .readByteArrayView(),
            _ = yield R(p, "WhisperText"),
            f = _[0],
            g = _[1],
            h = t.ratchetKey,
            y = o("WASignalSessions").makeFreshRecvChain(h, g),
            C = o("WASignalKeys").makeSerializedKeyPair(),
            b = yield v(f, C, h),
            S = o("WASignalSessions").makeInitialExchangeInfo(
              t.oneTimeKey == null ? null : t.oneTimeKey.id,
              t.signedKey.id,
              o("WASignalKeys").serializePubKey(n),
            );
          return o("WASignalSessions").makeFreshSession(
            { regId: a, pubKey: o("WASignalKeys").serializePubKey(i) },
            { regId: t.regId, pubKey: l },
            b.rootKey,
            [y],
            o("WASignalSessions").makeFreshSendChain(C, b.chainKey),
            S,
            o("WASignalKeys").serializePubKey(n),
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
          function* (e, t, n, r) {
            var a,
              i = e.regId,
              l = e.staticKeyPair,
              u = l.privateKey,
              c = r.signed.privateKey,
              d = n,
              m = t.pubKey,
              p = (a = r.oneTime) == null ? void 0 : a.privateKey,
              _ = o("WABinary")
                .Binary.build(s, k(m, c), k(d, u), k(d, c), p && k(d, p))
                .readByteArrayView(),
              f = yield R(_, "WhisperText"),
              g = f[0],
              h = f[1],
              y = r.ratchet,
              C = o("WASignalSessions").makeFreshSendChain(y, h);
            return o("WASignalSessions").makeSession(
              { regId: i, pubKey: o("WASignalKeys").serializePubKey(l) },
              t,
              g,
              [],
              C,
              null,
              0,
              [],
              n,
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
          var r = t.privateKey,
            a = n,
            i = o("WASignalKeys").ecdh(r, a),
            l = yield R(new Uint8Array(i), "WhisperRatchet", e),
            s = l[0],
            u = l[1];
          return { rootKey: s, chainKey: u };
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
