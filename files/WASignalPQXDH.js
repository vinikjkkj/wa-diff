__d(
  "WASignalPQXDH",
  [
    "WABinary",
    "WAKemModule",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
    "WASignalWhitepaper",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array(32);
    e.fill(255);
    var s = "WhisperText_X25519_SHA-256_CRYSTALS-KYBER-1024";
    async function u(t, n, r, a, i) {
      var l,
        s = t.regId,
        u = t.staticKeyPair,
        c = n.identity,
        m = n.signedKey.publicKey,
        _ = r.privateKey,
        f = u.privateKey,
        g = (l = n.oneTimeKey) == null ? void 0 : l.publicKey,
        h = await o("WAKemModule").encapsulate(a),
        y = h.ciphertext,
        C = h.sharedSecret,
        b = o("WABinary")
          .Binary.build(e, d(f, m), d(_, c), d(_, m), g && d(_, g), C)
          .readByteArrayView(),
        v = await p(b),
        S = v[0],
        R = v[1],
        L = n.ratchetKey,
        E = o("WASignalSessions").makeFreshRecvChain(L, R),
        k = o("WASignalKeys").makeSerializedKeyPair(),
        I = await o("WASignalWhitepaper").calculateRatchet(S, k, L),
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
    }
    async function c(t, n, r, a, i, l) {
      var s,
        u = t.regId,
        c = t.staticKeyPair,
        d = c.privateKey,
        _ = a.signed.privateKey,
        f = r,
        g = n.pubKey,
        h = (s = a.oneTime) == null ? void 0 : s.privateKey,
        y = await o("WAKemModule").decapsulate(l, i),
        C = o("WABinary")
          .Binary.build(e, m(g, _), m(f, d), m(f, _), h && m(f, h), y)
          .readByteArrayView(),
        b = await p(C),
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
    }
    function d(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function m(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(t, e));
    }
    async function p(e) {
      var t = await o("WASignalOther").hkdf(e, null, s, 64);
      return [
        o("WASignalOther").sliceBytes(t, 0, 32),
        o("WASignalOther").sliceBytes(t, 32, 32),
      ];
    }
    ((l.initiateSessionOutgoingPQ = u), (l.initiateSessionIncomingPQ = c));
  },
  98,
);
