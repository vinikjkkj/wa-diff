__d(
  "WASignalWhitepaper",
  [
    "WABinary",
    "WACryptoDependencies",
    "WASignalGroupSession",
    "WASignalKeys",
    "WASignalOther",
    "WASignalSessions",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array(32);
    e.fill(255);
    var s = new Uint8Array([1]),
      u = new Uint8Array([2]);
    async function c(t, n, r) {
      var a,
        i = t.regId,
        l = t.staticKeyPair,
        s = n.identity,
        u = n.signedKey.publicKey,
        c = r.privateKey,
        d = l.privateKey,
        m = (a = n.oneTimeKey) == null ? void 0 : a.publicKey,
        p = o("WABinary")
          .Binary.build(e, y(d, u), y(c, s), y(c, u), m && y(c, m))
          .readByteArrayView(),
        _ = await h(p, "WhisperText"),
        f = _[0],
        C = _[1],
        b = n.ratchetKey,
        v = o("WASignalSessions").makeFreshRecvChain(b, C),
        S = o("WASignalKeys").makeSerializedKeyPair(),
        R = await g(f, S, b),
        L = o("WASignalSessions").makeInitialExchangeInfo(
          n.oneTimeKey == null ? null : n.oneTimeKey.id,
          n.signedKey.id,
          o("WASignalKeys").serializePubKey(r),
        );
      return o("WASignalSessions").makeFreshSession(
        { regId: i, pubKey: o("WASignalKeys").serializePubKey(l) },
        { regId: n.regId, pubKey: s },
        R.rootKey,
        [v],
        o("WASignalSessions").makeFreshSendChain(S, R.chainKey),
        L,
        o("WASignalKeys").serializePubKey(r),
      );
    }
    async function d(t, n, r, a) {
      var i,
        l = t.regId,
        s = t.staticKeyPair,
        u = s.privateKey,
        c = a.signed.privateKey,
        d = r,
        m = n.pubKey,
        p = (i = a.oneTime) == null ? void 0 : i.privateKey,
        _ = o("WABinary")
          .Binary.build(e, C(m, c), C(d, u), C(d, c), p && C(d, p))
          .readByteArrayView(),
        f = await h(_, "WhisperText"),
        g = f[0],
        y = f[1],
        b = a.ratchet,
        v = o("WASignalSessions").makeFreshSendChain(b, y);
      return o("WASignalSessions").makeSession(
        { regId: l, pubKey: o("WASignalKeys").serializePubKey(s) },
        n,
        g,
        [],
        v,
        null,
        0,
        [],
        r,
      );
    }
    function m(e) {
      var t = o("WASignalGroupSession").makeSenderKeyState(
        o("WASignalKeys").serializePubKey(e),
        e.privateKey,
        o("WASignalGroupSession").makeSenderKeyChainKey(
          0,
          o("WASignalKeys").makeRawSenderKey(),
        ),
        o("WASignalOther").makeSenderKeyId(),
        [],
      );
      return Promise.resolve(
        o("WASignalGroupSession").makeNewSenderKeySession(t),
      );
    }
    function p(e, t, n, r, a) {
      var i = o("WASignalGroupSession").makeSenderKeyState(
          n,
          void 0,
          o("WASignalGroupSession").makeSenderKeyChainKey(t, r),
          e,
          [],
        ),
        l = null;
      return (
        a
          ? (l = o("WASignalGroupSession").updateSessionWithNewSenderKeyState(
              a,
              i,
            ))
          : (l = o("WASignalGroupSession").makeNewSenderKeySession(i)),
        Promise.resolve(l)
      );
    }
    async function _(e, t) {
      var n = await o("WASignalOther").makeCryptoKey(t, "hmac-sha256"),
        r = function (t) {
          return o("WACryptoDependencies")
            .getCrypto()
            .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, t);
        },
        a = r(s)
          .then(function (e) {
            return o("WASignalOther").hkdf(
              new Uint8Array(e),
              null,
              "WhisperMessageKeys",
              80,
            );
          })
          .then(function (t) {
            return o("WASignalSessions").splitMsgKey(e, t);
          }),
        i = r(u).then(function (e) {
          return o("WASignalOther").toBytes(e, 32);
        });
      return Promise.all([i, a]);
    }
    async function f(e, t) {
      var n = await o("WASignalOther").makeCryptoKey(t, "hmac-sha256"),
        r = function (t) {
          return o("WACryptoDependencies")
            .getCrypto()
            .subtle.sign({ name: "HMAC", hash: "SHA-256" }, n, t);
        },
        a = r(s)
          .then(function (e) {
            return o("WASignalOther").hkdf(
              new Uint8Array(e),
              null,
              "WhisperGroup",
              50,
            );
          })
          .then(function (t) {
            return o("WASignalGroupSession").makeSenderKeyMsgKey(e, t);
          }),
        i = r(u).then(function (e) {
          return o("WASignalOther").toBytes(e, 32);
        });
      return Promise.all([i, a]);
    }
    async function g(e, t, n) {
      var r = t.privateKey,
        a = n,
        i = o("WASignalKeys").ecdh(r, a),
        l = await h(new Uint8Array(i), "WhisperRatchet", e),
        s = l[0],
        u = l[1];
      return { rootKey: s, chainKey: u };
    }
    async function h(e, t, n) {
      n === void 0 && (n = null);
      var r = await o("WASignalOther").hkdf(e, n, t, 64);
      return [
        o("WASignalOther").sliceBytes(r, 0, 32),
        o("WASignalOther").sliceBytes(r, 32, 32),
      ];
    }
    function y(e, t) {
      return new Uint8Array(o("WASignalKeys").ecdh(e, t));
    }
    function C(e, t) {
      return y(t, e);
    }
    ((l.initiateSessionOutgoing = c),
      (l.initiateSessionIncoming = d),
      (l.initiateSenderKeySessionOutgoing = m),
      (l.initiateSenderKeySessionIncoming = p),
      (l.deriveMsgKey = _),
      (l.deriveSenderKeyMsgKey = f),
      (l.calculateRatchet = g));
  },
  98,
);
