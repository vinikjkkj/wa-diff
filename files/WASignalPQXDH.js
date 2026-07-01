__d(
  "WASignalPQXDH",
  [
    "WABinary",
    "WAKemModule",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalWhitepaper",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array(32);
    e.fill(255);
    var s = "WhisperText_X25519_SHA-256_CRYSTALS-KYBER-1024";
    function u(e, t, n, r, o) {
      return c.apply(this, arguments);
    }
    function c() {
      return (
        (c = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i) {
            var l,
              s = t.regId,
              u = t.staticKeyPair,
              c = n.identity,
              d = n.signedKey.publicKey,
              m = r.privateKey,
              _ = u.privateKey,
              g = (l = n.oneTimeKey) == null ? void 0 : l.publicKey,
              h = yield o("WAKemModule").encapsulate(a),
              y = h.ciphertext,
              C = h.sharedSecret,
              b = o("WABinary")
                .Binary.build(e, p(_, d), p(m, c), p(m, d), g && p(m, g), C)
                .readByteArrayView(),
              v = yield f(b),
              S = v[0],
              R = v[1],
              L = n.ratchetKey,
              E = o("WASignalSessions").makeFreshRecvChain(L, R),
              k = o("WASignalKeys").makeSerializedKeyPair(),
              I = yield o("WASignalWhitepaper").calculateRatchet(S, k, L),
              T = o("WASignalSessions").makeInitialExchangeInfo(
                n.oneTimeKey == null ? null : n.oneTimeKey.id,
                n.signedKey.id,
                o("WASignalKeys").serializePubKey(r),
                i,
                y,
              ),
              D = o("WASignalSessions").makeFreshSession(
                { regId: s, pubKey: o("WASignalKeys").serializePubKey(u) },
                { regId: n.regId, pubKey: c },
                I.rootKey,
                [E],
                o("WASignalSessions").makeFreshSendChain(k, I.chainKey),
                T,
                o("WASignalKeys").serializePubKey(r),
                o("WASignalSessions").PQXDH_FORMAT_VERSION,
              );
            return { session: D, kemCiphertext: y };
          },
        )),
        c.apply(this, arguments)
      );
    }
    function d(e, t, n, r, o, a) {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, n, r, a, i, l) {
            var s,
              u = t.regId,
              c = t.staticKeyPair,
              d = c.privateKey,
              m = a.signed.privateKey,
              p = r,
              g = n.pubKey,
              h = (s = a.oneTime) == null ? void 0 : s.privateKey,
              y = yield o("WAKemModule").decapsulate(l, i),
              C = o("WABinary")
                .Binary.build(e, _(g, m), _(p, d), _(p, m), h && _(p, h), y)
                .readByteArrayView(),
              b = yield f(C),
              v = b[0],
              S = b[1],
              R = a.ratchet,
              L = o("WASignalSessions").makeFreshSendChain(R, S);
            return o("WASignalSessions").makeSession(
              { regId: u, pubKey: o("WASignalKeys").serializePubKey(c) },
              n,
              v,
              [],
              L,
              null,
              0,
              [],
              r,
              o("WASignalSessions").PQXDH_FORMAT_VERSION,
            );
          },
        )),
        m.apply(this, arguments)
      );
    }
    function p(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function _(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(t, e));
    }
    function f(e) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o("WASignalOther").hkdf(e, null, s, 64);
          return [
            o("WASignalOther").sliceBytes(t, 0, 32),
            o("WASignalOther").sliceBytes(t, 32, 32),
          ];
        })),
        g.apply(this, arguments)
      );
    }
    ((l.initiateSessionOutgoingPQ = u), (l.initiateSessionIncomingPQ = d));
  },
  98,
);
